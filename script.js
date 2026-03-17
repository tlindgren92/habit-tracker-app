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
    // let newHabitHTML=`<div>${inputClassValue}</div> `;

    // habitContainer.innerHTML+=newHabitHTML;
    // inputClass.value="";
    

    //using createElement method
    let newElement=document.createElement("div");
    let text=document.createElement("span");
    let deleteButton=document.createElement("button");

    //inserted the value
    text.textContent=inputClassValue;
    deleteButton.textContent="delete";

    //append into habitcontainer
    newElement.appendChild(text);
    newElement.appendChild(deleteButton);
    habitContainer.appendChild(newElement);

    //when clicked,it will add class (complete) in the div
    //when again clicked, it will remove the class(complete ) from the div
    newElement.addEventListener("click",()=>{
        // console.log("complete fuction run");
        newElement.classList.toggle("completed");
    })

    //delete button funtion, click=remove that habit
    //event bubbling happen here
    deleteButton.addEventListener("click",(e)=>{        
        e.stopPropagation();
        deleteButton.parentElement.remove();              
    })

    //update the value inside input class after append
    inputClass.value="";

    
    
});
