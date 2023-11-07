const btn = document.querySelectorAll("ul li");
const display = document.querySelector(".result")
var clear = false;
btn.forEach(function(node){
    node.addEventListener("mousedown", function(event){
        var data = node.innerHTML;
        if(data == "AC"){
            display.innerHTML = "";
            return true;
        }else if(data == "DEL"){
            display.innerHTML = display.innerHTML.slice(0, -1);
            return true;
        }else if(data == "="){
            display.innerHTML = eval(display.innerHTML);
            clear = true;
            return true;
        }
        if(!clear){
            display.innerHTML+=data;
            return true;
        }
        display.innerHTML=data;
        clear = false;
    })
})