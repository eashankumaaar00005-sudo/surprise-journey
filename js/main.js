/* ==========================================
   SURPRISE JOURNEY
   main.js
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const fill = document.querySelector(".progress-fill");
    const loadingTitle = document.getElementById("loadingTitle");
    const loadingText = document.getElementById("loadingText");

    const hero = document.querySelector(".hero");
    const glass = document.querySelector(".glass");
    const title = document.querySelector(".glass h1");
    const subtitle = document.querySelector(".glass p");
    const letter = document.getElementById("letter");
    const button = document.getElementById("start");

    // Loader animation
    const tl = gsap.timeline();

    tl.to(fill, {
        width: "35%",
        duration: .8,
        ease: "power2.out"
    })

    .to(loadingText,{
        duration:.1,
        innerHTML:"Loading memories..."
    })

    .to(fill,{
        width:"70%",
        duration:.9,
        ease:"power2.out"
    })

    .to(loadingText,{
        duration:.1,
        innerHTML:"Preparing your surprise..."
    })

    .to(fill,{
        width:"100%",
        duration:.8,
        ease:"power2.out"
    })

    .to(loadingTitle,{
        scale:1.08,
        duration:.3
    })

    .to(loader,{
        opacity:0,
        duration:1,
        ease:"power2.inOut"
    })

    .set(loader,{
        display:"none"
    })

    .from(hero,{
        opacity:0,
        duration:1
    })

    .from(glass,{
        y:80,
        opacity:0,
        duration:1,
        ease:"power3.out"
    })

    .from(title,{
        y:40,
        opacity:0,
        duration:.8
    })

    .from(subtitle,{
        y:25,
        opacity:0,
        duration:.6
    })

    .from(letter,{
        scale:.7,
        opacity:0,
        rotate:-8,
        duration:.8,
        ease:"back.out(1.7)"
    })

    .from(button,{
        y:20,
        opacity:0,
        duration:.5
    });

});


/* ==============================
   Cursor
============================== */

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove",(e)=>{

    gsap.to(cursor,{
        x:e.clientX-9,
        y:e.clientY-9,
        duration:.15,
        ease:"power2.out"
    });

});


/* ==============================
   Floating Letter
============================== */

const envelope = document.getElementById("letter");

gsap.to(envelope,{

    y:-12,

    repeat:-1,

    yoyo:true,

    duration:2,

    ease:"sine.inOut"

});


/* ==============================
   Button Hover
============================== */

const btn=document.getElementById("start");

btn.addEventListener("mouseenter",()=>{

    gsap.to(btn,{
        scale:1.08,
        duration:.25
    });

});

btn.addEventListener("mouseleave",()=>{

    gsap.to(btn,{
        scale:1,
        duration:.25
    });

});


/* ==============================
   Envelope Click
============================== */

envelope.addEventListener("click",openJourney);
btn.addEventListener("click",openJourney);

function openJourney(){

    gsap.timeline()

    .to(".glass",{

        scale:.92,

        opacity:0,

        duration:.6

    })

    .to(".background",{

        scale:1.15,

        duration:.8

    },"<")

    .to("body",{

        opacity:0,

        duration:.7,

        onComplete(){

            window.location.href="letter.html";

        }

    });

}


/* ==============================
   Stars Parallax
============================== */

document.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*20;
    const y=(e.clientY/window.innerHeight-.5)*20;

    gsap.to(".stars",{

        x,
        y,

        duration:1.5,

        ease:"power3.out"

    });

});


/* ==============================
   Keyboard Shortcut
============================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        openJourney();

    }

});
