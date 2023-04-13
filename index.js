const addBtn = document.querySelectorAll('.add');
addBtn.forEach(e => e.addEventListener('click', Counter));
// addBtn.onclick = Counter;

const clicks = document.querySelector('.clicks');

let items = 0;

function Counter() {
    items += 1;
    clicks.innerHTML = items;
};

console.log(items)