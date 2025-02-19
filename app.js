document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.form-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.care-container .text');
    listItems.forEach(listItem => {
        listItem.addEventListener('click', () => {
            listItems.forEach(listItem=>listItem.classList.remove('active') )
            listItem.classList.add('active')
        });
    });
});
