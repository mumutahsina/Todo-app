// Wait until the page loads
document.addEventListener('DOMContentLoaded', () => {

    // --- DELETE CONFIRMATION ---
    const deleteLinks = document.querySelectorAll('.Todo a[href*="delete"]');

    deleteLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const confirmDelete = confirm("Are you sure you want to delete this task?");
            if(!confirmDelete){
                e.preventDefault(); // cancel deletion
            }
        });
    });

    // --- OPTIONAL: TOGGLE COMPLETION ---
    const todos = document.querySelectorAll('.Todo p');

    todos.forEach(todo => {
        todo.addEventListener('click', () => {
            todo.classList.toggle('completed'); // add strike-through
        });
    });

});
