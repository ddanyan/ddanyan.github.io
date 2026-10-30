document.documentElement.classList.add('js');
const button = document.querySelector('.menu');
const links = document.querySelector('.links');
function setMenu(open) { button.setAttribute('aria-expanded', String(open)); links.dataset.open = String(open); }
button.addEventListener('click', () => setMenu(button.getAttribute('aria-expanded') !== 'true'));
links.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') { setMenu(false); button.focus(); } });


// A section map of native page scrolling; it never captures wheel or touch input.
const sections = [...document.querySelectorAll('[data-scroll][id]')];
if (sections.length) {
  const rail = document.createElement('nav');
  rail.className = 'scroll-rail';
  rail.setAttribute('aria-label', 'Page sections');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const syncMotion = () => { rail.dataset.reduced = String(reduced.matches); };
  syncMotion();
  reduced.addEventListener('change', syncMotion);
  const dots = sections.map(section => {
    const dot = document.createElement('a');
    dot.className = 'rail-dot';
    dot.href = '#' + section.id;
    dot.setAttribute('aria-label', section.dataset.scroll);
    const label = document.createElement('span');
    label.textContent = section.dataset.scroll;
    dot.append(label);
    rail.append(dot);
    return dot;
  });
  const bubble = document.createElement('span');
  bubble.className = 'rail-bubble';
  bubble.setAttribute('aria-hidden', 'true');
  rail.append(bubble);
  document.body.append(rail);
  let stops = [], lastScroll = window.scrollY, scheduled = false;
  function measure() {
    const limit = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    stops = sections.map(section => Math.min(limit, Math.max(0, section.getBoundingClientRect().top + scrollY)));
    dots.forEach((dot, index) => dot.style.setProperty('--at', (stops[index] / limit * 100) + '%'));
    update();
  }
  function pulse(dot) {
    if (reduced.matches) return;
    dot.classList.remove('hit');
    // Restart only on a crossing, never on every frame while a dot is active.
    void dot.offsetWidth;
    dot.classList.add('hit');
  }
  dots.forEach(dot => dot.addEventListener('animationend', () => dot.classList.remove('hit')));
  function update() {
    scheduled = false;
    const limit = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const position = Math.max(0, Math.min(limit, scrollY));
    rail.style.setProperty('--progress', (position / limit * 100) + '%');
    let current = 0;
    stops.forEach((stop, index) => {
      if (stop <= position + 1) current = index;
      if ((lastScroll < stop && position >= stop) || (lastScroll > stop && position <= stop)) pulse(dots[index]);
    });
    dots.forEach((dot, index) => {
      if (index === current) dot.setAttribute('aria-current', 'location');
      else dot.removeAttribute('aria-current');
    });
    lastScroll = position;
  }
  addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(update); }
  }, { passive: true });
  addEventListener('resize', measure);
  addEventListener('load', measure);
  new ResizeObserver(measure).observe(document.querySelector('main'));
  measure();
}
