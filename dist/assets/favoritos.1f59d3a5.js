import{i as a,f as r}from"./index.bc425d56.js";const v=a("favoritos",()=>{const e=r([]);return localStorage.getItem("favoritos")&&(e.value=JSON.parse(localStorage.getItem("favoritos"))),{favoritos:e,add:o=>{e.value.push(o),localStorage.setItem("favoritos",JSON.stringify(e.value))},remove:o=>{e.value=e.value.filter(t=>t.id!==o),localStorage.setItem("favoritos",JSON.stringify(e.value))},findPoke:o=>e.value.find(t=>t.name===o)}});export{v as u};
