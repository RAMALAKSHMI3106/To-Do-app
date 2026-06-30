const box = document.getElementById('box');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', add);

function add() {
  const d = document.getElementById('d');
  if (d.value.trim() === '') return;

  const c = document.createElement('div');
  c.className = 'task-item';

  c.innerHTML = `
    <input class="iop" type="checkbox">
    <label class="l">${d.value}</label>
    <button class="btn trash"><i class="fas fa-trash"></i></button>
  `;

  box.appendChild(c);

  const checkbox = c.querySelector('.iop');
  const label = c.querySelector('.l');

  checkbox.addEventListener('change', () => {
    label.classList.toggle('strike', checkbox.checked);
  });

  c.querySelector('.btn').addEventListener('click', () => {
    box.removeChild(c);
  });

  d.value = '';
}