const o=(t,e=7,s=1)=>{const i=()=>{n=n<r?n+s:1,t.style.marginLeft=`${-n}px`,requestAnimationFrame(i)};let n=0;const a=t.innerHTML;t.innerHTML=Array(e).fill(a+"").join(""),t.style.position="absolute";const r=t.clientWidth+1;t.style.position="",i()};o(document.getElementById("marquee-1"),16,1);o(document.getElementById("marquee-2"),16,1);