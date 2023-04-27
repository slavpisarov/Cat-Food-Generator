import { food } from "./food.js";

const foodContainer = document.getElementById('food')
const foodBtn = document.getElementById('btn')
const alertMsg = document.querySelector(".alert")
const alertBtn = document.getElementById("alert-btn")

foodBtn.addEventListener('click',getFood)

let previous;

function getFood() {

    const random = Math.floor(Math.random() * 7);
    const current = food[random];

    foodContainer.classList.remove('fade')
    foodContainer.textContent = current;

    if(previous === current) {
        alertMsg.style.display = "block";
        foodBtn.style.display = "none";
        alertBtn.addEventListener("click",()=>{
            alertMsg.style.display = "none";
            foodBtn.style.display = "block";
            getFood();
        })
    } 
    foodContainer.classList.add('fade')
    previous = current;
}
