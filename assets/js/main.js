(function () {
  var cfg = window.LIVHNUS_CONFIG || {};

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // Google Forms: embed or link, driven by config.js
  var keys = { registration: 'registrationFormUrl', enquiry: 'enquiryFormUrl', testimonial: 'testimonialFormUrl' };
  document.querySelectorAll('[data-form]').forEach(function (block) {
    var kind = block.getAttribute('data-form');
    var url = (cfg[keys[kind]] || '').trim();
    var missing = block.querySelector('[data-form-missing]');
    var embed = block.querySelector('[data-form-embed]');
    var fallback = block.querySelector('[data-form-fallback]');
    if (!/^https:\/\/(docs\.google\.com\/forms|forms\.gle)\//.test(url)) { if (missing) missing.hidden = false; return; }
    block.querySelectorAll('[data-form-link]').forEach(function (a) { a.href = url; });
    if (fallback) fallback.hidden = false;
    if (cfg.embedForms && url.indexOf('docs.google.com/forms') !== -1) {
      var src = url.indexOf('embedded=true') === -1 ? url + (url.indexOf('?') === -1 ? '?' : '&') + 'embedded=true' : url;
      var f = document.createElement('iframe');
      f.src = src; f.title = 'Google Form: ' + kind; f.loading = 'lazy';
      embed.appendChild(f); embed.hidden = false;
    }
  });

  // Optional links (Google reviews, WhatsApp)
  document.querySelectorAll('[data-config-link]').forEach(function (a) {
    var key = a.getAttribute('data-config-link');
    var url = (cfg[key] || '').trim();
    var note = document.querySelector('[data-config-missing="' + key + '"]');
    if (/^https:\/\//.test(url)) { a.href = url; a.hidden = false; if (note) note.hidden = true; }
  });
})();
