document.getElementById('habit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const habitInput = document.getElementById('habit-input');
    const habitText = habitInput.value.trim();
    
    if (habitText !== '') {
        const habitList = document.getElementById('habit-list');
        const listItem = document.createElement('li');
        listItem.textContent = habitText;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            habitList.removeChild(listItem);
        };
        
        listItem.appendChild(deleteButton);
        habitList.appendChild(listItem);
        
        habitInput.value = '';
    }
});