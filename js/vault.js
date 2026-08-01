/* ==========================================
   VAULT PAGE
========================================== */

const pinInput = document.getElementById("pin");
const unlockBtn = document.getElementById("unlock");
const statusText = document.getElementById("status");
const vaultCard = document.querySelector(".vault-card");
const lockCircle = document.querySelector(".lock-circle");

const SECRET_PIN = "1432";

/* ==========================================
   INTRO ANIMATION
========================================== */

window.addEventListener("load", () => {

    gsap.from(".vault-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".lock-circle", {
        scale: 0,
        rotate: -180,
        duration: 1,
        ease: "back.out(1.7)"
    });

});

/* ==========================================
   INPUT
========================================== */

pinInput.focus();

pinInput.addEventListener("input", () => {

    pinInput.value = pinInput.value.replace(/\D/g, "");

});

/* ==========================================
   UNLOCK
========================================== */

unlockBtn.addEventListener("click", checkPin);

pinInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        checkPin();

    }

});

/* ==========================================
   CHECK PIN
========================================== */

function checkPin() {

    const value = pinInput.value;

    if (value.length < 4) {

        showError("Enter 4 digit PIN");

        return;

    }

    if (value !== SECRET_PIN) {

        wrongPin();

        return;

    }

    success();

}

/* ==========================================
   WRONG PIN
========================================== */

function wrongPin() {

    statusText.innerHTML = "Wrong PIN";

    statusText.style.color = "#ff7070";

    vaultCard.classList.add("shake");

    gsap.to(lockCircle, {

        rotate: 20,
        duration: .08,
        repeat: 5,
        yoyo: true

    });

    setTimeout(() => {

        vaultCard.classList.remove("shake");

    }, 500);

}

/* ==========================================
   SUCCESS
========================================== */

function success() {

    vaultCard.classList.add("success");

    statusText.innerHTML = "Unlocked Successfully ❤️";

    statusText.style.color = "#8dff8d";

    unlockBtn.disabled = true;

    gsap.timeline()

    .to(lockCircle, {

        rotate: 360,

        duration: 1,

        ease: "power2.inOut"

    })

    .to(".lock-center", {

        scale: 1.2,

        duration: .3

    })

    .to(".lock-center", {

        scale: 1,

        duration: .3

    });

    setTimeout(() => {

        nextPage();

    }, 1800);

}

/* ==========================================
   ERROR
========================================== */

function showError(message) {

    statusText.innerHTML = message;

    statusText.style.color = "#ffb347";

}

/* ==========================================
   NEXT PAGE
========================================== */

function nextPage() {

    gsap.timeline()

    .to(".vault-card", {

        opacity: 0,

        scale: .9,

        duration: .8

    })

    .to("body", {

        opacity: 0,

        duration: .5,

        onComplete() {

            window.location.href = "gallery.html";

        }

    });

}
