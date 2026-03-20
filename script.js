let inputClass = document.querySelector('.input-Class');

let addButton=document.querySelector('.add-Button');

let habitContainer=document.querySelector('.habit-List-container');

let habitCounter=document.querySelector('.habit-Counter')

//load the arary from localstorage if there or load the emplty array
let habits = JSON.parse(localStorage.getItem("habits")) || [];

//saves the habit in the localstorage
function saveHabits() {
    localStorage.setItem("habits", JSON.stringify(habits));
}

//creating the elements dynamically
function renderHabits(){

    habitContainer.innerHTML="";

    //count for habit counter
    let count=0;

    habits.forEach((habit,index)=>{      
        let newElement=document.createElement("div");
        let text=document.createElement("span");
        let deleteButton=document.createElement("button");

        text.textContent=habit.text;
        deleteButton.textContent="delete";

        newElement.appendChild(text);
        newElement.appendChild(deleteButton);
        habitContainer.appendChild(newElement);

        if(habit.completed){           
            newElement.classList.add("completed");
        }

        newElement.addEventListener("click",()=>{
            habits[index].completed=!habits[index].completed;
            saveHabits();
            renderHabits();
        })

        deleteButton.addEventListener("click",(e)=>{        
            e.stopPropagation();
            habits.splice(index,1) // removes 1 items starting at index
            saveHabits();
            renderHabits();          
        })

        //habit-Counter logic
        if(habit.completed){
            count++;
        }
    })  
    
    habitCounter.innerHTML=`${count}/${habits.length} completed`
}

function addHabit(){

     //That is literally the text the user entered.
    //storing the inputValue;
    const inputClassValue=inputClass.value;
    if (inputClassValue.trim() ==="") {
        inputClass.value="";
        return
    };

    //add the new habit into the array(habits)
    habits.push({text:inputClassValue,completed:false});
    saveHabits();
    renderHabits();
      
    //update the value inside input class after append
    inputClass.value="";
}

addButton.addEventListener("click",()=>{   
    addHabit();

});

inputClass.addEventListener("keydown",(e)=>{ 
    if(e.key==="Enter"){
        addHabit();
    }
});

renderHabits();