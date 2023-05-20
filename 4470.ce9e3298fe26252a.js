"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4470],{42723:(x,p,i)=>{i.d(p,{K:()=>O});var c=i(20976),m=i(12714),h=i(84653),l=i(3323),f=i(34388),r=i(9527),E=i(51628),M=i(9288);let O=(()=>{class S{}return S.\u0275fac=function(A){return new(A||S)},S.\u0275mod=M.oAB({type:S}),S.\u0275inj=M.cJS({imports:[[l.Pc,E.D,m.ez,h.u5,f.aw,r.N,c.aD]]}),S})()},94470:(x,p,i)=>{i.r(p),i.d(p,{AccountShareSelectPageModule:()=>he});var c=i(20976),m=i(12714),h=i(84653),l=i(3323),f=i(32256),r=i(25535),E=i(34388),M=i(42723),O=i(23345),S=i(65949),I=i(88061),A=i(4402),F=i(41530),s=i(55956);const d="Account Share Select",g=(0,r.PH)(`[${d}] View Initialization`),u=(0,r.PH)(`[${d}] Initial Data Loaded`,(0,r.Ky)()),v=(0,r.PH)(`[${d}] Secret Toggled`,(0,r.Ky)()),P=(0,r.PH)(`[${d}] Sync Button Clicked`),C=(0,r.PH)(`[${d}] Alert Dismissed`,(0,r.Ky)()),_=(0,r.PH)(`[${d}] Migration Alert Accepted`,(0,r.Ky)()),L=(0,r.PH)(`[${d}] Wallets Not Migrated`),U=(0,r.PH)(`[${d}] Share URL Generated`,(0,r.Ky)()),b=(0,r.PH)(`[${d}] Share URL Generated (Legacy Accounts Excluded)`,(0,r.Ky)()),w=(0,r.Lq)({secrets:{status:c.Tq.IDLE,value:[]},checkedIds:[],alert:void 0},(0,r.on)(u,(t,{secrets:a})=>Object.assign(Object.assign({},t),{secrets:{status:c.Tq.SUCCESS,value:a},checkedIds:a.map(n=>n.id)})),(0,r.on)(v,(t,{secretId:a})=>{const n=t.checkedIds.indexOf(a);return Object.assign(Object.assign({},t),{checkedIds:n>-1?t.checkedIds.slice(0,n).concat(t.checkedIds.slice(n+1)):[...t.checkedIds,a]})}),(0,r.on)(L,t=>Object.assign(Object.assign({},t),{alert:{id:(0,c.qs)(),value:{type:"walletsNotMigrated"},status:c.vQ.PENDING}})),(0,r.on)(b,(t,{shareUrl:a})=>Object.assign(Object.assign({},t),{alert:{id:(0,c.qs)(),value:{type:"excludedLegacyAccounts",shareUrl:a},status:c.vQ.PENDING}})),(0,r.on)(C,(t,{id:a})=>Object.assign(Object.assign({},t),{alert:void 0!==t.alert?{id:t.alert.id,value:t.alert.value,status:a===t.alert.id?c.vQ.HANDLED:t.alert.status}:void 0}))),$=(0,r.ZF)("accountShareSelect"),G=(0,r.P1)($,t=>{var a;return{status:t.secrets.status,value:null===(a=t.secrets.value)||void 0===a?void 0:a.filter(n=>n.wallets.length>0)}}),K=(0,r.P1)($,t=>t.checkedIds),H=(0,r.P1)($,t=>t.alert),J=(0,r.P1)(G,K,(t,a)=>{if(void 0===t.value||0===t.value.length)return[];const n=new Set(a);return t.value.filter(o=>n.has(o.id))}),Q=(0,r.P1)(G,K,(t,a)=>{if(void 0===t.value||0===t.value.length)return{};const n=new Set(a);return t.value.reduce((o,y)=>Object.assign(o,{[y.id]:n.has(y.id)}),{})}),z=(0,r.P1)(K,t=>t.length>0);var e=i(9288);function Y(t,a){1&t&&e._UZ(0,"airgap-account-item",15),2&t&&e.Q6J("wallet",a.$implicit)}const V=function(t){return{status:t}},X=function(){return[]};function k(t,a){if(1&t&&(e.TgZ(0,"ion-list",8)(1,"span",13),e.YNc(2,Y,1,1,"airgap-account-item",14),e.ALo(3,"async"),e.ALo(4,"walletFilter"),e.qZA()()),2&t){const n=e.oxw().$implicit,o=e.oxw(2);e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,1,e.xi3(4,3,n.wallets,e.VKq(6,V,o.AirGapWalletStatus.ACTIVE)))||e.DdM(8,X))}}function q(t,a){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"ion-item",10)(2,"ion-label",11),e._uU(3),e.qZA(),e.TgZ(4,"ion-checkbox",12),e.NdJ("ionChange",function(){const D=e.CHM(n).$implicit;return e.oxw(2).toggleSecret(D)}),e.ALo(5,"async"),e.qZA()(),e.YNc(6,k,5,9,"ion-list",5),e.ALo(7,"async"),e.BQk()}if(2&t){const n=a.$implicit,o=e.oxw(2);e.xp6(3),e.Oqu(n.label),e.xp6(1),e.Q6J("checked",e.lcZ(5,3,o.isChecked$)[n.id]),e.xp6(2),e.Q6J("ngIf",e.lcZ(7,5,o.isChecked$)[n.id])}}function ee(t,a){if(1&t&&(e.TgZ(0,"ion-list",8),e.YNc(1,q,8,7,"ng-container",9),e.ALo(2,"async"),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,n.secrets$).value)}}const te=[{path:"",component:(()=>{class t{constructor(n,o){this.store=n,this.uiEventService=o,this.UIResourceStatus=c.Tq,this.AirGapWalletStatus=I.AirGapWalletStatus,this.ngDestroyed$=new A.xQ,this.secrets$=this.store.select(G),this.isChecked$=this.store.select(Q),this.syncEnabled$=this.store.select(z),this.alert$=this.store.select(H),this.alert$.pipe((0,F.R)(this.ngDestroyed$)).subscribe(this.showOrDismissAlert.bind(this)),this.store.dispatch(g())}ngOnDestroy(){this.ngDestroyed$.next(),this.ngDestroyed$.complete()}toggleSecret(n){this.store.dispatch(v({secretId:n.id}))}sync(){this.store.dispatch(P())}showOrDismissAlert(n){var o;return(0,S.mG)(this,void 0,void 0,function*(){if(null===(o=this.alertElement)||void 0===o||o.dismiss().catch((0,s.a1)(s.qj.IONIC_ALERT)),(null==n?void 0:n.status)===c.vQ.PENDING)return this.alertElement=yield this.uiEventService.getTranslatedAlert(this.getAlertData(n.value)),this.alertElement.present().catch((0,s.a1)(s.qj.IONIC_ALERT)),this.alertElement.onWillDismiss().then(()=>{this.store.dispatch(C({id:n.id}))}).catch((0,s.a1)(s.qj.IONIC_ALERT));this.alertElement=void 0})}getAlertData(n){switch(n.type){case"walletsNotMigrated":return this.walletsNotMigratedAlert();case"excludedLegacyAccounts":return this.excludedLegacyAccountsAlert(n.shareUrl);case"unknownError":return this.unknownErrorAlert(n.message);default:return{}}}walletsNotMigratedAlert(){return{header:"wallet-share-select.alert.wallets-not-migrated.header",message:"wallet-share-select.alert.wallets-not-migrated.message",backdropDismiss:!0,buttons:[{text:"wallet-share-select.alert.wallets-not-migrated.button_label"}]}}excludedLegacyAccountsAlert(n){return{header:"wallet-share-select.alert.excluded-legacy-accounts.header",message:"wallet-share-select.alert.excluded-legacy-accounts.message",backdropDismiss:!0,buttons:[{text:"wallet-share-select.alert.excluded-legacy-accounts.button-reject_label"},{text:"wallet-share-select.alert.excluded-legacy-accounts.button-accept_label",handler:()=>{this.store.dispatch(_({shareUrl:n}))}}]}}unknownErrorAlert(n){return{header:"wallet-share-select.alert.unknown-error.header",message:null!=n?n:"wallet-share-select.alert.unknown-error.message",backdropDismiss:!0,buttons:[{text:"wallet-share-select.alert.unknown-error.button_label"}]}}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(r.yh),e.Y36(c.Ax))},t.\u0275cmp=e.Xpm({type:t,selectors:[["airgap-account-share-select"]],decls:17,vars:15,consts:[[1,"ion-no-border"],["slot","start"],["defaultHref","/tabs/tab-secrets"],[1,"ion-padding"],[1,"ion-padding-bottom",3,"innerHTML"],["lines","none",4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed"],["color","primary","shape","round",3,"disabled","click"],["lines","none"],[4,"ngFor","ngForOf"],["detail","false",1,"ion-no-padding"],[1,"white"],["slot","end","color","primary",3,"checked","ionChange"],[1,"airgap-account-item-migration"],[3,"wallet",4,"ngFor","ngForOf"],[3,"wallet"]],template:function(n,o){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-back-button",2),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5),e.ALo(6,"translate"),e.qZA()()(),e.TgZ(7,"ion-content",3),e._UZ(8,"h3",4),e.ALo(9,"translate"),e.YNc(10,ee,3,3,"ion-list",5),e.ALo(11,"async"),e.TgZ(12,"ion-fab",6)(13,"ion-button",7),e.NdJ("click",function(){return o.sync()}),e.ALo(14,"async"),e._uU(15),e.ALo(16,"translate"),e.qZA()()()),2&n&&(e.xp6(5),e.Oqu(e.lcZ(6,5,"wallet-share-select.title")),e.xp6(3),e.Q6J("innerHTML",e.lcZ(9,7,"wallet-share-select.heading"),e.oJD),e.xp6(2),e.Q6J("ngIf",e.lcZ(11,9,o.secrets$).status===o.UIResourceStatus.SUCCESS),e.xp6(3),e.Q6J("disabled",!e.lcZ(14,11,o.syncEnabled$)),e.xp6(2),e.hij(" ",e.lcZ(16,13,"wallet-share-select.sync_label")," "))},directives:[l.Gu,l.sr,l.Sm,l.oU,l.cs,l.wd,l.W2,m.O5,l.q_,m.sg,l.Ie,l.Q$,l.nz,l.w,c.vq,l.IJ,l.YG],pipes:[E.X$,m.Ov,c.fO],styles:["ion-content[_ngcontent-%COMP%]{--padding-bottom: var(--ion-padding, 64px)}"]}),t})()}];let ne=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[O.Bz.forChild(te)],O.Bz]}),t})();var ie=i(48060),se=i(67926),R=i(68019),N=i(24586),re=i(91490),ae=i(39141),ce=i(29508),B=i(98691),oe=i(13187),le=i(56810),de=i(64545);let ue=(()=>{class t{constructor(n,o,y,D,j,ge){this.actions$=n,this.store=o,this.secretsService=y,this.shareUrlService=D,this.interactionService=j,this.migrationService=ge,this.secrets$=(0,f.GW)(()=>this.actions$.pipe((0,f.l4)(g),(0,R.M)(this.secretsService.getSecretsObservable()),(0,N.w)(([W,T])=>(0,ie.of)(u({secrets:T}))))),this.shareUrl$=(0,f.GW)(()=>this.actions$.pipe((0,f.l4)(P),(0,R.M)(this.store.select(J)),(0,re.h)(([W,T])=>T.length>0),(0,N.w)(([W,T])=>(0,se.D)(this.generateShareUrl(T)).pipe((0,ae.P)())))),this.sync$=(0,f.GW)(()=>this.actions$.pipe((0,f.l4)(U,_),(0,ce.b)(W=>{this.syncAccounts(W.shareUrl)})),{dispatch:!1})}generateShareUrl(n){return(0,S.mG)(this,void 0,void 0,function*(){yield this.migrationService.runSecretsMigration(n);const[o,y]=yield this.migrationService.deepFilterMigratedSecretsAndWallets(n);if(0===o.length)return L();const D=yield this.shareUrlService.generateShareSecretsURL(o);return y?U({shareUrl:D}):b({shareUrl:D})})}syncAccounts(n){this.interactionService.startInteraction({operationType:B.jl.WALLET_SYNC,iacMessage:n})}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(f.eX),e.LFG(r.yh),e.LFG(le.R),e.LFG(de.o),e.LFG(B.k3),e.LFG(oe.H))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})(),he=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.ez,M.K,h.u5,l.Pc,E.aw,ne,r.Aw.forFeature("accountShareSelect",w),f.sQ.forFeature([ue]),c.aD]]}),t})()},51628:(x,p,i)=>{i.d(p,{D:()=>m});var c=i(9288);let m=(()=>{class h{}return h.\u0275fac=function(f){return new(f||h)},h.\u0275mod=c.oAB({type:h}),h.\u0275inj=c.cJS({imports:[[]]}),h})()},13187:(x,p,i)=>{i.d(p,{H:()=>I});var c=i(65949),m=i(88061),h=i(90544),l=i(47898),f=i(52971),r=i(2853),E=i(55956),M=i(27204),O=i(56810),S=i(9288);let I=(()=>{class A{constructor(s,d){this.secretsService=s,this.navigationService=d}runSecretsMigration(s){return(0,c.mG)(this,void 0,void 0,function*(){return new Promise((d,g)=>{s.every(r.e)?d():this.navigateToMigrationPage({secrets:s}).then(d).catch(g)})})}runWalletsMigration(s){return(0,c.mG)(this,void 0,void 0,function*(){return new Promise((d,g)=>{s.every(r.l)?d():this.navigateToMigrationPage({wallets:s}).then(d).catch(g)})})}navigateToMigrationPage(s){return(0,c.mG)(this,void 0,void 0,function*(){return new Promise((d,g)=>{this.navigationService.routeWithState("/migration",Object.assign(Object.assign({},s),{onSuccess:d,onError:g})).catch(u=>{(0,E.a1)(E.qj.IONIC_NAVIGATION)(u),g(u)})})})}filterMigratedSecrets(s){return s.every(r.e)?[s,!0]:[s.filter(r.e),!1]}filterMigratedWallets(s){return s.every(r.l)?[s,!0]:[s.filter(r.l),!1]}deepFilterMigratedSecretsAndWallets(s){return(0,c.mG)(this,void 0,void 0,function*(){return s.every(r.e)?[s,!0]:[(yield Promise.all(s.map(g=>(0,c.mG)(this,void 0,void 0,function*(){if(!g.fingerprint)return;const[u]=this.filterMigratedWallets(g.wallets);if(0===u.length)return;const v=f.r.init(g);return v.wallets=u,v})))).filter(g=>void 0!==g),!1]})}migrateSecret(s,d={}){return(0,c.mG)(this,void 0,void 0,function*(){const u=Object.assign(Object.assign({},{persist:!1}),d);if(void 0===s.fingerprint){let v=u.mnemonic;if(void 0===v){const L=yield this.secretsService.retrieveEntropyForSecret(s);v=(0,l.entropyToMnemonic)(L)}const P=yield(0,l.mnemonicToSeed)(v),_=(0,h.fromSeed)(P).fingerprint.toString("hex");s.fingerprint=_}u.persist&&(yield this.secretsService.addOrUpdateSecret(s,{setActive:!1}))})}migrateWallet(s,d){return(0,c.mG)(this,void 0,void 0,function*(){const u=Object.assign(Object.assign({},{bip39Passphrase:"",persist:!1}),d);if(s.masterFingerprint&&!u.persist)return;let P,v=u.mnemonic;if((void 0===v||u.persist)&&(P=this.secretsService.findByPublicKey(s.publicKey)),void 0===v&&void 0!==P){const b=yield this.secretsService.retrieveEntropyForSecret(P);v=(0,l.entropyToMnemonic)(b)}else if(void 0===v)return;if((yield s.protocol.getPublicKeyFromMnemonic(v,s.derivationPath,u.bip39Passphrase))!==s.publicKey)throw new Error("Invalid BIP-39 Passphrase");const _=yield(0,l.mnemonicToSeed)(v,u.bip39Passphrase),U=(0,h.fromSeed)(_).fingerprint.toString("hex");s.masterFingerprint=U,s.status=m.AirGapWalletStatus.ACTIVE,u.persist&&void 0!==P&&(yield this.migrateSecret(P,{mnemonic:u.mnemonic,persist:u.persist}))})}}return A.\u0275fac=function(s){return new(s||A)(S.LFG(O.R),S.LFG(M.f))},A.\u0275prov=S.Yz7({token:A,factory:A.\u0275fac,providedIn:"root"}),A})()},2853:(x,p,i)=>{function c(h){return h.fingerprint&&h.wallets.every(m)}function m(h){return!!h.masterFingerprint}i.d(p,{e:()=>c,l:()=>m})}}]);