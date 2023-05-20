"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3742],{13742:(C,f,t)=>{t.r(f),t.d(f,{SecretShowPageModule:()=>B});var l=t(12714),w=t(84653),T=t(23345),i=t(3323),h=t(34388),S=t(65949),Z=t(63181),A=t(39141),P=t(22951),d=t(16183),p=t(66889),b=t(13390),c=t(55956),x=t(27204),e=t(9288);function y(r,a){if(1&r&&(e.TgZ(0,"ion-row")(1,"ion-col",10),e._UZ(2,"img",11),e.qZA(),e.TgZ(3,"ion-col",12)(4,"div",13),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"div")(8,"h5"),e._uU(9),e.qZA()()()()),2&r){const o=e.oxw();e.xp6(2),e.Q6J("src",o.lifehashData,e.LSH),e.xp6(3),e.Oqu(e.lcZ(6,3,"secret-show.fingerprint")),e.xp6(4),e.Oqu(o.secret.fingerprint)}}const O=[{path:"",component:(()=>{class r{constructor(o,s,n,g,u,v){this.deviceService=o,this.navigationService=s,this.alertController=n,this.translateService=g,this.lifehashService=u,this.storageService=v,this.startTime=new Date,this.isBlurred=!0,this.blurText="****** **** ***** **** ******* ***** ***** ****** ***** *** ***** ******* ***** **** ***** ********* ***** ****** ***** **** ***** ******* ***** ****",this.isAdvancedMode$=this.storageService.subscribe(d.NT.ADVANCED_MODE_TYPE).pipe((0,Z.U)(m=>m===d.$r.ADVANCED)),this.secret=this.navigationService.getState().secret}ionViewDidEnter(){return(0,S.mG)(this,void 0,void 0,function*(){this.deviceService.enableScreenshotProtection({routeBack:"secret-setup"}),this.lifehashData=yield this.lifehashService.generateLifehash(this.secret.fingerprint)})}ionViewWillLeave(){this.deviceService.disableScreenshotProtection()}changeBlur(){this.isBlurred=!this.isBlurred,this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.isBlurred=!0},3e4)}goToValidateSecret(){this.startTime.getTime()+1e3*p._d>(new Date).getTime()?this.translateService.get(["secret-show.too-fast_alert.title","secret-show.too-fast_alert.heading","secret-show.too-fast_alert.text","secret-show.too-fast_alert.wait_label_p1","secret-show.too-fast_alert.wait_label_p2"]).pipe((0,A.P)()).subscribe(o=>(0,S.mG)(this,void 0,void 0,function*(){const s=o["secret-show.too-fast_alert.title"],n=o["secret-show.too-fast_alert.heading"],g=o["secret-show.too-fast_alert.text"],u=o["secret-show.too-fast_alert.wait_label_p1"],v=o["secret-show.too-fast_alert.wait_label_p2"];(yield this.alertController.create({header:s,message:[n,"<br/>",g,"<br/>",u,"<strong>",p._d.toString(),v,"</strong>"].join(""),buttons:["Okay"]})).present().catch((0,c.a1)(c.qj.IONIC_ALERT))})):this.navigationService.routeWithState("secret-validate",{secret:this.secret}).catch((0,c.a1)(c.qj.IONIC_NAVIGATION))}}return r.\u0275fac=function(o){return new(o||r)(e.Y36(b.U),e.Y36(x.f),e.Y36(i.Br),e.Y36(h.sK),e.Y36(P.S),e.Y36(d.Cu))},r.\u0275cmp=e.Xpm({type:r,selectors:[["airgap-secret-show"]],decls:21,vars:15,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","/secret-setup"],[1,"ion-padding","colored-background"],[1,"ion-padding-bottom"],[4,"ngIf"],[1,"typography--mono",3,"id"],[3,"click"],["vertical","bottom","horizontal","end","slot","fixed"],["shape","round","color","primary",3,"click"],["size","3"],[1,"lifehash",3,"src"],["size","9"],[1,"font--weight__med"]],template:function(o,s){1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-back-button",2),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5),e.ALo(6,"translate"),e.qZA()()(),e.TgZ(7,"ion-content",3)(8,"p",4),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.YNc(11,y,10,5,"ion-row",5),e.ALo(12,"async"),e.TgZ(13,"h6",6),e._uU(14),e.qZA(),e.TgZ(15,"ion-button",7),e.NdJ("click",function(){return s.changeBlur()}),e._uU(16),e.qZA(),e.TgZ(17,"ion-fab",8)(18,"ion-button",9),e.NdJ("click",function(){return s.goToValidateSecret()}),e._uU(19),e.ALo(20,"translate"),e.qZA()()()),2&o&&(e.xp6(5),e.Oqu(e.lcZ(6,7,"secret-show.title")),e.xp6(4),e.Oqu(e.lcZ(10,9,"secret-show.text")),e.xp6(2),e.Q6J("ngIf",e.lcZ(12,11,s.isAdvancedMode$)),e.xp6(2),e.Q6J("id",s.isBlurred?"blur":""),e.xp6(1),e.hij(" ",s.isBlurred?s.blurText:s.secret.recoverMnemonicFromHex(s.secret.secretHex)," "),e.xp6(2),e.Oqu(s.isBlurred?"Show Recovery Phrase":"Hide Recovery Phrase"),e.xp6(3),e.Oqu(e.lcZ(20,13,"secret-show.next-step_label")))},directives:[i.Gu,i.sr,i.Sm,i.oU,i.cs,i.wd,i.W2,l.O5,i.Nd,i.wI,i.YG,i.IJ],pipes:[h.X$,l.Ov],styles:[".typography--mono[_ngcontent-%COMP%]{text-transform:lowercase;line-height:32px}#blur[_ngcontent-%COMP%]{color:transparent;text-shadow:0 0 18px #fff}ion-content[_ngcontent-%COMP%]{--padding-bottom: var(--ion-padding, 64px)}"]}),r})()}];let B=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[l.ez,w.u5,i.Pc,T.Bz.forChild(O),h.aw]]}),r})()}}]);