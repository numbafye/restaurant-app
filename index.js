const addBtn = document.querySelectorAll('.add');

addBtn.forEach(e => e.addEventListener('click', () => {
    Counter();
    Appear();
}));

const clicks = document.querySelector('.clicks');

let items = 0;

function Appear() {
    clicks.style.visibility = 'visible';
}

function Counter() {
    items += 1;
    clicks.innerHTML = items;
};

console.log(items)