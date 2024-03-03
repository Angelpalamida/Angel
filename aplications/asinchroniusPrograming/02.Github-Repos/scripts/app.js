const list =document.getElementById('repos');

function loadRepos() {
	const username=document.getElementById('username').value;
	const url=`https://api.github.com/users/${username}/repos`;

	fetch(url)
	.then(OnHeaders)
	.then(OnSuccess)
	.catch(OnError);
}
function OnHeaders(res){
	if(!res.ok){
		throw `Error`
	}
	return res.json();
}

function OnSuccess(data){
	
	list.replaceChildren(...data.map(createListItem));

}
function OnError(error) {
	list.textContent=error;
}
function createListItem({html_url,full_name}){
	const item=document.createElement('li');
	const anchor=document.createElement('a');

	anchor.href=html_url;
	anchor.textContent=full_name;
	item.appendChild(anchor);

	return item;
}dgsgsgs