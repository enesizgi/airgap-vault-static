"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4381],{14381:(I,v,n)=>{n.r(v),n.d(v,{InteractionSelectionPageModule:()=>f});var h=n(12714),m=n(84653),p=n(23345),i=n(3323),d=n(34388),s=n(65949),r=n(16183),u=n(55956),l=n(98691),S=n(27204),t=n(9288);const T=[{path:"",component:(()=>{class e{constructor(o,a,g){this.navigationService=o,this.storageService=a,this.interactionService=g}ionViewDidEnter(){this.interactionOptions=this.navigationService.getState().interactionOptions}selectOfflineDevice(){return(0,s.mG)(this,void 0,void 0,function*(){this.interactionOptions.communicationType=l.Nj.QR,this.goToNextPage()})}selectSameDevice(){return(0,s.mG)(this,void 0,void 0,function*(){this.interactionOptions.communicationType=l.Nj.DEEPLINK,this.goToNextPage()})}goToNextPage(){return(0,s.mG)(this,void 0,void 0,function*(){(yield this.storageService.get(r.NT.INTERACTION_TYPE))===r.s_.UNDETERMINED?this.goToInteractionSelectionSettingsPage(this.interactionOptions):this.interactionService.startInteraction(this.interactionOptions)})}goToInteractionSelectionSettingsPage(o){this.navigationService.routeWithState("/interaction-selection-settings",{interactionOptions:o}).catch((0,u.a1)(u.qj.IONIC_NAVIGATION))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(S.f),t.Y36(r.Cu),t.Y36(l.k3))},e.\u0275cmp=t.Xpm({type:e,selectors:[["airgap-interaction-selection"]],decls:24,vars:12,consts:[[1,"ion-no-border"],["slot","start"],[1,"ion-padding"],[1,"ion-padding-bottom",3,"innerHTML"],[1,"ion-justify-content-center"],["src","./assets/img/send-one-device.svg"],["size","12"],["color","primary","shape","round","expand","block",3,"click"],[1,"ion-justify-content-center","ion-padding-top"],["src","./assets/img/send-two-device.svg"]],template:function(o,a){1&o&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t._UZ(3,"ion-back-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5),t.ALo(6,"translate"),t.qZA()()(),t.TgZ(7,"ion-content",2),t._UZ(8,"h3",3),t.ALo(9,"translate"),t.TgZ(10,"ion-row",4),t._UZ(11,"img",5),t.qZA(),t.TgZ(12,"ion-row")(13,"ion-col",6)(14,"ion-button",7),t.NdJ("click",function(){return a.selectSameDevice()}),t._uU(15),t.ALo(16,"translate"),t.qZA()()(),t.TgZ(17,"ion-row",8),t._UZ(18,"img",9),t.qZA(),t.TgZ(19,"ion-row")(20,"ion-col",6)(21,"ion-button",7),t.NdJ("click",function(){return a.selectOfflineDevice()}),t._uU(22),t.ALo(23,"translate"),t.qZA()()()()),2&o&&(t.xp6(5),t.Oqu(t.lcZ(6,4,"interaction-selection.title")),t.xp6(3),t.Q6J("innerHTML",t.lcZ(9,6,"interaction-selection.heading"),t.oJD),t.xp6(7),t.hij(" ",t.lcZ(16,8,"interaction-selection.same-device_label")," "),t.xp6(7),t.hij(" ",t.lcZ(23,10,"interaction-selection.offline-device_label")," "))},directives:[i.Gu,i.sr,i.Sm,i.oU,i.cs,i.wd,i.W2,i.Nd,i.wI,i.YG],pipes:[d.X$],styles:["ion-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:20vh}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[h.ez,m.u5,i.Pc,p.Bz.forChild(T),d.aw]]}),e})()}}]);