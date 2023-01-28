var myItem = document.getElementById("menu").getElementsByTagName("li");
var headLine =document.getElementById("text");
var btn = document.getElementById("zar");
var myMenu = document.getElementById("menu");

for (i = 0 ; i < myItem.length ; i++){
    myItem[i].addEventListener("click",selectItem);
}

function selectItem(){
    headLine.innerHTML = this.innerHTML;
        for (i = 0 ; i < myItem.length ; i++){
            myItem[i].classList.remove("selected")
        }
    this.classList.add("selected");

}

btn.addEventListener("click",messaage);

function messaage(){
    headLine.innerHTML = "Thanks for your experience"
}

