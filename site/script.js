// Small script for site navigation (active link)
(function(){
  try{
    const links = document.querySelectorAll('.site-nav a');
    links.forEach(a => {
      if (a.href === location.href || a.href === location.origin + location.pathname) {
        a.classList.add('active');
      }
    });
  }catch(e){console.warn('script error',e)}
})();
