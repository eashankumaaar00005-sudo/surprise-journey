/* ==========================================
   MAP PAGE
========================================== */

const path = document.querySelector("#journeyPath");

const points = document.querySelectorAll(".point");

const next = document.getElementById("nextBtn");

/* Draw Path */

gsap.to(path,{

    strokeDashoffset:0,

    duration:3,

    ease:"power2.inOut"

});

/* Intro */

gsap.from(".map-container",{

    opacity:0,

    y:60,

    duration:1.2

});

/* Unlock Points */

points.forEach((point,index)=>{

    gsap.from(point,{

        scale:0,

        opacity:0,

        delay:index*.6,

        duration:.6,

        ease:"back.out(1.7)"

    });

});

/* Floating */

points.forEach(point=>{

    gsap.to(point,{

        y:-8,

        repeat:-1,

        yoyo:true,

        duration:2+Math.random(),

        ease:"sine.inOut"

    });

});

/* Active Click */

points.forEach((point,index)=>{

    point.addEventListener("click",()=>{

        points.forEach(p=>p.classList.remove("active"));

        point.classList.add("active");

    });

});

/* Button */

next.addEventListener("click",()=>{

    gsap.timeline()

    .to(".map-container",{

        opacity:0,

        scale:.95,

        duration:.8

    })

    .to("body",{

        opacity:0,

        duration:.5,

        onComplete(){

            window.location.href="vault.html";

        }

    });

});

/* Mouse Glow */

document.addEventListener("mousemove",(e)=>{

    gsap.to(".map",{

        rotationY:(e.clientX/window.innerWidth-.5)*4,

        rotationX:(window.innerHeight/2-e.clientY)/120,

        transformPerspective:1000,

        duration:1

    });

});
