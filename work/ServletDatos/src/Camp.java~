package com.model;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "camp")
public class Camp {

    
    private String id;
    private String name;
    private int agno;
    private String[] teams;

    public Camp(){
	this.id="";
	this.name="";
	this.agno=0;
	this.teams=null;
    }
    public Camp(String id, String name, int agno, String[] teams) {
        this.id = id;
        this.name = name;
        this.agno = agno;
        this.teams = teams;
    }

    public Camp(String... parts) {
        if (parts != null && parts.length > 7) {
            id = parts[0];
            name = parts[1];
            agno = Integer.parseInt(parts[2]);
	    teams = parts[3].split(", ");
        } else {
            id = "";
            name = "";
            agno = 0;
            teams = null;
        }
    }

    @XmlElement(name = "nombre")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(String id) {
        this.id = id;
    }
    
    @XmlElement(name = "_id")
    public String getId() {
        return id;
    }

    @XmlElement(name = "agno")
    public int getAgno() {
        return agno;
    }

    public void setAgno(int agno) {
        this.agno = agno;
    }
	
    public void setTeams(String[] teams) {
        this.teams = teams;
    }

    @XmlElement(name = "teams")
    public String[] getTeams() {
        return teams;
    }

    @Override
    public String toString() {
        return id + "|" + name;
    }
};

