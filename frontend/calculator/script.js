function getValue(){
    let num1;
    let a;
    let b;
    let sum;
    if ((event.target.value) != "+"){
        a = document.getElementById("i").value=document.getElementById("i").value+event.target.value;
        num1 = Number(a);
        console.log(num1);
        }
    else{
        document.getElementById("i").value = "";
        if ((event.target.value) != "="){
            b = document.getElementById("i").value=document.getElementById("i").value+event.target.value; 
            let num2 = Number(b);
            sum = num1+num2;
            console.log(sum);
        }
        else{
        document.getElementById("i").value = "";
        }
        }

  
}
/*console.log(num1);*/
