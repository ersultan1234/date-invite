const noBtn =
document.getElementById("noBtn");

/* УБЕГАЮЩАЯ КНОПКА */

noBtn.addEventListener(
"mouseenter",
()=>{

    const maxX = 300;
    const maxY = 60;

    const randomX =
    Math.random() * maxX - 150;

    const randomY =
    Math.random() * maxY;

    noBtn.style.left =
    `calc(50% + ${randomX}px)`;

    noBtn.style.top =
    `${randomY}px`;

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

/* ВЫБОР КАРТОЧЕК */

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

/* TELEGRAM */

function finishDate(){

    const selected =
    document.querySelector(
    ".selected h3"
    );

    const date =
    document.querySelector(
    'input[type="date"]'
    ).value;

    const time =
    document.querySelector(
    'input[type="time"]'
    ).value;

    const wishes =
    document.querySelector(
    ".textarea"
    ).value;

    const message = `

💖 Новое свидание!

🍽 Выбор:
${selected
? selected.innerText
: "Не выбрано"}

📅 Дата:
${date}

⏰ Время:
${time}

✨ Пожелания:
${wishes}

`;

    const token = "8819138919:AAGY-kG-u29pHcaPn3TEml-5wPxYNB8SMXQ";
    
    const chatId = "6145113362";
    fetch(

    `https://api.telegram.org/bot${token}/sendMessage`,

    {

        method:"POST",

        headers:{
            "Content-Type":
            "application/json"
        },

        body:JSON.stringify({

            chat_id:chatId,

            text:message

        })

    })

    .then(()=>{

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

            </p>

        </div>

        `;

    });

}

/* СЕРДЦА */

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