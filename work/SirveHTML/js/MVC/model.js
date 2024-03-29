/*
	Realizado por: Juan Pablo Arias Zúñiga <jpaz199448@gmail.com>
*/

// Model
function Model(){
   this.equipos=[];
   this.jornadas=[];
   this.campeonatos=[];
};
/*Model.prototype.valueOf = function(e){
      return this.data[e];
};
Model.prototype.add = function(e, v){
      return this.data[e]=v;
};*/
var sortTeams= (function(){
	function sort(array){	
		var len= array.length,
		    mid    = Math.floor(len * 0.5),
       		    left   = array.slice(0, mid),
   		    right  = array.slice(mid, len);
		if(len === 1) {
	      		return array;
	    	}
	 
	    	return merge(sort(left), sort(right));
 	}
	function merge(left,right){
		var result = [];
		while(left.length || right.length) {
			if(left.length && right.length) {
				if(calculaPuntos(left[0]) === calculaPuntos(right[0])) {
		if(calculaDif(left[0]) > calculaDif(right[0])) {
          				result.push(left.shift());
        			} else {
          				result.push(right.shift());
        			}
	} else
				if(calculaPuntos(left[0]) > calculaPuntos(right[0])) {
          				result.push(left.shift());
        			} else {
          				result.push(right.shift());
        			}
 
				} else if (left.length) {
					result.push(left.shift());
		       	        } else {
					result.push(right.shift());
			        }
 		}
 		return result;
	}
	return {
    		sort: sort
  	};
	function calculaPuntos(cosa){
		var puntos=0;
		puntos= puntos + parseInt(cosa.win)*3+parseInt(cosa.tie)*1;
		return puntos;
	}
	function calculaDif(cosa){
		var dif=0;
		dif= dif + parseInt(cosa.fav)-parseInt(cosa.con);
		return dif;
	}
})();

Model.prototype.updateTeams = function(teams,opc){
     for(t in teams){
		var eqDummy= this.buscaTeams(teams[t]._id);
		if (!(eqDummy)){
			this.equipos.push(teams[t]);
		} else {
			if(eqDummy.win!=teams[t].win||eqDummy.lose!=teams[t].lose||eqDummy.tie!=teams[t].tie){
				this.equipos.splice(t,1,teams[t]);
			}
		}
	}
	setup.triggerRender(opc);
};
Model.prototype.getTeams= function(camp,opc){
	var ch= this.buscaCamps(camp);
	var resp= [];
	for(id in ch.teams){
		for(e in this.equipos){
			if(ch.teams[id]==this.equipos[e]._id){
				resp.push(this.equipos[e]);
			}
		}
	}
	resp= sortTeams.sort(resp);
	var respEsp=[];
	if(opc==="clas"){
		for(var i=0;i<4;i++){
			respEsp[i]=resp[i];
		}
		return respEsp;
	} else 	if(opc==="desc"){
		for(var i=11;i>7;i--){
				respEsp[i]=resp[i];
		}
		return respEsp;
	} else {
	return resp;	}
};
Model.prototype.buscaTeams= function(id){
	if(!this.equipos.length==0){	
	for(e in this.equipos){
		if(this.equipos[e]._id==id){
			return true;
		}
	}
	return false;
	}
	else {
		return false;
	}
};
Model.prototype.buscaTeam= function(nombre){
	if(!this.equipos.length==0){	
	for(e in this.equipos){
		if(this.equipos[e].nombre===nombre){
			return this.equipos[e];
		}
	}
	return false;
	}
	else {
		return false;
	}
};
Model.prototype.updateCamps = function(camps){
     for(t in camps){
		if (!(this.buscaCamps(camps[t]._id))){
			this.campeonatos.push(camps[t]);
		}
	}
};
Model.prototype.getCamps= function(){
	return this.campeonatos;
};
Model.prototype.buscaCamps= function(id){
	if(!this.campeonatos.length==0){	
	for(e in this.campeonatos){
		if(this.campeonatos[e]._id==id){
			return this.campeonatos[e];
		}
	}
	return false;
	}
	else {
		return false;
	}
};
Model.prototype.prepareDataTable=function(which){
	var data;	
	switch(which){
		case "goal":
			var arr= [['Equipo','Goles por partido']];
			for (e in this.equipos){
				var gp= parseInt(this.equipos[e].fav) / (parseInt(this.equipos[e].win)+parseInt(this.equipos[e].lose)+parseInt(this.equipos[e].tie));
				arr.push([this.equipos[e].nombre,gp]);
			}
			data= google.visualization.arrayToDataTable(arr,false);
			break;
		case "goaled":
			var arr= [['Equipo','Goles encajados por partido']];
			for (e in this.equipos){
				var gp= parseInt(this.equipos[e].con) / (parseInt(this.equipos[e].win)+parseInt(this.equipos[e].lose)+parseInt(this.equipos[e].tie));
				arr.push([this.equipos[e].nombre,gp]);
			}
			data= google.visualization.arrayToDataTable(arr,false);
			break;
	}
	setup.triggerRenderChart(data,which);
}
/*
Model.prototype.isNew = function(e){
     return this.data[e];
};
Model.prototype.updateHandler = function(e){
};*/ 
