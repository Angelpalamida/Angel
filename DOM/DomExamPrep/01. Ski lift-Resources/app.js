
window.addEventListener('load', solve);

function solve() {
    const form = document.querySelector('form');
    const nextBtn = document.getElementById('next-btn');
    const ticketList = document.querySelector('.ticket-info-list');
    const editBtn = document.getElementById('edit-btn');
    const continueBtn = document.getElementById('continue-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const confirmBtn = document.getElementById('confirm-btn');
    const backBtn = document.getElementById('back-btn');

    nextBtn.addEventListener('click', handleNext);
    editBtn.addEventListener('click', handleEdit);
    continueBtn.addEventListener('click', handleContinue);
    cancelBtn.addEventListener('click', handleCancel);
    confirmBtn.addEventListener('click', handleConfirm);
    backBtn.addEventListener('click', handleBack);

    function handleNext(event) {
        event.preventDefault();
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const peopleCount = document.getElementById('people-count').value;
        const fromDate = document.getElementById('from-date').value;
        const daysCount = document.getElementById('days-count').value;

        if (firstName && lastName && peopleCount && fromDate && daysCount) {
            const listItem = document.createElement('li');
            listItem.textContent = `Name: ${firstName} ${lastName}, People: ${peopleCount}, From: ${fromDate}, Days: ${daysCount}`;
            ticketList.appendChild(listItem);

            
            document.getElementById('first-name').value = '';
            document.getElementById('last-name').value = '';
            document.getElementById('people-count').value = '';
            document.getElementById('from-date').value = '';
            document.getElementById('days-count').value = '';

           
            nextBtn.disabled = true;
            editBtn.disabled = false;
            continueBtn.disabled = false;
        }
    }

   

    function handleContinue() {
       

        
        editBtn.disabled = true;
        continueBtn.disabled = true;
        confirmBtn.disabled = false;
        cancelBtn.disabled = false;

        
        setTimeout(() => {
            result();
            expect(document.querySelectorAll(".ticket-info-list > li").length).to.equal(1, "The ticket must be added to the list");
        }, 100);
    }

   
}


    
    
