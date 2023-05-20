"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7176],{42723:(O,p,n)=>{n.d(p,{K:()=>l});var t=n(20976),s=n(12714),d=n(84653),o=n(3323),h=n(34388),m=n(9527),_=n(51628),v=n(9288);let l=(()=>{class a{}return a.\u0275fac=function(g){return new(g||a)},a.\u0275mod=v.oAB({type:a}),a.\u0275inj=v.cJS({imports:[[o.Pc,_.D,s.ez,d.u5,h.aw,m.N,t.aD]]}),a})()},40644:(O,p,n)=>{n.d(p,{E:()=>v});var t=n(9288),s=n(3323),d=n(12714),o=n(84653);function h(l,a){if(1&l&&t._UZ(0,"ion-checkbox",7),2&l){const i=t.oxw();t.Q6J("ngModel",i.checkboxValue)("disabled",!i.enabled)}}function m(l,a){1&l&&(t.TgZ(0,"p"),t._uU(1,"This setting is disabled. Import your secret again to change it."),t.qZA())}const _=["*"];let v=(()=>{class l{constructor(){this.enabled=!1,this.action=new t.vpe}doAction(){this.action.emit()}}return l.\u0275fac=function(i){return new(i||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["airgap-secret-option-item"]],inputs:{enabled:"enabled",active:"active",icon:"icon",checkboxValue:"checkboxValue"},outputs:{action:"action"},ngContentSelectors:_,decls:9,vars:6,consts:[["lines","none",1,"ion-no-padding",3,"disabled","detail","click"],["slot","start"],[1,"avatar--container",3,"ngClass"],[3,"src"],["color","white",1,"ion-text-wrap"],["slot","end","class","ion-no-margin",3,"ngModel","disabled",4,"ngIf"],[4,"ngIf"],["slot","end",1,"ion-no-margin",3,"ngModel","disabled"]],template:function(i,g){1&i&&(t.F$t(),t.ynx(0),t.TgZ(1,"ion-item",0),t.NdJ("click",function(){return g.doAction()}),t.TgZ(2,"ion-avatar",1)(3,"div",2),t._UZ(4,"ion-icon",3),t.qZA()(),t.TgZ(5,"ion-label",4),t.Hsn(6),t.qZA(),t.YNc(7,h,1,2,"ion-checkbox",5),t.qZA(),t.YNc(8,m,2,0,"p",6),t.BQk()),2&i&&(t.xp6(1),t.Q6J("disabled",!g.enabled)("detail",void 0===g.checkboxValue),t.xp6(2),t.Q6J("ngClass",g.active?"background--color__primary":"background--color__tertiary"),t.xp6(1),t.Q6J("src",g.icon),t.xp6(3),t.Q6J("ngIf",void 0!==g.checkboxValue),t.xp6(1),t.Q6J("ngIf",!g.enabled))},directives:[s.Ie,s.BJ,d.mk,s.gu,s.Q$,d.O5,s.nz,s.w,o.JJ,o.On],styles:[".avatar--container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;border-radius:50%}.avatar--container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:24px}.background--color__primary[_ngcontent-%COMP%]{background-color:var(--ion-color-primary)}.background--color__tertiary[_ngcontent-%COMP%]{background-color:var(--ion-color-tertiary)}"]}),l})()},87176:(O,p,n)=>{n.r(p),n.d(p,{SecretAddPageModule:()=>b});var t=n(12714),s=n(84653),d=n(23345),o=n(3323),h=n(34388),m=n(42723),_=n(65949),v=n(63181),l=n(22951),a=n(16183),i=n(55956),g=n(27204),E=n(56810),e=n(9288),T=n(20976),S=n(40644);function C(r,f){if(1&r&&(e.TgZ(0,"ion-row",12)(1,"ion-col",13),e._UZ(2,"img",14),e.qZA(),e.TgZ(3,"ion-col",15)(4,"div",16),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"div")(8,"h5"),e._uU(9),e.qZA()()()()),2&r){const c=e.oxw();e.xp6(2),e.Q6J("src",c.lifehashData,e.LSH),e.xp6(3),e.Oqu(e.lcZ(6,3,"secret-edit.fingerprint")),e.xp6(4),e.Oqu(c.secret.fingerprint)}}const Z=[{path:"",component:(()=>{class r{constructor(c,u,A,P,x,y){this.secretsService=c,this.navigationService=u,this.platform=A,this.lifehashService=P,this.storageService=x,this.uiEventService=y,this.isGenerating=!1,this.isAndroid=!1,this.isAdvancedMode$=this.storageService.subscribe(a.NT.ADVANCED_MODE_TYPE).pipe((0,v.U)(M=>M===a.$r.ADVANCED)),this.navigationService.getState()&&(this.isGenerating=this.navigationService.getState().isGenerating,this.secret=this.navigationService.getState().secret,this.isAndroid=this.platform.is("android"),this.lifehashService.generateLifehash(this.secret.fingerprint).then(M=>{this.lifehashData=M}))}confirm(){return(0,_.mG)(this,void 0,void 0,function*(){try{yield this.secretsService.addOrUpdateSecret(this.secret)}catch(c){return(0,i.a1)(i.qj.SECURE_STORAGE)(c),void("Already added secret"!==c.message?yield this.showErrorAlert():this.navigationService.routeToSecretsTab())}this.navigationService.routeWithState("/account-add",{secret:this.secret}).catch((0,i.a1)(i.qj.IONIC_NAVIGATION))})}togglePasscode(){return(0,_.mG)(this,void 0,void 0,function*(){this.secret.isParanoia=!this.secret.isParanoia})}showErrorAlert(){return(0,_.mG)(this,void 0,void 0,function*(){yield(yield this.uiEventService.getTranslatedAlert({header:"secret-edit.error_alert.title",message:"secret-edit.error_alert.message",backdropDismiss:!0,buttons:[{text:"secret-edit.error_alert.abort-button_label",handler:()=>{this.navigationService.routeToSecretsTab()}},{text:"secret-edit.error_alert.retry-button_label",role:"cancel"}]})).present().catch((0,i.a1)(i.qj.IONIC_ALERT))})}}return r.\u0275fac=function(c){return new(c||r)(e.Y36(E.R),e.Y36(g.f),e.Y36(o.t4),e.Y36(l.S),e.Y36(a.Cu),e.Y36(T.Ax))},r.\u0275cmp=e.Xpm({type:r,selectors:[["airgap-secret-add"]],decls:33,vars:33,consts:[[1,"ion-no-border"],[1,"ion-padding"],[1,"ion-no-padding"],["color","white","position","floating"],[3,"ngModel","ngModelChange"],["class","ion-padding-top",4,"ngIf"],[1,"font--weight__med","ion-padding-top"],[3,"enabled","icon","active","checkboxValue","action"],["color","white"],[3,"innerHTML"],["vertical","bottom","horizontal","end","slot","fixed"],["color","primary","shape","round",3,"disabled","click"],[1,"ion-padding-top"],["size","3"],[1,"lifehash",3,"src"],["size","9"],[1,"font--weight__med"]],template:function(c,u){1&c&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3),e.ALo(4,"translate"),e.qZA()()(),e.TgZ(5,"ion-content",1)(6,"p"),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"ion-item",2)(10,"ion-label",3),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.TgZ(13,"ion-input",4),e.NdJ("ngModelChange",function(P){return u.secret.label=P}),e.qZA()(),e.YNc(14,C,10,5,"ion-row",5),e.ALo(15,"async"),e.TgZ(16,"p",6),e._uU(17),e.ALo(18,"translate"),e.qZA(),e.TgZ(19,"p"),e._uU(20),e.ALo(21,"translate"),e.qZA(),e.TgZ(22,"airgap-secret-option-item",7),e.NdJ("action",function(){return u.togglePasscode()}),e.TgZ(23,"h2"),e._uU(24),e.ALo(25,"translate"),e.qZA(),e.TgZ(26,"ion-text",8),e._UZ(27,"p",9),e.ALo(28,"translate"),e.qZA()(),e.TgZ(29,"ion-fab",10)(30,"ion-button",11),e.NdJ("click",function(){return u.confirm()}),e._uU(31),e.ALo(32,"translate"),e.qZA()()()),2&c&&(e.xp6(3),e.hij("Save ",e.lcZ(4,15,"secret-edit.title"),""),e.xp6(4),e.Oqu(e.lcZ(8,17,"secret-edit.text")),e.xp6(4),e.Oqu(e.lcZ(12,19,"secret-edit.secret_input_label")),e.xp6(2),e.Q6J("ngModel",u.secret.label),e.xp6(1),e.Q6J("ngIf",e.lcZ(15,21,u.isAdvancedMode$)),e.xp6(3),e.Oqu(e.lcZ(18,23,"secret-edit.security-level.heading")),e.xp6(3),e.Oqu(e.lcZ(21,25,"secret-edit.security-level.text")),e.xp6(2),e.Q6J("enabled",!0)("icon","assets/icons/md-fiber_pin.svg")("active",u.secret.isParanoia)("checkboxValue",u.secret.isParanoia),e.xp6(2),e.Oqu(e.lcZ(25,27,"secret-edit.passcode.label")),e.xp6(3),e.Q6J("innerHTML",e.lcZ(28,29,"secret-edit.passcode.text"),e.oJD),e.xp6(3),e.Q6J("disabled",u.secret.label.length<1),e.xp6(1),e.hij(" ",e.lcZ(32,31,"secret-edit.confirm_label")," "))},directives:[o.Gu,o.sr,o.wd,o.W2,o.Ie,o.Q$,o.pK,o.j9,s.JJ,s.On,t.O5,o.Nd,o.wI,S.E,o.yW,o.IJ,o.YG],pipes:[h.X$,t.Ov],styles:[".avatar--container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;border-radius:50%}.avatar--container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:24px}.background--color__primary[_ngcontent-%COMP%]{background-color:var(--ion-color-primary)}.background--color__tertiary[_ngcontent-%COMP%]{background-color:var(--ion-color-tertiary)}ion-content[_ngcontent-%COMP%]{--padding-bottom: var(--ion-padding, 64px)}"]}),r})()}];let b=(()=>{class r{}return r.\u0275fac=function(c){return new(c||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[t.ez,s.u5,o.Pc,d.Bz.forChild(Z),h.aw,m.K]]}),r})()},51628:(O,p,n)=>{n.d(p,{D:()=>s});var t=n(9288);let s=(()=>{class d{}return d.\u0275fac=function(h){return new(h||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[[]]}),d})()}}]);