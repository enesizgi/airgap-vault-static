"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2763],{12763:(v,c,n)=>{n.r(c),n.d(c,{TabsPageModule:()=>r});var g=n(12714),h=n(84653),s=n(3323),d=n(34388),b=n(23345),t=n(9288);const u=[{path:"tabs",component:(()=>{class a{constructor(){}tabChange(o){var l,i;this.activeTab=null===(i=null===(l=null==o?void 0:o.outlet)||void 0===l?void 0:l.activatedView)||void 0===i?void 0:i.element}ionViewWillEnter(){this.propagateToActiveTab("ionViewWillEnter")}propagateToActiveTab(o){this.activeTab&&this.activeTab.dispatchEvent(new CustomEvent(o))}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["airgap-tabs"]],decls:18,vars:9,consts:[[3,"ionTabsDidChange"],["tabs",""],["slot","bottom"],["tab","tab-secrets"],["name","lock-closed-outline"],["tab","tab-scan"],["name","barcode-outline"],["tab","tab-settings"],["name","settings-outline"]],template:function(o,l){if(1&o){const i=t.EpF();t.TgZ(0,"ion-tabs",0,1),t.NdJ("ionTabsDidChange",function(){t.CHM(i);const m=t.MAs(1);return l.tabChange(m)}),t.TgZ(2,"ion-tab-bar",2)(3,"ion-tab-button",3),t._UZ(4,"ion-icon",4),t.TgZ(5,"ion-label"),t._uU(6),t.ALo(7,"translate"),t.qZA()(),t.TgZ(8,"ion-tab-button",5),t._UZ(9,"ion-icon",6),t.TgZ(10,"ion-label"),t._uU(11),t.ALo(12,"translate"),t.qZA()(),t.TgZ(13,"ion-tab-button",7),t._UZ(14,"ion-icon",8),t.TgZ(15,"ion-label"),t._uU(16),t.ALo(17,"translate"),t.qZA()()()()}2&o&&(t.xp6(6),t.Oqu(t.lcZ(7,3,"tabs.secrets")),t.xp6(5),t.Oqu(t.lcZ(12,5,"tabs.scanner")),t.xp6(5),t.Oqu(t.lcZ(17,7,"tabs.settings")))},directives:[s.UN,s.yq,s.ZU,s.gu,s.Q$],pipes:[d.X$],styles:[""]}),a})(),children:[{path:"tab-scan",children:[{path:"",loadChildren:()=>Promise.all([n.e(2581),n.e(4914)]).then(n.bind(n,44914)).then(a=>a.TabScanPageModule)}]},{path:"tab-secrets",children:[{path:"",loadChildren:()=>Promise.all([n.e(2951),n.e(8592),n.e(2378)]).then(n.bind(n,58286)).then(a=>a.TabSecretsPageModule)}]},{path:"tab-settings",children:[{path:"",loadChildren:()=>Promise.all([n.e(8592),n.e(818)]).then(n.bind(n,50818)).then(a=>a.TabSettingsPageModule)}]}]},{path:"",redirectTo:"/tabs/tab-secrets",pathMatch:"full"}];let T=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[b.Bz.forChild(u)],b.Bz]}),a})(),r=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[s.Pc,g.ez,h.u5,T,d.aw]]}),a})()}}]);