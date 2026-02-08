let inputClass = document.querySelector('.input-Class');

let addButton=document.querySelector('.add-Button');

let habitContainer=document.querySelector('.habit-List-container');

addButton.addEventListener("click",()=>{
    
    //That is literally the text the user entered.
    //storing the inputValue;
    const inputClassValue=inputClass.value;

    if (inputClassValue.trim() ==="") {
        inputClass.value="";
        return
    };
    //creating the value using js
    let newHabitHTML=`<div>${inputClassValue}</div> `;
    habitContainer.innerHTML+=newHabitHTML;
    inputClass.value="";
    
});
