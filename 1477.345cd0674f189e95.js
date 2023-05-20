"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1477],{41477:(N,y,r)=>{r.r(y),r.d(y,{Bip85ShowPageModule:()=>C});var f=r(12714),T=r(84653),c=r(3323),B=r(23345),b=r(65949),u=r(90544),p=r(47898),M=r(63181),P=r(18099),I=r(23526);class g{constructor(t,i){this.entropy=t,this.type=i}toEntropy(){return this.type===s.XPRV?this.entropy.slice(64,128):this.entropy}toMnemonic(){if(this.type!==s.BIP39)throw new Error("BIP85Child type is not BIP39");return(0,p.entropyToMnemonic)(this.entropy)}toWIF(){if(this.type!==s.WIF)throw new Error("BIP85Child type is not WIF");const t=Buffer.from(this.entropy,"hex");return(0,I.encode)(128,t,!0)}toXPRV(){if(this.type!==s.XPRV)throw new Error("BIP85Child type is not XPRV");const t=Buffer.from(this.entropy.slice(0,64),"hex"),i=Buffer.from(this.entropy.slice(64,128),"hex");return(0,u.fromPrivateKey)(i,t).toBase58()}}var A=r(533);function v(n){return"number"==typeof n&&n>=0}const m=83696968;var s=(()=>{return(n=s||(s={}))[n.BIP39=39]="BIP39",n[n.WIF=2]="WIF",n[n.XPRV=32]="XPRV",n[n.HEX=128169]="HEX",s;var n})();class h{constructor(t){this.node=t}deriveBIP39(t,i,o=0){if(!v(o))throw new Error("BIP39 invalid index");if("number"!=typeof t)throw new Error("BIP39 invalid language type");if(!(t>=0&&t<=8))throw new Error("BIP39 invalid language");const a=(()=>{switch(i){case 12:return 16;case 18:return 24;case 24:return 32;default:throw new Error("BIP39 invalid mnemonic length")}})(),d=this.derive(`m/${m}'/${s.BIP39}'/${t}'/${i}'/${o}'`,a);return new g(d,s.BIP39)}deriveWIF(t=0){if(!v(t))throw new Error("WIF invalid index");const i=this.derive(`m/${m}'/${s.WIF}'/${t}'`,32);return new g(i,s.WIF)}deriveXPRV(t=0){if(!v(t))throw new Error("XPRV invalid index");const i=this.derive(`m/${m}'/${s.XPRV}'/${t}'`,64);return new g(i,s.XPRV)}deriveHex(t,i=0){if(!v(i))throw new Error("HEX invalid index");if("number"!=typeof t)throw new Error("HEX invalid byte length type");if(t<16||t>64)throw new Error("HEX invalid byte length");const o=this.derive(`m/${m}'/${s.HEX}'/${t}'/${i}'`,t);return new g(o,s.HEX)}derive(t,i=64){const a=this.node.derivePath(t).privateKey;return function $(n,t){return A("sha512",n).update(t).digest()}(Buffer.from("bip-entropy-from-k"),a).slice(0,i).toString("hex")}static fromBase58(t){const i=(0,u.fromBase58)(t);if(0!==i.depth)throw new Error("Expected master, got child");return new h(i)}static fromSeed(t){const i=(0,u.fromSeed)(t);if(0!==i.depth)throw new Error("Expected master, got child");return new h(i)}static fromEntropy(t,i=""){const o=(0,p.entropyToMnemonic)(t);return h.fromMnemonic(o,i)}static fromMnemonic(t,i=""){if(!(0,p.validateMnemonic)(t))throw new Error("Invalid mnemonic");const o=(0,p.mnemonicToSeedSync)(t,i);return h.fromSeed(o)}}var E=r(52971),V=r(13390),Z=r(55956),H=r(22951),R=r(27204),U=r(79213),w=r(16183),e=r(9288),x=r(34388);function F(n,t){if(1&n&&(e.TgZ(0,"ion-row")(1,"ion-col",10),e._UZ(2,"img",11),e.qZA(),e.TgZ(3,"ion-col",12)(4,"div",4),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"div")(8,"h5"),e._uU(9),e.qZA()()()()),2&n){const i=e.oxw();e.xp6(2),e.Q6J("src",i.lifehashData,e.LSH),e.xp6(3),e.Oqu(e.lcZ(6,3,"bip85-show.fingerprint")),e.xp6(4),e.Oqu(i.childFingerprint)}}const W=[{path:"",component:(()=>{class n{constructor(i,o,a,d,l){this.deviceService=i,this.navigationService=o,this.secureStorageService=a,this.lifehashService=d,this.storageService=l,this.bip39Passphrase="",this.isBlurred=!0,this.blurText="****** **** ***** **** ******* ***** ***** ****** ***** *** ***** ******* ***** **** ***** ********* ***** ****** ***** **** ***** ******* ***** ****",this.isAdvancedMode$=this.storageService.subscribe(w.NT.ADVANCED_MODE_TYPE).pipe((0,M.U)(S=>S===w.$r.ADVANCED)),this.navigationService.getState()&&(this.secret=this.navigationService.getState().secret,this.mnemonicLength=this.navigationService.getState().mnemonicLength,this.index=this.navigationService.getState().index,this.bip39Passphrase=this.navigationService.getState().bip39Passphrase,this.generateChildMnemonic(this.secret,this.mnemonicLength,this.index))}ionViewDidEnter(){this.deviceService.enableScreenshotProtection({routeBack:"tab-settings"})}ionViewWillLeave(){this.deviceService.disableScreenshotProtection()}goToSecretSetupPage(){const i=new P.W,o=new E.r(i.mnemonicToEntropy(P.W.prepareMnemonic(this.childMnemonic)));this.navigationService.routeWithState("secret-add",{secret:new E.r(o.secretHex,`BIP85 child of "${this.secret.label}"`)}).catch((0,Z.a1)(Z.qj.IONIC_NAVIGATION))}changeBlur(){this.isBlurred=!this.isBlurred,this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.isBlurred=!0},3e4)}generateChildMnemonic(i,o,a){return(0,b.mG)(this,void 0,void 0,function*(){const d=yield this.secureStorageService.get(i.id,i.isParanoia);try{const l=yield d.getItem(i.id).then(J=>J.value),D=h.fromEntropy(l,this.bip39Passphrase).deriveBIP39(0,o,a);this.childMnemonic=D.toMnemonic();const L=yield(0,p.mnemonicToSeed)(this.childMnemonic),Y=(0,u.fromSeed)(L);this.childFingerprint=Y.fingerprint.toString("hex"),this.lifehashData=yield this.lifehashService.generateLifehash(this.childFingerprint)}catch(l){throw l}})}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(V.U),e.Y36(R.f),e.Y36(U.I),e.Y36(H.S),e.Y36(w.Cu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["airgap-bip85-show"]],decls:31,vars:23,consts:[[1,"ion-no-border"],["slot","start"],[1,"ion-padding"],[1,"ion-padding-bottom"],[1,"font--weight__med"],[4,"ngIf"],[1,"typography--mono",3,"id"],[3,"click"],["vertical","bottom","horizontal","end","slot","fixed"],["shape","round","color","primary",3,"click"],["size","3"],[1,"lifehash",3,"src"],["size","9"]],template:function(i,o){1&i&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-back-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5),e.ALo(6,"translate"),e.qZA()()(),e.TgZ(7,"ion-content",2)(8,"p",3),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.TgZ(11,"p",4),e._uU(12),e.ALo(13,"translate"),e.qZA(),e.TgZ(14,"h3"),e._uU(15),e.qZA(),e.TgZ(16,"p",4),e._uU(17),e.ALo(18,"translate"),e.qZA(),e.TgZ(19,"h3"),e._uU(20),e.qZA(),e.YNc(21,F,10,5,"ion-row",5),e.ALo(22,"async"),e.TgZ(23,"h6",6),e._uU(24),e.qZA(),e.TgZ(25,"ion-button",7),e.NdJ("click",function(){return o.changeBlur()}),e._uU(26),e.qZA(),e.TgZ(27,"ion-fab",8)(28,"ion-button",9),e.NdJ("click",function(){return o.goToSecretSetupPage()}),e._uU(29),e.ALo(30,"translate"),e.qZA()()()),2&i&&(e.xp6(5),e.Oqu(e.lcZ(6,11,"bip85-show.title")),e.xp6(4),e.Oqu(e.lcZ(10,13,"bip85-show.text")),e.xp6(3),e.Oqu(e.lcZ(13,15,"bip85-show.mnemonic-length")),e.xp6(3),e.Oqu(o.mnemonicLength),e.xp6(2),e.Oqu(e.lcZ(18,17,"bip85-show.index")),e.xp6(3),e.Oqu(o.index),e.xp6(1),e.Q6J("ngIf",e.lcZ(22,19,o.isAdvancedMode$)),e.xp6(2),e.Q6J("id",o.isBlurred?"blur":""),e.xp6(1),e.Oqu(o.isBlurred?o.blurText:o.childMnemonic),e.xp6(2),e.Oqu(o.isBlurred?"Show Recovery Phrase":"Hide Recovery Phrase"),e.xp6(3),e.Oqu(e.lcZ(30,21,"bip85-show.add")))},directives:[c.Gu,c.sr,c.Sm,c.oU,c.cs,c.wd,c.W2,f.O5,c.Nd,c.wI,c.YG,c.IJ],pipes:[x.X$,f.Ov],styles:["#blur[_ngcontent-%COMP%]{color:transparent;text-shadow:0 0 18px #fff}ion-content[_ngcontent-%COMP%]{--padding-bottom: var(--ion-padding, 64px)}"]}),n})()}];let O=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[B.Bz.forChild(W)],B.Bz]}),n})(),C=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[f.ez,T.u5,c.Pc,O,x.aw]]}),n})()}}]);