document.getElementById('habit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const habitInput = document.getElementById('habit-input');
    const habitText = habitInput.value.trim();
    
    if (habitText !== '') {
        addHabit(habitText);
        habitInput.value = '';
    }
});

function addHabit(habitText) {
    const habitList = document.getElementById('habit-list');
    const listItem = document.createElement('li');
    listItem.textContent = habitText;
    
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = function() {
        listItem.classList.toggle('completed');
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        habitList.removeChild(listItem);
        saveHabits();
    };
    
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    habitList.appendChild(listItem);
    
    saveHabits();
}

function saveHabits() {
    const habits = [];
    document.querySelectorAll('#habit-list li').forEach(item => {
        habits.push({
            text: item.firstChild.textContent,
            completed: item.classList.contains('completed')
        });
    });
    localStorage.setItem('habits', JSON.stringify(habits));
}

function loadHabits() {
    const habits = JSON.parse(localStorage.getItem('habits')) || [];
    habits.forEach(habit => {
        addHabit(habit.text);
        if (habit.completed) {
            document.querySelectorAll('#habit-list li').forEach(item => {
                if (item.firstChild.textContent === habit.text) {
                    item.classList.add('completed');
                }
            });
        }
    });
}

loadHabits();

const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', darkModeToggle.checked);
});

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}