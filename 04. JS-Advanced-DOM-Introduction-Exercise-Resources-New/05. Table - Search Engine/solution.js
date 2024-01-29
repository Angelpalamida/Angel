function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const surchEl=document.getElementById(`searchField`);
   const tableRolls=document.querySelectorAll(`tbody tr`);
   
   function onClick() {
     let surch=surchEl.value;
     for (const row of tableRolls) {
         let tableData=row.querySelectorAll("td");
         for (const data of tableData) {
            if(data.textContent.includes(surch)){;
            row.classList.add("select");
            break;
         }else{
            row.classList.remove("select")
         }
      }
     }

   }
}