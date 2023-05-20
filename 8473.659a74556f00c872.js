"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8473],{18473:(W,_,c)=>{c.r(_),c.d(_,{ion_select:()=>w,ion_select_option:()=>A,ion_select_popover:()=>S});var h=c(33986),o=c(35063),u=c(60418),m=c(39983),g=c(49679),v=c(88378);const j=(e,t)=>1!==e.nodeType?void 0:(e.tagName===t.toUpperCase()?[e]:Array.from(e.querySelectorAll(t))).find(n=>n.value===e.value);let w=class{constructor(e){(0,o.r)(this,e),this.ionChange=(0,o.e)(this,"ionChange",7),this.ionCancel=(0,o.e)(this,"ionCancel",7),this.ionFocus=(0,o.e)(this,"ionFocus",7),this.ionBlur=(0,o.e)(this,"ionBlur",7),this.ionStyle=(0,o.e)(this,"ionStyle",7),this.inputId="ion-sel-"+D++,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=t=>{this.setFocus(),this.open(t)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}styleChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.didInit&&this.ionChange.emit({value:this.value})}connectedCallback(){var e=this;return(0,h.Z)(function*(){e.updateOverlayOptions(),e.emitStyle(),e.mutationO=((e,t,i)=>{if("undefined"==typeof MutationObserver)return;const n=new MutationObserver(s=>{i(((e,t)=>{let i;return e.forEach(n=>{for(let s=0;s<n.addedNodes.length;s++)i=j(n.addedNodes[s],t)||i}),i})(s,"ion-select-option"))});return n.observe(e,{childList:!0,subtree:!0}),n})(e.el,0,(0,h.Z)(function*(){e.updateOverlayOptions()}))})()}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}componentDidLoad(){this.didInit=!0}open(e){var t=this;return(0,h.Z)(function*(){if(t.disabled||t.isExpanded)return;const i=t.overlay=yield t.createOverlay(e);if(t.isExpanded=!0,i.onDidDismiss().then(()=>{t.overlay=void 0,t.isExpanded=!1,t.setFocus()}),yield i.present(),"popover"===t.interface){let n=t.childOpts.map(r=>r.value).indexOf(t.value);n=n>-1?n:0;const s=i.querySelector(`.select-interface-option:nth-child(${n+1})`);s&&(0,m.f)(s)}return i})()}createOverlay(e){let t=this.interface;return"action-sheet"===t&&this.multiple&&(console.warn(`Select interface cannot be "${t}" with a multi-value select. Using the "alert" interface instead.`),t="alert"),"popover"===t&&!e&&(console.warn(`Select interface cannot be a "${t}" without passing an event. Using the "alert" interface instead.`),t="alert"),"action-sheet"===t?this.openActionSheet():"popover"===t?this.openPopover(e):this.openAlert()}updateOverlayOptions(){const e=this.overlay;if(!e)return;const t=this.childOpts,i=this.value;switch(this.interface){case"action-sheet":e.buttons=this.createActionSheetButtons(t,i);break;case"popover":const n=e.querySelector("ion-select-popover");n&&(n.options=this.createPopoverOptions(t,i));break;case"alert":e.inputs=this.createAlertInputs(t,this.multiple?"checkbox":"radio",i)}}createActionSheetButtons(e,t){const i=e.map(n=>{const s=b(n),r=Array.from(n.classList).filter(a=>"hydrated"!==a).join(" "),l=`${O} ${r}`;return{role:x(t,s,this.compareWith)?"selected":"",text:n.textContent,cssClass:l,handler:()=>{this.value=s}}});return i.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}}),i}createAlertInputs(e,t,i){return e.map(s=>{const r=b(s),l=Array.from(s.classList).filter(d=>"hydrated"!==d).join(" ");return{type:t,cssClass:`${O} ${l}`,label:s.textContent||"",value:r,checked:x(i,r,this.compareWith),disabled:s.disabled}})}createPopoverOptions(e,t){return e.map(n=>{const s=b(n),r=Array.from(n.classList).filter(a=>"hydrated"!==a).join(" ");return{text:n.textContent||"",cssClass:`${O} ${r}`,value:s,checked:x(t,s,this.compareWith),disabled:n.disabled,handler:a=>{this.value=a,this.multiple||this.close()}}})}openPopover(e){var t=this;return(0,h.Z)(function*(){const i=t.interfaceOptions,n=(0,u.b)(t),s="md"!==n,r=t.multiple,l=t.value;let a=e,d="auto";const p=t.el.closest("ion-item");p&&(p.classList.contains("item-label-floating")||p.classList.contains("item-label-stacked"))&&(a=Object.assign(Object.assign({},e),{detail:{ionShadowTarget:p}}),d="cover");const C=Object.assign(Object.assign({mode:n,event:a,alignment:"center",size:d,showBackdrop:s},i),{component:"ion-select-popover",cssClass:["select-popover",i.cssClass],componentProps:{header:i.header,subHeader:i.subHeader,message:i.message,multiple:r,value:l,options:t.createPopoverOptions(t.childOpts,l)}});return g.c.create(C)})()}openActionSheet(){var e=this;return(0,h.Z)(function*(){const t=(0,u.b)(e),i=e.interfaceOptions,n=Object.assign(Object.assign({mode:t},i),{buttons:e.createActionSheetButtons(e.childOpts,e.value),cssClass:["select-action-sheet",i.cssClass]});return g.b.create(n)})()}openAlert(){var e=this;return(0,h.Z)(function*(){const t=e.getLabel(),i=t?t.textContent:null,n=e.interfaceOptions,s=e.multiple?"checkbox":"radio",r=(0,u.b)(e),l=Object.assign(Object.assign({mode:r},n),{header:n.header?n.header:i,inputs:e.createAlertInputs(e.childOpts,s,e.value),buttons:[{text:e.cancelText,role:"cancel",handler:()=>{e.ionCancel.emit()}},{text:e.okText,handler:a=>{e.value=a}}],cssClass:["select-alert",n.cssClass,e.multiple?"multiple-select-alert":"single-select-alert"]});return g.a.create(l)})()}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}getLabel(){return(0,m.j)(this.el)}hasValue(){return""!==this.getText()}get childOpts(){return Array.from(this.el.querySelectorAll("ion-select-option"))}getText(){const e=this.selectedText;return null!=e&&""!==e?e:z(this.childOpts,this.value,this.compareWith)}setFocus(){this.focusEl&&this.focusEl.focus()}emitStyle(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled,select:!0,"select-disabled":this.disabled,"has-placeholder":void 0!==this.placeholder,"has-value":this.hasValue(),"has-focus":this.isExpanded})}render(){const{disabled:e,el:t,inputId:i,isExpanded:n,name:s,placeholder:r,value:l}=this,a=(0,u.b)(this),{labelText:d,labelId:p}=(0,m.d)(t,i);(0,m.e)(!0,t,s,M(l),e);let k=!1,f=this.getText();""===f&&void 0!==r&&(f=r,k=!0);const R={"select-text":!0,"select-placeholder":k},K=k?"placeholder":"text",T=void 0!==d?""!==f?`${f}, ${d}`:d:f;return(0,o.h)(o.H,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":e?"true":null,"aria-label":T,class:{[a]:!0,"in-item":(0,v.h)("ion-item",t),"select-disabled":e,"select-expanded":n}},(0,o.h)("div",{"aria-hidden":"true",class:R,part:K},f),(0,o.h)("div",{class:"select-icon",role:"presentation",part:"icon"},(0,o.h)("div",{class:"select-icon-inner"})),(0,o.h)("label",{id:p},T),(0,o.h)("button",{type:"button",disabled:e,id:i,"aria-labelledby":p,"aria-haspopup":"listbox","aria-expanded":`${n}`,onFocus:this.onFocus,onBlur:this.onBlur,ref:Z=>this.focusEl=Z}))}get el(){return(0,o.i)(this)}static get watchers(){return{disabled:["styleChanged"],placeholder:["styleChanged"],isExpanded:["styleChanged"],value:["valueChanged"]}}};const x=(e,t,i)=>void 0!==e&&(Array.isArray(e)?e.some(n=>y(n,t,i)):y(e,t,i)),b=e=>{const t=e.value;return void 0===t?e.textContent||"":t},M=e=>{if(null!=e)return Array.isArray(e)?e.join(","):e.toString()},y=(e,t,i)=>"function"==typeof i?i(e,t):"string"==typeof i?e[i]===t[i]:Array.isArray(t)?t.includes(e):e===t,z=(e,t,i)=>void 0===t?"":Array.isArray(t)?t.map(n=>E(e,n,i)).filter(n=>null!==n).join(", "):E(e,t,i)||"",E=(e,t,i)=>{const n=e.find(s=>y(b(s),t,i));return n?n.textContent:null};let D=0;const O="select-interface-option";w.style={ios:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px;opacity:0.33}",md:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px;-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:0.55}:host-context(.item-label-stacked) .select-icon,:host-context(.item-label-floating:not(.item-fill-outline)) .select-icon,:host-context(.item-label-floating.item-fill-outline){-webkit-transform:translate3d(0,  -9px,  0);transform:translate3d(0,  -9px,  0)}:host-context(.item-has-focus) .select-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host-context(.item-has-focus.item-label-stacked) .select-icon,:host-context(.item-has-focus.item-label-floating:not(.item-fill-outline)) .select-icon{-webkit-transform:translate3d(0,  -9px,  0) rotate(180deg);transform:translate3d(0,  -9px,  0) rotate(180deg)}:host-context(ion-item.ion-focused) .select-icon,:host-context(.item-has-focus) .select-icon{color:var(--highlight-color-focused);opacity:1}"};let A=class{constructor(e){(0,o.r)(this,e),this.inputId="ion-selopt-"+$++,this.disabled=!1}render(){return(0,o.h)(o.H,{role:"option",id:this.inputId,class:(0,u.b)(this)})}get el(){return(0,o.i)(this)}},$=0;A.style=":host{display:none}";let S=class{constructor(e){(0,o.r)(this,e),this.options=[]}onSelect(e){this.setChecked(e),this.callOptionHandler(e)}findOptionFromEvent(e){const{options:t}=this;return t.find(i=>i.value===e.target.value)}callOptionHandler(e){const t=this.findOptionFromEvent(e),i=this.getValues(e);t&&t.handler&&(0,g.s)(t.handler,i)}rbClick(e){this.callOptionHandler(e)}setChecked(e){const{multiple:t}=this,i=this.findOptionFromEvent(e);t&&i&&(i.checked=e.detail.checked)}getValues(e){const{multiple:t,options:i}=this;if(t)return i.filter(s=>s.checked).map(s=>s.value);const n=this.findOptionFromEvent(e);return n?n.value:void 0}renderOptions(e){const{multiple:t}=this;return!0===t?this.renderCheckboxOptions(e):this.renderRadioOptions(e)}renderCheckboxOptions(e){return e.map(t=>(0,o.h)("ion-item",{class:(0,v.g)(t.cssClass)},(0,o.h)("ion-checkbox",{slot:"start",value:t.value,disabled:t.disabled,checked:t.checked}),(0,o.h)("ion-label",null,t.text)))}renderRadioOptions(e){const t=e.filter(i=>i.checked).map(i=>i.value)[0];return(0,o.h)("ion-radio-group",{value:t},e.map(i=>(0,o.h)("ion-item",{class:(0,v.g)(i.cssClass)},(0,o.h)("ion-label",null,i.text),(0,o.h)("ion-radio",{value:i.value,disabled:i.disabled,onClick:n=>this.rbClick(n)}))))}render(){const{header:e,message:t,options:i,subHeader:n}=this,s=void 0!==n||void 0!==t;return(0,o.h)(o.H,{class:(0,u.b)(this)},(0,o.h)("ion-list",null,void 0!==e&&(0,o.h)("ion-list-header",null,e),s&&(0,o.h)("ion-item",null,(0,o.h)("ion-label",{class:"ion-text-wrap"},void 0!==n&&(0,o.h)("h3",null,n),void 0!==t&&(0,o.h)("p",null,t))),this.renderOptions(i)))}};S.style={ios:".sc-ion-select-popover-ios-h ion-list.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-ios,ion-label.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}",md:".sc-ion-select-popover-md-h ion-list.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-md,ion-label.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md{opacity:0}ion-item.sc-ion-select-popover-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-popover-md{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08);--background-focused:var(--ion-color-primary, #3880ff);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #3880ff);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-popover-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #3880ff)}"}}}]);