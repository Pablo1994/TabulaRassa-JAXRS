 /*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.superbiz.rest;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;

import com.model.Equipo;
import com.model.Camp;
import com.dao.*;

@Path("/update")
public class UpdateService {

    private TeamMongoDAO teamDAO = new TeamMongoDAO();
    
    @POST
    @Path("/equipo/{nombre}/w/{win}/t/{tie}/l/{lost}/f/{fav}/c/{con}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Equipo> updateTeam(@PathParam(value="nombre") String nom,@PathParam(value="win") String win, @PathParam(value="tie") String tie, @PathParam(value="lost") String lost, @PathParam(value="fav") String fav, @PathParam(value="con") String con) {
	    teamDAO.open();
	    teamDAO.updateTeam(nom, win, tie, lost, fav, con);
            List<Equipo> teams = this.teamDAO.findAllTeams();
            return teams;
    }
}
