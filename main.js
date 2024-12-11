const searchInput = document.getElementById('search-input');
const content = document.getElementById('content');

function addBlur() {
    content.classList.add('blurred');
}

function removeBlur() {
    content.classList.remove('blurred');
}

searchInput.addEventListener('focus', addBlur);
searchInput.addEventListener('input', addBlur);
searchInput.addEventListener('blur', removeBlur);

const sidebar = document.getElementById('sidebar');
const check = document.getElementById('check');
const cancel = document.getElementById('cancel');

function closeSidebar() {
    check.checked = false;
}

document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && !check.contains(event.target)) {
        closeSidebar(); 
    }
});

cancel.addEventListener('click', closeSidebar);
