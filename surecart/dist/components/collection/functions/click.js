export function clickOutside(e,t){document.addEventListener("click",(i=>{let n=i.target;do{if(n==e)return;n=n.parentNode}while(n);t()}))}