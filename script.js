const btn = document.querySelectorAll("ul li");
const display = document.querySelector(".result")
var error = false;
btn.forEach(function(node){
    node.addEventListener("mousedown", function(event){
        var data = node.innerHTML;
        if(error){
            display.innerHTML = "";
            error = false;
        }
        if(data == "AC"){
            display.innerHTML = "";
            return true;
        }else if(data == "DEL"){
            display.innerHTML = display.innerHTML.slice(0, -1);
            return true;
        }else if(data == "="){
            try{
                let result = eval(display.innerHTML);
                let decimalValue = result.toString().indexOf(".");
                result = result.toString().substring(0, decimalValue+7);
                display.innerHTML = result;
            }catch(e){
                const expression = display.innerHTML;
                display.innerHTML = "Syntax error"
                error = true;
            }
            return true;
        }
        display.innerHTML+=data;
        display.scrollLeft = display.scrollWidth;
    })
})