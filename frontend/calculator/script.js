let num1;
let num2;
let flag = false;
let op;
function getValue(){
    let a;
    let b;
    let sum;
    if (event.target.value != "+"||
        event.target.value != "-"||
        event.target.value != "/"||
        event.target.value != "*"||
        event.target.value != "%"
         && flag==false){
        a = document.getElementById("i").value=document.getElementById("i").value+event.target.value;
        num1 = Number(a);
        }
    else if (event.target.value != value="+"||
        event.target.value != "-"||
        event.target.value != "/"||
        event.target.value != "*"||
        event.target.value != "%"){
        flag = true;
        op = event.target.value;
        document.getElementById("i").value = "";
        }
    else if (event.target.value != "=" && flag == true)
    {
        b = document.getElementById("i").value = document.getElementById("i").value+event.target.value;
        num2 = Number(b);
        
    }
    else if (event.target.value == "=" && op=="+"){
        sum = num1+num2;
        document.getElementById("i").value = sum;
        }

   else if (event.target.value == "=" && op=="-"){
        let dif = num1-num2;
        document.getElementById("i").value = dif;
        }

    else if (event.target.value == "=" && op=="*"){
        let prod = num1*num2;
        document.getElementById("i").value = prod;
        }

    else if (event.target.value == "=" && op=="/"){
        let div  = num1/num2;
        document.getElementById("i").value = div;
        }
    else if (event.target.value == "clear"){
        document.getElementById("i").value = "";
        num1 = 0;
        num2 = 0;
        }
  
}
/*console.log(num1);*/
