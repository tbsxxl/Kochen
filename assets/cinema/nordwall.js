var Ep=0,Wu=1,Ap=2;var Xu=1,Cp=2,Ii=3,$i=0,En=1,Di=2,er=0,Yr=1,Ar=2,qu=3,Yu=4,Rp=5,yr=100,Pp=101,Ip=102,Dp=103,Lp=104,Up=200,Fp=201,Np=202,Op=203,Nl=204,Ol=205,Bp=206,zp=207,kp=208,Vp=209,Hp=210,Gp=211,Wp=212,Xp=213,qp=214,_c=0,xc=1,vc=2,Zr=3,yc=4,Mc=5,Sc=6,bc=7,Tc=0,Yp=1,Zp=2,tr=0,Jp=1,$p=2,Kp=3,Qp=4,jp=5,em=6,tm=7;var Zu=300,Qr=301,jr=302,wc=303,Ec=304,Sa=306,Bl=1e3,vr=1001,zl=1002,ai=1003,nm=1004;var ba=1005;var yi=1006,Ac=1007;var Cr=1008;var Ti=1009,Ju=1010,$u=1011,no=1012,Cc=1013,Rr=1014,Li=1015,io=1016,Rc=1017,Pc=1018,ro=1020,Ku=35902,Qu=35899,ju=1021,ef=1022,li=1023,Ws=1026,so=1027,tf=1028,Ic=1029,nf=1030,Dc=1031;var Lc=1033,Ta=33776,wa=33777,Ea=33778,Aa=33779,Uc=35840,Fc=35841,Nc=35842,Oc=35843,Bc=36196,zc=37492,kc=37496,Vc=37808,Hc=37809,Gc=37810,Wc=37811,Xc=37812,qc=37813,Yc=37814,Zc=37815,Jc=37816,$c=37817,Kc=37818,Qc=37819,jc=37820,eh=37821,th=36492,nh=36494,ih=36495,rh=36283,sh=36284,oh=36285,ah=36286;var Wo=2300,kl=2301,Fl=2302,Lu=2400,Uu=2401,Fu=2402;var im=3200,rm=3201;var rf=0,sm=1,nr="",fn="srgb",Jr="srgb-linear",Xo="linear",_t="srgb";var qr=7680;var Nu=519,om=512,am=513,lm=514,sf=515,cm=516,hm=517,um=518,fm=519,Vl=35044;var of="300 es",vi=2e3,qo=2001;var Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var iu=Math.PI/180,Hl=180/Math.PI;function Zi(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function J_(r,e){return(r%e+e)%e}function ru(r,e,t){return(1-t)*r+t*e}function Ci(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var be=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*_,T=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let w=Math.sqrt(S),A=Math.atan2(w,p*T);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}let x=a*T;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return su.copy(this).projectOnVector(e),this.sub(su)}reflect(e){return this.sub(su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},su=new N,Jd=new Qi,Ke=class r{constructor(e,t,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],T=i[1],S=i[4],x=i[7],w=i[2],A=i[5],E=i[8];return s[0]=o*_+a*T+l*w,s[3]=o*m+a*S+l*A,s[6]=o*p+a*x+l*E,s[1]=c*_+h*T+u*w,s[4]=c*m+h*S+u*A,s[7]=c*p+h*x+u*E,s[2]=d*_+f*T+g*w,s[5]=d*m+f*S+g*A,s[8]=d*p+f*x+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ou.makeScale(e,t)),this}rotate(e){return this.premultiply(ou.makeRotation(-e)),this}translate(e,t){return this.premultiply(ou.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ou=new Ke;function af(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Yo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dm(){let r=Yo("canvas");return r.style.display="block",r}var $d={};function Xs(r){r in $d||($d[r]=!0,console.warn(r))}function pm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Kd=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qd=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $_(){let r={enabled:!0,workingColorSpace:Jr,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===_t&&(i.r=Ji(i.r),i.g=Ji(i.g),i.b=Ji(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(i.r=Hs(i.r),i.g=Hs(i.g),i.b=Hs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===nr?Xo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Xs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Xs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Jr]:{primaries:e,whitePoint:n,transfer:Xo,toXYZ:Kd,fromXYZ:Qd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Kd,fromXYZ:Qd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),r}var ht=$_();function Ji(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Es,Gl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Es===void 0&&(Es=Yo("canvas")),Es.width=e.width,Es.height=e.height;let i=Es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Es}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Yo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ji(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},K_=0,qs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(au(i[o].image)):s.push(au(i[o]))}else s=au(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function au(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Gl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Q_=0,lu=new N,Nn=class r extends Ki{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=vr,i=vr,s=yi,o=Cr,a=li,l=Ti,c=r.DEFAULT_ANISOTROPY,h=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Zi(),this.name="",this.source=new qs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lu).x}get height(){return this.source.getSize(lu).y}get depth(){return this.source.getSize(lu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bl:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bl:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Zu;Nn.DEFAULT_ANISOTROPY=1;var gt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,x=(f+1)/2,w=(p+1)/2,A=(h+d)/4,E=(u+_)/4,I=(g+m)/4;return S>x&&S>w?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=A/n,s=E/n):x>w?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=I/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=E/s,i=I/s),this.set(n,i,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-_)/T,this.z=(d-h)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wl=class extends Ki{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let i={width:e,height:t,depth:n.depth},s=new Nn(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:yi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new qs(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ri=class extends Wl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Zo=class extends Nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ai,this.minFilter=ai,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xl=class extends Nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ai,this.minFilter=ai,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mr=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gi):gi.fromBufferAttribute(s,o),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),al.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),al.copy(n.boundingBox)),al.applyMatrix4(e.matrixWorld),this.union(al)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),ll.subVectors(this.max,Do),As.subVectors(e.a,Do),Cs.subVectors(e.b,Do),Rs.subVectors(e.c,Do),dr.subVectors(Cs,As),pr.subVectors(Rs,Cs),Hr.subVectors(As,Rs);let t=[0,-dr.z,dr.y,0,-pr.z,pr.y,0,-Hr.z,Hr.y,dr.z,0,-dr.x,pr.z,0,-pr.x,Hr.z,0,-Hr.x,-dr.y,dr.x,0,-pr.y,pr.x,0,-Hr.y,Hr.x,0];return!cu(t,As,Cs,Rs,ll)||(t=[1,0,0,0,1,0,0,0,1],!cu(t,As,Cs,Rs,ll))?!1:(cl.crossVectors(dr,pr),t=[cl.x,cl.y,cl.z],cu(t,As,Cs,Rs,ll))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Vi=[new N,new N,new N,new N,new N,new N,new N,new N],gi=new N,al=new Mr,As=new N,Cs=new N,Rs=new N,dr=new N,pr=new N,Hr=new N,Do=new N,ll=new N,cl=new N,Gr=new N;function cu(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Gr.fromArray(r,s);let a=i.x*Math.abs(Gr.x)+i.y*Math.abs(Gr.y)+i.z*Math.abs(Gr.z),l=e.dot(Gr),c=t.dot(Gr),h=n.dot(Gr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var j_=new Mr,Lo=new N,hu=new N,Sr=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):j_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);let t=Lo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Lo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(hu)),this.expandByPoint(Lo.copy(e.center).sub(hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Hi=new N,uu=new N,hl=new N,mr=new N,fu=new N,ul=new N,du=new N,Ys=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){uu.copy(e).add(t).multiplyScalar(.5),hl.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(uu);let s=e.distanceTo(t)*.5,o=-this.direction.dot(hl),a=mr.dot(this.direction),l=-mr.dot(hl),c=mr.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(uu).addScaledVector(hl,d),f}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);let n=Hi.dot(this.direction),i=Hi.dot(Hi)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,i,s){fu.subVectors(t,e),ul.subVectors(n,e),du.crossVectors(fu,ul);let o=this.direction.dot(du),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mr.subVectors(this.origin,e);let l=a*this.direction.dot(ul.crossVectors(mr,ul));if(l<0)return null;let c=a*this.direction.dot(fu.cross(mr));if(c<0||l+c>o)return null;let h=-a*mr.dot(du);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class r{constructor(e,t,n,i,s,o,a,l,c,h,u,d,f,g,_,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,d,f,g,_,m)}set(e,t,n,i,s,o,a,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Ps.setFromMatrixColumn(e,0).length(),s=1/Ps.setFromMatrixColumn(e,1).length(),o=1/Ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e0,e,t0)}lookAt(e,t,n){let i=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),gr.crossVectors(n,Xn),gr.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),gr.crossVectors(n,Xn)),gr.normalize(),fl.crossVectors(Xn,gr),i[0]=gr.x,i[4]=fl.x,i[8]=Xn.x,i[1]=gr.y,i[5]=fl.y,i[9]=Xn.y,i[2]=gr.z,i[6]=fl.z,i[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],S=n[7],x=n[11],w=n[15],A=i[0],E=i[4],I=i[8],v=i[12],y=i[1],L=i[5],U=i[9],V=i[13],G=i[2],W=i[6],H=i[10],Y=i[14],k=i[3],te=i[7],P=i[11],le=i[15];return s[0]=o*A+a*y+l*G+c*k,s[4]=o*E+a*L+l*W+c*te,s[8]=o*I+a*U+l*H+c*P,s[12]=o*v+a*V+l*Y+c*le,s[1]=h*A+u*y+d*G+f*k,s[5]=h*E+u*L+d*W+f*te,s[9]=h*I+u*U+d*H+f*P,s[13]=h*v+u*V+d*Y+f*le,s[2]=g*A+_*y+m*G+p*k,s[6]=g*E+_*L+m*W+p*te,s[10]=g*I+_*U+m*H+p*P,s[14]=g*v+_*V+m*Y+p*le,s[3]=T*A+S*y+x*G+w*k,s[7]=T*E+S*L+x*W+w*te,s[11]=T*I+S*U+x*H+w*P,s[15]=T*v+S*V+x*Y+w*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+m*(+t*c*u-t*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,S=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,w=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,A=t*T+n*S+i*x+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/A;return e[0]=T*E,e[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*p-n*d*p)*E,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*E,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*E,e[4]=S*E,e[5]=(h*m*s-g*d*s+g*i*f-t*m*f-h*i*p+t*d*p)*E,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*E,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*f+t*l*f)*E,e[8]=x*E,e[9]=(g*u*s-h*_*s-g*n*f+t*_*f+h*n*p-t*u*p)*E,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*E,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*f-t*a*f)*E,e[12]=w*E,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*E,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*E,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*E,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,_=o*h,m=o*u,p=a*u,T=l*c,S=l*h,x=l*u,w=n.x,A=n.y,E=n.z;return i[0]=(1-(_+p))*w,i[1]=(f+x)*w,i[2]=(g-S)*w,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+p))*A,i[6]=(m+T)*A,i[7]=0,i[8]=(g+S)*E,i[9]=(m-T)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Ps.set(i[0],i[1],i[2]).length(),o=Ps.set(i[4],i[5],i[6]).length(),a=Ps.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],_i.copy(this);let c=1/s,h=1/o,u=1/a;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=u,_i.elements[9]*=u,_i.elements[10]*=u,t.setFromRotationMatrix(_i),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=vi,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===vi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===qo)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=vi,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===vi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===qo)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ps=new N,_i=new bt,e0=new N(0,0,0),t0=new N(1,1,1),gr=new N,fl=new N,Xn=new N,jd=new bt,ep=new Qi,Mi=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ep.setFromEuler(this),this.setFromQuaternion(ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mi.DEFAULT_ORDER="XYZ";var Jo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},n0=0,tp=new N,Is=new Qi,Gi=new bt,dl=new N,Uo=new N,i0=new N,r0=new Qi,np=new N(1,0,0),ip=new N(0,1,0),rp=new N(0,0,1),sp={type:"added"},s0={type:"removed"},Ds={type:"childadded",child:null},pu={type:"childremoved",child:null},Jt=class r extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new N,t=new Mi,n=new Qi,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ke}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(np,e)}rotateY(e){return this.rotateOnAxis(ip,e)}rotateZ(e){return this.rotateOnAxis(rp,e)}translateOnAxis(e,t){return tp.copy(e).applyQuaternion(this.quaternion),this.position.add(tp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(np,e)}translateY(e){return this.translateOnAxis(ip,e)}translateZ(e){return this.translateOnAxis(rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?dl.copy(e):dl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Uo,dl,this.up):Gi.lookAt(dl,Uo,this.up),this.quaternion.setFromRotationMatrix(Gi),i&&(Gi.extractRotation(i.matrixWorld),Is.setFromRotationMatrix(Gi),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sp),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(s0),pu.child=e,this.dispatchEvent(pu),pu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sp),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,i0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,r0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Jt.DEFAULT_UP=new N(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xi=new N,Wi=new N,mu=new N,Xi=new N,Ls=new N,Us=new N,op=new N,gu=new N,_u=new N,xu=new N,vu=new gt,yu=new gt,Mu=new gt,qi=class r{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xi.subVectors(e,t),i.cross(xi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){xi.subVectors(i,t),Wi.subVectors(n,t),mu.subVectors(e,t);let o=xi.dot(xi),a=xi.dot(Wi),l=xi.dot(mu),c=Wi.dot(Wi),h=Wi.dot(mu),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xi.x),l.addScaledVector(o,Xi.y),l.addScaledVector(a,Xi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return vu.setScalar(0),yu.setScalar(0),Mu.setScalar(0),vu.fromBufferAttribute(e,t),yu.fromBufferAttribute(e,n),Mu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(vu,s.x),o.addScaledVector(yu,s.y),o.addScaledVector(Mu,s.z),o}static isFrontFacing(e,t,n,i){return xi.subVectors(n,t),Wi.subVectors(e,t),xi.cross(Wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),xi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Ls.subVectors(i,n),Us.subVectors(s,n),gu.subVectors(e,n);let l=Ls.dot(gu),c=Us.dot(gu);if(l<=0&&c<=0)return t.copy(n);_u.subVectors(e,i);let h=Ls.dot(_u),u=Us.dot(_u);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ls,o);xu.subVectors(e,s);let f=Ls.dot(xu),g=Us.dot(xu);if(g>=0&&f<=g)return t.copy(s);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Us,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return op.subVectors(s,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(op,a);let p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Ls,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},pl={h:0,s:0,l:0};function Su(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=J_(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Su(o,s,e+1/3),this.g=Su(o,s,e),this.b=Su(o,s,e-1/3)}return ht.colorSpaceToWorking(this,i),this}setStyle(e,t=fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){let n=mm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return ht.workingToColorSpace(un.copy(this),e),Math.round(at(un.r*255,0,255))*65536+Math.round(at(un.g*255,0,255))*256+Math.round(at(un.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(un.copy(this),t);let n=un.r,i=un.g,s=un.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=fn){ht.workingToColorSpace(un.copy(this),e);let t=un.r,n=un.g,i=un.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(pl);let n=ru(_r.h,pl.h,t),i=ru(_r.s,pl.s,t),s=ru(_r.l,pl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new je;je.NAMES=mm;var o0=0,Si=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Yr,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Ol,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(n.blending=this.blending),this.side!==$i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ol&&(n.blendDst=this.blendDst),this.blendEquation!==yr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Pi=class extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Gt=new N,ml=new be,a0=0,dn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:a0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vl,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ml.fromBufferAttribute(this,t),ml.applyMatrix3(e),this.setXY(t,ml.x,ml.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vl&&(e.usage=this.usage),e}};var $o=class extends dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ko=class extends dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var sn=class extends dn{constructor(e,t,n){super(new Float32Array(e),t,n)}},l0=0,oi=new bt,bu=new Jt,Fs=new N,qn=new Mr,Fo=new Mr,en=new N,Tn=class r extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(af(e)?Ko:$o)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,n){return oi.makeTranslation(e,t,n),this.applyMatrix4(oi),this}scale(e,t,n){return oi.makeScale(e,t,n),this.applyMatrix4(oi),this}lookAt(e){return bu.lookAt(e),bu.updateMatrix(),this.applyMatrix4(bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new sn(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];qn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(qn.min,Fo.min),qn.expandByPoint(en),en.addVectors(qn.max,Fo.max),qn.expandByPoint(en)):(qn.expandByPoint(Fo.min),qn.expandByPoint(Fo.max))}qn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)en.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(en));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(Fs.fromBufferAttribute(e,c),en.add(Fs)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new N,l[I]=new N;let c=new N,h=new N,u=new N,d=new be,f=new be,g=new be,_=new N,m=new N;function p(I,v,y){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,y),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,v),g.fromBufferAttribute(s,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[I].add(_),a[v].add(_),a[y].add(_),l[I].add(m),l[v].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,v=T.length;I<v;++I){let y=T[I],L=y.start,U=y.count;for(let V=L,G=L+U;V<G;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let S=new N,x=new N,w=new N,A=new N;function E(I){w.fromBufferAttribute(i,I),A.copy(w);let v=a[I];S.copy(v),S.sub(w.multiplyScalar(w.dot(v))).normalize(),x.crossVectors(A,v);let L=x.dot(l[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,L)}for(let I=0,v=T.length;I<v;++I){let y=T[I],L=y.start,U=y.count;for(let V=L,G=L+U;V<G;V+=3)E(e.getX(V+0)),E(e.getX(V+1)),E(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new N,s=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new dn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ap=new bt,Wr=new Ys,gl=new Sr,lp=new N,_l=new N,xl=new N,vl=new N,Tu=new N,yl=new N,cp=new N,Ml=new N,Wt=class extends Jt{constructor(e=new Tn,t=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){yl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Tu.fromBufferAttribute(u,e),o?yl.addScaledVector(Tu,h):yl.addScaledVector(Tu.sub(t),h))}t.add(yl)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gl.copy(n.boundingSphere),gl.applyMatrix4(s),Wr.copy(e.ray).recast(e.near),!(gl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(gl,lp)===null||Wr.origin.distanceToSquared(lp)>(e.far-e.near)**2))&&(ap.copy(s).invert(),Wr.copy(e.ray).applyMatrix4(ap),!(n.boundingBox!==null&&Wr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,w=S;x<w;x+=3){let A=a.getX(x),E=a.getX(x+1),I=a.getX(x+2);i=Sl(this,p,e,n,c,h,u,A,E,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let T=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);i=Sl(this,o,e,n,c,h,u,T,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,w=S;x<w;x+=3){let A=x,E=x+1,I=x+2;i=Sl(this,p,e,n,c,h,u,A,E,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let T=m,S=m+1,x=m+2;i=Sl(this,o,e,n,c,h,u,T,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function c0(r,e,t,n,i,s,o,a){let l;if(e.side===En?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===$i,a),l===null)return null;Ml.copy(a),Ml.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Ml);return c<t.near||c>t.far?null:{distance:c,point:Ml.clone(),object:r}}function Sl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,_l),r.getVertexPosition(l,xl),r.getVertexPosition(c,vl);let h=c0(r,e,t,n,_l,xl,vl,cp);if(h){let u=new N;qi.getBarycoord(cp,_l,xl,vl,u),i&&(h.uv=qi.getInterpolatedAttribute(i,a,l,c,u,new be)),s&&(h.uv1=qi.getInterpolatedAttribute(s,a,l,c,u,new be)),o&&(h.normal=qi.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new N,materialIndex:0};qi.getNormal(_l,xl,vl,d.normal),h.face=d,h.barycoord=u}return h}var br=class r extends Tn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(u,2));function g(_,m,p,T,S,x,w,A,E,I,v){let y=x/E,L=w/I,U=x/2,V=w/2,G=A/2,W=E+1,H=I+1,Y=0,k=0,te=new N;for(let P=0;P<H;P++){let le=P*L-V;for(let Ne=0;Ne<W;Ne++){let Ze=Ne*y-U;te[_]=Ze*T,te[m]=le*S,te[p]=G,c.push(te.x,te.y,te.z),te[_]=0,te[m]=0,te[p]=A>0?1:-1,h.push(te.x,te.y,te.z),u.push(Ne/E),u.push(1-P/I),Y+=1}}for(let P=0;P<I;P++)for(let le=0;le<E;le++){let Ne=d+le+W*P,Ze=d+le+W*(P+1),We=d+(le+1)+W*(P+1),Fe=d+(le+1)+W*P;l.push(Ne,Ze,Fe),l.push(Ze,We,Fe),k+=6}a.addGroup(f,k,v),f+=k,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function es(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pn(r){let e={};for(let t=0;t<r.length;t++){let n=es(r[t]);for(let i in n)e[i]=n[i]}return e}function h0(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function lf(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var gm={clone:es,merge:pn},u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=f0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=h0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Qo=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xr=new N,hp=new be,up=new be,rn=class extends Qo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(iu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hl*2*Math.atan(Math.tan(iu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,t){return this.getViewBounds(e,hp,up),t.subVectors(up,hp)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(iu*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ns=-90,Os=1,ql=class extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new rn(Ns,Os,e,t);i.layers=this.layers,this.add(i);let s=new rn(Ns,Os,e,t);s.layers=this.layers,this.add(s);let o=new rn(Ns,Os,e,t);o.layers=this.layers,this.add(o);let a=new rn(Ns,Os,e,t);a.layers=this.layers,this.add(a);let l=new rn(Ns,Os,e,t);l.layers=this.layers,this.add(l);let c=new rn(Ns,Os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},jo=class extends Nn{constructor(e=[],t=Qr,n,i,s,o,a,l,c,h){super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yl=class extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new jo(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new br(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:er});s.uniforms.tEquirect.value=t;let o=new Wt(i,s),a=t.minFilter;return t.minFilter===Cr&&(t.minFilter=yi),new ql(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},Yi=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},d0={type:"move"},Zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Yi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ea=class r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ta=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vl,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new N,na=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ci(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ci(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ci(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ci(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ji=class extends Si{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bs,No=new N,zs=new N,ks=new N,Vs=new be,Oo=new be,_m=new bt,bl=new N,Bo=new N,Tl=new N,fp=new be,wu=new be,dp=new be,Tr=class extends Jt{constructor(e=new ji){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new Tn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Zl(t,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new na(n,3,0,!1)),Bs.setAttribute("uv",new na(n,2,3,!1))}this.geometry=Bs,this.material=e,this.center=new be(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),_m.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-ks.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;wl(bl.set(-.5,-.5,0),ks,o,zs,i,s),wl(Bo.set(.5,-.5,0),ks,o,zs,i,s),wl(Tl.set(.5,.5,0),ks,o,zs,i,s),fp.set(0,0),wu.set(1,0),dp.set(1,1);let a=e.ray.intersectTriangle(bl,Bo,Tl,!1,No);if(a===null&&(wl(Bo.set(-.5,.5,0),ks,o,zs,i,s),wu.set(0,1),a=e.ray.intersectTriangle(bl,Tl,Bo,!1,No),a===null))return;let l=e.ray.origin.distanceTo(No);l<e.near||l>e.far||t.push({distance:l,point:No.clone(),uv:qi.getInterpolation(No,bl,Bo,Tl,fp,wu,dp,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function wl(r,e,t,n,i,s){Vs.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Oo.x=s*Vs.x-i*Vs.y,Oo.y=i*Vs.x+s*Vs.y):Oo.copy(Vs),r.copy(e),r.x+=Oo.x,r.y+=Oo.y,r.applyMatrix4(_m)}var Eu=new N,p0=new N,m0=new Ke,Ai=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Eu.subVectors(n,t).cross(p0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Eu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||m0.getNormalMatrix(e),i=this.coplanarPoint(Eu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xr=new Sr,g0=new be(.5,.5),El=new N,Js=class{constructor(e=new Ai,t=new Ai,n=new Ai,i=new Ai,s=new Ai,o=new Ai){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vi,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],T=s[12],S=s[13],x=s[14],w=s[15];if(i[0].setComponents(c-o,f-h,p-g,w-T).normalize(),i[1].setComponents(c+o,f+h,p+g,w+T).normalize(),i[2].setComponents(c+a,f+u,p+_,w+S).normalize(),i[3].setComponents(c-a,f-u,p-_,w-S).normalize(),n)i[4].setComponents(l,d,m,x).normalize(),i[5].setComponents(c-l,f-d,p-m,w-x).normalize();else if(i[4].setComponents(c-l,f-d,p-m,w-x).normalize(),t===vi)i[5].setComponents(c+l,f+d,p+m,w+x).normalize();else if(t===qo)i[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){Xr.center.set(0,0,0);let t=g0.distanceTo(e.center);return Xr.radius=.7071067811865476+t,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(El.x=i.normal.x>0?e.max.x:e.min.x,El.y=i.normal.y>0?e.max.y:e.min.y,El.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $s=class extends Si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Jl=new N,$l=new N,pp=new bt,zo=new Ys,Al=new Sr,Au=new N,mp=new N,ia=class extends Jt{constructor(e=new Tn,t=new $s){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Jl.fromBufferAttribute(t,i-1),$l.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Jl.distanceTo($l);e.setAttribute("lineDistance",new sn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Al.copy(n.boundingSphere),Al.applyMatrix4(i),Al.radius+=s,e.ray.intersectsSphere(Al)===!1)return;pp.copy(i).invert(),zo.copy(e.ray).applyMatrix4(pp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){let p=h.getX(_),T=h.getX(_+1),S=Cl(this,e,zo,l,p,T,_);S&&t.push(S)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),p=Cl(this,e,zo,l,_,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){let p=Cl(this,e,zo,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=Cl(this,e,zo,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Cl(r,e,t,n,i,s,o){let a=r.geometry.attributes.position;if(Jl.fromBufferAttribute(a,i),$l.fromBufferAttribute(a,s),t.distanceSqToSegment(Jl,$l,Au,mp)>n)return;Au.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Au);if(!(c<e.near||c>e.far))return{distance:c,point:mp.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var Kl=class extends Si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gp=new bt,Ou=new Ys,Rl=new Sr,Pl=new N,ra=class extends Jt{constructor(e=new Tn,t=new Kl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rl.copy(n.boundingSphere),Rl.applyMatrix4(i),Rl.radius+=s,e.ray.intersectsSphere(Rl)===!1)return;gp.copy(i).invert(),Ou.copy(e.ray).applyMatrix4(gp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let m=c.getX(g);Pl.fromBufferAttribute(u,m),_p(Pl,m,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Pl.fromBufferAttribute(u,g),_p(Pl,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function _p(r,e,t,n,i,s,o){let a=Ou.distanceSqToPoint(r);if(a<t){let l=new N;Ou.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ks=class extends Nn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},sa=class extends Nn{constructor(e,t,n=Rr,i,s,o,a=ai,l=ai,c,h=Ws,u=1){if(h!==Ws&&h!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},oa=class extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new be:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new N,i=[],s=[],o=[],a=new N,l=new bt;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(at(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(at(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Qs=class extends Yn{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new be){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ql=class extends Qs{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function cf(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return r+e*s+t*o+n*a}}}var Il=new N,Cu=new cf,Ru=new cf,Pu=new cf,jl=class extends Yn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new N){let n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Il.subVectors(i[0],i[1]).add(i[0]),c=Il);let u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Il.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Il),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Cu.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Ru.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Pu.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Cu.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ru.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Pu.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Cu.calc(l),Ru.calc(l),Pu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new N().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xp(r,e,t,n,i){let s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function _0(r,e){let t=1-r;return t*t*e}function x0(r,e){return 2*(1-r)*r*e}function v0(r,e){return r*r*e}function Ho(r,e,t,n){return _0(r,e)+x0(r,t)+v0(r,n)}function y0(r,e){let t=1-r;return t*t*t*e}function M0(r,e){let t=1-r;return 3*t*t*r*e}function S0(r,e){return 3*(1-r)*r*r*e}function b0(r,e){return r*r*r*e}function Go(r,e,t,n,i){return y0(r,e)+M0(r,t)+S0(r,n)+b0(r,i)}var aa=class extends Yn{constructor(e=new be,t=new be,n=new be,i=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new be){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Go(e,i.x,s.x,o.x,a.x),Go(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ec=class extends Yn{constructor(e=new N,t=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new N){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Go(e,i.x,s.x,o.x,a.x),Go(e,i.y,s.y,o.y,a.y),Go(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},la=class extends Yn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends Yn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ca=class extends Yn{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Ho(e,i.x,s.x,o.x),Ho(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nc=class extends Yn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Ho(e,i.x,s.x,o.x),Ho(e,i.y,s.y,o.y),Ho(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ha=class extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){let n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(xp(a,l.x,c.x,h.x,u.x),xp(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new be().fromArray(i))}return this}},vp=Object.freeze({__proto__:null,ArcCurve:Ql,CatmullRomCurve3:jl,CubicBezierCurve:aa,CubicBezierCurve3:ec,EllipseCurve:Qs,LineCurve:la,LineCurve3:tc,QuadraticBezierCurve:ca,QuadraticBezierCurve3:nc,SplineCurve:ha}),ic=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vp[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new vp[i.type]().fromJSON(i))}return this}},ua=class extends ic{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new la(this.currentPoint.clone(),new be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new ca(this.currentPoint.clone(),new be(e,t),new be(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){let a=new aa(this.currentPoint.clone(),new be(e,t),new be(n,i),new be(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ha(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){let c=new Qs(e,t,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},js=class extends ua{constructor(e){super(e),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new ua().fromJSON(i))}return this}};function T0(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=xm(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=R0(r,e,s,t)),r.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<i;d+=t){let f=r[d],g=r[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return fa(s,o,t,a,l,c,0),o}function xm(r,e,t,n,i){let s;if(i===k0(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=yp(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=yp(o/n|0,r[o],r[o+1],s);return s&&eo(s,s.next)&&(pa(s),s=s.next),s}function $r(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(eo(t,t.next)||Lt(t.prev,t,t.next)===0)){if(pa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function fa(r,e,t,n,i,s,o){if(!r)return;!o&&s&&U0(r,n,i,s);let a=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?E0(r,n,i,s):w0(r)){e.push(l.i,r.i,c.i),pa(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=A0($r(r),e),fa(r,e,t,n,i,s,2)):o===2&&C0(r,e,t,n,i,s):fa($r(r),e,t,n,i,s,1);break}}}function w0(r){let e=r.prev,t=r,n=r.next;if(Lt(e,t,n)>=0)return!1;let i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,s,o),u=Math.min(a,l,c),d=Math.max(i,s,o),f=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Vo(i,a,s,l,o,c,g.x,g.y)&&Lt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function E0(r,e,t,n){let i=r.prev,s=r,o=r.next;if(Lt(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),_=Math.max(a,l,c),m=Math.max(h,u,d),p=Bu(f,g,e,t,n),T=Bu(_,m,e,t,n),S=r.prevZ,x=r.nextZ;for(;S&&S.z>=p&&x&&x.z<=T;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==i&&S!==o&&Vo(a,h,l,u,c,d,S.x,S.y)&&Lt(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Vo(a,h,l,u,c,d,x.x,x.y)&&Lt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==i&&S!==o&&Vo(a,h,l,u,c,d,S.x,S.y)&&Lt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=T;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Vo(a,h,l,u,c,d,x.x,x.y)&&Lt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function A0(r,e){let t=r;do{let n=t.prev,i=t.next.next;!eo(n,i)&&ym(n,t,t.next,i)&&da(n,i)&&da(i,n)&&(e.push(n.i,t.i,i.i),pa(t),pa(t.next),t=r=i),t=t.next}while(t!==r);return $r(t)}function C0(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&O0(o,a)){let l=Mm(o,a);o=$r(o,o.next),l=$r(l,l.next),fa(o,e,t,n,i,s,0),fa(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function R0(r,e,t,n){let i=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=xm(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(N0(c))}i.sort(P0);for(let s=0;s<i.length;s++)t=I0(i[s],t);return t}function P0(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function I0(r,e){let t=D0(r,e);if(!t)return e;let n=Mm(t,r);return $r(n,n.next),$r(t,t.next)}function D0(r,e){let t=e,n=r.x,i=r.y,s=-1/0,o;if(eo(r,t))return t;do{if(eo(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&vm(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);da(t,r)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&L0(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function L0(r,e){return Lt(r.prev,r,e.prev)<0&&Lt(e.next,r,r.next)<0}function U0(r,e,t,n){let i=r;do i.z===0&&(i.z=Bu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,F0(i)}function F0(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function Bu(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function N0(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function vm(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function Vo(r,e,t,n,i,s,o,a){return!(r===o&&e===a)&&vm(r,e,t,n,i,s,o,a)}function O0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!B0(r,e)&&(da(r,e)&&da(e,r)&&z0(r,e)&&(Lt(r.prev,r,e.prev)||Lt(r,e.prev,e))||eo(r,e)&&Lt(r.prev,r,r.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function eo(r,e){return r.x===e.x&&r.y===e.y}function ym(r,e,t,n){let i=Ll(Lt(r,e,t)),s=Ll(Lt(r,e,n)),o=Ll(Lt(t,n,r)),a=Ll(Lt(t,n,e));return!!(i!==s&&o!==a||i===0&&Dl(r,t,e)||s===0&&Dl(r,n,e)||o===0&&Dl(t,r,n)||a===0&&Dl(t,e,n))}function Dl(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ll(r){return r>0?1:r<0?-1:0}function B0(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&ym(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function da(r,e){return Lt(r.prev,r,r.next)<0?Lt(r,e,r.next)>=0&&Lt(r,r.prev,e)>=0:Lt(r,e,r.prev)<0||Lt(r,r.next,e)<0}function z0(r,e){let t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Mm(r,e){let t=zu(r.i,r.x,r.y),n=zu(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function yp(r,e,t,n){let i=zu(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function pa(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function zu(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function k0(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var ku=class{static triangulate(e,t,n=2){return T0(e,t,n)}},Gs=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Mp(e),Sp(n,e);let o=e.length;t.forEach(Mp);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Sp(n,t[l]);let a=ku.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Mp(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Sp(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var bi=class r extends Tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let T=p*d-o;for(let S=0;S<c;S++){let x=S*u-s;g.push(x,-T,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){let S=T+c*p,x=T+c*(p+1),w=T+1+c*(p+1),A=T+1+c*p;f.push(S,x,A),f.push(x,w,A)}this.setIndex(f),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(_,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var ma=class r extends Tn{constructor(e=new js([new be(0,.5),new be(-.5,-.5),new be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new sn(i,3)),this.setAttribute("normal",new sn(s,3)),this.setAttribute("uv",new sn(o,2));function c(h){let u=i.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;Gs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let T=g[m];Gs.isClockWise(T)===!0&&(g[m]=T.reverse())}let _=Gs.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let T=g[m];f=f.concat(T)}for(let m=0,p=f.length;m<p;m++){let T=f[m];i.push(T.x,T.y,0),s.push(0,0,1),o.push(T.x,T.y)}for(let m=0,p=_.length;m<p;m++){let T=_[m],S=T[0]+u,x=T[1]+u,w=T[2]+u;n.push(S,x,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return V0(t,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let o=t[e.shapes[i]];n.push(o)}return new r(n,e.curveSegments)}};function V0(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){let i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}var ga=class extends Si{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rf,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},rc=class extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=im,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sc=class extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ul(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function H0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Kr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},oc=class extends Kr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lu,endingEnd:Lu}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uu:s=e,a=2*t-n;break;case Fu:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uu:o=e,l=2*n-t;break;case Fu:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,T=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let w=0;w!==a;++w)s[w]=p*o[h+w]+T*o[c+w]+S*o[l+w]+x*o[u+w];return s}},ac=class extends Kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},lc=class extends Kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Zn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ul(t,this.TimeBufferType),this.values=Ul(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ul(e.times,Array),values:Ul(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Wo:t=this.InterpolantFactoryMethodDiscrete;break;case kl:t=this.InterpolantFactoryMethodLinear;break;case Fl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wo;case this.InterpolantFactoryMethodLinear:return kl;case this.InterpolantFactoryMethodSmooth:return Fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&H0(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Fl,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=kl;var wr=class extends Zn{constructor(e,t,n){super(e,t,n)}};wr.prototype.ValueTypeName="bool";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=Wo;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;var cc=class extends Zn{constructor(e,t,n,i){super(e,t,n,i)}};cc.prototype.ValueTypeName="color";var hc=class extends Zn{constructor(e,t,n,i){super(e,t,n,i)}};hc.prototype.ValueTypeName="number";var uc=class extends Kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Qi.slerpFlat(s,0,o,c-a,o,c,l);return s}},_a=class extends Zn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new uc(this.times,this.values,this.getValueSize(),e)}};_a.prototype.ValueTypeName="quaternion";_a.prototype.InterpolantFactoryMethodSmooth=void 0;var Er=class extends Zn{constructor(e,t,n){super(e,t,n)}};Er.prototype.ValueTypeName="string";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=Wo;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends Zn{constructor(e,t,n,i){super(e,t,n,i)}};fc.prototype.ValueTypeName="vector";var dc=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Sm=new dc,pc=class{constructor(e){this.manager=e!==void 0?e:Sm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};pc.DEFAULT_MATERIAL_NAME="__DEFAULT";var to=class extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},xa=class extends to{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Iu=new bt,bp=new N,Tp=new N,mc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=Ti,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;bp.setFromMatrixPosition(e.matrixWorld),t.position.copy(bp),Tp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tp),t.updateMatrixWorld(),Iu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Iu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var wp=new bt,ko=new N,Du=new N,Vu=class extends mc{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ko.setFromMatrixPosition(e.matrixWorld),n.position.copy(ko),Du.copy(n.position),Du.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Du),n.updateMatrixWorld(),i.makeTranslation(-ko.x,-ko.y,-ko.z),wp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wp,n.coordinateSystem,n.reversedDepth)}},va=class extends to{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ya=class extends Qo{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hu=class extends mc{constructor(){super(new ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ma=class extends to{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new Hu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var gc=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var hf="\\[\\]\\.:\\/",G0=new RegExp("["+hf+"]","g"),uf="[^"+hf+"]",W0="[^"+hf.replace("\\.","")+"]",X0=/((?:WC+[\/:])*)/.source.replace("WC",uf),q0=/(WCOD+)?/.source.replace("WCOD",W0),Y0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uf),Z0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uf),J0=new RegExp("^"+X0+q0+Y0+Z0+"$"),$0=["material","materials","bones","map"],Gu=class{constructor(e,t,n){let i=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(G0,"")}static parseTrackName(e){let t=J0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);$0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Gu;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var IT=new Float32Array(1);function ff(r,e,t,n){let i=K0(n);switch(t){case ju:return r*e;case tf:return r*e/i.components*i.byteLength;case Ic:return r*e/i.components*i.byteLength;case nf:return r*e*2/i.components*i.byteLength;case Dc:return r*e*2/i.components*i.byteLength;case ef:return r*e*3/i.components*i.byteLength;case li:return r*e*4/i.components*i.byteLength;case Lc:return r*e*4/i.components*i.byteLength;case Ta:case wa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ea:case Aa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fc:case Oc:return Math.max(r,16)*Math.max(e,8)/4;case Uc:case Nc:return Math.max(r,8)*Math.max(e,8)/2;case Bc:case zc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case qc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case $c:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Qc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case jc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case eh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case th:case nh:case ih:return Math.ceil(r/4)*Math.ceil(e/4)*16;case rh:case sh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case oh:case ah:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function K0(r){switch(r){case Ti:case Ju:return{byteLength:1,components:1};case no:case $u:case io:return{byteLength:2,components:1};case Rc:case Pc:return{byteLength:2,components:4};case Rr:case Cc:case Li:return{byteLength:4,components:1};case Ku:case Qu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function qm(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function j0(r){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var ex=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ox=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ax=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,cx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,px=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ax=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Px="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ix=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Dx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ux=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ev=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ov=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,av=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_v=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ev=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Av=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Nv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ey=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ny=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ay=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ly=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,my=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,My=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,by=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ty=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ey=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ay=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ry=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Py=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Iy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:ex,alphahash_pars_fragment:tx,alphamap_fragment:nx,alphamap_pars_fragment:ix,alphatest_fragment:rx,alphatest_pars_fragment:sx,aomap_fragment:ox,aomap_pars_fragment:ax,batching_pars_vertex:lx,batching_vertex:cx,begin_vertex:hx,beginnormal_vertex:ux,bsdfs:fx,iridescence_fragment:dx,bumpmap_pars_fragment:px,clipping_planes_fragment:mx,clipping_planes_pars_fragment:gx,clipping_planes_pars_vertex:_x,clipping_planes_vertex:xx,color_fragment:vx,color_pars_fragment:yx,color_pars_vertex:Mx,color_vertex:Sx,common:bx,cube_uv_reflection_fragment:Tx,defaultnormal_vertex:wx,displacementmap_pars_vertex:Ex,displacementmap_vertex:Ax,emissivemap_fragment:Cx,emissivemap_pars_fragment:Rx,colorspace_fragment:Px,colorspace_pars_fragment:Ix,envmap_fragment:Dx,envmap_common_pars_fragment:Lx,envmap_pars_fragment:Ux,envmap_pars_vertex:Fx,envmap_physical_pars_fragment:qx,envmap_vertex:Nx,fog_vertex:Ox,fog_pars_vertex:Bx,fog_fragment:zx,fog_pars_fragment:kx,gradientmap_pars_fragment:Vx,lightmap_pars_fragment:Hx,lights_lambert_fragment:Gx,lights_lambert_pars_fragment:Wx,lights_pars_begin:Xx,lights_toon_fragment:Yx,lights_toon_pars_fragment:Zx,lights_phong_fragment:Jx,lights_phong_pars_fragment:$x,lights_physical_fragment:Kx,lights_physical_pars_fragment:Qx,lights_fragment_begin:jx,lights_fragment_maps:ev,lights_fragment_end:tv,logdepthbuf_fragment:nv,logdepthbuf_pars_fragment:iv,logdepthbuf_pars_vertex:rv,logdepthbuf_vertex:sv,map_fragment:ov,map_pars_fragment:av,map_particle_fragment:lv,map_particle_pars_fragment:cv,metalnessmap_fragment:hv,metalnessmap_pars_fragment:uv,morphinstance_vertex:fv,morphcolor_vertex:dv,morphnormal_vertex:pv,morphtarget_pars_vertex:mv,morphtarget_vertex:gv,normal_fragment_begin:_v,normal_fragment_maps:xv,normal_pars_fragment:vv,normal_pars_vertex:yv,normal_vertex:Mv,normalmap_pars_fragment:Sv,clearcoat_normal_fragment_begin:bv,clearcoat_normal_fragment_maps:Tv,clearcoat_pars_fragment:wv,iridescence_pars_fragment:Ev,opaque_fragment:Av,packing:Cv,premultiplied_alpha_fragment:Rv,project_vertex:Pv,dithering_fragment:Iv,dithering_pars_fragment:Dv,roughnessmap_fragment:Lv,roughnessmap_pars_fragment:Uv,shadowmap_pars_fragment:Fv,shadowmap_pars_vertex:Nv,shadowmap_vertex:Ov,shadowmask_pars_fragment:Bv,skinbase_vertex:zv,skinning_pars_vertex:kv,skinning_vertex:Vv,skinnormal_vertex:Hv,specularmap_fragment:Gv,specularmap_pars_fragment:Wv,tonemapping_fragment:Xv,tonemapping_pars_fragment:qv,transmission_fragment:Yv,transmission_pars_fragment:Zv,uv_pars_fragment:Jv,uv_pars_vertex:$v,uv_vertex:Kv,worldpos_vertex:Qv,background_vert:jv,background_frag:ey,backgroundCube_vert:ty,backgroundCube_frag:ny,cube_vert:iy,cube_frag:ry,depth_vert:sy,depth_frag:oy,distanceRGBA_vert:ay,distanceRGBA_frag:ly,equirect_vert:cy,equirect_frag:hy,linedashed_vert:uy,linedashed_frag:fy,meshbasic_vert:dy,meshbasic_frag:py,meshlambert_vert:my,meshlambert_frag:gy,meshmatcap_vert:_y,meshmatcap_frag:xy,meshnormal_vert:vy,meshnormal_frag:yy,meshphong_vert:My,meshphong_frag:Sy,meshphysical_vert:by,meshphysical_frag:Ty,meshtoon_vert:wy,meshtoon_frag:Ey,points_vert:Ay,points_frag:Cy,shadow_vert:Ry,shadow_frag:Py,sprite_vert:Iy,sprite_frag:Dy},ge={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Ui={basic:{uniforms:pn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:pn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new je(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:pn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:pn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:pn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new je(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:pn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:pn([ge.points,ge.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:pn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:pn([ge.common,ge.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:pn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:pn([ge.sprite,ge.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:pn([ge.common,ge.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:pn([ge.lights,ge.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Ui.physical={uniforms:pn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var lh={r:0,b:0,g:0},ts=new Mi,Ly=new bt;function Uy(r,e,t,n,i,s,o){let a=new je(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function _(S){let x=!1,w=g(S);w===null?p(a,l):w&&w.isColor&&(p(w,1),x=!0);let A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,x){let w=g(x);w&&(w.isCubeTexture||w.mapping===Sa)?(h===void 0&&(h=new Wt(new br(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:es(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ts.copy(x.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ly.makeRotationFromEuler(ts)),h.material.toneMapped=ht.getTransfer(w.colorSpace)!==_t,(u!==w||d!==w.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Wt(new bi(2,2),new wn({name:"BackgroundMaterial",uniforms:es(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ht.getTransfer(w.colorSpace)!==_t,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,f=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(lh,lf(r)),n.buffers.color.setClear(lh.r,lh.g,lh.b,x,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m,dispose:T}}function Fy(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(y,L,U,V,G){let W=!1,H=u(V,U,L);s!==H&&(s=H,c(s.object)),W=f(y,V,U,G),W&&g(y,V,U,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(y,L,U,V),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function u(y,L,U){let V=U.wireframe===!0,G=n[y.id];G===void 0&&(G={},n[y.id]=G);let W=G[L.id];W===void 0&&(W={},G[L.id]=W);let H=W[V];return H===void 0&&(H=d(l()),W[V]=H),H}function d(y){let L=[],U=[],V=[];for(let G=0;G<t;G++)L[G]=0,U[G]=0,V[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:V,object:y,attributes:{},index:null}}function f(y,L,U,V){let G=s.attributes,W=L.attributes,H=0,Y=U.getAttributes();for(let k in Y)if(Y[k].location>=0){let P=G[k],le=W[k];if(le===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),P===void 0||P.attribute!==le||le&&P.data!==le.data)return!0;H++}return s.attributesNum!==H||s.index!==V}function g(y,L,U,V){let G={},W=L.attributes,H=0,Y=U.getAttributes();for(let k in Y)if(Y[k].location>=0){let P=W[k];P===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(P=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(P=y.instanceColor));let le={};le.attribute=P,P&&P.data&&(le.data=P.data),G[k]=le,H++}s.attributes=G,s.attributesNum=H,s.index=V}function _(){let y=s.newAttributes;for(let L=0,U=y.length;L<U;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){let U=s.newAttributes,V=s.enabledAttributes,G=s.attributeDivisors;U[y]=1,V[y]===0&&(r.enableVertexAttribArray(y),V[y]=1),G[y]!==L&&(r.vertexAttribDivisor(y,L),G[y]=L)}function T(){let y=s.newAttributes,L=s.enabledAttributes;for(let U=0,V=L.length;U<V;U++)L[U]!==y[U]&&(r.disableVertexAttribArray(U),L[U]=0)}function S(y,L,U,V,G,W,H){H===!0?r.vertexAttribIPointer(y,L,U,G,W):r.vertexAttribPointer(y,L,U,V,G,W)}function x(y,L,U,V){_();let G=V.attributes,W=U.getAttributes(),H=L.defaultAttributeValues;for(let Y in W){let k=W[Y];if(k.location>=0){let te=G[Y];if(te===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(te=y.instanceColor)),te!==void 0){let P=te.normalized,le=te.itemSize,Ne=e.get(te);if(Ne===void 0)continue;let Ze=Ne.buffer,We=Ne.type,Fe=Ne.bytesPerElement,J=We===r.INT||We===r.UNSIGNED_INT||te.gpuType===Cc;if(te.isInterleavedBufferAttribute){let K=te.data,fe=K.stride,_e=te.offset;if(K.isInstancedInterleavedBuffer){for(let Te=0;Te<k.locationSize;Te++)p(k.location+Te,K.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Te=0;Te<k.locationSize;Te++)m(k.location+Te);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let Te=0;Te<k.locationSize;Te++)S(k.location+Te,le/k.locationSize,We,P,fe*Fe,(_e+le/k.locationSize*Te)*Fe,J)}else{if(te.isInstancedBufferAttribute){for(let K=0;K<k.locationSize;K++)p(k.location+K,te.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let K=0;K<k.locationSize;K++)m(k.location+K);r.bindBuffer(r.ARRAY_BUFFER,Ze);for(let K=0;K<k.locationSize;K++)S(k.location+K,le/k.locationSize,We,P,le*Fe,le/k.locationSize*K*Fe,J)}}else if(H!==void 0){let P=H[Y];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(k.location,P);break;case 3:r.vertexAttrib3fv(k.location,P);break;case 4:r.vertexAttrib4fv(k.location,P);break;default:r.vertexAttrib1fv(k.location,P)}}}}T()}function w(){I();for(let y in n){let L=n[y];for(let U in L){let V=L[U];for(let G in V)h(V[G].object),delete V[G];delete L[U]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;let L=n[y.id];for(let U in L){let V=L[U];for(let G in V)h(V[G].object),delete V[G];delete L[U]}delete n[y.id]}function E(y){for(let L in n){let U=n[L];if(U[y.id]===void 0)continue;let V=U[y.id];for(let G in V)h(V[G].object),delete V[G];delete U[y.id]}}function I(){v(),o=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:v,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function Ny(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Oy(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==li&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let I=E===io&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Ti&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Li&&!I)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:w,maxSamples:A}}function By(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Ai,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{let T=s?0:n,S=T*4,x=p.clippingState||null;l.value=x,x=h(g,d,S,f);for(let w=0;w!==S;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==_;++S,x+=4)o.copy(u[S]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function zy(r){let e=new WeakMap;function t(o,a){return a===wc?o.mapping=Qr:a===Ec&&(o.mapping=jr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===wc||a===Ec)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Yl(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var ao=4,bm=[.125,.215,.35,.446,.526,.582],rs=20,df=new ya,Tm=new je,pf=null,mf=0,gf=0,_f=!1,is=(1+Math.sqrt(5))/2,oo=1/is,wm=[new N(-is,oo,0),new N(is,oo,0),new N(-oo,0,is),new N(oo,0,is),new N(0,is,-oo),new N(0,is,oo),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],ky=new N,uh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=ky}=s;pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pf,mf,gf),this._renderer.xr.enabled=_f,e.scissorTest=!1,ch(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:io,format:li,colorSpace:Jr,depthBuffer:!1},i=Em(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Em(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vy(s)),this._blurMaterial=Hy(s,e,t)}return i}_compileMaterial(e){let t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,df)}_sceneToCubeUV(e,t,n,i,s){let l=new rn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Tm),u.toneMapping=tr,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let _=new Pi({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),m=new Wt(new br,_),p=!1,T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,p=!0):(_.color.copy(Tm),p=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));let w=this._cubeSize;ch(i,x*w,S>2?w:0,w,w),u.setRenderTarget(i),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Qr||e.mapping===jr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;ch(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,df)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wm[(i-s-1)%wm.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Wt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*rs-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):rs;m>rs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);let p=[],T=0;for(let E=0;E<rs;++E){let I=E/_,v=Math.exp(-I*I/2);p.push(v),E===0?T+=v:E<m&&(T+=2*v)}for(let E=0;E<p.length;E++)p[E]=p[E]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let x=this._sizeLods[i],w=3*x*(i>S-ao?i-S+ao:0),A=4*(this._cubeSize-x);ch(t,w,A,3*x,2*x),l.setRenderTarget(t),l.render(u,df)}};function Vy(r){let e=[],t=[],n=[],i=r,s=r-ao+1+bm.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ao?l=bm[o-r+ao-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*f),S=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){let E=A%3*2/3-1,I=A>2?0:-1,v=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];T.set(v,_*g*A),S.set(d,m*g*A);let y=[A,A,A,A,A,A];x.set(y,p*g*A)}let w=new Tn;w.setAttribute("position",new dn(T,_)),w.setAttribute("uv",new dn(S,m)),w.setAttribute("faceIndex",new dn(x,p)),e.push(w),i>ao&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Em(r,e,t){let n=new Ri(r,e,t);return n.texture.mapping=Sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ch(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Hy(r,e,t){let n=new Float32Array(rs),i=new N(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Am(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Cm(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Af(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gy(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===wc||l===Ec,h=l===Qr||l===jr;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new uh(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new uh(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Wy(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Xs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xy(r,e,t,n){let i={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let T=f.array;_=f.version;for(let S=0,x=T.length;S<x;S+=3){let w=T[S+0],A=T[S+1],E=T[S+2];d.push(w,A,A,E,E,w)}}else if(g!==void 0){let T=g.array;_=g.version;for(let S=0,x=T.length/3-1;S<x;S+=3){let w=S+0,A=S+1,E=S+2;d.push(w,A,A,E,E,w)}}else return;let m=new(af(d)?Ko:$o)(d,1);m.version=_;let p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function qy(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*_[T];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Yy(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Zy(r,e,t){let n=new WeakMap,i=new gt;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let v=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let x=a.attributes.position.count*S,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let A=new Float32Array(x*w*4*u),E=new Zo(A,x,w,u);E.type=Li,E.needsUpdate=!0;let I=S*4;for(let y=0;y<u;y++){let L=m[y],U=p[y],V=T[y],G=x*w*4*y;for(let W=0;W<L.count;W++){let H=W*I;f===!0&&(i.fromBufferAttribute(L,W),A[G+H+0]=i.x,A[G+H+1]=i.y,A[G+H+2]=i.z,A[G+H+3]=0),g===!0&&(i.fromBufferAttribute(U,W),A[G+H+4]=i.x,A[G+H+5]=i.y,A[G+H+6]=i.z,A[G+H+7]=0),_===!0&&(i.fromBufferAttribute(V,W),A[G+H+8]=i.x,A[G+H+9]=i.y,A[G+H+10]=i.z,A[G+H+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:E,size:new be(x,w)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Jy(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Ym=new Nn,Rm=new sa(1,1),Zm=new Zo,Jm=new Xl,$m=new jo,Pm=[],Im=[],Dm=new Float32Array(16),Lm=new Float32Array(9),Um=new Float32Array(4);function co(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Pm[i];if(s===void 0&&(s=new Float32Array(i),Pm[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function $t(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Kt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function dh(r,e){let t=Im[e];t===void 0&&(t=new Int32Array(e),Im[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function $y(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ky(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2fv(this.addr,e),Kt(t,e)}}function Qy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;r.uniform3fv(this.addr,e),Kt(t,e)}}function jy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4fv(this.addr,e),Kt(t,e)}}function eM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;Um.set(n),r.uniformMatrix2fv(this.addr,!1,Um),Kt(t,n)}}function tM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;Lm.set(n),r.uniformMatrix3fv(this.addr,!1,Lm),Kt(t,n)}}function nM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;Dm.set(n),r.uniformMatrix4fv(this.addr,!1,Dm),Kt(t,n)}}function iM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function rM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2iv(this.addr,e),Kt(t,e)}}function sM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3iv(this.addr,e),Kt(t,e)}}function oM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4iv(this.addr,e),Kt(t,e)}}function aM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function lM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;r.uniform2uiv(this.addr,e),Kt(t,e)}}function cM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;r.uniform3uiv(this.addr,e),Kt(t,e)}}function hM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;r.uniform4uiv(this.addr,e),Kt(t,e)}}function uM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Rm.compareFunction=sf,s=Rm):s=Ym,t.setTexture2D(e||s,i)}function fM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Jm,i)}function dM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||$m,i)}function pM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zm,i)}function mM(r){switch(r){case 5126:return $y;case 35664:return Ky;case 35665:return Qy;case 35666:return jy;case 35674:return eM;case 35675:return tM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return rM;case 35668:case 35672:return sM;case 35669:case 35673:return oM;case 5125:return aM;case 36294:return lM;case 36295:return cM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return dM;case 36289:case 36303:case 36311:case 36292:return pM}}function gM(r,e){r.uniform1fv(this.addr,e)}function _M(r,e){let t=co(e,this.size,2);r.uniform2fv(this.addr,t)}function xM(r,e){let t=co(e,this.size,3);r.uniform3fv(this.addr,t)}function vM(r,e){let t=co(e,this.size,4);r.uniform4fv(this.addr,t)}function yM(r,e){let t=co(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function MM(r,e){let t=co(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function SM(r,e){let t=co(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function bM(r,e){r.uniform1iv(this.addr,e)}function TM(r,e){r.uniform2iv(this.addr,e)}function wM(r,e){r.uniform3iv(this.addr,e)}function EM(r,e){r.uniform4iv(this.addr,e)}function AM(r,e){r.uniform1uiv(this.addr,e)}function CM(r,e){r.uniform2uiv(this.addr,e)}function RM(r,e){r.uniform3uiv(this.addr,e)}function PM(r,e){r.uniform4uiv(this.addr,e)}function IM(r,e,t){let n=this.cache,i=e.length,s=dh(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ym,s[o])}function DM(r,e,t){let n=this.cache,i=e.length,s=dh(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Jm,s[o])}function LM(r,e,t){let n=this.cache,i=e.length,s=dh(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||$m,s[o])}function UM(r,e,t){let n=this.cache,i=e.length,s=dh(t,i);$t(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Zm,s[o])}function FM(r){switch(r){case 5126:return gM;case 35664:return _M;case 35665:return xM;case 35666:return vM;case 35674:return yM;case 35675:return MM;case 35676:return SM;case 5124:case 35670:return bM;case 35667:case 35671:return TM;case 35668:case 35672:return wM;case 35669:case 35673:return EM;case 5125:return AM;case 36294:return CM;case 36295:return RM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return LM;case 36289:case 36303:case 36311:case 36292:return UM}}var vf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mM(t.type)}},yf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FM(t.type)}},Mf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},xf=/(\w+)(\])?(\[|\.)?/g;function Fm(r,e){r.seq.push(e),r.map[e.id]=e}function NM(r,e,t){let n=r.name,i=n.length;for(xf.lastIndex=0;;){let s=xf.exec(n),o=xf.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Fm(t,c===void 0?new vf(a,r,e):new yf(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Mf(a),Fm(t,u)),t=u}}}var lo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);NM(s,o,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Nm(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var OM=37297,BM=0;function zM(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Om=new Ke;function kM(r){ht._getMatrix(Om,ht.workingColorSpace,r);let e=`mat3( ${Om.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(r)){case Xo:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Bm(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+zM(r.getShaderSource(e),a)}else return s}function VM(r,e){let t=kM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function HM(r,e){let t;switch(e){case Jp:t="Linear";break;case $p:t="Reinhard";break;case Kp:t="Cineon";break;case Qp:t="ACESFilmic";break;case em:t="AgX";break;case tm:t="Neutral";break;case jp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var hh=new N;function GM(){ht.getLuminanceCoefficients(hh);let r=hh.x.toFixed(4),e=hh.y.toFixed(4),t=hh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function XM(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qM(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ca(r){return r!==""}function zm(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function km(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var YM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sf(r){return r.replace(YM,JM)}var ZM=new Map;function JM(r,e){let t=nt[e];if(t===void 0){let n=ZM.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sf(t)}var $M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(r){return r.replace($M,KM)}function KM(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Hm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function QM(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Cp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function jM(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qr:case jr:e="ENVMAP_TYPE_CUBE";break;case Sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function tS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Tc:e="ENVMAP_BLENDING_MULTIPLY";break;case Yp:e="ENVMAP_BLENDING_MIX";break;case Zp:e="ENVMAP_BLENDING_ADD";break}return e}function nS(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function iS(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=QM(t),c=jM(t),h=eS(t),u=tS(t),d=nS(t),f=WM(t),g=XM(s),_=i.createProgram(),m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ca).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ca).join(`
`),p.length>0&&(p+=`
`)):(m=[Hm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),p=[Hm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?nt.tonemapping_pars_fragment:"",t.toneMapping!==tr?HM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,VM("linearToOutputTexel",t.outputColorSpace),GM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ca).join(`
`)),o=Sf(o),o=zm(o,t),o=km(o,t),a=Sf(a),a=zm(a,t),a=km(a,t),o=Vm(o),a=Vm(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===of?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===of?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=T+m+o,x=T+p+a,w=Nm(i,i.VERTEX_SHADER,S),A=Nm(i,i.FRAGMENT_SHADER,x);i.attachShader(_,w),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(L){if(r.debug.checkShaderErrors){let U=i.getProgramInfoLog(_)||"",V=i.getShaderInfoLog(w)||"",G=i.getShaderInfoLog(A)||"",W=U.trim(),H=V.trim(),Y=G.trim(),k=!0,te=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,w,A);else{let P=Bm(i,w,"vertex"),le=Bm(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+P+`
`+le)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||Y==="")&&(te=!1);te&&(L.diagnostics={runnable:k,programLog:W,vertexShader:{log:H,prefix:m},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(w),i.deleteShader(A),I=new lo(i,_),v=qM(i,_)}let I;this.getUniforms=function(){return I===void 0&&E(this),I};let v;this.getAttributes=function(){return v===void 0&&E(this),v};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,OM)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=A,this}var rS=0,bf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Tf(e),t.set(e,n)),n}},Tf=class{constructor(e){this.id=rS++,this.code=e,this.usedTimes=0}};function sS(r,e,t,n,i,s,o){let a=new Jo,l=new bf,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,y,L,U,V){let G=U.fog,W=V.geometry,H=v.isMeshStandardMaterial?U.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||H),k=Y&&Y.mapping===Sa?Y.image.height:null,te=g[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let P=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,le=P!==void 0?P.length:0,Ne=0;W.morphAttributes.position!==void 0&&(Ne=1),W.morphAttributes.normal!==void 0&&(Ne=2),W.morphAttributes.color!==void 0&&(Ne=3);let Ze,We,Fe,J;if(te){let xe=Ui[te];Ze=xe.vertexShader,We=xe.fragmentShader}else Ze=v.vertexShader,We=v.fragmentShader,l.update(v),Fe=l.getVertexShaderID(v),J=l.getFragmentShaderID(v);let K=r.getRenderTarget(),fe=r.state.buffers.depth.getReversed(),_e=V.isInstancedMesh===!0,Te=V.isBatchedMesh===!0,ke=!!v.map,ct=!!v.matcap,C=!!Y,Ce=!!v.aoMap,we=!!v.lightMap,ue=!!v.bumpMap,F=!!v.normalMap,Je=!!v.displacementMap,ve=!!v.emissiveMap,Ie=!!v.metalnessMap,Xe=!!v.roughnessMap,dt=v.anisotropy>0,R=v.clearcoat>0,M=v.dispersion>0,z=v.iridescence>0,$=v.sheen>0,Q=v.transmission>0,Z=dt&&!!v.anisotropyMap,ye=R&&!!v.clearcoatMap,se=R&&!!v.clearcoatNormalMap,Re=R&&!!v.clearcoatRoughnessMap,de=z&&!!v.iridescenceMap,re=z&&!!v.iridescenceThicknessMap,he=$&&!!v.sheenColorMap,Be=$&&!!v.sheenRoughnessMap,Pe=!!v.specularMap,ce=!!v.specularColorMap,qe=!!v.specularIntensityMap,D=Q&&!!v.transmissionMap,ie=Q&&!!v.thicknessMap,oe=!!v.gradientMap,me=!!v.alphaMap,ne=v.alphaTest>0,j=!!v.alphaHash,Se=!!v.extensions,Ve=tr;v.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ve=r.toneMapping);let ut={shaderID:te,shaderType:v.type,shaderName:v.name,vertexShader:Ze,fragmentShader:We,defines:v.defines,customVertexShaderID:Fe,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Te,batchingColor:Te&&V._colorsTexture!==null,instancing:_e,instancingColor:_e&&V.instanceColor!==null,instancingMorph:_e&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Jr,alphaToCoverage:!!v.alphaToCoverage,map:ke,matcap:ct,envMap:C,envMapMode:C&&Y.mapping,envMapCubeUVHeight:k,aoMap:Ce,lightMap:we,bumpMap:ue,normalMap:F,displacementMap:d&&Je,emissiveMap:ve,normalMapObjectSpace:F&&v.normalMapType===sm,normalMapTangentSpace:F&&v.normalMapType===rf,metalnessMap:Ie,roughnessMap:Xe,anisotropy:dt,anisotropyMap:Z,clearcoat:R,clearcoatMap:ye,clearcoatNormalMap:se,clearcoatRoughnessMap:Re,dispersion:M,iridescence:z,iridescenceMap:de,iridescenceThicknessMap:re,sheen:$,sheenColorMap:he,sheenRoughnessMap:Be,specularMap:Pe,specularColorMap:ce,specularIntensityMap:qe,transmission:Q,transmissionMap:D,thicknessMap:ie,gradientMap:oe,opaque:v.transparent===!1&&v.blending===Yr&&v.alphaToCoverage===!1,alphaMap:me,alphaTest:ne,alphaHash:j,combine:v.combine,mapUv:ke&&_(v.map.channel),aoMapUv:Ce&&_(v.aoMap.channel),lightMapUv:we&&_(v.lightMap.channel),bumpMapUv:ue&&_(v.bumpMap.channel),normalMapUv:F&&_(v.normalMap.channel),displacementMapUv:Je&&_(v.displacementMap.channel),emissiveMapUv:ve&&_(v.emissiveMap.channel),metalnessMapUv:Ie&&_(v.metalnessMap.channel),roughnessMapUv:Xe&&_(v.roughnessMap.channel),anisotropyMapUv:Z&&_(v.anisotropyMap.channel),clearcoatMapUv:ye&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Be&&_(v.sheenRoughnessMap.channel),specularMapUv:Pe&&_(v.specularMap.channel),specularColorMapUv:ce&&_(v.specularColorMap.channel),specularIntensityMapUv:qe&&_(v.specularIntensityMap.channel),transmissionMapUv:D&&_(v.transmissionMap.channel),thicknessMapUv:ie&&_(v.thicknessMap.channel),alphaMapUv:me&&_(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(F||dt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!W.attributes.uv&&(ke||me),fog:!!G,useFog:v.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:V.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ne,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ve,decodeVideoTexture:ke&&v.map.isVideoTexture===!0&&ht.getTransfer(v.map.colorSpace)===_t,decodeVideoTextureEmissive:ve&&v.emissiveMap.isVideoTexture===!0&&ht.getTransfer(v.emissiveMap.colorSpace)===_t,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Di,flipSided:v.side===En,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Se&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&v.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(v){let y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)y.push(L),y.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(T(y,v),S(y,v),y.push(r.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function T(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function S(v,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function x(v){let y=g[v.type],L;if(y){let U=Ui[y];L=gm.clone(U.uniforms)}else L=v.uniforms;return L}function w(v,y){let L;for(let U=0,V=h.length;U<V;U++){let G=h[U];if(G.cacheKey===y){L=G,++L.usedTimes;break}}return L===void 0&&(L=new iS(r,y,v,s),h.push(L)),L}function A(v){if(--v.usedTimes===0){let y=h.indexOf(v);h[y]=h[h.length-1],h.pop(),v.destroy()}}function E(v){l.remove(v)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:A,releaseShaderCache:E,programs:h,dispose:I}}function oS(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function aS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Gm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Wm(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||aS),n.length>1&&n.sort(d||Gm),i.length>1&&i.sort(d||Gm)}function h(){for(let u=e,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function lS(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new Wm,r.set(n,[o])):i>=s.length?(o=new Wm,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function cS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new je};break;case"SpotLight":t={position:new N,direction:new N,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function hS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var uS=0;function fS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function dS(r){let e=new cS,t=hS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let i=new N,s=new bt,o=new bt;function a(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,T=0,S=0,x=0,w=0,A=0,E=0;c.sort(fS);for(let v=0,y=c.length;v<y;v++){let L=c[v],U=L.color,V=L.intensity,G=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=U.r*V,u+=U.g*V,d+=U.b*V;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],V);E++}else if(L.isDirectionalLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Y=L.shadow,k=t.get(L);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=L.shadow.matrix,T++}n.directional[f]=H,f++}else if(L.isSpotLight){let H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(U).multiplyScalar(V),H.distance=G,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[_]=H;let Y=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,Y.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[_]=Y.matrix,L.castShadow){let k=t.get(L);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=W,x++}_++}else if(L.isRectAreaLight){let H=e.get(L);H.color.copy(U).multiplyScalar(V),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=H,m++}else if(L.isPointLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){let Y=L.shadow,k=t.get(L);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=H,g++}else if(L.isHemisphereLight){let H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(V),H.groundColor.copy(L.groundColor).multiplyScalar(V),n.hemi[p]=H,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==T||I.numPointShadows!==S||I.numSpotShadows!==x||I.numSpotMaps!==w||I.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=T,I.numPointShadows=S,I.numSpotShadows=x,I.numSpotMaps=w,I.numLightProbes=E,n.version=uS++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){let S=c[p];if(S.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(S.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Xm(r){let e=new dS(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function pS(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new Xm(r),e.set(i,[a])):s>=o.length?(a=new Xm(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var mS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _S(r,e,t){let n=new Js,i=new be,s=new be,o=new gt,a=new rc({depthPacking:rm}),l=new sc,c={},h=t.maxTextureSize,u={[$i]:En,[En]:$i,[Di]:Di},d=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:mS,fragmentShader:gS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Tn;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Wt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xu;let p=this.type;this.render=function(A,E,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let v=r.getRenderTarget(),y=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),U=r.state;U.setBlending(er),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let V=p!==Ii&&this.type===Ii,G=p===Ii&&this.type!==Ii;for(let W=0,H=A.length;W<H;W++){let Y=A[W],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let te=k.getFrameExtents();if(i.multiply(te),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/te.x),i.x=s.x*te.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/te.y),i.y=s.y*te.y,k.mapSize.y=s.y)),k.map===null||V===!0||G===!0){let le=this.type!==Ii?{minFilter:ai,magFilter:ai}:{};k.map!==null&&k.map.dispose(),k.map=new Ri(i.x,i.y,le),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();let P=k.getViewportCount();for(let le=0;le<P;le++){let Ne=k.getViewport(le);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),U.viewport(o),k.updateMatrices(Y,le),n=k.getFrustum(),x(E,I,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===Ii&&T(k,I),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,y,L)};function T(A,E){let I=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ri(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(E,null,I,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(E,null,I,f,_,null)}function S(A,E,I,v){let y=null,L=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)y=L;else if(y=I.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let U=y.uuid,V=E.uuid,G=c[U];G===void 0&&(G={},c[U]=G);let W=G[V];W===void 0&&(W=y.clone(),G[V]=W,E.addEventListener("dispose",w)),y=W}if(y.visible=E.visible,y.wireframe=E.wireframe,v===Ii?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:u[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let U=r.properties.get(y);U.light=I}return y}function x(A,E,I,v,y){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Ii)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let V=e.update(A),G=A.material;if(Array.isArray(G)){let W=V.groups;for(let H=0,Y=W.length;H<Y;H++){let k=W[H],te=G[k.materialIndex];if(te&&te.visible){let P=S(A,te,v,y);A.onBeforeShadow(r,A,E,I,V,P,k),r.renderBufferDirect(I,null,V,P,A,k),A.onAfterShadow(r,A,E,I,V,P,k)}}}else if(G.visible){let W=S(A,G,v,y);A.onBeforeShadow(r,A,E,I,V,W,null),r.renderBufferDirect(I,null,V,W,A,null),A.onAfterShadow(r,A,E,I,V,W,null)}}let U=A.children;for(let V=0,G=U.length;V<G;V++)x(U[V],E,I,v,y)}function w(A){A.target.removeEventListener("dispose",w);for(let I in c){let v=c[I],y=A.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}var xS={[_c]:xc,[vc]:Sc,[yc]:bc,[Zr]:Mc,[xc]:_c,[Sc]:vc,[bc]:yc,[Mc]:Zr};function vS(r,e){function t(){let D=!1,ie=new gt,oe=null,me=new gt(0,0,0,0);return{setMask:function(ne){oe!==ne&&!D&&(r.colorMask(ne,ne,ne,ne),oe=ne)},setLocked:function(ne){D=ne},setClear:function(ne,j,Se,Ve,ut){ut===!0&&(ne*=Ve,j*=Ve,Se*=Ve),ie.set(ne,j,Se,Ve),me.equals(ie)===!1&&(r.clearColor(ne,j,Se,Ve),me.copy(ie))},reset:function(){D=!1,oe=null,me.set(-1,0,0,0)}}}function n(){let D=!1,ie=!1,oe=null,me=null,ne=null;return{setReversed:function(j){if(ie!==j){let Se=e.get("EXT_clip_control");j?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ie=j;let Ve=ne;ne=null,this.setClear(Ve)}},getReversed:function(){return ie},setTest:function(j){j?K(r.DEPTH_TEST):fe(r.DEPTH_TEST)},setMask:function(j){oe!==j&&!D&&(r.depthMask(j),oe=j)},setFunc:function(j){if(ie&&(j=xS[j]),me!==j){switch(j){case _c:r.depthFunc(r.NEVER);break;case xc:r.depthFunc(r.ALWAYS);break;case vc:r.depthFunc(r.LESS);break;case Zr:r.depthFunc(r.LEQUAL);break;case yc:r.depthFunc(r.EQUAL);break;case Mc:r.depthFunc(r.GEQUAL);break;case Sc:r.depthFunc(r.GREATER);break;case bc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=j}},setLocked:function(j){D=j},setClear:function(j){ne!==j&&(ie&&(j=1-j),r.clearDepth(j),ne=j)},reset:function(){D=!1,oe=null,me=null,ne=null,ie=!1}}}function i(){let D=!1,ie=null,oe=null,me=null,ne=null,j=null,Se=null,Ve=null,ut=null;return{setTest:function(xe){D||(xe?K(r.STENCIL_TEST):fe(r.STENCIL_TEST))},setMask:function(xe){ie!==xe&&!D&&(r.stencilMask(xe),ie=xe)},setFunc:function(xe,De,$e){(oe!==xe||me!==De||ne!==$e)&&(r.stencilFunc(xe,De,$e),oe=xe,me=De,ne=$e)},setOp:function(xe,De,$e){(j!==xe||Se!==De||Ve!==$e)&&(r.stencilOp(xe,De,$e),j=xe,Se=De,Ve=$e)},setLocked:function(xe){D=xe},setClear:function(xe){ut!==xe&&(r.clearStencil(xe),ut=xe)},reset:function(){D=!1,ie=null,oe=null,me=null,ne=null,j=null,Se=null,Ve=null,ut=null}}}let s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,S=null,x=null,w=null,A=null,E=new je(0,0,0),I=0,v=!1,y=null,L=null,U=null,V=null,G=null,W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Y=0,k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),H=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),H=Y>=2);let te=null,P={},le=r.getParameter(r.SCISSOR_BOX),Ne=r.getParameter(r.VIEWPORT),Ze=new gt().fromArray(le),We=new gt().fromArray(Ne);function Fe(D,ie,oe,me){let ne=new Uint8Array(4),j=r.createTexture();r.bindTexture(D,j),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Se=0;Se<oe;Se++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ie,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,ne):r.texImage2D(ie+Se,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ne);return j}let J={};J[r.TEXTURE_2D]=Fe(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=Fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=Fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=Fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(r.DEPTH_TEST),o.setFunc(Zr),ue(!1),F(Wu),K(r.CULL_FACE),Ce(er);function K(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function fe(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function _e(D,ie){return u[D]!==ie?(r.bindFramebuffer(D,ie),u[D]=ie,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ie),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ie),!0):!1}function Te(D,ie){let oe=f,me=!1;if(D){oe=d.get(ie),oe===void 0&&(oe=[],d.set(ie,oe));let ne=D.textures;if(oe.length!==ne.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let j=0,Se=ne.length;j<Se;j++)oe[j]=r.COLOR_ATTACHMENT0+j;oe.length=ne.length,me=!0}}else oe[0]!==r.BACK&&(oe[0]=r.BACK,me=!0);me&&r.drawBuffers(oe)}function ke(D){return g!==D?(r.useProgram(D),g=D,!0):!1}let ct={[yr]:r.FUNC_ADD,[Pp]:r.FUNC_SUBTRACT,[Ip]:r.FUNC_REVERSE_SUBTRACT};ct[Dp]=r.MIN,ct[Lp]=r.MAX;let C={[Up]:r.ZERO,[Fp]:r.ONE,[Np]:r.SRC_COLOR,[Nl]:r.SRC_ALPHA,[Hp]:r.SRC_ALPHA_SATURATE,[kp]:r.DST_COLOR,[Bp]:r.DST_ALPHA,[Op]:r.ONE_MINUS_SRC_COLOR,[Ol]:r.ONE_MINUS_SRC_ALPHA,[Vp]:r.ONE_MINUS_DST_COLOR,[zp]:r.ONE_MINUS_DST_ALPHA,[Gp]:r.CONSTANT_COLOR,[Wp]:r.ONE_MINUS_CONSTANT_COLOR,[Xp]:r.CONSTANT_ALPHA,[qp]:r.ONE_MINUS_CONSTANT_ALPHA};function Ce(D,ie,oe,me,ne,j,Se,Ve,ut,xe){if(D===er){_===!0&&(fe(r.BLEND),_=!1);return}if(_===!1&&(K(r.BLEND),_=!0),D!==Rp){if(D!==m||xe!==v){if((p!==yr||x!==yr)&&(r.blendEquation(r.FUNC_ADD),p=yr,x=yr),xe)switch(D){case Yr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ar:r.blendFunc(r.ONE,r.ONE);break;case qu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Yr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ar:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case qu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,S=null,w=null,A=null,E.set(0,0,0),I=0,m=D,v=xe}return}ne=ne||ie,j=j||oe,Se=Se||me,(ie!==p||ne!==x)&&(r.blendEquationSeparate(ct[ie],ct[ne]),p=ie,x=ne),(oe!==T||me!==S||j!==w||Se!==A)&&(r.blendFuncSeparate(C[oe],C[me],C[j],C[Se]),T=oe,S=me,w=j,A=Se),(Ve.equals(E)===!1||ut!==I)&&(r.blendColor(Ve.r,Ve.g,Ve.b,ut),E.copy(Ve),I=ut),m=D,v=!1}function we(D,ie){D.side===Di?fe(r.CULL_FACE):K(r.CULL_FACE);let oe=D.side===En;ie&&(oe=!oe),ue(oe),D.blending===Yr&&D.transparent===!1?Ce(er):Ce(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let me=D.stencilWrite;a.setTest(me),me&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ve(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):fe(r.SAMPLE_ALPHA_TO_COVERAGE)}function ue(D){y!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),y=D)}function F(D){D!==Ep?(K(r.CULL_FACE),D!==L&&(D===Wu?r.cullFace(r.BACK):D===Ap?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):fe(r.CULL_FACE),L=D}function Je(D){D!==U&&(H&&r.lineWidth(D),U=D)}function ve(D,ie,oe){D?(K(r.POLYGON_OFFSET_FILL),(V!==ie||G!==oe)&&(r.polygonOffset(ie,oe),V=ie,G=oe)):fe(r.POLYGON_OFFSET_FILL)}function Ie(D){D?K(r.SCISSOR_TEST):fe(r.SCISSOR_TEST)}function Xe(D){D===void 0&&(D=r.TEXTURE0+W-1),te!==D&&(r.activeTexture(D),te=D)}function dt(D,ie,oe){oe===void 0&&(te===null?oe=r.TEXTURE0+W-1:oe=te);let me=P[oe];me===void 0&&(me={type:void 0,texture:void 0},P[oe]=me),(me.type!==D||me.texture!==ie)&&(te!==oe&&(r.activeTexture(oe),te=oe),r.bindTexture(D,ie||J[D]),me.type=D,me.texture=ie)}function R(){let D=P[te];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{r.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{r.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{r.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{r.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{r.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{r.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{r.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{r.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function re(){try{r.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(D){Ze.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Ze.copy(D))}function Be(D){We.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),We.copy(D))}function Pe(D,ie){let oe=c.get(ie);oe===void 0&&(oe=new WeakMap,c.set(ie,oe));let me=oe.get(D);me===void 0&&(me=r.getUniformBlockIndex(ie,D.name),oe.set(D,me))}function ce(D,ie){let me=c.get(ie).get(D);l.get(ie)!==me&&(r.uniformBlockBinding(ie,me,D.__bindingPointIndex),l.set(ie,me))}function qe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},te=null,P={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,S=null,x=null,w=null,A=null,E=new je(0,0,0),I=0,v=!1,y=null,L=null,U=null,V=null,G=null,Ze.set(0,0,r.canvas.width,r.canvas.height),We.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:fe,bindFramebuffer:_e,drawBuffers:Te,useProgram:ke,setBlending:Ce,setMaterial:we,setFlipSided:ue,setCullFace:F,setLineWidth:Je,setPolygonOffset:ve,setScissorTest:Ie,activeTexture:Xe,bindTexture:dt,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:de,texImage3D:re,updateUBOMapping:Pe,uniformBlockBinding:ce,texStorage2D:se,texStorage3D:Re,texSubImage2D:$,texSubImage3D:Q,compressedTexSubImage2D:Z,compressedTexSubImage3D:ye,scissor:he,viewport:Be,reset:qe}}function yS(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return f?new OffscreenCanvas(R,M):Yo("canvas")}function _(R,M,z){let $=1,Q=dt(R);if((Q.width>z||Q.height>z)&&($=z/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Z=Math.floor($*Q.width),ye=Math.floor($*Q.height);u===void 0&&(u=g(Z,ye));let se=M?g(Z,ye):u;return se.width=Z,se.height=ye,se.getContext("2d").drawImage(R,0,0,Z,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+ye+")."),se}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(R,M,z,$,Q=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=M;if(M===r.RED&&(z===r.FLOAT&&(Z=r.R32F),z===r.HALF_FLOAT&&(Z=r.R16F),z===r.UNSIGNED_BYTE&&(Z=r.R8)),M===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.R8UI),z===r.UNSIGNED_SHORT&&(Z=r.R16UI),z===r.UNSIGNED_INT&&(Z=r.R32UI),z===r.BYTE&&(Z=r.R8I),z===r.SHORT&&(Z=r.R16I),z===r.INT&&(Z=r.R32I)),M===r.RG&&(z===r.FLOAT&&(Z=r.RG32F),z===r.HALF_FLOAT&&(Z=r.RG16F),z===r.UNSIGNED_BYTE&&(Z=r.RG8)),M===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.RG8UI),z===r.UNSIGNED_SHORT&&(Z=r.RG16UI),z===r.UNSIGNED_INT&&(Z=r.RG32UI),z===r.BYTE&&(Z=r.RG8I),z===r.SHORT&&(Z=r.RG16I),z===r.INT&&(Z=r.RG32I)),M===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),z===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),z===r.UNSIGNED_INT&&(Z=r.RGB32UI),z===r.BYTE&&(Z=r.RGB8I),z===r.SHORT&&(Z=r.RGB16I),z===r.INT&&(Z=r.RGB32I)),M===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),z===r.UNSIGNED_INT&&(Z=r.RGBA32UI),z===r.BYTE&&(Z=r.RGBA8I),z===r.SHORT&&(Z=r.RGBA16I),z===r.INT&&(Z=r.RGBA32I)),M===r.RGB&&(z===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(Z=r.R11F_G11F_B10F)),M===r.RGBA){let ye=Q?Xo:ht.getTransfer($);z===r.FLOAT&&(Z=r.RGBA32F),z===r.HALF_FLOAT&&(Z=r.RGBA16F),z===r.UNSIGNED_BYTE&&(Z=ye===_t?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(R,M){let z;return R?M===null||M===Rr||M===ro?z=r.DEPTH24_STENCIL8:M===Li?z=r.DEPTH32F_STENCIL8:M===no&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Rr||M===ro?z=r.DEPTH_COMPONENT24:M===Li?z=r.DEPTH_COMPONENT32F:M===no&&(z=r.DEPTH_COMPONENT16),z}function w(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ai&&R.minFilter!==yi?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){let M=R.target;M.removeEventListener("dispose",A),I(M),M.isVideoTexture&&h.delete(M)}function E(R){let M=R.target;M.removeEventListener("dispose",E),y(M)}function I(R){let M=n.get(R);if(M.__webglInit===void 0)return;let z=R.source,$=d.get(z);if($){let Q=$[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(R),Object.keys($).length===0&&d.delete(z)}n.remove(R)}function v(R){let M=n.get(R);r.deleteTexture(M.__webglTexture);let z=R.source,$=d.get(z);delete $[M.__cacheKey],o.memory.textures--}function y(R){let M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let Q=0;Q<M.__webglFramebuffer[$].length;Q++)r.deleteFramebuffer(M.__webglFramebuffer[$][Q]);else r.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)r.deleteFramebuffer(M.__webglFramebuffer[$]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let z=R.textures;for(let $=0,Q=z.length;$<Q;$++){let Z=n.get(z[$]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(z[$])}n.remove(R)}let L=0;function U(){L=0}function V(){let R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R}function G(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function W(R,M){let z=n.get(R);if(R.isVideoTexture&&Ie(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){let $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(z,R,M);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+M)}function H(R,M){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){J(z,R,M);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+M)}function Y(R,M){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){J(z,R,M);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+M)}function k(R,M){let z=n.get(R);if(R.version>0&&z.__version!==R.version){K(z,R,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+M)}let te={[Bl]:r.REPEAT,[vr]:r.CLAMP_TO_EDGE,[zl]:r.MIRRORED_REPEAT},P={[ai]:r.NEAREST,[nm]:r.NEAREST_MIPMAP_NEAREST,[ba]:r.NEAREST_MIPMAP_LINEAR,[yi]:r.LINEAR,[Ac]:r.LINEAR_MIPMAP_NEAREST,[Cr]:r.LINEAR_MIPMAP_LINEAR},le={[om]:r.NEVER,[fm]:r.ALWAYS,[am]:r.LESS,[sf]:r.LEQUAL,[lm]:r.EQUAL,[um]:r.GEQUAL,[cm]:r.GREATER,[hm]:r.NOTEQUAL};function Ne(R,M){if(M.type===Li&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===yi||M.magFilter===Ac||M.magFilter===ba||M.magFilter===Cr||M.minFilter===yi||M.minFilter===Ac||M.minFilter===ba||M.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,te[M.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,te[M.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,te[M.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,P[M.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,P[M.minFilter]),M.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ai||M.minFilter!==ba&&M.minFilter!==Cr||M.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ze(R,M){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",A));let $=M.source,Q=d.get($);Q===void 0&&(Q={},d.set($,Q));let Z=G(M);if(Z!==R.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[Z].usedTimes++;let ye=Q[R.__cacheKey];ye!==void 0&&(Q[R.__cacheKey].usedTimes--,ye.usedTimes===0&&v(M)),R.__cacheKey=Z,R.__webglTexture=Q[Z].texture}return z}function We(R,M,z){return Math.floor(Math.floor(R/z)/M)}function Fe(R,M,z,$){let Z=R.updateRanges;if(Z.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,z,$,M.data);else{Z.sort((re,he)=>re.start-he.start);let ye=0;for(let re=1;re<Z.length;re++){let he=Z[ye],Be=Z[re],Pe=he.start+he.count,ce=We(Be.start,M.width,4),qe=We(he.start,M.width,4);Be.start<=Pe+1&&ce===qe&&We(Be.start+Be.count-1,M.width,4)===ce?he.count=Math.max(he.count,Be.start+Be.count-he.start):(++ye,Z[ye]=Be)}Z.length=ye+1;let se=r.getParameter(r.UNPACK_ROW_LENGTH),Re=r.getParameter(r.UNPACK_SKIP_PIXELS),de=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let re=0,he=Z.length;re<he;re++){let Be=Z[re],Pe=Math.floor(Be.start/4),ce=Math.ceil(Be.count/4),qe=Pe%M.width,D=Math.floor(Pe/M.width),ie=ce,oe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,qe),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,qe,D,ie,oe,z,$,M.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Re),r.pixelStorei(r.UNPACK_SKIP_ROWS,de)}}function J(R,M,z){let $=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=r.TEXTURE_3D);let Q=Ze(R,M),Z=M.source;t.bindTexture($,R.__webglTexture,r.TEXTURE0+z);let ye=n.get(Z);if(Z.version!==ye.__version||Q===!0){t.activeTexture(r.TEXTURE0+z);let se=ht.getPrimaries(ht.workingColorSpace),Re=M.colorSpace===nr?null:ht.getPrimaries(M.colorSpace),de=M.colorSpace===nr||se===Re?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let re=_(M.image,!1,i.maxTextureSize);re=Xe(M,re);let he=s.convert(M.format,M.colorSpace),Be=s.convert(M.type),Pe=S(M.internalFormat,he,Be,M.colorSpace,M.isVideoTexture);Ne($,M);let ce,qe=M.mipmaps,D=M.isVideoTexture!==!0,ie=ye.__version===void 0||Q===!0,oe=Z.dataReady,me=w(M,re);if(M.isDepthTexture)Pe=x(M.format===so,M.type),ie&&(D?t.texStorage2D(r.TEXTURE_2D,1,Pe,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,Pe,re.width,re.height,0,he,Be,null));else if(M.isDataTexture)if(qe.length>0){D&&ie&&t.texStorage2D(r.TEXTURE_2D,me,Pe,qe[0].width,qe[0].height);for(let ne=0,j=qe.length;ne<j;ne++)ce=qe[ne],D?oe&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ce.width,ce.height,he,Be,ce.data):t.texImage2D(r.TEXTURE_2D,ne,Pe,ce.width,ce.height,0,he,Be,ce.data);M.generateMipmaps=!1}else D?(ie&&t.texStorage2D(r.TEXTURE_2D,me,Pe,re.width,re.height),oe&&Fe(M,re,he,Be)):t.texImage2D(r.TEXTURE_2D,0,Pe,re.width,re.height,0,he,Be,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){D&&ie&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Pe,qe[0].width,qe[0].height,re.depth);for(let ne=0,j=qe.length;ne<j;ne++)if(ce=qe[ne],M.format!==li)if(he!==null)if(D){if(oe)if(M.layerUpdates.size>0){let Se=ff(ce.width,ce.height,M.format,M.type);for(let Ve of M.layerUpdates){let ut=ce.data.subarray(Ve*Se/ce.data.BYTES_PER_ELEMENT,(Ve+1)*Se/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,Ve,ce.width,ce.height,1,he,ut)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ce.width,ce.height,re.depth,he,ce.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,Pe,ce.width,ce.height,re.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?oe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ce.width,ce.height,re.depth,he,Be,ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,Pe,ce.width,ce.height,re.depth,0,he,Be,ce.data)}else{D&&ie&&t.texStorage2D(r.TEXTURE_2D,me,Pe,qe[0].width,qe[0].height);for(let ne=0,j=qe.length;ne<j;ne++)ce=qe[ne],M.format!==li?he!==null?D?oe&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,ce.width,ce.height,he,ce.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,Pe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?oe&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ce.width,ce.height,he,Be,ce.data):t.texImage2D(r.TEXTURE_2D,ne,Pe,ce.width,ce.height,0,he,Be,ce.data)}else if(M.isDataArrayTexture)if(D){if(ie&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Pe,re.width,re.height,re.depth),oe)if(M.layerUpdates.size>0){let ne=ff(re.width,re.height,M.format,M.type);for(let j of M.layerUpdates){let Se=re.data.subarray(j*ne/re.data.BYTES_PER_ELEMENT,(j+1)*ne/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,re.width,re.height,1,he,Be,Se)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,he,Be,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,re.width,re.height,re.depth,0,he,Be,re.data);else if(M.isData3DTexture)D?(ie&&t.texStorage3D(r.TEXTURE_3D,me,Pe,re.width,re.height,re.depth),oe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,he,Be,re.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,re.width,re.height,re.depth,0,he,Be,re.data);else if(M.isFramebufferTexture){if(ie)if(D)t.texStorage2D(r.TEXTURE_2D,me,Pe,re.width,re.height);else{let ne=re.width,j=re.height;for(let Se=0;Se<me;Se++)t.texImage2D(r.TEXTURE_2D,Se,Pe,ne,j,0,he,Be,null),ne>>=1,j>>=1}}else if(qe.length>0){if(D&&ie){let ne=dt(qe[0]);t.texStorage2D(r.TEXTURE_2D,me,Pe,ne.width,ne.height)}for(let ne=0,j=qe.length;ne<j;ne++)ce=qe[ne],D?oe&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,he,Be,ce):t.texImage2D(r.TEXTURE_2D,ne,Pe,he,Be,ce);M.generateMipmaps=!1}else if(D){if(ie){let ne=dt(re);t.texStorage2D(r.TEXTURE_2D,me,Pe,ne.width,ne.height)}oe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he,Be,re)}else t.texImage2D(r.TEXTURE_2D,0,Pe,he,Be,re);m(M)&&p($),ye.__version=Z.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function K(R,M,z){if(M.image.length!==6)return;let $=Ze(R,M),Q=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+z);let Z=n.get(Q);if(Q.version!==Z.__version||$===!0){t.activeTexture(r.TEXTURE0+z);let ye=ht.getPrimaries(ht.workingColorSpace),se=M.colorSpace===nr?null:ht.getPrimaries(M.colorSpace),Re=M.colorSpace===nr||ye===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let de=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,he=[];for(let j=0;j<6;j++)!de&&!re?he[j]=_(M.image[j],!0,i.maxCubemapSize):he[j]=re?M.image[j].image:M.image[j],he[j]=Xe(M,he[j]);let Be=he[0],Pe=s.convert(M.format,M.colorSpace),ce=s.convert(M.type),qe=S(M.internalFormat,Pe,ce,M.colorSpace),D=M.isVideoTexture!==!0,ie=Z.__version===void 0||$===!0,oe=Q.dataReady,me=w(M,Be);Ne(r.TEXTURE_CUBE_MAP,M);let ne;if(de){D&&ie&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,qe,Be.width,Be.height);for(let j=0;j<6;j++){ne=he[j].mipmaps;for(let Se=0;Se<ne.length;Se++){let Ve=ne[Se];M.format!==li?Pe!==null?D?oe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,0,0,Ve.width,Ve.height,Pe,Ve.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,qe,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,0,0,Ve.width,Ve.height,Pe,ce,Ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,qe,Ve.width,Ve.height,0,Pe,ce,Ve.data)}}}else{if(ne=M.mipmaps,D&&ie){ne.length>0&&me++;let j=dt(he[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,qe,j.width,j.height)}for(let j=0;j<6;j++)if(re){D?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,he[j].width,he[j].height,Pe,ce,he[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qe,he[j].width,he[j].height,0,Pe,ce,he[j].data);for(let Se=0;Se<ne.length;Se++){let ut=ne[Se].image[j].image;D?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,0,0,ut.width,ut.height,Pe,ce,ut.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,qe,ut.width,ut.height,0,Pe,ce,ut.data)}}else{D?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Pe,ce,he[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qe,Pe,ce,he[j]);for(let Se=0;Se<ne.length;Se++){let Ve=ne[Se];D?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,0,0,Pe,ce,Ve.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,qe,Pe,ce,Ve.image[j])}}}m(M)&&p(r.TEXTURE_CUBE_MAP),Z.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function fe(R,M,z,$,Q,Z){let ye=s.convert(z.format,z.colorSpace),se=s.convert(z.type),Re=S(z.internalFormat,ye,se,z.colorSpace),de=n.get(M),re=n.get(z);if(re.__renderTarget=M,!de.__hasExternalTextures){let he=Math.max(1,M.width>>Z),Be=Math.max(1,M.height>>Z);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,Z,Re,he,Be,M.depth,0,ye,se,null):t.texImage2D(Q,Z,Re,he,Be,0,ye,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),ve(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,Q,re.__webglTexture,0,Je(M)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,Q,re.__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function _e(R,M,z){if(r.bindRenderbuffer(r.RENDERBUFFER,R),M.depthBuffer){let $=M.depthTexture,Q=$&&$.isDepthTexture?$.type:null,Z=x(M.stencilBuffer,Q),ye=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=Je(M);ve(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,Z,M.width,M.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,Z,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Z,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,R)}else{let $=M.textures;for(let Q=0;Q<$.length;Q++){let Z=$[Q],ye=s.convert(Z.format,Z.colorSpace),se=s.convert(Z.type),Re=S(Z.internalFormat,ye,se,Z.colorSpace),de=Je(M);z&&ve(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,de,Re,M.width,M.height):ve(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,Re,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Re,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Te(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);let Q=$.__webglTexture,Z=Je(M);if(M.depthTexture.format===Ws)ve(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(M.depthTexture.format===so)ve(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ke(R){let M=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let $=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=$}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let $=R.texture.mipmaps;$&&$.length>0?Te(M.__webglFramebuffer[0],R):Te(M.__webglFramebuffer,R)}else if(z){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=r.createRenderbuffer(),_e(M.__webglDepthbuffer[$],R,!1);else{let Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,Z)}}else{let $=R.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),_e(M.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,Z)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ct(R,M,z){let $=n.get(R);M!==void 0&&fe($.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&ke(R)}function C(R){let M=R.texture,z=n.get(R),$=n.get(M);R.addEventListener("dispose",E);let Q=R.textures,Z=R.isWebGLCubeRenderTarget===!0,ye=Q.length>1;if(ye||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=M.version,o.memory.textures++),Z){z.__webglFramebuffer=[];for(let se=0;se<6;se++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[se]=[];for(let Re=0;Re<M.mipmaps.length;Re++)z.__webglFramebuffer[se][Re]=r.createFramebuffer()}else z.__webglFramebuffer[se]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let se=0;se<M.mipmaps.length;se++)z.__webglFramebuffer[se]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ye)for(let se=0,Re=Q.length;se<Re;se++){let de=n.get(Q[se]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&ve(R)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let se=0;se<Q.length;se++){let Re=Q[se];z.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[se]);let de=s.convert(Re.format,Re.colorSpace),re=s.convert(Re.type),he=S(Re.internalFormat,de,re,Re.colorSpace,R.isXRRenderTarget===!0),Be=Je(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,he,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,z.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),_e(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,M);for(let se=0;se<6;se++)if(M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)fe(z.__webglFramebuffer[se][Re],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Re);else fe(z.__webglFramebuffer[se],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(M)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let se=0,Re=Q.length;se<Re;se++){let de=Q[se],re=n.get(de),he=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,re.__webglTexture),Ne(he,de),fe(z.__webglFramebuffer,R,de,r.COLOR_ATTACHMENT0+se,he,0),m(de)&&p(he)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,$.__webglTexture),Ne(se,M),M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)fe(z.__webglFramebuffer[Re],R,M,r.COLOR_ATTACHMENT0,se,Re);else fe(z.__webglFramebuffer,R,M,r.COLOR_ATTACHMENT0,se,0);m(M)&&p(se),t.unbindTexture()}R.depthBuffer&&ke(R)}function Ce(R){let M=R.textures;for(let z=0,$=M.length;z<$;z++){let Q=M[z];if(m(Q)){let Z=T(R),ye=n.get(Q).__webglTexture;t.bindTexture(Z,ye),p(Z),t.unbindTexture()}}}let we=[],ue=[];function F(R){if(R.samples>0){if(ve(R)===!1){let M=R.textures,z=R.width,$=R.height,Q=r.COLOR_BUFFER_BIT,Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=n.get(R),se=M.length>1;if(se)for(let de=0;de<M.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let Re=R.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let de=0;de<M.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[de]);let re=n.get(M[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,re,0)}r.blitFramebuffer(0,0,z,$,0,0,z,$,Q,r.NEAREST),l===!0&&(we.length=0,ue.length=0,we.push(r.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.resolveDepthBuffer===!1&&(we.push(Z),ue.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ue)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,we))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let de=0;de<M.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,ye.__webglColorRenderbuffer[de]);let re=n.get(M[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let M=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Je(R){return Math.min(i.maxSamples,R.samples)}function ve(R){let M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ie(R){let M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Xe(R,M){let z=R.colorSpace,$=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Jr&&z!==nr&&(ht.getTransfer(z)===_t?($!==li||Q!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function dt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=k,this.rebindTextures=ct,this.setupRenderTarget=C,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ve}function MS(r,e){function t(n,i=nr){let s,o=ht.getTransfer(i);if(n===Ti)return r.UNSIGNED_BYTE;if(n===Rc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Pc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ku)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Qu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ju)return r.BYTE;if(n===$u)return r.SHORT;if(n===no)return r.UNSIGNED_SHORT;if(n===Cc)return r.INT;if(n===Rr)return r.UNSIGNED_INT;if(n===Li)return r.FLOAT;if(n===io)return r.HALF_FLOAT;if(n===ju)return r.ALPHA;if(n===ef)return r.RGB;if(n===li)return r.RGBA;if(n===Ws)return r.DEPTH_COMPONENT;if(n===so)return r.DEPTH_STENCIL;if(n===tf)return r.RED;if(n===Ic)return r.RED_INTEGER;if(n===nf)return r.RG;if(n===Dc)return r.RG_INTEGER;if(n===Lc)return r.RGBA_INTEGER;if(n===Ta||n===wa||n===Ea||n===Aa)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ta)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ta)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Aa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Uc||n===Fc||n===Nc||n===Oc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Uc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bc||n===zc||n===kc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Bc||n===zc)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===kc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vc||n===Hc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===Jc||n===$c||n===Kc||n===Qc||n===jc||n===eh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Vc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$c)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jc)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===eh)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===th||n===nh||n===ih)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===th)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ih)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rh||n===sh||n===oh||n===ah)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===rh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===sh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ah)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ro?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var SS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new oa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new wn({vertexShader:SS,fragmentShader:bS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ef=class extends Ki{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new wf,p={},T=t.getContextAttributes(),S=null,x=null,w=[],A=[],E=new be,I=null,v=new rn;v.viewport=new gt;let y=new rn;y.viewport=new gt;let L=[v,y],U=new gc,V=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let K=w[J];return K===void 0&&(K=new Zs,w[J]=K),K.getTargetRaySpace()},this.getControllerGrip=function(J){let K=w[J];return K===void 0&&(K=new Zs,w[J]=K),K.getGripSpace()},this.getHand=function(J){let K=w[J];return K===void 0&&(K=new Zs,w[J]=K),K.getHandSpace()};function W(J){let K=A.indexOf(J.inputSource);if(K===-1)return;let fe=w[K];fe!==void 0&&(fe.update(J.inputSource,J.frame,c||o),fe.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",Y);for(let J=0;J<w.length;J++){let K=A[J];K!==null&&(A[J]=null,w[J].disconnect(K))}V=null,G=null,m.reset();for(let J in p)delete p[J];e.setRenderTarget(S),f=null,d=null,u=null,i=null,x=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",H),i.addEventListener("inputsourceschange",Y),T.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,_e=null,Te=null;T.depth&&(Te=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=T.stencil?so:Ws,_e=T.stencil?ro:Rr);let ke={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(ke),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Ri(d.textureWidth,d.textureHeight,{format:li,type:Ti,depthTexture:new sa(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let fe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Ri(f.framebufferWidth,f.framebufferHeight,{format:li,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Fe.setContext(i),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(J){for(let K=0;K<J.removed.length;K++){let fe=J.removed[K],_e=A.indexOf(fe);_e>=0&&(A[_e]=null,w[_e].disconnect(fe))}for(let K=0;K<J.added.length;K++){let fe=J.added[K],_e=A.indexOf(fe);if(_e===-1){for(let ke=0;ke<w.length;ke++)if(ke>=A.length){A.push(fe),_e=ke;break}else if(A[ke]===null){A[ke]=fe,_e=ke;break}if(_e===-1)break}let Te=w[_e];Te&&Te.connect(fe)}}let k=new N,te=new N;function P(J,K,fe){k.setFromMatrixPosition(K.matrixWorld),te.setFromMatrixPosition(fe.matrixWorld);let _e=k.distanceTo(te),Te=K.projectionMatrix.elements,ke=fe.projectionMatrix.elements,ct=Te[14]/(Te[10]-1),C=Te[14]/(Te[10]+1),Ce=(Te[9]+1)/Te[5],we=(Te[9]-1)/Te[5],ue=(Te[8]-1)/Te[0],F=(ke[8]+1)/ke[0],Je=ct*ue,ve=ct*F,Ie=_e/(-ue+F),Xe=Ie*-ue;if(K.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Xe),J.translateZ(Ie),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Te[10]===-1)J.projectionMatrix.copy(K.projectionMatrix),J.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let dt=ct+Ie,R=C+Ie,M=Je-Xe,z=ve+(_e-Xe),$=Ce*C/R*dt,Q=we*C/R*dt;J.projectionMatrix.makePerspective(M,z,$,Q,dt,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function le(J,K){K===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(K.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let K=J.near,fe=J.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),U.near=y.near=v.near=K,U.far=y.far=v.far=fe,(V!==U.near||G!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),V=U.near,G=U.far),U.layers.mask=J.layers.mask|6,v.layers.mask=U.layers.mask&3,y.layers.mask=U.layers.mask&5;let _e=J.parent,Te=U.cameras;le(U,_e);for(let ke=0;ke<Te.length;ke++)le(Te[ke],_e);Te.length===2?P(U,v,y):U.projectionMatrix.copy(v.projectionMatrix),Ne(J,U,_e)};function Ne(J,K,fe){fe===null?J.matrix.copy(K.matrixWorld):(J.matrix.copy(fe.matrixWorld),J.matrix.invert(),J.matrix.multiply(K.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(K.projectionMatrix),J.projectionMatrixInverse.copy(K.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Hl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(J){return p[J]};let Ze=null;function We(J,K){if(h=K.getViewerPose(c||o),g=K,h!==null){let fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let _e=!1;fe.length!==U.cameras.length&&(U.cameras.length=0,_e=!0);for(let C=0;C<fe.length;C++){let Ce=fe[C],we=null;if(f!==null)we=f.getViewport(Ce);else{let F=u.getViewSubImage(d,Ce);we=F.viewport,C===0&&(e.setRenderTargetTextures(x,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(x))}let ue=L[C];ue===void 0&&(ue=new rn,ue.layers.enable(C),ue.viewport=new gt,L[C]=ue),ue.matrix.fromArray(Ce.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Ce.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(we.x,we.y,we.width,we.height),C===0&&(U.matrix.copy(ue.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),_e===!0&&U.cameras.push(ue)}let Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let C=u.getDepthInformation(fe[0]);C&&C.isValid&&C.texture&&m.init(C,i.renderState)}if(Te&&Te.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let C=0;C<fe.length;C++){let Ce=fe[C].camera;if(Ce){let we=p[Ce];we||(we=new oa,p[Ce]=we);let ue=u.getCameraImage(Ce);we.sourceTexture=ue}}}}for(let fe=0;fe<w.length;fe++){let _e=A[fe],Te=w[fe];_e!==null&&Te!==void 0&&Te.update(_e,K,c||o)}Ze&&Ze(J,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let Fe=new qm;Fe.setAnimationLoop(We),this.setAnimationLoop=function(J){Ze=J},this.dispose=function(){}}},ns=new Mi,TS=new bt;function wS(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=e.get(p),S=T.envMap,x=T.envMapRotation;S&&(m.envMap.value=S,ns.copy(x),ns.x*=-1,ns.y*=-1,ns.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4(TS.makeRotationFromEuler(ns)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ES(r,e,t,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){let x=S.program;n.uniformBlockBinding(T,x)}function c(T,S){let x=i[T.id];x===void 0&&(g(T),x=h(T),i[T.id]=x,T.addEventListener("dispose",m));let w=S.program;n.updateUBOMapping(T,w);let A=e.render.frame;s[T.id]!==A&&(d(T),s[T.id]=A)}function h(T){let S=u();T.__bindingPointIndex=S;let x=r.createBuffer(),w=T.__size,A=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,w,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,x),x}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let S=i[T.id],x=T.uniforms,w=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let A=0,E=x.length;A<E;A++){let I=Array.isArray(x[A])?x[A]:[x[A]];for(let v=0,y=I.length;v<y;v++){let L=I[v];if(f(L,A,v,w)===!0){let U=L.__offset,V=Array.isArray(L.value)?L.value:[L.value],G=0;for(let W=0;W<V.length;W++){let H=V[W],Y=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,U+G,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,G),G+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(T,S,x,w){let A=T.value,E=S+"_"+x;if(w[E]===void 0)return typeof A=="number"||typeof A=="boolean"?w[E]=A:w[E]=A.clone(),!0;{let I=w[E];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return w[E]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(T){let S=T.uniforms,x=0,w=16;for(let E=0,I=S.length;E<I;E++){let v=Array.isArray(S[E])?S[E]:[S[E]];for(let y=0,L=v.length;y<L;y++){let U=v[y],V=Array.isArray(U.value)?U.value:[U.value];for(let G=0,W=V.length;G<W;G++){let H=V[G],Y=_(H),k=x%w,te=k%Y.boundary,P=k+te;x+=te,P!==0&&w-P<Y.storage&&(x+=w-P),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=Y.storage}}}let A=x%w;return A>0&&(x+=w-A),T.__size=x,T.__cache={},this}function _(T){let S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){let S=T.target;S.removeEventListener("dispose",m);let x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(let T in i)r.deleteBuffer(i[T]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var fh=class{constructor(e={}){let{canvas:t=dm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,T=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,w=!1;this._outputColorSpace=fn;let A=0,E=0,I=null,v=-1,y=null,L=new gt,U=new gt,V=null,G=new je(0),W=0,H=t.width,Y=t.height,k=1,te=null,P=null,le=new gt(0,0,H,Y),Ne=new gt(0,0,H,Y),Ze=!1,We=new Js,Fe=!1,J=!1,K=new bt,fe=new N,_e=new gt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function ct(){return I===null?k:1}let C=n;function Ce(b,O){return t.getContext(b,O)}try{let b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",ne,!1),C===null){let O="webgl2";if(C=Ce(O,b),C===null)throw Ce(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let we,ue,F,Je,ve,Ie,Xe,dt,R,M,z,$,Q,Z,ye,se,Re,de,re,he,Be,Pe,ce,qe;function D(){we=new Wy(C),we.init(),Pe=new MS(C,we),ue=new Oy(C,we,e,Pe),F=new vS(C,we),ue.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),Je=new Yy(C),ve=new oS,Ie=new yS(C,we,F,ve,ue,Pe,Je),Xe=new zy(x),dt=new Gy(x),R=new j0(C),ce=new Fy(C,R),M=new Xy(C,R,Je,ce),z=new Jy(C,M,R,Je),re=new Zy(C,ue,Ie),se=new By(ve),$=new sS(x,Xe,dt,we,ue,ce,se),Q=new wS(x,ve),Z=new lS,ye=new pS(we),de=new Uy(x,Xe,dt,F,z,f,l),Re=new _S(x,z,ue),qe=new ES(C,Je,ue,F),he=new Ny(C,we,Je),Be=new qy(C,we,Je),Je.programs=$.programs,x.capabilities=ue,x.extensions=we,x.properties=ve,x.renderLists=Z,x.shadowMap=Re,x.state=F,x.info=Je}D();let ie=new Ef(x,C);this.xr=ie,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let b=we.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=we.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(H,Y,!1))},this.getSize=function(b){return b.set(H,Y)},this.setSize=function(b,O,X=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,Y=O,t.width=Math.floor(b*k),t.height=Math.floor(O*k),X===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(H*k,Y*k).floor()},this.setDrawingBufferSize=function(b,O,X){H=b,Y=O,k=X,t.width=Math.floor(b*X),t.height=Math.floor(O*X),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(le)},this.setViewport=function(b,O,X,q){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,O,X,q),F.viewport(L.copy(le).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(Ne)},this.setScissor=function(b,O,X,q){b.isVector4?Ne.set(b.x,b.y,b.z,b.w):Ne.set(b,O,X,q),F.scissor(U.copy(Ne).multiplyScalar(k).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(b){F.setScissorTest(Ze=b)},this.setOpaqueSort=function(b){te=b},this.setTransparentSort=function(b){P=b},this.getClearColor=function(b){return b.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,X=!0){let q=0;if(b){let B=!1;if(I!==null){let ee=I.texture.format;B=ee===Lc||ee===Dc||ee===Ic}if(B){let ee=I.texture.type,ae=ee===Ti||ee===Rr||ee===no||ee===ro||ee===Rc||ee===Pc,Ee=de.getClearColor(),Me=de.getClearAlpha(),ze=Ee.r,Ue=Ee.g,Le=Ee.b;ae?(g[0]=ze,g[1]=Ue,g[2]=Le,g[3]=Me,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=ze,_[1]=Ue,_[2]=Le,_[3]=Me,C.clearBufferiv(C.COLOR,0,_))}else q|=C.COLOR_BUFFER_BIT}O&&(q|=C.DEPTH_BUFFER_BIT),X&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),de.dispose(),Z.dispose(),ye.dispose(),ve.dispose(),Xe.dispose(),dt.dispose(),z.dispose(),ce.dispose(),qe.dispose(),$.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",$e),ie.removeEventListener("sessionend",pe),He.stop()};function oe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let b=Je.autoReset,O=Re.enabled,X=Re.autoUpdate,q=Re.needsUpdate,B=Re.type;D(),Je.autoReset=b,Re.enabled=O,Re.autoUpdate=X,Re.needsUpdate=q,Re.type=B}function ne(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function j(b){let O=b.target;O.removeEventListener("dispose",j),Se(O)}function Se(b){Ve(b),ve.remove(b)}function Ve(b){let O=ve.get(b).programs;O!==void 0&&(O.forEach(function(X){$.releaseProgram(X)}),b.isShaderMaterial&&$.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,X,q,B,ee){O===null&&(O=Te);let ae=B.isMesh&&B.matrixWorld.determinant()<0,Ee=mt(b,O,X,q,B);F.setMaterial(q,ae);let Me=X.index,ze=1;if(q.wireframe===!0){if(Me=M.getWireframeAttribute(X),Me===void 0)return;ze=2}let Ue=X.drawRange,Le=X.attributes.position,Qe=Ue.start*ze,ot=(Ue.start+Ue.count)*ze;ee!==null&&(Qe=Math.max(Qe,ee.start*ze),ot=Math.min(ot,(ee.start+ee.count)*ze)),Me!==null?(Qe=Math.max(Qe,0),ot=Math.min(ot,Me.count)):Le!=null&&(Qe=Math.max(Qe,0),ot=Math.min(ot,Le.count));let Nt=ot-Qe;if(Nt<0||Nt===1/0)return;ce.setup(B,q,Ee,X,Me);let At,yt=he;if(Me!==null&&(At=R.get(Me),yt=Be,yt.setIndex(At)),B.isMesh)q.wireframe===!0?(F.setLineWidth(q.wireframeLinewidth*ct()),yt.setMode(C.LINES)):yt.setMode(C.TRIANGLES);else if(B.isLine){let Ge=q.linewidth;Ge===void 0&&(Ge=1),F.setLineWidth(Ge*ct()),B.isLineSegments?yt.setMode(C.LINES):B.isLineLoop?yt.setMode(C.LINE_LOOP):yt.setMode(C.LINE_STRIP)}else B.isPoints?yt.setMode(C.POINTS):B.isSprite&&yt.setMode(C.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Xs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))yt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ge=B._multiDrawStarts,It=B._multiDrawCounts,ft=B._multiDrawCount,Gn=Me?R.get(Me).bytesPerElement:1,ws=ve.get(q).currentProgram.getUniforms();for(let Wn=0;Wn<ft;Wn++)ws.setValue(C,"_gl_DrawID",Wn),yt.render(Ge[Wn]/Gn,It[Wn])}else if(B.isInstancedMesh)yt.renderInstances(Qe,Nt,B.count);else if(X.isInstancedBufferGeometry){let Ge=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,It=Math.min(X.instanceCount,Ge);yt.renderInstances(Qe,Nt,It)}else yt.render(Qe,Nt)};function ut(b,O,X){b.transparent===!0&&b.side===Di&&b.forceSinglePass===!1?(b.side=En,b.needsUpdate=!0,Vt(b,O,X),b.side=$i,b.needsUpdate=!0,Vt(b,O,X),b.side=Di):Vt(b,O,X)}this.compile=function(b,O,X=null){X===null&&(X=b),p=ye.get(X),p.init(O),S.push(p),X.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),b!==X&&b.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let q=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ee=B.material;if(ee)if(Array.isArray(ee))for(let ae=0;ae<ee.length;ae++){let Ee=ee[ae];ut(Ee,X,B),q.add(Ee)}else ut(ee,X,B),q.add(ee)}),p=S.pop(),q},this.compileAsync=function(b,O,X=null){let q=this.compile(b,O,X);return new Promise(B=>{function ee(){if(q.forEach(function(ae){ve.get(ae).currentProgram.isReady()&&q.delete(ae)}),q.size===0){B(b);return}setTimeout(ee,10)}we.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let xe=null;function De(b){xe&&xe(b)}function $e(){He.stop()}function pe(){He.start()}let He=new qm;He.setAnimationLoop(De),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(b){xe=b,ie.setAnimationLoop(b),b===null?He.stop():He.start()},ie.addEventListener("sessionstart",$e),ie.addEventListener("sessionend",pe),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(O),O=ie.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,O,I),p=ye.get(b,S.length),p.init(O),S.push(p),K.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),We.setFromProjectionMatrix(K,vi,O.reversedDepth),J=this.localClippingEnabled,Fe=se.init(this.clippingPlanes,J),m=Z.get(b,T.length),m.init(),T.push(m),ie.enabled===!0&&ie.isPresenting===!0){let ee=x.xr.getDepthSensingMesh();ee!==null&&Oe(ee,O,-1/0,x.sortObjects)}Oe(b,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(te,P),ke=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ke&&de.addToRenderList(m,b),this.info.render.frame++,Fe===!0&&se.beginShadows();let X=p.state.shadowsArray;Re.render(X,b,O),Fe===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,B=m.transmissive;if(p.setupLights(),O.isArrayCamera){let ee=O.cameras;if(B.length>0)for(let ae=0,Ee=ee.length;ae<Ee;ae++){let Me=ee[ae];kt(q,B,b,Me)}ke&&de.render(b);for(let ae=0,Ee=ee.length;ae<Ee;ae++){let Me=ee[ae];Ye(m,b,Me,Me.viewport)}}else B.length>0&&kt(q,B,b,O),ke&&de.render(b),Ye(m,b,O);I!==null&&E===0&&(Ie.updateMultisampleRenderTarget(I),Ie.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(x,b,O),ce.resetDefaultState(),v=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],Fe===!0&&se.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Oe(b,O,X,q){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||We.intersectsSprite(b)){q&&_e.setFromMatrixPosition(b.matrixWorld).applyMatrix4(K);let ae=z.update(b),Ee=b.material;Ee.visible&&m.push(b,ae,Ee,X,_e.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||We.intersectsObject(b))){let ae=z.update(b),Ee=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),_e.copy(b.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),_e.copy(ae.boundingSphere.center)),_e.applyMatrix4(b.matrixWorld).applyMatrix4(K)),Array.isArray(Ee)){let Me=ae.groups;for(let ze=0,Ue=Me.length;ze<Ue;ze++){let Le=Me[ze],Qe=Ee[Le.materialIndex];Qe&&Qe.visible&&m.push(b,ae,Qe,X,_e.z,Le)}}else Ee.visible&&m.push(b,ae,Ee,X,_e.z,null)}}let ee=b.children;for(let ae=0,Ee=ee.length;ae<Ee;ae++)Oe(ee[ae],O,X,q)}function Ye(b,O,X,q){let B=b.opaque,ee=b.transmissive,ae=b.transparent;p.setupLightsView(X),Fe===!0&&se.setGlobalState(x.clippingPlanes,X),q&&F.viewport(L.copy(q)),B.length>0&&tt(B,O,X),ee.length>0&&tt(ee,O,X),ae.length>0&&tt(ae,O,X),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function kt(b,O,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Ri(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float")?io:Ti,minFilter:Cr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));let ee=p.state.transmissionRenderTarget[q.id],ae=q.viewport||L;ee.setSize(ae.z*x.transmissionResolutionScale,ae.w*x.transmissionResolutionScale);let Ee=x.getRenderTarget(),Me=x.getActiveCubeFace(),ze=x.getActiveMipmapLevel();x.setRenderTarget(ee),x.getClearColor(G),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),ke&&de.render(X);let Ue=x.toneMapping;x.toneMapping=tr;let Le=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Fe===!0&&se.setGlobalState(x.clippingPlanes,q),tt(b,X,q),Ie.updateMultisampleRenderTarget(ee),Ie.updateRenderTargetMipmap(ee),we.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ot=0,Nt=O.length;ot<Nt;ot++){let At=O[ot],yt=At.object,Ge=At.geometry,It=At.material,ft=At.group;if(It.side===Di&&yt.layers.test(q.layers)){let Gn=It.side;It.side=En,It.needsUpdate=!0,Rt(yt,X,q,Ge,It,ft),It.side=Gn,It.needsUpdate=!0,Qe=!0}}Qe===!0&&(Ie.updateMultisampleRenderTarget(ee),Ie.updateRenderTargetMipmap(ee))}x.setRenderTarget(Ee,Me,ze),x.setClearColor(G,W),Le!==void 0&&(q.viewport=Le),x.toneMapping=Ue}function tt(b,O,X){let q=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ee=b.length;B<ee;B++){let ae=b[B],Ee=ae.object,Me=ae.geometry,ze=ae.group,Ue=ae.material;Ue.allowOverride===!0&&q!==null&&(Ue=q),Ee.layers.test(X.layers)&&Rt(Ee,O,X,Me,Ue,ze)}}function Rt(b,O,X,q,B,ee){b.onBeforeRender(x,O,X,q,B,ee),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(x,O,X,q,b,ee),B.transparent===!0&&B.side===Di&&B.forceSinglePass===!1?(B.side=En,B.needsUpdate=!0,x.renderBufferDirect(X,O,q,B,b,ee),B.side=$i,B.needsUpdate=!0,x.renderBufferDirect(X,O,q,B,b,ee),B.side=Di):x.renderBufferDirect(X,O,q,B,b,ee),b.onAfterRender(x,O,X,q,B,ee)}function Vt(b,O,X){O.isScene!==!0&&(O=Te);let q=ve.get(b),B=p.state.lights,ee=p.state.shadowsArray,ae=B.state.version,Ee=$.getParameters(b,B.state,ee,O,X),Me=$.getProgramCacheKey(Ee),ze=q.programs;q.environment=b.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(b.isMeshStandardMaterial?dt:Xe).get(b.envMap||q.environment),q.envMapRotation=q.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,ze===void 0&&(b.addEventListener("dispose",j),ze=new Map,q.programs=ze);let Ue=ze.get(Me);if(Ue!==void 0){if(q.currentProgram===Ue&&q.lightsStateVersion===ae)return vt(b,Ee),Ue}else Ee.uniforms=$.getUniforms(b),b.onBeforeCompile(Ee,x),Ue=$.acquireProgram(Ee,Me),ze.set(Me,Ue),q.uniforms=Ee.uniforms;let Le=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Le.clippingPlanes=se.uniform),vt(b,Ee),q.needsLights=Et(b),q.lightsStateVersion=ae,q.needsLights&&(Le.ambientLightColor.value=B.state.ambient,Le.lightProbe.value=B.state.probe,Le.directionalLights.value=B.state.directional,Le.directionalLightShadows.value=B.state.directionalShadow,Le.spotLights.value=B.state.spot,Le.spotLightShadows.value=B.state.spotShadow,Le.rectAreaLights.value=B.state.rectArea,Le.ltc_1.value=B.state.rectAreaLTC1,Le.ltc_2.value=B.state.rectAreaLTC2,Le.pointLights.value=B.state.point,Le.pointLightShadows.value=B.state.pointShadow,Le.hemisphereLights.value=B.state.hemi,Le.directionalShadowMap.value=B.state.directionalShadowMap,Le.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Le.spotShadowMap.value=B.state.spotShadowMap,Le.spotLightMatrix.value=B.state.spotLightMatrix,Le.spotLightMap.value=B.state.spotLightMap,Le.pointShadowMap.value=B.state.pointShadowMap,Le.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Ue,q.uniformsList=null,Ue}function wt(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=lo.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function vt(b,O){let X=ve.get(b);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function mt(b,O,X,q,B){O.isScene!==!0&&(O=Te),Ie.resetTextureUnits();let ee=O.fog,ae=q.isMeshStandardMaterial?O.environment:null,Ee=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Jr,Me=(q.isMeshStandardMaterial?dt:Xe).get(q.envMap||ae),ze=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ue=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Le=!!X.morphAttributes.position,Qe=!!X.morphAttributes.normal,ot=!!X.morphAttributes.color,Nt=tr;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Nt=x.toneMapping);let At=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,yt=At!==void 0?At.length:0,Ge=ve.get(q),It=p.state.lights;if(Fe===!0&&(J===!0||b!==y)){let Sn=b===y&&q.id===v;se.setState(q,b,Sn)}let ft=!1;q.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==It.state.version||Ge.outputColorSpace!==Ee||B.isBatchedMesh&&Ge.batching===!1||!B.isBatchedMesh&&Ge.batching===!0||B.isBatchedMesh&&Ge.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ge.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ge.instancing===!1||!B.isInstancedMesh&&Ge.instancing===!0||B.isSkinnedMesh&&Ge.skinning===!1||!B.isSkinnedMesh&&Ge.skinning===!0||B.isInstancedMesh&&Ge.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ge.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ge.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ge.instancingMorph===!1&&B.morphTexture!==null||Ge.envMap!==Me||q.fog===!0&&Ge.fog!==ee||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==se.numPlanes||Ge.numIntersection!==se.numIntersection)||Ge.vertexAlphas!==ze||Ge.vertexTangents!==Ue||Ge.morphTargets!==Le||Ge.morphNormals!==Qe||Ge.morphColors!==ot||Ge.toneMapping!==Nt||Ge.morphTargetsCount!==yt)&&(ft=!0):(ft=!0,Ge.__version=q.version);let Gn=Ge.currentProgram;ft===!0&&(Gn=Vt(q,O,B));let ws=!1,Wn=!1,Io=!1,Dt=Gn.getUniforms(),ri=Ge.uniforms;if(F.useProgram(Gn.program)&&(ws=!0,Wn=!0,Io=!0),q.id!==v&&(v=q.id,Wn=!0),ws||y!==b){F.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Dt.setValue(C,"projectionMatrix",b.projectionMatrix),Dt.setValue(C,"viewMatrix",b.matrixWorldInverse);let Fn=Dt.map.cameraPosition;Fn!==void 0&&Fn.setValue(C,fe.setFromMatrixPosition(b.matrixWorld)),ue.logarithmicDepthBuffer&&Dt.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Dt.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Wn=!0,Io=!0)}if(B.isSkinnedMesh){Dt.setOptional(C,B,"bindMatrix"),Dt.setOptional(C,B,"bindMatrixInverse");let Sn=B.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Dt.setValue(C,"boneTexture",Sn.boneTexture,Ie))}B.isBatchedMesh&&(Dt.setOptional(C,B,"batchingTexture"),Dt.setValue(C,"batchingTexture",B._matricesTexture,Ie),Dt.setOptional(C,B,"batchingIdTexture"),Dt.setValue(C,"batchingIdTexture",B._indirectTexture,Ie),Dt.setOptional(C,B,"batchingColorTexture"),B._colorsTexture!==null&&Dt.setValue(C,"batchingColorTexture",B._colorsTexture,Ie));let si=X.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&re.update(B,X,Gn),(Wn||Ge.receiveShadow!==B.receiveShadow)&&(Ge.receiveShadow=B.receiveShadow,Dt.setValue(C,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ri.envMap.value=Me,ri.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(ri.envMapIntensity.value=O.environmentIntensity),Wn&&(Dt.setValue(C,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&Hn(ri,Io),ee&&q.fog===!0&&Q.refreshFogUniforms(ri,ee),Q.refreshMaterialUniforms(ri,q,k,Y,p.state.transmissionRenderTarget[b.id]),lo.upload(C,wt(Ge),ri,Ie)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(lo.upload(C,wt(Ge),ri,Ie),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Dt.setValue(C,"center",B.center),Dt.setValue(C,"modelViewMatrix",B.modelViewMatrix),Dt.setValue(C,"normalMatrix",B.normalMatrix),Dt.setValue(C,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Sn=q.uniformsGroups;for(let Fn=0,nu=Sn.length;Fn<nu;Fn++){let Vr=Sn[Fn];qe.update(Vr,Gn),qe.bind(Vr,Gn)}}return Gn}function Hn(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Et(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,O,X){let q=ve.get(b);q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ve.get(b.texture).__webglTexture=O,ve.get(b.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let X=ve.get(b);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};let Mn=C.createFramebuffer();this.setRenderTarget=function(b,O=0,X=0){I=b,A=O,E=X;let q=!0,B=null,ee=!1,ae=!1;if(b){let Me=ve.get(b);if(Me.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(C.FRAMEBUFFER,null),q=!1;else if(Me.__webglFramebuffer===void 0)Ie.setupRenderTarget(b);else if(Me.__hasExternalTextures)Ie.rebindTextures(b,ve.get(b.texture).__webglTexture,ve.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Le=b.depthTexture;if(Me.__boundDepthTexture!==Le){if(Le!==null&&ve.has(Le)&&(b.width!==Le.image.width||b.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(b)}}let ze=b.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ae=!0);let Ue=ve.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ue[O])?B=Ue[O][X]:B=Ue[O],ee=!0):b.samples>0&&Ie.useMultisampledRTT(b)===!1?B=ve.get(b).__webglMultisampledFramebuffer:Array.isArray(Ue)?B=Ue[X]:B=Ue,L.copy(b.viewport),U.copy(b.scissor),V=b.scissorTest}else L.copy(le).multiplyScalar(k).floor(),U.copy(Ne).multiplyScalar(k).floor(),V=Ze;if(X!==0&&(B=Mn),F.bindFramebuffer(C.FRAMEBUFFER,B)&&q&&F.drawBuffers(b,B),F.viewport(L),F.scissor(U),F.setScissorTest(V),ee){let Me=ve.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,X)}else if(ae){let Me=O;for(let ze=0;ze<b.textures.length;ze++){let Ue=ve.get(b.textures[ze]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ze,Ue.__webglTexture,X,Me)}}else if(b!==null&&X!==0){let Me=ve.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Me.__webglTexture,X)}v=-1},this.readRenderTargetPixels=function(b,O,X,q,B,ee,ae,Ee=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=ve.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ae!==void 0&&(Me=Me[ae]),Me){F.bindFramebuffer(C.FRAMEBUFFER,Me);try{let ze=b.textures[Ee],Ue=ze.format,Le=ze.type;if(!ue.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-q&&X>=0&&X<=b.height-B&&(b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ee),C.readPixels(O,X,q,B,Pe.convert(Ue),Pe.convert(Le),ee))}finally{let ze=I!==null?ve.get(I).__webglFramebuffer:null;F.bindFramebuffer(C.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(b,O,X,q,B,ee,ae,Ee=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=ve.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ae!==void 0&&(Me=Me[ae]),Me)if(O>=0&&O<=b.width-q&&X>=0&&X<=b.height-B){F.bindFramebuffer(C.FRAMEBUFFER,Me);let ze=b.textures[Ee],Ue=ze.format,Le=ze.type;if(!ue.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Qe),C.bufferData(C.PIXEL_PACK_BUFFER,ee.byteLength,C.STREAM_READ),b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ee),C.readPixels(O,X,q,B,Pe.convert(Ue),Pe.convert(Le),0);let ot=I!==null?ve.get(I).__webglFramebuffer:null;F.bindFramebuffer(C.FRAMEBUFFER,ot);let Nt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await pm(C,Nt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Qe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ee),C.deleteBuffer(Qe),C.deleteSync(Nt),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,X=0){let q=Math.pow(2,-X),B=Math.floor(b.image.width*q),ee=Math.floor(b.image.height*q),ae=O!==null?O.x:0,Ee=O!==null?O.y:0;Ie.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,X,0,0,ae,Ee,B,ee),F.unbindTexture()};let ii=C.createFramebuffer(),Zt=C.createFramebuffer();this.copyTextureToTexture=function(b,O,X=null,q=null,B=0,ee=null){ee===null&&(B!==0?(Xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=B,B=0):ee=0);let ae,Ee,Me,ze,Ue,Le,Qe,ot,Nt,At=b.isCompressedTexture?b.mipmaps[ee]:b.image;if(X!==null)ae=X.max.x-X.min.x,Ee=X.max.y-X.min.y,Me=X.isBox3?X.max.z-X.min.z:1,ze=X.min.x,Ue=X.min.y,Le=X.isBox3?X.min.z:0;else{let si=Math.pow(2,-B);ae=Math.floor(At.width*si),Ee=Math.floor(At.height*si),b.isDataArrayTexture?Me=At.depth:b.isData3DTexture?Me=Math.floor(At.depth*si):Me=1,ze=0,Ue=0,Le=0}q!==null?(Qe=q.x,ot=q.y,Nt=q.z):(Qe=0,ot=0,Nt=0);let yt=Pe.convert(O.format),Ge=Pe.convert(O.type),It;O.isData3DTexture?(Ie.setTexture3D(O,0),It=C.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ie.setTexture2DArray(O,0),It=C.TEXTURE_2D_ARRAY):(Ie.setTexture2D(O,0),It=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);let ft=C.getParameter(C.UNPACK_ROW_LENGTH),Gn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ws=C.getParameter(C.UNPACK_SKIP_PIXELS),Wn=C.getParameter(C.UNPACK_SKIP_ROWS),Io=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,At.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,At.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ze),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ue),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Le);let Dt=b.isDataArrayTexture||b.isData3DTexture,ri=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let si=ve.get(b),Sn=ve.get(O),Fn=ve.get(si.__renderTarget),nu=ve.get(Sn.__renderTarget);F.bindFramebuffer(C.READ_FRAMEBUFFER,Fn.__webglFramebuffer),F.bindFramebuffer(C.DRAW_FRAMEBUFFER,nu.__webglFramebuffer);for(let Vr=0;Vr<Me;Vr++)Dt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ve.get(b).__webglTexture,B,Le+Vr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ve.get(O).__webglTexture,ee,Nt+Vr)),C.blitFramebuffer(ze,Ue,ae,Ee,Qe,ot,ae,Ee,C.DEPTH_BUFFER_BIT,C.NEAREST);F.bindFramebuffer(C.READ_FRAMEBUFFER,null),F.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(B!==0||b.isRenderTargetTexture||ve.has(b)){let si=ve.get(b),Sn=ve.get(O);F.bindFramebuffer(C.READ_FRAMEBUFFER,ii),F.bindFramebuffer(C.DRAW_FRAMEBUFFER,Zt);for(let Fn=0;Fn<Me;Fn++)Dt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,si.__webglTexture,B,Le+Fn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,si.__webglTexture,B),ri?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Sn.__webglTexture,ee,Nt+Fn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Sn.__webglTexture,ee),B!==0?C.blitFramebuffer(ze,Ue,ae,Ee,Qe,ot,ae,Ee,C.COLOR_BUFFER_BIT,C.NEAREST):ri?C.copyTexSubImage3D(It,ee,Qe,ot,Nt+Fn,ze,Ue,ae,Ee):C.copyTexSubImage2D(It,ee,Qe,ot,ze,Ue,ae,Ee);F.bindFramebuffer(C.READ_FRAMEBUFFER,null),F.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ri?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(It,ee,Qe,ot,Nt,ae,Ee,Me,yt,Ge,At.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(It,ee,Qe,ot,Nt,ae,Ee,Me,yt,At.data):C.texSubImage3D(It,ee,Qe,ot,Nt,ae,Ee,Me,yt,Ge,At):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ee,Qe,ot,ae,Ee,yt,Ge,At.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ee,Qe,ot,At.width,At.height,yt,At.data):C.texSubImage2D(C.TEXTURE_2D,ee,Qe,ot,ae,Ee,yt,Ge,At);C.pixelStorei(C.UNPACK_ROW_LENGTH,ft),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Gn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ws),C.pixelStorei(C.UNPACK_SKIP_ROWS,Wn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Io),ee===0&&O.generateMipmaps&&C.generateMipmap(It),F.unbindTexture()},this.initRenderTarget=function(b){ve.get(b).__webglFramebuffer===void 0&&Ie.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ie.setTextureCube(b,0):b.isData3DTexture?Ie.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ie.setTexture2DArray(b,0):Ie.setTexture2D(b,0),F.unbindTexture()},this.resetState=function(){A=0,E=0,I=null,F.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};function ir(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function rg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},uo={duration:.5,overwrite:!1,delay:0},qf,an,Pt,hi=1e8,St=1/hi,Ff=Math.PI*2,AS=Ff/4,CS=0,sg=Math.sqrt,RS=Math.cos,PS=Math.sin,Qt=function(e){return typeof e=="string"},Ot=function(e){return typeof e=="function"},sr=function(e){return typeof e=="number"},bh=function(e){return typeof e>"u"},Oi=function(e){return typeof e=="object"},zn=function(e){return e!==!1},Yf=function(){return typeof window<"u"},ph=function(e){return Ot(e)||Qt(e)},og=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},mn=Array.isArray,Nf=/(?:-?\.?\d|\.)+/gi,Zf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ls=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Cf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Jf=/[+-]=-?[.\d]+/,ag=/[^,'"\[\]\s]+/gi,IS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ut,Fi,Of,$f,$n={},xh={},lg,cg=function(e){return(xh=fo(e,$n))&&gn},Th=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ua=function(e,t){return!t&&console.warn(e)},hg=function(e,t){return e&&($n[e]=t)&&xh&&(xh[e]=t)||$n},Fa=function(){return 0},DS={suppressEvents:!0,isStart:!0,kill:!1},mh={suppressEvents:!0,kill:!1},LS={suppressEvents:!0},Kf={},Ir=[],Bf={},ug,On={},Rf={},Km=30,gh=[],Qf="",jf=function(e){var t=e[0],n,i;if(Oi(t)||Ot(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=gh.length;i--&&!gh[i].targetTest(t););n=gh[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new id(e[i],n)))||e.splice(i,1);return e},Dr=function(e){return e._gsap||jf(ui(e))[0]._gsap},ed=function(e,t,n){return(n=e[t])&&Ot(n)?e[t]():bh(n)&&e.getAttribute&&e.getAttribute(t)||n},An=function(e,t){return(e=e.split(",")).forEach(t)||e},Bt=function(e){return Math.round(e*1e5)/1e5||0},Xt=function(e){return Math.round(e*1e7)/1e7||0},cs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},US=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},vh=function(){var e=Ir.length,t=Ir.slice(0),n,i;for(Bf={},Ir.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},td=function(e){return!!(e._initted||e._startAt||e.add)},fg=function(e,t,n,i){Ir.length&&!an&&vh(),e.render(t,n,i||!!(an&&t<0&&td(e))),Ir.length&&!an&&vh()},dg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ag).length<2?t:Qt(e)?e.trim():e},pg=function(e){return e},Kn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},FS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},fo=function(e,t){for(var n in t)e[n]=t[n];return e},Qm=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Oi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},yh=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ia=function(e){var t=e.parent||Ut,n=e.keyframes?FS(mn(e.keyframes)):Kn;if(zn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},NS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},mg=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},wh=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Lr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ss=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},OS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},zf=function(e,t,n,i){return e._startAt&&(an?e._startAt.revert(mh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},BS=function r(e){return!e||e._ts&&r(e.parent)},jm=function(e){return e._repeat?po(e._tTime,e=e.duration()+e._rDelay)*e:0},po=function(e,t){var n=Math.floor(e=Xt(e/t));return e&&n===e?n-1:n},Mh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Eh=function(e){return e._end=Xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||St)||0))},Ah=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Eh(e),n._dirty||ss(n,e)),e},gg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Mh(e.rawTime(),t),(!t._dur||Ba(0,t.totalDuration(),n)-t._tTime>St)&&t.render(n,!0)),ss(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-St}},Ni=function(e,t,n,i){return t.parent&&Lr(t),t._start=Xt((sr(n)?n:n||e!==Ut?ci(e,n,t):e._time)+t._delay),t._end=Xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),mg(e,t,"_first","_last",e._sort?"_start":0),kf(t)||(e._recent=t),i||gg(e,t),e._ts<0&&Ah(e,e._tTime),e},_g=function(e,t){return($n.ScrollTrigger||Th("scrollTrigger",t))&&$n.ScrollTrigger.create(t,e)},xg=function(e,t,n,i,s){if(od(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!an&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ug!==Bn.frame)return Ir.push(e),e._lazy=[s,i],1},zS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},kf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},kS=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&zS(e)&&!(!e._initted&&kf(e))||(e._ts<0||e._dp._ts<0)&&!kf(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=Ba(0,e._tDur,t),h=po(l,a),e._yoyo&&h&1&&(o=1-o),h!==po(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||an||i||e._zTime===St||!t&&e._zTime){if(!e._initted&&xg(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?St:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&zf(e,t,n,!0),e._onUpdate&&!n&&Jn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Jn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Lr(e,1),!n&&!an&&(Jn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},VS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},mo=function(e,t,n,i){var s=e._repeat,o=Xt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Xt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Ah(e,e._tTime=e._tDur*a),e.parent&&Eh(e),n||ss(e.parent,e),e},eg=function(e){return e instanceof on?ss(e):mo(e,e._dur)},HS={_start:0,endTime:Fa,totalDuration:Fa},ci=function r(e,t,n){var i=e.labels,s=e._recent||HS,o=e.duration()>=hi?s.endTime(!1):e._dur,a,l,c;return Qt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(mn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Da=function(e,t,n){var i=sr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=zn(l.vars.inherit)&&l.parent;o.immediateRender=zn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ht(t[0],o,t[s+1])},Ur=function(e,t){return e||e===0?t(e):t},Ba=function(e,t,n){return n<e?e:n>t?t:n},ln=function(e,t){return!Qt(e)||!(t=IS.exec(e))?"":t[1]},GS=function(e,t,n){return Ur(n,function(i){return Ba(e,t,i)})},Vf=[].slice,vg=function(e,t){return e&&Oi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Oi(e[0]))&&!e.nodeType&&e!==Fi},WS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Qt(i)&&!t||vg(i,1)?(s=n).push.apply(s,ui(i)):n.push(i)})||n},ui=function(e,t,n){return Pt&&!t&&Pt.selector?Pt.selector(e):Qt(e)&&!n&&(Of||!go())?Vf.call((t||$f).querySelectorAll(e),0):mn(e)?WS(e,n):vg(e)?Vf.call(e,0):e?[e]:[]},Hf=function(e){return e=ui(e)[0]||Ua("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ui(t,n.querySelectorAll?n:n===e?Ua("Invalid scope")||$f.createElement("div"):e)}},yg=function(e){return e.sort(function(){return .5-Math.random()})},Mg=function(e){if(Ot(e))return e;var t=Oi(e)?e:{each:e},n=os(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return Qt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,g){var _=(g||t).length,m=o[_],p,T,S,x,w,A,E,I,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,hi])[1],!v){for(E=-hi;E<(E=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=o[_]=[],p=l?Math.min(v,_)*h-.5:i%v,T=v===hi?0:l?_*u/v-.5:i/v|0,E=0,I=hi,A=0;A<_;A++)S=A%v-p,x=T-(A/v|0),m[A]=w=c?Math.abs(c==="y"?x:S):sg(S*S+x*x),w>E&&(E=w),w<I&&(I=w);i==="random"&&yg(m),m.max=E-I,m.min=I,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=ln(t.amount||t.each)||0,n=n&&_<0?Pg(n):n}return _=(m[d]-m.min)/m.max||0,Xt(m.b+(n?n(_):_)*m.v)+m.u}},Gf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Xt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(sr(n)?0:ln(n))}},Sg=function(e,t){var n=mn(e),i,s;return!n&&Oi(e)&&(i=n=e.radius||hi,e.values?(e=ui(e.values),(s=!sr(e[0]))&&(i*=i)):e=Gf(e.increment)),Ur(t,n?Ot(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=hi,h=0,u=e.length,d,f;u--;)s?(d=e[u].x-a,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?e[h]:o,s||h===o||sr(o)?h:h+ln(o)}:Gf(e))},bg=function(e,t,n,i){return Ur(mn(e)?!t:n===!0?!!(n=0):!i,function(){return mn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},XS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},qS=function(e,t){return function(n){return e(parseFloat(n))+(t||ln(n))}},YS=function(e,t,n){return wg(e,t,0,1,n)},Tg=function(e,t,n){return Ur(n,function(i){return e[~~t(i)]})},ZS=function r(e,t,n){var i=t-e;return mn(e)?Tg(e,r(0,e.length),t):Ur(n,function(s){return(i+(s-e)%i)%i+e})},JS=function r(e,t,n){var i=t-e,s=i*2;return mn(e)?Tg(e,r(0,e.length-1),t):Ur(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},_o=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?ag:Nf),n+=e.substr(t,i-t)+bg(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},wg=function(e,t,n,i,s){var o=t-e,a=i-n;return Ur(s,function(l){return n+((l-e)/o*a||0)})},$S=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=Qt(e),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(mn(e)&&!mn(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=t}else i||(e=fo(mn(e)?[]:{},e));if(!h){for(l in t)rd.call(a,e,l,"get",t[l]);s=function(g){return cd(g,a)||(o?e.p:e)}}}return Ur(n,s)},tg=function(e,t,n){var i=e.labels,s=hi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Jn=function(e,t,n){var i=e.vars,s=i[t],o=Pt,a=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ir.length&&vh(),a&&(Pt=a),h=l?s.apply(c,l):s.call(c),Pt=o,h},Ra=function(e){return Lr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!an),e.progress()<1&&Jn(e,"onInterrupt"),e},ho,Eg=[],Ag=function(e){if(e)if(e=!e.name&&e.default||e,Yf()||e.headless){var t=e.name,n=Ot(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Fa,render:cd,add:rd,kill:fb,modifier:ub,rawVars:0},o={targetTest:0,get:0,getSetter:Ch,aliases:{},register:0};if(go(),e!==i){if(On[t])return;Kn(i,Kn(yh(e,s),o)),fo(i.prototype,fo(s,yh(e,o))),On[i.prop=t]=i,e.targetTest&&(gh.push(i),Kf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}hg(t,i),e.register&&e.register(gn,i,Cn)}else Eg.push(e)},Mt=255,Pa={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},Pf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Mt+.5|0},Cg=function(e,t,n){var i=e?sr(e)?[e>>16,e>>8&Mt,e&Mt]:0:Pa.black,s,o,a,l,c,h,u,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Pa[e])i=Pa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Mt,i&Mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Mt,e&Mt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Nf),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Pf(l+1/3,s,o),i[1]=Pf(l,s,o),i[2]=Pf(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Zf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Nf)||Pa.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Mt,o=i[1]/Mt,a=i[2]/Mt,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(o-a)/f+(o<a?6:0):u===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Rg=function(e){var t=[],n=[],i=-1;return e.split(rr).forEach(function(s){var o=s.match(ls)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},ng=function(e,t,n){var i="",s=(e+i).match(rr),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return e;if(s=s.map(function(d){return(d=Cg(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Rg(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(rr,"1").split(ls),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(rr),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},rr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Pa)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),KS=/hsl[a]?\(/,nd=function(e){var t=e.join(" "),n;if(rr.lastIndex=0,rr.test(t))return n=KS.test(t),e[1]=ng(e[1],n),e[0]=ng(e[0],n,Rg(e[1])),!0},Na,Bn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,d,f,g=function _(m){var p=r()-i,T=m===!0,S,x,w,A;if((p>e||p<0)&&(n+=p-t),i+=p,w=i-n,S=w-o,(S>0||T)&&(A=++u.frame,d=w-u.time*1e3,u.time=w=w/1e3,o+=S+(S>=s?4:s-S),x=1),T||(l=c(_)),x)for(f=0;f<a.length;f++)a[f](w,d,A,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){lg&&(!Of&&Yf()&&(Fi=Of=window,$f=Fi.document||{},$n.gsap=gn,(Fi.gsapVersions||(Fi.gsapVersions=[])).push(gn.version),cg(xh||Fi.GreenSockGlobals||!Fi.gsap&&Fi||{}),Eg.forEach(Ag)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Na=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Na=0,c=Fa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,p,T){var S=p?function(x,w,A,E){m(x,w,A,E),u.remove(S)}:m;return u.remove(m),a[T?"unshift":"push"](S),go(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u})(),go=function(){return!Na&&Bn.wake()},lt={},QS=/^[\d.\-M][\d.\-,\s]/,jS=/["']/g,eb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(jS,"").trim():+c,i=l.substr(a+1).trim();return t},tb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},nb=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[eb(t[1])]:tb(e).split(",").map(dg)):lt._CE&&QS.test(e)?lt._CE("",e):n},Pg=function(e){return function(t){return 1-e(1-t)}},Ig=function r(e,t){for(var n=e._first,i;n;)n instanceof on?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},os=function(e,t){return e&&(Ot(e)?e:lt[e]||nb(e))||t},hs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return An(e,function(a){lt[a]=$n[a]=s,lt[o=a.toLowerCase()]=n;for(var l in s)lt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[a+"."+l]=s[l]}),s},Dg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},If=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Ff*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*PS((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Dg(a);return s=Ff/s,l.config=function(c,h){return r(e,c,h)},l},Df=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Dg(n);return i.config=function(s){return r(e,s)},i};An("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;hs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;hs("Elastic",If("in"),If("out"),If());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};hs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);hs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});hs("Circ",function(r){return-(sg(1-r*r)-1)});hs("Sine",function(r){return r===1?1:-RS(r*AS)+1});hs("Back",Df("in"),Df("out"),Df());lt.SteppedEase=lt.steps=$n.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-St;return function(a){return((i*Ba(0,o,a)|0)+s)*n}}};uo.ease=lt["quad.out"];An("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Qf+=r+","+r+"Params,"});var id=function(e,t){this.id=CS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ed,this.set=t?t.getSetter:Ch},Oa=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,mo(this,+t.duration,1,1),this.data=t.data,Pt&&(this._ctx=Pt,Pt.data.push(this)),Na||Bn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,mo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(go(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ah(this,n),!s._dp||s.parent||gg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ni(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===St||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),fg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+jm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+jm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?po(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-St?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Mh(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-St?0:this._rts,this.totalTime(Ba(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Eh(this),OS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(go(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==St&&(this._tTime-=St)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ni(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(zn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Mh(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=LS);var i=an;return an=n,td(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),an=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,eg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,eg(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ci(this,n),zn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,zn(i)),this._dur||(this._zTime=-St),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-St:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-St,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-St)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Ot(n)?n:pg,a=function(){var c=i.then;i.then=null,Ot(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Ra(this)},r})();Kn(Oa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-St,_prom:0,_ps:!1,_rts:1});var on=(function(r){rg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=zn(n.sortChildren),Ut&&Ni(n.parent||Ut,ir(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&_g(ir(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Da(0,arguments,this),this},t.from=function(i,s,o){return Da(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Da(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Ia(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ht(i,s,ci(this,o),1),this},t.call=function(i,s,o){return Ni(this,Ht.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ht(i,o,ci(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Ia(o).immediateRender=zn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},t.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,Ia(a).immediateRender=zn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Xt(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,m,p,T,S,x,w,A,E;if(this!==Ut&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,x=this._start,S=this._ts,p=!S,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=Xt(h%m),h===l?(_=this._repeat,d=c):(w=Xt(h/m),_=~~w,_&&_===w&&(d=c,_--),d>c&&(d=c)),w=po(this._tTime,m),!a&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),A&&_&1&&(d=c-d,E=1),_!==w&&!this._lock){var I=A&&w&1,v=I===(A&&_&1);if(_<w&&(I=!I),a=I?0:h%c?c:h,this._lock=1,this.render(a||(E?0:Xt(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Jn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Ig(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=VS(this,Xt(a),Xt(d)),T&&(h-=d-(d=T._start))),this._tTime=h,this._time=d,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&!w&&(Jn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&T!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){T=0,g&&(h+=this._zTime=-St);break}}f=g}else{f=this._last;for(var y=i<0?i:d;f;){if(g=f._prev,(f._act||y<=f._end)&&f._ts&&T!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,s,o||an&&td(f)),d!==this._time||!this._ts&&!p){T=0,g&&(h+=this._zTime=y?-St:St);break}}f=g}}if(T&&!s&&(this.pause(),T.render(d>=a?0:-St)._zTime=d>=a?1:-1,this._ts))return this._start=x,Eh(this),this.render(i,s,o);this._onUpdate&&!s&&Jn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Lr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Jn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(sr(s)||(s=ci(this,s,i)),!(i instanceof Oa)){if(mn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Qt(i))return this.addLabel(i,s);if(Ot(i))i=Ht.delayedCall(0,i);else return this}return this!==i?Ni(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-hi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ht?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Qt(i)?this.removeLabel(i):Ot(i)?this.killTweensOf(i):(i.parent===this&&wh(this,i),i===this._recent&&(this._recent=this._last),ss(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xt(Bn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ci(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Ht.delayedCall(0,s||Fa,o);return a.data="isPause",this._hasPause=1,Ni(this,a,ci(this,i))},t.removePause=function(i){var s=this._first;for(i=ci(this,i);s;)s._start===i&&s.data==="isPause"&&Lr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Pr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ui(i),l=this._first,c=sr(s),h;l;)l instanceof Ht?US(l._targets,a)&&(c?(!Pr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ci(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,g=Ht.to(o,Kn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||St,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&mo(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Kn({startAt:{time:ci(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),tg(this,ci(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),tg(this,ci(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+St)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ss(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ss(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=hi,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ni(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;mo(o,o===Ut&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ut._ts&&(fg(Ut,Mh(i,Ut)),ug=Bn.frame),Bn.frame>=Km){Km+=kn.autoSleep||120;var s=Ut._first;if((!s||!s._ts)&&kn.autoSleep&&Bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Bn.sleep()}}},e})(Oa);Kn(on.prototype,{_lock:0,_hasPause:0,_forcing:0});var ib=function(e,t,n,i,s,o,a){var l=new Cn(this._pt,e,t,0,1,ld,null,s),c=0,h=0,u,d,f,g,_,m,p,T;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=_o(i)),o&&(T=[n,i],o(T,e,t),n=T[0],i=T[1]),d=n.match(Cf)||[];u=Cf.exec(i);)g=u[0],_=i.substring(c,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?cs(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=Cf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Jf.test(i)||p)&&(l.e=0),this._pt=l,l},rd=function(e,t,n,i,s,o,a,l,c,h){Ot(i)&&(i=i(s||0,e,o));var u=e[t],d=n!=="get"?n:Ot(u)?c?e[t.indexOf("set")||!Ot(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=Ot(u)?c?lb:Fg:ad,g;if(Qt(i)&&(~i.indexOf("random(")&&(i=_o(i)),i.charAt(1)==="="&&(g=cs(d,i)+(ln(d)||0),(g||g===0)&&(i=g))),!h||d!==i||Wf)return!isNaN(d*i)&&i!==""?(g=new Cn(this._pt,e,t,+d||0,i-(d||0),typeof u=="boolean"?hb:Ng,0,f),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!u&&!(t in e)&&Th(t,i),ib.call(this,e,t,d,i,f,l||kn.stringFilter,c))},rb=function(e,t,n,i,s){if(Ot(e)&&(e=La(e,s,t,n,i)),!Oi(e)||e.style&&e.nodeType||mn(e)||og(e))return Qt(e)?La(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=La(e[a],s,t,n,i);return o},sd=function(e,t,n,i,s,o){var a,l,c,h;if(On[e]&&(a=new On[e]).init(s,a.rawVars?t[e]:rb(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Cn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ho))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Pr,Wf,od=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,T=p&&p.data==="nested"?p.vars.targets:m,S=e._overwrite==="auto"&&!qf,x=e.timeline,w,A,E,I,v,y,L,U,V,G,W,H,Y;if(x&&(!d||!s)&&(s="none"),e._ease=os(s,uo.ease),e._yEase=u?Pg(os(u===!0?s:u,uo.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(U=m[0]?Dr(m[0]).harness:0,H=U&&i[U.prop],w=yh(i,Kf),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&g?mh:DS),_._lazy=0),o){if(Lr(e._startAt=Ht.set(m,Kn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&zn(l),startAt:null,delay:0,onUpdate:c&&function(){return Jn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an||!a&&!f)&&e._startAt.revert(mh),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(a=!1),E=Kn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&zn(l),immediateRender:a,stagger:0,parent:p},w),H&&(E[U.prop]=H),Lr(e._startAt=Ht.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(an?e._startAt.revert(mh):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,St,St);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&zn(l)||l&&!g,A=0;A<m.length;A++){if(v=m[A],L=v._gsap||jf(m)[A]._gsap,e._ptLookup[A]=G={},Bf[L.id]&&Ir.length&&vh(),W=T===m?A:T.indexOf(v),U&&(V=new U).init(v,H||w,e,W,T)!==!1&&(e._pt=I=new Cn(e._pt,v,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(k){G[k]=I}),V.priority&&(y=1)),!U||H)for(E in w)On[E]&&(V=sd(E,w,e,W,v,T))?V.priority&&(y=1):G[E]=I=rd.call(e,v,E,"get",w[E],W,T,0,i.stringFilter);e._op&&e._op[A]&&e.kill(v,e._op[A]),S&&e._pt&&(Pr=e,Ut.killTweensOf(v,G,e.globalTime(t)),Y=!e.parent,Pr=0),e._pt&&l&&(Bf[L.id]=1)}y&&hd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,d&&t<=0&&x.render(hi,!0,!0)},sb=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Wf=1,e.vars[t]="+=0",od(e,a),Wf=0,l?Ua(t+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Bt(n)+ln(u.e)),u.b&&(u.b=h.s+ln(u.b))},ob=function(e,t){var n=e[0]?Dr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=fo({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},ab=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(mn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},La=function(e,t,n,i,s){return Ot(e)?e.call(t,n,i,s):Qt(e)&&~e.indexOf("random(")?_o(e):e},Lg=Qf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ug={};An(Lg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ug[r]=1});var Ht=(function(r){rg(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ia(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,T=i.parent||Ut,S=(mn(n)||og(n)?sr(n[0]):"length"in i)?[n]:ui(n),x,w,A,E,I,v,y,L;if(a._targets=S.length?jf(S):Ua("GSAP target "+n+" not found. https://gsap.com",!kn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||ph(c)||ph(h)){if(i=a.vars,x=a.timeline=new on({data:"nested",defaults:_||{},targets:T&&T.data==="nested"?T.vars.targets:S}),x.kill(),x.parent=x._dp=ir(a),x._start=0,d||ph(c)||ph(h)){if(E=S.length,y=d&&Mg(d),Oi(d))for(I in d)~Lg.indexOf(I)&&(L||(L={}),L[I]=d[I]);for(w=0;w<E;w++)A=yh(i,Ug),A.stagger=0,p&&(A.yoyoEase=p),L&&fo(A,L),v=S[w],A.duration=+La(c,ir(a),w,v,S),A.delay=(+La(h,ir(a),w,v,S)||0)-a._delay,!d&&E===1&&A.delay&&(a._delay=h=A.delay,a._start+=h,A.delay=0),x.to(v,A,y?y(w,v,S):0),x._ease=lt.none;x.duration()?c=h=0:a.timeline=0}else if(g){Ia(Kn(x.vars.defaults,{ease:"none"})),x._ease=os(g.ease||i.ease||"none");var U=0,V,G,W;if(mn(g))g.forEach(function(H){return x.to(S,H,">")}),x.duration();else{A={};for(I in g)I==="ease"||I==="easeEach"||ab(I,g[I],A,g.easeEach);for(I in A)for(V=A[I].sort(function(H,Y){return H.t-Y.t}),U=0,w=0;w<V.length;w++)G=V[w],W={ease:G.e,duration:(G.t-(w?V[w-1].t:0))/100*c},W[I]=G.v,x.to(S,W,U),U+=W.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return f===!0&&!qf&&(Pr=ir(a),Ut.killTweensOf(S),Pr=0),Ni(T,ir(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===Xt(T._time)&&zn(u)&&BS(ir(a))&&T.data!=="nested")&&(a._tTime=-St,a.render(Math.max(0,-h)||0)),m&&_g(ir(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-St&&!h?l:i<St?0:i,d,f,g,_,m,p,T,S,x;if(!c)kS(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(d=Xt(u%_),u===l?(g=this._repeat,d=c):(m=Xt(u/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(x=this._yEase,d=c-d),m=po(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(S&&this._yEase&&Ig(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(Xt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(xg(this,h?i:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(x||this._ease)(d/c),this._from&&(this.ratio=T=1-T),!a&&u&&!s&&!m&&(Jn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(T,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&zf(this,i,s,o),Jn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Jn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&zf(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Lr(this,1),!s&&!(h&&!a)&&(u||a||p)&&(Jn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Na||Bn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||od(this,c),h=this._ease(c/this._dur),sb(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Ah(this,0),this.parent||mg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ra(this):this.scrollTrigger&&this.scrollTrigger.kill(!!an),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Pr&&Pr.vars.overwrite!==!0)._first||Ra(this),this.parent&&o!==this.timeline.totalDuration()&&mo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ui(i):a,c=this._ptLookup,h=this._pt,u,d,f,g,_,m,p;if((!s||s==="all")&&NS(a,l))return s==="all"&&(this._pt=0),Ra(this);for(u=this._op=this._op||[],s!=="all"&&(Qt(s)&&(_={},An(s,function(T){return _[T]=1}),s=_),s=ob(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(u[p]=s,g=d,f={}):(f=u[p]=u[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&wh(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Ra(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Da(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Da(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Ut.killTweensOf(i,s,o)},e})(Oa);Kn(Ht.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});An("staggerTo,staggerFrom,staggerFromTo",function(r){Ht[r]=function(){var e=new on,t=Vf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var ad=function(e,t,n){return e[t]=n},Fg=function(e,t,n){return e[t](n)},lb=function(e,t,n,i){return e[t](i.fp,n)},cb=function(e,t,n){return e.setAttribute(t,n)},Ch=function(e,t){return Ot(e[t])?Fg:bh(e[t])&&e.setAttribute?cb:ad},Ng=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},hb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ld=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},cd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ub=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},fb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?wh(this,t,"_pt"):t.dep||(n=1),t=i;return!n},db=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},hd=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Cn=(function(){function r(t,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Ng,this.d=l||this,this.set=c||ad,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=db,this.m=n,this.mt=s,this.tween=i},r})();An(Qf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Kf[r]=1});$n.TweenMax=$n.TweenLite=Ht;$n.TimelineLite=$n.TimelineMax=on;Ut=new on({sortChildren:!1,defaults:uo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});kn.stringFilter=nd;var as=[],_h={},pb=[],ig=0,mb=0,Lf=function(e){return(_h[e]||pb).map(function(t){return t()})},Xf=function(){var e=Date.now(),t=[];e-ig>2&&(Lf("matchMediaInit"),as.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Fi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Lf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ig=e,Lf("matchMedia"))},Og=(function(){function r(t,n){this.selector=n&&Hf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=mb++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ot(n)&&(s=i,i=n,n=Ot);var o=this,a=function(){var c=Pt,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=Hf(s)),Pt=o,u=i.apply(o,arguments),Ot(u)&&o._r.push(u),Pt=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Ot?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Pt;Pt=null,n(this),Pt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ht&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof on?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ht)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=as.length;o--;)as[o].id===this.id&&as.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),gb=(function(){function r(t){this.contexts=[],this.scope=t,Pt&&Pt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Oi(n)||(n={matches:n});var o=new Og(0,s||this.scope),a=o.conditions={},l,c,h;Pt&&!o.selector&&(o.selector=Pt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Fi.matchMedia(n[c]),l&&(as.indexOf(o)<0&&as.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Xf):l.addEventListener("change",Xf)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Sh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ag(i)})},timeline:function(e){return new on(e)},getTweensOf:function(e,t){return Ut.getTweensOf(e,t)},getProperty:function(e,t,n,i){Qt(e)&&(e=ui(e)[0]);var s=Dr(e||{}).get,o=n?pg:dg;return n==="native"&&(n=""),e&&(t?o((On[t]&&On[t].get||s)(e,t,n,i)):function(a,l,c){return o((On[a]&&On[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ui(e),e.length>1){var i=e.map(function(h){return gn.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var o=On[t],a=Dr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;ho._pt=0,u.init(e,n?h+n:h,ho,0,[e]),u.render(1,u),ho._pt&&cd(1,ho)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=gn.to(e,Kn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return Ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=os(e.ease,uo.ease)),Qm(uo,e||{})},config:function(e){return Qm(kn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!On[a]&&!$n[a]&&Ua(t+" effect requires "+a+" plugin.")}),Rf[t]=function(a,l,c){return n(ui(a),Kn(l||{},s),c)},o&&(on.prototype[t]=function(a,l,c){return this.add(Rf[t](a,Oi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=os(t)},parseEase:function(e,t){return arguments.length?os(e,t):lt},getById:function(e){return Ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new on(e),i,s;for(n.smoothChildTiming=zn(e.smoothChildTiming),Ut.remove(n),n._dp=0,n._time=n._tTime=Ut._time,i=Ut._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ht&&i.vars.onComplete===i._targets[0]))&&Ni(n,i,i._start-i._delay),i=s;return Ni(Ut,n,0),n},context:function(e,t){return e?new Og(e,t):Pt},matchMedia:function(e){return new gb(e)},matchMediaRefresh:function(){return as.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Xf()},addEventListener:function(e,t){var n=_h[e]||(_h[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=_h[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:ZS,wrapYoyo:JS,distribute:Mg,random:bg,snap:Sg,normalize:YS,getUnit:ln,clamp:GS,splitColor:Cg,toArray:ui,selector:Hf,mapRange:wg,pipe:XS,unitize:qS,interpolate:$S,shuffle:yg},install:cg,effects:Rf,ticker:Bn,updateRoot:on.updateRoot,plugins:On,globalTimeline:Ut,core:{PropTween:Cn,globals:hg,Tween:Ht,Timeline:on,Animation:Oa,getCache:Dr,_removeLinkedListItem:wh,reverting:function(){return an},context:function(e){return e&&Pt&&(Pt.data.push(e),e._ctx=Pt),Pt},suppressOverwrites:function(e){return qf=e}}};An("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Sh[r]=Ht[r]});Bn.add(on.updateRoot);ho=Sh.to({},{duration:0});var _b=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},xb=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=_b(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Uf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Qt(s)&&(l={},An(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}xb(a,s)}}}},gn=Sh.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)an?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Uf("roundProps",Gf),Uf("modifiers"),Uf("snap",Sg))||Sh;Ht.version=on.version=gn.version="3.13.0";lg=1;Yf()&&go();var vb=lt.Power0,yb=lt.Power1,Mb=lt.Power2,Sb=lt.Power3,bb=lt.Power4,Tb=lt.Linear,wb=lt.Quad,Eb=lt.Cubic,Ab=lt.Quart,Cb=lt.Quint,Rb=lt.Strong,Pb=lt.Elastic,Ib=lt.Back,Db=lt.SteppedEase,Lb=lt.Bounce,Ub=lt.Sine,Fb=lt.Expo,Nb=lt.Circ;var Bg,Fr,vo,gd,ps,Ob,zg,_d,Bb=function(){return typeof window<"u"},ar={},ds=180/Math.PI,yo=Math.PI/180,xo=Math.atan2,kg=1e8,xd=/([A-Z])/g,zb=/(left|right|width|margin|padding|x)/i,kb=/[\s,\(]\S/,Bi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Vb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Hb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Gb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Zg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Jg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Wb=function(e,t,n){return e.style[t]=n},Xb=function(e,t,n){return e.style.setProperty(t,n)},qb=function(e,t,n){return e._gsap[t]=n},Yb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Zb=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Jb=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ft="transform",Vn=Ft+"Origin",$b=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in ar&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Bi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=or(i,a)}):this.tfm[e]=o.x?o[e]:or(i,e),e===Vn&&(this.tfm.zOrigin=o.zOrigin);else return Bi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ft)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Vn,t,"")),e=Ft}(s||t)&&this.props.push(e,t,s[e])},$g=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Kb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(xd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=_d(),(!s||!s.isStart)&&!n[Ft]&&($g(n),i.zOrigin&&n[Vn]&&(n[Vn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Kg=function(e,t){var n={target:e,props:[],revert:Kb,save:$b};return e._gsap||gn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Qg,dd=function(e,t){var n=Fr.createElementNS?Fr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Fr.createElement(e);return n&&n.style?n:Fr.createElement(e)},fi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(xd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Mo(t)||t,1)||""},Vg="O,Moz,ms,Ms,Webkit".split(","),Mo=function(e,t,n){var i=t||ps,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Vg[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Vg[o]:"")+e},pd=function(){Bb()&&window.document&&(Bg=window,Fr=Bg.document,vo=Fr.documentElement,ps=dd("div")||{style:{}},Ob=dd("div"),Ft=Mo(Ft),Vn=Ft+"Origin",ps.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qg=!!Mo("perspective"),_d=gn.core.reverting,gd=1)},Hg=function(e){var t=e.ownerSVGElement,n=dd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),vo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),vo.removeChild(n),s},Gg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},jg=function(e){var t,n;try{t=e.getBBox()}catch{t=Hg(e),n=1}return t&&(t.width||t.height)||n||(t=Hg(e)),t&&!t.width&&!t.x&&!t.y?{x:+Gg(e,["x","cx","x1"])||0,y:+Gg(e,["y","cy","y1"])||0,width:0,height:0}:t},e_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&jg(e))},ms=function(e,t){if(t){var n=e.style,i;t in ar&&t!==Vn&&(t=Ft),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(xd,"-$1").toLowerCase())):n.removeAttribute(t)}},Nr=function(e,t,n,i,s,o){var a=new Cn(e._pt,t,n,0,1,o?Jg:Zg);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Wg={deg:1,rad:1,turn:1},Qb={grid:1,flex:1},Or=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ps.style,l=zb.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",g,_,m,p;if(i===o||!s||Wg[i]||Wg[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&e_(e),(f||o==="%")&&(ar[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[h],Bt(f?s/g*u:s/100*g);if(a[l?"width":"height"]=u+(d?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Fr||!_.appendChild)&&(_=Fr.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Bn.time&&!m.uncache)return Bt(s/m.width*u);if(f&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=u+i,g=e[h],T?e.style[t]=T:ms(e,t)}else(f||o==="%")&&!Qb[fi(_,"display")]&&(a.position=fi(e,"position")),_===e&&(a.position="static"),_.appendChild(ps),g=ps[h],_.removeChild(ps),a.position="absolute";return l&&f&&(m=Dr(_),m.time=Bn.time,m.width=_[h]),Bt(d?g*s/u:g&&s?u/g*s:0)},or=function(e,t,n,i){var s;return gd||pd(),t in Bi&&t!=="transform"&&(t=Bi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ar[t]&&t!=="transform"?(s=Va(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ph(fi(e,Vn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Rh[t]&&Rh[t](e,t,n)||fi(e,t)||ed(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Or(e,t,s,n)+n:s},jb=function(e,t,n,i){if(!n||n==="none"){var s=Mo(t,e,1),o=s&&fi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=fi(e,"borderTopColor"))}var a=new Cn(this._pt,e.style,t,0,1,ld),l=0,c=0,h,u,d,f,g,_,m,p,T,S,x,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=fi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=fi(e,t)||i,_?e.style[t]=_:ms(e,t)),h=[n,i],nd(h),n=h[0],i=h[1],d=n.match(ls)||[],w=i.match(ls)||[],w.length){for(;u=ls.exec(i);)m=u[0],T=i.substring(l,u.index),g?g=(g+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),m.charAt(1)==="="&&(m=cs(f,m)+x),p=parseFloat(m),S=m.substr((p+"").length),l=ls.lastIndex-S.length,S||(S=S||kn.units[t]||x,l===i.length&&(i+=S,a.e+=S)),x!==S&&(f=Or(e,t,_,S)||0),a._pt={_next:a._pt,p:T||c===1?T:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Jg:Zg;return Jf.test(i)&&(a.e=0),this._pt=a,a},Xg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},eT=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Xg[n]||n,t[1]=Xg[i]||i,t.join(" ")},tT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ar[a]&&(l=1,a=a==="transformOrigin"?Vn:Ft),ms(n,a);l&&(ms(n,Ft),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Va(n,1),o.uncache=1,$g(i)))}},Rh={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Cn(e._pt,t,n,0,0,tT);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ka=[1,0,0,1,0,0],t_={},n_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},qg=function(e){var t=fi(e,Ft);return n_(t)?ka:t.substr(7).match(Zf).map(Bt)},vd=function(e,t){var n=e._gsap||Dr(e),i=e.style,s=qg(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ka:s):(s===ka&&!e.offsetParent&&e!==vo&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,vo.appendChild(e)),s=qg(e),l?i.display=l:ms(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):vo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},md=function(e,t,n,i,s,o){var a=e._gsap,l=s||vd(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],T=l[5],S=t.split(" "),x=parseFloat(S[0])||0,w=parseFloat(S[1])||0,A,E,I,v;n?l!==ka&&(E=f*m-g*_)&&(I=x*(m/E)+w*(-_/E)+(_*T-m*p)/E,v=x*(-g/E)+w*(f/E)-(f*T-g*p)/E,x=I,w=v):(A=jg(e),x=A.x+(~S[0].indexOf("%")?x/100*A.width:x),w=A.y+(~(S[1]||S[0]).indexOf("%")?w/100*A.height:w)),i||i!==!1&&a.smooth?(p=x-c,T=w-h,a.xOffset=u+(p*f+T*_)-p,a.yOffset=d+(p*g+T*m)-T):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Vn]="0px 0px",o&&(Nr(o,a,"xOrigin",c,x),Nr(o,a,"yOrigin",h,w),Nr(o,a,"xOffset",u,a.xOffset),Nr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+w)},Va=function(e,t){var n=e._gsap||new id(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=fi(e,Vn)||"0",h,u,d,f,g,_,m,p,T,S,x,w,A,E,I,v,y,L,U,V,G,W,H,Y,k,te,P,le,Ne,Ze,We,Fe;return h=u=d=_=m=p=T=S=x=0,f=g=1,n.svg=!!(e.getCTM&&e_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),i.scale=i.rotate=i.translate="none"),E=vd(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),md(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,E)),w=n.xOrigin||0,A=n.yOrigin||0,E!==ka&&(L=E[0],U=E[1],V=E[2],G=E[3],h=W=E[4],u=H=E[5],E.length===6?(f=Math.sqrt(L*L+U*U),g=Math.sqrt(G*G+V*V),_=L||U?xo(U,L)*ds:0,T=V||G?xo(V,G)*ds+_:0,T&&(g*=Math.abs(Math.cos(T*yo))),n.svg&&(h-=w-(w*L+A*V),u-=A-(w*U+A*G))):(Fe=E[6],Ze=E[7],P=E[8],le=E[9],Ne=E[10],We=E[11],h=E[12],u=E[13],d=E[14],I=xo(Fe,Ne),m=I*ds,I&&(v=Math.cos(-I),y=Math.sin(-I),Y=W*v+P*y,k=H*v+le*y,te=Fe*v+Ne*y,P=W*-y+P*v,le=H*-y+le*v,Ne=Fe*-y+Ne*v,We=Ze*-y+We*v,W=Y,H=k,Fe=te),I=xo(-V,Ne),p=I*ds,I&&(v=Math.cos(-I),y=Math.sin(-I),Y=L*v-P*y,k=U*v-le*y,te=V*v-Ne*y,We=G*y+We*v,L=Y,U=k,V=te),I=xo(U,L),_=I*ds,I&&(v=Math.cos(I),y=Math.sin(I),Y=L*v+U*y,k=W*v+H*y,U=U*v-L*y,H=H*v-W*y,L=Y,W=k),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Bt(Math.sqrt(L*L+U*U+V*V)),g=Bt(Math.sqrt(H*H+Fe*Fe)),I=xo(W,H),T=Math.abs(I)>2e-4?I*ds:0,x=We?1/(We<0?-We:We):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!n_(fi(e,Ft)),Y&&e.setAttribute("transform",Y))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(f*=-1,T+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Bt(f),n.scaleY=Bt(g),n.rotation=Bt(_)+a,n.rotationX=Bt(m)+a,n.rotationY=Bt(p)+a,n.skewX=T+a,n.skewY=S+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Vn]=Ph(c)),n.xOffset=n.yOffset=0,n.force3D=kn.force3D,n.renderTransform=n.svg?iT:Qg?i_:nT,n.uncache=0,n},Ph=function(e){return(e=e.split(" "))[0]+" "+e[1]},ud=function(e,t,n){var i=ln(t);return Bt(parseFloat(t)+parseFloat(Or(e,"x",n+"px",i)))+i},nT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,i_(e,t)},us="0deg",za="0px",fs=") ",i_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,T=n.target,S=n.zOrigin,x="",w=p==="auto"&&e&&e!==1||p===!0;if(S&&(u!==us||h!==us)){var A=parseFloat(h)*yo,E=Math.sin(A),I=Math.cos(A),v;A=parseFloat(u)*yo,v=Math.cos(A),o=ud(T,o,E*v*-S),a=ud(T,a,-Math.sin(A)*-S),l=ud(T,l,I*v*-S+S)}m!==za&&(x+="perspective("+m+fs),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(w||o!==za||a!==za||l!==za)&&(x+=l!==za||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+fs),c!==us&&(x+="rotate("+c+fs),h!==us&&(x+="rotateY("+h+fs),u!==us&&(x+="rotateX("+u+fs),(d!==us||f!==us)&&(x+="skew("+d+", "+f+fs),(g!==1||_!==1)&&(x+="scale("+g+", "+_+fs),T.style[Ft]=x||"translate(0, 0)"},iT=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,T=n.forceCSS,S=parseFloat(o),x=parseFloat(a),w,A,E,I,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=yo,c*=yo,w=Math.cos(l)*u,A=Math.sin(l)*u,E=Math.sin(l-c)*-d,I=Math.cos(l-c)*d,c&&(h*=yo,v=Math.tan(c-h),v=Math.sqrt(1+v*v),E*=v,I*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),w*=v,A*=v)),w=Bt(w),A=Bt(A),E=Bt(E),I=Bt(I)):(w=u,I=d,A=E=0),(S&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=Or(f,"x",o,"px"),x=Or(f,"y",a,"px")),(g||_||m||p)&&(S=Bt(S+g-(g*w+_*E)+m),x=Bt(x+_-(g*A+_*I)+p)),(i||s)&&(v=f.getBBox(),S=Bt(S+i/100*v.width),x=Bt(x+s/100*v.height)),v="matrix("+w+","+A+","+E+","+I+","+S+","+x+")",f.setAttribute("transform",v),T&&(f.style[Ft]=v)},rT=function(e,t,n,i,s){var o=360,a=Qt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ds:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*kg)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*kg)%o-~~(c/o)*o)),e._pt=d=new Cn(e._pt,t,n,i,c,Vb),d.e=h,d.u="deg",e._props.push(n),d},Yg=function(e,t){for(var n in t)e[n]=t[n];return e},sT=function(e,t,n){var i=Yg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ft]=t,a=Va(n,1),ms(n,Ft),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ft],o[Ft]=t,a=Va(n,1),o[Ft]=c);for(l in ar)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=ln(c),g=ln(h),u=f!==g?Or(n,l,c,g):parseFloat(c),d=parseFloat(h),e._pt=new Cn(e._pt,a,l,u,d-u,fd),e._pt.u=g||0,e._props.push(l));Yg(a,i)};An("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Rh[e>1?"border"+r:r]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(g){return or(a,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,u)}});var yd={name:"css",register:pd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,d,f,g,_,m,p,T,S,x,w,A,E,I;gd||pd(),this.styles=this.styles||Kg(e),I=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(On[_]&&sd(_,t,n,i,e,s)))){if(f=typeof h,g=Rh[_],f==="function"&&(h=h.call(n,i,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=_o(h)),g)g(this,e,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",rr.lastIndex=0,rr.test(c)||(m=ln(c),p=ln(h)),p?m!==p&&(c=Or(e,_,c,p)+p):m&&(h+=m),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),I.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Qt(c)&&~c.indexOf("random(")&&(c=_o(c)),ln(c+"")||c==="auto"||(c+=kn.units[_]||ln(or(e,_))||""),(c+"").charAt(1)==="="&&(c=or(e,_))):c=or(e,_),d=parseFloat(c),T=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),T&&(h=h.substr(2)),u=parseFloat(h),_ in Bi&&(_==="autoAlpha"&&(d===1&&or(e,"visibility")==="hidden"&&u&&(d=0),I.push("visibility",0,a.visibility),Nr(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Bi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in ar,S){if(this.styles.save(_),f==="string"&&h.substring(0,6)==="var(--"&&(h=fi(e,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),x||(w=e._gsap,w.renderTransform&&!t.parseTransform||Va(e,t.parseTransform),A=t.smoothOrigin!==!1&&w.smooth,x=this._pt=new Cn(this._pt,a,Ft,0,1,w.renderTransform,w,0,-1),x.dep=1),_==="scale")this._pt=new Cn(this._pt,w,"scaleY",w.scaleY,(T?cs(w.scaleY,T+u):u)-w.scaleY||0,fd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){I.push(Vn,0,a[Vn]),h=eT(h),w.svg?md(e,h,0,A,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==w.zOrigin&&Nr(this,w,"zOrigin",w.zOrigin,p),Nr(this,a,_,Ph(c),Ph(h)));continue}else if(_==="svgOrigin"){md(e,h,1,A,0,this);continue}else if(_ in t_){rT(this,w,_,d,T?cs(d,T+h):h);continue}else if(_==="smoothOrigin"){Nr(this,w,"smooth",w.smooth,h);continue}else if(_==="force3D"){w[_]=h;continue}else if(_==="transform"){sT(this,h,e);continue}}else _ in a||(_=Mo(_)||_);if(S||(u||u===0)&&(d||d===0)&&!kb.test(h)&&_ in a)m=(c+"").substr((d+"").length),u||(u=0),p=ln(h)||(_ in kn.units?kn.units[_]:m),m!==p&&(d=Or(e,_,c,p)),this._pt=new Cn(this._pt,S?w:a,_,d,(T?cs(d,T+u):u)-d,!S&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Gb:fd),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Hb);else if(_ in a)jb.call(this,e,_,c,T?T+h:h);else if(_ in e)this.add(e,_,c||e[_],T?T+h:h,i,s);else if(_!=="parseTransform"){Th(_,h);continue}S||(_ in a?I.push(_,0,a[_]):typeof e[_]=="function"?I.push(_,2,e[_]()):I.push(_,1,c||e[_])),o.push(_)}}E&&hd(this)},render:function(e,t){if(t.tween._time||!_d())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:or,aliases:Bi,getSetter:function(e,t,n){var i=Bi[t];return i&&i.indexOf(",")<0&&(t=i),t in ar&&t!==Vn&&(e._gsap.x||or(e,"x"))?n&&zg===n?t==="scale"?Yb:qb:(zg=n||{})&&(t==="scale"?Zb:Jb):e.style&&!bh(e.style[t])?Wb:~t.indexOf("-")?Xb:Ch(e,t)},core:{_removeProperty:ms,_getMatrix:vd}};gn.utils.checkPrefix=Mo;gn.core.getStyleSaver=Kg;(function(r,e,t,n){var i=An(r+","+e+","+t,function(s){ar[s]=1});An(e,function(s){kn.units[s]="deg",t_[s]=1}),Bi[i[13]]=r+","+e,An(n,function(s){var o=s.split(":");Bi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");An("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){kn.units[r]="px"});gn.registerPlugin(yd);var Qn=gn.registerPlugin(yd)||gn,WE=Qn.core.Tween;function r_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function oT(r,e,t){return e&&r_(r.prototype,e),t&&r_(r,t),r}var cn,Lh,aT,jn,Br,zr,bo,o_,gs,Ga,a_,lr,wi,l_,c_=function(){return cn||typeof window<"u"&&(cn=window.gsap)&&cn.registerPlugin&&cn},h_=1,So=[],it=[],Ei=[],Wa=Date.now,Md=function(e,t){return t},lT=function(){var e=Ga.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,it),i.push.apply(i,Ei),it=n,Ei=i,Md=function(o,a){return t[o](a)}},hr=function(e,t){return~Ei.indexOf(e)&&Ei[Ei.indexOf(e)+1][t]},Xa=function(e){return!!~a_.indexOf(e)},Pn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Rn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ih="scrollLeft",Dh="scrollTop",Sd=function(){return lr&&lr.isPressed||it.cache++},Uh=function(e,t){var n=function i(s){if(s||s===0){h_&&(jn.history.scrollRestoration="manual");var o=lr&&lr.isPressed;s=i.v=Math.round(s)||(lr&&lr.iOS?1:0),e(s),i.cacheID=it.cache,o&&Md("ss",s)}else(t||it.cache!==i.cacheID||Md("ref"))&&(i.cacheID=it.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},_n={s:Ih,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Uh(function(r){return arguments.length?jn.scrollTo(r,qt.sc()):jn.pageXOffset||Br[Ih]||zr[Ih]||bo[Ih]||0})},qt={s:Dh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:_n,sc:Uh(function(r){return arguments.length?jn.scrollTo(_n.sc(),r):jn.pageYOffset||Br[Dh]||zr[Dh]||bo[Dh]||0})},In=function(e,t){return(t&&t._ctx&&t._ctx.selector||cn.utils.toArray)(e)[0]||(typeof e=="string"&&cn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},cT=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},cr=function(e,t){var n=t.s,i=t.sc;Xa(e)&&(e=Br.scrollingElement||zr);var s=it.indexOf(e),o=i===qt.sc?1:2;!~s&&(s=it.push(e)-1),it[s+o]||Pn(e,"scroll",Sd);var a=it[s+o],l=a||(it[s+o]=Uh(hr(e,n),!0)||(Xa(e)?i:Uh(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=cn.getProperty(e,"scrollBehavior")==="smooth"),l},Fh=function(e,t,n){var i=e,s=e,o=Wa(),a=o,l=t||50,c=Math.max(500,l*3),h=function(g,_){var m=Wa();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},u=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,m=s,p=Wa();return(g||g===0)&&g!==i&&h(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:h,reset:u,getVelocity:d}},Ha=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},s_=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},u_=function(){Ga=cn.core.globals().ScrollTrigger,Ga&&Ga.core&&lT()},f_=function(e){return cn=e||c_(),!Lh&&cn&&typeof document<"u"&&document.body&&(jn=window,Br=document,zr=Br.documentElement,bo=Br.body,a_=[jn,Br,zr,bo],aT=cn.utils.clamp,l_=cn.core.context||function(){},gs="onpointerenter"in bo?"pointer":"mouse",o_=zt.isTouch=jn.matchMedia&&jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,wi=zt.eventTypes=("ontouchstart"in zr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in zr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return h_=0},500),u_(),Lh=1),Lh};_n.op=qt;it.cache=0;var zt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Lh||f_(cn)||console.warn("Please gsap.registerPlugin(Observer)"),Ga||u_();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,d=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,T=n.onDrag,S=n.onPress,x=n.onRelease,w=n.onRight,A=n.onLeft,E=n.onUp,I=n.onDown,v=n.onChangeX,y=n.onChangeY,L=n.onChange,U=n.onToggleX,V=n.onToggleY,G=n.onHover,W=n.onHoverEnd,H=n.onMove,Y=n.ignoreCheck,k=n.isNormalizer,te=n.onGestureStart,P=n.onGestureEnd,le=n.onWheel,Ne=n.onEnable,Ze=n.onDisable,We=n.onClick,Fe=n.scrollSpeed,J=n.capture,K=n.allowClicks,fe=n.lockAxis,_e=n.onLockAxis;this.target=a=In(a)||zr,this.vars=n,f&&(f=cn.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,Fe=Fe||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(jn.getComputedStyle(bo).lineHeight)||22);var Te,ke,ct,C,Ce,we,ue,F=this,Je=0,ve=0,Ie=n.passive||!h&&n.passive!==!1,Xe=cr(a,_n),dt=cr(a,qt),R=Xe(),M=dt(),z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&wi[0]==="pointerdown",$=Xa(a),Q=a.ownerDocument||Br,Z=[0,0,0],ye=[0,0,0],se=0,Re=function(){return se=Wa()},de=function(De,$e){return(F.event=De)&&f&&cT(De.target,f)||$e&&z&&De.pointerType!=="touch"||Y&&Y(De,$e)},re=function(){F._vx.reset(),F._vy.reset(),ke.pause(),u&&u(F)},he=function(){var De=F.deltaX=s_(Z),$e=F.deltaY=s_(ye),pe=Math.abs(De)>=i,He=Math.abs($e)>=i;L&&(pe||He)&&L(F,De,$e,Z,ye),pe&&(w&&F.deltaX>0&&w(F),A&&F.deltaX<0&&A(F),v&&v(F),U&&F.deltaX<0!=Je<0&&U(F),Je=F.deltaX,Z[0]=Z[1]=Z[2]=0),He&&(I&&F.deltaY>0&&I(F),E&&F.deltaY<0&&E(F),y&&y(F),V&&F.deltaY<0!=ve<0&&V(F),ve=F.deltaY,ye[0]=ye[1]=ye[2]=0),(C||ct)&&(H&&H(F),ct&&(m&&ct===1&&m(F),T&&T(F),ct=0),C=!1),we&&!(we=!1)&&_e&&_e(F),Ce&&(le(F),Ce=!1),Te=0},Be=function(De,$e,pe){Z[pe]+=De,ye[pe]+=$e,F._vx.update(De),F._vy.update($e),c?Te||(Te=requestAnimationFrame(he)):he()},Pe=function(De,$e){fe&&!ue&&(F.axis=ue=Math.abs(De)>Math.abs($e)?"x":"y",we=!0),ue!=="y"&&(Z[2]+=De,F._vx.update(De,!0)),ue!=="x"&&(ye[2]+=$e,F._vy.update($e,!0)),c?Te||(Te=requestAnimationFrame(he)):he()},ce=function(De){if(!de(De,1)){De=Ha(De,h);var $e=De.clientX,pe=De.clientY,He=$e-F.x,Oe=pe-F.y,Ye=F.isDragging;F.x=$e,F.y=pe,(Ye||(He||Oe)&&(Math.abs(F.startX-$e)>=s||Math.abs(F.startY-pe)>=s))&&(ct=Ye?2:1,Ye||(F.isDragging=!0),Pe(He,Oe))}},qe=F.onPress=function(xe){de(xe,1)||xe&&xe.button||(F.axis=ue=null,ke.pause(),F.isPressed=!0,xe=Ha(xe),Je=ve=0,F.startX=F.x=xe.clientX,F.startY=F.y=xe.clientY,F._vx.reset(),F._vy.reset(),Pn(k?a:Q,wi[1],ce,Ie,!0),F.deltaX=F.deltaY=0,S&&S(F))},D=F.onRelease=function(xe){if(!de(xe,1)){Rn(k?a:Q,wi[1],ce,!0);var De=!isNaN(F.y-F.startY),$e=F.isDragging,pe=$e&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),He=Ha(xe);!pe&&De&&(F._vx.reset(),F._vy.reset(),h&&K&&cn.delayedCall(.08,function(){if(Wa()-se>300&&!xe.defaultPrevented){if(xe.target.click)xe.target.click();else if(Q.createEvent){var Oe=Q.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,jn,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),xe.target.dispatchEvent(Oe)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,u&&$e&&!k&&ke.restart(!0),ct&&he(),p&&$e&&p(F),x&&x(F,pe)}},ie=function(De){return De.touches&&De.touches.length>1&&(F.isGesturing=!0)&&te(De,F.isDragging)},oe=function(){return(F.isGesturing=!1)||P(F)},me=function(De){if(!de(De)){var $e=Xe(),pe=dt();Be(($e-R)*Fe,(pe-M)*Fe,1),R=$e,M=pe,u&&ke.restart(!0)}},ne=function(De){if(!de(De)){De=Ha(De,h),le&&(Ce=!0);var $e=(De.deltaMode===1?l:De.deltaMode===2?jn.innerHeight:1)*g;Be(De.deltaX*$e,De.deltaY*$e,0),u&&!k&&ke.restart(!0)}},j=function(De){if(!de(De)){var $e=De.clientX,pe=De.clientY,He=$e-F.x,Oe=pe-F.y;F.x=$e,F.y=pe,C=!0,u&&ke.restart(!0),(He||Oe)&&Pe(He,Oe)}},Se=function(De){F.event=De,G(F)},Ve=function(De){F.event=De,W(F)},ut=function(De){return de(De)||Ha(De,h)&&We(F)};ke=F._dc=cn.delayedCall(d||.25,re).pause(),F.deltaX=F.deltaY=0,F._vx=Fh(0,50,!0),F._vy=Fh(0,50,!0),F.scrollX=Xe,F.scrollY=dt,F.isDragging=F.isGesturing=F.isPressed=!1,l_(this),F.enable=function(xe){return F.isEnabled||(Pn($?Q:a,"scroll",Sd),o.indexOf("scroll")>=0&&Pn($?Q:a,"scroll",me,Ie,J),o.indexOf("wheel")>=0&&Pn(a,"wheel",ne,Ie,J),(o.indexOf("touch")>=0&&o_||o.indexOf("pointer")>=0)&&(Pn(a,wi[0],qe,Ie,J),Pn(Q,wi[2],D),Pn(Q,wi[3],D),K&&Pn(a,"click",Re,!0,!0),We&&Pn(a,"click",ut),te&&Pn(Q,"gesturestart",ie),P&&Pn(Q,"gestureend",oe),G&&Pn(a,gs+"enter",Se),W&&Pn(a,gs+"leave",Ve),H&&Pn(a,gs+"move",j)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=C=ct=!1,F._vx.reset(),F._vy.reset(),R=Xe(),M=dt(),xe&&xe.type&&qe(xe),Ne&&Ne(F)),F},F.disable=function(){F.isEnabled&&(So.filter(function(xe){return xe!==F&&Xa(xe.target)}).length||Rn($?Q:a,"scroll",Sd),F.isPressed&&(F._vx.reset(),F._vy.reset(),Rn(k?a:Q,wi[1],ce,!0)),Rn($?Q:a,"scroll",me,J),Rn(a,"wheel",ne,J),Rn(a,wi[0],qe,J),Rn(Q,wi[2],D),Rn(Q,wi[3],D),Rn(a,"click",Re,!0),Rn(a,"click",ut),Rn(Q,"gesturestart",ie),Rn(Q,"gestureend",oe),Rn(a,gs+"enter",Se),Rn(a,gs+"leave",Ve),Rn(a,gs+"move",j),F.isEnabled=F.isPressed=F.isDragging=!1,Ze&&Ze(F))},F.kill=F.revert=function(){F.disable();var xe=So.indexOf(F);xe>=0&&So.splice(xe,1),lr===F&&(lr=0)},So.push(F),k&&Xa(a)&&(lr=F),F.enable(_)},oT(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();zt.version="3.13.0";zt.create=function(r){return new zt(r)};zt.register=f_;zt.getAll=function(){return So.slice()};zt.getById=function(r){return So.filter(function(e){return e.vars.id===r})[0]};c_()&&cn.registerPlugin(zt);var Ae,Eo,st,Tt,ni,pt,Od,Kh,rl,Qa,Ya,Nh,xn,tu,Pd,Ln,d_,p_,Ao,P_,bd,I_,Dn,Id,D_,L_,kr,Dd,Bd,Co,zd,Qh,Ld,Td,Oh=1,vn=Date.now,wd=vn(),mi=0,Za=0,m_=function(e,t,n){var i=ti(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},g_=function(e,t){return t&&(!ti(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},hT=function r(){return Za&&requestAnimationFrame(r)},__=function(){return tu=1},x_=function(){return tu=0},zi=function(e){return e},Ja=function(e){return Math.round(e*1e5)/1e5||0},U_=function(){return typeof window<"u"},F_=function(){return Ae||U_()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},Ss=function(e){return!!~Od.indexOf(e)},N_=function(e){return(e==="Height"?zd:st["inner"+e])||ni["client"+e]||pt["client"+e]},O_=function(e){return hr(e,"getBoundingClientRect")||(Ss(e)?function(){return $h.width=st.innerWidth,$h.height=zd,$h}:function(){return ur(e)})},uT=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=hr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?N_(s):e["client"+s])||0}},fT=function(e,t){return!t||~Ei.indexOf(e)?O_(e):function(){return $h}},ki=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=hr(e,n))?o()-O_(e)()[s]:Ss(e)?(ni[n]||pt[n])-N_(i):e[n]-e["offset"+i])},Bh=function(e,t){for(var n=0;n<Ao.length;n+=3)(!t||~t.indexOf(Ao[n+1]))&&e(Ao[n],Ao[n+1],Ao[n+2])},ti=function(e){return typeof e=="string"},yn=function(e){return typeof e=="function"},$a=function(e){return typeof e=="number"},_s=function(e){return typeof e=="object"},qa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ed=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},To=Math.abs,B_="left",z_="top",kd="right",Vd="bottom",vs="width",ys="height",ja="Right",el="Left",tl="Top",nl="Bottom",Yt="padding",di="margin",Po="Width",Hd="Height",jt="px",pi=function(e){return st.getComputedStyle(e)},dT=function(e){var t=pi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},v_=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ur=function(e,t){var n=t&&pi(e)[Pd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ae.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},jh=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},k_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},pT=function(e){return function(t){return Ae.utils.snap(k_(e),t)}},Gd=function(e){var t=Ae.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},mT=function(e){return function(t,n){return Gd(k_(e))(t,n.direction)}},zh=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},nn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},tn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},kh=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},y_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Vh={toggleActions:"play",anticipatePin:0},eu={top:0,left:0,center:.5,bottom:1,right:1},qh=function(e,t){if(ti(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in eu?eu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Hh=function(e,t,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,u=s.fontSize,d=s.indent,f=s.fontWeight,g=Tt.createElement("div"),_=Ss(n)||hr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?pt:n,T=e.indexOf("start")!==-1,S=T?c:h,x="border-color:"+S+";font-size:"+u+";color:"+S+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(i===qt?kd:Vd)+":"+(o+parseFloat(d))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=T,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Yh(g,0,i,T),g},Yh=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Po]=1,s["border"+a+Po]=0,s[n.p]=t+"px",Ae.set(e,s)},rt=[],Ud={},sl,M_=function(){return vn()-mi>34&&(sl||(sl=requestAnimationFrame(fr)))},wo=function(){(!Dn||!Dn.isPressed||Dn.startX>pt.clientWidth)&&(it.cache++,Dn?sl||(sl=requestAnimationFrame(fr)):fr(),mi||Ts("scrollStart"),mi=vn())},Ad=function(){L_=st.innerWidth,D_=st.innerHeight},Ka=function(e){it.cache++,(e===!0||!xn&&!I_&&!Tt.fullscreenElement&&!Tt.webkitFullscreenElement&&(!Id||L_!==st.innerWidth||Math.abs(st.innerHeight-D_)>st.innerHeight*.25))&&Kh.restart(!0)},bs={},gT=[],V_=function r(){return tn(et,"scrollEnd",r)||xs(!0)},Ts=function(e){return bs[e]&&bs[e].map(function(t){return t()})||gT},ei=[],H_=function(e){for(var t=0;t<ei.length;t+=5)(!e||ei[t+4]&&ei[t+4].query===e)&&(ei[t].style.cssText=ei[t+1],ei[t].getBBox&&ei[t].setAttribute("transform",ei[t+2]||""),ei[t+3].uncache=1)},Wd=function(e,t){var n;for(Ln=0;Ln<rt.length;Ln++)n=rt[Ln],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Qh=!0,t&&H_(t),t||Ts("revert")},G_=function(e,t){it.cache++,(t||!Un)&&it.forEach(function(n){return yn(n)&&n.cacheID++&&(n.rec=0)}),ti(e)&&(st.history.scrollRestoration=Bd=e)},Un,Ms=0,S_,_T=function(){if(S_!==Ms){var e=S_=Ms;requestAnimationFrame(function(){return e===Ms&&xs(!0)})}},W_=function(){pt.appendChild(Co),zd=!Dn&&Co.offsetHeight||st.innerHeight,pt.removeChild(Co)},b_=function(e){return rl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},xs=function(e,t){if(ni=Tt.documentElement,pt=Tt.body,Od=[st,Tt,ni,pt],mi&&!e&&!Qh){nn(et,"scrollEnd",V_);return}W_(),Un=et.isRefreshing=!0,it.forEach(function(i){return yn(i)&&++i.cacheID&&(i.rec=i())});var n=Ts("refreshInit");P_&&et.sort(),t||Wd(),it.forEach(function(i){yn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),rt.slice(0).forEach(function(i){return i.refresh()}),Qh=!1,rt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Ld=1,b_(!0),rt.forEach(function(i){var s=ki(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),b_(!1),Ld=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),it.forEach(function(i){yn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),G_(Bd,1),Kh.pause(),Ms++,Un=2,fr(2),rt.forEach(function(i){return yn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Un=et.isRefreshing=!1,Ts("refresh")},Fd=0,Zh=1,il,fr=function(e){if(e===2||!Un&&!Qh){et.isUpdating=!0,il&&il.update(0);var t=rt.length,n=vn(),i=n-wd>=50,s=t&&rt[0].scroll();if(Zh=Fd>s?-1:1,Un||(Fd=s),i&&(mi&&!tu&&n-mi>200&&(mi=0,Ts("scrollEnd")),Ya=wd,wd=n),Zh<0){for(Ln=t;Ln-- >0;)rt[Ln]&&rt[Ln].update(0,i);Zh=1}else for(Ln=0;Ln<t;Ln++)rt[Ln]&&rt[Ln].update(0,i);et.isUpdating=!1}sl=0},Nd=[B_,z_,Vd,kd,di+nl,di+ja,di+tl,di+el,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Jh=Nd.concat([vs,ys,"boxSizing","max"+Po,"max"+Hd,"position",di,Yt,Yt+tl,Yt+ja,Yt+nl,Yt+el]),xT=function(e,t,n){Ro(n);var i=e._gsap;if(i.spacerIsNative)Ro(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Cd=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Nd.length,o=t.style,a=e.style,l;s--;)l=Nd[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Vd]=a[kd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[vs]=jh(e,_n)+jt,o[ys]=jh(e,qt)+jt,o[Yt]=a[di]=a[z_]=a[B_]="0",Ro(i),a[vs]=a["max"+Po]=n[vs],a[ys]=a["max"+Hd]=n[ys],a[Yt]=n[Yt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},vT=/([A-Z])/g,Ro=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ae.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(vT,"-$1").toLowerCase())}},Gh=function(e){for(var t=Jh.length,n=e.style,i=[],s=0;s<t;s++)i.push(Jh[s],n[Jh[s]]);return i.t=e,i},yT=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},$h={left:0,top:0},T_=function(e,t,n,i,s,o,a,l,c,h,u,d,f,g){yn(e)&&(e=e(l)),ti(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?qh("0"+e.substr(3),n):0));var _=f?f.time():0,m,p,T;if(f&&f.seek(0),isNaN(e)||(e=+e),$a(e))f&&(e=Ae.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&Yh(a,n,i,!0);else{yn(t)&&(t=t(l));var S=(e||"0").split(" "),x,w,A,E;T=In(t,l)||pt,x=ur(T)||{},(!x||!x.left&&!x.top)&&pi(T).display==="none"&&(E=T.style.display,T.style.display="block",x=ur(T),E?T.style.display=E:T.style.removeProperty("display")),w=qh(S[0],x[i.d]),A=qh(S[1]||"0",n),e=x[i.p]-c[i.p]-h+w+s-A,a&&Yh(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var I=e+n,v=o._isStart;m="scroll"+i.d2,Yh(o,I,i,v&&I>20||!v&&(u?Math.max(pt[m],ni[m]):o.parentNode[m])<=I+1),u&&(c=ur(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+jt))}return f&&T&&(m=ur(T),f.seek(d),p=ur(T),f._caScrollDist=m[i.p]-p[i.p],e=e/f._caScrollDist*d),f&&f.seek(_),f?e:Math.round(e)},MT=/(webkit|moz|length|cssText|inset)/i,w_=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===pt){e._stOrig=s.cssText,a=pi(e);for(o in a)!+o&&!MT.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ae.core.getCache(e).uncache=1,t.appendChild(e)}},X_=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Wh=function(e,t,n){var i={};i[t.p]="+="+n,Ae.set(e,i)},E_=function(e,t){var n=cr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,h,u){var d=o.tween,f=l.onComplete,g={};c=c||n();var _=X_(n,c,function(){d.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*d.ratio+u*d.ratio*d.ratio)},l.onUpdate=function(){it.cache++,o.tween&&fr()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Ae.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},nn(e,"wheel",n.wheelHandler),et.isTouch&&nn(e,"touchmove",n.wheelHandler),s},et=(function(){function r(t,n){Eo||r.register(Ae)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Dd(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Za){this.update=this.refresh=this.kill=zi;return}n=v_(ti(n)||$a(n)||n.nodeType?{trigger:n}:n,Vh);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,d=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,T=s.onSnapComplete,S=s.once,x=s.snap,w=s.pinReparent,A=s.pinSpacer,E=s.containerAnimation,I=s.fastScrollEnd,v=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?_n:qt,L=!u&&u!==0,U=In(n.scroller||st),V=Ae.core.getCache(U),G=Ss(U),W=("pinType"in n?n.pinType:hr(U,"pinType")||G&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=L&&n.toggleActions.split(" "),k="markers"in n?n.markers:Vh.markers,te=G?0:parseFloat(pi(U)["border"+y.p2+Po])||0,P=this,le=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Ne=uT(U,G,y),Ze=fT(U,G),We=0,Fe=0,J=0,K=cr(U,y),fe,_e,Te,ke,ct,C,Ce,we,ue,F,Je,ve,Ie,Xe,dt,R,M,z,$,Q,Z,ye,se,Re,de,re,he,Be,Pe,ce,qe,D,ie,oe,me,ne,j,Se,Ve;if(P._startClamp=P._endClamp=!1,P._dir=y,m*=45,P.scroller=U,P.scroll=E?E.time.bind(E):K,ke=K(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(P_=1,n.refreshPriority===-9999&&(il=P)),V.tweenScroll=V.tweenScroll||{top:E_(U,qt),left:E_(U,_n)},P.tweenTo=fe=V.tweenScroll[y.p],P.scrubDuration=function(pe){ie=$a(pe)&&pe,ie?D?D.duration(pe):D=Ae.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ie,paused:!0,onComplete:function(){return p&&p(P)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(u),ce=0,l||(l=i.vars.id)),x&&((!_s(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in pt.style&&Ae.set(G?[pt,ni]:U,{scrollBehavior:"auto"}),it.forEach(function(pe){return yn(pe)&&pe.target===(G?Tt.scrollingElement||ni:U)&&(pe.smooth=!1)}),Te=yn(x.snapTo)?x.snapTo:x.snapTo==="labels"?pT(i):x.snapTo==="labelsDirectional"?mT(i):x.directional!==!1?function(pe,He){return Gd(x.snapTo)(pe,vn()-Fe<500?0:He.direction)}:Ae.utils.snap(x.snapTo),oe=x.duration||{min:.1,max:2},oe=_s(oe)?Qa(oe.min,oe.max):Qa(oe,oe),me=Ae.delayedCall(x.delay||ie/2||.1,function(){var pe=K(),He=vn()-Fe<500,Oe=fe.tween;if((He||Math.abs(P.getVelocity())<10)&&!Oe&&!tu&&We!==pe){var Ye=(pe-C)/Xe,kt=i&&!L?i.totalProgress():Ye,tt=He?0:(kt-qe)/(vn()-Ya)*1e3||0,Rt=Ae.utils.clamp(-Ye,1-Ye,To(tt/2)*tt/.185),Vt=Ye+(x.inertia===!1?0:Rt),wt,vt,mt=x,Hn=mt.onStart,Et=mt.onInterrupt,Mn=mt.onComplete;if(wt=Te(Vt,P),$a(wt)||(wt=Vt),vt=Math.max(0,Math.round(C+wt*Xe)),pe<=Ce&&pe>=C&&vt!==pe){if(Oe&&!Oe._initted&&Oe.data<=To(vt-pe))return;x.inertia===!1&&(Rt=wt-Ye),fe(vt,{duration:oe(To(Math.max(To(Vt-kt),To(wt-kt))*.185/tt/.05||0)),ease:x.ease||"power3",data:To(vt-pe),onInterrupt:function(){return me.restart(!0)&&Et&&Et(P)},onComplete:function(){P.update(),We=K(),i&&!L&&(D?D.resetTo("totalProgress",wt,i._tTime/i._tDur):i.progress(wt)),ce=qe=i&&!L?i.totalProgress():P.progress,T&&T(P),Mn&&Mn(P)}},pe,Rt*Xe,vt-pe-Rt*Xe),Hn&&Hn(P,fe.tween)}}else P.isActive&&We!==pe&&me.restart(!0)}).pause()),l&&(Ud[l]=P),d=P.trigger=In(d||f!==!0&&f),Ve=d&&d._gsap&&d._gsap.stRevert,Ve&&(Ve=Ve(P)),f=f===!0?d:In(f),ti(a)&&(a={targets:d,className:a}),f&&(g===!1||g===di||(g=!g&&f.parentNode&&f.parentNode.style&&pi(f.parentNode).display==="flex"?!1:Yt),P.pin=f,_e=Ae.core.getCache(f),_e.spacer?dt=_e.pinState:(A&&(A=In(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),_e.spacerIsNative=!!A,A&&(_e.spacerState=Gh(A))),_e.spacer=z=A||Tt.createElement("div"),z.classList.add("pin-spacer"),l&&z.classList.add("pin-spacer-"+l),_e.pinState=dt=Gh(f)),n.force3D!==!1&&Ae.set(f,{force3D:!0}),P.spacer=z=_e.spacer,Pe=pi(f),Re=Pe[g+y.os2],Q=Ae.getProperty(f),Z=Ae.quickSetter(f,y.a,jt),Cd(f,z,Pe),M=Gh(f)),k){ve=_s(k)?v_(k,y_):y_,F=Hh("scroller-start",l,U,y,ve,0),Je=Hh("scroller-end",l,U,y,ve,0,F),$=F["offset"+y.op.d2];var ut=In(hr(U,"content")||U);we=this.markerStart=Hh("start",l,ut,y,ve,$,0,E),ue=this.markerEnd=Hh("end",l,ut,y,ve,$,0,E),E&&(Se=Ae.quickSetter([we,ue],y.a,jt)),!W&&!(Ei.length&&hr(U,"fixedMarkers")===!0)&&(dT(G?pt:U),Ae.set([F,Je],{force3D:!0}),re=Ae.quickSetter(F,y.a,jt),Be=Ae.quickSetter(Je,y.a,jt))}if(E){var xe=E.vars.onUpdate,De=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),xe&&xe.apply(E,De||[])})}if(P.previous=function(){return rt[rt.indexOf(P)-1]},P.next=function(){return rt[rt.indexOf(P)+1]},P.revert=function(pe,He){if(!He)return P.kill(!0);var Oe=pe!==!1||!P.enabled,Ye=xn;Oe!==P.isReverted&&(Oe&&(ne=Math.max(K(),P.scroll.rec||0),J=P.progress,j=i&&i.progress()),we&&[we,ue,F,Je].forEach(function(kt){return kt.style.display=Oe?"none":"block"}),Oe&&(xn=P,P.update(Oe)),f&&(!w||!P.isActive)&&(Oe?xT(f,z,dt):Cd(f,z,pi(f),de)),Oe||P.update(Oe),xn=Ye,P.isReverted=Oe)},P.refresh=function(pe,He,Oe,Ye){if(!((xn||!P.enabled)&&!He)){if(f&&pe&&mi){nn(r,"scrollEnd",V_);return}!Un&&le&&le(P),xn=P,fe.tween&&!Oe&&(fe.tween.kill(),fe.tween=0),D&&D.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(ot){return ot.vars.immediateRender&&ot.render(0,!0,!0)})),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var kt=Ne(),tt=Ze(),Rt=E?E.duration():ki(U,y),Vt=Xe<=.01||!Xe,wt=0,vt=Ye||0,mt=_s(Oe)?Oe.end:n.end,Hn=n.endTrigger||d,Et=_s(Oe)?Oe.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),Mn=P.pinnedContainer=n.pinnedContainer&&In(n.pinnedContainer,P),ii=d&&Math.max(0,rt.indexOf(P))||0,Zt=ii,b,O,X,q,B,ee,ae,Ee,Me,ze,Ue,Le,Qe;for(k&&_s(Oe)&&(Le=Ae.getProperty(F,y.p),Qe=Ae.getProperty(Je,y.p));Zt-- >0;)ee=rt[Zt],ee.end||ee.refresh(0,1)||(xn=P),ae=ee.pin,ae&&(ae===d||ae===f||ae===Mn)&&!ee.isReverted&&(ze||(ze=[]),ze.unshift(ee),ee.revert(!0,!0)),ee!==rt[Zt]&&(ii--,Zt--);for(yn(Et)&&(Et=Et(P)),Et=m_(Et,"start",P),C=T_(Et,d,kt,y,K(),we,F,P,tt,te,W,Rt,E,P._startClamp&&"_startClamp")||(f?-.001:0),yn(mt)&&(mt=mt(P)),ti(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(ti(Et)?Et.split(" ")[0]:"")+mt:(wt=qh(mt.substr(2),kt),mt=ti(Et)?Et:(E?Ae.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,C):C)+wt,Hn=d)),mt=m_(mt,"end",P),Ce=Math.max(C,T_(mt||(Hn?"100% 0":Rt),Hn,kt,y,K()+wt,ue,Je,P,tt,te,W,Rt,E,P._endClamp&&"_endClamp"))||-.001,wt=0,Zt=ii;Zt--;)ee=rt[Zt],ae=ee.pin,ae&&ee.start-ee._pinPush<=C&&!E&&ee.end>0&&(b=ee.end-(P._startClamp?Math.max(0,ee.start):ee.start),(ae===d&&ee.start-ee._pinPush<C||ae===Mn)&&isNaN(Et)&&(wt+=b*(1-ee.progress)),ae===f&&(vt+=b));if(C+=wt,Ce+=wt,P._startClamp&&(P._startClamp+=wt),P._endClamp&&!Un&&(P._endClamp=Ce||-.001,Ce=Math.min(Ce,ki(U,y))),Xe=Ce-C||(C-=.01)&&.001,Vt&&(J=Ae.utils.clamp(0,1,Ae.utils.normalize(C,Ce,ne))),P._pinPush=vt,we&&wt&&(b={},b[y.a]="+="+wt,Mn&&(b[y.p]="-="+K()),Ae.set([we,ue],b)),f&&!(Ld&&P.end>=ki(U,y)))b=pi(f),q=y===qt,X=K(),ye=parseFloat(Q(y.a))+vt,!Rt&&Ce>1&&(Ue=(G?Tt.scrollingElement||ni:U).style,Ue={style:Ue,value:Ue["overflow"+y.a.toUpperCase()]},G&&pi(pt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(Ue.style["overflow"+y.a.toUpperCase()]="scroll")),Cd(f,z,b),M=Gh(f),O=ur(f,!0),Ee=W&&cr(U,q?_n:qt)(),g?(de=[g+y.os2,Xe+vt+jt],de.t=z,Zt=g===Yt?jh(f,y)+Xe+vt:0,Zt&&(de.push(y.d,Zt+jt),z.style.flexBasis!=="auto"&&(z.style.flexBasis=Zt+jt)),Ro(de),Mn&&rt.forEach(function(ot){ot.pin===Mn&&ot.vars.pinSpacing!==!1&&(ot._subPinOffset=!0)}),W&&K(ne)):(Zt=jh(f,y),Zt&&z.style.flexBasis!=="auto"&&(z.style.flexBasis=Zt+jt)),W&&(B={top:O.top+(q?X-C:Ee)+jt,left:O.left+(q?Ee:X-C)+jt,boxSizing:"border-box",position:"fixed"},B[vs]=B["max"+Po]=Math.ceil(O.width)+jt,B[ys]=B["max"+Hd]=Math.ceil(O.height)+jt,B[di]=B[di+tl]=B[di+ja]=B[di+nl]=B[di+el]="0",B[Yt]=b[Yt],B[Yt+tl]=b[Yt+tl],B[Yt+ja]=b[Yt+ja],B[Yt+nl]=b[Yt+nl],B[Yt+el]=b[Yt+el],R=yT(dt,B,w),Un&&K(0)),i?(Me=i._initted,bd(1),i.render(i.duration(),!0,!0),se=Q(y.a)-ye+Xe+vt,he=Math.abs(Xe-se)>1,W&&he&&R.splice(R.length-2,2),i.render(0,!0,!0),Me||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),bd(0)):se=Xe,Ue&&(Ue.value?Ue.style["overflow"+y.a.toUpperCase()]=Ue.value:Ue.style.removeProperty("overflow-"+y.a));else if(d&&K()&&!E)for(O=d.parentNode;O&&O!==pt;)O._pinOffset&&(C-=O._pinOffset,Ce-=O._pinOffset),O=O.parentNode;ze&&ze.forEach(function(ot){return ot.revert(!1,!0)}),P.start=C,P.end=Ce,ke=ct=Un?ne:K(),!E&&!Un&&(ke<ne&&K(ne),P.scroll.rec=0),P.revert(!1,!0),Fe=vn(),me&&(We=-1,me.restart(!0)),xn=0,i&&L&&(i._initted||j)&&i.progress()!==j&&i.progress(j||0,!0).render(i.time(),!0,!0),(Vt||J!==P.progress||E||_||i&&!i._initted)&&(i&&!L&&(i._initted||J||i.vars.immediateRender!==!1)&&i.totalProgress(E&&C<-.001&&!J?Ae.utils.normalize(C,Ce,0):J,!0),P.progress=Vt||(ke-C)/Xe===J?0:J),f&&g&&(z._pinOffset=Math.round(P.progress*se)),D&&D.invalidate(),isNaN(Le)||(Le-=Ae.getProperty(F,y.p),Qe-=Ae.getProperty(Je,y.p),Wh(F,y,Le),Wh(we,y,Le-(Ye||0)),Wh(Je,y,Qe),Wh(ue,y,Qe-(Ye||0))),Vt&&!Un&&P.update(),h&&!Un&&!Ie&&(Ie=!0,h(P),Ie=!1)}},P.getVelocity=function(){return(K()-ct)/(vn()-Ya)*1e3||0},P.endAnimation=function(){qa(P.callbackAnimation),i&&(D?D.progress(1):i.paused()?L||qa(i,P.direction<0,1):qa(i,i.reversed()))},P.labelToScroll=function(pe){return i&&i.labels&&(C||P.refresh()||C)+i.labels[pe]/i.duration()*Xe||0},P.getTrailing=function(pe){var He=rt.indexOf(P),Oe=P.direction>0?rt.slice(0,He).reverse():rt.slice(He+1);return(ti(pe)?Oe.filter(function(Ye){return Ye.vars.preventOverlaps===pe}):Oe).filter(function(Ye){return P.direction>0?Ye.end<=C:Ye.start>=Ce})},P.update=function(pe,He,Oe){if(!(E&&!Oe&&!pe)){var Ye=Un===!0?ne:P.scroll(),kt=pe?0:(Ye-C)/Xe,tt=kt<0?0:kt>1?1:kt||0,Rt=P.progress,Vt,wt,vt,mt,Hn,Et,Mn,ii;if(He&&(ct=ke,ke=E?K():Ye,x&&(qe=ce,ce=i&&!L?i.totalProgress():tt)),m&&f&&!xn&&!Oh&&mi&&(!tt&&C<Ye+(Ye-ct)/(vn()-Ya)*m?tt=1e-4:tt===1&&Ce>Ye+(Ye-ct)/(vn()-Ya)*m&&(tt=.9999)),tt!==Rt&&P.enabled){if(Vt=P.isActive=!!tt&&tt<1,wt=!!Rt&&Rt<1,Et=Vt!==wt,Hn=Et||!!tt!=!!Rt,P.direction=tt>Rt?1:-1,P.progress=tt,Hn&&!xn&&(vt=tt&&!Rt?0:tt===1?1:Rt===1?2:3,L&&(mt=!Et&&Y[vt+1]!=="none"&&Y[vt+1]||Y[vt],ii=i&&(mt==="complete"||mt==="reset"||mt in i))),v&&(Et||ii)&&(ii||u||!i)&&(yn(v)?v(P):P.getTrailing(v).forEach(function(X){return X.endAnimation()})),L||(D&&!xn&&!Oh?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",tt,i._tTime/i._tDur):(D.vars.totalProgress=tt,D.invalidate().restart())):i&&i.totalProgress(tt,!!(xn&&(Fe||pe)))),f){if(pe&&g&&(z.style[g+y.os2]=Re),!W)Z(Ja(ye+se*tt));else if(Hn){if(Mn=!pe&&tt>Rt&&Ce+1>Ye&&Ye+1>=ki(U,y),w)if(!pe&&(Vt||Mn)){var Zt=ur(f,!0),b=Ye-C;w_(f,pt,Zt.top+(y===qt?b:0)+jt,Zt.left+(y===qt?0:b)+jt)}else w_(f,z);Ro(Vt||Mn?R:M),he&&tt<1&&Vt||Z(ye+(tt===1&&!Mn?se:0))}}x&&!fe.tween&&!xn&&!Oh&&me.restart(!0),a&&(Et||S&&tt&&(tt<1||!Td))&&rl(a.targets).forEach(function(X){return X.classList[Vt||S?"add":"remove"](a.className)}),o&&!L&&!pe&&o(P),Hn&&!xn?(L&&(ii&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),o&&o(P)),(Et||!Td)&&(c&&Et&&Ed(P,c),H[vt]&&Ed(P,H[vt]),S&&(tt===1?P.kill(!1,1):H[vt]=0),Et||(vt=tt===1?1:3,H[vt]&&Ed(P,H[vt]))),I&&!Vt&&Math.abs(P.getVelocity())>($a(I)?I:2500)&&(qa(P.callbackAnimation),D?D.progress(1):qa(i,mt==="reverse"?1:!tt,1))):L&&o&&!xn&&o(P)}if(Be){var O=E?Ye/E.duration()*(E._caScrollDist||0):Ye;re(O+(F._isFlipped?1:0)),Be(O)}Se&&Se(-Ye/E.duration()*(E._caScrollDist||0))}},P.enable=function(pe,He){P.enabled||(P.enabled=!0,nn(U,"resize",Ka),G||nn(U,"scroll",wo),le&&nn(r,"refreshInit",le),pe!==!1&&(P.progress=J=0,ke=ct=We=K()),He!==!1&&P.refresh())},P.getTween=function(pe){return pe&&fe?fe.tween:D},P.setPositions=function(pe,He,Oe,Ye){if(E){var kt=E.scrollTrigger,tt=E.duration(),Rt=kt.end-kt.start;pe=kt.start+Rt*pe/tt,He=kt.start+Rt*He/tt}P.refresh(!1,!1,{start:g_(pe,Oe&&!!P._startClamp),end:g_(He,Oe&&!!P._endClamp)},Ye),P.update()},P.adjustPinSpacing=function(pe){if(de&&pe){var He=de.indexOf(y.d)+1;de[He]=parseFloat(de[He])+pe+jt,de[1]=parseFloat(de[1])+pe+jt,Ro(de)}},P.disable=function(pe,He){if(P.enabled&&(pe!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,He||D&&D.pause(),ne=0,_e&&(_e.uncache=1),le&&tn(r,"refreshInit",le),me&&(me.pause(),fe.tween&&fe.tween.kill()&&(fe.tween=0)),!G)){for(var Oe=rt.length;Oe--;)if(rt[Oe].scroller===U&&rt[Oe]!==P)return;tn(U,"resize",Ka),G||tn(U,"scroll",wo)}},P.kill=function(pe,He){P.disable(pe,He),D&&!He&&D.kill(),l&&delete Ud[l];var Oe=rt.indexOf(P);Oe>=0&&rt.splice(Oe,1),Oe===Ln&&Zh>0&&Ln--,Oe=0,rt.forEach(function(Ye){return Ye.scroller===P.scroller&&(Oe=1)}),Oe||Un||(P.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),He||i.kill()),we&&[we,ue,F,Je].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),il===P&&(il=0),f&&(_e&&(_e.uncache=1),Oe=0,rt.forEach(function(Ye){return Ye.pin===f&&Oe++}),Oe||(_e.spacer=0)),n.onKill&&n.onKill(P)},rt.push(P),P.enable(!1,!1),Ve&&Ve(P),i&&i.add&&!Xe){var $e=P.update;P.update=function(){P.update=$e,it.cache++,C||Ce||P.refresh()},Ae.delayedCall(.01,P.update),Xe=.01,C=Ce=0}else P.refresh();f&&_T()},r.register=function(n){return Eo||(Ae=n||F_(),U_()&&window.document&&r.enable(),Eo=Za),Eo},r.defaults=function(n){if(n)for(var i in n)Vh[i]=n[i];return Vh},r.disable=function(n,i){Za=0,rt.forEach(function(o){return o[i?"kill":"disable"](n)}),tn(st,"wheel",wo),tn(Tt,"scroll",wo),clearInterval(Nh),tn(Tt,"touchcancel",zi),tn(pt,"touchstart",zi),zh(tn,Tt,"pointerdown,touchstart,mousedown",__),zh(tn,Tt,"pointerup,touchend,mouseup",x_),Kh.kill(),Bh(tn);for(var s=0;s<it.length;s+=3)kh(tn,it[s],it[s+1]),kh(tn,it[s],it[s+2])},r.enable=function(){if(st=window,Tt=document,ni=Tt.documentElement,pt=Tt.body,Ae&&(rl=Ae.utils.toArray,Qa=Ae.utils.clamp,Dd=Ae.core.context||zi,bd=Ae.core.suppressOverwrites||zi,Bd=st.history.scrollRestoration||"auto",Fd=st.pageYOffset||0,Ae.core.globals("ScrollTrigger",r),pt)){Za=1,Co=document.createElement("div"),Co.style.height="100vh",Co.style.position="absolute",W_(),hT(),zt.register(Ae),r.isTouch=zt.isTouch,kr=zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Id=zt.isTouch===1,nn(st,"wheel",wo),Od=[st,Tt,ni,pt],Ae.matchMedia?(r.matchMedia=function(c){var h=Ae.matchMedia(),u;for(u in c)h.add(u,c[u]);return h},Ae.addEventListener("matchMediaInit",function(){return Wd()}),Ae.addEventListener("matchMediaRevert",function(){return H_()}),Ae.addEventListener("matchMedia",function(){xs(0,1),Ts("matchMedia")}),Ae.matchMedia().add("(orientation: portrait)",function(){return Ad(),Ad})):console.warn("Requires GSAP 3.11.0 or later"),Ad(),nn(Tt,"scroll",wo);var n=pt.hasAttribute("style"),i=pt.style,s=i.borderTopStyle,o=Ae.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=ur(pt),qt.m=Math.round(a.top+qt.sc())||0,_n.m=Math.round(a.left+_n.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(pt.setAttribute("style",""),pt.removeAttribute("style")),Nh=setInterval(M_,250),Ae.delayedCall(.5,function(){return Oh=0}),nn(Tt,"touchcancel",zi),nn(pt,"touchstart",zi),zh(nn,Tt,"pointerdown,touchstart,mousedown",__),zh(nn,Tt,"pointerup,touchend,mouseup",x_),Pd=Ae.utils.checkPrefix("transform"),Jh.push(Pd),Eo=vn(),Kh=Ae.delayedCall(.2,xs).pause(),Ao=[Tt,"visibilitychange",function(){var c=st.innerWidth,h=st.innerHeight;Tt.hidden?(d_=c,p_=h):(d_!==c||p_!==h)&&Ka()},Tt,"DOMContentLoaded",xs,st,"load",xs,st,"resize",Ka],Bh(nn),rt.forEach(function(c){return c.enable(0,1)}),l=0;l<it.length;l+=3)kh(tn,it[l],it[l+1]),kh(tn,it[l],it[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Td=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Nh)||(Nh=i)&&setInterval(M_,i),"ignoreMobileResize"in n&&(Id=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Bh(tn)||Bh(nn,n.autoRefreshEvents||"none"),I_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=In(n),o=it.indexOf(s),a=Ss(s);~o&&it.splice(o,a?6:2),i&&(a?Ei.unshift(st,i,pt,i,ni,i):Ei.unshift(s,i))},r.clearMatchMedia=function(n){rt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(ti(n)?In(n):n).getBoundingClientRect(),a=o[s?vs:ys]*i||0;return s?o.right-a>0&&o.left+a<st.innerWidth:o.bottom-a>0&&o.top+a<st.innerHeight},r.positionInViewport=function(n,i,s){ti(n)&&(n=In(n));var o=n.getBoundingClientRect(),a=o[s?vs:ys],l=i==null?a/2:i in eu?eu[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/st.innerWidth:(o.top+l)/st.innerHeight},r.killAll=function(n){if(rt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=bs.killAll||[];bs={},i.forEach(function(s){return s()})}},r})();et.version="3.13.0";et.saveStyles=function(r){return r?rl(r).forEach(function(e){if(e&&e.style){var t=ei.indexOf(e);t>=0&&ei.splice(t,5),ei.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ae.core.getCache(e),Dd())}}):ei};et.revert=function(r,e){return Wd(!r,e)};et.create=function(r,e){return new et(r,e)};et.refresh=function(r){return r?Ka(!0):(Eo||et.register())&&xs(!0)};et.update=function(r){return++it.cache&&fr(r===!0?2:0)};et.clearScrollMemory=G_;et.maxScroll=function(r,e){return ki(r,e?_n:qt)};et.getScrollFunc=function(r,e){return cr(In(r),e?_n:qt)};et.getById=function(r){return Ud[r]};et.getAll=function(){return rt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};et.isScrolling=function(){return!!mi};et.snapDirectional=Gd;et.addEventListener=function(r,e){var t=bs[r]||(bs[r]=[]);~t.indexOf(e)||t.push(e)};et.removeEventListener=function(r,e){var t=bs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};et.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,h){var u=[],d=[],f=Ae.delayedCall(i,function(){h(u,d),u=[],d=[]}).pause();return function(g){u.length||f.restart(!0),u.push(g.trigger),d.push(g),s<=u.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&yn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return yn(s)&&(s=s(),nn(et,"refresh",function(){return s=e.batchMax()})),rl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(et.create(c))}),t};var A_=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Rd=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(zt.isTouch?" pinch-zoom":""):"none",e===ni&&r(pt,t)},Xh={auto:1,scroll:1},ST=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ae.core.getCache(s),a=vn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Xh[(l=pi(s)).overflowY]||Xh[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Ss(s)&&(Xh[(l=pi(s)).overflowY]||Xh[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},q_=function(e,t,n,i){return zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&ST,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&nn(Tt,zt.eventTypes[0],R_,!1,!0)},onDisable:function(){return tn(Tt,zt.eventTypes[0],R_,!0)}})},bT=/(input|label|select|textarea)/i,C_,R_=function(e){var t=bT.test(e.target.tagName);(t||C_)&&(e._gsapAllow=!0,C_=t)},TT=function(e){_s(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=In(e.target)||ni,h=Ae.core.globals().ScrollSmoother,u=h&&h.get(),d=kr&&(e.content&&In(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=cr(c,qt),g=cr(c,_n),_=1,m=(zt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,p=0,T=yn(i)?function(){return i(a)}:function(){return i||2.8},S,x,w=q_(c,e.type,!0,s),A=function(){return x=!1},E=zi,I=zi,v=function(){l=ki(c,qt),I=Qa(kr?1:0,l),n&&(E=Qa(0,ki(c,_n))),S=Ms},y=function(){d._gsap.y=Ja(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},L=function(){if(x){requestAnimationFrame(A);var k=Ja(a.deltaY/2),te=I(f.v-k);if(d&&te!==f.v+f.offset){f.offset=te-f.v;var P=Ja((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",d._gsap.y=P+"px",f.cacheID=it.cache,fr()}return!0}f.offset&&y(),x=!0},U,V,G,W,H=function(){v(),U.isActive()&&U.vars.scrollY>l&&(f()>l?U.progress(1)&&f(l):U.resetTo("scrollY",l))};return d&&Ae.set(d,{y:"+=0"}),e.ignoreCheck=function(Y){return kr&&Y.type==="touchmove"&&L(Y)||_>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){x=!1;var Y=_;_=Ja((st.visualViewport&&st.visualViewport.scale||1)/m),U.pause(),Y!==_&&Rd(c,_>1.01?!0:n?!1:"x"),V=g(),G=f(),v(),S=Ms},e.onRelease=e.onGestureStart=function(Y,k){if(f.offset&&y(),!k)W.restart(!0);else{it.cache++;var te=T(),P,le;n&&(P=g(),le=P+te*.05*-Y.velocityX/.227,te*=A_(g,P,le,ki(c,_n)),U.vars.scrollX=E(le)),P=f(),le=P+te*.05*-Y.velocityY/.227,te*=A_(f,P,le,ki(c,qt)),U.vars.scrollY=I(le),U.invalidate().duration(te).play(.01),(kr&&U.vars.scrollY>=l||P>=l-1)&&Ae.to({},{onUpdate:H,duration:te})}o&&o(Y)},e.onWheel=function(){U._ts&&U.pause(),vn()-p>1e3&&(S=0,p=vn())},e.onChange=function(Y,k,te,P,le){if(Ms!==S&&v(),k&&n&&g(E(P[2]===k?V+(Y.startX-Y.x):g()+k-P[1])),te){f.offset&&y();var Ne=le[2]===te,Ze=Ne?G+Y.startY-Y.y:f()+te-le[1],We=I(Ze);Ne&&Ze!==We&&(G+=We-Ze),f(We)}(te||k)&&fr()},e.onEnable=function(){Rd(c,n?!1:"x"),et.addEventListener("refresh",H),nn(st,"resize",H),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),w.enable()},e.onDisable=function(){Rd(c,!0),tn(st,"resize",H),et.removeEventListener("refresh",H),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new zt(e),a.iOS=kr,kr&&!f()&&f(1),kr&&Ae.ticker.add(zi),W=a._dc,U=Ae.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:X_(f,f(),function(){return U.pause()})},onUpdate:fr,onComplete:W.vars.onComplete}),a};et.sort=function(r){if(yn(r))return rt.sort(r);var e=st.pageYOffset||0;return et.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+st.innerHeight}),rt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};et.observe=function(r){return new zt(r)};et.normalizeScroll=function(r){if(typeof r>"u")return Dn;if(r===!0&&Dn)return Dn.enable();if(r===!1){Dn&&Dn.kill(),Dn=r;return}var e=r instanceof zt?r:TT(r);return Dn&&Dn.target===e.target&&Dn.kill(),Ss(e.target)&&(Dn=e),e};et.core={_getVelocityProp:Fh,_inputObserver:q_,_scrollers:it,_proxies:Ei,bridge:{ss:function(){mi||Ts("scrollStart"),mi=vn()},ref:function(){return xn}}};F_()&&Ae.registerPlugin(et);Qn.registerPlugin(et);Qn.ticker.lagSmoothing(0);var Yd=new je("#2B3644");function Z_(r){let e=r>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function Xd(r,e){let t=o=>{let a=Math.sin(o*127.1+e*311.7)*43758.5453;return a-Math.floor(a)},n=Math.floor(r),i=r-n,s=i*i*(3-2*i);return t(n)*(1-s)+t(n+1)*s}var ol=(r,e)=>Xd(r,e)*.55+Xd(r*2.1,e+1)*.28+Xd(r*4.3,e+2)*.17;function Zd(r="rgba(255,190,110,1)",e="rgba(255,120,40,0)"){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),i=n.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,r),i.addColorStop(.25,r.replace(/[\d.]+\)$/,".55)")),i.addColorStop(1,e),n.fillStyle=i,n.fillRect(0,0,128,128);let s=new Ks(t);return s.colorSpace=fn,s}function wT(){let r=document.createElement("canvas");r.width=512,r.height=128;let e=r.getContext("2d"),t=Z_(7);for(let i=0;i<60;i++){let s=t()*512,o=40+t()*50,a=30+t()*70,l=e.createRadialGradient(s,o,0,s,o,a);l.addColorStop(0,"rgba(200,212,224,.10)"),l.addColorStop(1,"rgba(200,212,224,0)"),e.fillStyle=l,e.fillRect(0,0,512,128)}let n=new Ks(r);return n.colorSpace=fn,n}var ET=`
  uniform vec3 uFog; uniform float uFogD;
  vec3 applyFog(vec3 col, float d){ float f = 1.0 - exp(-uFogD * uFogD * d * d); return mix(col, uFog, clamp(f, 0.0, 1.0)); }`;function AT(){let r=new wn({depthWrite:!1,fog:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      varying vec2 vUv; uniform float uTime;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      void main(){
        vec3 top = vec3(.012,.020,.038), mid = vec3(.050,.072,.105), hor = vec3(.20,.245,.30);
        float y = vUv.y;
        vec3 c = mix(hor, mid, smoothstep(.40, .58, y)); c = mix(c, top, smoothstep(.58, .95, y));
        // Mondschein hinter der Mauer
        vec2 m = vec2(.556, .60); float d = distance(vec2(vUv.x * 2.0, vUv.y), vec2(m.x * 2.0, m.y));
        c += vec3(.55,.62,.72) * .30 * exp(-d * 9.0) + vec3(.55,.62,.72) * .10 * exp(-d * 2.5);
        // Sterne (nur oben, funkeln langsam)
        vec2 g = floor(vUv * vec2(260., 110.)); float s = h(g);
        float tw = .55 + .45 * sin(uTime * (.6 + s * 1.7) + s * 40.);
        c += vec3(.85,.9,1.) * step(.9965, s) * tw * smoothstep(.5, .75, y) * .9;
        gl_FragColor = vec4(c, 1.);
      }`}),e=new Wt(new bi(520,220),r);return e.position.set(0,40,-170),e}function qd(r,e,t,n,i){let s=new js;s.moveTo(-260,-20);for(let a=-260;a<=260;a+=4)s.lineTo(a,e+ol(a*.018,i)*t+ol(a*.09,i+5)*t*.18);s.lineTo(260,-20),s.lineTo(-260,-20);let o=new Wt(new ma(s),new Pi({color:n,fog:!0}));return o.position.z=r,o}function CT(){let t=new bi(420,15,420,6),n=t.attributes.position;for(let o=0;o<n.count;o++){let a=n.getX(o),l=n.getY(o);l>15/2-.01&&n.setY(o,l+(ol(a*.12,3)-.5)*.9+(ol(a*.9,9)-.5)*.25),n.setZ(o,(ol(a*.05,11)-.5)*3*((l+15/2)/15))}t.computeVertexNormals();let i=new wn({uniforms:{uFog:{value:Yd},uFogD:{value:.0085},uTime:{value:0}},vertexShader:`varying vec2 vUv; varying float vD; varying vec3 vW;
      void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.); vW = w.xyz; vec4 mv = viewMatrix * w; vD = -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec2 vUv; varying float vD; varying vec3 vW; ${ET}
      float h(float x){ return fract(sin(x * 91.7) * 43758.5453); }
      float n(float x){ float i = floor(x), f = fract(x); f = f * f * (3. - 2. * f); return mix(h(i), h(i + 1.), f); }
      void main(){
        float x = vW.x, y = vUv.y;
        // senkrechte Rinnen im Eis
        float streak = n(x * .9) * .5 + n(x * 2.7) * .3 + n(x * 7.1) * .2;
        float ledge = smoothstep(.0, .015, abs(fract(y * 6. + n(x * .3) * .6) - .5) - .47);
        vec3 deep = vec3(.25,.34,.43), ice = vec3(.62,.72,.80), lit = vec3(.86,.92,.97);
        float strata = n(y * 9. + n(x * .05) * 3.) * .5 + n(y * 23. + x * .02) * .5;
        vec3 c = mix(deep, ice, smoothstep(.05, .95, y * .85 + streak * .18 + strata * .12));
        c *= .9 + streak * .1 - ledge * .05;
        c = mix(c, lit, smoothstep(.80, .985, y) * .55);          // Mondlicht auf der Krone
        c += vec3(.9,.95,1.) * smoothstep(.955, .995, y) * .35;   // heller Grat
        c = mix(c * .45, c, smoothstep(.0, .3, y));               // Schatten am Fu\xDF
        gl_FragColor = vec4(applyFog(c, vD), 1.);
      }`}),s=new Wt(t,i);return s.position.set(0,15/2-.3,-62),s}function RT(r,e){let t=[];for(let a=0;a<=6;a++)t.push(new N(16+(a%2?5:0),.4+a*2.25,-60.4));let s=new ia(new Tn().setFromPoints(t),new $s({color:9071178,transparent:!0,opacity:.55,fog:!0}));r.add(s);let o=Zd();t.forEach((a,l)=>{if(l%2)return;let c=new Tr(new ji({map:o,blending:Ar,depthWrite:!1,transparent:!0,opacity:.8,fog:!1}));c.position.copy(a),c.scale.setScalar(1.1),r.add(c),e.push({s:c,base:1.1,seed:l*1.7})})}function PT(r,e,t){let n=new Yi,i=new Pi({color:922392,fog:!0}),s=(c,h,u,d,f,g)=>{let _=new Wt(new br(c,h,u),i);return _.position.set(d,f+h/2,g),n.add(_),_};s(14,3.4,5,0,0,0),s(4.4,8,4.4,-4,0,.4),s(2.2,11,2.2,5.2,0,-.6),s(2,6.5,2,-8.4,0,.6),s(26,1.6,1.2,1,0,3.2),[[-4,8,.4,4.4],[5.2,11,-.6,2.2],[-8.4,6.5,.6,2]].forEach(([c,h,u,d])=>{for(let f=0;f<3;f++)s(d/5,.6,d/5,c-d/2+d/10+f*(d*.4),h,u-d/2+d/10);for(let f=0;f<3;f++)s(d/5,.6,d/5,c-d/2+d/10+f*(d*.4),h,u+d/2-d/10)});let o=new bi(.34,.6);[[-4.6,5.6,2.62],[-3.3,5.6,2.62],[5.2,8.4,.52],[1,2,2.52],[3.4,2,2.52],[-1.4,2,2.52]].forEach(([c,h,u],d)=>{let f=new Pi({color:16757850,fog:!0,transparent:!0}),g=new Wt(o,f);g.position.set(c,h,u),n.add(g),t.push({m:f,seed:d*2.3})});let a=Zd();[[-12.6,1.8,3.9],[-2,1.8,3.9],[8,1.8,3.9],[13.6,1.8,3.9]].forEach(([c,h,u],d)=>{let f=new Tr(new ji({map:a,blending:Ar,depthWrite:!1,transparent:!0,fog:!1}));f.position.set(c,h,u),f.scale.setScalar(2.2),n.add(f),e.push({s:f,base:2.2,seed:10+d})}),n.position.set(-14,0,-50),n.scale.setScalar(.8),n.rotation.y=.1,r.add(n);let l=new va(16751176,18,26,1.6);return l.position.set(-14,3,-44),r.add(l),l}function Y_(r,e,t,n,i){let s=Z_(i),o=new Float32Array(r*3),a=new Float32Array(r),l=new Float32Array(r);for(let u=0;u<r;u++)o[u*3]=(s()-.5)*e.w,o[u*3+1]=s()*e.h,o[u*3+2]=e.z0+s()*(e.z1-e.z0),a[u]=t[0]+s()*(t[1]-t[0]),l[u]=s();let c=new Tn;c.setAttribute("position",new dn(o,3)),c.setAttribute("aSize",new sn(a,1)),c.setAttribute("aSeed",new sn(l,1));let h=new wn({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uH:{value:e.h},uW:{value:e.w},uWind:{value:1},uPx:{value:1},uOp:{value:n}},vertexShader:`attribute float aSize; attribute float aSeed; uniform float uTime, uH, uW, uWind, uPx; varying float vA;
      void main(){
        vec3 p = position;
        float sp = .9 + aSeed * 1.4;
        p.y = mod(p.y - uTime * sp, uH) - 2.;
        p.x += sin(uTime * (.4 + aSeed) + aSeed * 30.) * .6 + uTime * uWind * (.6 + aSeed * .6);
        p.x = mod(p.x + uW * .5, uW) - uW * .5;
        vec4 mv = modelViewMatrix * vec4(p, 1.);
        gl_PointSize = aSize * uPx * (60. / -mv.z);
        vA = smoothstep(80., 8., -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`varying float vA; uniform float uOp;
      void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .0, d); gl_FragColor = vec4(vec3(.93,.96,1.), a * vA * uOp); }`});return new ra(c,h)}function jE({home:r,reduce:e,intro:t}){let n=r?document.querySelector(".homeToday"):document.querySelector("body.fieldPage .pageContent"),i,s;try{i=document.createElement("canvas"),i.className="cineCanvas",i.setAttribute("aria-hidden","true"),s=new fh({canvas:i,antialias:!1,powerPreference:"low-power"})}catch{return null}let o=Math.min(devicePixelRatio||1,1.6);s.setPixelRatio(o),s.setClearColor(Yd),document.body.prepend(i),document.documentElement.classList.add("cine");let a=new ta;a.fog=new ea(Yd,.0085);let l=new rn(46,1,.1,600);a.add(new xa(9413560,1712683,1.1));let c=new Ma(13162214,1.2);c.position.set(30,40,20),a.add(c);let h=AT();a.add(h),a.add(qd(-140,8,26,3490383,1)),a.add(qd(-24,-1.2,4.2,1317666,2)),a.add(qd(-12,-1.6,2.6,856599,4));let u=CT();a.add(u);let d=new Wt(new bi(500,200,1,1),new ga({color:6187896}));d.rotation.x=-Math.PI/2,d.position.set(0,0,-40),a.add(d);let f=[],g=[];RT(a,f);let _=PT(a,f,g),m=[],p=wT();for(let C=0;C<0;C++){let Ce=new Wt(new bi(160,14),new Pi({map:p,transparent:!0,depthWrite:!1,opacity:.9,fog:!1}));Ce.position.set((C-1.5)*40,1.6+C*.4,-54+C*9),a.add(Ce),m.push(Ce)}let T=innerWidth<700,S=Y_(T?1400:2600,{w:90,h:34,z0:-34,z1:6},[1.2,2.6],.8,3),x=Y_(1,{w:30,h:18,z0:6,z1:10},[5,10],.18,5);a.add(S);let w=Zd("rgba(235,242,255,1)","rgba(160,180,210,0)"),A=new Tr(new ji({map:w,blending:Ar,depthWrite:!1,transparent:!0,opacity:.35,fog:!1})),E=new Tr(new ji({map:w,blending:Ar,depthWrite:!1,transparent:!0,opacity:1,fog:!1}));A.scale.setScalar(70),E.scale.setScalar(9),A.position.set(22,66,-150),E.position.set(22,66,-149),a.add(A,E);let I={y:2.2,z:15,ly:11.2},v={p:0,intro:t&&!e?1:0,px:0,py:0},y=new N;function L(){let C=innerWidth,Ce=innerHeight;s.setSize(C,Ce,!1),i.style.width=C+"px",i.style.height=Ce+"px",l.aspect=C/Ce,l.fov=C/Ce<.7?58:46,l.updateProjectionMatrix(),S.material.uniforms.uPx.value=x.material.uniforms.uPx.value=o*(Ce/800)}L();let U=r?document.querySelector(".homeToday"):null,V=0;function G(){if(!U)return;U.style.marginTop="";let C=parseFloat(getComputedStyle(U).marginTop)||0,Ce=U.getBoundingClientRect().top+scrollY;V=Math.max(0,Math.round(innerHeight*.9-96-Ce)),U.style.marginTop=C+V+"px"}G(),window.dispatchEvent(new Event("kochbuch:sceneresize"));let W=0,H=!1,Y=performance.now(),k=Y,te=()=>n?n.getBoundingClientRect().top+scrollY+40:innerHeight;function P(C){W=0;let Ce=Math.min(.05,(C-k)/1e3);k=C;let we=(C-Y)/1e3,ue=e?0:we;h.material.uniforms.uTime.value=ue,S.material.uniforms.uTime.value=ue,x.material.uniforms.uTime.value=ue*.7,f.forEach(Ie=>{let Xe=.82+.1*Math.sin(ue*9+Ie.seed)+.08*Math.sin(ue*23+Ie.seed*3);Ie.s.scale.setScalar(Ie.base*Xe),Ie.s.material.opacity=.7+.3*Xe}),g.forEach(Ie=>{let Xe=.85+.15*Math.sin(ue*3+Ie.seed)*Math.sin(ue*7.3+Ie.seed);Ie.m.opacity=Xe}),_.intensity=16+4*Math.sin(ue*11)*Math.sin(ue*3.1),m.forEach((Ie,Xe)=>{Ie.position.x=((Xe-1.5)*40+ue*(.6+Xe*.25))%120-(Xe%2?0:20)});let F=v.p,Je=v.intro,ve=e?0:Math.sin(ue*.25)*.25;l.position.set(v.px*1.2+Math.sin(ue*.11)*.4*(e?0:1),I.y+F*4.5+ve+Je*22+v.py*.5,I.z-F*9+Je*42),y.set(v.px*2,I.ly+F*1.5+Je*6,-46),l.lookAt(y),s.render(a,l),H&&!e&&(W=requestAnimationFrame(P))}function le(){H||(H=!0,k=performance.now(),W||(W=requestAnimationFrame(P)))}function Ne(){H=!1,W&&(cancelAnimationFrame(W),W=0)}let Ze=()=>{document.hidden||scrollY>te()?Ne():le(),e&&P(performance.now())},We=Qn.context(()=>{}),Fe=document.querySelector(r?".homeGreetingTitle":".pageTitleBlock .h1"),J=null;We.add(()=>{if(Fe&&!e){J=Fe.textContent;let Ce=J.split(`
`),we=ue=>ue.replace(/[&<>]/g,F=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[F]);Fe.innerHTML=Ce.map(ue=>ue.split(" ").map(F=>`<span class="cineW">${[...F].map(Je=>`<span class="cineCh">${we(Je)}</span>`).join("")}</span>`).join(" ")).join("<br>"),Fe.setAttribute("aria-label",J.replace(/\n/g," ")),Qn.from(Fe.querySelectorAll(".cineCh"),{opacity:0,yPercent:60,duration:1.1,ease:"power3.out",stagger:.028,delay:K()})}let C=r?".homeBrand, .homeGreetingSub, .homeContinue, .searchRow, .homeQuick, .houseCup":".fieldExtra";if(e||Qn.from(C,{opacity:0,y:14,duration:.9,ease:"power3.out",stagger:.07,delay:K()+.35,clearProps:"transform,opacity"}),Qn.fromTo(i,{opacity:0},{opacity:1,duration:e?.15:1.2,ease:"power2.out"}),!e){et.create({start:0,end:()=>Math.max(200,te()-innerHeight*.25),scrub:.8,onUpdate:ue=>{v.p=ue.progress}});let Ce=document.querySelector(r?".homeGreeting":".pageTitleBlock");Ce&&Qn.to(Ce,{opacity:0,ease:"none",scrollTrigger:{start:0,end:()=>innerHeight*.45,scrub:!0}});let we=r&&document.querySelector(".homeToday .homeFeatured .rcImg img");we&&Qn.fromTo(we,{scale:1.22},{scale:1,ease:"none",scrollTrigger:{trigger:we.closest(".rcImg"),start:"top bottom",end:"top 30%",scrub:.6}})}});function K(){return v.intro?2.4:.15}let fe=setTimeout(()=>{document.querySelectorAll(".cineCh").forEach(C=>{C.style.opacity="",C.style.transform=""}),Qn.set(r?".homeBrand, .homeGreetingSub, .homeContinue, .searchRow, .homeQuick, .houseCup":".fieldExtra",{clearProps:"transform,opacity"})},(K()+2.4)*1e3),_e=null;if(v.intro){_e=document.createElement("div"),_e.className="cineIntro",_e.setAttribute("aria-hidden","true"),_e.innerHTML='<div class="cineIntroInner"><span class="cineIntroWord">Nordwall</span><i class="cineIntroRule"></i><span class="cineIntroSub">Kochbuch des hohen Nordens</span></div>',document.body.appendChild(_e);let C=Qn.timeline({onComplete:()=>{_e?.remove(),_e=null}});C.from(".cineIntroWord",{opacity:0,scale:1.18,duration:1.4,ease:"power2.out"},.1).from(".cineIntroRule",{scaleX:0,duration:1,ease:"power3.inOut"},.5).from(".cineIntroSub",{opacity:0,y:8,duration:.8,ease:"power2.out"},.9).to(v,{intro:0,duration:2.8,ease:"power3.inOut"},.6).to(_e,{opacity:0,duration:.9,ease:"power2.inOut"},1.9),_e.addEventListener("click",()=>C.progress(1))}let Te=matchMedia("(hover:hover) and (pointer:fine)").matches,ke=C=>{Qn.to(v,{px:C.clientX/innerWidth-.5,py:-(C.clientY/innerHeight-.5),duration:1.2,ease:"power3.out",overwrite:!0})};Te&&!e&&addEventListener("pointermove",ke,{passive:!0});let ct=()=>{L(),G(),et.refresh(),Ze()};return addEventListener("resize",ct),addEventListener("scroll",Ze,{passive:!0}),document.addEventListener("visibilitychange",Ze),Ze(),e&&P(performance.now()),{stop(){Ne(),clearTimeout(fe),We.revert(),et.getAll().forEach(C=>C.kill()),removeEventListener("pointermove",ke),removeEventListener("resize",ct),removeEventListener("scroll",Ze),document.removeEventListener("visibilitychange",Ze),Fe&&J!==null&&(Fe.textContent=J,Fe.removeAttribute("aria-label")),U&&(U.style.marginTop=""),_e?.remove(),s.dispose(),i.remove(),document.documentElement.classList.remove("cine"),window.dispatchEvent(new Event("kochbuch:sceneresize"))}}}export{jE as start};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
