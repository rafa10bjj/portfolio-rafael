'use strict';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Initialize the icon set after the document has been parsed.
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

// Smooth section navigation, with an accessible reduced-motion fallback.
document.querySelectorAll('[data-scroll-target]').forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.scrollTarget;
    const target = document.getElementById(targetId);

    if (!target) return;

    target.scrollIntoView({
      behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
      block: 'start'
    });
  });
});

// Project filtering with state exposed to assistive technologies.
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const filterStatus = document.getElementById('filter-status');

function filterProjects(category, activeButton) {
  filterButtons.forEach((button) => {
    const isActive = button === activeButton;

    button.classList.toggle('bg-neutral-900', isActive);
    button.classList.toggle('text-white', isActive);
    button.classList.toggle('shadow-sm', isActive);
    button.classList.toggle('bg-neutral-100', !isActive);
    button.classList.toggle('text-neutral-600', !isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  let visibleProjects = 0;

  projectCards.forEach((card) => {
    const isVisible = category === 'all' || card.dataset.category === category;

    card.style.display = isVisible ? 'flex' : 'none';
    card.setAttribute('aria-hidden', String(!isVisible));
    if (isVisible) visibleProjects += 1;
  });

  if (filterStatus) {
    filterStatus.textContent = `${visibleProjects} projetos exibidos.`;
  }
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterProjects(button.dataset.projectFilter, button);
  });
});

// Build and open the WhatsApp message only after native form validation.
const whatsappForm = document.getElementById('whatsapp-form');

if (whatsappForm) {
  whatsappForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const empresa = document.getElementById('empresa').value;
    const mensagem = document.getElementById('mensagem').value;
    const texto = `Olá Rafael! Meu nome é ${nome} (${empresa}).\n\n${mensagem}`;
    const url = `https://wa.me/5581995046827?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

// Hero title entrance animation and keyboard-accessible replay.
(function initBlurText() {
  const container = document.querySelector('.blur-text-container');
  if (!container) return;

  function replay() {
    container.classList.remove('in-view');
    container.querySelectorAll('.blur-word').forEach((word) => {
      word.style.filter = '';
    });
    void container.offsetWidth;
    container.classList.add('in-view');
  }

  container.style.cursor = 'pointer';
  container.setAttribute('title', 'Clique para ver a animação novamente');

  if (prefersReducedMotion.matches) {
    container.classList.add('in-view');
    return;
  }

  container.addEventListener('animationend', (event) => {
    if (event.target.classList.contains('blur-word')) {
      event.target.style.filter = 'none';
    }
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          replay();
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px' });

    observer.observe(container);
  } else {
    replay();
  }

  container.addEventListener('click', replay);
  container.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      replay();
    }
  });
})();

// Circular identity text and its existing hover-speed behavior.
(function initCircularText() {
  const element = document.getElementById('nav-circular-text');
  if (!element) return;

  const text = element.dataset.text || 'RAFAEL * RODRIGUES * DADOS * ';
  const spinDuration = Number.parseFloat(element.dataset.duration) || 20;
  const hoverBehavior = element.dataset.hover || 'speedUp';
  const letters = Array.from(text);

  element.replaceChildren();

  letters.forEach((letter, index) => {
    const span = document.createElement('span');
    const degrees = (360 / letters.length) * index;

    span.textContent = letter === ' ' ? '\u00A0' : letter;
    span.style.transform = `rotateZ(${degrees}deg)`;
    span.style.webkitTransform = `rotateZ(${degrees}deg)`;
    element.appendChild(span);
  });

  const animation = element.animate(
    [
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(360deg)' }
    ],
    {
      duration: spinDuration * 1000,
      iterations: Infinity,
      easing: 'linear'
    }
  );

  const hoverContainer = element.parentElement || element;

  hoverContainer.addEventListener('mouseenter', () => {
    if (hoverBehavior === 'speedUp') animation.playbackRate = 4;
    else if (hoverBehavior === 'slowDown') animation.playbackRate = 0.5;
    else if (hoverBehavior === 'pause') animation.playbackRate = 0;
    else if (hoverBehavior === 'goBonkers') animation.playbackRate = 15;
  });

  hoverContainer.addEventListener('mouseleave', () => {
    animation.playbackRate = 1;
  });
})();
