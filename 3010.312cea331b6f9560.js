"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3010],{42723:(P,h,o)=>{o.d(h,{K:()=>d});var i=o(20976),v=o(12714),t=o(84653),n=o(3323),l=o(34388),S=o(9527),u=o(51628),g=o(9288);let d=(()=>{class e{}return e.\u0275fac=function(m){return new(m||e)},e.\u0275mod=g.oAB({type:e}),e.\u0275inj=g.cJS({imports:[[n.Pc,u.D,v.ez,t.u5,l.aw,S.N,i.aD]]}),e})()},43010:(P,h,o)=>{o.r(h),o.d(h,{SocialRecoveryShowSharePageModule:()=>E});var i=o(12714),v=o(84653),t=o(23345),n=o(3323),l=o(34388),S=o(42723),u=o(13390),g=o(55956),d=o(27204),e=o(9288),p=o(72781);function m(r,c){if(1&r&&(e.TgZ(0,"h6",7),e._uU(1),e.qZA()),2&r){const a=e.oxw();e.xp6(1),e.Oqu(a.shares[a.currentShare])}}const y=function(r,c){return{currentShare:r,shareLength:c}},M=[{path:"",component:(()=>{class r{constructor(a,s){this.deviceService=a,this.navigationService=s,this.currentShare=0,this.shares=this.navigationService.getState().shares,this.secret=this.navigationService.getState().secret}ionViewDidEnter(){this.deviceService.enableScreenshotProtection({routeBack:"social-recovery-setup"}),this.currentShare=this.navigationService.getState().currentShare}ionViewWillLeave(){this.deviceService.disableScreenshotProtection()}back(){this.navigationService.back()}next(){this.navigationService.routeWithState("/social-recovery-validate-share",{shares:this.shares,currentShare:this.currentShare,secret:this.secret}).catch((0,g.a1)(g.qj.IONIC_NAVIGATION))}}return r.\u0275fac=function(a){return new(a||r)(e.Y36(u.U),e.Y36(d.f))},r.\u0275cmp=e.Xpm({type:r,selectors:[["airgap-social-recovery-show-share"]],decls:15,vars:17,consts:[[1,"ion-no-border"],[1,"ion-padding"],[1,"font--weight__med","ion-padding-bottom"],[1,"ion-padding-bottom"],["class","typography--mono",4,"ngIf"],["color","primary",1,"ion-no-border"],[3,"progress","maxProgress","rightAction"],[1,"typography--mono"]],template:function(a,s){1&a&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3),e.ALo(4,"translate"),e.qZA()()(),e.TgZ(5,"ion-content",1)(6,"p",2),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"p",3),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.YNc(12,m,2,1,"h6",4),e.qZA(),e.TgZ(13,"ion-footer",5),e._UZ(14,"airgap-progress-footer",6),e.qZA()),2&a&&(e.xp6(3),e.Oqu(e.lcZ(4,7,"social-recovery-show-share.title")),e.xp6(4),e.hij(" ",e.xi3(8,9,"social-recovery-show-share.secret-shares_label",e.WLB(14,y,s.currentShare+1,null==s.shares?null:s.shares.length))," "),e.xp6(3),e.Oqu(e.lcZ(11,12,"social-recovery-show-share.text")),e.xp6(2),e.Q6J("ngIf",s.shares),e.xp6(2),e.Q6J("progress",2*s.currentShare)("maxProgress",2*s.shares.length)("rightAction",s.next.bind(s)))},directives:[n.Gu,n.sr,n.wd,n.W2,i.O5,n.fr,p.R],pipes:[l.X$],styles:[".typography--mono[_ngcontent-%COMP%]{line-height:32px}"]}),r})()}];let E=(()=>{class r{}return r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[i.ez,S.K,v.u5,n.Pc,t.Bz.forChild(M),l.aw]]}),r})()},51628:(P,h,o)=>{o.d(h,{D:()=>v});var i=o(9288);let v=(()=>{class t{}return t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[]]}),t})()}}]);