import{u as _}from"./getData.7266c82a.js";import{o as s,c as o,u as e,b as l,t as c,a as r,F as u,r as p,d as b,w as k,R as g,e as h}from"./index.bc425d56.js";const v=r("h1",{class:"mt-4 mb-4"}," Lista de pokemon ",-1),f={key:0},x={key:1,class:"alert alert-danger mt-2"},y={key:2,class:"mb-4"},C=["disabled"],N=["disabled"],V={class:"list-group"},w={class:"list-group-item"},F={__name:"pokemonsView",setup(B){const{data:t,loading:m,getData:i,error:d}=_();return i("https://pokeapi.co/api/v2/pokemon"),(D,a)=>(s(),o(u,null,[v,e(m)?(s(),o("p",f,"Cargando informaci\xF3n ...")):l("",!0),e(d)?(s(),o("div",x,c(e(d)),1)):e(t)?(s(),o("div",y,[r("button",{disabled:!e(t).previous,class:"btn btn-secondary me-2 mb-3",onClick:a[0]||(a[0]=n=>e(i)(e(t).previous))},"Previous",8,C),r("button",{disabled:!e(t).next,class:"btn btn-secondary mb-3",onClick:a[1]||(a[1]=n=>e(i)(e(t).next))},"Next",8,N),r("ul",V,[(s(!0),o(u,null,p(e(t).results,n=>(s(),o("li",w,[b(e(g),{class:"card-title link-dark",to:`/pokemons/${n.name}`},{default:k(()=>[h(c(n.name),1)]),_:2},1032,["to"])]))),256))])])):l("",!0)],64))}};export{F as default};