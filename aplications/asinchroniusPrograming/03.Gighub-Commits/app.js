const list=document.getElementById('commits')

function loadCommits() {
    const username=document.getElementById(`username`).value;
    const repo=document.getElementById('repo').value;
   
    const url=`https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url)
    .then(OnSuccess)
    .then(addLi)
    .catch(OnError)
}

    function OnSuccess(response) {
        
        if(!response.ok){
            throw 'Error'
        }
        return response.json();
    }

    function OnError(error){
        list.innerHTML='<li>Error: 404 (Not Found)</li>'
        
    }
    function addLi(data){
        list.replaceChildren(...data.map(createListItems));
    }
    function createListItems({commit:{author: {name}, message}}){
        const item=document.createElement('li');
        item.textContent=`${name}:${message}`;
        return item;
    }

