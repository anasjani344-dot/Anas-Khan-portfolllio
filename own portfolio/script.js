const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navbar nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});


// Scroll reveal animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll('.reveal').forEach((element) => {
  observer.observe(element);
});


// Cursor glow effect
const glow = document.querySelector('.cursor-glow');

window.addEventListener('pointermove', (event) => {
  glow.style.left = event.clientX + 'px';
  glow.style.top = event.clientY + 'px';
});


// Project button notifications
const toast = document.getElementById('toast');

document.querySelectorAll('.demo-btn').forEach((button) => {
  button.addEventListener('click', () => {
    toast.textContent = button.dataset.message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 2600);
  });
});


// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();