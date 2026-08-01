/* ==========================================
   MESSAGE PAGE
========================================== */

const typing = document.getElementById("typing");
const btn = document.getElementById("continue");

/* ============================= */

const message = `

Hi ❤️

If you're reading this...

It means you've completed
this little journey.

Every click...
Every page...
Every animation...

was made only for you.

Some people give flowers.

Some people give gifts.

I wanted to give you
an experience you'll remember.

Thank you for being here.

Now...

there's one last surprise waiting.

`;

/* ============================= */

window.addEventListener("load",()=>{

    gsap.from(".message-card",{

        opacity:0,

        scale:.8,

        duration:1,

        ease:"power3.out"

    });

    gsap.from("#title",{

        y:-40,

        opacity:0,

        duration:.8

    });

    setTimeout(typeWriter,900);

});

/* ============================= */

let index=0;

function typeWriter(){

    if(index<message.length){

        typing.innerHTML+=message.charAt(index);

        index++;

        setTimeout(typeWriter,28);

    }

    else{

        showButton();

    }

}

/* ============================= */

function showButton(){

    btn.style.pointerEvents="auto";

    gsap.to(btn,{

        opacity:1,

        y:-5,

        duration:.6,

        ease:"back.out(1.7)"

    });

}

/* ============================= */

btn.addEventListener("mouseenter",()=>{

    gsap.to(btn,{

        scale:1.05,

        duration:.2

    });

});

btn.addEventListener("mouseleave",()=>{

    gsap.to(btn,{

        scale:1,

        duration:.2

    });

});

/* ============================= */

btn.addEventListener("click",()=>{

    gsap.timeline()

    .to(".message-card",{

        opacity:0,

        scale:.92,

        duration:.7

    })

    .to("body",{

        opacity:0,

        duration:.5,

        onComplete(){

            window.location.href="final.html";

        }

    });

});

/* ============================= */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter" && btn.style.opacity==="1"){

        btn.click();

    }

});
