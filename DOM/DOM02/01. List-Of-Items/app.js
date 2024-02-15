function addItem() {
    const text=document.getElementById(`newItemText`).value;
    if(text.length==0){
        return;
    }
    const liElement=document.createElement(`li`);
    liElement.textContent=text;
    const list=document.getElementById(`items`);
    list.appendChild(liElement);
}