const tl = gsap.timeline();

tl.to(".bar", {

width: "100%",

duration: 2.2,

ease: "power2.inOut"

})

.to("#loadingText", {

text: "Ready",

duration: .3

})

.to("#loader", {

opacity:0,

duration:1

})

.set("#loader",{

display:"none"

})

.to(".landing",{

opacity:1,

duration:1

});

document
.getElementById("start")
.onclick=()=>{

window.location="letter.html";

}
