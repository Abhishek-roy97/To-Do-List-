const inputBox = document.getElementById("input-box");
const listItems = document.getElementById("list-items");
const countValue = document.querySelector(".count-value");

let taskDone = 0;

const displayCount = (taskDone) => {
    countValue.innerHTML = taskDone;
}

function addTask(){
    if(inputBox.value === ''){
        alert('You must write some task!');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listItems.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        taskDone+=1;
        displayCount(taskDone);
    }
    inputBox.value = "";
    saveData();
}

listItems.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        taskDone-=1;
        displayCount(taskDone);
    }
}, false);

function saveData(){
    localStorage.setItem('data',listItems.innerHTML);
}



function showTask(){
    listItems.innerHTML = localStorage.getItem('data');
}

showTask();
displayCount(taskDone);