package com.dao;

import java.net.UnknownHostException;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoException;

import java.util.*;

import com.model.Equipo;

public class TeamMongoDAO {

    private DBCollection teams = null;
    private DB db = null;
    private MongoClient mongo = null;

    public void open() {
        try {
            this.mongo = new MongoClient("localhost", 27017);
            this.db = mongo.getDB("TabulaRassaDB");
            this.teams = db.getCollection("teams");
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

    public List<Equipo> findAllTeams() {
        if (this.teams == null) {
        }

        DBCursor cursor = this.teams.find();
        List<Equipo> eqs = new ArrayList<Equipo>();
        while (cursor.hasNext()) {
            DBObject obj = cursor.next();
            Equipo team = new Equipo();
            team.setId(obj.get("_id").toString());
            team.setName(obj.get("nombre").toString());
            team.setWin(Integer.parseInt(obj.get("win").toString()));
            team.setLose(Integer.parseInt(obj.get("lose").toString()));
            team.setTie(Integer.parseInt(obj.get("tie").toString()));
            team.setFav(Integer.parseInt(obj.get("fav").toString()));
            team.setCon(Integer.parseInt(obj.get("con").toString()));
            eqs.add(team);
        }
        return eqs;
    }

    public void updateTeam(String nom, String win, String tie, String los, String fav, String con) {
        int w = Integer.parseInt(win);
        int t = Integer.parseInt(tie);
        int l = Integer.parseInt(los);
        int f = Integer.parseInt(fav);
        int c = Integer.parseInt(con);
	String keys[] = {"win","tie","lose","fav","con"}; 
	int values[] = {w,t,l,f,c};
	BasicDBObject searchQuery = new BasicDBObject("nombre", nom);
	for(int i=0; i<5;i++){
		BasicDBObject update = new BasicDBObject("$set", new BasicDBObject(keys[i], values[i]));
		teams.update(searchQuery, update, true, false);
	}
    }
}

