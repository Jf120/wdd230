const btn = document.querySelector('#btn');
const list = document.querySelector('#list');


function addChapter () {
    const input = document.querySelector('#favchap').value;
    
    if (input !== '') {
        
        const li = document.createElement('li');
        li.innerText = input;
        const button = document.createElement('button');
        button.textContent = '❌';
        button.setAttribute('id', input);
        button.onclick = function(){
            button.parentElement.remove()
            document.getElementById("favchap").focus();
            return;
        };
        li.appendChild(button);
        list.appendChild(li);
        document.getElementById("favchap").value = '';
    }
}


btn.addEventListener('click', addChapter);

