"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[681],{50681:(C,g,e)=>{e.r(g),e.d(g,{AccountSharePageModule:()=>y});var l=e(20976),s=e(12714),d=e(84653),h=e(23345),a=e(3323),p=e(34388),_=e(42723),f=e(27204),m=e(5469),u=e(55956),n=e(9288);function x(t,i){if(1&t&&(n.TgZ(0,"ion-row",4),n._UZ(1,"airgap-iac-qr",12),n.qZA()),2&t){const o=n.oxw();n.xp6(1),n.Q6J("messageDefinitionObjects",o.interactionUrl)("qrFormatPreference",o.companionApp.qrType)("level","L")("size",300)}}function A(t,i){if(1&t){const o=n.EpF();n.TgZ(0,"ion-row",13)(1,"ion-col",14)(2,"ion-item",15)(3,"ion-label"),n._uU(4,"QR Details"),n.qZA(),n.TgZ(5,"ion-toggle",16),n.NdJ("ionChange",function(){n.CHM(o);const r=n.oxw();return r.displayRawData=!r.displayRawData}),n.qZA()()()()}if(2&t){const o=n.oxw();n.xp6(5),n.Q6J("checked",o.displayRawData)}}function w(t,i){if(1&t&&(n.TgZ(0,"pre",20),n._uU(1),n.ALo(2,"json"),n.qZA()),2&t){const o=n.oxw(2);n.xp6(1),n.Oqu(n.lcZ(2,1,o.interactionUrl))}}function v(t,i){if(1&t){const o=n.EpF();n.TgZ(0,"ion-button",21),n.NdJ("click",function(){return n.CHM(o),n.oxw(2).copyToClipboard()}),n._uU(1,"Copy data to clipboard"),n.qZA()}}function T(t,i){if(1&t){const o=n.EpF();n.TgZ(0,"ion-button",22),n.NdJ("click",function(){return n.CHM(o),n.oxw(2).done()}),n._uU(1),n.ALo(2,"translate"),n.qZA()}2&t&&(n.xp6(1),n.hij(" ",n.lcZ(2,1,"wallet-share.done_label")," "))}function b(t,i){if(1&t&&(n.TgZ(0,"ion-row",13)(1,"ion-col",14),n.YNc(2,w,3,3,"pre",17),n.YNc(3,v,2,0,"ion-button",18),n.YNc(4,T,3,3,"ion-button",19),n.qZA()()),2&t){const o=n.oxw();n.xp6(2),n.Q6J("ngIf",o.displayRawData),n.xp6(1),n.Q6J("ngIf",o.displayRawData),n.xp6(1),n.Q6J("ngIf",o.displayRawData)}}function Z(t,i){if(1&t){const o=n.EpF();n.TgZ(0,"ion-fab",23)(1,"ion-button",24),n.NdJ("click",function(){return n.CHM(o),n.oxw().done()}),n._uU(2),n.ALo(3,"translate"),n.qZA()()}2&t&&(n.xp6(2),n.Oqu(n.lcZ(3,1,"wallet-share.done_label")))}const S=function(t){return{walletName:t}},P=[{path:"",component:(()=>{class t{constructor(o,c){var r;this.navigationService=o,this.clipboardService=c,this.interactionUrl=[],this.splits=[],this.displayRawData=!1,this.interactionUrl=this.navigationService.getState().interactionUrl,this.companionApp=null!==(r=this.navigationService.getState().companionApp)&&void 0!==r?r:m.B,this.walletName=this.companionApp.name}done(){this.navigationService.routeToSecretsTab().catch((0,u.a1)(u.qj.IONIC_NAVIGATION))}copyToClipboard(){this.clipboardService.copyAndShowToast(JSON.stringify(this.interactionUrl))}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(f.f),n.Y36(l.Yv))},t.\u0275cmp=n.Xpm({type:t,selectors:[["airgap-account-share"]],decls:19,vars:16,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","/tabs/tab-secrets"],[1,"ion-padding"],[1,"ion-justify-content-center","ion-padding-bottom"],[2,"width","300px"],[1,"ion-padding-bottom","ion-justify-content-center","heading--text",3,"innerHTML"],["class","ion-justify-content-center ion-padding-bottom",4,"ngIf"],[1,"ion-justify-content-center"],[3,"innerHTML"],["class","rawdata--container",4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed",4,"ngIf"],[3,"messageDefinitionObjects","qrFormatPreference","level","size"],[1,"rawdata--container"],[1,"ion-no-padding"],["lines","none",1,"ion-no-padding"],["slot","end",3,"checked","ionChange"],["class","ion-no-margin",4,"ngIf"],[3,"click",4,"ngIf"],["class","float-right","color","primary","shape","round",3,"click",4,"ngIf"],[1,"ion-no-margin"],[3,"click"],["color","primary","shape","round",1,"float-right",3,"click"],["vertical","bottom","horizontal","end","slot","fixed"],["color","primary","shape","round",3,"click"]],template:function(o,c){1&o&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),n._UZ(3,"ion-back-button",2),n.qZA(),n.TgZ(4,"ion-title"),n._uU(5),n.ALo(6,"translate"),n.qZA()()(),n.TgZ(7,"ion-content",3)(8,"ion-row",4)(9,"div",5),n._UZ(10,"p",6),n.ALo(11,"translate"),n.YNc(12,x,2,4,"ion-row",7),n.TgZ(13,"ion-row",8),n._UZ(14,"p",9),n.ALo(15,"translate"),n.qZA(),n.YNc(16,A,6,1,"ion-row",10),n.qZA()(),n.YNc(17,b,5,3,"ion-row",10),n.YNc(18,Z,4,3,"ion-fab",11),n.qZA()),2&o&&(n.xp6(5),n.Oqu(n.lcZ(6,7,"wallet-share.title")),n.xp6(5),n.Q6J("innerHTML",n.xi3(11,9,"wallet-share.heading",n.VKq(14,S,c.walletName)),n.oJD),n.xp6(2),n.Q6J("ngIf",c.interactionUrl),n.xp6(2),n.Q6J("innerHTML",n.lcZ(15,12,"wallet-share.text"),n.oJD),n.xp6(2),n.Q6J("ngIf",c.interactionUrl),n.xp6(1),n.Q6J("ngIf",c.interactionUrl),n.xp6(1),n.Q6J("ngIf",!c.displayRawData))},directives:[a.Gu,a.sr,a.Sm,a.oU,a.cs,a.wd,a.W2,a.Nd,s.O5,l.HB,a.wI,a.Ie,a.Q$,a.ho,a.w,a.YG,a.IJ],pipes:[p.X$,s.Ts],styles:[".rawdata--container[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{background-color:var(--ion-color-grayLight);padding:8px}.float-right[_ngcontent-%COMP%]{float:right}.rawdata--container.ios[_ngcontent-%COMP%]{margin-bottom:48px}.rawdata--container.md[_ngcontent-%COMP%]{margin-bottom:var(--margin-bottom)}.heading--text[_ngcontent-%COMP%]{font-size:32px}ion-content[_ngcontent-%COMP%]{--padding-bottom: var(--ion-padding, 64px)}"]}),t})()}];let y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[s.ez,_.K,d.u5,a.Pc,h.Bz.forChild(P),p.aw,l.aD]]}),t})()}}]);