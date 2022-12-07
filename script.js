const main = document.querySelector(".main");
const mark = document.querySelector(".mark");
const toggleContainer = document.querySelector(".toggle-container");
const toggle = document.querySelector(".toggle");
const btnToggle = document.querySelector(".toggle > .btn"); 
const screen = document.querySelector(".screen"); 
const keypad = document.querySelector(".keypad"); 
const keys = document.querySelectorAll(".key"); 
const keyClassic = document.querySelectorAll(".key-classic"); 
const keyDelete = document.querySelector(".key-delete"); 
const keyReset = document.querySelector(".key-reset"); 
const keyEqual = document.querySelector(".key-equal"); 


const input_th1 = document.querySelector(".toggle > input:nth-of-type(1)");
const input_th2 = document.querySelector(".toggle > input:nth-of-type(2)");
const input_th3 = document.querySelector(".toggle > input:nth-of-type(3)");



toggle.addEventListener("click", themeChoice);

function theme1(){

    main.classList.remove("main_th2");
    main.classList.remove("main_th3");

    mark.classList.remove("mark_th2");
    mark.classList.remove("mark_th3");

    toggleContainer.classList.remove("toggle-container_th2");
    toggleContainer.classList.remove("toggle-container_th3");

    toggle.classList.remove("toggle_th2");
    toggle.classList.remove("toggle_th3");

    btnToggle.classList.remove("btn_th2");
    btnToggle.classList.remove("btn_th3");

    screen.classList.remove("screen_th2");
    screen.classList.remove("screen_th3");

    keypad.classList.remove("keypad_th2");
    keypad.classList.remove("keypad_th3");

    for (let i = 0; i < keyClassic.length; i++) {
        keyClassic[i].classList.remove("key-classic_th2"); 
        keyClassic[i].classList.remove("key-classic_th3"); 
    }

    keyDelete.classList.remove("key-delete_th2");
    keyDelete.classList.remove("key-delete_th3");

    keyReset.classList.remove("key-reset_th2");
    keyReset.classList.remove("key-reset_th3");

    keyEqual.classList.remove("key-equal_th2");
    keyEqual.classList.remove("key-equal_th3");

}
function theme2(){

    main.classList.remove("main_th3");
    main.classList.add("main_th2");

    mark.classList.remove("mark_th3");
    mark.classList.add("mark_th2");

    toggleContainer.classList.remove("toggle-container_th3");
    toggleContainer.classList.add("toggle-container_th2");

    toggle.classList.remove("toggle_th3");
    toggle.classList.add("toggle_th2");

    btnToggle.classList.remove("btn_th3");
    btnToggle.classList.add("btn_th2");

    screen.classList.remove("screen_th3");
    screen.classList.add("screen_th2");

    keypad.classList.remove("keypad_th3");
    keypad.classList.add("keypad_th2");

    for (let i = 0; i < keyClassic.length; i++) {
        keyClassic[i].classList.remove("key-classic_th3"); 
        keyClassic[i].classList.add("key-classic_th2"); 
    }

    keyDelete.classList.remove("key-delete_th3");
    keyDelete.classList.add("key-delete_th2");
    
    keyReset.classList.remove("key-reset_th3");
    keyReset.classList.add("key-reset_th2");

    keyEqual.classList.remove("key-equal_th3");
    keyEqual.classList.add("key-equal_th2");
    

}
function theme3(){

    main.classList.remove("main_th2");
    main.classList.add("main_th3");

    mark.classList.remove("mark_th2");
    mark.classList.add("mark_th3");

    toggleContainer.classList.remove("toggle-container_th2");
    toggleContainer.classList.add("toggle-container_th3");

    toggle.classList.remove("toggle_th2");
    toggle.classList.add("toggle_th3");

    btnToggle.classList.remove("btn_th3");
    btnToggle.classList.add("btn_th3");

    screen.classList.remove("screen_th2");
    screen.classList.add("screen_th3");

    keypad.classList.remove("keypad_th2");
    keypad.classList.add("keypad_th3");

    for (let i = 0; i < keyClassic.length; i++) {
        keyClassic[i].classList.remove("key-classic_th2");  
        keyClassic[i].classList.add("key-classic_th3"); 
    }

    keyDelete.classList.remove("key-delete_th2");
    keyDelete.classList.add("key-delete_th3");

    keyReset.classList.remove("key-reset_th2");
    keyReset.classList.add("key-reset_th3");

    keyEqual.classList.remove("key-equal_th2");
    keyEqual.classList.add("key-equal_th3");

}

function themeChoice(){

    if(input_th1.checked === true){
        theme1();
    }
    else if(input_th2.checked === true){
        theme2();
    }
    else{
        theme3();
    }
}

let operation ="";
let result = "";
for (let i = 0; i < keys.length; i++) {

    keys[i].addEventListener("click", () => {
              
        console.log(i);

        if( (screen.value === "undefined" || screen.value === "ERROR") && (i != 17) ){

            operation = "";

            if(i == 3 || i == 16){

                screen.value = operation;
                result = operation;
            }

            else{

                operation += keys[i].value;
                screen.value = operation;
                
                result = "";
                result += keys[i].value;

            }
   
            console.log(result);

        }

        else if(i == 3){

            operation = operation.slice(0, (operation.length - 1) );

            screen.value = operation; 

            result = result.slice(0, (result.length - 1) ); 

            /* [X, Y[ permet de recupérer les caractères à de l'intervalle d'occurence fermet ouvert spécifié */
        }
        
        else if(i == 15){

            operation += keys[i].value;
            screen.value = operation;

            result += "*";
            console.log(result);


        }
        else if(i == 16){

            operation = "" ;
            screen.value = operation;
            result = operation;
        }

        else if(i == 17){

        
            try {

                result = String(eval(result));

                console.log(result);
       
            } catch{
                result = "ERROR";
            }
            
            operation = result;
            screen.value = operation; 

            
            console.log(screen.value);
            console.log(result);

            console.log(result);
            console.log(screen.value);
            console.log(typeof result);
            console.log(typeof operation);
            
        }




        else{

            operation += keys[i].value;
            screen.value = operation;

            result += keys[i].value;


            console.log(result);

        }

        



    }
    );


    
}



