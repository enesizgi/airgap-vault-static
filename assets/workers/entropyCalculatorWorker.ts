// self.importScripts('sha3.min.js') replaced to work in blob
const entropyCalculatorWorkerJS = `!function(){"use strict";function t(t,e,r){this.blocks=[],this.s=[],this.padding=e,this.outputBits=r,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(t<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=r>>5,this.extraBytes=(31&r)>>3;for(var n=0;n<50;++n)this.s[n]=0}function e(e,r,n){t.call(this,e,r,n)}var r="input is invalid type",n="object"==typeof window,i=n?window:{};i.JS_SHA3_NO_WINDOW&&(n=!1);var o=!n&&"object"==typeof self;!i.JS_SHA3_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node?i=global:o&&(i=self);var s=!i.JS_SHA3_NO_COMMON_JS&&"object"==typeof module&&module.exports,a="function"==typeof define&&define.amd,u=!i.JS_SHA3_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,f="0123456789abcdef".split(""),c=[4,1024,262144,67108864],h=[0,8,16,24],p=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],d=[224,256,384,512],l=[128,256],y=["hex","buffer","arrayBuffer","array","digest"],b={128:168,256:136};!i.JS_SHA3_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!u||!i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});for(var A=function(e,r,n){return function(i){return new t(e,r,e).update(i)[n]()}},v=function(e,r,n){return function(i,o){return new t(e,r,o).update(i)[n]()}},B=function(t,e,r){return function(e,n,i,o){return S["cshake"+t].update(e,n,i,o)[r]()}},g=function(t,e,r){return function(e,n,i,o){return S["kmac"+t].update(e,n,i,o)[r]()}},w=function(t,e,r,n){for(var i=0;i<y.length;++i){var o=y[i];t[o]=e(r,n,o)}return t},_=function(e,r){var n=A(e,r,"hex");return n.create=function(){return new t(e,r,e)},n.update=function(t){return n.create().update(t)},w(n,A,e,r)},k=[{name:"keccak",padding:[1,256,65536,16777216],bits:d,createMethod:_},{name:"sha3",padding:[6,1536,393216,100663296],bits:d,createMethod:_},{name:"shake",padding:[31,7936,2031616,520093696],bits:l,createMethod:function(e,r){var n=v(e,r,"hex");return n.create=function(n){return new t(e,r,n)},n.update=function(t,e){return n.create(e).update(t)},w(n,v,e,r)}},{name:"cshake",padding:c,bits:l,createMethod:function(e,r){var n=b[e],i=B(e,0,"hex");return i.create=function(i,o,s){return o||s?new t(e,r,i).bytepad([o,s],n):S["shake"+e].create(i)},i.update=function(t,e,r,n){return i.create(e,r,n).update(t)},w(i,B,e,r)}},{name:"kmac",padding:c,bits:l,createMethod:function(t,r){var n=b[t],i=g(t,0,"hex");return i.create=function(i,o,s){return new e(t,r,o).bytepad(["KMAC",s],n).bytepad([i],n)},i.update=function(t,e,r,n){return i.create(t,r,n).update(e)},w(i,g,t,r)}}],S={},C=[],x=0;x<k.length;++x)for(var m=k[x],O=m.bits,z=0;z<O.length;++z){var N=m.name+"_"+O[z];if(C.push(N),S[N]=m.createMethod(O[z],m.padding),"sha3"!==m.name){var j=m.name+O[z];C.push(j),S[j]=S[N]}}t.prototype.update=function(t){if(!this.finalized){var e,n=typeof t;if("string"!==n){if("object"!==n)throw r;if(null===t)throw r;if(u&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||u&&ArrayBuffer.isView(t)))throw r;e=!0}for(var i,o,s=this.blocks,a=this.byteCount,f=t.length,c=this.blockCount,p=0,d=this.s;p<f;){if(this.reset)for(this.reset=!1,s[0]=this.block,i=1;i<c+1;++i)s[i]=0;if(e)for(i=this.start;p<f&&i<a;++p)s[i>>2]|=t[p]<<h[3&i++];else for(i=this.start;p<f&&i<a;++p)(o=t.charCodeAt(p))<128?s[i>>2]|=o<<h[3&i++]:o<2048?(s[i>>2]|=(192|o>>6)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]):o<55296||o>=57344?(s[i>>2]|=(224|o>>12)<<h[3&i++],s[i>>2]|=(128|o>>6&63)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++p)),s[i>>2]|=(240|o>>18)<<h[3&i++],s[i>>2]|=(128|o>>12&63)<<h[3&i++],s[i>>2]|=(128|o>>6&63)<<h[3&i++],s[i>>2]|=(128|63&o)<<h[3&i++]);if(this.lastByteIndex=i,i>=a){for(this.start=i-a,this.block=s[c],i=0;i<c;++i)d[i]^=s[i];J(d),this.reset=!0}else this.start=i}return this}},t.prototype.encode=function(t,e){var r=255&t,n=1,i=[r];for(r=255&(t>>=8);r>0;)i.unshift(r),r=255&(t>>=8),++n;return e?i.push(n):i.unshift(n),this.update(i),i.length},t.prototype.encodeString=function(t){var e,n=typeof t;if("string"!==n){if("object"!==n)throw r;if(null===t)throw r;if(u&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||u&&ArrayBuffer.isView(t)))throw r;e=!0}var i=0,o=t.length;if(e)i=o;else for(var s=0;s<t.length;++s){var a=t.charCodeAt(s);a<128?i+=1:a<2048?i+=2:a<55296||a>=57344?i+=3:(a=65536+((1023&a)<<10|1023&t.charCodeAt(++s)),i+=4)}return i+=this.encode(8*i),this.update(t),i},t.prototype.bytepad=function(t,e){for(var r=this.encode(e),n=0;n<t.length;++n)r+=this.encodeString(t[n]);var i=e-r%e,o=[];return o.length=i,this.update(o),this},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex,r=this.blockCount,n=this.s;if(t[e>>2]|=this.padding[3&e],this.lastByteIndex===this.byteCount)for(t[0]=t[r],e=1;e<r+1;++e)t[e]=0;for(t[r-1]|=2147483648,e=0;e<r;++e)n[e]^=t[e];J(n)}},t.prototype.toString=t.prototype.hex=function(){this.finalize();for(var t,e=this.blockCount,r=this.s,n=this.outputBlocks,i=this.extraBytes,o=0,s=0,a="";s<n;){for(o=0;o<e&&s<n;++o,++s)t=r[o],a+=f[t>>4&15]+f[15&t]+f[t>>12&15]+f[t>>8&15]+f[t>>20&15]+f[t>>16&15]+f[t>>28&15]+f[t>>24&15];s%e==0&&(J(r),o=0)}return i&&(t=r[o],a+=f[t>>4&15]+f[15&t],i>1&&(a+=f[t>>12&15]+f[t>>8&15]),i>2&&(a+=f[t>>20&15]+f[t>>16&15])),a},t.prototype.arrayBuffer=function(){this.finalize();var t,e=this.blockCount,r=this.s,n=this.outputBlocks,i=this.extraBytes,o=0,s=0,a=this.outputBits>>3;t=i?new ArrayBuffer(n+1<<2):new ArrayBuffer(a);for(var u=new Uint32Array(t);s<n;){for(o=0;o<e&&s<n;++o,++s)u[s]=r[o];s%e==0&&J(r)}return i&&(u[o]=r[o],t=t.slice(0,a)),t},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.digest=t.prototype.array=function(){this.finalize();for(var t,e,r=this.blockCount,n=this.s,i=this.outputBlocks,o=this.extraBytes,s=0,a=0,u=[];a<i;){for(s=0;s<r&&a<i;++s,++a)t=a<<2,e=n[s],u[t]=255&e,u[t+1]=e>>8&255,u[t+2]=e>>16&255,u[t+3]=e>>24&255;a%r==0&&J(n)}return o&&(t=a<<2,e=n[s],u[t]=255&e,o>1&&(u[t+1]=e>>8&255),o>2&&(u[t+2]=e>>16&255)),u},(e.prototype=new t).finalize=function(){return this.encode(this.outputBits,!0),t.prototype.finalize.call(this)};var J=function(t){var e,r,n,i,o,s,a,u,f,c,h,d,l,y,b,A,v,B,g,w,_,k,S,C,x,m,O,z,N,j,J,M,H,I,R,E,U,V,F,D,W,Y,K,q,G,L,P,Q,T,X,Z,$,tt,et,rt,nt,it,ot,st,at,ut,ft,ct;for(n=0;n<48;n+=2)i=t[0]^t[10]^t[20]^t[30]^t[40],o=t[1]^t[11]^t[21]^t[31]^t[41],s=t[2]^t[12]^t[22]^t[32]^t[42],a=t[3]^t[13]^t[23]^t[33]^t[43],u=t[4]^t[14]^t[24]^t[34]^t[44],f=t[5]^t[15]^t[25]^t[35]^t[45],c=t[6]^t[16]^t[26]^t[36]^t[46],h=t[7]^t[17]^t[27]^t[37]^t[47],e=(d=t[8]^t[18]^t[28]^t[38]^t[48])^(s<<1|a>>>31),r=(l=t[9]^t[19]^t[29]^t[39]^t[49])^(a<<1|s>>>31),t[0]^=e,t[1]^=r,t[10]^=e,t[11]^=r,t[20]^=e,t[21]^=r,t[30]^=e,t[31]^=r,t[40]^=e,t[41]^=r,e=i^(u<<1|f>>>31),r=o^(f<<1|u>>>31),t[2]^=e,t[3]^=r,t[12]^=e,t[13]^=r,t[22]^=e,t[23]^=r,t[32]^=e,t[33]^=r,t[42]^=e,t[43]^=r,e=s^(c<<1|h>>>31),r=a^(h<<1|c>>>31),t[4]^=e,t[5]^=r,t[14]^=e,t[15]^=r,t[24]^=e,t[25]^=r,t[34]^=e,t[35]^=r,t[44]^=e,t[45]^=r,e=u^(d<<1|l>>>31),r=f^(l<<1|d>>>31),t[6]^=e,t[7]^=r,t[16]^=e,t[17]^=r,t[26]^=e,t[27]^=r,t[36]^=e,t[37]^=r,t[46]^=e,t[47]^=r,e=c^(i<<1|o>>>31),r=h^(o<<1|i>>>31),t[8]^=e,t[9]^=r,t[18]^=e,t[19]^=r,t[28]^=e,t[29]^=r,t[38]^=e,t[39]^=r,t[48]^=e,t[49]^=r,y=t[0],b=t[1],L=t[11]<<4|t[10]>>>28,P=t[10]<<4|t[11]>>>28,z=t[20]<<3|t[21]>>>29,N=t[21]<<3|t[20]>>>29,at=t[31]<<9|t[30]>>>23,ut=t[30]<<9|t[31]>>>23,Y=t[40]<<18|t[41]>>>14,K=t[41]<<18|t[40]>>>14,I=t[2]<<1|t[3]>>>31,R=t[3]<<1|t[2]>>>31,A=t[13]<<12|t[12]>>>20,v=t[12]<<12|t[13]>>>20,Q=t[22]<<10|t[23]>>>22,T=t[23]<<10|t[22]>>>22,j=t[33]<<13|t[32]>>>19,J=t[32]<<13|t[33]>>>19,ft=t[42]<<2|t[43]>>>30,ct=t[43]<<2|t[42]>>>30,et=t[5]<<30|t[4]>>>2,rt=t[4]<<30|t[5]>>>2,E=t[14]<<6|t[15]>>>26,U=t[15]<<6|t[14]>>>26,B=t[25]<<11|t[24]>>>21,g=t[24]<<11|t[25]>>>21,X=t[34]<<15|t[35]>>>17,Z=t[35]<<15|t[34]>>>17,M=t[45]<<29|t[44]>>>3,H=t[44]<<29|t[45]>>>3,C=t[6]<<28|t[7]>>>4,x=t[7]<<28|t[6]>>>4,nt=t[17]<<23|t[16]>>>9,it=t[16]<<23|t[17]>>>9,V=t[26]<<25|t[27]>>>7,F=t[27]<<25|t[26]>>>7,w=t[36]<<21|t[37]>>>11,_=t[37]<<21|t[36]>>>11,$=t[47]<<24|t[46]>>>8,tt=t[46]<<24|t[47]>>>8,q=t[8]<<27|t[9]>>>5,G=t[9]<<27|t[8]>>>5,m=t[18]<<20|t[19]>>>12,O=t[19]<<20|t[18]>>>12,ot=t[29]<<7|t[28]>>>25,st=t[28]<<7|t[29]>>>25,D=t[38]<<8|t[39]>>>24,W=t[39]<<8|t[38]>>>24,k=t[48]<<14|t[49]>>>18,S=t[49]<<14|t[48]>>>18,t[0]=y^~A&B,t[1]=b^~v&g,t[10]=C^~m&z,t[11]=x^~O&N,t[20]=I^~E&V,t[21]=R^~U&F,t[30]=q^~L&Q,t[31]=G^~P&T,t[40]=et^~nt&ot,t[41]=rt^~it&st,t[2]=A^~B&w,t[3]=v^~g&_,t[12]=m^~z&j,t[13]=O^~N&J,t[22]=E^~V&D,t[23]=U^~F&W,t[32]=L^~Q&X,t[33]=P^~T&Z,t[42]=nt^~ot&at,t[43]=it^~st&ut,t[4]=B^~w&k,t[5]=g^~_&S,t[14]=z^~j&M,t[15]=N^~J&H,t[24]=V^~D&Y,t[25]=F^~W&K,t[34]=Q^~X&$,t[35]=T^~Z&tt,t[44]=ot^~at&ft,t[45]=st^~ut&ct,t[6]=w^~k&y,t[7]=_^~S&b,t[16]=j^~M&C,t[17]=J^~H&x,t[26]=D^~Y&I,t[27]=W^~K&R,t[36]=X^~$&q,t[37]=Z^~tt&G,t[46]=at^~ft&et,t[47]=ut^~ct&rt,t[8]=k^~y&A,t[9]=S^~b&v,t[18]=M^~C&m,t[19]=H^~x&O,t[28]=Y^~I&E,t[29]=K^~R&U,t[38]=$^~q&L,t[39]=tt^~G&P,t[48]=ft^~et&nt,t[49]=ct^~rt&it,t[0]^=p[n],t[1]^=p[n+1]};if(s)module.exports=S;else{for(x=0;x<C.length;++x)i[C[x]]=S[C[x]];a&&define(function(){return S})}}();

let previousEntropyArray = []

self.onmessage = function (event) {
  const entropyArray = new Uint8Array(event.data.entropyBuffer)
  self.calcEntropy(previousEntropyArray, entropyArray)
  previousEntropyArray = entropyArray
}

self.calcEntropy = function (byteArrayA, byteArrayB) {
  let sum = 0
  if (byteArrayB.length >0 && byteArrayA.length > 0) {

    for (let i = 0; i < Math.min(byteArrayA.length, byteArrayB.length); i++) {
      sum += Math.abs(byteArrayA[i] - byteArrayB[i])
    }

    const entropyMeasure = sum / byteArrayA.length
    const hash = sha3_256.create()
    hash.update(byteArrayB)
    self.postMessage({entropyMeasure: entropyMeasure, entropyHex: hash.hex()})
  }
}`

export default entropyCalculatorWorkerJS
