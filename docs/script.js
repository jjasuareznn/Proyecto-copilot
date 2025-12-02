// Small script for site navigation (active link)
(function(){
  try{
    const links = document.querySelectorAll('.site-nav a');
    links.forEach(a => {
      // Mark active link more reliably
      if (location.pathname.endsWith(a.getAttribute('href'))) {
        a.classList.add('active');
      }
    });

    // Mobile nav toggle
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('nav-main');
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        nav.classList.toggle('show');
      });
    }
  }catch(e){console.warn('script error',e)}
})();
