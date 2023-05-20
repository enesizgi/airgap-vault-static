"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2951],{22951:(x,t,i)=>{i.d(t,{S:()=>h});var r=i(65949),l=i(50166),f=i(9288);let h=(()=>{class e{constructor(){}generateLifehash(a){return(0,r.mG)(this,void 0,void 0,function*(){return l._0.makeFrom(a,l.TD.version2,1,!0).toDataUrl()})}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275prov=f.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},6568:(x,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Bitmap=void 0,t.Bitmap=class i{constructor(l,f){this.width=l,this.height=f,this.width=l,this.height=f,this.pixel=new Array(l);for(var h=0;h<l;h++){this.pixel[h]=new Array(f);for(var e=0;e<f;e++)this.pixel[h][e]=[0,0,0,0]}}subsample(l){for(var f=~~(this.width/l),h=~~(this.height/l),e=new Array(f),n=0;n<f;n++){e[n]=new Array(h);for(var a=0;a<h;a++){for(var o=[0,0,0,0],d=0;d<l;d++)for(var u=0;u<l;u++){var _=this.pixel[n*l+d][a*l+u];o[0]+=_[3]*_[0],o[1]+=_[3]*_[1],o[2]+=_[3]*_[2],o[3]+=_[3]}o[3]&&(o[0]/=o[3],o[1]/=o[3],o[2]/=o[3],o[3]/=l*l),e[n][a]=o}}this.width=f,this.height=h,this.pixel=e}dataURL(){function l(m){return~~(255*Math.max(0,Math.min(1,m)))}function f(m){return l(m)}function h(m,g,L){for(var y="\0",P=0;P<g;P++){var j=m[P][L];y+=String.fromCharCode(f(j[0]),f(j[1]),f(j[2]),l(j[3]))}return y}function a(m){return String.fromCharCode(m>>>24,m>>>16&255,m>>>8&255,255&m)}function u(m,g){return a(g.length)+m+g+a(function d(m){for(var g=-1,L=0;L<m.length;L++)for(var y=256|m.charCodeAt(L);1!=y;y>>>=1)g=g>>>1^(1&(g^y)?3988292384:0);return~g}(m+g))}return"data:image/png;base64,"+function _(m){for(var g="",L=5,y=8*m.length+5;L<y;L+=6)g+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[(m.charCodeAt(~~(L/8)-1)<<8|m.charCodeAt(~~(L/8)))>>7-L%8&63];for(;g.length%4;g+="=");return g}("\x89PNG\r\n\x1a\n"+u("IHDR",a(this.width)+a(this.height)+"\b\x06\0\0\0")+u("IDAT",function o(m){var g="x\x01",L=0;do{var y=m.slice(L,L+65535),P=y.length;g+=String.fromCharCode(((L+=y.length)==m.length)<<0,255&P,P>>>8,255&~P,~P>>>8&255),g+=y}while(L<m.length);return g+a(function n(m){for(var g=1,L=0,y=0;y<m.length;y++)L=(L+(g=(g+m.charCodeAt(y))%65521))%65521;return L<<16|g}(m))}(function e(m,g,L){for(var y="",P=0;P<L;P++)y+=h(m,g,P);return y}(this.pixel,this.width,this.height)))+u("IEND",""))}}},50166:(x,t,i)=>{t.TD=t._0=void 0;var l=i(206);Object.defineProperty(t,"_0",{enumerable:!0,get:function(){return l.LifeHash}});var f=i(58736);Object.defineProperty(t,"TD",{enumerable:!0,get:function(){return f.LifeHashVersion}})},87335:(x,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BitAggregator=void 0,t.BitAggregator=class i{constructor(){this._data=[],this.bitMask=0}append(l){0===this.bitMask&&(this.bitMask=128,this._data.push(0)),l&&(this._data[this._data.length-1]|=this.bitMask),this.bitMask>>=1}get_data(){return Uint8Array.from(this._data)}}},492:(x,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BitEnumerator=void 0,t.BitEnumerator=class i{constructor(l){this.data=l,this.index=0,this.mask=128}has_next(){return 0!==this.mask||this.index!==this.data.length-1}next(){if(!this.has_next())throw new Error("BitEnumerator underflow.");0===this.mask&&(this.mask=128,this.index+=1);const l=0!=(this.data[this.index]&this.mask);return this.mask>>=1,l}next_configurable(l,f){let h=0;for(let e=0;e<f;e+=1)this.next()&&(h|=l),l>>=1;return h}next_uint2(){return this.next_configurable(2,2)}next_uint8(){return this.next_configurable(128,8)}next_uint16(){return this.next_configurable(32768,16)}next_frac(){return this.next_uint16()/65535}}},14038:(x,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CellGrid=void 0;const r=i(87335),l=i(492),f=i(53326),h=i(60315),e=i(8726);class n extends f.Grid{constructor(o){super(o),this.data=new r.BitAggregator}get_data(){const o=new r.BitAggregator;for(const d of this.get_points())o.append(this.get_value(d));return o.get_data()}set_data(o){const d=new l.BitEnumerator(o);let u=0;for(;d.has_next();)this._storage[u]=d.next(),u+=1}static is_alive_in_next_generation(o,d){return o?[2,3].includes(d):3==d}count_neighbors(o){let d=0;for(const u of this.get_neighborhood(o))u[0].equals(new h.Point(0,0))||this.get_value(u[1])&&(d+=1);return d}next_generation(o,d,u){d.set_all(!1),u.set_all(!1);for(const _ of this.get_points()){const p=this.get_value(_);if(o.get_value(_)){const m=this.count_neighbors(_),g=n.is_alive_in_next_generation(p,m);g&&d.set_value(!0,_),p!=g&&u.set_changed(_)}else d.set_value(p,_)}}color_for_value(o){return o?e.Colors.white:e.Colors.black}}t.CellGrid=n},77107:(x,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ChangeGrid=void 0;const r=i(8726),l=i(53326);t.ChangeGrid=class f extends l.Grid{set_changed(e){for(const n of this.get_neighborhood(e))this.set_value(!0,n[1])}color_for_value(e){return e?r.Colors.red:r.Colors.blue}}},99191:(x,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Color=void 0;const r=i(8726),l=i(65010);class f{constructor(e=0,n=0,a=0){[this.r,this.g,this.b]=[e,n,a]}static from_uint8_values(e,n,a){return new this(e/255,n/255,a/255)}lighten(e){return this.lerp_to(r.Colors.white,e)}darken(e){return this.lerp_to(r.Colors.black,e)}luminance(){return Math.sqrt(Math.pow(.299*this.r,2)+Math.pow(.587*this.g,2)+Math.pow(.144*this.b,2))}burn(e){let n;return n=Math.max(1-e,1e-7),new f(Math.min(1-(1-this.r)/n,1),Math.min(1-(1-this.g)/n,1),Math.min(1-(1-this.b)/n,1))}lerp_to(e,n){const a=(0,l.clamped)(n),o=(0,l.clamped)(this.r*(1-a)+e.r*a),d=(0,l.clamped)(this.g*(1-a)+e.g*a),u=(0,l.clamped)(this.b*(1-a)+e.b*a);return new f(o,d,u)}}t.Color=f},35353:(x,t,i)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.ColorGrid=void 0;const l=i(53326),f=i(57526),h=i(60315),e=i(54531),n=i(20045);class a extends l.Grid{constructor(d,u,_){let p;super(a.target_size(d.size,_)),p=Object.keys(a.transforms_map).includes(_.toString())?a.transforms_map[_]:[];for(const m of d.get_points()){const L=u(d.get_value(m));this.draw(m,L,p)}}color_for_value(d){return d}static target_size(d,u){let _;return _=u===f.PatternType.fiducial?1:2,new e.Size(d.width*_,d.height*_)}transform_point(d,u){let _;return _=new h.Point(d.x,d.y),u.transpose&&([_.x,_.y]=[_.y,_.x]),u.reflect_x&&(_.x=this._maxX-_.x),u.reflect_y&&(_.y=this._maxY-_.y),_}draw(d,u,_){let p;for(const m of _)p=this.transform_point(d,m),this.set_value(u,p)}}t.ColorGrid=a,r=a,a.snowflake_transforms=[new n.Transform(!1,!1,!1),new n.Transform(!1,!0,!1),new n.Transform(!1,!1,!0),new n.Transform(!1,!0,!0)],a.pinwheel_transforms=[new n.Transform(!1,!1,!1),new n.Transform(!0,!0,!1),new n.Transform(!0,!1,!0),new n.Transform(!1,!0,!0)],a.fiducial_transforms=[new n.Transform(!1,!1,!1)],a.transforms_map={0:r.snowflake_transforms,1:r.pinwheel_transforms,2:r.fiducial_transforms}},62810:(x,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FracGrid=void 0;const r=i(8726),l=i(53326);t.FracGrid=class f extends l.Grid{constructor(e){super(e)}overlay(e,n){for(const a of this.get_points())e.get_value(a)&&this.set_value(n,a)}color_for_value(e){return r.Colors.black.lerp_to(r.Colors.white,e)}}},53326:(x,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Grid=void 0;const r=i(60315),l=i(8726);t.Grid=class f{constructor(e){this.size=e,this._capacity=e.width*e.height,this._storage=Array(this._capacity).fill(0),this._maxX=e.width-1,this._maxY=e.height-1}_offset(e){return e.y*this.size.width+e.x}circular_index(e,n){return(e+n)%n}set_all(e){this._storage=Array(this._capacity).fill(e)}set_value(e,n){const a=this._offset(n);this._storage[a]=e}get_value(e){return this._storage[this._offset(e)]}*get_points(){for(let e=0;e<this._maxY+1;e+=1)for(let n=0;n<this._maxX+1;n+=1)yield new r.Point(n,e)}*get_neighborhood(e){const n=[];for(let a=-1;a<=1;a+=1)for(let o=-1;o<=1;o+=1){const d=new r.Point(o,a),u=this.circular_index(o+e.x,this.size.width),_=this.circular_index(a+e.y,this.size.height),p=new r.Point(u,_);n.push([d,p]),yield[d,p]}}color_for_value(e){return e?l.Colors.white:l.Colors.black}colors(){const e=[];for(const n of this._storage){const a=this.color_for_value(n);e.push(a.r),e.push(a.g),e.push(a.b)}return e}}},40714:(x,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HSBColor=void 0;const r=i(99191),l=i(65010);class f{constructor(e,n=1,a=1){this.hue=e,this.saturation=n,this.brightness=a}to_color(){const n=this.saturation,a=this.hue,o=(0,l.clamped)(this.brightness),d=(0,l.clamped)(n);let[u,_,p]=[null,null,null];if(d<=0)[u,_,p]=[o,o,o];else{let m=(0,l.modulo)(a,1);m<0&&(m+=1),m*=6;const g=Math.floor(m),L=m-g,y=o*(1-d),P=o*(1-d*L),j=o*(1-d*(1-L));if(0===g)[u,_,p]=[o,j,y];else if(1===g)[u,_,p]=[P,o,y];else if(2===g)[u,_,p]=[y,o,j];else if(3===g)[u,_,p]=[y,P,o];else if(4===g)[u,_,p]=[j,y,o];else{if(5!==g)throw new Error("Internal error.");[u,_,p]=[o,y,P]}}return new r.Color(u,_,p)}static make_from_color(e){const[n,a,o]=[e.r,e.g,e.b],d=Math.max(n,a,o),u=Math.min(n,a,o),_=d,p=d-u;let m=null;m=0===d?0:p/d;let g=null;if(d===u)g=0;else if(d===n)g=((a-o)/p+(a<o?6:0))/6;else if(d===a)g=((o-n)/p+2)/6;else{if(d!==o)throw new Error("Internal error.");g=((n-a)/p+4)/6}return new f(g,m,_)}}t.HSBColor=f},43016:(x,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Image=void 0;const r=i(6568),l=i(65010);class f{constructor(e,n,a){this.width=e,this.height=n,this.colors=a}static make_image(e,n,a,o,d){if(0===o)throw new Error("Invalid module size.");const u=e*o,_=n*o;let p=null;p=d?4:3;const m=[];for(let g=0;g<u;g+=1)for(let L=0;L<_;L+=1){const j=3*(g/o*e+L/o),F=(g*u+L)*p;m[F]=Math.floor(255*(0,l.clamped)(a[j])),m[F+1]=Math.floor(255*(0,l.clamped)(a[j+1])),m[F+2]=Math.floor(255*(0,l.clamped)(a[j+2])),d&&(m[F+3]=255)}return new f(u,_,[...Object.values(m)])}toDataUrl(){const e=new r.Bitmap(this.width,this.height);for(var n=0;n<e.height;n++)for(var a=0;a<e.width;a++){const o=4*n+a*e.height*4;e.pixel[n][a]=[this.colors[o]/255,this.colors[o+1]/255,this.colors[o+2]/255,this.colors[o+3]/255]}return e.dataURL()}}t.Image=f},206:(x,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LifeHash=void 0;const r=i(60237),l=i(492),f=i(14038),h=i(77107),e=i(35353),n=i(62810),a=i(57526),o=i(54531),d=i(43016),u=i(58736),_=i(96899),p=i(35885),m=i(65010);t.LifeHash=class g{static makeFrom(y,P=u.LifeHashVersion.version2,j=1,F=!1){if("string"==typeof y&&(y=(new TextEncoder).encode(y)),!(y instanceof Uint8Array))throw new Error("data must be utf-8 string or bytes");const c=r("sha256").update(y).digest();return this.makeFromDigest(c,P,j,F)}static makeFromDigest(y,P=u.LifeHashVersion.version2,j=1,F=!1){let c,s,b,C,M,w,k,v,H,V,G,O,E,T,A,B,D;if(32!==y.length)throw new Error("Digest must be 32 bytes.");if([u.LifeHashVersion.version1,u.LifeHashVersion.version2].includes(P))G=16,O=150;else{if(![u.LifeHashVersion.detailed,u.LifeHashVersion.fiducial,u.LifeHashVersion.grayscale_fiducial].includes(P))throw new Error("Invalid version.");G=32,O=300}const S=new o.Size(G,G);let z=new f.CellGrid(S),U=new f.CellGrid(S),R=new h.ChangeGrid(S),Y=new h.ChangeGrid(S);const K=new Set,N=[];switch(P){case u.LifeHashVersion.version1:U.set_data(y);break;case u.LifeHashVersion.version2:U.set_data((0,_.sha256)(y));break;case u.LifeHashVersion.detailed:case u.LifeHashVersion.fiducial:case u.LifeHashVersion.grayscale_fiducial:throw new Error("Not implemented")}for(Y.set_all(!0);N.length<O;){[z,U]=[U,z],[R,Y]=[Y,R],M=z.get_data(),c=r("sha256").update(M);const I=c.digest();if(K.has(I.toString()))break;K.add(I.toString()),N.push(M),z.next_generation(R,U,Y)}v=new n.FracGrid(S);for(let I=0;I<N.length;I+=1)z.set_data(N[I]),k=(0,m.clamped)((0,m.lerp_from)(0,N.length,I+1)),v.overlay(z,k);if(P!==u.LifeHashVersion.version1){T=null,E=null,D=[];for(const I of v.get_points())B=v.get_value(I),D.push(B);T=Math.min(...D),E=Math.max(...D);for(const I of v.get_points())C=v.get_value(I),B=(0,m.lerp_from)(T,E,C),v.set_value(B,I)}return w=new l.BitEnumerator(y),P===u.LifeHashVersion.version2&&(w.next(),w.next()),H=(0,p.select_gradient)(w,P),A=a.Pattern.select_pattern(w,P),s=new e.ColorGrid(v,H,A),b=s.colors(),V=d.Image.make_image(s.size.width,s.size.height,b,j,F),V}}},57526:(x,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Pattern=t.PatternType=void 0;const r=i(58736);var l,h;(h=l=t.PatternType||(t.PatternType={}))[h.snowflake=0]="snowflake",h[h.pinwheel=1]="pinwheel",h[h.fiducial=2]="fiducial",t.Pattern=class f{static select_pattern(e,n){return[r.LifeHashVersion.fiducial,r.LifeHashVersion.grayscale_fiducial].includes(n)?l.fiducial:e.next()?l.snowflake:l.pinwheel}}},60315:(x,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Point=void 0;class i{constructor(l,f){this.x=l,this.y=f}equals(l){return l instanceof i?l.x===this.x&&l.y===this.y:l===this}}t.Point=i},54531:(x,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Size=void 0,t.Size=class i{constructor(l,f){this.width=l,this.height=f}}},20045:(x,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Transform=void 0,t.Transform=class i{constructor(l,f,h){this.transpose=l,this.reflect_x=f,this.reflect_y=h}}},35885:(x,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.select_gradient=t.blend_many=t.blend=void 0;const r=i(8726),l=i(40714),f=i(65010),h=i(58736),e=i(96899);function a(c){return new l.HSBColor(c).to_color()}function o(c,s){return function b(C){return c.lerp_to(s,C)}}function d(c){const s=c.length;return 0===s?o(r.Colors.black,r.Colors.black):1===s?o(c[0],c[0]):2===s?o(c[0],c[1]):function(C){let M,w,k,v,H,V;return C>=1?c[s-1]:C<=0?c[0]:(V=s-1,k=C*V,v=Number.parseInt(k),H=(0,f.modulo)(k,1),M=c[v],w=c[v+1],M.lerp_to(w,H))}}function u(c,s){let b,C,M,w,k,v;return M=c.luminance(),C=s.luminance(),v=.6,w=Math.abs(M-C),w>.6?c:(b=.7,k=(0,f.lerp)(0,.6,.7,0,w),C>M?c.darken(k).burn(.6*k):c.lighten(k).burn(.6*k))}function _(c,s){let b,C,M,w,k,v,H,V,G,O,E;return M=c.next_frac(),k=c.next(),w=c.next(),v=.3*c.next_frac()+.05,G=.3*c.next_frac()+.05,H=s(M),b=null,k?(b=1,H=H.darken(.5)):b=0,O=(0,r.grayscale)(b),V=H.lerp_to(O,v),E=O.lerp_to(H,G),C=o(V,E),w?(0,e.reverse)(C):C}function m(c,s){let b,C,M,w,k,v,H,V,G,O,E,T,A,B;return A=c.next_frac(),B=(0,f.modulo)(A+.5,1),G=.3*c.next_frac(),k=.3*c.next_frac(),V=c.next(),M=s(A),w=s(B),E=M.luminance(),T=w.luminance(),v=null,O=null,E>T?(v=w,O=M):(v=M,O=w),C=O.lighten(G),b=v.darken(k),H=o(b,C),V?(0,e.reverse)(H):H}function L(c,s){let b,C,M,w,k,v,H,V,G,O,E,T,A,B,D,S;return B=c.next_frac(),D=(0,f.modulo)(B+1/3,1),S=(0,f.modulo)(B+2/3,1),E=.3*c.next_frac(),H=.3*c.next_frac(),O=c.next(),M=s(B),w=s(D),k=s(S),v=[M,w,k],v=v.sort(function z(U,R){return U.luminance()-R.luminance()}),V=v[0],A=v[1],T=v[2],C=T.lighten(E),b=V.darken(H),G=d([C,A,b]),O?(0,e.reverse)(G):G}function P(c,s){let b,C,M,w,k,v,H,V,G,O,E,T,A,B,D,S,z,U,R;return S=c.next_frac(),z=(0,f.modulo)(S+1/12,1),U=(0,f.modulo)(S+2/12,1),R=(0,f.modulo)(S+.25,1),k=.5*c.next_frac()+.2,A=c.next(),v=s(S),H=s(z),V=s(U),G=s(R),[E,O,B,D]=[null,null,null,null],v.luminance()<G.luminance()?(E=v,O=H,B=V,D=G):(E=G,O=V,B=H,D=v),C=E.darken(k),b=O.darken(k/2),M=B.lighten(k/2),w=D.lighten(k),T=d([C,b,M,w]),A?(0,e.reverse)(T):T}t.blend=o,t.blend_many=d,t.select_gradient=function F(c,s){let b;if(s===h.LifeHashVersion.grayscale_fiducial)return function n(c){return c.next()?r.grayscale:(0,e.reverse)(r.grayscale)}(c);if(b=c.next_uint2(),0===b){if(s===h.LifeHashVersion.version1)return _(c,a);if(s===h.LifeHashVersion.version2||s===h.LifeHashVersion.detailed)return _(c,r.spectrum_cmyk_safe);if(s===h.LifeHashVersion.fiducial)return function p(c){let s,b,C,M,w,k;return C=c.next_frac(),M=c.next(),w=c.next(),s=w?r.Colors.white:r.Colors.black,k=u((0,r.spectrum_cmyk_safe)(C),s),b=d([k,s,k]),M?(0,e.reverse)(b):b}(c);if(s===h.LifeHashVersion.grayscale_fiducial)return r.grayscale}else if(1===b){if(s===h.LifeHashVersion.version1)return m(c,r.spectrum);if(s===h.LifeHashVersion.version2||s===h.LifeHashVersion.detailed)return m(c,r.spectrum_cmyk_safe);if(s===h.LifeHashVersion.fiducial)return function g(c){let s,b,C,M,w,k,v,H,V,G;return V=c.next_frac(),G=(0,f.modulo)(V+.5,1),k=c.next(),w=c.next(),H=c.next(),v=k?r.Colors.white:r.Colors.black,b=(0,r.spectrum_cmyk_safe)(V),C=(0,r.spectrum_cmyk_safe)(G),s=v.lerp_to(H?b:C,.2).burn(.1),M=d([u(b,s),s,u(C,s)]),w?(0,e.reverse)(M):M}(c);if(s===h.LifeHashVersion.grayscale_fiducial)return r.grayscale}else if(2===b){if(s===h.LifeHashVersion.version1)return L(c,r.spectrum);if(s===h.LifeHashVersion.version2||s===h.LifeHashVersion.detailed)return L(c,r.spectrum_cmyk_safe);if(s===h.LifeHashVersion.fiducial)return function y(c){let s,b,C,M,w,k,v,H,V;if(v=c.next_frac(),H=(0,f.modulo)(v+1/3,1),V=(0,f.modulo)(v+2/3,1),M=c.next(),k=c.next_uint8()%2+1,C=c.next(),w=M?r.Colors.white:r.Colors.black,s=[(0,r.spectrum_cmyk_safe)(v),(0,r.spectrum_cmyk_safe)(H),(0,r.spectrum_cmyk_safe)(V)],1===k)s[0]=u(s[0],w),s[1]=u(s[1],w),s[2]=u(s[2],s[1]);else{if(2!==k)throw new Error("Internal error.");s[1]=u(s[1],w),s[2]=u(s[2],w),s[0]=u(s[0],s[1])}return s[k]=w,b=d(s),C?(0,e.reverse)(b):b}(c);if(s===h.LifeHashVersion.grayscale_fiducial)return r.grayscale}else if(3===b){if(s===h.LifeHashVersion.version1)return P(c,r.spectrum);if(s===h.LifeHashVersion.version2||s===h.LifeHashVersion.detailed)return P(c,r.spectrum_cmyk_safe);if(s===h.LifeHashVersion.fiducial)return function j(c){let s,b,C,M,w,k,v,H,V;if(v=c.next_frac(),H=(0,f.modulo)(v+.1,1),V=(0,f.modulo)(v+.2,1),M=c.next(),k=c.next_uint8()%2+1,C=c.next(),w=M?r.Colors.white:r.Colors.black,s=[(0,r.spectrum_cmyk_safe)(v),(0,r.spectrum_cmyk_safe)(H),(0,r.spectrum_cmyk_safe)(V)],1===k)s[0]=u(s[0],w),s[1]=u(s[1],w),s[2]=u(s[2],s[1]);else{if(2!==k)throw new Error("Internal error");s[1]=u(s[1],w),s[2]=u(s[2],w),s[0]=u(s[0],s[1])}return s[k]=w,b=d(s),C?(0,e.reverse)(b):b}(c);if(s===h.LifeHashVersion.grayscale_fiducial)return r.grayscale}return r.grayscale}},8726:(x,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.spectrum_cmyk_safe=t.spectrum_cmyk_safe_colors=t.spectrum=t.grayscale=t.Colors=void 0;const r=i(99191),l=i(35885);t.Colors={black:new r.Color(0,0,0),blue:new r.Color(0,0,1),cyan:new r.Color(0,1,1),green:new r.Color(0,1,0),magenta:new r.Color(1,0,1),red:new r.Color(1,0,0),white:new r.Color(1,1,1),yellow:new r.Color(1,1,0)},t.grayscale=(0,l.blend)(t.Colors.black,t.Colors.white),t.spectrum=(0,l.blend_many)([[0,168,222],[51,51,145],[233,19,136],[235,45,46],[253,233,43],[0,158,84],[0,168,222]].map(h=>r.Color.from_uint8_values(...h))),t.spectrum_cmyk_safe_colors=[[0,168,222],[41,60,130],[210,59,130],[217,63,53],[244,228,81],[0,158,84],[0,168,222]],t.spectrum_cmyk_safe=(0,l.blend_many)(t.spectrum_cmyk_safe_colors.map(h=>r.Color.from_uint8_values(...h)))},65010:(x,t)=>{function i(e,n,a){return a*(n-e)+e}function r(e,n,a){return(e-a)/(e-n)}Object.defineProperty(t,"__esModule",{value:!0}),t.modulo=t.clamped=t.lerp=t.lerp_from=t.lerp_to=void 0,t.lerp_to=i,t.lerp_from=r,t.lerp=function l(e,n,a,o,d){return i(a,o,r(e,n,d))},t.clamped=function f(e){return Math.max(Math.min(e,1),0)},t.modulo=function h(e,n){return(e%n+n)%n}},58736:(x,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LifeHashVersion=void 0,(r=t.LifeHashVersion||(t.LifeHashVersion={}))[r.version1=1]="version1",r[r.version2=2]="version2",r[r.detailed=3]="detailed",r[r.fiducial=4]="fiducial",r[r.grayscale_fiducial=5]="grayscale_fiducial"},96899:(x,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.sha256=t.reverse=void 0;const r=i(19630);t.reverse=function l(h){return function e(n){return h(1-n)}},t.sha256=h=>(0,r.createHash)("sha256").update(h).digest()}}]);