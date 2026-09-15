let num1;
let num2;
let flag = false;
let op;
function getValue(){
    let a;
    let b;
    let sum;
    if (event.target.value != "+"&&
        event.target.value != "-"&&
        event.target.value != "/"&&
        event.target.value != "*"&&
        event.target.value != "%"&&
        event.target.value != "clear" && flag == false){
        a = document.getElementById("i").value=document.getElementById("i").value+event.target.value;
        num1 = Number(a);
        console.log(flag);
        }
    else if (event.target.value == "+"||
        event.target.value == "-"||
        event.target.value == "/"||
        event.target.value == "*"||
        event.target.value == "%"){
        flag = true;
        console.log(flag);
        op = event.target.value;
        document.getElementById("i").value = "";
        }
    else if (event.target.value != "+"&&
        event.target.value != "-"&&
        event.target.value != "/"&&
        event.target.value != "*"&&
        event.target.value != "%"&&
        event.target.value != "clear"&&
        event.target.value != "=" && flag == true)
    {
        b = document.getElementById("i").value = document.getElementById("i").value+event.target.value;
        num2 = Number(b); 
        console.log(flag);
    }
    else if (event.target.value == "=" && op=="+"){
        sum = num1+num2;
        num1 = sum;
        document.getElementById("i").value = sum;
        }

   else if (event.target.value == "=" && op=="-"){
        let dif = num1-num2;
        num1 = dif;
        document.getElementById("i").value = dif;
        }

    else if (event.target.value == "=" && op=="*"){
        let prod = num1*num2;
        num = prod;
        document.getElementById("i").value = prod;
        }

    else if (event.target.value == "=" && op=="/"){
        if (num2 == 0){
            document.getElementById("i").value = "cant be divided by zero ";
         }
         else{
            let div  = num1/num2;
            num1 = div;
            document.getElementById("i").value = div;}
        }

    else if (event.target.value == "=" && op=="%"){
        let rem = num1%num2;
        num1 = rem;
        document.getElementById("i").value = rem;}
        
    else if (event.target.value == "clear"){
        document.getElementById("i").value = "";
        num1 = 0;
        num2 = 0;
        op = "";
        flag = false;
        }
  
}
/*console.log(num1);*/
