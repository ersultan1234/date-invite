const noBtn =
document.getElementById("noBtn");

const buttons =
document.querySelector(".buttons");

/* СТАРТОВАЯ ПОЗИЦИЯ */

let currentX = 220;
let currentY = 20;

noBtn.style.left = currentX + "px";
noBtn.style.top = currentY + "px";

/* УБЕГАНИЕ ОТ КУРСОРА */

buttons.addEventListener(
"mousemove",
(e)=>{

    const rect =
    noBtn.getBoundingClientRect();

    const btnCenterX =
    rect.left + rect.width / 2;

    const btnCenterY =
    rect.top + rect.height / 2;

    const distanceX =
    e.clientX - btnCenterX;

    const distanceY =
    e.clientY - btnCenterY;

    const distance =
    Math.sqrt(
        distanceX * distanceX +
        distanceY * distanceY
    );

    /* ЕСЛИ КУРСОР БЛИЗКО */

    if(distance < 120){

        currentX -= distanceX * 0.25;
        currentY -= distanceY * 0.25;

        /* ОГРАНИЧЕНИЯ */

        const area =
        buttons.getBoundingClientRect();

        const maxX =
        area.width - rect.width;

        const maxY =
        area.height - rect.height;

        currentX =
        Math.max(
            0,
            Math.min(currentX,maxX)
        );

        currentY =
        Math.max(
            0,
            Math.min(currentY,maxY)
        );

        noBtn.style.left =
        currentX + "px";

        noBtn.style.top =
        currentY + "px";

    }

});

/* ПЕРЕХОД */

function nextPage(){

    document
    .getElementById("page1")
    .classList.add("hidden");

    document
    .getElementById("page2")
    .classList.remove("hidden");

}

/* КАРТОЧКИ */

const cards =
document.querySelectorAll(
".selectable"
);

cards.forEach(card=>{

    card.addEventListener(
    "click",
    ()=>{

        cards.forEach(c=>{

            c.classList.remove(
            "selected"
            );

        });

        card.classList.add(
        "selected"
        );

    });

});

/* ФИНАЛ */

function finishDate(){

    document.body.innerHTML = `

    <div class="background"></div>

    <div class="particles"></div>

    <div class="container">

        <div class="top-glow"></div>

        <h1 class="title">
            Спасибо 💖
        </h1>

        <p class="subtitle">

            Я уже жду нашу встречу ✨
            <br><br>
            Это будет особенный день ❤️

        </p>

    </div>

    `;

}

/* СЕРДЕЧКИ */

for(let i=0;i<40;i++){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.fontSize =
    Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
    Math.random() * 5 + 5 + "s";

    document
    .querySelector(".particles")
    .appendChild(heart);

}