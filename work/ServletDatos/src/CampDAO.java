package com.dao;

import java.net.UnknownHostException;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.BasicDBList;
import com.mongodb.MongoClient;
import com.mongodb.MongoException;

import java.util.*;

import com.model.Camp;

public class CampDAO {

    private List<Camp> lCamps= new ArrayList<Camp>();

    private DBCollection camps = null;
    private DB db = null;
    private MongoClient mongo = null;

    public void open() {
        try {
            this.mongo = new MongoClient("localhost", 27017);
            this.db = mongo.getDB("TabulaRassaDB");
            this.camps = db.getCollection("campeonatos");
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    public void close() {
        try {
            if (this.mongo != null) {
                this.mongo.close();
            }
        } catch (Exception e) {
            System.out.println(e.toString());
        } finally {
            this.mongo = null;
        }
    }

    public List<Camp> findAllCamps() {
        DBCursor cursor = camps.find();
        List<Camp> cmps = new ArrayList<Camp>();
        while (cursor.hasNext()) {
            DBObject obj = cursor.next();
            Camp cmp = new Camp();
            cmp.setId(obj.get("_id").toString());
            cmp.setName(obj.get("name").toString());
	    cmp.setAgno(Integer.parseInt(obj.get("agno").toString()));
	    String [] equipos= new String [12];
	    int i=0;
	    BasicDBList teams = (BasicDBList) obj.get("teams");
	    for(Object team : teams){
		String teamStringado= String.valueOf(team);
		equipos[i]= teamStringado;
		i++;
	    }
	    cmp.setTeams(equipos);
            cmps.add(cmp);
        }
        return cmps;
    }
}
