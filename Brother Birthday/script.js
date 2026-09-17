// =========================================
// GET ELEMENTS
// =========================================

const progress =
    document.getElementById("progress");

const percentage =
    document.getElementById("percentage");

const loadingScreen =
    document.getElementById("loadingScreen");

const nameScreen =
    document.getElementById("nameScreen");

const birthdayScreen =
    document.getElementById("birthdayScreen");

const birthdayNext =
    document.getElementById("birthdayNext");

const memoryScreen =
    document.getElementById("memoryScreen");

const memoryPhoto =
    document.getElementById("memoryPhoto");

const photoCard =
    document.querySelector(".photo-card");

const photoWrapper =
    document.getElementById("photoWrapper");

const photoNumber =
    document.getElementById("photoNumber");

const memoryCounter =
    document.getElementById("memoryCounter");

const memoryTitle =
    document.getElementById("memoryTitle");

const memoryMessage =
    document.getElementById("memoryMessage");

const memoryDots =
    document.getElementById("memoryDots");

const prevPhoto =
    document.getElementById("prevPhoto");

const nextPhoto =
    document.getElementById("nextPhoto");

const memoryNext =
    document.getElementById("memoryNext");

const letterScreen =
    document.getElementById("letterScreen");

const openLetter =
    document.getElementById("openLetter");

const letterIntro =
    document.querySelector(".letter-intro");

const letterPaper =
    document.getElementById("letterPaper");

const typedLetter =
    document.getElementById("typedLetter");

const letterSign =
    document.getElementById("letterSign");

const letterNext =
    document.getElementById("letterNext");

const finalScreen =
    document.getElementById("finalScreen");

const heartParticles =
    document.getElementById("heartParticles");



// =========================================
// LOADING
// =========================================

let value = 0;


const loading =
    setInterval(function () {

        value++;


        progress.style.width =
            value + "%";


        percentage.innerText =
            value + "%";


        if (value >= 100) {

            clearInterval(loading);


            setTimeout(function () {

                loadingScreen.style.opacity =
                    "0";

                loadingScreen.style.transform =
                    "scale(1.15)";


                setTimeout(function () {

                    loadingScreen.style.display =
                        "none";

                    nameScreen.classList.add(
                        "show"
                    );

                }, 1000);


            }, 500);

        }

    }, 35);



// =========================================
// NAME → BIRTHDAY
// =========================================

nameScreen.addEventListener(
    "click",
    function () {

        nameScreen.classList.remove(
            "show"
        );


        setTimeout(function () {

            birthdayScreen.classList.add(
                "show"
            );

            createBurst();

        }, 500);

    }
);



// =========================================
// BIRTHDAY PARTICLES
// =========================================

function createBurst() {

    const burst =
        document.getElementById("burst");


    burst.innerHTML = "";


    for (
        let i = 0;
        i < 130;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.classList.add(
            "birthday-particle"
        );


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            100 +
            Math.random() *
            500;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        particle.style.setProperty(
            "--x",
            x + "px"
        );


        particle.style.setProperty(
            "--y",
            y + "px"
        );


        particle.style.background =
            `hsl(
                ${Math.random() * 360},
                100%,
                70%
            )`;


        particle.style.width =
            3 +
            Math.random() * 7 +
            "px";


        particle.style.height =
            3 +
            Math.random() * 7 +
            "px";


        burst.appendChild(
            particle
        );

    }

}



// =========================================
// MEMORY DATA
// =========================================

const memories = [

    {
        image: "images/1.jpeg",

        title:
            "One picture, a thousand memories.",

        message:
            "Kuch moments bas camera mein capture nahi hote... woh dil mein save ho jaate hain."
    },


    {
        image: "images/2.jpeg",

        title:
            "The smiles we never planned.",

        message:
            "Aur shayad isi wajah se sabse beautiful memories wahi hoti hain jo plan nahi hoti."
    },


    {
        image: "images/3.jpeg",

        title:
            "Just being you.",

        message:
            "Simple, real aur bilkul apne style mein... that's what makes you special."
    },


    {
        image: "images/4.jpeg",

        title:
            "A frame from your journey.",

        message:
            "Har saal tum thoda aur badle... lekin tumhari smile wahi rahi."
    },


    {
        image: "images/5.jpeg",

        title:
            "Some moments feel timeless.",

        message:
            "Kuch photos purani ho jaati hain, par unke saath judi feelings kabhi purani nahi hoti."
    },


    {
        image: "images/6.jpeg",

        title:
            "The moments that matter.",

        message:
            "Life ke bade moments ke beech ye chhoti memories hi sabse zyada yaad reh jaati hain."
    },


    {
        image: "images/7.jpeg",

        title:
            "A memory worth keeping.",

        message:
            "Aaj ke din bas birthday celebrate nahi kar rahe... tumhari presence celebrate kar rahe hain."
    },


    {
        image: "images/8.jpeg",

        title:
            "And this is only the beginning.",

        message:
            "Because some memories are not meant to end... they become a part of us."
    }

];



