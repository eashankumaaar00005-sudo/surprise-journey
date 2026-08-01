/* ==========================================
   LETTER PAGE
========================================== */

const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");
const typewriter = document.getElementById("typewriter");
const continueBtn = document.getElementById("continueBtn");

/* ==========================================
   MESSAGE
========================================== */

const message = `

Before you continue...

I just wanted to remind you that
some moments are too beautiful
to stay only in memories.

This little journey was created
especially for you.

Take a deep breath...

Because the best part
is still waiting ahead. ❤️

`;

/* ==========================================
   AUTO OPEN
========================================== */

window.addEventListener("load", () => {

    gsap.from(".letter-wrapper",{
        scale:.8,
        opacity:0,
        duration:1,
        ease:"power3.out"
    });

    setTimeout(openLetter,1200);

});


/* ==========================================
   OPEN LETTER
========================================== */

function openLetter(){

    envelope.classList.add("open");

    const tl = gsap.timeline();

    tl.to(".envelope-top",{

        rotateX:180,

        duration:.8,

        ease:"power2.out"

    })

    .to(".letter-paper",{

        y:-120,

        height:420,

        duration:1,

        ease:"power3.out"

    },"<")

    .from(".letter-paper h2",{

        opacity:0,

        y:20,

        duration:.5

    });

    setTimeout(typeMessage,1200);

}


/* ==========================================
   TYPEWRITER
========================================== */

let i = 0;

function typeMessage(){

    if(i < message.length){

        typewriter.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeMessage,28);

    }

    else{

        showButton();

    }

}


/* ==========================================
   SHOW BUTTON
========================================== */

function showButton(){

    continueBtn.style.pointerEvents="auto";

    gsap.to(continueBtn,{

        opacity:1,

        y:-5,

        duration:.6,

        ease:"back.out(1.7)"

    });

}


/* ==========================================
   BUTTON HOVER
========================================== */

continueBtn.addEventListener("mouseenter",()=>{

    gsap.to(continueBtn,{

        scale:1.05,

        duration:.2

    });

});

continueBtn.addEventListener("mouseleave",()=>{

    gsap.to(continueBtn,{

        scale:1,

        duration:.2

    });

});


/* ==========================================
   GO TO NEXT PAGE
========================================== */

continueBtn.addEventListener("click",()=>{

    gsap.timeline()

    .to(".letter-wrapper",{

        scale:.92,

        opacity:0,

        duration:.7

    })

    .to("body",{

        opacity:0,

        duration:.7,

        onComplete(){

            window.location.href="map.html";

        }

    },"<");

});


/* ==========================================
   ESC KEY
========================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter" && continueBtn.style.opacity==="1"){

        continueBtn.click();

    }

});


/* ==========================================
   FLOATING EFFECT
========================================== */

gsap.to(".envelope",{

    y:-8,

    repeat:-1,

    yoyo:true,

    duration:2.8,

    ease:"sine.inOut"

});
