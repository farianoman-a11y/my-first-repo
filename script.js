// Small interactions: theme toggle + accessible focus handling
(function(){
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved) root.setAttribute('data-theme', saved);
  btn && btn.addEventListener('click', ()=>{
    const cur = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', cur);
    localStorage.setItem('theme', cur);
    btn.setAttribute('aria-pressed', cur==='dark');
  });

  // Show focus outlines only when keyboard is used
  function handleFirstTab(e){
    if(e.key === 'Tab') document.body.classList.add('user-is-tabbing');
  }
  window.addEventListener('keydown', handleFirstTab, {once:true});
})();
