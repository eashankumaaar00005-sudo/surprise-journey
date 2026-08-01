/* ==========================================
   GALLERY PAGE
========================================== */

const photos = document.querySelectorAll(".photo");
const viewer = document.getElementById("viewer");
const preview = document.getElementById("preview");
const closeBtn = document.getElementById("close");
const music = document.getElementById("music");
const nextBtn = document.getElementById("nextGallery");

/* ==========================================
   INTRO
========================================== */

window.addEventListener("load",()=>{

    gsap.from(".title",{
        y:-50,
        opacity:0,
        duration:1
    });

    gsap.from(".subtitle",{
        y:-30,
        opacity:0,
        duration:.8,
        delay:.2
    });

    gsap.from(".photo",{
        scale:.7,
        opacity:0,
        duration:.8,
        stagger:.15,
        ease:"back.out(1.7)"
    });

});

/* ==========================================
   AUTO MUSIC
========================================== */

document.body.addEventListener("click",()=>{

    if(music.paused){

        music.play().catch(()=>{});

    }

},{once:true});

/* ==========================================
   OPEN IMAGE
========================================== */

photos.forEach(photo=>{

    photo.addEventListener("click",()=>{

        const img = photo.querySelector("img");

        preview.src = img.src;

        viewer.style.display="flex";

        gsap.fromTo(viewer,

        {
            opacity:0
        },

        {
            opacity:1,
            duration:.4
        });

        gsap.fromTo(preview,

        {
            scale:.7
        },

        {
            scale:1,
            duration:.5,
            ease:"back.out(1.7)"
        });

    });

});

/* ==========================================
   CLOSE
========================================== */

function closeViewer(){

    gsap.to(viewer,{

        opacity:0,

        duration:.3,

        onComplete(){

            viewer.style.display="none";

        }

    });

}

closeBtn.addEventListener("click",closeViewer);

viewer.addEventListener("click",(e)=>{

    if(e.target===viewer){

        closeViewer();

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeViewer();

    }

});

/* ==========================================
   FLOATING POLAROIDS
========================================== */

photos.forEach((photo,index)=>{

    gsap.to(photo,{

        y:-10,

        repeat:-1,

        yoyo:true,

        duration:2+index*.25,

        ease:"sine.inOut"

    });

});

/* ==========================================
   PARALLAX
========================================== */

document.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*12;
    const y=(e.clientY/window.innerHeight-.5)*12;

    gsap.to(".gallery",{

        x,
        y,

        duration:1

    });

});

/* ==========================================
   NEXT
========================================== */

nextBtn.addEventListener("click",()=>{

    gsap.timeline()

    .to(".gallery-page",{

        opacity:0,

        scale:.97,

        duration:.8

    })

    .to("body",{

        opacity:0,

        duration:.5,

        onComplete(){

            window.location.href="message.html";

        }

    });

});
