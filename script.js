const filters = document.querySelectorAll('.filter');
const days = document.querySelectorAll('.day');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const selected = button.dataset.filter;
    days.forEach((day) => {
      day.hidden = selected !== 'all' && day.dataset.phase !== selected && day.dataset.phase !== 'all';
    });
  });
});

document.getElementById('printButton')?.addEventListener('click', () => window.print());

document.querySelectorAll('.checklist input').forEach((box, index) => {
  const key = `aus-road-trip-check-${index}`;
  box.checked = localStorage.getItem(key) === 'true';
  box.addEventListener('change', () => localStorage.setItem(key, box.checked));
});
