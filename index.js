function load(){
    var btns=document.querySelectorAll("#calculator span");
    console.log(btns);
    var operators=["+",'x','-','÷'];
    var inputSecreen=document.querySelector("#screen");
    var btnValue;
    var input;
    for(var i=0;i<btns.length;i++){
        var decimal=false;
        btns[i].addEventListener("click",function(){
            btnValue=this.innerHTML;
            input=inputSecreen.innerHTML;
            switch(btnValue){
                case "C":
                    inputSecreen.innerHTML="";
                    decimal=false;
                    break;
                case "=":
                    var lastC=input[input.length-1];
                    input=input.replace("x","*");
                    input=input.replace("÷","/");
                    if(operators.includes(lastC) || lastC=="."){
                        break;
                    }
                    else{
                        inputSecreen.innerHTML=eval(input);
                    }
                    decimal=false;
                    break;
                case '.':
                    if(decimal==false){
                        inputSecreen.innerHTML+=btnValue;
                        decimal=true;
                    }
                    break;
                case "÷":
                    var lastC=input[input.length-1];
                    if(input!='' && !operators.includes(lastC)){
                        inputSecreen.innerHTML+=btnValue;

                    }
                    else{
                        if(input=="" && btnValue=="-"){
                            inputSecreen.innerHTML+=btnValue;
                        }
                    }
                    if(operators.includes(lastC) && input.length>1){
                        inputSecreen.innerHTML=input.replace(lastC,btnValue);
                    }
                    break;
                default:
                    inputSecreen.innerHTML+=btnValue;
                    break;
            }
        });
    }

}