// Alternador de tema claro/escuro — o estado inicial já foi aplicado
// de forma síncrona no <head> (evita flash do tema errado); aqui só
// cuida do clique e mantém a preferência salva.
(function () {
  var KEY = 'mg-theme';
  var btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    var next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem(KEY, next); } catch (e) {}
  });
})();

// Revela seções ao rolar a página
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });
} else {
  document.querySelectorAll('.reveal').forEach(function (el) {
    el.classList.add('in');
  });
}

// Comparador antes/depois — arrasta em qualquer ponto da imagem pra revelar o resultado
document.querySelectorAll('.compare').forEach(function (el) {
  var range = el.querySelector('input[type="range"]');
  var after = el.querySelector('.compare-after');
  var line = el.querySelector('.compare-line');
  var handle = el.querySelector('.compare-handle');
  if (!range || !after) return;
  var dragging = false;

  function paint(pct) {
    var v = pct + '%';
    after.style.clipPath = 'inset(0 0 0 ' + v + ')';
    if (line) line.style.left = v;
    if (handle) handle.style.left = v;
  }

  function pctFromEvent(evt) {
    var rect = el.getBoundingClientRect();
    var x = (evt.clientX !== undefined ? evt.clientX : evt.touches[0].clientX) - rect.left;
    return Math.max(0, Math.min(100, (x / rect.width) * 100));
  }

  function setFromEvent(evt) {
    var pct = pctFromEvent(evt);
    range.value = pct;
    paint(pct);
  }

  el.addEventListener('pointerdown', function (evt) {
    dragging = true;
    el.setPointerCapture(evt.pointerId);
    setFromEvent(evt);
  });
  el.addEventListener('pointermove', function (evt) {
    if (!dragging) return;
    setFromEvent(evt);
  });
  el.addEventListener('pointerup', function () { dragging = false; });
  el.addEventListener('pointercancel', function () { dragging = false; });

  // Teclado (setas) continua funcionando via o input nativo
  range.addEventListener('input', function () { paint(range.value); });

  paint(range.value);
});
