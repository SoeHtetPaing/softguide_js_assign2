let btn = document.querySelector("#btn");
let text = document.querySelector("#text");
let show = document.querySelector(".show");

btn.addEventListener("click", showMessage);

function showMessage(e) {
    let result = [];
    let txt = text.value;
    txt = txt.split(" ");

    txt.forEach(element => {
        let temp = element.toUpperCase();

        result.push(temp);
    });

    let index = Math.floor(Math.random() * ((txt.length) - 1 + 1));

    show.innerText = "One random uppercase result: " + result[index];

}