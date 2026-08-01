const particles=document.getElementById("particles");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.animationDuration=(4+Math.random()*8)+"s";

star.style.animationDelay=Math.random()*5+"s";

particles.appendChild(star);

}

gsap.from(".hero",{

opacity:0,

scale:.8,

duration:1.2,

ease:"power3.out"

});

gsap.from(".heart",{

scale:0,

duration:1,

delay:.5,

ease:"back.out(1.7)"

});

document.getElementById("replay").onclick=()=>{

location.href="index.html";

};
