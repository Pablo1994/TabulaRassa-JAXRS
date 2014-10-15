package com.model;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "team")
public class Equipo {

    
    String id;
    String name;
    int win;
    int lose;
    int tie;
    int fav;
    int con;

    public Equipo(){
	id="";
	name="";
	win=0;
	lose=0;
	tie=0;
	fav=0;
	con=0;
    }	

    public Equipo(String id, String name, int win, int lose, int tie, int fav, int con) {
        this.id = id;
        this.name = name;
        this.win = win;
        this.lose = lose;
        this.tie = tie;
        this.fav = fav;
        this.con = con;
    }

    public Equipo(String... parts) {
        if (parts != null && parts.length > 7) {
            id = parts[0];
            name = parts[1];
            win = Integer.parseInt(parts[2]);
	    tie = Integer.parseInt(parts[3]);
            lose = Integer.parseInt(parts[4]);
            fav = Integer.parseInt(parts[5]);
            con = Integer.parseInt(parts[6]);
        } else {
            id = "";
            name = "";
            win = 0;
            lose = 0;
            tie = 0;
            fav = 0;
            con = 0;
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
    
    @XmlElement(name = "win")
    public int getWin() {
        return win;
    }

    public void setWin(int win) {
        this.win = win;
    }

    @XmlElement(name = "lose")
    public int getLose() {
        return lose;
    }

    public void setLose(int lose) {
        this.lose = lose;
    }
	
    @XmlElement(name = "tie")
    public int getTie() {
        return tie;
    }

    public void setTie(int tie) {
        this.tie = tie;
    }
	
    @XmlElement(name = "fav")
    public int getFav() {
        return fav;
    }

    public void setFav(int fav) {
        this.fav = fav;
    }

    @XmlElement(name = "con")
    public int getCon() {
        return con;
    }

    public void setCon(int con) {
        this.con = con;
    }

	@Override
    public String toString() {
        return id + "|" + name;
    }
}

