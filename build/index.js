(()=>{"use strict";var e,t={273:()=>{const e=window.wp.element,t=window.wp.primitives,l=window.wp.blocks,o=(window.wp.i18n,window.wp.blockEditor),s=window.wp.components,a=JSON.parse('{"u2":"create-block/peak-logo"}'),r=(0,e.createElement)(t.SVG,{class:"peak-logo-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"-1 -1 102 102"},(0,e.createElement)(t.Circle,{class:"peak-logo-svg-circle",cx:"50",cy:"50",r:"50"}),(0,e.createElement)(t.Polygon,{class:"peak-logo-svg-letters",points:"70.45 39.19 70.45 61.48 75.19 61.48 75.19 53.82 78.47 50.48 84.61 61.48 90.66 61.48 82.14 46.79 89.65 39.19 83.69 39.19 75.19 47.68 75.19 39.19 70.45 39.19"}),(0,e.createElement)(t.Polygon,{class:"peak-logo-svg-letters",points:"43.83 43.41 43.83 39.22 28.98 39.22 28.98 61.48 43.83 61.48 43.83 57.29 33.71 57.29 33.71 52.23 43.2 52.23 43.2 48.03 33.71 48.03 33.71 43.41 43.83 43.41"}),(0,e.createElement)(t.Path,{class:"peak-logo-svg-letters",d:"M45.77,61.48h5.12L51.48,60a3,3,0,0,1,.16-.36,6,6,0,0,1,11-.21,2.92,2.92,0,0,1,.14.31l.7,1.78h5.15l-8.9-22.26h-5Zm13.95-9.63a10.56,10.56,0,0,0-2.53-.31,9.85,9.85,0,0,0-2.55.33l2.56-6.52Z"}),(0,e.createElement)(t.Path,{class:"peak-logo-svg-letters",d:"M9.34,39.22V61.48h4.73V53.57h3.4c5.56,0,9-2.71,9-7.18s-3.46-7.17-9-7.17Zm12.29,7.17c0,1.91-1.48,3-4.16,3h-3.4v-6h3.4C20.15,43.41,21.63,44.49,21.63,46.39Z"}));(0,l.registerBlockType)(a.u2,{edit:function(t){let{attributes:l,setAttributes:a}=t;const[r,c]=(0,e.useState)(!1);return(0,e.createElement)("div",(0,o.useBlockProps)(),(0,e.createElement)(o.BlockControls,null,(0,e.createElement)(s.Toolbar,null,(0,e.createElement)(s.Button,{onClick:()=>{c((e=>!e))},icon:"admin-links"},r&&(0,e.createElement)(s.Popover,null,(0,e.createElement)(o.URLInput,{value:l.url,onChange:e=>a({url:e})}))))),(0,e.createElement)("svg",{className:"peak-logo-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"-1 -1 102 102"},(0,e.createElement)("circle",{class:"peak-logo-svg-circle",cx:"50",cy:"50",r:"50"}),(0,e.createElement)("polygon",{class:"peak-logo-svg-letters",points:"70.45 39.19 70.45 61.48 75.19 61.48 75.19 53.82 78.47 50.48 84.61 61.48 90.66 61.48 82.14 46.79 89.65 39.19 83.69 39.19 75.19 47.68 75.19 39.19 70.45 39.19"}),(0,e.createElement)("polygon",{class:"peak-logo-svg-letters",points:"43.83 43.41 43.83 39.22 28.98 39.22 28.98 61.48 43.83 61.48 43.83 57.29 33.71 57.29 33.71 52.23 43.2 52.23 43.2 48.03 33.71 48.03 33.71 43.41 43.83 43.41"}),(0,e.createElement)("path",{class:"peak-logo-svg-letters",d:"M45.77,61.48h5.12L51.48,60a3,3,0,0,1,.16-.36,6,6,0,0,1,11-.21,2.92,2.92,0,0,1,.14.31l.7,1.78h5.15l-8.9-22.26h-5Zm13.95-9.63a10.56,10.56,0,0,0-2.53-.31,9.85,9.85,0,0,0-2.55.33l2.56-6.52Z"}),(0,e.createElement)("path",{class:"peak-logo-svg-letters",d:"M9.34,39.22V61.48h4.73V53.57h3.4c5.56,0,9-2.71,9-7.18s-3.46-7.17-9-7.17Zm12.29,7.17c0,1.91-1.48,3-4.16,3h-3.4v-6h3.4C20.15,43.41,21.63,44.49,21.63,46.39Z"})))},save:function(t){let{attributes:l}=t;return(0,e.createElement)("div",o.useBlockProps.save(),(0,e.createElement)("a",{href:l.url},(0,e.createElement)("svg",{className:"peak-logo-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"-1 -1 102 102"},(0,e.createElement)("circle",{class:"peak-logo-svg-circle",cx:"50",cy:"50",r:"50"}),(0,e.createElement)("polygon",{class:"peak-logo-svg-letters",points:"70.45 39.19 70.45 61.48 75.19 61.48 75.19 53.82 78.47 50.48 84.61 61.48 90.66 61.48 82.14 46.79 89.65 39.19 83.69 39.19 75.19 47.68 75.19 39.19 70.45 39.19"}),(0,e.createElement)("polygon",{class:"peak-logo-svg-letters",points:"43.83 43.41 43.83 39.22 28.98 39.22 28.98 61.48 43.83 61.48 43.83 57.29 33.71 57.29 33.71 52.23 43.2 52.23 43.2 48.03 33.71 48.03 33.71 43.41 43.83 43.41"}),(0,e.createElement)("path",{class:"peak-logo-svg-letters",d:"M45.77,61.48h5.12L51.48,60a3,3,0,0,1,.16-.36,6,6,0,0,1,11-.21,2.92,2.92,0,0,1,.14.31l.7,1.78h5.15l-8.9-22.26h-5Zm13.95-9.63a10.56,10.56,0,0,0-2.53-.31,9.85,9.85,0,0,0-2.55.33l2.56-6.52Z"}),(0,e.createElement)("path",{class:"peak-logo-svg-letters",d:"M9.34,39.22V61.48h4.73V53.57h3.4c5.56,0,9-2.71,9-7.18s-3.46-7.17-9-7.17Zm12.29,7.17c0,1.91-1.48,3-4.16,3h-3.4v-6h3.4C20.15,43.41,21.63,44.49,21.63,46.39Z"}))))},icon:r})}},l={};function o(e){var s=l[e];if(void 0!==s)return s.exports;var a=l[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,l,s,a)=>{if(!l){var r=1/0;for(g=0;g<e.length;g++){for(var[l,s,a]=e[g],c=!0,n=0;n<l.length;n++)(!1&a||r>=a)&&Object.keys(o.O).every((e=>o.O[e](l[n])))?l.splice(n--,1):(c=!1,a<r&&(r=a));if(c){e.splice(g--,1);var p=s();void 0!==p&&(t=p)}}return t}a=a||0;for(var g=e.length;g>0&&e[g-1][2]>a;g--)e[g]=e[g-1];e[g]=[l,s,a]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};o.O.j=t=>0===e[t];var t=(t,l)=>{var s,a,[r,c,n]=l,p=0;if(r.some((t=>0!==e[t]))){for(s in c)o.o(c,s)&&(o.m[s]=c[s]);if(n)var g=n(o)}for(t&&t(l);p<r.length;p++)a=r[p],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(g)},l=globalThis.webpackChunkpeak_logo=globalThis.webpackChunkpeak_logo||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var s=o.O(void 0,[431],(()=>o(273)));s=o.O(s)})();