let currentMemory = 0;

let autoPlay = null;



// =========================================
// CREATE MEMORY DOTS
// =========================================

memories.forEach(
    function (_, index) {

        const dot =
            document.createElement("div");


        dot.classList.add(
            "memory-dot"
        );


        if (index === 0) {

            dot.classList.add(
                "active"
            );

        }


        dot.addEventListener(
            "click",
            function () {

                showMemory(index);

            }
        );


        memoryDots.appendChild(
            dot
        );

    }
);



// =========================================
// SHOW MEMORY
// =========================================

function showMemory(index) {

    currentMemory = index;


    photoCard.classList.add(
        "change"
    );


    memoryTitle.style.opacity =
        "0";

    memoryMessage.style.opacity =
        "0";


    setTimeout(function () {

        memoryPhoto.src =
            memories[index].image;


        const number =
            String(index + 1)
                .padStart(2, "0");


        photoNumber.innerText =
            `${number} / 08`;


        memoryCounter.innerText =
            `MEMORY ${number}`;


        memoryTitle.innerText =
            memories[index].title;


        memoryMessage.innerText =
            memories[index].message;


        document
            .querySelectorAll(".memory-dot")
            .forEach(
                function (dot, dotIndex) {

                    dot.classList.toggle(
                        "active",
                        dotIndex === index
                    );

                }
            );


        photoCard.classList.remove(
            "change"
        );


        memoryTitle.style.opacity =
            "1";

        memoryMessage.style.opacity =
            ".55";


    }, 350);

}



// =========================================
// NEXT PHOTO
// =========================================

nextPhoto.addEventListener(
    "click",
    function () {

        let next =
            currentMemory + 1;


        if (
            next >= memories.length
        ) {

            next = 0;

        }


        showMemory(next);

    }
);



// =========================================
// PREVIOUS PHOTO
// =========================================

prevPhoto.addEventListener(
    "click",
    function () {

        let previous =
            currentMemory - 1;


        if (previous < 0) {

            previous =
                memories.length - 1;

        }


        showMemory(previous);

    }
);



// =========================================
// AUTO PLAY
// =========================================

function startAutoPlay() {

    stopAutoPlay();


    autoPlay =
        setInterval(
            function () {

                let next =
                    currentMemory + 1;


                if (
                    next >= memories.length
                ) {

                    next = 0;

                }


                showMemory(next);

            },
            5500
        );

}


function stopAutoPlay() {

    if (autoPlay) {

        clearInterval(
            autoPlay
        );

        autoPlay = null;

    }

}



// =========================================
// 3D PHOTO EFFECT
// =========================================

document.addEventListener(
    "mousemove",
    function (event) {

        if (
            !memoryScreen.classList.contains(
                "show"
            )
        ) {

            return;

        }


        const x =
            event.clientX /
            window.innerWidth -
            .5;


        const y =
            event.clientY /
            window.innerHeight -
            .5;


        photoCard.style.transform =
            `
            rotateY(${x * 14}deg)
            rotateX(${y * -14}deg)
            translateZ(10px)
            `;

    }
);


photoWrapper.addEventListener(
    "mouseleave",
    function () {

        photoCard.style.transform =
            `
            rotateY(0deg)
            rotateX(0deg)
            translateZ(0)
            `;

    }
);



// =========================================
// MEMORY PARTICLES
// =========================================

function createMemoryParticles() {

    const container =
        document.getElementById(
            "memoryParticles"
        );


    container.innerHTML = "";


    for (
        let i = 0;
        i < 55;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.classList.add(
            "memory-particle"
        );


        particle.style.left =
            Math.random() * 100 +
            "%";


        particle.style.animationDuration =
            8 +
            Math.random() * 15 +
            "s";


        particle.style.animationDelay =
            Math.random() * 8 +
            "s";


        particle.style.opacity =
            Math.random();


        container.appendChild(
            particle
        );

    }

}



// =========================================
// BIRTHDAY → MEMORY
// =========================================

birthdayNext.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();


        birthdayScreen.classList.remove(
            "show"
        );


        setTimeout(function () {

            memoryScreen.classList.add(
                "show"
            );


            createMemoryParticles();

            showMemory(0);

            startAutoPlay();

        }, 700);

    }
);



