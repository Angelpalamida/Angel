window.addEventListener("load", solve);

function solve() {
  const form = document.querySelector('.snowman');
    const snowmanPreviewList = document.querySelector('.snowman-preview');
    const snowList = document.querySelector('.snow-list');
    const addBtn = document.querySelector('.add-btn');
    addBtn.textContent = 'Add';
    
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', handleEdit);
    editBtn.style.marginRight = '10px';
    
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.addEventListener('click', handleNext);
  
  
  const sendBtn = document.createElement('button');
  const backBtn = document.createElement('button');
  const snowmanNameInput = document.getElementById('snowman-name');
  const snowmanHeightInput = document.getElementById('snowman-height');
  const locationInput = document.getElementById('location');
  const creatorNameInput = document.getElementById('creator-name');
  const specialAttributeInput = document.getElementById('special-attribute');

  addBtn.addEventListener('click', handleAdd);
  editBtn.addEventListener('click', handleEdit);
  nextBtn.addEventListener('click', handleNext);
  sendBtn.addEventListener('click', handleSend);
  backBtn.addEventListener('click', handleBack);

  function handleAdd(event) {
      event.preventDefault();
      const name = snowmanNameInput.value;
      const height = snowmanHeightInput.value;
      const location = locationInput.value;
      const creator = creatorNameInput.value;
      const attribute = specialAttributeInput.value;

      if (name && height && location && creator && attribute) {
        while (snowmanPreviewList.firstChild) {
          snowmanPreviewList.removeChild(snowmanPreviewList.firstChild);
      }
          const listItem = document.createElement('li');
          listItem.innerHTML = `Name: ${name}<br><br>Height: ${height}<br><br>Location: ${location}<br><br>Creator: ${creator}<br><br>Attribute: ${attribute}<br><br>`;

          snowmanPreviewList.appendChild(listItem);

          snowmanNameInput.value = '';
          snowmanHeightInput.value = '';
          locationInput.value = '';
          creatorNameInput.value = '';
          specialAttributeInput.value = '';

          addBtn.disabled = true;
          editBtn.disabled = false;
          nextBtn.disabled = false;

          snowmanPreviewList.appendChild(editBtn);
          snowmanPreviewList.appendChild(nextBtn);
      }
  }

  function handleEdit() {
      snowmanNameInput.value = getValue('Name:');
      snowmanHeightInput.value = getValue('Height:');
      locationInput.value = getValue('Location:');
      creatorNameInput.value = getValue('Creator:');
      specialAttributeInput.value = getValue('Attribute:');

      snowmanPreviewList.innerHTML = '';
      addBtn.disabled = false;
      editBtn.disabled = true;
      nextBtn.disabled = true;

      snowmanPreviewList.appendChild(addBtn);
  }

  function handleNext() {
      snowList.innerHTML = snowmanPreviewList.innerHTML;
      snowmanPreviewList.innerHTML = '';

      nextBtn.disabled = true;
      sendBtn.disabled = false;

      snowmanPreviewList.appendChild(sendBtn);
  }

  function handleSend() {
      const mainElement = document.getElementById('hero');
      mainElement.remove();

      document.body.appendChild(backBtn);
      document.getElementById('back-img').removeAttribute('hidden');
  }

  function handleBack() {
      location.reload();
  }

  function getValue(label) {
      const regex = new RegExp(`${label} (.*)`);
      const match = regex.exec(snowmanPreviewList.textContent);
      return match ? match[1] : '';
  }
}
