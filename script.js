const btn = document.querySelectorAll("ul li");
const display = document.querySelector(".result");
var error = false;
var res = false;
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
            if(display.innerHTML == "Infinity"){
                display.innerHTML = "";
            }else{
                display.innerHTML = display.innerHTML.slice(0, -1);
            }
            return true;
        }else if(data == "="){
            try{
                let result = eval(display.innerHTML);
                let decimalValue = result.toString().indexOf(".");
                if(decimalValue > 0 && !(result.toString().includes("e"))){
                    result = result.toString().substring(0, decimalValue+7);
                }
                display.innerHTML = result;
            }catch(e){
                const expression = display.innerHTML;
                display.innerHTML = "Syntax error"
                error = true;
            }
            res = true;
            return true;
        }
        if(res && !(['+', '-', '/', '*'].includes(data))){
            display.innerHTML = "";
        }
        res = false;
        display.innerHTML+=data;
        display.scrollLeft = display.scrollWidth;
    })
})