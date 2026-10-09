const b=document.querySelector('button'),n=document.querySelector('nav');b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
