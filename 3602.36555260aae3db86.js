"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3602],{73602:(R,u,o)=>{o.r(u),o.d(u,{SocialRecoveryGenerateSetupPageModule:()=>M});var s=o(12714),g=o(84653),f=o(23345),c=o(3323),p=o(34388),v=o(52971),h=o(55956),_=o(27204),S=o(56810),b=o(47898),e=o(9288);function x(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ion-button",16),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(2).setNumberOfShares(a)}),e._uU(1),e.qZA()}if(2&n){const t=i.$implicit,r=e.oxw(2);e.Q6J("color",t===r.numberOfShares?"primary":"tertiary"),e.xp6(1),e.hij(" ",t," ")}}const d=function(){return[2,3,4,5,6]};function O(n,i){1&n&&(e.ynx(0),e.TgZ(1,"div",7)(2,"div",8),e.O4$(),e.TgZ(3,"svg",9),e._UZ(4,"path",10),e.qZA(),e.TgZ(5,"svg",11),e._UZ(6,"path",10),e.qZA(),e.TgZ(7,"svg",12),e._UZ(8,"path",10),e.qZA()(),e.kcU(),e.TgZ(9,"h1"),e._uU(10),e.ALo(11,"translate"),e.qZA(),e._UZ(12,"div",13),e.TgZ(13,"p"),e._uU(14),e.ALo(15,"translate"),e.qZA(),e.TgZ(16,"div",14),e.YNc(17,x,2,2,"ion-button",15),e.qZA()(),e.BQk()),2&n&&(e.xp6(10),e.Oqu(e.lcZ(11,3,"social-recovery-generate.intro-state-2-title")),e.xp6(4),e.Oqu(e.lcZ(15,5,"social-recovery-generate.setup-state-1-text1")),e.xp6(3),e.Q6J("ngForOf",e.DdM(7,d)))}function y(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ion-button",19),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(2).setNumberOfShares(a)}),e._uU(1),e.qZA()}if(2&n){const t=i.$implicit,r=e.oxw(2);e.Q6J("color",t===r.numberOfShares?"primary":"tertiary"),e.xp6(1),e.hij(" ",t," ")}}function Z(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ion-button",20),e.NdJ("click",function(){const a=e.CHM(t).$implicit;return e.oxw(2).setNumberOfRequiredShares(a)}),e._uU(1),e.qZA()}if(2&n){const t=i.$implicit,r=e.oxw(2);e.Q6J("color",t===r.numberOfRequiredShares?"primary":"tertiary")("disabled",t>r.numberOfShares),e.xp6(1),e.hij(" ",t," ")}}const w=function(n){return{numberOfShares:n}};function P(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"div",7)(2,"p"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"div",14),e.YNc(6,y,2,2,"ion-button",17),e.qZA(),e._UZ(7,"div",13),e.TgZ(8,"p"),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.TgZ(11,"div",14),e.YNc(12,Z,2,3,"ion-button",18),e.qZA()(),e.BQk()),2&n){const t=e.oxw();e.xp6(3),e.Oqu(e.xi3(4,4,"social-recovery-generate.setup-state-2-text1",e.VKq(9,w,t.numberOfShares))),e.xp6(3),e.Q6J("ngForOf",e.DdM(11,d)),e.xp6(3),e.Oqu(e.lcZ(10,7,"social-recovery-generate.setup-state-2-text2")),e.xp6(3),e.Q6J("ngForOf",t.numberSharesArray)}}const C=[{path:"",component:(()=>{class n{constructor(t,r){this.secretService=t,this.navigationService=r,this.state=0,this.numberOfShares=-1,this.numberOfRequiredShares=-1,this.secret=this.navigationService.getState().secret}get numberSharesArray(){const t=[];for(let r=2;r<=this.numberOfShares;r++)t.push(r);return t}setNumberOfShares(t){this.numberOfShares=t,this.numberOfRequiredShares>this.numberOfShares&&(this.numberOfRequiredShares=this.numberOfShares)}setNumberOfRequiredShares(t){this.numberOfRequiredShares=t}nextState(){0!==this.state?1===this.state&&this.secretService.retrieveEntropyForSecret(this.secret).then(t=>{const r=v.r.generateSocialRecover(b.entropyToMnemonic(t),this.numberOfShares,this.numberOfRequiredShares);this.navigationService.routeWithState("/social-recovery-generate-rules",{shares:r,secret:this.secret,required:this.numberOfRequiredShares}).catch((0,h.a1)(h.qj.IONIC_NAVIGATION))}).catch(t=>{console.warn(t)}):this.state++}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(S.R),e.Y36(_.f))},n.\u0275cmp=e.Xpm({type:n,selectors:[["airgap-social-recovery-generate-setup"]],decls:11,vars:6,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","/secret-edit"],[1,"ion-padding"],[4,"ngIf"],[1,"button-wrapper"],["color","primary","shape","round",3,"disabled","click"],[1,"content-wrapper"],[1,"triple-svgs"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512",1,"svg-1"],["d","M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2z"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512",1,"svg-2"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 512 512",1,"svg-3"],[1,"divider"],[1,"row-center"],["class","row-button","shape","round","color","tertiary",3,"color","click",4,"ngFor","ngForOf"],["shape","round","color","tertiary",1,"row-button",3,"color","click"],["class","row-button","shape","round","color","tertiary","disabled","",3,"color","click",4,"ngFor","ngForOf"],["class","row-button","shape","round","color","tertiary",3,"color","disabled","click",4,"ngFor","ngForOf"],["shape","round","color","tertiary","disabled","",1,"row-button",3,"color","click"],["shape","round","color","tertiary",1,"row-button",3,"color","disabled","click"]],template:function(t,r){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-back-button",2),e.qZA()()(),e.TgZ(4,"ion-content",3),e.YNc(5,O,18,8,"ng-container",4),e.YNc(6,P,13,12,"ng-container",4),e.TgZ(7,"div",5)(8,"ion-button",6),e.NdJ("click",function(){return r.nextState()}),e._uU(9),e.ALo(10,"translate"),e.qZA()()()),2&t&&(e.xp6(5),e.Q6J("ngIf",0==r.state),e.xp6(1),e.Q6J("ngIf",1==r.state),e.xp6(2),e.Q6J("disabled",0==r.state&&r.numberOfShares<2||1==r.state&&r.numberOfRequiredShares<2),e.xp6(1),e.hij(" ",e.lcZ(10,4,"secret-edit.confirm_label")," "))},directives:[c.Gu,c.sr,c.Sm,c.oU,c.cs,c.W2,s.O5,s.sg,c.YG],pipes:[p.X$],styles:[".button--rounded[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-end: 0;--padding-start: 0;width:40px;height:40px}ion-content[_ngcontent-%COMP%]{--padding-bottom: var(--ion-padding, 64px)}h1[_ngcontent-%COMP%]{font-size:1.5rem;line-height:2rem;margin-bottom:2rem}p[_ngcontent-%COMP%]{text-align:center;font-size:.875rem;line-height:1.25rem;font-weight:500;-webkit-margin-before:0px;margin-block-start:0px;-webkit-margin-after:0px;margin-block-end:0px;margin-bottom:.8rem;max-width:300px;color:rgba(255,255,255,.8)}h2[_ngcontent-%COMP%]{font-size:1.25rem;line-height:1.75rem;margin-bottom:.825rem}h3[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.25rem;font-weight:500;color:rgba(255,255,255,.8);margin:0}svg[_ngcontent-%COMP%]{fill:#fff;height:78px}.content-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:80vh}.button-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;position:fixed;bottom:10px;left:0;width:100%}.triple-svgs[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;width:200px;height:160px}.triple-svgs[_ngcontent-%COMP%]   .svg-1[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0}.triple-svgs[_ngcontent-%COMP%]   .svg-3[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0}.row-center[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:.5rem}.row-center[_ngcontent-%COMP%]   .row-button[_ngcontent-%COMP%]{height:100%;font-size:large;font-weight:700;color:rgba(255,255,255,.8);width:50px;height:50px}.divider[_ngcontent-%COMP%]{height:4rem}"]}),n})()}];let M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[s.ez,g.u5,g.UX,c.Pc,f.Bz.forChild(C),p.aw]]}),n})()}}]);