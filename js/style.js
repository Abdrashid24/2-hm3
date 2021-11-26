var num_1;
var num_2;
var sym;
var result;

function calc(number) {
    if (num_1 == undefined) {
        num_1 = number
        document.getElementById('calculator').value +=number;
        document.getElementById('error').textContent = " ";
    }
    else if (num_2==undefined && sym!=num_2){
        num_2=number
        document.getElementById('calculator').value +=number;
        document.getElementById('error').textContent = " ";
    }
    else if(num_1!=sym){
        document.getElementById('error').textContent = "Символы нельзя повторять";
    }
    else{
        document.getElementById('error').textContent = "Числа нельзя повторять";
    }
    if (sym=="+") {
        a=Number(num_1);
        b=Number(num_2);
        result = (a+b);
        document.getElementById('result').textContent = "Ответ: " + result;
        document.getElementById('error').textContent = " ";
        document.getElementById('calculator').value='';
        num_1=undefined;
        num_2=undefined;
        sym=undefined;
        result=undefined;

    }else if(sym=="-"){
        a=Number(num_1);
        b=Number(num_2);
        result = (a-b);
        document.getElementById('result').textContent = "Ответ: " + result;
        document.getElementById('error').textContent = " ";
        document.getElementById('calculator').value = '';
        document.getElementById('calculator').value='';
        num_1=undefined;
        num_2=undefined;
        sym=undefined;
        result=undefined;
    }else if(sym=="/"){
        a=Number(num_1);
        b=Number(num_2);
        result = (a/b);
        document.getElementById('result').textContent = "Ответ: " + result;
        document.getElementById('error').textContent = " ";
         document.getElementById('calculator').value = '';
         document.getElementById('calculator').value='';
        num_1=undefined;
        num_2=undefined;
        sym=undefined;
        result=undefined;
    }else if(sym=="*"){
        a=Number(num_1);
        b=Number(num_2);
        result = (a*b);
        document.getElementById('result').textContent = "Ответ: " + result;
        document.getElementById('error').textContent = " ";
         document.getElementById('calculator').value = '';
         document.getElementById('calculator').value='';
        num_1=undefined;
        num_2=undefined;
        sym=undefined;
        result=undefined;
    }
}
function symbol(sym_value) {
    if(sym==undefined && sym!=num_1){
        sym=sym_value;
        document.getElementById('calculator').value +=sym;
    }else if(sym!=num_1){
        document.getElementById('error').textContent = "Нельзя вводить первый символ";
    }
    else{
        document.getElementById('error').textContent = "Символы нельзя повторять";
    }
}