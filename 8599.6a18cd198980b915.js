"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8599],{68599:(V,v,a)=>{a.r(v),a.d(v,{SecretImportPageModule:()=>H});var h=a(12714),x=a(84653),w=a(23345),s=a(3323),u=a(34388),d=a(65949),e=a(9288),g=a(18099),I=a(52971),k=a(13390),l=a(55956),C=a(27204),_=a(47898),S=a(4402),T=a(63181),Z=a(70214),M=a(64502);let P=(()=>{class n{constructor(){this.maskWords=!1}ngOnInit(){}add(){this.onAdd&&(this.onAdd(),this.onClick())}delete(){this.onDelete&&(this.onDelete(),this.onClick())}scramble(){this.onScramble&&(this.onScramble(),this.onClick())}showWordlist(){this.onShowWordlist&&(this.onClick(),this.onShowWordlist())}toggleShuffled(){this.onToggleShuffled&&(this.onToggleShuffled(),this.onClick())}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["airgap-keyboard-popover"]],decls:21,vars:16,consts:[["lines","none",1,"ion-no-padding","ion-no-margin"],["button","","detail","false",3,"click"],["slot","start","name","add"],["slot","start","name","trash-outline"],["slot","start","name","shuffle-outline"],["slot","start",3,"name"],["slot","start","name","list"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-list",0)(1,"ion-item",1),e.NdJ("click",function(){return o.add()}),e._UZ(2,"ion-icon",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"ion-item",1),e.NdJ("click",function(){return o.delete()}),e._UZ(6,"ion-icon",3),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"ion-item",1),e.NdJ("click",function(){return o.toggleShuffled()}),e._UZ(10,"ion-icon",4),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.TgZ(13,"ion-item",1),e.NdJ("click",function(){return o.scramble()}),e._UZ(14,"ion-icon",5),e._uU(15),e.ALo(16,"translate"),e.qZA(),e.TgZ(17,"ion-item",1),e.NdJ("click",function(){return o.showWordlist()}),e._UZ(18,"ion-icon",6),e._uU(19),e.ALo(20,"translate"),e.qZA()()),2&t&&(e.xp6(3),e.hij(" ",e.lcZ(4,6,"keyboard.add")," "),e.xp6(4),e.hij(" ",e.lcZ(8,8,"keyboard.delete")," "),e.xp6(4),e.hij(" ",e.lcZ(12,10,"keyboard.shuffle")," "),e.xp6(3),e.Q6J("name",o.maskWords?"eye-outline":"eye-off-outline"),e.xp6(1),e.hij(" ",e.lcZ(16,12,"keyboard.mask")," "),e.xp6(4),e.hij(" ",e.lcZ(20,14,"keyboard.word_list")," "))},directives:[s.q_,s.Ie,s.gu],pipes:[u.X$],styles:[""]}),n})();var O=a(20976);function N(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ion-col")(1,"ion-button",12),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw(2).selectWord(c)}),e._uU(2),e.qZA()()}if(2&n){const t=i.$implicit;e.xp6(1),e.Q6J("color","primary"),e.xp6(1),e.hij(" ",t," ")}}function A(n,i){if(1&n&&(e.TgZ(0,"ion-col")(1,"ion-button",13),e._uU(2),e.qZA()()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("color","tertiary"),e.xp6(1),e.hij(" ",t.hiddenSuggestions," more ")}}function J(n,i){1&n&&(e.TgZ(0,"ion-button",13),e._uU(1," no suggestions "),e.qZA()),2&n&&e.Q6J("color","secondary")}function L(n,i){1&n&&(e.ynx(0),e._UZ(1,"ion-icon",17),e.BQk())}function U(n,i){if(1&n&&(e.ynx(0),e._UZ(1,"span",18),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("innerHTML",t.letter,e.oJD)}}function Q(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ion-button",16),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw(3).selectLetter(c.letter)}),e.YNc(1,L,2,0,"ng-container",2),e.YNc(2,U,2,1,"ng-container",2),e.qZA()}if(2&n){const t=i.$implicit;e.Q6J("id","key-"+t.letter)("color",t.active?"primary":"tertiary")("disabled",!t.enabled),e.xp6(1),e.Q6J("ngIf","{backspace}"===t.letter),e.xp6(1),e.Q6J("ngIf","{backspace}"!==t.letter)}}function K(n,i){if(1&n&&(e.TgZ(0,"div",14),e.YNc(1,Q,3,5,"ion-button",15),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("ngForOf",t)}}function j(n,i){if(1&n&&(e.ynx(0),e.TgZ(1,"ion-row",7)(2,"ion-row",8),e.YNc(3,N,3,2,"ion-col",9),e.YNc(4,A,3,2,"ion-col",2),e.qZA(),e.YNc(5,J,2,1,"ion-button",10),e.qZA(),e.YNc(6,K,2,1,"div",11),e.BQk()),2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngForOf",t.suggestions),e.xp6(1),e.Q6J("ngIf",t.hiddenSuggestions>0),e.xp6(1),e.Q6J("ngIf",0===t.suggestions.length),e.xp6(1),e.Q6J("ngForOf",t.rows)}}const f="qwertyuiopasdfghjklzxcvbnm";let F=(()=>{class n{constructor(t,o,r){this.clipboardService=t,this.modalController=o,this.popoverCtrl=r,this.text="",this.enabled=!0,this.wordlist=_.wordlists.EN,this.wordSelected=new e.vpe,this.pasted=new e.vpe,this.addNewWord=new e.vpe,this._maskInput=!1,this.maskInput=new e.vpe,this.suggestions=[],this.hiddenSuggestions=0,this.validLetters=f,this.shuffled=!1,this.subscriptions=new Z.w,this.paintKeyboard()}ngOnInit(){this.setWord&&this.subscriptions.add(this.setWord.subscribe(t=>{this.setText(t)}))}ngOnDestroy(){this.subscriptions.unsubscribe()}paintKeyboard(){return(0,d.mG)(this,void 0,void 0,function*(){if(this.wordlist){const m=this.wordlist.filter(b=>b.startsWith(this.text)),y=20;this.suggestions=m.slice(0,y),this.hiddenSuggestions=Math.max(0,m.length-y);const W=new Set;m.forEach(b=>{W.add(b[this.text.length])}),this.validLetters=[...W.values()].join("")}else this.validLetters=f;let t=f;const o=(this.shuffled?function E(n){const i=n.split("");let o,t=i.length;for(;0!==t;)o=Math.floor(Math.random()*t),t--,[i[t],i[o]]=[i[o],i[t]];return i.join("")}(t):t).split("").map(m=>({letter:m,enabled:this.validLetters.includes(m),active:!1}));this.rows=[],this.rows.push(o.splice(0,10)),this.rows.push(o.splice(0,9)),this.rows.push([...o.splice(0,7),{letter:"{backspace}",enabled:this.text.length>0,active:!1}])})}selectLetter(t){"{backspace}"===t?this.removeLetter():this.addLetter(t),this.paintKeyboard()}selectWord(t){this.wordSelected.next(t)}addLetter(t){this.text+=t;const o=this.wordlist.filter(c=>c.startsWith(this.text));o.length>1||o.filter(c=>c===this.text).length>0&&this.selectWord(this.text)}removeLetter(){return(0,d.mG)(this,void 0,void 0,function*(){this.text=this.text.substring(0,this.text.length-1)})}toggleShuffled(){return(0,d.mG)(this,void 0,void 0,function*(){this.shuffled=!this.shuffled,this.paintKeyboard()})}add(){return(0,d.mG)(this,void 0,void 0,function*(){this.addNewWord.next()})}delete(){return(0,d.mG)(this,void 0,void 0,function*(){this.wordSelected.next(void 0)})}setText(t){return(0,d.mG)(this,void 0,void 0,function*(){this.text=t,this.suggestions=[],this.paintKeyboard()})}paste(){return(0,d.mG)(this,void 0,void 0,function*(){const t=yield this.clipboardService.paste();this.pasted.emit(t)})}scramble(){return(0,d.mG)(this,void 0,void 0,function*(){this._maskInput=!this._maskInput,this.maskInput.emit(this._maskInput)})}showWordlist(){return(0,d.mG)(this,void 0,void 0,function*(){(yield this.modalController.create({component:M.j,componentProps:{isModal:!0}})).present().catch((0,l.a1)(l.qj.IONIC_MODAL))})}presentPopover(t){return(0,d.mG)(this,void 0,void 0,function*(){const o=yield this.popoverCtrl.create({component:P,componentProps:{onClick:()=>{o.dismiss().catch((0,l.a1)(l.qj.IONIC_MODAL))},onAdd:()=>{this.add()},onDelete:()=>{this.delete()},onScramble:()=>{this.scramble()},onShowWordlist:()=>{this.showWordlist()},onToggleShuffled:()=>{this.toggleShuffled()},maskWords:this._maskInput},event:t,translucent:!0});o.present().catch((0,l.a1)(l.qj.IONIC_MODAL))})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(O.Yv),e.Y36(s.IN),e.Y36(s.Dh))},n.\u0275cmp=e.Xpm({type:n,selectors:[["airgap-mnemonic-keyboard"]],inputs:{setWord:"setWord",enabled:"enabled",wordlist:"wordlist"},outputs:{wordSelected:"wordSelected",pasted:"pasted",addNewWord:"addNewWord",maskInput:"maskInput"},decls:11,vars:5,consts:[[1,"input--container"],[1,"typography--mono"],[4,"ngIf"],[1,"content--align__center-center","actions--container"],[3,"click"],["name","clipboard-outline"],["slot","icon-only","name","ellipsis-vertical"],[1,"suggestion--container"],[1,"ion-nowrap","horizontal--scroll"],[4,"ngFor","ngForOf"],["shape","round","size","small","class","typography--mono lowercase",3,"color",4,"ngIf"],["class","content--align__center-center",4,"ngFor","ngForOf"],["shape","round","size","small",1,"typography--mono","lowercase",3,"color","click"],["shape","round","size","small",1,"typography--mono","lowercase",3,"color"],[1,"content--align__center-center"],["size","small","class","typography--mono lowercase",3,"id","color","disabled","click",4,"ngFor","ngForOf"],["size","small",1,"typography--mono","lowercase",3,"id","color","disabled","click"],["name","backspace-outline"],[3,"innerHTML"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"span",1),e._uU(2),e.qZA()(),e.YNc(3,j,7,4,"ng-container",2),e.TgZ(4,"div",3)(5,"ion-button",4),e.NdJ("click",function(){return o.paste()}),e._UZ(6,"ion-icon",5),e._uU(7),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"ion-button",4),e.NdJ("click",function(c){return o.presentPopover(c)}),e._UZ(10,"ion-icon",6),e.qZA()()),2&t&&(e.xp6(2),e.Oqu(o.text),e.xp6(1),e.Q6J("ngIf",o.enabled),e.xp6(4),e.hij(" ",e.lcZ(8,3,"keyboard.paste")," "))},directives:[h.O5,s.Nd,h.sg,s.wI,s.YG,s.gu],pipes:[u.X$],styles:[".lowercase[_ngcontent-%COMP%]{text-transform:lowercase}.suggestion--container[_ngcontent-%COMP%]{padding:.5rem 0;min-height:2.5rem}.input--container[_ngcontent-%COMP%]{min-height:1.5rem}.actions--container[_ngcontent-%COMP%]{padding-top:.5rem}.horizontal--scroll[_ngcontent-%COMP%]{flex-wrap:nowrap;overflow-x:scroll;overflow-y:hidden;-ms-overflow-style:none;scrollbar-width:none}.horizontal--scroll[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}"]}),n})();const Y=["secretContainer"];function z(n,i){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"ion-button",16),e.NdJ("click",function(){const c=e.CHM(t).index;return e.oxw().selectWord(c)}),e.TgZ(2,"ion-text",17)(3,"span",18),e._uU(4),e.qZA()(),e._uU(5),e.qZA(),e.BQk()}if(2&n){const t=i.$implicit,o=i.index,r=e.oxw();e.xp6(1),e.ekj("btn-current",o===r.selectedWordIndex),e.Q6J("color",o===r.selectedWordIndex?"transparent":"tertiary"),e.xp6(3),e.Oqu(o+1),e.xp6(1),e.hij(" ",r.maskWords?"***":t," ")}}function G(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ion-button",16),e.NdJ("click",function(){return e.CHM(t),e.oxw().selectWord(-1)}),e.qZA()}if(2&n){const t=e.oxw();e.ekj("btn-blank",-1!==t.selectedWordIndex)("btn-current",-1===t.selectedWordIndex),e.Q6J("color","transparent")}}function q(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"ion-button",21),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw(2).wordLastSelected(c)}),e._uU(1),e.qZA()}if(2&n){const t=i.$implicit;e.Q6J("color","tertiary"),e.xp6(1),e.hij(" ",t," ")}}function $(n,i){if(1&n&&(e.TgZ(0,"div",19),e._uU(1," To generate a valid 24 word mnemonic, one of the following words must be your last word. "),e._UZ(2,"br"),e.YNc(3,q,2,2,"ion-button",20),e.qZA()),2&n){const t=e.oxw();e.xp6(3),e.Q6J("ngForOf",t.lastWordOptions)}}function B(n,i){1&n&&e._UZ(0,"hr")}const D=[{path:"",component:(()=>{class n{constructor(t,o,r){this.deviceService=t,this.navigationService=o,this.alertController=r,this.secretWords=[],this.selectedWordIndex=0,this.selectedWord="",this.maskWords=!1,this.wordList=_.wordlists.EN,this.lastWordOptions=[],this.setWordEmitter=new S.xQ,this.keyboardEnabled=!0,this.maxWords=24,this.secretWordsValid=this.setWordEmitter.pipe((0,T.U)(()=>(this.keyboardEnabled=-1===this.selectedWordIndex&&this.secretWords.length<this.maxWords||-1!==this.selectedWordIndex,this.isValid())))}selectWord(t){var o;this.selectedWordIndex=t,this.selectedWord=this.secretWords[this.selectedWordIndex],this.setWordEmitter.next(null!==(o=this.selectedWord)&&void 0!==o?o:"")}wordLastSelected(t){if(23!==this.secretWords.length)return console.error("(wordLastSelected): secret word list is not 23 words long");this.selectedWordIndex=23,this.wordSelected(t)}wordSelected(t){var o;if(void 0===t)return this.selectedWordIndex>=0?(this.secretWords.splice(this.selectedWordIndex,1),this.selectWord(Math.max(this.selectedWordIndex-1,0))):-1===this.selectedWordIndex&&this.selectWord(this.secretWords.length-1),void this.getLastWord();-1===this.selectedWordIndex?this.secretWords.push(t):this.secretWords[this.selectedWordIndex]=t,this.selectedWordIndex=-1,this.selectedWord="",this.getLastWord(),this.setWordEmitter.next(null!==(o=this.selectedWord)&&void 0!==o?o:""),this.secretContainer&&(this.secretContainer.nativeElement.scrollTop=this.secretContainer.nativeElement.scrollHeight)}ionViewDidEnter(){this.deviceService.enableScreenshotProtection({routeBack:"secret-setup"})}ionViewWillLeave(){this.deviceService.disableScreenshotProtection()}isValid(){return g.W.validateMnemonic(this.secretWords.join(" "))}goToSecretSetupPage(){const t=new g.W,o=new I.r(t.mnemonicToEntropy(g.W.prepareMnemonic(this.secretWords.join(" "))));this.navigationService.routeWithState("secret-add",{secret:o}).catch((0,l.a1)(l.qj.IONIC_NAVIGATION))}paste(t){var o;return(0,d.mG)(this,void 0,void 0,function*(){g.W.validateMnemonic(t)?(this.secretWords=t.split(" "),this.selectedWordIndex=-1,this.selectedWord="",this.setWordEmitter.next(null!==(o=this.selectedWord)&&void 0!==o?o:"")):(yield this.alertController.create({header:"Invalid Mnemonic",message:"The text in your clipboard is not a valid mnemonic.",backdropDismiss:!1,buttons:[{text:"Ok"}]})).present()})}addNewWord(){return(0,d.mG)(this,void 0,void 0,function*(){if(this.secretWords.length>=24)return console.error("(addNewWord): secret word list too long");this.secretWords.splice(this.selectedWordIndex+1,0,""),this.selectedWordIndex++,this.setWordEmitter.next("")})}mask(t){return(0,d.mG)(this,void 0,void 0,function*(){this.maskWords=t})}getLastWord(){const t=[];if(23===this.secretWords.length)for(const o of _.wordlists.EN)_.validateMnemonic([...this.secretWords,o].join(" "))&&t.push(o);this.lastWordOptions=t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(k.U),e.Y36(C.f),e.Y36(s.Br))},n.\u0275cmp=e.Xpm({type:n,selectors:[["airgap-secret-import"]],viewQuery:function(t,o){if(1&t&&e.Gf(Y,5,e.SBq),2&t){let r;e.iGM(r=e.CRH())&&(o.secretContainer=r.first)}},decls:26,vars:15,consts:[[1,"ion-no-border"],["transparent",""],["slot","start"],["defaultHref","/secret-setup"],[1,"ion-no-padding"],[1,"ion-padding-horizontal"],[1,"secret--container-45","ion-align-items-center"],["secretContainer",""],[1,"secret--container__inner","ion-justify-content-center"],[4,"ngFor","ngForOf"],["style","min-width: 60px","shape","round","size","small","class","typography--mono",3,"btn-blank","btn-current","color","click",4,"ngIf"],["class","ion-padding ion-align-items-center",4,"ngIf"],[4,"ngIf"],[3,"setWord","enabled","wordSelected","pasted","addNewWord","maskInput"],["vertical","bottom","horizontal","end","slot","fixed"],["color","primary","shape","round",3,"disabled","click"],["shape","round","size","small",1,"typography--mono",2,"min-width","60px",3,"color","click"],["color","medium"],[1,"text--medium"],[1,"ion-padding","ion-align-items-center"],["shape","round","size","small","class","typography--mono lowercase",3,"color","click",4,"ngFor","ngForOf"],["shape","round","size","small",1,"typography--mono","lowercase",3,"color","click"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e._UZ(3,"ion-back-button",3),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5),e.ALo(6,"translate"),e.qZA()()(),e.TgZ(7,"ion-content",4)(8,"label",5),e._uU(9,"Select the correct word for this position."),e.qZA(),e.TgZ(10,"ion-row",6,7)(12,"ion-col")(13,"ion-row",8),e.YNc(14,z,6,5,"ng-container",9),e.YNc(15,G,1,5,"ion-button",10),e.qZA()()(),e._UZ(16,"hr"),e.YNc(17,$,4,1,"div",11),e.YNc(18,B,1,0,"hr",12),e.TgZ(19,"div",5)(20,"airgap-mnemonic-keyboard",13),e.NdJ("wordSelected",function(c){return o.wordSelected(c)})("pasted",function(c){return o.paste(c)})("addNewWord",function(){return o.addNewWord()})("maskInput",function(c){return o.mask(c)}),e.qZA()(),e.TgZ(21,"ion-fab",14)(22,"ion-button",15),e.NdJ("click",function(){return o.goToSecretSetupPage()}),e.ALo(23,"async"),e._uU(24),e.ALo(25,"translate"),e.qZA()()()),2&t&&(e.xp6(5),e.Oqu(e.lcZ(6,9,"secret-import.title")),e.xp6(9),e.Q6J("ngForOf",o.secretWords),e.xp6(1),e.Q6J("ngIf",o.secretWords.length<24),e.xp6(2),e.Q6J("ngIf",o.lastWordOptions.length>0),e.xp6(1),e.Q6J("ngIf",o.lastWordOptions.length>0),e.xp6(2),e.Q6J("setWord",o.setWordEmitter)("enabled",o.keyboardEnabled&&o.lastWordOptions.length<=0),e.xp6(2),e.Q6J("disabled",!e.lcZ(23,11,o.secretWordsValid)),e.xp6(2),e.hij(" ",e.lcZ(25,13,"secret-edit.confirm_label")," "))},directives:[s.Gu,s.sr,s.Sm,s.oU,s.cs,s.wd,s.W2,s.Nd,s.wI,h.sg,s.YG,s.yW,h.O5,F,s.IJ],pipes:[u.X$,h.Ov],styles:["ion-textarea[_ngcontent-%COMP%]{font-family:Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;font-weight:600;text-transform:lowercase;height:24vh}.secret--container-45[_ngcontent-%COMP%]{height:calc(45% - 36px);min-height:50px;overflow-y:scroll}.secret--container-55[_ngcontent-%COMP%]{height:calc(55% - 36px)}hr[_ngcontent-%COMP%]{border:2px dashed var(--ion-color-primary);border-style:none none dashed;margin:8px 0}.word-placeholder[_ngcontent-%COMP%]{min-width:48px}.size__xs[_ngcontent-%COMP%]{font-size:11px}.typography--mono[_ngcontent-%COMP%]{text-transform:lowercase}.btn-current[_ngcontent-%COMP%]{border:2px dashed var(--ion-color-primary);border-radius:25px}.btn-blank[_ngcontent-%COMP%]{border:2px dashed var(--ion-color-tertiary);border-radius:25px}.text--medium[_ngcontent-%COMP%]{margin-right:.25rem}ion-content[_ngcontent-%COMP%]{--padding-bottom: var(--ion-padding, 64px)}"]}),n})()}];let H=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[h.ez,x.u5,x.UX,s.Pc,w.Bz.forChild(D),u.aw]]}),n})()}}]);