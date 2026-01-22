let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("Delete");

    item.appendChild(delbtn)
    ul.appendChild(item);
    inp.value="";

});


ul.addEventListener("click",function (event){
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }




})
// let delbtns = document.querySelectorAll(".delete");

// for (delbtn of delbtns) {
//     delbtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         par.remove();
//     });
// }


























// let btn = document.querySelector("button");

// btn.addEventListener("click", green);

// function green(){
//      btn.style.background = "rgb(25,220,0)";
// }




















































// let btn = document.querySelector("button");


// btn.addEventListener("mouseenter", function () {
//     let h3 = document.querySelector("h3");
//     let randomcolor = getrandomcolor();
//     h3.innerText = randomcolor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomcolor;

// });

// function getrandomcolor() {

//     let red = Math.floor(Math.random() * 225);
//     let green = Math.floor(Math.random() * 225);
//     let blue = Math.floor(Math.random() * 225);

//     let color = `rgb(${red},${green},${blue})`;
//     return (color);

// } 
