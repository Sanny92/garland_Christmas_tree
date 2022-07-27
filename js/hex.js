const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const t= 5000

btn.addEventListener('click', function () {

    garland()

    console.log("кнопка ");

});
function getRandomNumber() {
    return Math.floor(Math.random()*hex.length);
}



setInterval(function() {


    garland()


    console.log("время "+ t);

}, t);


function garland() {

    balls= document.querySelectorAll(".ball")

    console.log("balls= "+ balls.length);
    for (let k=1;k<balls.length+1; k++){
        console.log("k= " + k);

        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[getRandomNumber()];
        }

        console.log("hexColor= " + hexColor);
        ballone= document.querySelector(`.ball${k}`)
        ballone.style.borderColor=hexColor;
    }
}