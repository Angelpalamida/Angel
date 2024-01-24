function colorize() {
    let name=document.querySelectorAll(`table tr`);

    for (let i = 1; i < name.length; i+=2) {
        
       name[i].style.backgroundColor=`teal`;
    }
}