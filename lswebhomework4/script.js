document.body.style.backgroundColor = "red";

document.getElementById("aboutme").style.backgroundColor="blue";

document.body.style.fontFamily = "sans-serif";

document.getElementById("nickname").innerHTML="Mininny";
document.getElementById("favorites").innerHTML="Programming";
document.getElementById("hometown").innerHTML="Korea";

var list= document.getElementsByTagName("li");
for(i=0; i<list.length;i++)
  list[i].className="listitem";

var classlist= document.querySelectorAll(".listitem");

for(i=0;i<classlist.length;i++)
  classlist[i].style.color="red";

var me = document.createElement('img');
me.src= "pic.png";

document.body.appendChild(me);
