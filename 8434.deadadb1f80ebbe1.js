"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8434],{68434:(A,g,c)=>{c.r(g),c.d(g,{ContactBookOnboardingPageModule:()=>k});var l=c(12714),h=c(84653),u=c(23345),i=c(3323),d=c(34388),s=c(65949),_=c(91227),p=c(55956),m=c(27204),t=c(9288);function b(n,a){1&n&&(t.ynx(0),t.TgZ(1,"div",11),t.O4$(),t.TgZ(2,"svg",12),t._UZ(3,"path",13),t.qZA(),t.kcU(),t.TgZ(4,"h3"),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.ALo(9,"translate"),t.qZA(),t.TgZ(10,"p"),t._uU(11),t.ALo(12,"translate"),t.qZA(),t.TgZ(13,"ul")(14,"li"),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.TgZ(17,"li"),t._uU(18),t.ALo(19,"translate"),t.qZA()()(),t.BQk()),2&n&&(t.xp6(5),t.Oqu(t.lcZ(6,5,"contact-book.title_address_book")),t.xp6(3),t.Oqu(t.lcZ(9,7,"contact-book.label_welcome_personal_address_book")),t.xp6(3),t.Oqu(t.lcZ(12,9,"contact-book.label_this_allows_to")),t.xp6(4),t.Oqu(t.lcZ(16,11,"contact-book.label_indentify_addresses_you_interact")),t.xp6(3),t.Oqu(t.lcZ(19,13,"contact-book.label_store_manage_entries")))}function x(n,a){1&n&&(t.ynx(0),t.TgZ(1,"div",11),t.O4$(),t.TgZ(2,"svg",14),t._UZ(3,"path",15),t.qZA(),t.kcU(),t.TgZ(4,"h3"),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.ALo(9,"translate"),t.qZA(),t.TgZ(10,"ul")(11,"li"),t.O4$(),t.TgZ(12,"svg",16),t._UZ(13,"path",17),t.qZA(),t._uU(14),t.ALo(15,"translate"),t.qZA(),t.kcU(),t.TgZ(16,"li"),t.O4$(),t.TgZ(17,"svg",18),t._UZ(18,"path",19),t.qZA(),t._uU(19),t.ALo(20,"translate"),t.qZA(),t.kcU(),t.TgZ(21,"li"),t.O4$(),t.TgZ(22,"svg",20),t._UZ(23,"path",21),t.qZA(),t._uU(24),t.ALo(25,"translate"),t.qZA(),t.kcU(),t.TgZ(26,"li"),t.O4$(),t.TgZ(27,"svg",18),t._UZ(28,"path",22),t.qZA(),t._uU(29),t.ALo(30,"translate"),t.qZA()()(),t.BQk()),2&n&&(t.xp6(5),t.Oqu(t.lcZ(6,6,"contact-book.label_add_address_entries")),t.xp6(3),t.Oqu(t.lcZ(9,8,"contact-book.label_several_ways")),t.xp6(6),t.hij(" ",t.lcZ(15,10,"contact-book.label_scan_qr")," "),t.xp6(5),t.hij(" ",t.lcZ(20,12,"contact-book.label_manual_entry")," "),t.xp6(5),t.hij(" ",t.lcZ(25,14,"contact-book.label_recommended_by_us")," "),t.xp6(5),t.hij(" ",t.lcZ(30,16,"contact-book.label_while_signing")," "))}function Z(n,a){if(1&n){const o=t.EpF();t.ynx(0),t.TgZ(1,"div",11),t.O4$(),t.TgZ(2,"svg",20),t._UZ(3,"path",21),t.qZA(),t.kcU(),t.TgZ(4,"h3"),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.ALo(9,"translate"),t.qZA(),t.TgZ(10,"div",23)(11,"p"),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.TgZ(14,"ion-toggle",24),t.NdJ("ionChange",function(r){return t.CHM(o),t.oxw().onToggleSuggestion(r)}),t.qZA()(),t.TgZ(15,"p",25),t._uU(16),t.ALo(17,"translate"),t.qZA()(),t.BQk()}if(2&n){const o=t.oxw();t.xp6(5),t.Oqu(t.lcZ(6,5,"contact-book.label_recommendations")),t.xp6(3),t.Oqu(t.lcZ(9,7,"contact-book.label_recommendation_on_who")),t.xp6(4),t.Oqu(t.lcZ(13,9,"contact-book.label_suggestions")),t.xp6(2),t.Q6J("checked",o.suggestionsEnabled),t.xp6(2),t.Oqu(t.lcZ(17,11,"contact-book.label_note_disable"))}}function f(n,a){if(1&n){const o=t.EpF();t.TgZ(0,"ion-button",26),t.NdJ("click",function(){const v=t.CHM(o).$implicit;return t.oxw().changeState(v)}),t.qZA()}if(2&n){const o=a.$implicit,e=t.oxw();t.Q6J("color",o===e.state?"light":"medium")}}function w(n,a){if(1&n){const o=t.EpF();t.TgZ(0,"ion-button",27),t.NdJ("click",function(){return t.CHM(o),t.oxw().prev()}),t._uU(1),t.ALo(2,"translate"),t.qZA()}2&n&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"social-recovery-setup.back_label")," "))}const O=function(){return[0,1,2]},C=[{path:"",component:(()=>{class n{constructor(o,e){this.contactsService=o,this.navigationService=e,this.state=0}ngOnInit(){return(0,s.mG)(this,void 0,void 0,function*(){this.contactsService.isSuggestionsEnabled().then(o=>this.suggestionsEnabled=o)})}changeState(o){this.state=o}next(){return(0,s.mG)(this,void 0,void 0,function*(){this.state<2?this.state++:(yield this.contactsService.setOnboardingEnable(!1),yield this.contactsService.setBookEnable(!0),this.navigationService.route("/contact-book-contacts").catch((0,p.a1)(p.qj.IONIC_NAVIGATION)))})}prev(){this.state>0&&this.state--}onToggleSuggestion(o){return(0,s.mG)(this,void 0,void 0,function*(){const e=o.detail.checked;yield this.contactsService.setSuggestionsEnable(e)})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(_.P),t.Y36(m.f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["airgap-contact-book-onboarding"]],decls:20,vars:13,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","/tabs/tab-settings"],[1,"ion-padding"],[4,"ngIf"],[1,"row-center"],["class","row-button","shape","round","color","tertiary",3,"color","click",4,"ngFor","ngForOf"],[1,"buttons-wrapper"],[1,"button-wrapper"],["color","light","fill","clear",3,"click",4,"ngIf"],["fill","clear",3,"color","click"],[1,"content-wrapper"],["fill","currentColor","stroke-width","0","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512","height","1em","width","1em",2,"overflow","visible"],["d","M448 336V48c0-26.51-21.5-48-48-48H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1 0-11.72-6.607-21.52-16-27.1v-81.36c9.8-9.64 16-22.24 16-36.44zM143.1 128h192c9.7 0 16.9 7.2 16.9 16s-7.2 16-16 16H143.1c-7.9 0-15.1-7.2-15.1-16s7.2-16 15.1-16zm0 64h192c9.7 0 16.9 7.2 16.9 16s-7.2 16-16 16H143.1c-7.9 0-15.1-7.2-15.1-16s7.2-16 15.1-16zM384 448H96c-17.67 0-32-14.33-32-32s14.33-32 32-32h288v64z"],["fill","currentColor","stroke-width","0","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 640 512","height","1em","width","1em",2,"overflow","visible"],["d","M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0 96 57.31 96 128s57.3 128 128 128zm50.7 48H173.3C77.61 304 0 381.6 0 477.3 0 496.5 15.52 512 34.66 512h378.7c19.14 0 34.64-15.5 34.64-34.7 0-95.7-77.6-173.3-173.3-173.3zM616 200h-48v-48c0-13.2-10.7-24-24-24s-24 10.75-24 24v48h-48c-13.2 0-24 10.8-24 24s10.75 24 24 24h48v48c0 13.3 10.8 24 24 24s24-10.75 24-24v-48h48c13.3 0 24-10.7 24-24s-10.7-24-24-24z"],["fill","currentColor","stroke-width","0","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 1024 1024","height","1em","width","1em",2,"overflow","visible"],["d","M468 128H160c-17.7 0-32 14.3-32 32v308c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8zm-56 284H192V192h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm194 210H136c-4.4 0-8 3.6-8 8v308c0 17.7 14.3 32 32 32h308c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8zm-56 284H192V612h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm590-630H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V160c0-17.7-14.3-32-32-32zm-32 284H612V192h220v220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm194 210h-48c-4.4 0-8 3.6-8 8v134h-78V556c0-4.4-3.6-8-8-8H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h78v102c0 4.4 3.6 8 8 8h190c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8zM746 832h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm142 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"],["fill","currentColor","stroke-width","0","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 576 512","height","1em","width","1em",2,"overflow","visible"],["d","M512 448H64c-35.35 0-64-28.65-64-64V128c0-35.35 28.65-64 64-64h448c35.35 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64zM128 180v-40c0-6.6-5.4-12-12-12H76c-6.62 0-12 5.4-12 12v40c0 6.6 5.38 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-384 96v-40c0-6.6-5.4-12-12-12H76c-6.62 0-12 5.4-12 12v40c0 6.6 5.38 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-384 96v-40c0-6.6-5.4-12-12-12H76c-6.62 0-12 5.4-12 12v40c0 6.6 5.38 12 12 12h40c6.6 0 12-5.4 12-12zm288 0v-40c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h232c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"],["fill","currentColor","stroke-width","0","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 384 512","height","1em","width","1em",2,"overflow","visible"],["d","M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7l.128-39.2H112l.1 39.2zM192 0C90.02.32 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8 16.53 18.84 42.34 58.23 52.22 91.45.031.25.094.517.125.782h160.2c.031-.265.094-.516.125-.782 9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1 368 78.8 289.2.004 192 0zm96.4 260.1c-15.66 17.85-35.04 46.3-49.05 75.89h-94.61c-14.01-29.59-33.39-58.04-49.04-75.88C75.24 236.8 64 206.1 64 175.1 64 113.3 112.1 48.25 191.1 48 262.6 48 320 105.4 320 175.1c0 31-11.2 61.7-31.6 85zM176 80c-44.1 0-80 35.9-80 80 0 8.844 7.156 16 16 16s16-7.2 16-16c0-26.47 21.53-48 48-48 8.844 0 16-7.148 16-15.99S184.8 80 176 80z"],["d","M0 64C0 28.65 28.65 0 64 0h160v128c0 17.7 14.3 32 32 32h128v139.6l-94.7 94.7c-8.2 8.2-14 18.5-16.8 29.8l-15.1 60.1c-2.3 9.4-1.7 19 1.4 27.8H64c-35.35 0-64-28.7-64-64V64zm256 64V0l128 128H256zm308.1 122.1c15.7 15.6 15.7 40.9 0 56.6l-29.4 29.4-70.9-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0l14.3 14.4zm-252.2 166 129.2-128.3 71 70.9-129.2 129.2c-4.1 4.1-9.3 7-14.9 8.4l-60.1 15.1c-5.5 1.3-11.2-.3-15.2-4.2-4-4-5.6-9.8-4.2-16.1l15-59.3c1.4-5.6 4.3-10.7 8.4-15.7z"],[1,"suggestion-wrapper"],["slot","end",3,"checked","ionChange"],[1,"note"],["shape","round","color","tertiary",1,"row-button",3,"color","click"],["color","light","fill","clear",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5),t.ALo(6,"translate"),t.qZA()()(),t.TgZ(7,"ion-content",3),t.YNc(8,b,20,15,"ng-container",4),t.YNc(9,x,31,18,"ng-container",4),t.YNc(10,Z,18,13,"ng-container",4),t.TgZ(11,"div",5),t.YNc(12,f,1,1,"ion-button",6),t.qZA(),t.TgZ(13,"div",7)(14,"div",8),t.YNc(15,w,3,3,"ion-button",9),t.qZA(),t.TgZ(16,"div",8)(17,"ion-button",10),t.NdJ("click",function(){return e.next()}),t._uU(18),t.ALo(19,"translate"),t.qZA()()()()),2&o&&(t.xp6(5),t.Oqu(t.lcZ(6,8,"contact-book.title_address_book")),t.xp6(3),t.Q6J("ngIf",0==e.state),t.xp6(1),t.Q6J("ngIf",1==e.state),t.xp6(1),t.Q6J("ngIf",2==e.state),t.xp6(2),t.Q6J("ngForOf",t.DdM(12,O)),t.xp6(3),t.Q6J("ngIf",e.state>0),t.xp6(2),t.Q6J("color",2===e.state?"primary":"light"),t.xp6(1),t.hij(" ",t.lcZ(19,10,2==e.state?"introduction.continue_label":"social-recovery-setup.next_label")," "))},directives:[i.Gu,i.sr,i.Sm,i.oU,i.cs,i.wd,i.W2,l.O5,i.ho,i.w,l.sg,i.YG],pipes:[d.X$],styles:['@charset "UTF-8";ion-content[_ngcontent-%COMP%]{--padding-bottom: var(--ion-padding, 64px)}svg[_ngcontent-%COMP%]{font-size:6rem}h3[_ngcontent-%COMP%]{font-size:1.4rem;line-height:1.5rem;margin-bottom:2.6rem;text-align:center;max-width:400px}p[_ngcontent-%COMP%]{margin:0;max-width:300px;text-align:center}li[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;margin-bottom:4px}li[_ngcontent-%COMP%]:before{content:"\\2022  ";font-size:2rem;margin:0;height:26px;display:flex;align-items:center;justify-content:center}li[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{font-size:1.4rem}.suggestion-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;border:2px dashed var(--ion-color-primary);padding:12px;border-radius:6px;margin:24px 0 12px;width:100%;max-width:300px}.suggestion-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:700}.note[_ngcontent-%COMP%]{color:rgba(255,255,255,.49);text-align:start}.content-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:80vh}.row-center[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:.6rem}.row-center[_ngcontent-%COMP%]   .row-button[_ngcontent-%COMP%]{font-size:large;font-weight:700;color:rgba(255,255,255,.8);width:12px;height:12px;padding:0}.row-center[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-start: 0px;--padding-end: 0px}.buttons-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;position:fixed;bottom:20px;left:0px;width:100%}.buttons-wrapper[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;justify-content:center}.buttons-wrapper[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-top: 24px;--padding-bottom: 24px;--padding-start: 48px;--padding-end: 48px}']}),n})()}];let k=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,h.u5,h.UX,i.Pc,u.Bz.forChild(C),d.aw]]}),n})()}}]);