import './styles/base.css';
import './sections/nav.css';
import './sections/hero.css';
import './sections/problem.css';
import './sections/features.css';
import './sections/download.css';
import './sections/footer.css';

/* Scroll-reveal: fade + slide up elements with data-reveal attribute */
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    observer.observe(el);
  });
}