// =========================================
// PAUSE ON PHOTO
// =========================================

photoWrapper.addEventListener(
    "mouseenter",
    function () {

        stopAutoPlay();

    }
);


photoWrapper.addEventListener(
    "mouseleave",
    function () {

        if (
            memoryScreen.classList.contains(
                "show"
            )
        ) {

            startAutoPlay();

        }

    }
);



// =========================================
// KEYBOARD
// =========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            !memoryScreen.classList.contains(
                "show"
            )
        ) {

            return;

        }


        if (
            event.key === "ArrowRight"
        ) {

            nextPhoto.click();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            prevPhoto.click();

        }

    }
);



// =========================================
// MEMORY → LETTER
// =========================================

memoryNext.addEventListener(
    "click",
    function () {

        stopAutoPlay();


        memoryScreen.classList.remove(
            "show"
        );


        setTimeout(function () {

            letterScreen.classList.add(
                "show"
            );

        }, 700);

    }
);



// =========================================
// OPEN LETTER
// =========================================

openLetter.addEventListener(
    "click",
    function () {

        letterIntro.classList.add(
            "hide"
        );


        setTimeout(function () {

            letterPaper.classList.add(
                "open"
            );


            startTyping();

        }, 500);

    }
);



// =========================================
// LETTER
// =========================================

const letterText =
`Dear Brother,

Life changes, people grow,
but some bonds always stay the same.

We've had our fights,
our laughter,
and so many beautiful memories.

No matter where life takes us,
you'll always be my Jaan. ❤️

I hope this year brings you
lots of happiness, success,
and everything you deserve.

Keep smiling.
Keep being you.

Happy Birthday, Jaan! ❤️`;


let typingIndex = 0;



function startTyping() {

    typedLetter.innerText = "";

    typingIndex = 0;

    letterSign.classList.remove(
        "show"
    );

    letterNext.classList.remove(
        "show"
    );


    typeCharacter();

}



function typeCharacter() {

    if (
        typingIndex <
        letterText.length
    ) {

        typedLetter.innerText +=
            letterText.charAt(
                typingIndex
            );


        typingIndex++;


        let speed = 28;


        if (
            letterText.charAt(
                typingIndex
            ) === "\n"
        ) {

            speed = 180;

        }


        setTimeout(
            typeCharacter,
            speed
        );


    } else {

        setTimeout(
            function () {

                letterSign.classList.add(
                    "show"
                );

            },
            500
        );


        setTimeout(
            function () {

                letterNext.classList.add(
                    "show"
                );

            },
            1300
        );

    }

}



// =========================================
// LETTER → FINAL
// =========================================

letterNext.addEventListener(
    "click",
    function () {

        letterScreen.classList.remove(
            "show"
        );


        setTimeout(function () {

            finalScreen.classList.add(
                "show"
            );


            createHeart();

        }, 800);

    }
);



// =========================================
// PARTICLE HEART
// =========================================

function createHeart() {

    heartParticles.innerHTML = "";


    const totalParticles = 900;


    for (
        let i = 0;
        i < totalParticles;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.classList.add(
            "heart-particle"
        );


        const t =
            Math.random() *
            Math.PI *
            2;


        const scale =
            12 +
            Math.random() * 1.5;


        const x =
            16 *
            Math.pow(
                Math.sin(t),
                3
            );


        const y =
            -(
                13 *
                Math.cos(t)
                -
                5 *
                Math.cos(2 * t)
                -
                2 *
                Math.cos(3 * t)
                -
                Math.cos(4 * t)
            );


        const thickness =
            .75 +
            Math.random() * .45;


        const finalX =
            x *
            scale *
            thickness;


        const finalY =
            y *
            scale *
            thickness;


        const startX =
            (Math.random() - .5) *
            window.innerWidth;


        const startY =
            (Math.random() - .5) *
            window.innerHeight;


        particle.style.setProperty(
            "--startX",
            startX + "px"
        );


        particle.style.setProperty(
            "--startY",
            startY + "px"
        );


        particle.style.setProperty(
            "--endX",
            finalX + "px"
        );


        particle.style.setProperty(
            "--endY",
            finalY + "px"
        );


        particle.style.setProperty(
            "--size",
            .5 +
            Math.random() * 1.8
        );


        particle.style.animationDelay =
            Math.random() * 1.8 +
            "s";


        if (
            Math.random() > .8
        ) {

            particle.style.background =
                "#ffb2e8";

        }


        heartParticles.appendChild(
            particle
        );

    }

}
