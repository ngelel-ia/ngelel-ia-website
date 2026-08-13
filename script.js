
const $=(s,c=document)=>c.querySelector(s);
const $$=(s,c=document)=>[...c.querySelectorAll(s)];

const header=$('[data-header]');
const menu=$('[data-menu-toggle]');
const nav=$('[data-nav]');

const closeMenu=({restoreFocus=false}={})=>{
  if(!nav||!menu)return;
  nav.classList.remove('open');
  menu.classList.remove('active');
  menu.setAttribute('aria-expanded','false');
  menu.setAttribute('aria-label','Ouvrir le menu');
  if(restoreFocus)menu.focus();
};

if(menu&&nav){
  if(!nav.id)nav.id='primary-navigation';
  menu.setAttribute('aria-controls',nav.id);
  menu.setAttribute('aria-label','Ouvrir le menu');
}

addEventListener('scroll',()=>{
  header?.classList.toggle('scrolled',scrollY>8);
  if(nav?.classList.contains('open'))closeMenu();
},{passive:true});

menu?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menu.classList.toggle('active',open);
  menu.setAttribute('aria-expanded',String(open));
  menu.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');
});

$$('[data-nav] a').forEach(a=>a.addEventListener('click',()=>{
  closeMenu();
}));

document.addEventListener('click',event=>{
  if(!nav?.classList.contains('open'))return;
  if(!header?.contains(event.target))closeMenu();
});

document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&nav?.classList.contains('open'))closeMenu({restoreFocus:true});
});

const desktopNav=matchMedia('(min-width: 1001px)');
const handleDesktopNav=event=>{
  if(event.matches)closeMenu();
};
if(desktopNav.addEventListener)desktopNav.addEventListener('change',handleDesktopNav);
else desktopNav.addListener?.(handleDesktopNav);

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.1});

$$('.reveal').forEach(el=>observer.observe(el));
$$('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const SOCIALS={
  instagram:"",
  facebook:"",
  tiktok:""
};

$$('[data-social]').forEach(a=>{
  const url=SOCIALS[a.dataset.social];
  if(url){
    a.href=url;
    a.target="_blank";
    a.rel="noopener noreferrer";
    a.removeAttribute('aria-disabled');
  }else{
    a.addEventListener('click',e=>e.preventDefault());
  }
});

$$('[data-lead-form]').forEach(form=>form.addEventListener('submit',e=>{
  e.preventDefault();

  const fd=new FormData(form);
  const name=(fd.get('name')||'').trim();
  const email=(fd.get('email')||'').trim();
  const company=(fd.get('company')||'').trim();
  const interest=fd.get('interest')||'';
  const message=(fd.get('message')||'').trim();
  const status=$('[data-form-status]',form);

  if(!name||!email||!message){
    status.textContent="Merci de renseigner votre nom, votre email et votre besoin.";
    return;
  }

  const subject=`Demande NGËLEL IA — ${interest}`;
  const body=`Bonjour NGËLEL IA,

Nom : ${name}
Email : ${email}
Entreprise / activité : ${company||'-'}
Sujet : ${interest}

Besoin :
${message}

Merci.`;

  status.textContent="Ouverture de votre application email…";
  location.href=`mailto:contact@ngelelia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}));
