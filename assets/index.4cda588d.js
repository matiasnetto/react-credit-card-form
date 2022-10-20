var y=Object.defineProperty,b=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var N=(e,a,t)=>a in e?y(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,d=(e,a)=>{for(var t in a||(a={}))C.call(a,t)&&N(e,t,a[t]);if(g)for(var t of g(a))D.call(a,t)&&N(e,t,a[t]);return e},m=(e,a)=>b(e,x(a));import{j as _,r as p,o as M,a as S,R as w,b as A}from"./vendor.2a604fa0.js";const E=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}};E();var T="/react-credit-card-form/assets/address-card-solid.92f2be79.svg",k="/react-credit-card-form/assets/credit-card-solid.80c6f910.svg";const h=e=>e===null?null:e.toString().length===1&&e!==0?`0${e}`:e.toString();var f="/react-credit-card-form/assets/mastercard.44ea7a10.png",v="/react-credit-card-form/assets/visa-blue.73fab353.png",I="/react-credit-card-form/assets/angle-down-solid.64c37b93.svg";const j=e=>{const a=Number(e.split(" ").join(""));return isNaN(a)?Number(e.slice(0,e.length-1))||null:e===""?null:e.length>16?Number(e.slice(0,16)):a},P=e=>{const a=Number(e);return isNaN(a)?Number(e.slice(0,e.length-1))||null:e===""?null:a.toString().length>2?Number(a.toString().slice(0,2)):a},O=e=>isNaN(Number(e))?e.slice(0,e.length-1):e.length>3?e.slice(0,3):e,r=_.exports.jsx,c=_.exports.jsxs,Y=_.exports.Fragment,F=({setFormData:e,setOpenSelectModal:a})=>{const t=i=>{const s=i.currentTarget.name;e(n=>m(d({},n),{cardType:s})),a(!1)};return r("div",{className:"type-modal-container",children:c("div",{className:"type-modal",children:[r("button",{name:"visa",className:"type-modal__item",onClick:t,children:r("img",{className:"type-modal__image",src:v,alt:"Visa"})}),r("button",{name:"mastercard",className:"type-modal__item",onClick:t,children:r("img",{className:"type-modal__image",src:f,alt:"Mastercard"})})]})})},L=({setFormData:e,formData:a})=>{const[t,i]=p.exports.useState(!1),s=l=>{let{name:o,value:u}=l.target;if(o==="cardNumber"){e(m(d({},a),{[o]:j(u)}));return}if(o==="expDateMonth"||o==="expDateYear"){e(m(d({},a),{[o]:P(u)}));return}if(o==="securityCode"){e(m(d({},a),{[o]:O(u)}));return}e(m(d({},a),{[o]:u}))},n=l=>{l.preventDefault(),i(!0)};return c("div",{className:"form-container",children:[c("form",{className:"form",action:"",children:[c("div",{className:"form__input-container",children:[r("label",{className:"form__input-label",htmlFor:"",children:"CARDHOLDER NAME"}),c("div",{className:"form__input-subcontainer",children:[r("i",{className:"form__icon",children:r("img",{className:"form__icon-image",src:T,alt:""})}),r("input",{className:"form__input",type:"text",name:"cardholderName",onChange:s,value:a.cardholderName,placeholder:"Jhon Doe",autoComplete:"off"})]})]}),c("div",{className:"form__input-flex-container",children:[c("div",{className:"form__input-container",children:[r("label",{className:"form__input-label",htmlFor:"",children:"CARD NUMBER"}),c("div",{className:"form__input-subcontainer",children:[r("i",{className:"form__icon",children:r("img",{className:"form__icon-image",src:k,alt:""})}),r("input",{className:"form__input form__input--number",type:"string",name:"cardNumber",onChange:s,value:a.cardNumber||"",placeholder:"123456789123",autoComplete:"off"})]})]}),c("div",{className:"form__input-container form__input-container--type",children:[r("label",{className:"form__input-label",htmlFor:"",children:"TYPE"}),r("div",{className:"form__input-subcontainer",children:c("button",{className:"form__type-select-button",onClick:n,children:[a.cardType==="mastercard"&&r("img",{className:"form__select-button-image",src:f}),a.cardType==="visa"&&r("img",{className:"form__select-button-image",src:v}),r("img",{className:"form__select-down-img",src:I,alt:""})]})})]})]}),c("div",{className:"form__input-flex-container",children:[c("div",{className:"form__input-container",children:[r("label",{className:"form__input-label",htmlFor:"",children:"EXP.DATE"}),c("div",{className:"form__input-subcontainer",children:[r("input",{className:"form__input form__input--small",type:"string",name:"expDateMonth",onChange:s,value:h(a.expDateMonth)||"",placeholder:"05"}),r("span",{children:"/"}),r("input",{className:"form__input form__input--small",type:"string",name:"expDateYear",onChange:s,value:h(a.expDateYear)||"",placeholder:"01"})]})]}),c("div",{className:"form__input-container form__input-container--security-code",children:[r("label",{className:"form__input-label",htmlFor:"",children:"CVC"}),r("div",{className:"form__input-subcontainer",children:r("input",{className:"form__input form__input--small",type:"string",name:"securityCode",onChange:s,value:a.securityCode||"",placeholder:"123"})})]})]})]}),t&&r(F,{setFormData:e,setOpenSelectModal:i})]})};var R="/react-credit-card-form/assets/visa.eaf385d6.png",B="/react-credit-card-form/assets/chip.13f71501.png";const $=e=>{if(e===null)return"";const a=e.toString().length/4,t=e.toString(),i=[];for(let s=0;s<a;s++)i.push(t.slice(s*4,s*4+4));return i.join(" ")};var U="/react-credit-card-form/assets/finger.71d10702.svg";const H=e=>{const{cardNumber:a,cardType:t,cardholderName:i,expDateMonth:s,expDateYear:n,securityCode:l}=e;return r("div",{className:"credit-card-main-container","data-testid":"credit-card",children:c(M,{className:"tilt-container",tiltReverse:!0,glareEnable:!0,perspective:700,children:[c("div",{className:"credit-card",children:[t==="mastercard"&&r("div",{className:"mastercard-card"}),t==="visa"&&r("div",{className:"visa-card"}),c("div",{className:"credit-card__row credit-card__row--type",children:[t==="mastercard"&&r("img",{className:"credit-card__type-image",src:f,alt:"mastercard image"}),t==="visa"&&r("img",{className:"credit-card__type-image",src:R,alt:"visa image"})]}),r("div",{className:"credit-card__row",children:r("img",{className:"credit-card__chip-image",src:B,alt:"chip","data-testid":"card-type-display"})}),r("div",{className:"credit-card__row",children:r("p",{className:"credit-card__card-number","data-testid":"card-number-display",children:$(a)})}),c("div",{className:"credit-card__row credit-card__row--name",children:[r("p",{className:"credit-card__name","data-testid":"card-name-display",children:i}),c("p",{className:"credit-card__exp-date","data-testid":"card-exp-date-display",children:[h(s),"/",h(n)]})]})]}),c("div",{className:"hover-message",children:[r("p",{className:"hover-message__text",children:"TOUCH ME"}),r("img",{className:"hover-message__img",src:U,alt:""})]})]})})},q=e=>{var a;if(Object.values(e).some(t=>!t))return{error:!0,message:"Necesitas completar todos los campos"};if(typeof e.cardNumber=="number"&&e.cardNumber.toString().length<16)return{error:!0,message:"Numero de tarjeta invalido"};if(e.expDateYear&&e.expDateMonth){const t=new Date;if(new Date(e.expDateYear+2e3,e.expDateMonth,t.getDate())<t)return{error:!0,message:"La tarjeta se encuentra vencida"}}return e.expDateMonth&&e.expDateMonth>12?{error:!0,message:"Numero de mes invalido"}:e.securityCode&&((a=e.securityCode)==null?void 0:a.length)<3?{error:!0,message:"Numero de seguridad invalido"}:{error:!1,message:""}};var V="/react-credit-card-form/assets/circle-xmark-solid.1f2778bb.svg",z="/react-credit-card-form/assets/circle-check-solid.055ba50e.svg";const J=({type:e,message:a,setMessage:t})=>(p.exports.useEffect(()=>{setTimeout(()=>{t(null)},4e3)},[]),c("div",{className:"alert-message","data-testid":"alert",children:[r("i",{className:"alert-message__icon",children:r("img",{src:e==="error"?V:z,alt:"",className:"alert-message__img"})}),r("p",{className:"alert-message__text",children:a})]})),K={cardNumber:null,cardType:"mastercard",cardholderName:"",expDateYear:null,expDateMonth:null,securityCode:null};function W(){const[e,a]=p.exports.useState(K),[t,i]=p.exports.useState(null),s=()=>{const n=q(e);n.error?i({type:"error",message:n.message}):(i({type:"succes",message:"Pago realizado!"}),setTimeout(()=>{window.location.reload()},4e3))};return c(Y,{children:[c("div",{className:"App",children:[r(H,{cardNumber:e.cardNumber,cardType:e.cardType,cardholderName:e.cardholderName,expDateMonth:e.expDateMonth,expDateYear:e.expDateYear,securityCode:e.securityCode}),c("div",{className:"form-and-payment",children:[r(L,{setFormData:a,formData:e}),c("div",{className:"payment-container",children:[r("div",{className:"payment-block",children:c("div",{children:[r("p",{className:"payment__title",children:"Payment amount:"}),r("p",{className:"payment__amount",children:"$110 USD"})]})}),r("div",{className:"payment-block payment-block--button",children:r("button",{className:"payment__button",onClick:s,children:"Pay"})})]})]})]}),t&&S.exports.createPortal(r(J,{type:t.type,message:t.message,setMessage:i}),document.getElementById("alert-modal"))]})}const X=()=>{console.log("FUNCIONAA");const e=document.querySelector("meta[name=viewport]");e==null||e.setAttribute("content",`height=${window.innerHeight}px, width=device-width, initial-scale=1`)};X();w.render(r(A.StrictMode,{children:r(W,{})}),document.getElementById("root"));
