// function json(file,callback) {
 	
//  	var xhr=new XMLHttpRequest();
//  	xhr.overrideMimeType("application/json");
//  	xhr.open("GET",file,true);
//  	xhr.onreadystatechange=function(){
//  		if (xhr.readyState==4 && xhr.status===200) {
//  			callback(xhr.responseText);
//  		}
//  	}
//  	xhr.send(null);
// }
// json("data.json",function(text){
// 	let d=JSON.parse(text);
// 	console.log(d);
// 	basics(d.basicdetails);
// 	edu(d.Education);
// 	techskills(d.skills);
// 	carr(d.carrier);
// 	achev(d.achevements);
// 	des(d.Description);

// })
//Fetch API
fetch("data.json")
.then(function(response){
	return response.json();
})
.then(function(d){
	console.log(d);
 	basics(d.basicdetails);
 	edu(d.Education);
 	techskills(d.skills);
 	carr(d.carrier);
 	achev(d.achevements);
 	des(d.Description);


})
var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);
function basics(b){
	var k=document.createElement("img");
	k.src=b.image;
	k.alt="profile photo";
	l.appendChild(k);
	var nam=document.createElement("h3");
	nam.textContent=b.name;
	l.appendChild(nam);
	var a=document.createElement("h3");
	a.textContent=b.email;
	l.appendChild(a);
	var c=document.createElement("h3");
	c.textContent=b.phone;
	l.appendChild(c);
	var ad=document.createElement("h3");
	ad.textContent=b.address;
	l.appendChild(ad);
}
var r=document.createElement("div");
r.classList.add("right");
main.appendChild(r);

function edu(e)
{
	var e1=document.createElement("div");
	e1.classList.add("educa");
	r.appendChild(e1);
	var head=document.createElement("h2");
	head.textContent="Education";
	e1.appendChild(head);
	head.appendChild(document.createElement("HR"));

for(var i=0; i<e.length; i++)
 {

	var h=document.createElement("h2");
	h.textContent=e[i].course;
	e1.appendChild(h);
	var u=document.createElement("u1");
	e1.appendChild(u);
	var list=document.createElement("li");
	list.textContent=e[i].college;
	u.appendChild(list);
	var list1=document.createElement("li");
	list1.textContent=e[i].percentage;
	list.appendChild(list1);
  }
}



function techskills(s){
	var d=document.createElement("div");
	d.textContent="skills set";	
	r.appendChild(d)
	d.appendChild(document.createElement("HR"));
	var tab=document.createElement("table");
	var row="";
	 for (var i = 0; i < s.length; i++) {
	 	row+="<tr><td>"+ s[i].name+"</td><td>"+ s[i].value+"</td></tr>";
	 }
	 tab.innerHTML=row;
	 d.appendChild(tab);
}
function carr(car){
	var c1=document.createElement("div");
	r.appendChild(c1);
	var g=document.createElement("h2");
	g.textContent="carrier objective";
	c1.appendChild(g);
    g.appendChild(document.createElement("HR"));
	var h=document.createElement("h3");
	h.textContent=car.ca;
	c1.appendChild(h);
	h.setAttribute("id","abc");

}
function achev(acv){
	var b=document.createElement("div");
	r.appendChild(b);
	var h=document.createElement("h2");
	h.textContent="achevements:";
    b.appendChild(h);
    h.appendChild(document.createElement("HR"));
for (i in acv) {
	var u=document.createElement("u1");
	b.appendChild(u);
	var list=document.createElement("li");
	list.textContent=acv[i];
	u.appendChild(list);
	list.setAttribute("id","b");
	}
}
function des(dae){
	var d1=document.createElement("div");
	r.appendChild(d1);
	var b=document.createElement("h2");
	b.textContent="description";
	d1.appendChild(b);
	b.appendChild(document.createElement("HR"));	
	var h=document.createElement("h3");
	h.textContent=dae.da;
	d1.appendChild(h);
	h.setAttribute("id","c");

}




