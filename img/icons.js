// ELECTRY LAB line icons. <i data-ic="meishi"></i> を SVG に置き換える
(function(){
const P={
basic:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4h6v3H9zM8.5 11h7M8.5 14.5h7M8.5 18h4"/>',
meishi:'<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="8" cy="11" r="2"/><path d="M6 15.5c.6-1.2 1.2-1.6 2-1.6s1.4.4 2 1.6M13 10h5M13 13h5M13 16h3"/>',
logo:'<path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6z"/><path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"/>',
shopcard:'<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="7.5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="16.5" cy="12" r="1.6"/>',
flyer:'<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4"/><rect x="8.5" y="10" width="8" height="5" rx="1"/><path d="M8.5 18h8"/>',
menu:'<path d="M4 5.5C6.5 4 9.5 4 12 5.5 14.5 4 17.5 4 20 5.5V19c-2.5-1.5-5.5-1.5-8 0-2.5-1.5-5.5-1.5-8 0z"/><path d="M12 5.5V19M6.5 9h3M6.5 12h3M14.5 9h3M14.5 12h3"/>',
lighter:'<rect x="7" y="10" width="10" height="11" rx="2"/><path d="M9 10V8h6v2"/><path d="M12 7c-1.6-1.2-1.6-2.7 0-4 .4 1.2 1.6 1.6 1.6 2.8 0 .8-.7 1.2-1.6 1.2z"/>',
pop:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.5"/>',
sns:'<rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M12 15.5l-2.6-2.5a1.6 1.6 0 012.6-1.9 1.6 1.6 0 012.6 1.9z"/><path d="M10.5 19h3"/>',
nigaoe:'<circle cx="12" cy="10" r="5.5"/><path d="M10 9.5h.01M14 9.5h.01M10 12.2c1.2 1 2.8 1 4 0"/><path d="M5 21c1.3-2.8 4-4.3 7-4.3s5.7 1.5 7 4.3"/>',
goods:'<path d="M5 8h14l-1.2 13H6.2z"/><path d="M9 8V6a3 3 0 016 0v2"/>',
qr:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v.01M17 20h4M20 17v3"/>',
system:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><path d="M8 11l2-2-2-2M12 11h4"/>',
};
const NS='http://www.w3.org/2000/svg';
let gid=0;
function make(name){
  const id='icg'+(gid++);
  const s=document.createElementNS(NS,'svg');
  s.setAttribute('viewBox','0 0 24 24');s.setAttribute('aria-hidden','true');s.setAttribute('class','ic');
  s.innerHTML='<defs><linearGradient id="'+id+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2BBFBF"/><stop offset="1" stop-color="#E8237A"/></linearGradient></defs>'
    +'<g fill="none" stroke="url(#'+id+')" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">'+(P[name]||'')+'</g>';
  return s;
}
window.ElectryIcon=make;
function run(root){(root||document).querySelectorAll('i[data-ic]').forEach(i=>i.replaceWith(make(i.dataset.ic)));}
window.ElectryIconRun=run;
if(document.readyState!=='loading')run();else document.addEventListener('DOMContentLoaded',()=>run());
})();
