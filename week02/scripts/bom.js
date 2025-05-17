
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {

    if (input.value.trim() !== '') {
        const listItem = document.createElement('li');
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');

        listItem.textContent = input.value + '';
        deleteBtn.textContent = '❌';

        listItem.appendChild(deleteBtn);
        list.appendChild(listItem);

        deleteBtn.addEventListener('click', () => {
            list.removeChild(listItem);
        });

        
        input.value = '';
    }

    
    input.focus();
});
