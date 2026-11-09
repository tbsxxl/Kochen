var Ip=0,ju=1,Dp=2;var ef=1,Lp=2,Ri=3,Yi=0,wn=1,Pi=2,Qi=0,Zi=1,Qs=2,tf=3,nf=4,Up=5,xr=100,Fp=101,Np=102,Op=103,Bp=104,zp=200,kp=201,Vp=202,Hp=203,Pl=204,Il=205,Gp=206,Wp=207,Xp=208,qp=209,Yp=210,Zp=211,$p=212,Jp=213,Kp=214,dc=0,pc=1,mc=2,Xr=3,gc=4,_c=5,xc=6,vc=7,yc=0,Qp=1,jp=2,ji=0,em=1,tm=2,nm=3,im=4,rm=5,sm=6,om=7;var rf=300,Jr=301,Kr=302,Mc=303,Sc=304,_a=306,Dl=1e3,_r=1001,Ll=1002,ai=1003,am=1004;var xa=1005;var yi=1006,bc=1007;var Er=1008;var bi=1009,sf=1010,of=1011,js=1012,Tc=1013,wr=1014,Ii=1015,eo=1016,Ec=1017,wc=1018,to=1020,af=35902,lf=35899,cf=1021,hf=1022,li=1023,Hs=1026,no=1027,uf=1028,Ac=1029,ff=1030,Cc=1031;var Rc=1033,va=33776,ya=33777,Ma=33778,Sa=33779,Pc=35840,Ic=35841,Dc=35842,Lc=35843,Uc=36196,Fc=37492,Nc=37496,Oc=37808,Bc=37809,zc=37810,kc=37811,Vc=37812,Hc=37813,Gc=37814,Wc=37815,Xc=37816,qc=37817,Yc=37818,Zc=37819,$c=37820,Jc=37821,Kc=36492,Qc=36494,jc=36495,eh=36283,th=36284,nh=36285,ih=36286;var Vo=2300,Ul=2301,Rl=2302,Ru=2400,Pu=2401,Iu=2402;var lm=3200,cm=3201;var df=0,hm=1,er="",Tn="srgb",qr="srgb-linear",Ho="linear",xt="srgb";var Gr=7680;var Du=519,um=512,fm=513,dm=514,pf=515,pm=516,mm=517,gm=518,_m=519,Fl=35044;var mf="300 es",vi=2e3,Go=2001;var $i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var jh=Math.PI/180,Nl=180/Math.PI;function Xi(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[r&255]+un[r>>8&255]+un[r>>16&255]+un[r>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[t&63|128]+un[t>>8&255]+"-"+un[t>>16&255]+un[t>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function e0(r,e){return(r%e+e)%e}function eu(r,e,t){return(1-t)*r+t*e}function Ai(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function vt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var xe=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ji=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],d=s[o+0],u=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=u,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==u||h!==g){let m=1-a,p=l*d+c*u+h*g+f*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let T=Math.sqrt(v),w=Math.atan2(T,p*y);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}let x=a*y;if(l=l*m+d*x,c=c*m+u*x,h=h*m+g*x,f=f*m+_*x,m===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=T,c*=T,h*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],d=s[o+1],u=s[o+2],g=s[o+3];return e[t]=a*g+h*f+l*u-c*d,e[t+1]=l*g+h*d+c*f-a*u,e[t+2]=c*g+h*u+a*d-l*f,e[t+3]=h*g-a*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),d=l(n/2),u=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"YZX":this._x=d*h*f+c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f-d*u*g;break;case"XZY":this._x=d*h*f-c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(o-i)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(s+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(s-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let u=1-t;return this._w=u*o+t*this._w,this._x=u*n+t*this._x,this._y=u*i+t*this._y,this._z=u*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tu.copy(this).projectOnVector(e),this.sub(tu)}reflect(e){return this.sub(tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tu=new F,tp=new Ji,Je=class r{constructor(e,t,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],g=n[8],_=i[0],m=i[3],p=i[6],y=i[1],v=i[4],x=i[7],T=i[2],w=i[5],A=i[8];return s[0]=o*_+a*y+l*T,s[3]=o*m+a*v+l*w,s[6]=o*p+a*x+l*A,s[1]=c*_+h*y+f*T,s[4]=c*m+h*v+f*w,s[7]=c*p+h*x+f*A,s[2]=d*_+u*y+g*T,s[5]=d*m+u*v+g*w,s[8]=d*p+u*x+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,u=c*s-o*l,g=t*f+n*d+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=f*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=u*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(nu.makeScale(e,t)),this}rotate(e){return this.premultiply(nu.makeRotation(-e)),this}translate(e,t){return this.premultiply(nu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},nu=new Je;function gf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Wo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xm(){let r=Wo("canvas");return r.style.display="block",r}var np={};function Gs(r){r in np||(np[r]=!0,console.warn(r))}function vm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var ip=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rp=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function t0(){let r={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===xt&&(i.r=qi(i.r),i.g=qi(i.g),i.b=qi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(i.r=ks(i.r),i.g=ks(i.g),i.b=ks(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===er?Ho:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Gs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Gs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[qr]:{primaries:e,whitePoint:n,transfer:Ho,toXYZ:ip,fromXYZ:rp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:ip,fromXYZ:rp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),r}var ht=t0();function qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ks(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ts,Ol=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ts===void 0&&(Ts=Wo("canvas")),Ts.width=e.width,Ts.height=e.height;let i=Ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ts}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=qi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qi(t[n]/255)*255):t[n]=qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},n0=0,Ws=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(iu(i[o].image)):s.push(iu(i[o]))}else s=iu(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function iu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ol.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var i0=0,ru=new F,Nn=class r extends $i{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=_r,i=_r,s=yi,o=Er,a=li,l=bi,c=r.DEFAULT_ANISOTROPY,h=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Xi(),this.name="",this.source=new Ws(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ru).x}get height(){return this.source.getSize(ru).y}get depth(){return this.source.getSize(ru).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dl:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case Ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dl:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case Ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=rf;Nn.DEFAULT_ANISOTROPY=1;var _t=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,x=(u+1)/2,T=(p+1)/2,w=(h+d)/4,A=(f+_)/4,C=(g+m)/4;return v>x&&v>T?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=A/n):x>T?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=w/i,s=C/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=A/s,i=C/s),this.set(n,i,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bl=class extends $i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let i={width:e,height:t,depth:n.depth},s=new Nn(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:yi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ws(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ci=class extends Bl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xo=class extends Nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ai,this.minFilter=ai,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var zl=class extends Nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ai,this.minFilter=ai,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vr=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gi):gi.fromBufferAttribute(s,o),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tl.copy(n.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),nl.subVectors(this.max,Ro),Es.subVectors(e.a,Ro),ws.subVectors(e.b,Ro),As.subVectors(e.c,Ro),ur.subVectors(ws,Es),fr.subVectors(As,ws),zr.subVectors(Es,As);let t=[0,-ur.z,ur.y,0,-fr.z,fr.y,0,-zr.z,zr.y,ur.z,0,-ur.x,fr.z,0,-fr.x,zr.z,0,-zr.x,-ur.y,ur.x,0,-fr.y,fr.x,0,-zr.y,zr.x,0];return!su(t,Es,ws,As,nl)||(t=[1,0,0,0,1,0,0,0,1],!su(t,Es,ws,As,nl))?!1:(il.crossVectors(ur,fr),t=[il.x,il.y,il.z],su(t,Es,ws,As,nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zi=[new F,new F,new F,new F,new F,new F,new F,new F],gi=new F,tl=new vr,Es=new F,ws=new F,As=new F,ur=new F,fr=new F,zr=new F,Ro=new F,nl=new F,il=new F,kr=new F;function su(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){kr.fromArray(r,s);let a=i.x*Math.abs(kr.x)+i.y*Math.abs(kr.y)+i.z*Math.abs(kr.z),l=e.dot(kr),c=t.dot(kr),h=n.dot(kr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var r0=new vr,Po=new F,ou=new F,yr=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):r0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);let t=Po.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Po,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(ou)),this.expandByPoint(Po.copy(e.center).sub(ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ki=new F,au=new F,rl=new F,dr=new F,lu=new F,sl=new F,cu=new F,Xs=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){au.copy(e).add(t).multiplyScalar(.5),rl.copy(t).sub(e).normalize(),dr.copy(this.origin).sub(au);let s=e.distanceTo(t)*.5,o=-this.direction.dot(rl),a=dr.dot(this.direction),l=-dr.dot(rl),c=dr.lengthSq(),h=Math.abs(1-o*o),f,d,u,g;if(h>0)if(f=o*l-a,d=o*a-l,g=s*h,f>=0)if(d>=-g)if(d<=g){let _=1/h;f*=_,d*=_,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),u=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),u=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),u=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(au).addScaledVector(rl,d),u}intersectSphere(e,t){ki.subVectors(e.center,this.origin);let n=ki.dot(this.direction),i=ki.dot(ki)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,n,i,s){lu.subVectors(t,e),sl.subVectors(n,e),cu.crossVectors(lu,sl);let o=this.direction.dot(cu),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;dr.subVectors(this.origin,e);let l=a*this.direction.dot(sl.crossVectors(dr,sl));if(l<0)return null;let c=a*this.direction.dot(lu.cross(dr));if(c<0||l+c>o)return null;let h=-a*dr.dot(cu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tt=class r{constructor(e,t,n,i,s,o,a,l,c,h,f,d,u,g,_,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,f,d,u,g,_,m)}set(e,t,n,i,s,o,a,l,c,h,f,d,u,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Cs.setFromMatrixColumn(e,0).length(),s=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=o*h,u=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+u*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,u=l*f,g=c*h,_=c*f;t[0]=d+_*a,t[4]=g*a-u,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,u=l*f,g=c*h,_=c*f;t[0]=d-_*a,t[4]=-o*f,t[8]=g+u*a,t[1]=u+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,u=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=g*c-u,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=u*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,u=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*f,t[8]=g*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*f+g,t[10]=d-_*f}else if(e.order==="XZY"){let d=o*l,u=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+_,t[5]=o*h,t[9]=u*f-g,t[2]=g*f-u,t[6]=a*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s0,e,o0)}lookAt(e,t,n){let i=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),pr.crossVectors(n,Xn),pr.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),pr.crossVectors(n,Xn)),pr.normalize(),ol.crossVectors(Xn,pr),i[0]=pr.x,i[4]=ol.x,i[8]=Xn.x,i[1]=pr.y,i[5]=ol.y,i[9]=Xn.y,i[2]=pr.z,i[6]=ol.z,i[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],v=n[7],x=n[11],T=n[15],w=i[0],A=i[4],C=i[8],M=i[12],S=i[1],I=i[5],D=i[9],k=i[13],H=i[2],W=i[6],G=i[10],Z=i[14],V=i[3],ne=i[7],L=i[11],ae=i[15];return s[0]=o*w+a*S+l*H+c*V,s[4]=o*A+a*I+l*W+c*ne,s[8]=o*C+a*D+l*G+c*L,s[12]=o*M+a*k+l*Z+c*ae,s[1]=h*w+f*S+d*H+u*V,s[5]=h*A+f*I+d*W+u*ne,s[9]=h*C+f*D+d*G+u*L,s[13]=h*M+f*k+d*Z+u*ae,s[2]=g*w+_*S+m*H+p*V,s[6]=g*A+_*I+m*W+p*ne,s[10]=g*C+_*D+m*G+p*L,s[14]=g*M+_*k+m*Z+p*ae,s[3]=y*w+v*S+x*H+T*V,s[7]=y*A+v*I+x*W+T*ne,s[11]=y*C+v*D+x*G+T*L,s[15]=y*M+v*k+x*Z+T*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-i*c*f-s*a*d+n*c*d+i*a*u-n*l*u)+_*(+t*l*u-t*c*d+s*o*d-i*o*u+i*c*h-s*l*h)+m*(+t*c*f-t*a*u-s*o*f+n*o*u+s*a*h-n*c*h)+p*(-i*a*h-t*l*f+t*a*d+i*o*f-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=f*m*c-_*d*c+_*l*u-a*m*u-f*l*p+a*d*p,v=g*d*c-h*m*c-g*l*u+o*m*u+h*l*p-o*d*p,x=h*_*c-g*f*c+g*a*u-o*_*u-h*a*p+o*f*p,T=g*f*l-h*_*l-g*a*d+o*_*d+h*a*m-o*f*m,w=t*y+n*v+i*x+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/w;return e[0]=y*A,e[1]=(_*d*s-f*m*s-_*i*u+n*m*u+f*i*p-n*d*p)*A,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*A,e[3]=(f*l*s-a*d*s-f*i*c+n*d*c+a*i*u-n*l*u)*A,e[4]=v*A,e[5]=(h*m*s-g*d*s+g*i*u-t*m*u-h*i*p+t*d*p)*A,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*A,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*u+t*l*u)*A,e[8]=x*A,e[9]=(g*f*s-h*_*s-g*n*u+t*_*u+h*n*p-t*f*p)*A,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*A,e[11]=(h*a*s-o*f*s-h*n*c+t*f*c+o*n*u-t*a*u)*A,e[12]=T*A,e[13]=(h*_*i-g*f*i+g*n*d-t*_*d-h*n*m+t*f*m)*A,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*f*i-h*a*i+h*n*l-t*f*l-o*n*d+t*a*d)*A,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,f=a+a,d=s*c,u=s*h,g=s*f,_=o*h,m=o*f,p=a*f,y=l*c,v=l*h,x=l*f,T=n.x,w=n.y,A=n.z;return i[0]=(1-(_+p))*T,i[1]=(u+x)*T,i[2]=(g-v)*T,i[3]=0,i[4]=(u-x)*w,i[5]=(1-(d+p))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(g+v)*A,i[9]=(m-y)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Cs.set(i[0],i[1],i[2]).length(),o=Cs.set(i[4],i[5],i[6]).length(),a=Cs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],_i.copy(this);let c=1/s,h=1/o,f=1/a;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=f,_i.elements[9]*=f,_i.elements[10]*=f,t.setFromRotationMatrix(_i),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=vi,l=!1){let c=this.elements,h=2*s/(t-e),f=2*s/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i),g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===vi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Go)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=vi,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),u=-(n+i)/(n-i),g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===vi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Go)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Cs=new F,_i=new Tt,s0=new F(0,0,0),o0=new F(1,1,1),pr=new F,ol=new F,Xn=new F,sp=new Tt,op=new Ji,Mi=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return op.setFromEuler(this),this.setFromQuaternion(op,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mi.DEFAULT_ORDER="XYZ";var qo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},a0=0,ap=new F,Rs=new Ji,Vi=new Tt,al=new F,Io=new F,l0=new F,c0=new Ji,lp=new F(1,0,0),cp=new F(0,1,0),hp=new F(0,0,1),up={type:"added"},h0={type:"removed"},Ps={type:"childadded",child:null},hu={type:"childremoved",child:null},Jt=class r extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new F,t=new Mi,n=new Ji,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Je}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,t){return Rs.setFromAxisAngle(e,t),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(lp,e)}rotateY(e){return this.rotateOnAxis(cp,e)}rotateZ(e){return this.rotateOnAxis(hp,e)}translateOnAxis(e,t){return ap.copy(e).applyQuaternion(this.quaternion),this.position.add(ap.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lp,e)}translateY(e){return this.translateOnAxis(cp,e)}translateZ(e){return this.translateOnAxis(hp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?al.copy(e):al.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Io,al,this.up):Vi.lookAt(al,Io,this.up),this.quaternion.setFromRotationMatrix(Vi),i&&(Vi.extractRotation(i.matrixWorld),Rs.setFromRotationMatrix(Vi),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(up),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h0),hu.child=e,this.dispatchEvent(hu),hu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(up),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,l0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,c0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),u=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Jt.DEFAULT_UP=new F(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xi=new F,Hi=new F,uu=new F,Gi=new F,Is=new F,Ds=new F,fp=new F,fu=new F,du=new F,pu=new F,mu=new _t,gu=new _t,_u=new _t,Wi=class r{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xi.subVectors(e,t),i.cross(xi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){xi.subVectors(i,t),Hi.subVectors(n,t),uu.subVectors(e,t);let o=xi.dot(xi),a=xi.dot(Hi),l=xi.dot(uu),c=Hi.dot(Hi),h=Hi.dot(uu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let d=1/f,u=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-u-g,g,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gi.x),l.addScaledVector(o,Gi.y),l.addScaledVector(a,Gi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return mu.setScalar(0),gu.setScalar(0),_u.setScalar(0),mu.fromBufferAttribute(e,t),gu.fromBufferAttribute(e,n),_u.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(mu,s.x),o.addScaledVector(gu,s.y),o.addScaledVector(_u,s.z),o}static isFrontFacing(e,t,n,i){return xi.subVectors(n,t),Hi.subVectors(e,t),xi.cross(Hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),xi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Is.subVectors(i,n),Ds.subVectors(s,n),fu.subVectors(e,n);let l=Is.dot(fu),c=Ds.dot(fu);if(l<=0&&c<=0)return t.copy(n);du.subVectors(e,i);let h=Is.dot(du),f=Ds.dot(du);if(h>=0&&f<=h)return t.copy(i);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Is,o);pu.subVectors(e,s);let u=Is.dot(pu),g=Ds.dot(pu);if(g>=0&&u<=g)return t.copy(s);let _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ds,a);let m=h*g-u*f;if(m<=0&&f-h>=0&&u-g>=0)return fp.subVectors(s,i),a=(f-h)/(f-h+(u-g)),t.copy(i).addScaledVector(fp,a);let p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Is,o).addScaledVector(Ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ym={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},ll={h:0,s:0,l:0};function xu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=e0(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=xu(o,s,e+1/3),this.g=xu(o,s,e),this.b=xu(o,s,e-1/3)}return ht.colorSpaceToWorking(this,i),this}setStyle(e,t=Tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){let n=ym[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return ht.workingToColorSpace(fn.copy(this),e),Math.round(at(fn.r*255,0,255))*65536+Math.round(at(fn.g*255,0,255))*256+Math.round(at(fn.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(fn.copy(this),t);let n=fn.r,i=fn.g,s=fn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Tn){ht.workingToColorSpace(fn.copy(this),e);let t=fn.r,n=fn.g,i=fn.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+t,mr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mr),e.getHSL(ll);let n=eu(mr.h,ll.h,t),i=eu(mr.s,ll.s,t),s=eu(mr.l,ll.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new Ze;Ze.NAMES=ym;var u0=0,Si=class extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Zi,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Il,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==Yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pl&&(n.blendSrc=this.blendSrc),this.blendDst!==Il&&(n.blendDst=this.blendDst),this.blendEquation!==xr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Mr=class extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Wt=new F,cl=new xe,f0=0,dn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:f0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fl,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cl.fromBufferAttribute(this,t),cl.applyMatrix3(e),this.setXY(t,cl.x,cl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fl&&(e.usage=this.usage),e}};var Yo=class extends dn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Zo=class extends dn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends dn{constructor(e,t,n){super(new Float32Array(e),t,n)}},d0=0,oi=new Tt,vu=new Jt,Ls=new F,qn=new vr,Do=new vr,tn=new F,Xt=class r extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gf(e)?Zo:Yo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,n){return oi.makeTranslation(e,t,n),this.applyMatrix4(oi),this}scale(e,t,n){return oi.makeScale(e,t,n),this.applyMatrix4(oi),this}lookAt(e){return vu.lookAt(e),vu.updateMatrix(),this.applyMatrix4(vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];qn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(qn.min,Do.min),qn.expandByPoint(tn),tn.addVectors(qn.max,Do.max),qn.expandByPoint(tn)):(qn.expandByPoint(Do.min),qn.expandByPoint(Do.max))}qn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)tn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(tn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&(Ls.fromBufferAttribute(e,c),tn.add(Ls)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new F,l[C]=new F;let c=new F,h=new F,f=new F,d=new xe,u=new xe,g=new xe,_=new F,m=new F;function p(C,M,S){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,S),d.fromBufferAttribute(s,C),u.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),h.sub(c),f.sub(c),u.sub(d),g.sub(d);let I=1/(u.x*g.y-g.x*u.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(I),m.copy(f).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(I),a[C].add(_),a[M].add(_),a[S].add(_),l[C].add(m),l[M].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,M=y.length;C<M;++C){let S=y[C],I=S.start,D=S.count;for(let k=I,H=I+D;k<H;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let v=new F,x=new F,T=new F,w=new F;function A(C){T.fromBufferAttribute(i,C),w.copy(T);let M=a[C];v.copy(M),v.sub(T.multiplyScalar(T.dot(M))).normalize(),x.crossVectors(w,M);let I=x.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,I)}for(let C=0,M=y.length;C<M;++C){let S=y[C],I=S.start,D=S.count;for(let k=I,H=I+D;k<H;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new F,s=new F,o=new F,a=new F,l=new F,c=new F,h=new F,f=new F;if(e)for(let d=0,u=e.count;d<u;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),u=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[u++]}return new dn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=e(d,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],f=s[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dp=new Tt,Vr=new Xs,hl=new yr,pp=new F,ul=new F,fl=new F,dl=new F,yu=new F,pl=new F,mp=new F,ml=new F,nn=class extends Jt{constructor(e=new Xt,t=new Mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){pl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],f=s[l];h!==0&&(yu.fromBufferAttribute(f,e),o?pl.addScaledVector(yu,h):pl.addScaledVector(yu.sub(t),h))}t.add(pl)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hl.copy(n.boundingSphere),hl.applyMatrix4(s),Vr.copy(e.ray).recast(e.near),!(hl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(hl,pp)===null||Vr.origin.distanceToSquared(pp)>(e.far-e.near)**2))&&(dp.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(dp),!(n.boundingBox!==null&&Vr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,u.start),v=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let x=y,T=v;x<T;x+=3){let w=a.getX(x),A=a.getX(x+1),C=a.getX(x+2);i=gl(this,p,e,n,c,h,f,w,A,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){let y=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);i=gl(this,o,e,n,c,h,f,y,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,u.start),v=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let x=y,T=v;x<T;x+=3){let w=x,A=x+1,C=x+2;i=gl(this,p,e,n,c,h,f,w,A,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){let y=m,v=m+1,x=m+2;i=gl(this,o,e,n,c,h,f,y,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function p0(r,e,t,n,i,s,o,a){let l;if(e.side===wn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Yi,a),l===null)return null;ml.copy(a),ml.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(ml);return c<t.near||c>t.far?null:{distance:c,point:ml.clone(),object:r}}function gl(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,ul),r.getVertexPosition(l,fl),r.getVertexPosition(c,dl);let h=p0(r,e,t,n,ul,fl,dl,mp);if(h){let f=new F;Wi.getBarycoord(mp,ul,fl,dl,f),i&&(h.uv=Wi.getInterpolatedAttribute(i,a,l,c,f,new xe)),s&&(h.uv1=Wi.getInterpolatedAttribute(s,a,l,c,f,new xe)),o&&(h.normal=Wi.getInterpolatedAttribute(o,a,l,c,f,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};Wi.getNormal(ul,fl,dl,d.normal),h.face=d,h.barycoord=f}return h}var Sr=class r extends Xt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,u=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(f,2));function g(_,m,p,y,v,x,T,w,A,C,M){let S=x/A,I=T/C,D=x/2,k=T/2,H=w/2,W=A+1,G=C+1,Z=0,V=0,ne=new F;for(let L=0;L<G;L++){let ae=L*I-k;for(let he=0;he<W;he++){let Pe=he*S-D;ne[_]=Pe*y,ne[m]=ae*v,ne[p]=H,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[m]=0,ne[p]=w>0?1:-1,h.push(ne.x,ne.y,ne.z),f.push(he/A),f.push(1-L/C),Z+=1}}for(let L=0;L<C;L++)for(let ae=0;ae<A;ae++){let he=d+ae+W*L,Pe=d+ae+W*(L+1),Le=d+(ae+1)+W*(L+1),ze=d+(ae+1)+W*L;l.push(he,Pe,ze),l.push(Pe,Le,ze),V+=6}a.addGroup(u,V,M),u+=V,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Qr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function pn(r){let e={};for(let t=0;t<r.length;t++){let n=Qr(r[t]);for(let i in n)e[i]=n[i]}return e}function m0(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function _f(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Mm={clone:Qr,merge:pn},g0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g0,this.fragmentShader=_0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qr(e.uniforms),this.uniformsGroups=m0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},$o=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gr=new F,gp=new xe,_p=new xe,on=class extends $o{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(jh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,t){return this.getViewBounds(e,gp,_p),t.subVectors(_p,gp)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jh*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Us=-90,Fs=1,kl=class extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new on(Us,Fs,e,t);i.layers=this.layers,this.add(i);let s=new on(Us,Fs,e,t);s.layers=this.layers,this.add(s);let o=new on(Us,Fs,e,t);o.layers=this.layers,this.add(o);let a=new on(Us,Fs,e,t);a.layers=this.layers,this.add(a);let l=new on(Us,Fs,e,t);l.layers=this.layers,this.add(l);let c=new on(Us,Fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Go)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Jo=class extends Nn{constructor(e=[],t=Jr,n,i,s,o,a,l,c,h){super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vl=class extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Jo(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Sr(5,5,5),s=new En({name:"CubemapFromEquirect",uniforms:Qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:Qi});s.uniforms.tEquirect.value=t;let o=new nn(i,s),a=t.minFilter;return t.minFilter===Er&&(t.minFilter=yi),new kl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},Wr=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},x0={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Wr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ko=class r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ze(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Qo=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fl,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new F,jo=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ys=class extends Si{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ns,Lo=new F,Os=new F,Bs=new F,zs=new xe,Uo=new xe,Sm=new Tt,_l=new F,Fo=new F,xl=new F,xp=new xe,Mu=new xe,vp=new xe,ea=class extends Jt{constructor(e=new Ys){if(super(),this.isSprite=!0,this.type="Sprite",Ns===void 0){Ns=new Xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hl(t,5);Ns.setIndex([0,1,2,0,2,3]),Ns.setAttribute("position",new jo(n,3,0,!1)),Ns.setAttribute("uv",new jo(n,2,3,!1))}this.geometry=Ns,this.material=e,this.center=new xe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),Sm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Bs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-Bs.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;vl(_l.set(-.5,-.5,0),Bs,o,Os,i,s),vl(Fo.set(.5,-.5,0),Bs,o,Os,i,s),vl(xl.set(.5,.5,0),Bs,o,Os,i,s),xp.set(0,0),Mu.set(1,0),vp.set(1,1);let a=e.ray.intersectTriangle(_l,Fo,xl,!1,Lo);if(a===null&&(vl(Fo.set(-.5,.5,0),Bs,o,Os,i,s),Mu.set(0,1),a=e.ray.intersectTriangle(_l,xl,Fo,!1,Lo),a===null))return;let l=e.ray.origin.distanceTo(Lo);l<e.near||l>e.far||t.push({distance:l,point:Lo.clone(),uv:Wi.getInterpolation(Lo,_l,Fo,xl,xp,Mu,vp,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function vl(r,e,t,n,i,s){zs.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Uo.x=s*zs.x-i*zs.y,Uo.y=i*zs.x+s*zs.y):Uo.copy(zs),r.copy(e),r.x+=Uo.x,r.y+=Uo.y,r.applyMatrix4(Sm)}var Su=new F,v0=new F,y0=new Je,wi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Su.subVectors(n,t).cross(v0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Su),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||y0.getNormalMatrix(e),i=this.coplanarPoint(Su).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hr=new yr,M0=new xe(.5,.5),yl=new F,Zs=class{constructor(e=new wi,t=new wi,n=new wi,i=new wi,s=new wi,o=new wi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vi,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],f=s[5],d=s[6],u=s[7],g=s[8],_=s[9],m=s[10],p=s[11],y=s[12],v=s[13],x=s[14],T=s[15];if(i[0].setComponents(c-o,u-h,p-g,T-y).normalize(),i[1].setComponents(c+o,u+h,p+g,T+y).normalize(),i[2].setComponents(c+a,u+f,p+_,T+v).normalize(),i[3].setComponents(c-a,u-f,p-_,T-v).normalize(),n)i[4].setComponents(l,d,m,x).normalize(),i[5].setComponents(c-l,u-d,p-m,T-x).normalize();else if(i[4].setComponents(c-l,u-d,p-m,T-x).normalize(),t===vi)i[5].setComponents(c+l,u+d,p+m,T+x).normalize();else if(t===Go)i[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);let t=M0.distanceTo(e.center);return Hr.radius=.7071067811865476+t,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(yl.x=i.normal.x>0?e.max.x:e.min.x,yl.y=i.normal.y>0?e.max.y:e.min.y,yl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gl=class extends Si{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Wl=new F,Xl=new F,yp=new Tt,No=new Xs,Ml=new yr,bu=new F,Mp=new F,Lu=class extends Jt{constructor(e=new Xt,t=new Gl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Wl.fromBufferAttribute(t,i-1),Xl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Wl.distanceTo(Xl);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ml.copy(n.boundingSphere),Ml.applyMatrix4(i),Ml.radius+=s,e.ray.intersectsSphere(Ml)===!1)return;yp.copy(i).invert(),No.copy(e.ray).applyMatrix4(yp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=u,m=g-1;_<m;_+=c){let p=h.getX(_),y=h.getX(_+1),v=Sl(this,e,No,l,p,y,_);v&&t.push(v)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(u),p=Sl(this,e,No,l,_,m,g-1);p&&t.push(p)}}else{let u=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=u,m=g-1;_<m;_+=c){let p=Sl(this,e,No,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=Sl(this,e,No,l,g-1,u,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Sl(r,e,t,n,i,s,o){let a=r.geometry.attributes.position;if(Wl.fromBufferAttribute(a,i),Xl.fromBufferAttribute(a,s),t.distanceSqToSegment(Wl,Xl,bu,Mp)>n)return;bu.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(bu);if(!(c<e.near||c>e.far))return{distance:c,point:Mp.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var ql=class extends Si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sp=new Tt,Uu=new Xs,bl=new yr,Tl=new F,ta=class extends Jt{constructor(e=new Xt,t=new ql){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bl.copy(n.boundingSphere),bl.applyMatrix4(i),bl.radius+=s,e.ray.intersectsSphere(bl)===!1)return;Sp.copy(i).invert(),Uu.copy(e.ray).applyMatrix4(Sp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let g=d,_=u;g<_;g++){let m=c.getX(g);Tl.fromBufferAttribute(f,m),bp(Tl,m,l,i,e,t,this)}}else{let d=Math.max(0,o.start),u=Math.min(f.count,o.start+o.count);for(let g=d,_=u;g<_;g++)Tl.fromBufferAttribute(f,g),bp(Tl,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function bp(r,e,t,n,i,s,o){let a=Uu.distanceSqToPoint(r);if(a<t){let l=new F;Uu.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var na=class extends Nn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ia=class extends Nn{constructor(e,t,n=wr,i,s,o,a=ai,l=ai,c,h=Hs,f=1){if(h!==Hs&&h!==no)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ws(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ra=class extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Yl=class r extends Xt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],f=[],d=[],u=[],g=0,_=[],m=n/2,p=0;y(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new lt(f,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(u,2));function y(){let x=new F,T=new F,w=0,A=(t-e)/n;for(let C=0;C<=s;C++){let M=[],S=C/s,I=S*(t-e)+e;for(let D=0;D<=i;D++){let k=D/i,H=k*l+a,W=Math.sin(H),G=Math.cos(H);T.x=I*W,T.y=-S*n+m,T.z=I*G,f.push(T.x,T.y,T.z),x.set(W,A,G).normalize(),d.push(x.x,x.y,x.z),u.push(k,1-S),M.push(g++)}_.push(M)}for(let C=0;C<i;C++)for(let M=0;M<s;M++){let S=_[M][C],I=_[M+1][C],D=_[M+1][C+1],k=_[M][C+1];(e>0||M!==0)&&(h.push(S,I,k),w+=3),(t>0||M!==s-1)&&(h.push(I,D,k),w+=3)}c.addGroup(p,w,0),p+=w}function v(x){let T=g,w=new xe,A=new F,C=0,M=x===!0?e:t,S=x===!0?1:-1;for(let D=1;D<=i;D++)f.push(0,m*S,0),d.push(0,S,0),u.push(.5,.5),g++;let I=g;for(let D=0;D<=i;D++){let H=D/i*l+a,W=Math.cos(H),G=Math.sin(H);A.x=M*G,A.y=m*S,A.z=M*W,f.push(A.x,A.y,A.z),d.push(0,S,0),w.x=W*.5+.5,w.y=G*.5*S+.5,u.push(w.x,w.y),g++}for(let D=0;D<i;D++){let k=T+D,H=I+D;x===!0?h.push(H,H+1,k):h.push(H+1,H,k),C+=3}c.addGroup(p,C,x===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fu=class r extends Yl{constructor(e=1,t=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zl=class r extends Xt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(s.slice(),3)),this.setAttribute("uv",new lt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new F,x=new F,T=new F;for(let w=0;w<t.length;w+=3)u(t[w+0],v),u(t[w+1],x),u(t[w+2],T),l(v,x,T,y)}function l(y,v,x,T){let w=T+1,A=[];for(let C=0;C<=w;C++){A[C]=[];let M=y.clone().lerp(x,C/w),S=v.clone().lerp(x,C/w),I=w-C;for(let D=0;D<=I;D++)D===0&&C===w?A[C][D]=M:A[C][D]=M.clone().lerp(S,D/I)}for(let C=0;C<w;C++)for(let M=0;M<2*(w-C)-1;M++){let S=Math.floor(M/2);M%2===0?(d(A[C][S+1]),d(A[C+1][S]),d(A[C][S])):(d(A[C][S+1]),d(A[C+1][S+1]),d(A[C+1][S]))}}function c(y){let v=new F;for(let x=0;x<s.length;x+=3)v.x=s[x+0],v.y=s[x+1],v.z=s[x+2],v.normalize().multiplyScalar(y),s[x+0]=v.x,s[x+1]=v.y,s[x+2]=v.z}function h(){let y=new F;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];let x=m(y)/2/Math.PI+.5,T=p(y)/Math.PI+.5;o.push(x,1-T)}g(),f()}function f(){for(let y=0;y<o.length;y+=6){let v=o[y+0],x=o[y+2],T=o[y+4],w=Math.max(v,x,T),A=Math.min(v,x,T);w>.9&&A<.1&&(v<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),T<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function u(y,v){let x=y*3;v.x=e[x+0],v.y=e[x+1],v.z=e[x+2]}function g(){let y=new F,v=new F,x=new F,T=new F,w=new xe,A=new xe,C=new xe;for(let M=0,S=0;M<s.length;M+=9,S+=6){y.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),w.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),C.set(o[S+4],o[S+5]),T.copy(y).add(v).add(x).divideScalar(3);let I=m(T);_(w,S+0,y,I),_(A,S+2,v,I),_(C,S+4,x,I)}}function _(y,v,x,T){T<0&&y.x===1&&(o[v]=y.x-1),x.x===0&&x.z===0&&(o[v]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}};var Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],d=n[i+1]-h,u=(o-h)/d;return(i+u)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new xe:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,i=[],s=[],o=[],a=new F,l=new Tt;for(let u=0;u<=e;u++){let g=u/e;i[u]=this.getTangentAt(g,new F)}s[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let u=1;u<=e;u++){if(s[u]=s[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(at(i[u-1].dot(i[u]),-1,1));s[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(i[u],s[u])}if(t===!0){let u=Math.acos(at(s[0].dot(s[e]),-1,1));u/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(u=-u);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],u*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},$s=class extends Yn{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new xe){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$l=class extends $s{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function xf(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,i(o,a,d,u)},calc:function(s){let o=s*s,a=o*s;return r+e*s+t*o+n*a}}}var El=new F,Tu=new xf,Eu=new xf,wu=new xf,Jl=class extends Yn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new F){let n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(El.subVectors(i[0],i[1]).add(i[0]),c=El);let f=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(El.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=El),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Tu.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,_,m),Eu.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,_,m),wu.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Tu.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Eu.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),wu.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Tu.calc(l),Eu.calc(l),wu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new F().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tp(r,e,t,n,i){let s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function S0(r,e){let t=1-r;return t*t*e}function b0(r,e){return 2*(1-r)*r*e}function T0(r,e){return r*r*e}function zo(r,e,t,n){return S0(r,e)+b0(r,t)+T0(r,n)}function E0(r,e){let t=1-r;return t*t*t*e}function w0(r,e){let t=1-r;return 3*t*t*r*e}function A0(r,e){return 3*(1-r)*r*r*e}function C0(r,e){return r*r*r*e}function ko(r,e,t,n,i){return E0(r,e)+w0(r,t)+A0(r,n)+C0(r,i)}var sa=class extends Yn{constructor(e=new xe,t=new xe,n=new xe,i=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new xe){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ko(e,i.x,s.x,o.x,a.x),ko(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Kl=class extends Yn{constructor(e=new F,t=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new F){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ko(e,i.x,s.x,o.x,a.x),ko(e,i.y,s.y,o.y,a.y),ko(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oa=class extends Yn{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ql=class extends Yn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends Yn{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(zo(e,i.x,s.x,o.x),zo(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends Yn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(zo(e,i.x,s.x,o.x),zo(e,i.y,s.y,o.y),zo(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ca=class extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){let n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(Tp(a,l.x,c.x,h.x,f.x),Tp(a,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new xe().fromArray(i))}return this}},Nu=Object.freeze({__proto__:null,ArcCurve:$l,CatmullRomCurve3:Jl,CubicBezierCurve:sa,CubicBezierCurve3:Kl,EllipseCurve:$s,LineCurve:oa,LineCurve3:Ql,QuadraticBezierCurve:aa,QuadraticBezierCurve3:la,SplineCurve:ca}),jl=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Nu[i.type]().fromJSON(i))}return this}},ha=class extends jl{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new oa(this.currentPoint.clone(),new xe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new aa(this.currentPoint.clone(),new xe(e,t),new xe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){let a=new sa(this.currentPoint.clone(),new xe(e,t),new xe(n,i),new xe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ca(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){let c=new $s(e,t,n,i,s,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Js=class extends ha{constructor(e){super(e),this.uuid=Xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new ha().fromJSON(i))}return this}};function R0(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=bm(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=U0(r,e,s,t)),r.length>80*t){a=1/0,l=1/0;let h=-1/0,f=-1/0;for(let d=t;d<i;d+=t){let u=r[d],g=r[d+1];u<a&&(a=u),g<l&&(l=g),u>h&&(h=u),g>f&&(f=g)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return ua(s,o,t,a,l,c,0),o}function bm(r,e,t,n,i){let s;if(i===X0(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=Ep(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=Ep(o/n|0,r[o],r[o+1],s);return s&&Ks(s,s.next)&&(da(s),s=s.next),s}function Yr(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ks(t,t.next)||Ut(t.prev,t,t.next)===0)){if(da(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ua(r,e,t,n,i,s,o){if(!r)return;!o&&s&&z0(r,n,i,s);let a=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?I0(r,n,i,s):P0(r)){e.push(l.i,r.i,c.i),da(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=D0(Yr(r),e),ua(r,e,t,n,i,s,2)):o===2&&L0(r,e,t,n,i,s):ua(Yr(r),e,t,n,i,s,1);break}}}function P0(r){let e=r.prev,t=r,n=r.next;if(Ut(e,t,n)>=0)return!1;let i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,s,o),f=Math.min(a,l,c),d=Math.max(i,s,o),u=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=u&&Bo(i,a,s,l,o,c,g.x,g.y)&&Ut(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function I0(r,e,t,n){let i=r.prev,s=r,o=r.next;if(Ut(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,f=s.y,d=o.y,u=Math.min(a,l,c),g=Math.min(h,f,d),_=Math.max(a,l,c),m=Math.max(h,f,d),p=Ou(u,g,e,t,n),y=Ou(_,m,e,t,n),v=r.prevZ,x=r.nextZ;for(;v&&v.z>=p&&x&&x.z<=y;){if(v.x>=u&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Bo(a,h,l,f,c,d,v.x,v.y)&&Ut(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=u&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Bo(a,h,l,f,c,d,x.x,x.y)&&Ut(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=u&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Bo(a,h,l,f,c,d,v.x,v.y)&&Ut(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=u&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Bo(a,h,l,f,c,d,x.x,x.y)&&Ut(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function D0(r,e){let t=r;do{let n=t.prev,i=t.next.next;!Ks(n,i)&&Em(n,t,t.next,i)&&fa(n,i)&&fa(i,n)&&(e.push(n.i,t.i,i.i),da(t),da(t.next),t=r=i),t=t.next}while(t!==r);return Yr(t)}function L0(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&H0(o,a)){let l=wm(o,a);o=Yr(o,o.next),l=Yr(l,l.next),ua(o,e,t,n,i,s,0),ua(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function U0(r,e,t,n){let i=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=bm(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(V0(c))}i.sort(F0);for(let s=0;s<i.length;s++)t=N0(i[s],t);return t}function F0(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function N0(r,e){let t=O0(r,e);if(!t)return e;let n=wm(t,r);return Yr(n,n.next),Yr(t,t.next)}function O0(r,e){let t=e,n=r.x,i=r.y,s=-1/0,o;if(Ks(r,t))return t;do{if(Ks(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let f=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Tm(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){let f=Math.abs(i-t.y)/(n-t.x);fa(t,r)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&B0(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function B0(r,e){return Ut(r.prev,r,e.prev)<0&&Ut(e.next,r,r.next)<0}function z0(r,e,t,n){let i=r;do i.z===0&&(i.z=Ou(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,k0(i)}function k0(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function Ou(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function V0(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Tm(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function Bo(r,e,t,n,i,s,o,a){return!(r===o&&e===a)&&Tm(r,e,t,n,i,s,o,a)}function H0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!G0(r,e)&&(fa(r,e)&&fa(e,r)&&W0(r,e)&&(Ut(r.prev,r,e.prev)||Ut(r,e.prev,e))||Ks(r,e)&&Ut(r.prev,r,r.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ks(r,e){return r.x===e.x&&r.y===e.y}function Em(r,e,t,n){let i=Al(Ut(r,e,t)),s=Al(Ut(r,e,n)),o=Al(Ut(t,n,r)),a=Al(Ut(t,n,e));return!!(i!==s&&o!==a||i===0&&wl(r,t,e)||s===0&&wl(r,n,e)||o===0&&wl(t,r,n)||a===0&&wl(t,e,n))}function wl(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Al(r){return r>0?1:r<0?-1:0}function G0(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Em(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function fa(r,e){return Ut(r.prev,r,r.next)<0?Ut(r,e,r.next)>=0&&Ut(r,r.prev,e)>=0:Ut(r,e,r.prev)<0||Ut(r,r.next,e)<0}function W0(r,e){let t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function wm(r,e){let t=Bu(r.i,r.x,r.y),n=Bu(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ep(r,e,t,n){let i=Bu(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function da(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Bu(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function X0(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var zu=class{static triangulate(e,t,n=2){return R0(e,t,n)}},Vs=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];wp(e),Ap(n,e);let o=e.length;t.forEach(wp);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Ap(n,t[l]);let a=zu.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function wp(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Ap(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var ku=class r extends Zl{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ki=class r extends Xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=e/a,d=t/l,u=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let y=p*d-o;for(let v=0;v<c;v++){let x=v*f-s;g.push(x,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let v=y+c*p,x=y+c*(p+1),T=y+1+c*(p+1),w=y+1+c*p;u.push(v,x,w),u.push(x,T,w)}this.setIndex(u),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Vu=class r extends Xt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],f=e,d=(t-e)/i,u=new F,g=new xe;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let p=s+m/n*o;u.x=f*Math.cos(p),u.y=f*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),g.x=(u.x/t+1)/2,g.y=(u.y/t+1)/2,h.push(g.x,g.y)}f+=d}for(let _=0;_<i;_++){let m=_*(n+1);for(let p=0;p<n;p++){let y=p+m,v=y,x=y+n+1,T=y+n+2,w=y+1;a.push(v,x,w),a.push(x,T,w)}}this.setIndex(a),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},pa=class r extends Xt{constructor(e=new Js([new xe(0,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new lt(i,3)),this.setAttribute("normal",new lt(s,3)),this.setAttribute("uv",new lt(o,2));function c(h){let f=i.length/3,d=h.extractPoints(t),u=d.shape,g=d.holes;Vs.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];Vs.isClockWise(y)===!0&&(g[m]=y.reverse())}let _=Vs.triangulateShape(u,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];u=u.concat(y)}for(let m=0,p=u.length;m<p;m++){let y=u[m];i.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){let y=_[m],v=y[0]+f,x=y[1]+f,T=y[2]+f;n.push(v,x,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return q0(t,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let o=t[e.shapes[i]];n.push(o)}return new r(n,e.curveSegments)}};function q0(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){let i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}var Hu=class r extends Xt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new F,d=new F,u=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let y=[],v=p/n,x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let T=0;T<=t;T++){let w=T/t;f.x=-e*Math.cos(i+w*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(i+w*s)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),m.push(w+x,1-v),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let v=h[p][y+1],x=h[p][y],T=h[p+1][y],w=h[p+1][y+1];(p!==0||o>0)&&u.push(v,x,w),(p!==n-1||l<Math.PI)&&u.push(x,T,w)}this.setIndex(u),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Gu=class r extends Xt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new F,f=new F,d=new F;for(let u=0;u<=n;u++)for(let g=0;g<=i;g++){let _=g/i*s,m=u/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=i;g++){let _=(i+1)*u+g-1,m=(i+1)*(u-1)+g-1,p=(i+1)*(u-1)+g,y=(i+1)*u+g;o.push(_,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Wu=class r extends Xt{constructor(e=new la(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new F,l=new F,c=new xe,h=new F,f=[],d=[],u=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new lt(f,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(u,2));function _(){for(let v=0;v<t;v++)m(v);m(s===!1?t:0),y(),p()}function m(v){h=e.getPointAt(v/t,h);let x=o.normals[v],T=o.binormals[v];for(let w=0;w<=i;w++){let A=w/i*Math.PI*2,C=Math.sin(A),M=-Math.cos(A);l.x=M*x.x+C*T.x,l.y=M*x.y+C*T.y,l.z=M*x.z+C*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=t;v++)for(let x=1;x<=i;x++){let T=(i+1)*(v-1)+(x-1),w=(i+1)*v+(x-1),A=(i+1)*v+x,C=(i+1)*(v-1)+x;g.push(T,w,C),g.push(w,A,C)}}function y(){for(let v=0;v<=t;v++)for(let x=0;x<=i;x++)c.x=v/t,c.y=x/i,u.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Nu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Xu=class extends Si{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=df,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ec=class extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tc=class extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Cl(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Y0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Zr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nc=class extends Zr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ru,endingEnd:Ru}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pu:s=e,a=2*t-n;break;case Iu:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pu:o=e,l=2*n-t;break;case Iu:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-u)*m+(1.5+u)*_+.5*g,x=u*m-u*_;for(let T=0;T!==a;++T)s[T]=p*o[h+T]+y*o[c+T]+v*o[l+T]+x*o[f+T];return s}},ic=class extends Zr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),f=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*h;return s}},rc=class extends Zr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Zn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cl(t,this.TimeBufferType),this.values=Cl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cl(e.times,Array),values:Cl(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new rc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vo:t=this.InterpolantFactoryMethodDiscrete;break;case Ul:t=this.InterpolantFactoryMethodLinear;break;case Rl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vo;case this.InterpolantFactoryMethodLinear:return Ul;case this.InterpolantFactoryMethodSmooth:return Rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Y0(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Rl,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let f=a*n,d=f-n,u=f+n;for(let g=0;g!==n;++g){let _=t[f+g];if(_!==t[d+g]||_!==t[u+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,d=o*n;for(let u=0;u!==n;++u)t[d+u]=t[f+u]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Ul;var br=class extends Zn{constructor(e,t,n){super(e,t,n)}};br.prototype.ValueTypeName="bool";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=Vo;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;var sc=class extends Zn{constructor(e,t,n,i){super(e,t,n,i)}};sc.prototype.ValueTypeName="color";var oc=class extends Zn{constructor(e,t,n,i){super(e,t,n,i)}};oc.prototype.ValueTypeName="number";var ac=class extends Zr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Ji.slerpFlat(s,0,o,c-a,o,c,l);return s}},ma=class extends Zn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ac(this.times,this.values,this.getValueSize(),e)}};ma.prototype.ValueTypeName="quaternion";ma.prototype.InterpolantFactoryMethodSmooth=void 0;var Tr=class extends Zn{constructor(e,t,n){super(e,t,n)}};Tr.prototype.ValueTypeName="string";Tr.prototype.ValueBufferType=Array;Tr.prototype.DefaultInterpolation=Vo;Tr.prototype.InterpolantFactoryMethodLinear=void 0;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends Zn{constructor(e,t,n,i){super(e,t,n,i)}};lc.prototype.ValueTypeName="vector";var cc=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],g=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Am=new cc,hc=class{constructor(e){this.manager=e!==void 0?e:Am,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};hc.DEFAULT_MATERIAL_NAME="__DEFAULT";var $r=class extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},qu=class extends $r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Au=new Tt,Cp=new F,Rp=new F,uc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=bi,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Cp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cp),Rp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rp),t.updateMatrixWorld(),Au.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Au,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Au)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Pp=new Tt,Oo=new F,Cu=new F,Yu=class extends uc{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Oo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Oo),Cu.copy(n.position),Cu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Cu),n.updateMatrixWorld(),i.makeTranslation(-Oo.x,-Oo.y,-Oo.z),Pp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pp,n.coordinateSystem,n.reversedDepth)}},Zu=class extends $r{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ga=class extends $o{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$u=class extends uc{constructor(){super(new ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ju=class extends $r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new $u}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ku=class extends $r{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var fc=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var vf="\\[\\]\\.:\\/",Z0=new RegExp("["+vf+"]","g"),yf="[^"+vf+"]",$0="[^"+vf.replace("\\.","")+"]",J0=/((?:WC+[\/:])*)/.source.replace("WC",yf),K0=/(WCOD+)?/.source.replace("WCOD",$0),Q0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yf),j0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yf),ex=new RegExp("^"+J0+K0+Q0+j0+"$"),tx=["material","materials","bones","map"],Qu=class{constructor(e,t,n){let i=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Z0,"")}static parseTrackName(e){let t=ex.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);tx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Qu;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var UT=new Float32Array(1);function Mf(r,e,t,n){let i=nx(n);switch(t){case cf:return r*e;case uf:return r*e/i.components*i.byteLength;case Ac:return r*e/i.components*i.byteLength;case ff:return r*e*2/i.components*i.byteLength;case Cc:return r*e*2/i.components*i.byteLength;case hf:return r*e*3/i.components*i.byteLength;case li:return r*e*4/i.components*i.byteLength;case Rc:return r*e*4/i.components*i.byteLength;case va:case ya:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ma:case Sa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ic:case Lc:return Math.max(r,16)*Math.max(e,8)/4;case Pc:case Dc:return Math.max(r,8)*Math.max(e,8)/2;case Uc:case Fc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Nc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case zc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case kc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case qc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case $c:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Kc:case Qc:case jc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case eh:case th:return Math.ceil(r/4)*Math.ceil(e/4)*8;case nh:case ih:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nx(r){switch(r){case bi:case sf:return{byteLength:1,components:1};case js:case of:case eo:return{byteLength:2,components:1};case Ec:case wc:return{byteLength:2,components:4};case wr:case Tc:case Ii:return{byteLength:4,components:1};case af:case lf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Km(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function rx(r){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=r.HALF_FLOAT:u=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=r.SHORT;else if(c instanceof Uint32Array)u=r.UNSIGNED_INT;else if(c instanceof Int32Array)u=r.INT;else if(c instanceof Int8Array)u=r.BYTE;else if(c instanceof Uint8Array)u=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,h);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){let g=f[d],_=f[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){let _=f[u];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var sx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ox=`#ifdef USE_ALPHAHASH
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
#endif`,ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ux=`#ifdef USE_AOMAP
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
#endif`,fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dx=`#ifdef USE_BATCHING
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
#endif`,px=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_x=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xx=`#ifdef USE_IRIDESCENCE
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
#endif`,vx=`#ifdef USE_BUMPMAP
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
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cx=`#define PI 3.141592653589793
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
} // validated`,Rx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Px=`vec3 transformedNormal = objectNormal;
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
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ox=`#ifdef USE_ENVMAP
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
#endif`,Bx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zx=`#ifdef USE_ENVMAP
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
#endif`,kx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qx=`#ifdef USE_GRADIENTMAP
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
}`,Yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jx=`uniform bool receiveShadow;
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
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ev=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nv=`PhysicalMaterial material;
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
#endif`,iv=`struct PhysicalMaterial {
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
}`,rv=`
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
#endif`,sv=`#if defined( RE_IndirectDiffuse )
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
#endif`,ov=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pv=`#if defined( USE_POINTS_UV )
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
#endif`,mv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_v=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yv=`#ifdef USE_MORPHTARGETS
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
#endif`,Mv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Av=`#ifdef USE_NORMALMAP
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
#endif`,Cv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Iv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ov=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gv=`float getShadowMask() {
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
}`,Wv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xv=`#ifdef USE_SKINNING
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
#endif`,qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yv=`#ifdef USE_SKINNING
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
#endif`,Zv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qv=`#ifdef USE_TRANSMISSION
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
#endif`,jv=`#ifdef USE_TRANSMISSION
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
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ry=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sy=`uniform sampler2D t2D;
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
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ay=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hy=`#include <common>
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
}`,uy=`#if DEPTH_PACKING == 3200
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
}`,fy=`#define DISTANCE
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
}`,dy=`#define DISTANCE
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
}`,py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,my=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gy=`uniform float scale;
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
}`,_y=`uniform vec3 diffuse;
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
}`,xy=`#include <common>
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
}`,vy=`uniform vec3 diffuse;
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
}`,yy=`#define LAMBERT
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
}`,My=`#define LAMBERT
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
}`,Sy=`#define MATCAP
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
}`,by=`#define MATCAP
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
}`,Ty=`#define NORMAL
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
}`,Ey=`#define NORMAL
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
}`,wy=`#define PHONG
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
}`,Ay=`#define PHONG
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
}`,Cy=`#define STANDARD
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
}`,Ry=`#define STANDARD
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
}`,Py=`#define TOON
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
}`,Iy=`#define TOON
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
}`,Dy=`uniform float size;
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Uy=`#include <common>
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
}`,Fy=`uniform vec3 color;
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
}`,Ny=`uniform float rotation;
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
}`,Oy=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:sx,alphahash_pars_fragment:ox,alphamap_fragment:ax,alphamap_pars_fragment:lx,alphatest_fragment:cx,alphatest_pars_fragment:hx,aomap_fragment:ux,aomap_pars_fragment:fx,batching_pars_vertex:dx,batching_vertex:px,begin_vertex:mx,beginnormal_vertex:gx,bsdfs:_x,iridescence_fragment:xx,bumpmap_pars_fragment:vx,clipping_planes_fragment:yx,clipping_planes_pars_fragment:Mx,clipping_planes_pars_vertex:Sx,clipping_planes_vertex:bx,color_fragment:Tx,color_pars_fragment:Ex,color_pars_vertex:wx,color_vertex:Ax,common:Cx,cube_uv_reflection_fragment:Rx,defaultnormal_vertex:Px,displacementmap_pars_vertex:Ix,displacementmap_vertex:Dx,emissivemap_fragment:Lx,emissivemap_pars_fragment:Ux,colorspace_fragment:Fx,colorspace_pars_fragment:Nx,envmap_fragment:Ox,envmap_common_pars_fragment:Bx,envmap_pars_fragment:zx,envmap_pars_vertex:kx,envmap_physical_pars_fragment:Kx,envmap_vertex:Vx,fog_vertex:Hx,fog_pars_vertex:Gx,fog_fragment:Wx,fog_pars_fragment:Xx,gradientmap_pars_fragment:qx,lightmap_pars_fragment:Yx,lights_lambert_fragment:Zx,lights_lambert_pars_fragment:$x,lights_pars_begin:Jx,lights_toon_fragment:Qx,lights_toon_pars_fragment:jx,lights_phong_fragment:ev,lights_phong_pars_fragment:tv,lights_physical_fragment:nv,lights_physical_pars_fragment:iv,lights_fragment_begin:rv,lights_fragment_maps:sv,lights_fragment_end:ov,logdepthbuf_fragment:av,logdepthbuf_pars_fragment:lv,logdepthbuf_pars_vertex:cv,logdepthbuf_vertex:hv,map_fragment:uv,map_pars_fragment:fv,map_particle_fragment:dv,map_particle_pars_fragment:pv,metalnessmap_fragment:mv,metalnessmap_pars_fragment:gv,morphinstance_vertex:_v,morphcolor_vertex:xv,morphnormal_vertex:vv,morphtarget_pars_vertex:yv,morphtarget_vertex:Mv,normal_fragment_begin:Sv,normal_fragment_maps:bv,normal_pars_fragment:Tv,normal_pars_vertex:Ev,normal_vertex:wv,normalmap_pars_fragment:Av,clearcoat_normal_fragment_begin:Cv,clearcoat_normal_fragment_maps:Rv,clearcoat_pars_fragment:Pv,iridescence_pars_fragment:Iv,opaque_fragment:Dv,packing:Lv,premultiplied_alpha_fragment:Uv,project_vertex:Fv,dithering_fragment:Nv,dithering_pars_fragment:Ov,roughnessmap_fragment:Bv,roughnessmap_pars_fragment:zv,shadowmap_pars_fragment:kv,shadowmap_pars_vertex:Vv,shadowmap_vertex:Hv,shadowmask_pars_fragment:Gv,skinbase_vertex:Wv,skinning_pars_vertex:Xv,skinning_vertex:qv,skinnormal_vertex:Yv,specularmap_fragment:Zv,specularmap_pars_fragment:$v,tonemapping_fragment:Jv,tonemapping_pars_fragment:Kv,transmission_fragment:Qv,transmission_pars_fragment:jv,uv_pars_fragment:ey,uv_pars_vertex:ty,uv_vertex:ny,worldpos_vertex:iy,background_vert:ry,background_frag:sy,backgroundCube_vert:oy,backgroundCube_frag:ay,cube_vert:ly,cube_frag:cy,depth_vert:hy,depth_frag:uy,distanceRGBA_vert:fy,distanceRGBA_frag:dy,equirect_vert:py,equirect_frag:my,linedashed_vert:gy,linedashed_frag:_y,meshbasic_vert:xy,meshbasic_frag:vy,meshlambert_vert:yy,meshlambert_frag:My,meshmatcap_vert:Sy,meshmatcap_frag:by,meshnormal_vert:Ty,meshnormal_frag:Ey,meshphong_vert:wy,meshphong_frag:Ay,meshphysical_vert:Cy,meshphysical_frag:Ry,meshtoon_vert:Py,meshtoon_frag:Iy,points_vert:Dy,points_frag:Ly,shadow_vert:Uy,shadow_frag:Fy,sprite_vert:Ny,sprite_frag:Oy},ge={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Di={basic:{uniforms:pn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:pn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ze(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:pn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:pn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:pn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ze(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:pn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:pn([ge.points,ge.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:pn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:pn([ge.common,ge.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:pn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:pn([ge.sprite,ge.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:pn([ge.common,ge.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:pn([ge.lights,ge.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Di.physical={uniforms:pn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var rh={r:0,b:0,g:0},jr=new Mi,By=new Tt;function zy(r,e,t,n,i,s,o){let a=new Ze(0),l=s===!0?0:1,c,h,f=null,d=0,u=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1,T=g(v);T===null?p(a,l):T&&T.isColor&&(p(T,1),x=!0);let w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(v,x){let T=g(x);T&&(T.isCubeTexture||T.mapping===_a)?(h===void 0&&(h=new nn(new Sr(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Qr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),jr.copy(x.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(By.makeRotationFromEuler(jr)),h.material.toneMapped=ht.getTransfer(T.colorSpace)!==xt,(f!==T||d!==T.version||u!==r.toneMapping)&&(h.material.needsUpdate=!0,f=T,d=T.version,u=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new nn(new Ki(2,2),new En({name:"BackgroundMaterial",uniforms:Qr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ht.getTransfer(T.colorSpace)!==xt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||d!==T.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,f=T,d=T.version,u=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,x){v.getRGB(rh,_f(r)),n.buffers.color.setClear(rh.r,rh.g,rh.b,x,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m,dispose:y}}function ky(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(S,I,D,k,H){let W=!1,G=f(k,D,I);s!==G&&(s=G,c(s.object)),W=u(S,k,D,H),W&&g(S,k,D,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(S,I,D,k),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function f(S,I,D){let k=D.wireframe===!0,H=n[S.id];H===void 0&&(H={},n[S.id]=H);let W=H[I.id];W===void 0&&(W={},H[I.id]=W);let G=W[k];return G===void 0&&(G=d(l()),W[k]=G),G}function d(S){let I=[],D=[],k=[];for(let H=0;H<t;H++)I[H]=0,D[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:k,object:S,attributes:{},index:null}}function u(S,I,D,k){let H=s.attributes,W=I.attributes,G=0,Z=D.getAttributes();for(let V in Z)if(Z[V].location>=0){let L=H[V],ae=W[V];if(ae===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),L===void 0||L.attribute!==ae||ae&&L.data!==ae.data)return!0;G++}return s.attributesNum!==G||s.index!==k}function g(S,I,D,k){let H={},W=I.attributes,G=0,Z=D.getAttributes();for(let V in Z)if(Z[V].location>=0){let L=W[V];L===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(L=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(L=S.instanceColor));let ae={};ae.attribute=L,L&&L.data&&(ae.data=L.data),H[V]=ae,G++}s.attributes=H,s.attributesNum=G,s.index=k}function _(){let S=s.newAttributes;for(let I=0,D=S.length;I<D;I++)S[I]=0}function m(S){p(S,0)}function p(S,I){let D=s.newAttributes,k=s.enabledAttributes,H=s.attributeDivisors;D[S]=1,k[S]===0&&(r.enableVertexAttribArray(S),k[S]=1),H[S]!==I&&(r.vertexAttribDivisor(S,I),H[S]=I)}function y(){let S=s.newAttributes,I=s.enabledAttributes;for(let D=0,k=I.length;D<k;D++)I[D]!==S[D]&&(r.disableVertexAttribArray(D),I[D]=0)}function v(S,I,D,k,H,W,G){G===!0?r.vertexAttribIPointer(S,I,D,H,W):r.vertexAttribPointer(S,I,D,k,H,W)}function x(S,I,D,k){_();let H=k.attributes,W=D.getAttributes(),G=I.defaultAttributeValues;for(let Z in W){let V=W[Z];if(V.location>=0){let ne=H[Z];if(ne===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),ne!==void 0){let L=ne.normalized,ae=ne.itemSize,he=e.get(ne);if(he===void 0)continue;let Pe=he.buffer,Le=he.type,ze=he.bytesPerElement,$=Le===r.INT||Le===r.UNSIGNED_INT||ne.gpuType===Tc;if(ne.isInterleavedBufferAttribute){let K=ne.data,fe=K.stride,Ce=ne.offset;if(K.isInstancedInterleavedBuffer){for(let Ee=0;Ee<V.locationSize;Ee++)p(V.location+Ee,K.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Ee=0;Ee<V.locationSize;Ee++)m(V.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Pe);for(let Ee=0;Ee<V.locationSize;Ee++)v(V.location+Ee,ae/V.locationSize,Le,L,fe*ze,(Ce+ae/V.locationSize*Ee)*ze,$)}else{if(ne.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)p(V.location+K,ne.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let K=0;K<V.locationSize;K++)m(V.location+K);r.bindBuffer(r.ARRAY_BUFFER,Pe);for(let K=0;K<V.locationSize;K++)v(V.location+K,ae/V.locationSize,Le,L,ae*ze,ae/V.locationSize*K*ze,$)}}else if(G!==void 0){let L=G[Z];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(V.location,L);break;case 3:r.vertexAttrib3fv(V.location,L);break;case 4:r.vertexAttrib4fv(V.location,L);break;default:r.vertexAttrib1fv(V.location,L)}}}}y()}function T(){C();for(let S in n){let I=n[S];for(let D in I){let k=I[D];for(let H in k)h(k[H].object),delete k[H];delete I[D]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;let I=n[S.id];for(let D in I){let k=I[D];for(let H in k)h(k[H].object),delete k[H];delete I[D]}delete n[S.id]}function A(S){for(let I in n){let D=n[I];if(D[S.id]===void 0)continue;let k=D[S.id];for(let H in k)h(k[H].object),delete k[H];delete D[S.id]}}function C(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Vy(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,f){f!==0&&(r.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let u=0;for(let g=0;g<f;g++)u+=h[g];t.update(u,n,1)}function l(c,h,f,d){if(f===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Hy(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==li&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let C=A===eo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==bi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ii&&!C)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:T,maxSamples:w}}function Gy(r){let e=this,t=null,n=0,i=!1,s=!1,o=new wi,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{let y=s?0:n,v=y*4,x=p.clippingState||null;l.value=x,x=h(g,d,v,u);for(let T=0;T!==v;++T)x[T]=t[T];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,g){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=u+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=u;v!==_;++v,x+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Wy(r){let e=new WeakMap;function t(o,a){return a===Mc?o.mapping=Jr:a===Sc&&(o.mapping=Kr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Mc||a===Sc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Vl(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var ro=4,Cm=[.125,.215,.35,.446,.526,.582],ns=20,Sf=new ga,Rm=new Ze,bf=null,Tf=0,Ef=0,wf=!1,ts=(1+Math.sqrt(5))/2,io=1/ts,Pm=[new F(-ts,io,0),new F(ts,io,0),new F(-io,0,ts),new F(io,0,ts),new F(0,ts,-io),new F(0,ts,io),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Xy=new F,ah=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=Xy}=s;bf=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),Ef=this._renderer.getActiveMipmapLevel(),wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bf,Tf,Ef),this._renderer.xr.enabled=wf,e.scissorTest=!1,sh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jr||e.mapping===Kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bf=this._renderer.getRenderTarget(),Tf=this._renderer.getActiveCubeFace(),Ef=this._renderer.getActiveMipmapLevel(),wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:eo,format:li,colorSpace:qr,depthBuffer:!1},i=Im(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Im(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qy(s)),this._blurMaterial=Yy(s,e,t)}return i}_compileMaterial(e){let t=new nn(this._lodPlanes[0],e);this._renderer.compile(t,Sf)}_sceneToCubeUV(e,t,n,i,s){let l=new on(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(Rm),f.toneMapping=ji,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null));let _=new Mr({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),m=new nn(new Sr,_),p=!1,y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,p=!0):(_.color.copy(Rm),p=!0);for(let v=0;v<6;v++){let x=v%3;x===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[v],s.y,s.z)):x===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[v]));let T=this._cubeSize;sh(i,x*T,v>2?T:0,T,T),f.setRenderTarget(i),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=u,f.autoClear=d,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Jr||e.mapping===Kr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dm());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;sh(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Sf)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Pm[(i-s-1)%Pm.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new nn(this._lodPlanes[i],c),d=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*ns-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):ns;m>ns&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);let p=[],y=0;for(let A=0;A<ns;++A){let C=A/_,M=Math.exp(-C*C/2);p.push(M),A===0?y+=M:A<m&&(y+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let x=this._sizeLods[i],T=3*x*(i>v-ro?i-v+ro:0),w=4*(this._cubeSize-x);sh(t,T,w,3*x,2*x),l.setRenderTarget(t),l.render(f,Sf)}};function qy(r){let e=[],t=[],n=[],i=r,s=r-ro+1+Cm.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ro?l=Cm[o-r+ro-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*u),v=new Float32Array(m*g*u),x=new Float32Array(p*g*u);for(let w=0;w<u;w++){let A=w%3*2/3-1,C=w>2?0:-1,M=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];y.set(M,_*g*w),v.set(d,m*g*w);let S=[w,w,w,w,w,w];x.set(S,p*g*w)}let T=new Xt;T.setAttribute("position",new dn(y,_)),T.setAttribute("uv",new dn(v,m)),T.setAttribute("faceIndex",new dn(x,p)),e.push(T),i>ro&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Im(r,e,t){let n=new Ci(r,e,t);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sh(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Yy(r,e,t){let n=new Float32Array(ns),i=new F(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Nf(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Dm(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nf(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Lm(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Nf(){return`

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
	`}function Zy(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Mc||l===Sc,h=l===Jr||l===Kr;if(c||h){let f=e.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ah(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let u=a.image;return c&&u&&u.height>0||h&&u&&i(u)?(t===null&&(t=new ah(r)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $y(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Gs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Jy(r,e,t,n){let i={},s=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];let u=s.get(d);u&&(e.remove(u),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let u in d)e.update(d[u],r.ARRAY_BUFFER)}function c(f){let d=[],u=f.index,g=f.attributes.position,_=0;if(u!==null){let y=u.array;_=u.version;for(let v=0,x=y.length;v<x;v+=3){let T=y[v+0],w=y[v+1],A=y[v+2];d.push(T,w,w,A,A,T)}}else if(g!==void 0){let y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){let T=v+0,w=v+1,A=v+2;d.push(T,w,w,A,A,T)}}else return;let m=new(gf(d)?Zo:Yo)(d,1);m.version=_;let p=s.get(f);p&&e.remove(p),s.set(f,m)}function h(f){let d=s.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Ky(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*o),t.update(u,n,1)}function c(d,u,g){g!==0&&(r.drawElementsInstanced(n,u,s,d*o,g),t.update(u,n,g))}function h(d,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];t.update(m,n,1)}function f(d,u,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,u[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,s,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=u[y]*_[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Qy(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jy(r,e,t){let n=new WeakMap,i=new _t;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let M=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;u===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=a.attributes.position.count*v,T=1;x>e.maxTextureSize&&(T=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*T*4*f),A=new Xo(w,x,T,f);A.type=Ii,A.needsUpdate=!0;let C=v*4;for(let S=0;S<f;S++){let I=m[S],D=p[S],k=y[S],H=x*T*4*S;for(let W=0;W<I.count;W++){let G=W*C;u===!0&&(i.fromBufferAttribute(I,W),w[H+G+0]=i.x,w[H+G+1]=i.y,w[H+G+2]=i.z,w[H+G+3]=0),g===!0&&(i.fromBufferAttribute(D,W),w[H+G+4]=i.x,w[H+G+5]=i.y,w[H+G+6]=i.z,w[H+G+7]=0),_===!0&&(i.fromBufferAttribute(k,W),w[H+G+8]=i.x,w[H+G+9]=i.y,w[H+G+10]=i.z,w[H+G+11]=k.itemSize===4?i.w:1)}}d={count:f,texture:A,size:new xe(x,T)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function eM(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Qm=new Nn,Um=new ia(1,1),jm=new Xo,eg=new zl,tg=new Jo,Fm=[],Nm=[],Om=new Float32Array(16),Bm=new Float32Array(9),zm=new Float32Array(4);function oo(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Fm[i];if(s===void 0&&(s=new Float32Array(i),Fm[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Qt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ch(r,e){let t=Nm[e];t===void 0&&(t=new Int32Array(e),Nm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function tM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function nM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2fv(this.addr,e),Qt(t,e)}}function iM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;r.uniform3fv(this.addr,e),Qt(t,e)}}function rM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4fv(this.addr,e),Qt(t,e)}}function sM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,n))return;zm.set(n),r.uniformMatrix2fv(this.addr,!1,zm),Qt(t,n)}}function oM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,n))return;Bm.set(n),r.uniformMatrix3fv(this.addr,!1,Bm),Qt(t,n)}}function aM(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(Kt(t,n))return;Om.set(n),r.uniformMatrix4fv(this.addr,!1,Om),Qt(t,n)}}function lM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function cM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2iv(this.addr,e),Qt(t,e)}}function hM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3iv(this.addr,e),Qt(t,e)}}function uM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4iv(this.addr,e),Qt(t,e)}}function fM(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function dM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2uiv(this.addr,e),Qt(t,e)}}function pM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3uiv(this.addr,e),Qt(t,e)}}function mM(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4uiv(this.addr,e),Qt(t,e)}}function gM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Um.compareFunction=pf,s=Um):s=Qm,t.setTexture2D(e||s,i)}function _M(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||eg,i)}function xM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||tg,i)}function vM(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||jm,i)}function yM(r){switch(r){case 5126:return tM;case 35664:return nM;case 35665:return iM;case 35666:return rM;case 35674:return sM;case 35675:return oM;case 35676:return aM;case 5124:case 35670:return lM;case 35667:case 35671:return cM;case 35668:case 35672:return hM;case 35669:case 35673:return uM;case 5125:return fM;case 36294:return dM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return _M;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return vM}}function MM(r,e){r.uniform1fv(this.addr,e)}function SM(r,e){let t=oo(e,this.size,2);r.uniform2fv(this.addr,t)}function bM(r,e){let t=oo(e,this.size,3);r.uniform3fv(this.addr,t)}function TM(r,e){let t=oo(e,this.size,4);r.uniform4fv(this.addr,t)}function EM(r,e){let t=oo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function wM(r,e){let t=oo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function AM(r,e){let t=oo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function CM(r,e){r.uniform1iv(this.addr,e)}function RM(r,e){r.uniform2iv(this.addr,e)}function PM(r,e){r.uniform3iv(this.addr,e)}function IM(r,e){r.uniform4iv(this.addr,e)}function DM(r,e){r.uniform1uiv(this.addr,e)}function LM(r,e){r.uniform2uiv(this.addr,e)}function UM(r,e){r.uniform3uiv(this.addr,e)}function FM(r,e){r.uniform4uiv(this.addr,e)}function NM(r,e,t){let n=this.cache,i=e.length,s=ch(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Qm,s[o])}function OM(r,e,t){let n=this.cache,i=e.length,s=ch(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||eg,s[o])}function BM(r,e,t){let n=this.cache,i=e.length,s=ch(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||tg,s[o])}function zM(r,e,t){let n=this.cache,i=e.length,s=ch(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Qt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||jm,s[o])}function kM(r){switch(r){case 5126:return MM;case 35664:return SM;case 35665:return bM;case 35666:return TM;case 35674:return EM;case 35675:return wM;case 35676:return AM;case 5124:case 35670:return CM;case 35667:case 35671:return RM;case 35668:case 35672:return PM;case 35669:case 35673:return IM;case 5125:return DM;case 36294:return LM;case 36295:return UM;case 36296:return FM;case 35678:case 36198:case 36298:case 36306:case 35682:return NM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return BM;case 36289:case 36303:case 36311:case 36292:return zM}}var Cf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yM(t.type)}},Rf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kM(t.type)}},Pf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},Af=/(\w+)(\])?(\[|\.)?/g;function km(r,e){r.seq.push(e),r.map[e.id]=e}function VM(r,e,t){let n=r.name,i=n.length;for(Af.lastIndex=0;;){let s=Af.exec(n),o=Af.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){km(t,c===void 0?new Cf(a,r,e):new Rf(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Pf(a),km(t,f)),t=f}}}var so=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);VM(s,o,this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Vm(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var HM=37297,GM=0;function WM(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Hm=new Je;function XM(r){ht._getMatrix(Hm,ht.workingColorSpace,r);let e=`mat3( ${Hm.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(r)){case Ho:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Gm(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+WM(r.getShaderSource(e),a)}else return s}function qM(r,e){let t=XM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function YM(r,e){let t;switch(e){case em:t="Linear";break;case tm:t="Reinhard";break;case nm:t="Cineon";break;case im:t="ACESFilmic";break;case sm:t="AgX";break;case om:t="Neutral";break;case rm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var oh=new F;function ZM(){ht.getLuminanceCoefficients(oh);let r=oh.x.toFixed(4),e=oh.y.toFixed(4),t=oh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $M(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ba).join(`
`)}function JM(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function KM(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ba(r){return r!==""}function Wm(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var QM=/^[ \t]*#include +<([\w\d./]+)>/gm;function If(r){return r.replace(QM,eS)}var jM=new Map;function eS(r,e){let t=tt[e];if(t===void 0){let n=jM.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return If(t)}var tS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(r){return r.replace(tS,nS)}function nS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ym(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function iS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ef?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Lp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function rS(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Jr:case Kr:e="ENVMAP_TYPE_CUBE";break;case _a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Kr:e="ENVMAP_MODE_REFRACTION";break}return e}function oS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case yc:e="ENVMAP_BLENDING_MULTIPLY";break;case Qp:e="ENVMAP_BLENDING_MIX";break;case jp:e="ENVMAP_BLENDING_ADD";break}return e}function aS(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function lS(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=iS(t),c=rS(t),h=sS(t),f=oS(t),d=aS(t),u=$M(t),g=JM(s),_=i.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ba).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ba).join(`
`),p.length>0&&(p+=`
`)):(m=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ba).join(`
`),p=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?tt.tonemapping_pars_fragment:"",t.toneMapping!==ji?YM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,qM("linearToOutputTexel",t.outputColorSpace),ZM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ba).join(`
`)),o=If(o),o=Wm(o,t),o=Xm(o,t),a=If(a),a=Wm(a,t),a=Xm(a,t),o=qm(o),a=qm(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+m+o,x=y+p+a,T=Vm(i,i.VERTEX_SHADER,v),w=Vm(i,i.FRAGMENT_SHADER,x);i.attachShader(_,T),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(I){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(_)||"",k=i.getShaderInfoLog(T)||"",H=i.getShaderInfoLog(w)||"",W=D.trim(),G=k.trim(),Z=H.trim(),V=!0,ne=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,T,w);else{let L=Gm(i,T,"vertex"),ae=Gm(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+L+`
`+ae)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(G===""||Z==="")&&(ne=!1);ne&&(I.diagnostics={runnable:V,programLog:W,vertexShader:{log:G,prefix:m},fragmentShader:{log:Z,prefix:p}})}i.deleteShader(T),i.deleteShader(w),C=new so(i,_),M=KM(i,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,HM)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}var cS=0,Df=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Lf(e),t.set(e,n)),n}},Lf=class{constructor(e){this.id=cS++,this.code=e,this.usedTimes=0}};function hS(r,e,t,n,i,s,o){let a=new qo,l=new Df,c=new Set,h=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures,u=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,I,D,k){let H=D.fog,W=k.geometry,G=M.isMeshStandardMaterial?D.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),V=Z&&Z.mapping===_a?Z.image.height:null,ne=g[M.type];M.precision!==null&&(u=i.getMaxPrecision(M.precision),u!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));let L=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ae=L!==void 0?L.length:0,he=0;W.morphAttributes.position!==void 0&&(he=1),W.morphAttributes.normal!==void 0&&(he=2),W.morphAttributes.color!==void 0&&(he=3);let Pe,Le,ze,$;if(ne){let _e=Di[ne];Pe=_e.vertexShader,Le=_e.fragmentShader}else Pe=M.vertexShader,Le=M.fragmentShader,l.update(M),ze=l.getVertexShaderID(M),$=l.getFragmentShaderID(M);let K=r.getRenderTarget(),fe=r.state.buffers.depth.getReversed(),Ce=k.isInstancedMesh===!0,Ee=k.isBatchedMesh===!0,Ge=!!M.map,dt=!!M.matcap,P=!!Z,qe=!!M.aoMap,Fe=!!M.lightMap,Re=!!M.bumpMap,N=!!M.normalMap,rt=!!M.displacementMap,ve=!!M.emissiveMap,We=!!M.metalnessMap,Ke=!!M.roughnessMap,pt=M.anisotropy>0,R=M.clearcoat>0,b=M.dispersion>0,z=M.iridescence>0,J=M.sheen>0,Q=M.transmission>0,Y=pt&&!!M.anisotropyMap,ye=R&&!!M.clearcoatMap,se=R&&!!M.clearcoatNormalMap,we=R&&!!M.clearcoatRoughnessMap,de=z&&!!M.iridescenceMap,re=z&&!!M.iridescenceThicknessMap,ue=J&&!!M.sheenColorMap,Oe=J&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,ce=!!M.specularColorMap,Xe=!!M.specularIntensityMap,U=Q&&!!M.transmissionMap,ie=Q&&!!M.thicknessMap,oe=!!M.gradientMap,me=!!M.alphaMap,te=M.alphaTest>0,j=!!M.alphaHash,Se=!!M.extensions,ke=ji;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ke=r.toneMapping);let ut={shaderID:ne,shaderType:M.type,shaderName:M.name,vertexShader:Pe,fragmentShader:Le,defines:M.defines,customVertexShaderID:ze,customFragmentShaderID:$,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:Ee,batchingColor:Ee&&k._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&k.instanceColor!==null,instancingMorph:Ce&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:qr,alphaToCoverage:!!M.alphaToCoverage,map:Ge,matcap:dt,envMap:P,envMapMode:P&&Z.mapping,envMapCubeUVHeight:V,aoMap:qe,lightMap:Fe,bumpMap:Re,normalMap:N,displacementMap:d&&rt,emissiveMap:ve,normalMapObjectSpace:N&&M.normalMapType===hm,normalMapTangentSpace:N&&M.normalMapType===df,metalnessMap:We,roughnessMap:Ke,anisotropy:pt,anisotropyMap:Y,clearcoat:R,clearcoatMap:ye,clearcoatNormalMap:se,clearcoatRoughnessMap:we,dispersion:b,iridescence:z,iridescenceMap:de,iridescenceThicknessMap:re,sheen:J,sheenColorMap:ue,sheenRoughnessMap:Oe,specularMap:Ae,specularColorMap:ce,specularIntensityMap:Xe,transmission:Q,transmissionMap:U,thicknessMap:ie,gradientMap:oe,opaque:M.transparent===!1&&M.blending===Zi&&M.alphaToCoverage===!1,alphaMap:me,alphaTest:te,alphaHash:j,combine:M.combine,mapUv:Ge&&_(M.map.channel),aoMapUv:qe&&_(M.aoMap.channel),lightMapUv:Fe&&_(M.lightMap.channel),bumpMapUv:Re&&_(M.bumpMap.channel),normalMapUv:N&&_(M.normalMap.channel),displacementMapUv:rt&&_(M.displacementMap.channel),emissiveMapUv:ve&&_(M.emissiveMap.channel),metalnessMapUv:We&&_(M.metalnessMap.channel),roughnessMapUv:Ke&&_(M.roughnessMap.channel),anisotropyMapUv:Y&&_(M.anisotropyMap.channel),clearcoatMapUv:ye&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(M.sheenRoughnessMap.channel),specularMapUv:Ae&&_(M.specularMap.channel),specularColorMapUv:ce&&_(M.specularColorMap.channel),specularIntensityMapUv:Xe&&_(M.specularIntensityMap.channel),transmissionMapUv:U&&_(M.transmissionMap.channel),thicknessMapUv:ie&&_(M.thicknessMap.channel),alphaMapUv:me&&_(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(N||pt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(Ge||me),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:he,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ge&&M.map.isVideoTexture===!0&&ht.getTransfer(M.map.colorSpace)===xt,decodeVideoTextureEmissive:ve&&M.emissiveMap.isVideoTexture===!0&&ht.getTransfer(M.emissiveMap.colorSpace)===xt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pi,flipSided:M.side===wn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Se&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&M.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let I in M.defines)S.push(I),S.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(y(S,M),v(S,M),S.push(r.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){let S=g[M.type],I;if(S){let D=Di[S];I=Mm.clone(D.uniforms)}else I=M.uniforms;return I}function T(M,S){let I;for(let D=0,k=h.length;D<k;D++){let H=h[D];if(H.cacheKey===S){I=H,++I.usedTimes;break}}return I===void 0&&(I=new lS(r,S,M,s),h.push(I)),I}function w(M){if(--M.usedTimes===0){let S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function A(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:C}}function uS(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function fS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Zm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $m(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,u,g,_,m){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,d,u,g,_,m){let p=o(f,d,u,g,_,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):t.push(p)}function l(f,d,u,g,_,m){let p=o(f,d,u,g,_,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||fS),n.length>1&&n.sort(d||Zm),i.length>1&&i.sort(d||Zm)}function h(){for(let f=e,d=r.length;f<d;f++){let u=r[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function dS(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new $m,r.set(n,[o])):i>=s.length?(o=new $m,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function pS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ze};break;case"SpotLight":t={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function mS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var gS=0;function _S(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function xS(r){let e=new pS,t=mS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let i=new F,s=new Tt,o=new Tt;function a(c){let h=0,f=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let u=0,g=0,_=0,m=0,p=0,y=0,v=0,x=0,T=0,w=0,A=0;c.sort(_S);for(let M=0,S=c.length;M<S;M++){let I=c[M],D=I.color,k=I.intensity,H=I.distance,W=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=D.r*k,f+=D.g*k,d+=D.b*k;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],k);A++}else if(I.isDirectionalLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,V=t.get(I);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.directionalShadow[u]=V,n.directionalShadowMap[u]=W,n.directionalShadowMatrix[u]=I.shadow.matrix,y++}n.directional[u]=G,u++}else if(I.isSpotLight){let G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(D).multiplyScalar(k),G.distance=H,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[_]=G;let Z=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,Z.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[_]=Z.matrix,I.castShadow){let V=t.get(I);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=W,x++}_++}else if(I.isRectAreaLight){let G=e.get(I);G.color.copy(D).multiplyScalar(k),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=G,m++}else if(I.isPointLight){let G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){let Z=I.shadow,V=t.get(I);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=I.shadow.matrix,v++}n.point[g]=G,g++}else if(I.isHemisphereLight){let G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(k),G.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[p]=G,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==u||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==v||C.numSpotShadows!==x||C.numSpotMaps!==T||C.numLightProbes!==A)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,C.directionalLength=u,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=v,C.numSpotShadows=x,C.numSpotMaps=T,C.numLightProbes=A,n.version=gS++)}function l(c,h){let f=0,d=0,u=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let v=c[p];if(v.isDirectionalLight){let x=n.directional[f];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(v.isSpotLight){let x=n.spot[u];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(v.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Jm(r){let e=new xS(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function vS(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new Jm(r),e.set(i,[a])):s>=o.length?(a=new Jm(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var yS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MS=`uniform sampler2D shadow_pass;
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
}`;function SS(r,e,t){let n=new Zs,i=new xe,s=new xe,o=new _t,a=new ec({depthPacking:cm}),l=new tc,c={},h=t.maxTextureSize,f={[Yi]:wn,[wn]:Yi,[Pi]:Pi},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:yS,fragmentShader:MS}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new Xt;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new nn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ef;let p=this.type;this.render=function(w,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let M=r.getRenderTarget(),S=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Qi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let k=p!==Ri&&this.type===Ri,H=p===Ri&&this.type!==Ri;for(let W=0,G=w.length;W<G;W++){let Z=w[W],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let ne=V.getFrameExtents();if(i.multiply(ne),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ne.x),i.x=s.x*ne.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ne.y),i.y=s.y*ne.y,V.mapSize.y=s.y)),V.map===null||k===!0||H===!0){let ae=this.type!==Ri?{minFilter:ai,magFilter:ai}:{};V.map!==null&&V.map.dispose(),V.map=new Ci(i.x,i.y,ae),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();let L=V.getViewportCount();for(let ae=0;ae<L;ae++){let he=V.getViewport(ae);o.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),D.viewport(o),V.updateMatrices(Z,ae),n=V.getFrustum(),x(A,C,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Ri&&y(V,C),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,S,I)};function y(w,A){let C=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ci(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,C,d,_,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,C,u,_,null)}function v(w,A,C,M){let S=null,I=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)S=I;else if(S=C.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let D=S.uuid,k=A.uuid,H=c[D];H===void 0&&(H={},c[D]=H);let W=H[k];W===void 0&&(W=S.clone(),H[k]=W,A.addEventListener("dispose",T)),S=W}if(S.visible=A.visible,S.wireframe=A.wireframe,M===Ri?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:f[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let D=r.properties.get(S);D.light=C}return S}function x(w,A,C,M,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Ri)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let k=e.update(w),H=w.material;if(Array.isArray(H)){let W=k.groups;for(let G=0,Z=W.length;G<Z;G++){let V=W[G],ne=H[V.materialIndex];if(ne&&ne.visible){let L=v(w,ne,M,S);w.onBeforeShadow(r,w,A,C,k,L,V),r.renderBufferDirect(C,null,k,L,w,V),w.onAfterShadow(r,w,A,C,k,L,V)}}}else if(H.visible){let W=v(w,H,M,S);w.onBeforeShadow(r,w,A,C,k,W,null),r.renderBufferDirect(C,null,k,W,w,null),w.onAfterShadow(r,w,A,C,k,W,null)}}let D=w.children;for(let k=0,H=D.length;k<H;k++)x(D[k],A,C,M,S)}function T(w){w.target.removeEventListener("dispose",T);for(let C in c){let M=c[C],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}var bS={[dc]:pc,[mc]:xc,[gc]:vc,[Xr]:_c,[pc]:dc,[xc]:mc,[vc]:gc,[_c]:Xr};function TS(r,e){function t(){let U=!1,ie=new _t,oe=null,me=new _t(0,0,0,0);return{setMask:function(te){oe!==te&&!U&&(r.colorMask(te,te,te,te),oe=te)},setLocked:function(te){U=te},setClear:function(te,j,Se,ke,ut){ut===!0&&(te*=ke,j*=ke,Se*=ke),ie.set(te,j,Se,ke),me.equals(ie)===!1&&(r.clearColor(te,j,Se,ke),me.copy(ie))},reset:function(){U=!1,oe=null,me.set(-1,0,0,0)}}}function n(){let U=!1,ie=!1,oe=null,me=null,te=null;return{setReversed:function(j){if(ie!==j){let Se=e.get("EXT_clip_control");j?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ie=j;let ke=te;te=null,this.setClear(ke)}},getReversed:function(){return ie},setTest:function(j){j?K(r.DEPTH_TEST):fe(r.DEPTH_TEST)},setMask:function(j){oe!==j&&!U&&(r.depthMask(j),oe=j)},setFunc:function(j){if(ie&&(j=bS[j]),me!==j){switch(j){case dc:r.depthFunc(r.NEVER);break;case pc:r.depthFunc(r.ALWAYS);break;case mc:r.depthFunc(r.LESS);break;case Xr:r.depthFunc(r.LEQUAL);break;case gc:r.depthFunc(r.EQUAL);break;case _c:r.depthFunc(r.GEQUAL);break;case xc:r.depthFunc(r.GREATER);break;case vc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=j}},setLocked:function(j){U=j},setClear:function(j){te!==j&&(ie&&(j=1-j),r.clearDepth(j),te=j)},reset:function(){U=!1,oe=null,me=null,te=null,ie=!1}}}function i(){let U=!1,ie=null,oe=null,me=null,te=null,j=null,Se=null,ke=null,ut=null;return{setTest:function(_e){U||(_e?K(r.STENCIL_TEST):fe(r.STENCIL_TEST))},setMask:function(_e){ie!==_e&&!U&&(r.stencilMask(_e),ie=_e)},setFunc:function(_e,Ie,$e){(oe!==_e||me!==Ie||te!==$e)&&(r.stencilFunc(_e,Ie,$e),oe=_e,me=Ie,te=$e)},setOp:function(_e,Ie,$e){(j!==_e||Se!==Ie||ke!==$e)&&(r.stencilOp(_e,Ie,$e),j=_e,Se=Ie,ke=$e)},setLocked:function(_e){U=_e},setClear:function(_e){ut!==_e&&(r.clearStencil(_e),ut=_e)},reset:function(){U=!1,ie=null,oe=null,me=null,te=null,j=null,Se=null,ke=null,ut=null}}}let s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},f={},d=new WeakMap,u=[],g=null,_=!1,m=null,p=null,y=null,v=null,x=null,T=null,w=null,A=new Ze(0,0,0),C=0,M=!1,S=null,I=null,D=null,k=null,H=null,W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Z=0,V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=Z>=2);let ne=null,L={},ae=r.getParameter(r.SCISSOR_BOX),he=r.getParameter(r.VIEWPORT),Pe=new _t().fromArray(ae),Le=new _t().fromArray(he);function ze(U,ie,oe,me){let te=new Uint8Array(4),j=r.createTexture();r.bindTexture(U,j),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Se=0;Se<oe;Se++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ie,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,te):r.texImage2D(ie+Se,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,te);return j}let $={};$[r.TEXTURE_2D]=ze(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(r.DEPTH_TEST),o.setFunc(Xr),Re(!1),N(ju),K(r.CULL_FACE),qe(Qi);function K(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function fe(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Ce(U,ie){return f[U]!==ie?(r.bindFramebuffer(U,ie),f[U]=ie,U===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ie),U===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ee(U,ie){let oe=u,me=!1;if(U){oe=d.get(ie),oe===void 0&&(oe=[],d.set(ie,oe));let te=U.textures;if(oe.length!==te.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let j=0,Se=te.length;j<Se;j++)oe[j]=r.COLOR_ATTACHMENT0+j;oe.length=te.length,me=!0}}else oe[0]!==r.BACK&&(oe[0]=r.BACK,me=!0);me&&r.drawBuffers(oe)}function Ge(U){return g!==U?(r.useProgram(U),g=U,!0):!1}let dt={[xr]:r.FUNC_ADD,[Fp]:r.FUNC_SUBTRACT,[Np]:r.FUNC_REVERSE_SUBTRACT};dt[Op]=r.MIN,dt[Bp]=r.MAX;let P={[zp]:r.ZERO,[kp]:r.ONE,[Vp]:r.SRC_COLOR,[Pl]:r.SRC_ALPHA,[Yp]:r.SRC_ALPHA_SATURATE,[Xp]:r.DST_COLOR,[Gp]:r.DST_ALPHA,[Hp]:r.ONE_MINUS_SRC_COLOR,[Il]:r.ONE_MINUS_SRC_ALPHA,[qp]:r.ONE_MINUS_DST_COLOR,[Wp]:r.ONE_MINUS_DST_ALPHA,[Zp]:r.CONSTANT_COLOR,[$p]:r.ONE_MINUS_CONSTANT_COLOR,[Jp]:r.CONSTANT_ALPHA,[Kp]:r.ONE_MINUS_CONSTANT_ALPHA};function qe(U,ie,oe,me,te,j,Se,ke,ut,_e){if(U===Qi){_===!0&&(fe(r.BLEND),_=!1);return}if(_===!1&&(K(r.BLEND),_=!0),U!==Up){if(U!==m||_e!==M){if((p!==xr||x!==xr)&&(r.blendEquation(r.FUNC_ADD),p=xr,x=xr),_e)switch(U){case Zi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qs:r.blendFunc(r.ONE,r.ONE);break;case tf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Zi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case tf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,v=null,T=null,w=null,A.set(0,0,0),C=0,m=U,M=_e}return}te=te||ie,j=j||oe,Se=Se||me,(ie!==p||te!==x)&&(r.blendEquationSeparate(dt[ie],dt[te]),p=ie,x=te),(oe!==y||me!==v||j!==T||Se!==w)&&(r.blendFuncSeparate(P[oe],P[me],P[j],P[Se]),y=oe,v=me,T=j,w=Se),(ke.equals(A)===!1||ut!==C)&&(r.blendColor(ke.r,ke.g,ke.b,ut),A.copy(ke),C=ut),m=U,M=!1}function Fe(U,ie){U.side===Pi?fe(r.CULL_FACE):K(r.CULL_FACE);let oe=U.side===wn;ie&&(oe=!oe),Re(oe),U.blending===Zi&&U.transparent===!1?qe(Qi):qe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);let me=U.stencilWrite;a.setTest(me),me&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ve(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):fe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Re(U){S!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),S=U)}function N(U){U!==Ip?(K(r.CULL_FACE),U!==I&&(U===ju?r.cullFace(r.BACK):U===Dp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):fe(r.CULL_FACE),I=U}function rt(U){U!==D&&(G&&r.lineWidth(U),D=U)}function ve(U,ie,oe){U?(K(r.POLYGON_OFFSET_FILL),(k!==ie||H!==oe)&&(r.polygonOffset(ie,oe),k=ie,H=oe)):fe(r.POLYGON_OFFSET_FILL)}function We(U){U?K(r.SCISSOR_TEST):fe(r.SCISSOR_TEST)}function Ke(U){U===void 0&&(U=r.TEXTURE0+W-1),ne!==U&&(r.activeTexture(U),ne=U)}function pt(U,ie,oe){oe===void 0&&(ne===null?oe=r.TEXTURE0+W-1:oe=ne);let me=L[oe];me===void 0&&(me={type:void 0,texture:void 0},L[oe]=me),(me.type!==U||me.texture!==ie)&&(ne!==oe&&(r.activeTexture(oe),ne=oe),r.bindTexture(U,ie||$[U]),me.type=U,me.texture=ie)}function R(){let U=L[ne];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{r.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{r.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{r.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{r.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{r.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{r.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{r.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{r.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(U){Pe.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Pe.copy(U))}function Oe(U){Le.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Le.copy(U))}function Ae(U,ie){let oe=c.get(ie);oe===void 0&&(oe=new WeakMap,c.set(ie,oe));let me=oe.get(U);me===void 0&&(me=r.getUniformBlockIndex(ie,U.name),oe.set(U,me))}function ce(U,ie){let me=c.get(ie).get(U);l.get(ie)!==me&&(r.uniformBlockBinding(ie,me,U.__bindingPointIndex),l.set(ie,me))}function Xe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ne=null,L={},f={},d=new WeakMap,u=[],g=null,_=!1,m=null,p=null,y=null,v=null,x=null,T=null,w=null,A=new Ze(0,0,0),C=0,M=!1,S=null,I=null,D=null,k=null,H=null,Pe.set(0,0,r.canvas.width,r.canvas.height),Le.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:fe,bindFramebuffer:Ce,drawBuffers:Ee,useProgram:Ge,setBlending:qe,setMaterial:Fe,setFlipSided:Re,setCullFace:N,setLineWidth:rt,setPolygonOffset:ve,setScissorTest:We,activeTexture:Ke,bindTexture:pt,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:z,texImage2D:de,texImage3D:re,updateUBOMapping:Ae,uniformBlockBinding:ce,texStorage2D:se,texStorage3D:we,texSubImage2D:J,texSubImage3D:Q,compressedTexSubImage2D:Y,compressedTexSubImage3D:ye,scissor:ue,viewport:Oe,reset:Xe}}function ES(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,h=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return u?new OffscreenCanvas(R,b):Wo("canvas")}function _(R,b,z){let J=1,Q=pt(R);if((Q.width>z||Q.height>z)&&(J=z/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Y=Math.floor(J*Q.width),ye=Math.floor(J*Q.height);f===void 0&&(f=g(Y,ye));let se=b?g(Y,ye):f;return se.width=Y,se.height=ye,se.getContext("2d").drawImage(R,0,0,Y,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+ye+")."),se}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(R,b,z,J,Q=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=b;if(b===r.RED&&(z===r.FLOAT&&(Y=r.R32F),z===r.HALF_FLOAT&&(Y=r.R16F),z===r.UNSIGNED_BYTE&&(Y=r.R8)),b===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(Y=r.R8UI),z===r.UNSIGNED_SHORT&&(Y=r.R16UI),z===r.UNSIGNED_INT&&(Y=r.R32UI),z===r.BYTE&&(Y=r.R8I),z===r.SHORT&&(Y=r.R16I),z===r.INT&&(Y=r.R32I)),b===r.RG&&(z===r.FLOAT&&(Y=r.RG32F),z===r.HALF_FLOAT&&(Y=r.RG16F),z===r.UNSIGNED_BYTE&&(Y=r.RG8)),b===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(Y=r.RG8UI),z===r.UNSIGNED_SHORT&&(Y=r.RG16UI),z===r.UNSIGNED_INT&&(Y=r.RG32UI),z===r.BYTE&&(Y=r.RG8I),z===r.SHORT&&(Y=r.RG16I),z===r.INT&&(Y=r.RG32I)),b===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),z===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),z===r.UNSIGNED_INT&&(Y=r.RGB32UI),z===r.BYTE&&(Y=r.RGB8I),z===r.SHORT&&(Y=r.RGB16I),z===r.INT&&(Y=r.RGB32I)),b===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),z===r.UNSIGNED_INT&&(Y=r.RGBA32UI),z===r.BYTE&&(Y=r.RGBA8I),z===r.SHORT&&(Y=r.RGBA16I),z===r.INT&&(Y=r.RGBA32I)),b===r.RGB&&(z===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),b===r.RGBA){let ye=Q?Ho:ht.getTransfer(J);z===r.FLOAT&&(Y=r.RGBA32F),z===r.HALF_FLOAT&&(Y=r.RGBA16F),z===r.UNSIGNED_BYTE&&(Y=ye===xt?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(R,b){let z;return R?b===null||b===wr||b===to?z=r.DEPTH24_STENCIL8:b===Ii?z=r.DEPTH32F_STENCIL8:b===js&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===wr||b===to?z=r.DEPTH_COMPONENT24:b===Ii?z=r.DEPTH_COMPONENT32F:b===js&&(z=r.DEPTH_COMPONENT16),z}function T(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ai&&R.minFilter!==yi?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function w(R){let b=R.target;b.removeEventListener("dispose",w),C(b),b.isVideoTexture&&h.delete(b)}function A(R){let b=R.target;b.removeEventListener("dispose",A),S(b)}function C(R){let b=n.get(R);if(b.__webglInit===void 0)return;let z=R.source,J=d.get(z);if(J){let Q=J[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(R),Object.keys(J).length===0&&d.delete(z)}n.remove(R)}function M(R){let b=n.get(R);r.deleteTexture(b.__webglTexture);let z=R.source,J=d.get(z);delete J[b.__cacheKey],o.memory.textures--}function S(R){let b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let Q=0;Q<b.__webglFramebuffer[J].length;Q++)r.deleteFramebuffer(b.__webglFramebuffer[J][Q]);else r.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)r.deleteFramebuffer(b.__webglFramebuffer[J]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let z=R.textures;for(let J=0,Q=z.length;J<Q;J++){let Y=n.get(z[J]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[J])}n.remove(R)}let I=0;function D(){I=0}function k(){let R=I;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),I+=1,R}function H(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function W(R,b){let z=n.get(R);if(R.isVideoTexture&&We(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){let J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,R,b);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+b)}function G(R,b){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){$(z,R,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+b)}function Z(R,b){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){$(z,R,b);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+b)}function V(R,b){let z=n.get(R);if(R.version>0&&z.__version!==R.version){K(z,R,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+b)}let ne={[Dl]:r.REPEAT,[_r]:r.CLAMP_TO_EDGE,[Ll]:r.MIRRORED_REPEAT},L={[ai]:r.NEAREST,[am]:r.NEAREST_MIPMAP_NEAREST,[xa]:r.NEAREST_MIPMAP_LINEAR,[yi]:r.LINEAR,[bc]:r.LINEAR_MIPMAP_NEAREST,[Er]:r.LINEAR_MIPMAP_LINEAR},ae={[um]:r.NEVER,[_m]:r.ALWAYS,[fm]:r.LESS,[pf]:r.LEQUAL,[dm]:r.EQUAL,[gm]:r.GEQUAL,[pm]:r.GREATER,[mm]:r.NOTEQUAL};function he(R,b){if(b.type===Ii&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===yi||b.magFilter===bc||b.magFilter===xa||b.magFilter===Er||b.minFilter===yi||b.minFilter===bc||b.minFilter===xa||b.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ne[b.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ne[b.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ne[b.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,L[b.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,L[b.minFilter]),b.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ae[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ai||b.minFilter!==xa&&b.minFilter!==Er||b.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Pe(R,b){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",w));let J=b.source,Q=d.get(J);Q===void 0&&(Q={},d.set(J,Q));let Y=H(b);if(Y!==R.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[Y].usedTimes++;let ye=Q[R.__cacheKey];ye!==void 0&&(Q[R.__cacheKey].usedTimes--,ye.usedTimes===0&&M(b)),R.__cacheKey=Y,R.__webglTexture=Q[Y].texture}return z}function Le(R,b,z){return Math.floor(Math.floor(R/z)/b)}function ze(R,b,z,J){let Y=R.updateRanges;if(Y.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,z,J,b.data);else{Y.sort((re,ue)=>re.start-ue.start);let ye=0;for(let re=1;re<Y.length;re++){let ue=Y[ye],Oe=Y[re],Ae=ue.start+ue.count,ce=Le(Oe.start,b.width,4),Xe=Le(ue.start,b.width,4);Oe.start<=Ae+1&&ce===Xe&&Le(Oe.start+Oe.count-1,b.width,4)===ce?ue.count=Math.max(ue.count,Oe.start+Oe.count-ue.start):(++ye,Y[ye]=Oe)}Y.length=ye+1;let se=r.getParameter(r.UNPACK_ROW_LENGTH),we=r.getParameter(r.UNPACK_SKIP_PIXELS),de=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let re=0,ue=Y.length;re<ue;re++){let Oe=Y[re],Ae=Math.floor(Oe.start/4),ce=Math.ceil(Oe.count/4),Xe=Ae%b.width,U=Math.floor(Ae/b.width),ie=ce,oe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,U),t.texSubImage2D(r.TEXTURE_2D,0,Xe,U,ie,oe,z,J,b.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,we),r.pixelStorei(r.UNPACK_SKIP_ROWS,de)}}function $(R,b,z){let J=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=r.TEXTURE_3D);let Q=Pe(R,b),Y=b.source;t.bindTexture(J,R.__webglTexture,r.TEXTURE0+z);let ye=n.get(Y);if(Y.version!==ye.__version||Q===!0){t.activeTexture(r.TEXTURE0+z);let se=ht.getPrimaries(ht.workingColorSpace),we=b.colorSpace===er?null:ht.getPrimaries(b.colorSpace),de=b.colorSpace===er||se===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let re=_(b.image,!1,i.maxTextureSize);re=Ke(b,re);let ue=s.convert(b.format,b.colorSpace),Oe=s.convert(b.type),Ae=v(b.internalFormat,ue,Oe,b.colorSpace,b.isVideoTexture);he(J,b);let ce,Xe=b.mipmaps,U=b.isVideoTexture!==!0,ie=ye.__version===void 0||Q===!0,oe=Y.dataReady,me=T(b,re);if(b.isDepthTexture)Ae=x(b.format===no,b.type),ie&&(U?t.texStorage2D(r.TEXTURE_2D,1,Ae,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,Ae,re.width,re.height,0,ue,Oe,null));else if(b.isDataTexture)if(Xe.length>0){U&&ie&&t.texStorage2D(r.TEXTURE_2D,me,Ae,Xe[0].width,Xe[0].height);for(let te=0,j=Xe.length;te<j;te++)ce=Xe[te],U?oe&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ce.width,ce.height,ue,Oe,ce.data):t.texImage2D(r.TEXTURE_2D,te,Ae,ce.width,ce.height,0,ue,Oe,ce.data);b.generateMipmaps=!1}else U?(ie&&t.texStorage2D(r.TEXTURE_2D,me,Ae,re.width,re.height),oe&&ze(b,re,ue,Oe)):t.texImage2D(r.TEXTURE_2D,0,Ae,re.width,re.height,0,ue,Oe,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){U&&ie&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Ae,Xe[0].width,Xe[0].height,re.depth);for(let te=0,j=Xe.length;te<j;te++)if(ce=Xe[te],b.format!==li)if(ue!==null)if(U){if(oe)if(b.layerUpdates.size>0){let Se=Mf(ce.width,ce.height,b.format,b.type);for(let ke of b.layerUpdates){let ut=ce.data.subarray(ke*Se/ce.data.BYTES_PER_ELEMENT,(ke+1)*Se/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,ke,ce.width,ce.height,1,ue,ut)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,re.depth,ue,ce.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,Ae,ce.width,ce.height,re.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?oe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,re.depth,ue,Oe,ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,Ae,ce.width,ce.height,re.depth,0,ue,Oe,ce.data)}else{U&&ie&&t.texStorage2D(r.TEXTURE_2D,me,Ae,Xe[0].width,Xe[0].height);for(let te=0,j=Xe.length;te<j;te++)ce=Xe[te],b.format!==li?ue!==null?U?oe&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,ce.width,ce.height,ue,ce.data):t.compressedTexImage2D(r.TEXTURE_2D,te,Ae,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?oe&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ce.width,ce.height,ue,Oe,ce.data):t.texImage2D(r.TEXTURE_2D,te,Ae,ce.width,ce.height,0,ue,Oe,ce.data)}else if(b.isDataArrayTexture)if(U){if(ie&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,Ae,re.width,re.height,re.depth),oe)if(b.layerUpdates.size>0){let te=Mf(re.width,re.height,b.format,b.type);for(let j of b.layerUpdates){let Se=re.data.subarray(j*te/re.data.BYTES_PER_ELEMENT,(j+1)*te/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,re.width,re.height,1,ue,Oe,Se)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ue,Oe,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ae,re.width,re.height,re.depth,0,ue,Oe,re.data);else if(b.isData3DTexture)U?(ie&&t.texStorage3D(r.TEXTURE_3D,me,Ae,re.width,re.height,re.depth),oe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ue,Oe,re.data)):t.texImage3D(r.TEXTURE_3D,0,Ae,re.width,re.height,re.depth,0,ue,Oe,re.data);else if(b.isFramebufferTexture){if(ie)if(U)t.texStorage2D(r.TEXTURE_2D,me,Ae,re.width,re.height);else{let te=re.width,j=re.height;for(let Se=0;Se<me;Se++)t.texImage2D(r.TEXTURE_2D,Se,Ae,te,j,0,ue,Oe,null),te>>=1,j>>=1}}else if(Xe.length>0){if(U&&ie){let te=pt(Xe[0]);t.texStorage2D(r.TEXTURE_2D,me,Ae,te.width,te.height)}for(let te=0,j=Xe.length;te<j;te++)ce=Xe[te],U?oe&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ue,Oe,ce):t.texImage2D(r.TEXTURE_2D,te,Ae,ue,Oe,ce);b.generateMipmaps=!1}else if(U){if(ie){let te=pt(re);t.texStorage2D(r.TEXTURE_2D,me,Ae,te.width,te.height)}oe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ue,Oe,re)}else t.texImage2D(r.TEXTURE_2D,0,Ae,ue,Oe,re);m(b)&&p(J),ye.__version=Y.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function K(R,b,z){if(b.image.length!==6)return;let J=Pe(R,b),Q=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+z);let Y=n.get(Q);if(Q.version!==Y.__version||J===!0){t.activeTexture(r.TEXTURE0+z);let ye=ht.getPrimaries(ht.workingColorSpace),se=b.colorSpace===er?null:ht.getPrimaries(b.colorSpace),we=b.colorSpace===er||ye===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let de=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,ue=[];for(let j=0;j<6;j++)!de&&!re?ue[j]=_(b.image[j],!0,i.maxCubemapSize):ue[j]=re?b.image[j].image:b.image[j],ue[j]=Ke(b,ue[j]);let Oe=ue[0],Ae=s.convert(b.format,b.colorSpace),ce=s.convert(b.type),Xe=v(b.internalFormat,Ae,ce,b.colorSpace),U=b.isVideoTexture!==!0,ie=Y.__version===void 0||J===!0,oe=Q.dataReady,me=T(b,Oe);he(r.TEXTURE_CUBE_MAP,b);let te;if(de){U&&ie&&t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Xe,Oe.width,Oe.height);for(let j=0;j<6;j++){te=ue[j].mipmaps;for(let Se=0;Se<te.length;Se++){let ke=te[Se];b.format!==li?Ae!==null?U?oe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,0,0,ke.width,ke.height,Ae,ke.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,Xe,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,0,0,ke.width,ke.height,Ae,ce,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,Xe,ke.width,ke.height,0,Ae,ce,ke.data)}}}else{if(te=b.mipmaps,U&&ie){te.length>0&&me++;let j=pt(ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,me,Xe,j.width,j.height)}for(let j=0;j<6;j++)if(re){U?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ue[j].width,ue[j].height,Ae,ce,ue[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Xe,ue[j].width,ue[j].height,0,Ae,ce,ue[j].data);for(let Se=0;Se<te.length;Se++){let ut=te[Se].image[j].image;U?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,0,0,ut.width,ut.height,Ae,ce,ut.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,Xe,ut.width,ut.height,0,Ae,ce,ut.data)}}else{U?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ae,ce,ue[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Xe,Ae,ce,ue[j]);for(let Se=0;Se<te.length;Se++){let ke=te[Se];U?oe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,0,0,Ae,ce,ke.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,Xe,Ae,ce,ke.image[j])}}}m(b)&&p(r.TEXTURE_CUBE_MAP),Y.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function fe(R,b,z,J,Q,Y){let ye=s.convert(z.format,z.colorSpace),se=s.convert(z.type),we=v(z.internalFormat,ye,se,z.colorSpace),de=n.get(b),re=n.get(z);if(re.__renderTarget=b,!de.__hasExternalTextures){let ue=Math.max(1,b.width>>Y),Oe=Math.max(1,b.height>>Y);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,Y,we,ue,Oe,b.depth,0,ye,se,null):t.texImage2D(Q,Y,we,ue,Oe,0,ye,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),ve(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Q,re.__webglTexture,0,rt(b)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,Q,re.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(R,b,z){if(r.bindRenderbuffer(r.RENDERBUFFER,R),b.depthBuffer){let J=b.depthTexture,Q=J&&J.isDepthTexture?J.type:null,Y=x(b.stencilBuffer,Q),ye=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=rt(b);ve(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,Y,b.width,b.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,Y,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Y,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,R)}else{let J=b.textures;for(let Q=0;Q<J.length;Q++){let Y=J[Q],ye=s.convert(Y.format,Y.colorSpace),se=s.convert(Y.type),we=v(Y.internalFormat,ye,se,Y.colorSpace),de=rt(b);z&&ve(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,de,we,b.width,b.height):ve(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,we,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,we,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(b.depthTexture);J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);let Q=J.__webglTexture,Y=rt(b);if(b.depthTexture.format===Hs)ve(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(b.depthTexture.format===no)ve(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ge(R){let b=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){let Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=J}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let J=R.texture.mipmaps;J&&J.length>0?Ee(b.__webglFramebuffer[0],R):Ee(b.__webglFramebuffer,R)}else if(z){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=r.createRenderbuffer(),Ce(b.__webglDepthbuffer[J],R,!1);else{let Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,Y)}}else{let J=R.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Ce(b.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,Y)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function dt(R,b,z){let J=n.get(R);b!==void 0&&fe(J.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Ge(R)}function P(R){let b=R.texture,z=n.get(R),J=n.get(b);R.addEventListener("dispose",A);let Q=R.textures,Y=R.isWebGLCubeRenderTarget===!0,ye=Q.length>1;if(ye||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=b.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let se=0;se<6;se++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[se]=[];for(let we=0;we<b.mipmaps.length;we++)z.__webglFramebuffer[se][we]=r.createFramebuffer()}else z.__webglFramebuffer[se]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let se=0;se<b.mipmaps.length;se++)z.__webglFramebuffer[se]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ye)for(let se=0,we=Q.length;se<we;se++){let de=n.get(Q[se]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&ve(R)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let se=0;se<Q.length;se++){let we=Q[se];z.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[se]);let de=s.convert(we.format,we.colorSpace),re=s.convert(we.type),ue=v(we.internalFormat,de,re,we.colorSpace,R.isXRRenderTarget===!0),Oe=rt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,ue,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,z.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Ce(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),he(r.TEXTURE_CUBE_MAP,b);for(let se=0;se<6;se++)if(b.mipmaps&&b.mipmaps.length>0)for(let we=0;we<b.mipmaps.length;we++)fe(z.__webglFramebuffer[se][we],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,we);else fe(z.__webglFramebuffer[se],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(b)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let se=0,we=Q.length;se<we;se++){let de=Q[se],re=n.get(de),ue=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,re.__webglTexture),he(ue,de),fe(z.__webglFramebuffer,R,de,r.COLOR_ATTACHMENT0+se,ue,0),m(de)&&p(ue)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,J.__webglTexture),he(se,b),b.mipmaps&&b.mipmaps.length>0)for(let we=0;we<b.mipmaps.length;we++)fe(z.__webglFramebuffer[we],R,b,r.COLOR_ATTACHMENT0,se,we);else fe(z.__webglFramebuffer,R,b,r.COLOR_ATTACHMENT0,se,0);m(b)&&p(se),t.unbindTexture()}R.depthBuffer&&Ge(R)}function qe(R){let b=R.textures;for(let z=0,J=b.length;z<J;z++){let Q=b[z];if(m(Q)){let Y=y(R),ye=n.get(Q).__webglTexture;t.bindTexture(Y,ye),p(Y),t.unbindTexture()}}}let Fe=[],Re=[];function N(R){if(R.samples>0){if(ve(R)===!1){let b=R.textures,z=R.width,J=R.height,Q=r.COLOR_BUFFER_BIT,Y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=n.get(R),se=b.length>1;if(se)for(let de=0;de<b.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let we=R.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let de=0;de<b.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[de]);let re=n.get(b[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,re,0)}r.blitFramebuffer(0,0,z,J,0,0,z,J,Q,r.NEAREST),l===!0&&(Fe.length=0,Re.length=0,Fe.push(r.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Fe.push(Y),Re.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Re)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let de=0;de<b.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,ye.__webglColorRenderbuffer[de]);let re=n.get(b[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function rt(R){return Math.min(i.maxSamples,R.samples)}function ve(R){let b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function We(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Ke(R,b){let z=R.colorSpace,J=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==qr&&z!==er&&(ht.getTransfer(z)===xt?(J!==li||Q!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function pt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=D,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=dt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ve}function wS(r,e){function t(n,i=er){let s,o=ht.getTransfer(i);if(n===bi)return r.UNSIGNED_BYTE;if(n===Ec)return r.UNSIGNED_SHORT_4_4_4_4;if(n===wc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===af)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===lf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===sf)return r.BYTE;if(n===of)return r.SHORT;if(n===js)return r.UNSIGNED_SHORT;if(n===Tc)return r.INT;if(n===wr)return r.UNSIGNED_INT;if(n===Ii)return r.FLOAT;if(n===eo)return r.HALF_FLOAT;if(n===cf)return r.ALPHA;if(n===hf)return r.RGB;if(n===li)return r.RGBA;if(n===Hs)return r.DEPTH_COMPONENT;if(n===no)return r.DEPTH_STENCIL;if(n===uf)return r.RED;if(n===Ac)return r.RED_INTEGER;if(n===ff)return r.RG;if(n===Cc)return r.RG_INTEGER;if(n===Rc)return r.RGBA_INTEGER;if(n===va||n===ya||n===Ma||n===Sa)if(o===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===va)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===va)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pc||n===Ic||n===Dc||n===Lc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Pc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ic)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uc||n===Fc||n===Nc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Uc||n===Fc)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Nc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oc||n===Bc||n===zc||n===kc||n===Vc||n===Hc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===$c||n===Jc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Oc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$c)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kc||n===Qc||n===jc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Kc)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eh||n===th||n===nh||n===ih)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===eh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===th)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ih)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===to?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var AS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CS=`
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

}`,Uf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ra(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new En({vertexShader:AS,fragmentShader:CS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ff=class extends $i{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,g=null,_=typeof XRWebGLBinding<"u",m=new Uf,p={},y=t.getContextAttributes(),v=null,x=null,T=[],w=[],A=new xe,C=null,M=new on;M.viewport=new _t;let S=new on;S.viewport=new _t;let I=[M,S],D=new fc,k=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=T[$];return K===void 0&&(K=new qs,T[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=T[$];return K===void 0&&(K=new qs,T[$]=K),K.getGripSpace()},this.getHand=function($){let K=T[$];return K===void 0&&(K=new qs,T[$]=K),K.getHandSpace()};function W($){let K=w.indexOf($.inputSource);if(K===-1)return;let fe=T[K];fe!==void 0&&(fe.update($.inputSource,$.frame,c||o),fe.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",Z);for(let $=0;$<T.length;$++){let K=w[$];K!==null&&(w[$]=null,T[$].disconnect(K))}k=null,H=null,m.reset();for(let $ in p)delete p[$];e.setRenderTarget(v),u=null,d=null,f=null,i=null,x=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",G),i.addEventListener("inputsourceschange",Z),y.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ce=null,Ee=null;y.depth&&(Ee=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=y.stencil?no:Hs,Ce=y.stencil?to:wr);let Ge={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ge),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Ci(d.textureWidth,d.textureHeight,{format:li,type:bi,depthTexture:new ia(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new Ci(u.framebufferWidth,u.framebufferHeight,{format:li,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ze.setContext(i),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z($){for(let K=0;K<$.removed.length;K++){let fe=$.removed[K],Ce=w.indexOf(fe);Ce>=0&&(w[Ce]=null,T[Ce].disconnect(fe))}for(let K=0;K<$.added.length;K++){let fe=$.added[K],Ce=w.indexOf(fe);if(Ce===-1){for(let Ge=0;Ge<T.length;Ge++)if(Ge>=w.length){w.push(fe),Ce=Ge;break}else if(w[Ge]===null){w[Ge]=fe,Ce=Ge;break}if(Ce===-1)break}let Ee=T[Ce];Ee&&Ee.connect(fe)}}let V=new F,ne=new F;function L($,K,fe){V.setFromMatrixPosition(K.matrixWorld),ne.setFromMatrixPosition(fe.matrixWorld);let Ce=V.distanceTo(ne),Ee=K.projectionMatrix.elements,Ge=fe.projectionMatrix.elements,dt=Ee[14]/(Ee[10]-1),P=Ee[14]/(Ee[10]+1),qe=(Ee[9]+1)/Ee[5],Fe=(Ee[9]-1)/Ee[5],Re=(Ee[8]-1)/Ee[0],N=(Ge[8]+1)/Ge[0],rt=dt*Re,ve=dt*N,We=Ce/(-Re+N),Ke=We*-Re;if(K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ke),$.translateZ(We),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ee[10]===-1)$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let pt=dt+We,R=P+We,b=rt-Ke,z=ve+(Ce-Ke),J=qe*P/R*pt,Q=Fe*P/R*pt;$.projectionMatrix.makePerspective(b,z,J,Q,pt,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ae($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let K=$.near,fe=$.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),D.near=S.near=M.near=K,D.far=S.far=M.far=fe,(k!==D.near||H!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),k=D.near,H=D.far),D.layers.mask=$.layers.mask|6,M.layers.mask=D.layers.mask&3,S.layers.mask=D.layers.mask&5;let Ce=$.parent,Ee=D.cameras;ae(D,Ce);for(let Ge=0;Ge<Ee.length;Ge++)ae(Ee[Ge],Ce);Ee.length===2?L(D,M,S):D.projectionMatrix.copy(M.projectionMatrix),he($,D,Ce)};function he($,K,fe){fe===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(fe.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Nl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function($){return p[$]};let Pe=null;function Le($,K){if(h=K.getViewerPose(c||o),g=K,h!==null){let fe=h.views;u!==null&&(e.setRenderTargetFramebuffer(x,u.framebuffer),e.setRenderTarget(x));let Ce=!1;fe.length!==D.cameras.length&&(D.cameras.length=0,Ce=!0);for(let P=0;P<fe.length;P++){let qe=fe[P],Fe=null;if(u!==null)Fe=u.getViewport(qe);else{let N=f.getViewSubImage(d,qe);Fe=N.viewport,P===0&&(e.setRenderTargetTextures(x,N.colorTexture,N.depthStencilTexture),e.setRenderTarget(x))}let Re=I[P];Re===void 0&&(Re=new on,Re.layers.enable(P),Re.viewport=new _t,I[P]=Re),Re.matrix.fromArray(qe.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(qe.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),P===0&&(D.matrix.copy(Re.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ce===!0&&D.cameras.push(Re)}let Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let P=f.getDepthInformation(fe[0]);P&&P.isValid&&P.texture&&m.init(P,i.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let P=0;P<fe.length;P++){let qe=fe[P].camera;if(qe){let Fe=p[qe];Fe||(Fe=new ra,p[qe]=Fe);let Re=f.getCameraImage(qe);Fe.sourceTexture=Re}}}}for(let fe=0;fe<T.length;fe++){let Ce=w[fe],Ee=T[fe];Ce!==null&&Ee!==void 0&&Ee.update(Ce,K,c||o)}Pe&&Pe($,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let ze=new Km;ze.setAnimationLoop(Le),this.setAnimationLoop=function($){Pe=$},this.dispose=function(){}}},es=new Mi,RS=new Tt;function PS(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,_f(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,es.copy(x),es.x*=-1,es.y*=-1,es.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.envMapRotation.value.setFromMatrix4(RS.makeRotationFromEuler(es)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function IS(r,e,t,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let x=v.program;n.uniformBlockBinding(y,x)}function c(y,v){let x=i[y.id];x===void 0&&(g(y),x=h(y),i[y.id]=x,y.addEventListener("dispose",m));let T=v.program;n.updateUBOMapping(y,T);let w=e.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function h(y){let v=f();y.__bindingPointIndex=v;let x=r.createBuffer(),T=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,T,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,x),x}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=i[y.id],x=y.uniforms,T=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,A=x.length;w<A;w++){let C=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,S=C.length;M<S;M++){let I=C[M];if(u(I,w,M,T)===!0){let D=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],H=0;for(let W=0;W<k.length;W++){let G=k[W],Z=_(G);typeof G=="number"||typeof G=="boolean"?(I.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,D+H,I.__data)):G.isMatrix3?(I.__data[0]=G.elements[0],I.__data[1]=G.elements[1],I.__data[2]=G.elements[2],I.__data[3]=0,I.__data[4]=G.elements[3],I.__data[5]=G.elements[4],I.__data[6]=G.elements[5],I.__data[7]=0,I.__data[8]=G.elements[6],I.__data[9]=G.elements[7],I.__data[10]=G.elements[8],I.__data[11]=0):(G.toArray(I.__data,H),H+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(y,v,x,T){let w=y.value,A=v+"_"+x;if(T[A]===void 0)return typeof w=="number"||typeof w=="boolean"?T[A]=w:T[A]=w.clone(),!0;{let C=T[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return T[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(y){let v=y.uniforms,x=0,T=16;for(let A=0,C=v.length;A<C;A++){let M=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,I=M.length;S<I;S++){let D=M[S],k=Array.isArray(D.value)?D.value:[D.value];for(let H=0,W=k.length;H<W;H++){let G=k[H],Z=_(G),V=x%T,ne=V%Z.boundary,L=V+ne;x+=ne,L!==0&&T-L<Z.storage&&(x+=T-L),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=Z.storage}}}let w=x%T;return w>0&&(x+=T-w),y.__size=x,y.__cache={},this}function _(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var lh=class{constructor(e={}){let{canvas:t=xm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,T=!1;this._outputColorSpace=Tn;let w=0,A=0,C=null,M=-1,S=null,I=new _t,D=new _t,k=null,H=new Ze(0),W=0,G=t.width,Z=t.height,V=1,ne=null,L=null,ae=new _t(0,0,G,Z),he=new _t(0,0,G,Z),Pe=!1,Le=new Zs,ze=!1,$=!1,K=new Tt,fe=new F,Ce=new _t,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function dt(){return C===null?V:1}let P=n;function qe(E,O){return t.getContext(E,O)}try{let E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",te,!1),P===null){let O="webgl2";if(P=qe(O,E),P===null)throw qe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Fe,Re,N,rt,ve,We,Ke,pt,R,b,z,J,Q,Y,ye,se,we,de,re,ue,Oe,Ae,ce,Xe;function U(){Fe=new $y(P),Fe.init(),Ae=new wS(P,Fe),Re=new Hy(P,Fe,e,Ae),N=new TS(P,Fe),Re.reversedDepthBuffer&&d&&N.buffers.depth.setReversed(!0),rt=new Qy(P),ve=new uS,We=new ES(P,Fe,N,ve,Re,Ae,rt),Ke=new Wy(x),pt=new Zy(x),R=new rx(P),ce=new ky(P,R),b=new Jy(P,R,rt,ce),z=new eM(P,b,R,rt),re=new jy(P,Re,We),se=new Gy(ve),J=new hS(x,Ke,pt,Fe,Re,ce,se),Q=new PS(x,ve),Y=new dS,ye=new vS(Fe),de=new zy(x,Ke,pt,N,z,u,l),we=new SS(x,z,Re),Xe=new IS(P,rt,Re,N),ue=new Vy(P,Fe,rt),Oe=new Ky(P,Fe,rt),rt.programs=J.programs,x.capabilities=Re,x.extensions=Fe,x.properties=ve,x.renderLists=Y,x.shadowMap=we,x.state=N,x.info=rt}U();let ie=new Ff(x,P);this.xr=ie,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=Fe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Fe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(G,Z,!1))},this.getSize=function(E){return E.set(G,Z)},this.setSize=function(E,O,X=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,Z=O,t.width=Math.floor(E*V),t.height=Math.floor(O*V),X===!0&&(t.style.width=E+"px",t.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(G*V,Z*V).floor()},this.setDrawingBufferSize=function(E,O,X){G=E,Z=O,V=X,t.width=Math.floor(E*X),t.height=Math.floor(O*X),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(ae)},this.setViewport=function(E,O,X,q){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,O,X,q),N.viewport(I.copy(ae).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(he)},this.setScissor=function(E,O,X,q){E.isVector4?he.set(E.x,E.y,E.z,E.w):he.set(E,O,X,q),N.scissor(D.copy(he).multiplyScalar(V).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(E){N.setScissorTest(Pe=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){L=E},this.getClearColor=function(E){return E.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,X=!0){let q=0;if(E){let B=!1;if(C!==null){let ee=C.texture.format;B=ee===Rc||ee===Cc||ee===Ac}if(B){let ee=C.texture.type,le=ee===bi||ee===wr||ee===js||ee===to||ee===Ec||ee===wc,be=de.getClearColor(),Me=de.getClearAlpha(),Be=be.r,Ue=be.g,De=be.b;le?(g[0]=Be,g[1]=Ue,g[2]=De,g[3]=Me,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Be,_[1]=Ue,_[2]=De,_[3]=Me,P.clearBufferiv(P.COLOR,0,_))}else q|=P.COLOR_BUFFER_BIT}O&&(q|=P.DEPTH_BUFFER_BIT),X&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",te,!1),de.dispose(),Y.dispose(),ye.dispose(),ve.dispose(),Ke.dispose(),pt.dispose(),z.dispose(),ce.dispose(),Xe.dispose(),J.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",$e),ie.removeEventListener("sessionend",pe),Ve.stop()};function oe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=rt.autoReset,O=we.enabled,X=we.autoUpdate,q=we.needsUpdate,B=we.type;U(),rt.autoReset=E,we.enabled=O,we.autoUpdate=X,we.needsUpdate=q,we.type=B}function te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function j(E){let O=E.target;O.removeEventListener("dispose",j),Se(O)}function Se(E){ke(E),ve.remove(E)}function ke(E){let O=ve.get(E).programs;O!==void 0&&(O.forEach(function(X){J.releaseProgram(X)}),E.isShaderMaterial&&J.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,X,q,B,ee){O===null&&(O=Ee);let le=B.isMesh&&B.matrixWorld.determinant()<0,be=gt(E,O,X,q,B);N.setMaterial(q,le);let Me=X.index,Be=1;if(q.wireframe===!0){if(Me=b.getWireframeAttribute(X),Me===void 0)return;Be=2}let Ue=X.drawRange,De=X.attributes.position,Qe=Ue.start*Be,ot=(Ue.start+Ue.count)*Be;ee!==null&&(Qe=Math.max(Qe,ee.start*Be),ot=Math.min(ot,(ee.start+ee.count)*Be)),Me!==null?(Qe=Math.max(Qe,0),ot=Math.min(ot,Me.count)):De!=null&&(Qe=Math.max(Qe,0),ot=Math.min(ot,De.count));let Ot=ot-Qe;if(Ot<0||Ot===1/0)return;ce.setup(B,q,be,X,Me);let Ct,Mt=ue;if(Me!==null&&(Ct=R.get(Me),Mt=Oe,Mt.setIndex(Ct)),B.isMesh)q.wireframe===!0?(N.setLineWidth(q.wireframeLinewidth*dt()),Mt.setMode(P.LINES)):Mt.setMode(P.TRIANGLES);else if(B.isLine){let He=q.linewidth;He===void 0&&(He=1),N.setLineWidth(He*dt()),B.isLineSegments?Mt.setMode(P.LINES):B.isLineLoop?Mt.setMode(P.LINE_LOOP):Mt.setMode(P.LINE_STRIP)}else B.isPoints?Mt.setMode(P.POINTS):B.isSprite&&Mt.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Gs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))Mt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let He=B._multiDrawStarts,Dt=B._multiDrawCounts,ft=B._multiDrawCount,Gn=Me?R.get(Me).bytesPerElement:1,bs=ve.get(q).currentProgram.getUniforms();for(let Wn=0;Wn<ft;Wn++)bs.setValue(P,"_gl_DrawID",Wn),Mt.render(He[Wn]/Gn,Dt[Wn])}else if(B.isInstancedMesh)Mt.renderInstances(Qe,Ot,B.count);else if(X.isInstancedBufferGeometry){let He=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Dt=Math.min(X.instanceCount,He);Mt.renderInstances(Qe,Ot,Dt)}else Mt.render(Qe,Ot)};function ut(E,O,X){E.transparent===!0&&E.side===Pi&&E.forceSinglePass===!1?(E.side=wn,E.needsUpdate=!0,Ht(E,O,X),E.side=Yi,E.needsUpdate=!0,Ht(E,O,X),E.side=Pi):Ht(E,O,X)}this.compile=function(E,O,X=null){X===null&&(X=E),p=ye.get(X),p.init(O),v.push(p),X.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),E!==X&&E.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let q=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ee=B.material;if(ee)if(Array.isArray(ee))for(let le=0;le<ee.length;le++){let be=ee[le];ut(be,X,B),q.add(be)}else ut(ee,X,B),q.add(ee)}),p=v.pop(),q},this.compileAsync=function(E,O,X=null){let q=this.compile(E,O,X);return new Promise(B=>{function ee(){if(q.forEach(function(le){ve.get(le).currentProgram.isReady()&&q.delete(le)}),q.size===0){B(E);return}setTimeout(ee,10)}Fe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let _e=null;function Ie(E){_e&&_e(E)}function $e(){Ve.stop()}function pe(){Ve.start()}let Ve=new Km;Ve.setAnimationLoop(Ie),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(E){_e=E,ie.setAnimationLoop(E),E===null?Ve.stop():Ve.start()},ie.addEventListener("sessionstart",$e),ie.addEventListener("sessionend",pe),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(O),O=ie.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,O,C),p=ye.get(E,v.length),p.init(O),v.push(p),K.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Le.setFromProjectionMatrix(K,vi,O.reversedDepth),$=this.localClippingEnabled,ze=se.init(this.clippingPlanes,$),m=Y.get(E,y.length),m.init(),y.push(m),ie.enabled===!0&&ie.isPresenting===!0){let ee=x.xr.getDepthSensingMesh();ee!==null&&Ne(ee,O,-1/0,x.sortObjects)}Ne(E,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ne,L),Ge=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ge&&de.addToRenderList(m,E),this.info.render.frame++,ze===!0&&se.beginShadows();let X=p.state.shadowsArray;we.render(X,E,O),ze===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,B=m.transmissive;if(p.setupLights(),O.isArrayCamera){let ee=O.cameras;if(B.length>0)for(let le=0,be=ee.length;le<be;le++){let Me=ee[le];Vt(q,B,E,Me)}Ge&&de.render(E);for(let le=0,be=ee.length;le<be;le++){let Me=ee[le];Ye(m,E,Me,Me.viewport)}}else B.length>0&&Vt(q,B,E,O),Ge&&de.render(E),Ye(m,E,O);C!==null&&A===0&&(We.updateMultisampleRenderTarget(C),We.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(x,E,O),ce.resetDefaultState(),M=-1,S=null,v.pop(),v.length>0?(p=v[v.length-1],ze===!0&&se.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ne(E,O,X,q){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Le.intersectsSprite(E)){q&&Ce.setFromMatrixPosition(E.matrixWorld).applyMatrix4(K);let le=z.update(E),be=E.material;be.visible&&m.push(E,le,be,X,Ce.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Le.intersectsObject(E))){let le=z.update(E),be=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ce.copy(E.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ce.copy(le.boundingSphere.center)),Ce.applyMatrix4(E.matrixWorld).applyMatrix4(K)),Array.isArray(be)){let Me=le.groups;for(let Be=0,Ue=Me.length;Be<Ue;Be++){let De=Me[Be],Qe=be[De.materialIndex];Qe&&Qe.visible&&m.push(E,le,Qe,X,Ce.z,De)}}else be.visible&&m.push(E,le,be,X,Ce.z,null)}}let ee=E.children;for(let le=0,be=ee.length;le<be;le++)Ne(ee[le],O,X,q)}function Ye(E,O,X,q){let B=E.opaque,ee=E.transmissive,le=E.transparent;p.setupLightsView(X),ze===!0&&se.setGlobalState(x.clippingPlanes,X),q&&N.viewport(I.copy(q)),B.length>0&&et(B,O,X),ee.length>0&&et(ee,O,X),le.length>0&&et(le,O,X),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Vt(E,O,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Ci(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?eo:bi,minFilter:Er,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));let ee=p.state.transmissionRenderTarget[q.id],le=q.viewport||I;ee.setSize(le.z*x.transmissionResolutionScale,le.w*x.transmissionResolutionScale);let be=x.getRenderTarget(),Me=x.getActiveCubeFace(),Be=x.getActiveMipmapLevel();x.setRenderTarget(ee),x.getClearColor(H),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Ge&&de.render(X);let Ue=x.toneMapping;x.toneMapping=ji;let De=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),ze===!0&&se.setGlobalState(x.clippingPlanes,q),et(E,X,q),We.updateMultisampleRenderTarget(ee),We.updateRenderTargetMipmap(ee),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ot=0,Ot=O.length;ot<Ot;ot++){let Ct=O[ot],Mt=Ct.object,He=Ct.geometry,Dt=Ct.material,ft=Ct.group;if(Dt.side===Pi&&Mt.layers.test(q.layers)){let Gn=Dt.side;Dt.side=wn,Dt.needsUpdate=!0,Pt(Mt,X,q,He,Dt,ft),Dt.side=Gn,Dt.needsUpdate=!0,Qe=!0}}Qe===!0&&(We.updateMultisampleRenderTarget(ee),We.updateRenderTargetMipmap(ee))}x.setRenderTarget(be,Me,Be),x.setClearColor(H,W),De!==void 0&&(q.viewport=De),x.toneMapping=Ue}function et(E,O,X){let q=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ee=E.length;B<ee;B++){let le=E[B],be=le.object,Me=le.geometry,Be=le.group,Ue=le.material;Ue.allowOverride===!0&&q!==null&&(Ue=q),be.layers.test(X.layers)&&Pt(be,O,X,Me,Ue,Be)}}function Pt(E,O,X,q,B,ee){E.onBeforeRender(x,O,X,q,B,ee),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(x,O,X,q,E,ee),B.transparent===!0&&B.side===Pi&&B.forceSinglePass===!1?(B.side=wn,B.needsUpdate=!0,x.renderBufferDirect(X,O,q,B,E,ee),B.side=Yi,B.needsUpdate=!0,x.renderBufferDirect(X,O,q,B,E,ee),B.side=Pi):x.renderBufferDirect(X,O,q,B,E,ee),E.onAfterRender(x,O,X,q,B,ee)}function Ht(E,O,X){O.isScene!==!0&&(O=Ee);let q=ve.get(E),B=p.state.lights,ee=p.state.shadowsArray,le=B.state.version,be=J.getParameters(E,B.state,ee,O,X),Me=J.getProgramCacheKey(be),Be=q.programs;q.environment=E.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(E.isMeshStandardMaterial?pt:Ke).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",j),Be=new Map,q.programs=Be);let Ue=Be.get(Me);if(Ue!==void 0){if(q.currentProgram===Ue&&q.lightsStateVersion===le)return yt(E,be),Ue}else be.uniforms=J.getUniforms(E),E.onBeforeCompile(be,x),Ue=J.acquireProgram(be,Me),Be.set(Me,Ue),q.uniforms=be.uniforms;let De=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=se.uniform),yt(E,be),q.needsLights=At(E),q.lightsStateVersion=le,q.needsLights&&(De.ambientLightColor.value=B.state.ambient,De.lightProbe.value=B.state.probe,De.directionalLights.value=B.state.directional,De.directionalLightShadows.value=B.state.directionalShadow,De.spotLights.value=B.state.spot,De.spotLightShadows.value=B.state.spotShadow,De.rectAreaLights.value=B.state.rectArea,De.ltc_1.value=B.state.rectAreaLTC1,De.ltc_2.value=B.state.rectAreaLTC2,De.pointLights.value=B.state.point,De.pointLightShadows.value=B.state.pointShadow,De.hemisphereLights.value=B.state.hemi,De.directionalShadowMap.value=B.state.directionalShadowMap,De.directionalShadowMatrix.value=B.state.directionalShadowMatrix,De.spotShadowMap.value=B.state.spotShadowMap,De.spotLightMatrix.value=B.state.spotLightMatrix,De.spotLightMap.value=B.state.spotLightMap,De.pointShadowMap.value=B.state.pointShadowMap,De.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Ue,q.uniformsList=null,Ue}function wt(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=so.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function yt(E,O){let X=ve.get(E);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function gt(E,O,X,q,B){O.isScene!==!0&&(O=Ee),We.resetTextureUnits();let ee=O.fog,le=q.isMeshStandardMaterial?O.environment:null,be=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:qr,Me=(q.isMeshStandardMaterial?pt:Ke).get(q.envMap||le),Be=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ue=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),De=!!X.morphAttributes.position,Qe=!!X.morphAttributes.normal,ot=!!X.morphAttributes.color,Ot=ji;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ot=x.toneMapping);let Ct=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Mt=Ct!==void 0?Ct.length:0,He=ve.get(q),Dt=p.state.lights;if(ze===!0&&($===!0||E!==S)){let Sn=E===S&&q.id===M;se.setState(q,E,Sn)}let ft=!1;q.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Dt.state.version||He.outputColorSpace!==be||B.isBatchedMesh&&He.batching===!1||!B.isBatchedMesh&&He.batching===!0||B.isBatchedMesh&&He.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&He.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&He.instancing===!1||!B.isInstancedMesh&&He.instancing===!0||B.isSkinnedMesh&&He.skinning===!1||!B.isSkinnedMesh&&He.skinning===!0||B.isInstancedMesh&&He.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&He.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&He.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&He.instancingMorph===!1&&B.morphTexture!==null||He.envMap!==Me||q.fog===!0&&He.fog!==ee||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==se.numPlanes||He.numIntersection!==se.numIntersection)||He.vertexAlphas!==Be||He.vertexTangents!==Ue||He.morphTargets!==De||He.morphNormals!==Qe||He.morphColors!==ot||He.toneMapping!==Ot||He.morphTargetsCount!==Mt)&&(ft=!0):(ft=!0,He.__version=q.version);let Gn=He.currentProgram;ft===!0&&(Gn=Ht(q,O,B));let bs=!1,Wn=!1,Co=!1,Lt=Gn.getUniforms(),ri=He.uniforms;if(N.useProgram(Gn.program)&&(bs=!0,Wn=!0,Co=!0),q.id!==M&&(M=q.id,Wn=!0),bs||S!==E){N.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Lt.setValue(P,"projectionMatrix",E.projectionMatrix),Lt.setValue(P,"viewMatrix",E.matrixWorldInverse);let Fn=Lt.map.cameraPosition;Fn!==void 0&&Fn.setValue(P,fe.setFromMatrixPosition(E.matrixWorld)),Re.logarithmicDepthBuffer&&Lt.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Lt.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Wn=!0,Co=!0)}if(B.isSkinnedMesh){Lt.setOptional(P,B,"bindMatrix"),Lt.setOptional(P,B,"bindMatrixInverse");let Sn=B.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Lt.setValue(P,"boneTexture",Sn.boneTexture,We))}B.isBatchedMesh&&(Lt.setOptional(P,B,"batchingTexture"),Lt.setValue(P,"batchingTexture",B._matricesTexture,We),Lt.setOptional(P,B,"batchingIdTexture"),Lt.setValue(P,"batchingIdTexture",B._indirectTexture,We),Lt.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&Lt.setValue(P,"batchingColorTexture",B._colorsTexture,We));let si=X.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&re.update(B,X,Gn),(Wn||He.receiveShadow!==B.receiveShadow)&&(He.receiveShadow=B.receiveShadow,Lt.setValue(P,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ri.envMap.value=Me,ri.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(ri.envMapIntensity.value=O.environmentIntensity),Wn&&(Lt.setValue(P,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&Hn(ri,Co),ee&&q.fog===!0&&Q.refreshFogUniforms(ri,ee),Q.refreshMaterialUniforms(ri,q,V,Z,p.state.transmissionRenderTarget[E.id]),so.upload(P,wt(He),ri,We)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(so.upload(P,wt(He),ri,We),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Lt.setValue(P,"center",B.center),Lt.setValue(P,"modelViewMatrix",B.modelViewMatrix),Lt.setValue(P,"normalMatrix",B.normalMatrix),Lt.setValue(P,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Sn=q.uniformsGroups;for(let Fn=0,Qh=Sn.length;Fn<Qh;Fn++){let Br=Sn[Fn];Xe.update(Br,Gn),Xe.bind(Br,Gn)}}return Gn}function Hn(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function At(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,O,X){let q=ve.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ve.get(E.texture).__webglTexture=O,ve.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let X=ve.get(E);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};let Mn=P.createFramebuffer();this.setRenderTarget=function(E,O=0,X=0){C=E,w=O,A=X;let q=!0,B=null,ee=!1,le=!1;if(E){let Me=ve.get(E);if(Me.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(P.FRAMEBUFFER,null),q=!1;else if(Me.__webglFramebuffer===void 0)We.setupRenderTarget(E);else if(Me.__hasExternalTextures)We.rebindTextures(E,ve.get(E.texture).__webglTexture,ve.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let De=E.depthTexture;if(Me.__boundDepthTexture!==De){if(De!==null&&ve.has(De)&&(E.width!==De.image.width||E.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(E)}}let Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(le=!0);let Ue=ve.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[O])?B=Ue[O][X]:B=Ue[O],ee=!0):E.samples>0&&We.useMultisampledRTT(E)===!1?B=ve.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?B=Ue[X]:B=Ue,I.copy(E.viewport),D.copy(E.scissor),k=E.scissorTest}else I.copy(ae).multiplyScalar(V).floor(),D.copy(he).multiplyScalar(V).floor(),k=Pe;if(X!==0&&(B=Mn),N.bindFramebuffer(P.FRAMEBUFFER,B)&&q&&N.drawBuffers(E,B),N.viewport(I),N.scissor(D),N.setScissorTest(k),ee){let Me=ve.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,X)}else if(le){let Me=O;for(let Be=0;Be<E.textures.length;Be++){let Ue=ve.get(E.textures[Be]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Be,Ue.__webglTexture,X,Me)}}else if(E!==null&&X!==0){let Me=ve.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Me.__webglTexture,X)}M=-1},this.readRenderTargetPixels=function(E,O,X,q,B,ee,le,be=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&le!==void 0&&(Me=Me[le]),Me){N.bindFramebuffer(P.FRAMEBUFFER,Me);try{let Be=E.textures[be],Ue=Be.format,De=Be.type;if(!Re.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-q&&X>=0&&X<=E.height-B&&(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+be),P.readPixels(O,X,q,B,Ae.convert(Ue),Ae.convert(De),ee))}finally{let Be=C!==null?ve.get(C).__webglFramebuffer:null;N.bindFramebuffer(P.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(E,O,X,q,B,ee,le,be=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&le!==void 0&&(Me=Me[le]),Me)if(O>=0&&O<=E.width-q&&X>=0&&X<=E.height-B){N.bindFramebuffer(P.FRAMEBUFFER,Me);let Be=E.textures[be],Ue=Be.format,De=Be.type;if(!Re.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Qe),P.bufferData(P.PIXEL_PACK_BUFFER,ee.byteLength,P.STREAM_READ),E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+be),P.readPixels(O,X,q,B,Ae.convert(Ue),Ae.convert(De),0);let ot=C!==null?ve.get(C).__webglFramebuffer:null;N.bindFramebuffer(P.FRAMEBUFFER,ot);let Ot=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await vm(P,Ot,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Qe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ee),P.deleteBuffer(Qe),P.deleteSync(Ot),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,X=0){let q=Math.pow(2,-X),B=Math.floor(E.image.width*q),ee=Math.floor(E.image.height*q),le=O!==null?O.x:0,be=O!==null?O.y:0;We.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,le,be,B,ee),N.unbindTexture()};let ii=P.createFramebuffer(),$t=P.createFramebuffer();this.copyTextureToTexture=function(E,O,X=null,q=null,B=0,ee=null){ee===null&&(B!==0?(Gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=B,B=0):ee=0);let le,be,Me,Be,Ue,De,Qe,ot,Ot,Ct=E.isCompressedTexture?E.mipmaps[ee]:E.image;if(X!==null)le=X.max.x-X.min.x,be=X.max.y-X.min.y,Me=X.isBox3?X.max.z-X.min.z:1,Be=X.min.x,Ue=X.min.y,De=X.isBox3?X.min.z:0;else{let si=Math.pow(2,-B);le=Math.floor(Ct.width*si),be=Math.floor(Ct.height*si),E.isDataArrayTexture?Me=Ct.depth:E.isData3DTexture?Me=Math.floor(Ct.depth*si):Me=1,Be=0,Ue=0,De=0}q!==null?(Qe=q.x,ot=q.y,Ot=q.z):(Qe=0,ot=0,Ot=0);let Mt=Ae.convert(O.format),He=Ae.convert(O.type),Dt;O.isData3DTexture?(We.setTexture3D(O,0),Dt=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(We.setTexture2DArray(O,0),Dt=P.TEXTURE_2D_ARRAY):(We.setTexture2D(O,0),Dt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);let ft=P.getParameter(P.UNPACK_ROW_LENGTH),Gn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),bs=P.getParameter(P.UNPACK_SKIP_PIXELS),Wn=P.getParameter(P.UNPACK_SKIP_ROWS),Co=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ct.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ct.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Be),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ue),P.pixelStorei(P.UNPACK_SKIP_IMAGES,De);let Lt=E.isDataArrayTexture||E.isData3DTexture,ri=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let si=ve.get(E),Sn=ve.get(O),Fn=ve.get(si.__renderTarget),Qh=ve.get(Sn.__renderTarget);N.bindFramebuffer(P.READ_FRAMEBUFFER,Fn.__webglFramebuffer),N.bindFramebuffer(P.DRAW_FRAMEBUFFER,Qh.__webglFramebuffer);for(let Br=0;Br<Me;Br++)Lt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.get(E).__webglTexture,B,De+Br),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.get(O).__webglTexture,ee,Ot+Br)),P.blitFramebuffer(Be,Ue,le,be,Qe,ot,le,be,P.DEPTH_BUFFER_BIT,P.NEAREST);N.bindFramebuffer(P.READ_FRAMEBUFFER,null),N.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||ve.has(E)){let si=ve.get(E),Sn=ve.get(O);N.bindFramebuffer(P.READ_FRAMEBUFFER,ii),N.bindFramebuffer(P.DRAW_FRAMEBUFFER,$t);for(let Fn=0;Fn<Me;Fn++)Lt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,si.__webglTexture,B,De+Fn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,si.__webglTexture,B),ri?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Sn.__webglTexture,ee,Ot+Fn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Sn.__webglTexture,ee),B!==0?P.blitFramebuffer(Be,Ue,le,be,Qe,ot,le,be,P.COLOR_BUFFER_BIT,P.NEAREST):ri?P.copyTexSubImage3D(Dt,ee,Qe,ot,Ot+Fn,Be,Ue,le,be):P.copyTexSubImage2D(Dt,ee,Qe,ot,Be,Ue,le,be);N.bindFramebuffer(P.READ_FRAMEBUFFER,null),N.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ri?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Dt,ee,Qe,ot,Ot,le,be,Me,Mt,He,Ct.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Dt,ee,Qe,ot,Ot,le,be,Me,Mt,Ct.data):P.texSubImage3D(Dt,ee,Qe,ot,Ot,le,be,Me,Mt,He,Ct):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ee,Qe,ot,le,be,Mt,He,Ct.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ee,Qe,ot,Ct.width,Ct.height,Mt,Ct.data):P.texSubImage2D(P.TEXTURE_2D,ee,Qe,ot,le,be,Mt,He,Ct);P.pixelStorei(P.UNPACK_ROW_LENGTH,ft),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Gn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,bs),P.pixelStorei(P.UNPACK_SKIP_ROWS,Wn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Co),ee===0&&O.generateMipmaps&&P.generateMipmap(Dt),N.unbindTexture()},this.initRenderTarget=function(E){ve.get(E).__webglFramebuffer===void 0&&We.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?We.setTextureCube(E,0):E.isData3DTexture?We.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?We.setTexture2DArray(E,0):We.setTexture2D(E,0),N.unbindTexture()},this.resetState=function(){w=0,A=0,C=null,N.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};function tr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function cg(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},lo={duration:.5,overwrite:!1,delay:0},td,ln,It,hi=1e8,bt=1/hi,Wf=Math.PI*2,LS=Wf/4,US=0,hg=Math.sqrt,FS=Math.cos,NS=Math.sin,jt=function(e){return typeof e=="string"},Bt=function(e){return typeof e=="function"},ir=function(e){return typeof e=="number"},vh=function(e){return typeof e>"u"},Fi=function(e){return typeof e=="object"},zn=function(e){return e!==!1},nd=function(){return typeof window<"u"},hh=function(e){return Bt(e)||jt(e)},ug=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},mn=Array.isArray,Xf=/(?:-?\.?\d|\.)+/gi,id=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,os=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Of=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rd=/[+-]=-?[.\d]+/,fg=/[^,'"\[\]\s]+/gi,OS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ft,Li,qf,sd,Jn={},ph={},dg,pg=function(e){return(ph=co(e,Jn))&&gn},yh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ra=function(e,t){return!t&&console.warn(e)},mg=function(e,t){return e&&(Jn[e]=t)&&ph&&(ph[e]=t)||Jn},Pa=function(){return 0},BS={suppressEvents:!0,isStart:!0,kill:!1},uh={suppressEvents:!0,kill:!1},zS={suppressEvents:!0},od={},Cr=[],Yf={},gg,On={},Bf={},ng=30,fh=[],ad="",ld=function(e){var t=e[0],n,i;if(Fi(t)||Bt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=fh.length;i--&&!fh[i].targetTest(t););n=fh[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new fd(e[i],n)))||e.splice(i,1);return e},Rr=function(e){return e._gsap||ld(ui(e))[0]._gsap},cd=function(e,t,n){return(n=e[t])&&Bt(n)?e[t]():vh(n)&&e.getAttribute&&e.getAttribute(t)||n},An=function(e,t){return(e=e.split(",")).forEach(t)||e},zt=function(e){return Math.round(e*1e5)/1e5||0},qt=function(e){return Math.round(e*1e7)/1e7||0},as=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},kS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},mh=function(){var e=Cr.length,t=Cr.slice(0),n,i;for(Yf={},Cr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},hd=function(e){return!!(e._initted||e._startAt||e.add)},_g=function(e,t,n,i){Cr.length&&!ln&&mh(),e.render(t,n,i||!!(ln&&t<0&&hd(e))),Cr.length&&!ln&&mh()},xg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(fg).length<2?t:jt(e)?e.trim():e},vg=function(e){return e},Kn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},VS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},co=function(e,t){for(var n in t)e[n]=t[n];return e},ig=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Fi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},gh=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},wa=function(e){var t=e.parent||Ft,n=e.keyframes?VS(mn(e.keyframes)):Kn;if(zn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},HS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},yg=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Mh=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Pr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},is=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},GS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Zf=function(e,t,n,i){return e._startAt&&(ln?e._startAt.revert(uh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},WS=function r(e){return!e||e._ts&&r(e.parent)},rg=function(e){return e._repeat?ho(e._tTime,e=e.duration()+e._rDelay)*e:0},ho=function(e,t){var n=Math.floor(e=qt(e/t));return e&&n===e?n-1:n},_h=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Sh=function(e){return e._end=qt(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},bh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=qt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Sh(e),n._dirty||is(n,e)),e},Mg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=_h(e.rawTime(),t),(!t._dur||La(0,t.totalDuration(),n)-t._tTime>bt)&&t.render(n,!0)),is(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-bt}},Ui=function(e,t,n,i){return t.parent&&Pr(t),t._start=qt((ir(n)?n:n||e!==Ft?ci(e,n,t):e._time)+t._delay),t._end=qt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),yg(e,t,"_first","_last",e._sort?"_start":0),$f(t)||(e._recent=t),i||Mg(e,t),e._ts<0&&bh(e,e._tTime),e},Sg=function(e,t){return(Jn.ScrollTrigger||yh("scrollTrigger",t))&&Jn.ScrollTrigger.create(t,e)},bg=function(e,t,n,i,s){if(md(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&gg!==Bn.frame)return Cr.push(e),e._lazy=[s,i],1},XS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},$f=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},qS=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&XS(e)&&!(!e._initted&&$f(e))||(e._ts<0||e._dp._ts<0)&&!$f(e))?0:1,a=e._rDelay,l=0,c,h,f;if(a&&e._repeat&&(l=La(0,e._tDur,t),h=ho(l,a),e._yoyo&&h&1&&(o=1-o),h!==ho(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||ln||i||e._zTime===bt||!t&&e._zTime){if(!e._initted&&bg(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?bt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Zf(e,t,n,!0),e._onUpdate&&!n&&$n(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&$n(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Pr(e,1),!n&&!ln&&($n(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},YS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},uo=function(e,t,n,i){var s=e._repeat,o=qt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:qt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&bh(e,e._tTime=e._tDur*a),e.parent&&Sh(e),n||is(e.parent,e),e},sg=function(e){return e instanceof an?is(e):uo(e,e._dur)},ZS={_start:0,endTime:Pa,totalDuration:Pa},ci=function r(e,t,n){var i=e.labels,s=e._recent||ZS,o=e.duration()>=hi?s.endTime(!1):e._dur,a,l,c;return jt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(mn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Aa=function(e,t,n){var i=ir(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=zn(l.vars.inherit)&&l.parent;o.immediateRender=zn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Gt(t[0],o,t[s+1])},Ir=function(e,t){return e||e===0?t(e):t},La=function(e,t,n){return n<e?e:n>t?t:n},cn=function(e,t){return!jt(e)||!(t=OS.exec(e))?"":t[1]},$S=function(e,t,n){return Ir(n,function(i){return La(e,t,i)})},Jf=[].slice,Tg=function(e,t){return e&&Fi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Fi(e[0]))&&!e.nodeType&&e!==Li},JS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return jt(i)&&!t||Tg(i,1)?(s=n).push.apply(s,ui(i)):n.push(i)})||n},ui=function(e,t,n){return It&&!t&&It.selector?It.selector(e):jt(e)&&!n&&(qf||!fo())?Jf.call((t||sd).querySelectorAll(e),0):mn(e)?JS(e,n):Tg(e)?Jf.call(e,0):e?[e]:[]},Kf=function(e){return e=ui(e)[0]||Ra("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ui(t,n.querySelectorAll?n:n===e?Ra("Invalid scope")||sd.createElement("div"):e)}},Eg=function(e){return e.sort(function(){return .5-Math.random()})},wg=function(e){if(Bt(e))return e;var t=Fi(e)?e:{each:e},n=rs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,f=i;return jt(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(d,u,g){var _=(g||t).length,m=o[_],p,y,v,x,T,w,A,C,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,hi])[1],!M){for(A=-hi;A<(A=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],p=l?Math.min(M,_)*h-.5:i%M,y=M===hi?0:l?_*f/M-.5:i/M|0,A=0,C=hi,w=0;w<_;w++)v=w%M-p,x=y-(w/M|0),m[w]=T=c?Math.abs(c==="y"?x:v):hg(v*v+x*x),T>A&&(A=T),T<C&&(C=T);i==="random"&&Eg(m),m.max=A-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=cn(t.amount||t.each)||0,n=n&&_<0?Fg(n):n}return _=(m[d]-m.min)/m.max||0,qt(m.b+(n?n(_):_)*m.v)+m.u}},Qf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=qt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ir(n)?0:cn(n))}},Ag=function(e,t){var n=mn(e),i,s;return!n&&Fi(e)&&(i=n=e.radius||hi,e.values?(e=ui(e.values),(s=!ir(e[0]))&&(i*=i)):e=Qf(e.increment)),Ir(t,n?Bt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=hi,h=0,f=e.length,d,u;f--;)s?(d=e[f].x-a,u=e[f].y-l,d=d*d+u*u):d=Math.abs(e[f]-a),d<c&&(c=d,h=f);return h=!i||c<=i?e[h]:o,s||h===o||ir(o)?h:h+cn(o)}:Qf(e))},Cg=function(e,t,n,i){return Ir(mn(e)?!t:n===!0?!!(n=0):!i,function(){return mn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},KS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},QS=function(e,t){return function(n){return e(parseFloat(n))+(t||cn(n))}},jS=function(e,t,n){return Pg(e,t,0,1,n)},Rg=function(e,t,n){return Ir(n,function(i){return e[~~t(i)]})},eb=function r(e,t,n){var i=t-e;return mn(e)?Rg(e,r(0,e.length),t):Ir(n,function(s){return(i+(s-e)%i)%i+e})},tb=function r(e,t,n){var i=t-e,s=i*2;return mn(e)?Rg(e,r(0,e.length-1),t):Ir(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},po=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?fg:Xf),n+=e.substr(t,i-t)+Cg(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Pg=function(e,t,n,i,s){var o=t-e,a=i-n;return Ir(s,function(l){return n+((l-e)/o*a||0)})},nb=function r(e,t,n,i){var s=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!s){var o=jt(e),a={},l,c,h,f,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(mn(e)&&!mn(t)){for(h=[],f=e.length,d=f-2,c=1;c<f;c++)h.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return h[_](g-_)},n=t}else i||(e=co(mn(e)?[]:{},e));if(!h){for(l in t)dd.call(a,e,l,"get",t[l]);s=function(g){return xd(g,a)||(o?e.p:e)}}}return Ir(n,s)},og=function(e,t,n){var i=e.labels,s=hi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},$n=function(e,t,n){var i=e.vars,s=i[t],o=It,a=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Cr.length&&mh(),a&&(It=a),h=l?s.apply(c,l):s.call(c),It=o,h},Ta=function(e){return Pr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ln),e.progress()<1&&$n(e,"onInterrupt"),e},ao,Ig=[],Dg=function(e){if(e)if(e=!e.name&&e.default||e,nd()||e.headless){var t=e.name,n=Bt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Pa,render:xd,add:dd,kill:xb,modifier:_b,rawVars:0},o={targetTest:0,get:0,getSetter:Th,aliases:{},register:0};if(fo(),e!==i){if(On[t])return;Kn(i,Kn(gh(e,s),o)),co(i.prototype,co(s,gh(e,o))),On[i.prop=t]=i,e.targetTest&&(fh.push(i),od[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}mg(t,i),e.register&&e.register(gn,i,Cn)}else Ig.push(e)},St=255,Ea={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},zf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*St+.5|0},Lg=function(e,t,n){var i=e?ir(e)?[e>>16,e>>8&St,e&St]:0:Ea.black,s,o,a,l,c,h,f,d,u,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ea[e])i=Ea[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&St,i&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Xf),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=zf(l+1/3,s,o),i[1]=zf(l,s,o),i[2]=zf(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(id),n&&i.length<4&&(i[3]=1),i}else i=e.match(Xf)||Ea.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/St,o=i[1]/St,a=i[2]/St,f=Math.max(s,o,a),d=Math.min(s,o,a),h=(f+d)/2,f===d?l=c=0:(u=f-d,c=h>.5?u/(2-f-d):u/(f+d),l=f===s?(o-a)/u+(o<a?6:0):f===o?(a-s)/u+2:(s-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Ug=function(e){var t=[],n=[],i=-1;return e.split(nr).forEach(function(s){var o=s.match(os)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},ag=function(e,t,n){var i="",s=(e+i).match(nr),o=t?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return e;if(s=s.map(function(d){return(d=Lg(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Ug(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(nr,"1").split(os),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(nr),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},nr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ea)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),ib=/hsl[a]?\(/,ud=function(e){var t=e.join(" "),n;if(nr.lastIndex=0,nr.test(t))return n=ib.test(t),e[1]=ag(e[1],n),e[0]=ag(e[0],n,Ug(e[1])),!0},Ia,Bn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,f,d,u,g=function _(m){var p=r()-i,y=m===!0,v,x,T,w;if((p>e||p<0)&&(n+=p-t),i+=p,T=i-n,v=T-o,(v>0||y)&&(w=++f.frame,d=T-f.time*1e3,f.time=T=T/1e3,o+=v+(v>=s?4:s-v),x=1),y||(l=c(_)),x)for(u=0;u<a.length;u++)a[u](T,d,w,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){dg&&(!qf&&nd()&&(Li=qf=window,sd=Li.document||{},Jn.gsap=gn,(Li.gsapVersions||(Li.gsapVersions=[])).push(gn.version),pg(ph||Li.GreenSockGlobals||!Li.gsap&&Li||{}),Ig.forEach(Dg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Ia=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ia=0,c=Pa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,y){var v=p?function(x,T,w,A){m(x,T,w,A),f.remove(v)}:m;return f.remove(m),a[y?"unshift":"push"](v),fo(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&u>=p&&u--},_listeners:a},f})(),fo=function(){return!Ia&&Bn.wake()},ct={},rb=/^[\d.\-M][\d.\-,\s]/,sb=/["']/g,ob=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(sb,"").trim():+c,i=l.substr(a+1).trim();return t},ab=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},lb=function(e){var t=(e+"").split("("),n=ct[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ob(t[1])]:ab(e).split(",").map(xg)):ct._CE&&rb.test(e)?ct._CE("",e):n},Fg=function(e){return function(t){return 1-e(1-t)}},Ng=function r(e,t){for(var n=e._first,i;n;)n instanceof an?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},rs=function(e,t){return e&&(Bt(e)?e:ct[e]||lb(e))||t},ls=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return An(e,function(a){ct[a]=Jn[a]=s,ct[o=a.toLowerCase()]=n;for(var l in s)ct[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[a+"."+l]=s[l]}),s},Og=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},kf=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Wf*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*NS((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Og(a);return s=Wf/s,l.config=function(c,h){return r(e,c,h)},l},Vf=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Og(n);return i.config=function(s){return r(e,s)},i};An("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ls(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;ls("Elastic",kf("in"),kf("out"),kf());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ls("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ls("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ls("Circ",function(r){return-(hg(1-r*r)-1)});ls("Sine",function(r){return r===1?1:-FS(r*LS)+1});ls("Back",Vf("in"),Vf("out"),Vf());ct.SteppedEase=ct.steps=Jn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-bt;return function(a){return((i*La(0,o,a)|0)+s)*n}}};lo.ease=ct["quad.out"];An("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ad+=r+","+r+"Params,"});var fd=function(e,t){this.id=US++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:cd,this.set=t?t.getSetter:Th},Da=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,uo(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),Ia||Bn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,uo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(fo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(bh(this,n),!s._dp||s.parent||Mg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ui(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===bt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),_g(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+rg(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+rg(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ho(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?_h(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-bt?0:this._rts,this.totalTime(La(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Sh(this),GS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ui(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(zn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_h(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=zS);var i=ln;return ln=n,hd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ln=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,sg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,sg(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ci(this,n),zn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,zn(i)),this._dur||(this._zTime=-bt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-bt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Bt(n)?n:vg,a=function(){var c=i.then;i.then=null,Bt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Ta(this)},r})();Kn(Da.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var an=(function(r){cg(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=zn(n.sortChildren),Ft&&Ui(n.parent||Ft,tr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Sg(tr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Aa(0,arguments,this),this},t.from=function(i,s,o){return Aa(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Aa(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,wa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Gt(i,s,ci(this,o),1),this},t.call=function(i,s,o){return Ui(this,Gt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Gt(i,o,ci(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,wa(o).immediateRender=zn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},t.staggerFromTo=function(i,s,o,a,l,c,h,f){return a.startAt=o,wa(a).immediateRender=zn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:qt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,u,g,_,m,p,y,v,x,T,w,A;if(this!==Ft&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,x=this._start,v=this._ts,p=!v,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=qt(h%m),h===l?(_=this._repeat,d=c):(T=qt(h/m),_=~~T,_&&_===T&&(d=c,_--),d>c&&(d=c)),T=ho(this._tTime,m),!a&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),w&&_&1&&(d=c-d,A=1),_!==T&&!this._lock){var C=w&&T&1,M=C===(w&&_&1);if(_<T&&(C=!C),a=C?0:h%c?c:h,this._lock=1,this.render(a||(A?0:qt(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&$n(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Ng(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=YS(this,qt(a),qt(d)),y&&(h-=d-(d=y._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&!T&&($n(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(u=this._first;u;){if(g=u._next,(u._act||d>=u._start)&&u._ts&&y!==u){if(u.parent!==this)return this.render(i,s,o);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,s,o),d!==this._time||!this._ts&&!p){y=0,g&&(h+=this._zTime=-bt);break}}u=g}else{u=this._last;for(var S=i<0?i:d;u;){if(g=u._prev,(u._act||S<=u._end)&&u._ts&&y!==u){if(u.parent!==this)return this.render(i,s,o);if(u.render(u._ts>0?(S-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(S-u._start)*u._ts,s,o||ln&&hd(u)),d!==this._time||!this._ts&&!p){y=0,g&&(h+=this._zTime=S?-bt:bt);break}}u=g}}if(y&&!s&&(this.pause(),y.render(d>=a?0:-bt)._zTime=d>=a?1:-1,this._ts))return this._start=x,Sh(this),this.render(i,s,o);this._onUpdate&&!s&&$n(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Pr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&($n(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(ir(s)||(s=ci(this,s,i)),!(i instanceof Da)){if(mn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(jt(i))return this.addLabel(i,s);if(Bt(i))i=Gt.delayedCall(0,i);else return this}return this!==i?Ui(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-hi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Gt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return jt(i)?this.removeLabel(i):Bt(i)?this.killTweensOf(i):(i.parent===this&&Mh(this,i),i===this._recent&&(this._recent=this._last),is(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=qt(Bn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ci(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Gt.delayedCall(0,s||Pa,o);return a.data="isPause",this._hasPause=1,Ui(this,a,ci(this,i))},t.removePause=function(i){var s=this._first;for(i=ci(this,i);s;)s._start===i&&s.data==="isPause"&&Pr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ar!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=ui(i),l=this._first,c=ir(s),h;l;)l instanceof Gt?kS(l._targets,a)&&(c?(!Ar||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ci(o,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,u,g=Gt.to(o,Kn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||bt,onStart:function(){if(o.pause(),!u){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&uo(g,m,0,1).render(g._time,!0,!0),u=1}h&&h.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Kn({startAt:{time:ci(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),og(this,ci(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),og(this,ci(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return is(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),is(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=hi,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ui(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;uo(o,o===Ft&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ft._ts&&(_g(Ft,_h(i,Ft)),gg=Bn.frame),Bn.frame>=ng){ng+=kn.autoSleep||120;var s=Ft._first;if((!s||!s._ts)&&kn.autoSleep&&Bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Bn.sleep()}}},e})(Da);Kn(an.prototype,{_lock:0,_hasPause:0,_forcing:0});var cb=function(e,t,n,i,s,o,a){var l=new Cn(this._pt,e,t,0,1,_d,null,s),c=0,h=0,f,d,u,g,_,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=po(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),d=n.match(Of)||[];f=Of.exec(i);)g=f[0],_=i.substring(c,f.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),g!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?as(m,g)-m:parseFloat(g)-m,m:u&&u<4?Math.round:0},c=Of.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(rd.test(i)||p)&&(l.e=0),this._pt=l,l},dd=function(e,t,n,i,s,o,a,l,c,h){Bt(i)&&(i=i(s||0,e,o));var f=e[t],d=n!=="get"?n:Bt(f)?c?e[t.indexOf("set")||!Bt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,u=Bt(f)?c?pb:kg:gd,g;if(jt(i)&&(~i.indexOf("random(")&&(i=po(i)),i.charAt(1)==="="&&(g=as(d,i)+(cn(d)||0),(g||g===0)&&(i=g))),!h||d!==i||jf)return!isNaN(d*i)&&i!==""?(g=new Cn(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?gb:Vg,0,u),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&yh(t,i),cb.call(this,e,t,d,i,u,l||kn.stringFilter,c))},hb=function(e,t,n,i,s){if(Bt(e)&&(e=Ca(e,s,t,n,i)),!Fi(e)||e.style&&e.nodeType||mn(e)||ug(e))return jt(e)?Ca(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Ca(e[a],s,t,n,i);return o},pd=function(e,t,n,i,s,o){var a,l,c,h;if(On[e]&&(a=new On[e]).init(s,a.rawVars?t[e]:hb(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Cn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==ao))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Ar,jf,md=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,d=i.keyframes,u=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:m,v=e._overwrite==="auto"&&!td,x=e.timeline,T,w,A,C,M,S,I,D,k,H,W,G,Z;if(x&&(!d||!s)&&(s="none"),e._ease=rs(s,lo.ease),e._yEase=f?Fg(rs(f===!0?s:f,lo.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(D=m[0]?Rr(m[0]).harness:0,G=D&&i[D.prop],T=gh(i,od),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!u?_.render(-1,!0):_.revert(h&&g?uh:BS),_._lazy=0),o){if(Pr(e._startAt=Gt.set(m,Kn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&zn(l),startAt:null,delay:0,onUpdate:c&&function(){return $n(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln||!a&&!u)&&e._startAt.revert(uh),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(a=!1),A=Kn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&zn(l),immediateRender:a,stagger:0,parent:p},T),G&&(A[D.prop]=G),Pr(e._startAt=Gt.set(m,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln?e._startAt.revert(uh):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&zn(l)||l&&!g,w=0;w<m.length;w++){if(M=m[w],I=M._gsap||ld(m)[w]._gsap,e._ptLookup[w]=H={},Yf[I.id]&&Cr.length&&mh(),W=y===m?w:y.indexOf(M),D&&(k=new D).init(M,G||T,e,W,y)!==!1&&(e._pt=C=new Cn(e._pt,M,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(V){H[V]=C}),k.priority&&(S=1)),!D||G)for(A in T)On[A]&&(k=pd(A,T,e,W,M,y))?k.priority&&(S=1):H[A]=C=dd.call(e,M,A,"get",T[A],W,y,0,i.stringFilter);e._op&&e._op[w]&&e.kill(M,e._op[w]),v&&e._pt&&(Ar=e,Ft.killTweensOf(M,H,e.globalTime(t)),Z=!e.parent,Ar=0),e._pt&&l&&(Yf[I.id]=1)}S&&vd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,d&&t<=0&&x.render(hi,!0,!0)},ub=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,f,d,u;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,u=e._targets.length;u--;){if(h=d[u][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return jf=1,e.vars[t]="+=0",md(e,a),jf=0,l?Ra(t+" not eligible for reset"):1;c.push(h)}for(u=c.length;u--;)f=c[u],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=zt(n)+cn(f.e)),f.b&&(f.b=h.s+cn(f.b))},fb=function(e,t){var n=e[0]?Rr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=co({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},db=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(mn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ca=function(e,t,n,i,s){return Bt(e)?e.call(t,n,i,s):jt(e)&&~e.indexOf("random(")?po(e):e},Bg=ad+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",zg={};An(Bg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return zg[r]=1});var Gt=(function(r){cg(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:wa(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,u=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=i.parent||Ft,v=(mn(n)||ug(n)?ir(n[0]):"length"in i)?[n]:ui(n),x,T,w,A,C,M,S,I;if(a._targets=v.length?ld(v):Ra("GSAP target "+n+" not found. https://gsap.com",!kn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,g||d||hh(c)||hh(h)){if(i=a.vars,x=a.timeline=new an({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:v}),x.kill(),x.parent=x._dp=tr(a),x._start=0,d||hh(c)||hh(h)){if(A=v.length,S=d&&wg(d),Fi(d))for(C in d)~Bg.indexOf(C)&&(I||(I={}),I[C]=d[C]);for(T=0;T<A;T++)w=gh(i,zg),w.stagger=0,p&&(w.yoyoEase=p),I&&co(w,I),M=v[T],w.duration=+Ca(c,tr(a),T,M,v),w.delay=(+Ca(h,tr(a),T,M,v)||0)-a._delay,!d&&A===1&&w.delay&&(a._delay=h=w.delay,a._start+=h,w.delay=0),x.to(M,w,S?S(T,M,v):0),x._ease=ct.none;x.duration()?c=h=0:a.timeline=0}else if(g){wa(Kn(x.vars.defaults,{ease:"none"})),x._ease=rs(g.ease||i.ease||"none");var D=0,k,H,W;if(mn(g))g.forEach(function(G){return x.to(v,G,">")}),x.duration();else{w={};for(C in g)C==="ease"||C==="easeEach"||db(C,g[C],w,g.easeEach);for(C in w)for(k=w[C].sort(function(G,Z){return G.t-Z.t}),D=0,T=0;T<k.length;T++)H=k[T],W={ease:H.e,duration:(H.t-(T?k[T-1].t:0))/100*c},W[C]=H.v,x.to(v,W,D),D+=W.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return u===!0&&!td&&(Ar=tr(a),Ft.killTweensOf(v),Ar=0),Ui(y,tr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===qt(y._time)&&zn(f)&&WS(tr(a))&&y.data!=="nested")&&(a._tTime=-bt,a.render(Math.max(0,-h)||0)),m&&Sg(tr(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-bt&&!h?l:i<bt?0:i,d,u,g,_,m,p,y,v,x;if(!c)qS(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=f,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(d=qt(f%_),f===l?(g=this._repeat,d=c):(m=qt(f/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(x=this._yEase,d=c-d),m=ho(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(v&&this._yEase&&Ng(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(qt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(bg(this,h?i:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(x||this._ease)(d/c),this._from&&(this.ratio=y=1-y),!a&&f&&!s&&!m&&($n(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(y,u.d),u=u._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Zf(this,i,s,o),$n(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&$n(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Zf(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Pr(this,1),!s&&!(h&&!a)&&(f||a||p)&&($n(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Ia||Bn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||md(this,c),h=this._ease(c/this._dur),ub(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(bh(this,0),this.parent||yg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ta(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ln),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ar&&Ar.vars.overwrite!==!0)._first||Ta(this),this.parent&&o!==this.timeline.totalDuration()&&uo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ui(i):a,c=this._ptLookup,h=this._pt,f,d,u,g,_,m,p;if((!s||s==="all")&&HS(a,l))return s==="all"&&(this._pt=0),Ta(this);for(f=this._op=this._op||[],s!=="all"&&(jt(s)&&(_={},An(s,function(y){return _[y]=1}),s=_),s=fb(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(f[p]=s,g=d,u={}):(u=f[p]=f[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Mh(this,m,"_pt"),delete d[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&Ta(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Aa(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Aa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Ft.killTweensOf(i,s,o)},e})(Da);Kn(Gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});An("staggerTo,staggerFrom,staggerFromTo",function(r){Gt[r]=function(){var e=new an,t=Jf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var gd=function(e,t,n){return e[t]=n},kg=function(e,t,n){return e[t](n)},pb=function(e,t,n,i){return e[t](i.fp,n)},mb=function(e,t,n){return e.setAttribute(t,n)},Th=function(e,t){return Bt(e[t])?kg:vh(e[t])&&e.setAttribute?mb:gd},Vg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},gb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},_d=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},xd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},_b=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},xb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Mh(this,t,"_pt"):t.dep||(n=1),t=i;return!n},vb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},vd=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Cn=(function(){function r(t,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Vg,this.d=l||this,this.set=c||gd,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=vb,this.m=n,this.mt=s,this.tween=i},r})();An(ad+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return od[r]=1});Jn.TweenMax=Jn.TweenLite=Gt;Jn.TimelineLite=Jn.TimelineMax=an;Ft=new an({sortChildren:!1,defaults:lo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});kn.stringFilter=ud;var ss=[],dh={},yb=[],lg=0,Mb=0,Hf=function(e){return(dh[e]||yb).map(function(t){return t()})},ed=function(){var e=Date.now(),t=[];e-lg>2&&(Hf("matchMediaInit"),ss.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Li.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Hf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),lg=e,Hf("matchMedia"))},Hg=(function(){function r(t,n){this.selector=n&&Kf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Mb++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Bt(n)&&(s=i,i=n,n=Bt);var o=this,a=function(){var c=It,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Kf(s)),It=o,f=i.apply(o,arguments),Bt(f)&&o._r.push(f),It=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===Bt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=It;It=null,n(this),It=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Gt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof an?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Gt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ss.length;o--;)ss[o].id===this.id&&ss.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),Sb=(function(){function r(t){this.contexts=[],this.scope=t,It&&It.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Fi(n)||(n={matches:n});var o=new Hg(0,s||this.scope),a=o.conditions={},l,c,h;It&&!o.selector&&(o.selector=It.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Li.matchMedia(n[c]),l&&(ss.indexOf(o)<0&&ss.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(ed):l.addEventListener("change",ed)));return h&&i(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),xh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Dg(i)})},timeline:function(e){return new an(e)},getTweensOf:function(e,t){return Ft.getTweensOf(e,t)},getProperty:function(e,t,n,i){jt(e)&&(e=ui(e)[0]);var s=Rr(e||{}).get,o=n?vg:xg;return n==="native"&&(n=""),e&&(t?o((On[t]&&On[t].get||s)(e,t,n,i)):function(a,l,c){return o((On[a]&&On[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ui(e),e.length>1){var i=e.map(function(h){return gn.quickSetter(h,t,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}e=e[0]||{};var o=On[t],a=Rr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var f=new o;ao._pt=0,f.init(e,n?h+n:h,ao,0,[e]),f.render(1,f),ao._pt&&xd(1,ao)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=gn.to(e,Kn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return Ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=rs(e.ease,lo.ease)),ig(lo,e||{})},config:function(e){return ig(kn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!On[a]&&!Jn[a]&&Ra(t+" effect requires "+a+" plugin.")}),Bf[t]=function(a,l,c){return n(ui(a),Kn(l||{},s),c)},o&&(an.prototype[t]=function(a,l,c){return this.add(Bf[t](a,Fi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ct[e]=rs(t)},parseEase:function(e,t){return arguments.length?rs(e,t):ct},getById:function(e){return Ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new an(e),i,s;for(n.smoothChildTiming=zn(e.smoothChildTiming),Ft.remove(n),n._dp=0,n._time=n._tTime=Ft._time,i=Ft._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Gt&&i.vars.onComplete===i._targets[0]))&&Ui(n,i,i._start-i._delay),i=s;return Ui(Ft,n,0),n},context:function(e,t){return e?new Hg(e,t):It},matchMedia:function(e){return new Sb(e)},matchMediaRefresh:function(){return ss.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ed()},addEventListener:function(e,t){var n=dh[e]||(dh[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=dh[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:eb,wrapYoyo:tb,distribute:wg,random:Cg,snap:Ag,normalize:jS,getUnit:cn,clamp:$S,splitColor:Lg,toArray:ui,selector:Kf,mapRange:Pg,pipe:KS,unitize:QS,interpolate:nb,shuffle:Eg},install:pg,effects:Bf,ticker:Bn,updateRoot:an.updateRoot,plugins:On,globalTimeline:Ft,core:{PropTween:Cn,globals:mg,Tween:Gt,Timeline:an,Animation:Da,getCache:Rr,_removeLinkedListItem:Mh,reverting:function(){return ln},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return td=e}}};An("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return xh[r]=Gt[r]});Bn.add(an.updateRoot);ao=xh.to({},{duration:0});var bb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Tb=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=bb(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Gf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(jt(s)&&(l={},An(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Tb(a,s)}}}},gn=xh.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)ln?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Gf("roundProps",Qf),Gf("modifiers"),Gf("snap",Ag))||xh;Gt.version=an.version=gn.version="3.13.0";dg=1;nd()&&fo();var Eb=ct.Power0,wb=ct.Power1,Ab=ct.Power2,Cb=ct.Power3,Rb=ct.Power4,Pb=ct.Linear,Ib=ct.Quad,Db=ct.Cubic,Lb=ct.Quart,Ub=ct.Quint,Fb=ct.Strong,Nb=ct.Elastic,Ob=ct.Back,Bb=ct.SteppedEase,zb=ct.Bounce,kb=ct.Sine,Vb=ct.Expo,Hb=ct.Circ;var Gg,Dr,go,Ed,fs,Gb,Wg,wd,Wb=function(){return typeof window<"u"},sr={},us=180/Math.PI,_o=Math.PI/180,mo=Math.atan2,Xg=1e8,Ad=/([A-Z])/g,Xb=/(left|right|width|margin|padding|x)/i,qb=/[\s,\(]\S/,Ni={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Md=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Yb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Zb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$b=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},jg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},e_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Jb=function(e,t,n){return e.style[t]=n},Kb=function(e,t,n){return e.style.setProperty(t,n)},Qb=function(e,t,n){return e._gsap[t]=n},jb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},eT=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},tT=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Nt="transform",Vn=Nt+"Origin",nT=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in sr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ni[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=rr(i,a)}):this.tfm[e]=o.x?o[e]:rr(i,e),e===Vn&&(this.tfm.zOrigin=o.zOrigin);else return Ni.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Nt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Vn,t,"")),e=Nt}(s||t)&&this.props.push(e,t,s[e])},t_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},iT=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ad,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=wd(),(!s||!s.isStart)&&!n[Nt]&&(t_(n),i.zOrigin&&n[Vn]&&(n[Vn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},n_=function(e,t){var n={target:e,props:[],revert:iT,save:nT};return e._gsap||gn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},i_,Sd=function(e,t){var n=Dr.createElementNS?Dr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Dr.createElement(e);return n&&n.style?n:Dr.createElement(e)},fi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ad,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,xo(t)||t,1)||""},qg="O,Moz,ms,Ms,Webkit".split(","),xo=function(e,t,n){var i=t||fs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(qg[o]+e in s););return o<0?null:(o===3?"ms":o>=0?qg[o]:"")+e},bd=function(){Wb()&&window.document&&(Gg=window,Dr=Gg.document,go=Dr.documentElement,fs=Sd("div")||{style:{}},Gb=Sd("div"),Nt=xo(Nt),Vn=Nt+"Origin",fs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",i_=!!xo("perspective"),wd=gn.core.reverting,Ed=1)},Yg=function(e){var t=e.ownerSVGElement,n=Sd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),go.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),go.removeChild(n),s},Zg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},r_=function(e){var t,n;try{t=e.getBBox()}catch{t=Yg(e),n=1}return t&&(t.width||t.height)||n||(t=Yg(e)),t&&!t.width&&!t.x&&!t.y?{x:+Zg(e,["x","cx","x1"])||0,y:+Zg(e,["y","cy","y1"])||0,width:0,height:0}:t},s_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&r_(e))},ds=function(e,t){if(t){var n=e.style,i;t in sr&&t!==Vn&&(t=Nt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Ad,"-$1").toLowerCase())):n.removeAttribute(t)}},Lr=function(e,t,n,i,s,o){var a=new Cn(e._pt,t,n,0,1,o?e_:jg);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},$g={deg:1,rad:1,turn:1},rT={grid:1,flex:1},Ur=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=fs.style,l=Xb.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",u=i==="%",g,_,m,p;if(i===o||!s||$g[i]||$g[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&s_(e),(u||o==="%")&&(sr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[h],zt(u?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(d?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Dr||!_.appendChild)&&(_=Dr.body),m=_._gsap,m&&u&&m.width&&l&&m.time===Bn.time&&!m.uncache)return zt(s/m.width*f);if(u&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+i,g=e[h],y?e.style[t]=y:ds(e,t)}else(u||o==="%")&&!rT[fi(_,"display")]&&(a.position=fi(e,"position")),_===e&&(a.position="static"),_.appendChild(fs),g=fs[h],_.removeChild(fs),a.position="absolute";return l&&u&&(m=Rr(_),m.time=Bn.time,m.width=_[h]),zt(d?g*s/f:g&&s?f/g*s:0)},rr=function(e,t,n,i){var s;return Ed||bd(),t in Ni&&t!=="transform"&&(t=Ni[t],~t.indexOf(",")&&(t=t.split(",")[0])),sr[t]&&t!=="transform"?(s=Na(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:wh(fi(e,Vn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Eh[t]&&Eh[t](e,t,n)||fi(e,t)||cd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ur(e,t,s,n)+n:s},sT=function(e,t,n,i){if(!n||n==="none"){var s=xo(t,e,1),o=s&&fi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=fi(e,"borderTopColor"))}var a=new Cn(this._pt,e.style,t,0,1,_d),l=0,c=0,h,f,d,u,g,_,m,p,y,v,x,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=fi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=fi(e,t)||i,_?e.style[t]=_:ds(e,t)),h=[n,i],ud(h),n=h[0],i=h[1],d=n.match(os)||[],T=i.match(os)||[],T.length){for(;f=os.exec(i);)m=f[0],y=i.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(u=parseFloat(_)||0,x=_.substr((u+"").length),m.charAt(1)==="="&&(m=as(u,m)+x),p=parseFloat(m),v=m.substr((p+"").length),l=os.lastIndex-v.length,v||(v=v||kn.units[t]||x,l===i.length&&(i+=v,a.e+=v)),x!==v&&(u=Ur(e,t,_,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:u,c:p-u,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?e_:jg;return rd.test(i)&&(a.e=0),this._pt=a,a},Jg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},oT=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Jg[n]||n,t[1]=Jg[i]||i,t.join(" ")},aT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],sr[a]&&(l=1,a=a==="transformOrigin"?Vn:Nt),ds(n,a);l&&(ds(n,Nt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Na(n,1),o.uncache=1,t_(i)))}},Eh={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Cn(e._pt,t,n,0,0,aT);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Fa=[1,0,0,1,0,0],o_={},a_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Kg=function(e){var t=fi(e,Nt);return a_(t)?Fa:t.substr(7).match(id).map(zt)},Cd=function(e,t){var n=e._gsap||Rr(e),i=e.style,s=Kg(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Fa:s):(s===Fa&&!e.offsetParent&&e!==go&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,go.appendChild(e)),s=Kg(e),l?i.display=l:ds(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):go.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Td=function(e,t,n,i,s,o){var a=e._gsap,l=s||Cd(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,u=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],v=t.split(" "),x=parseFloat(v[0])||0,T=parseFloat(v[1])||0,w,A,C,M;n?l!==Fa&&(A=u*m-g*_)&&(C=x*(m/A)+T*(-_/A)+(_*y-m*p)/A,M=x*(-g/A)+T*(u/A)-(u*y-g*p)/A,x=C,T=M):(w=r_(e),x=w.x+(~v[0].indexOf("%")?x/100*w.width:x),T=w.y+(~(v[1]||v[0]).indexOf("%")?T/100*w.height:T)),i||i!==!1&&a.smooth?(p=x-c,y=T-h,a.xOffset=f+(p*u+y*_)-p,a.yOffset=d+(p*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=T,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Vn]="0px 0px",o&&(Lr(o,a,"xOrigin",c,x),Lr(o,a,"yOrigin",h,T),Lr(o,a,"xOffset",f,a.xOffset),Lr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+T)},Na=function(e,t){var n=e._gsap||new fd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=fi(e,Vn)||"0",h,f,d,u,g,_,m,p,y,v,x,T,w,A,C,M,S,I,D,k,H,W,G,Z,V,ne,L,ae,he,Pe,Le,ze;return h=f=d=_=m=p=y=v=x=0,u=g=1,n.svg=!!(e.getCTM&&s_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Nt]!=="none"?l[Nt]:"")),i.scale=i.rotate=i.translate="none"),A=Cd(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),Td(e,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,A)),T=n.xOrigin||0,w=n.yOrigin||0,A!==Fa&&(I=A[0],D=A[1],k=A[2],H=A[3],h=W=A[4],f=G=A[5],A.length===6?(u=Math.sqrt(I*I+D*D),g=Math.sqrt(H*H+k*k),_=I||D?mo(D,I)*us:0,y=k||H?mo(k,H)*us+_:0,y&&(g*=Math.abs(Math.cos(y*_o))),n.svg&&(h-=T-(T*I+w*k),f-=w-(T*D+w*H))):(ze=A[6],Pe=A[7],L=A[8],ae=A[9],he=A[10],Le=A[11],h=A[12],f=A[13],d=A[14],C=mo(ze,he),m=C*us,C&&(M=Math.cos(-C),S=Math.sin(-C),Z=W*M+L*S,V=G*M+ae*S,ne=ze*M+he*S,L=W*-S+L*M,ae=G*-S+ae*M,he=ze*-S+he*M,Le=Pe*-S+Le*M,W=Z,G=V,ze=ne),C=mo(-k,he),p=C*us,C&&(M=Math.cos(-C),S=Math.sin(-C),Z=I*M-L*S,V=D*M-ae*S,ne=k*M-he*S,Le=H*S+Le*M,I=Z,D=V,k=ne),C=mo(D,I),_=C*us,C&&(M=Math.cos(C),S=Math.sin(C),Z=I*M+D*S,V=W*M+G*S,D=D*M-I*S,G=G*M-W*S,I=Z,W=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),u=zt(Math.sqrt(I*I+D*D+k*k)),g=zt(Math.sqrt(G*G+ze*ze)),C=mo(W,G),y=Math.abs(C)>2e-4?C*us:0,x=Le?1/(Le<0?-Le:Le):0),n.svg&&(Z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!a_(fi(e,Nt)),Z&&e.setAttribute("transform",Z))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(u*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=zt(u),n.scaleY=zt(g),n.rotation=zt(_)+a,n.rotationX=zt(m)+a,n.rotationY=zt(p)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Vn]=wh(c)),n.xOffset=n.yOffset=0,n.force3D=kn.force3D,n.renderTransform=n.svg?cT:i_?l_:lT,n.uncache=0,n},wh=function(e){return(e=e.split(" "))[0]+" "+e[1]},yd=function(e,t,n){var i=cn(t);return zt(parseFloat(t)+parseFloat(Ur(e,"x",n+"px",i)))+i},lT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,l_(e,t)},cs="0deg",Ua="0px",hs=") ",l_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,d=n.skewX,u=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,v=n.zOrigin,x="",T=p==="auto"&&e&&e!==1||p===!0;if(v&&(f!==cs||h!==cs)){var w=parseFloat(h)*_o,A=Math.sin(w),C=Math.cos(w),M;w=parseFloat(f)*_o,M=Math.cos(w),o=yd(y,o,A*M*-v),a=yd(y,a,-Math.sin(w)*-v),l=yd(y,l,C*M*-v+v)}m!==Ua&&(x+="perspective("+m+hs),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(T||o!==Ua||a!==Ua||l!==Ua)&&(x+=l!==Ua||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+hs),c!==cs&&(x+="rotate("+c+hs),h!==cs&&(x+="rotateY("+h+hs),f!==cs&&(x+="rotateX("+f+hs),(d!==cs||u!==cs)&&(x+="skew("+d+", "+u+hs),(g!==1||_!==1)&&(x+="scale("+g+", "+_+hs),y.style[Nt]=x||"translate(0, 0)"},cT=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,d=n.scaleY,u=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,v=parseFloat(o),x=parseFloat(a),T,w,A,C,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=_o,c*=_o,T=Math.cos(l)*f,w=Math.sin(l)*f,A=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(h*=_o,M=Math.tan(c-h),M=Math.sqrt(1+M*M),A*=M,C*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),T*=M,w*=M)),T=zt(T),w=zt(w),A=zt(A),C=zt(C)):(T=f,C=d,w=A=0),(v&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(v=Ur(u,"x",o,"px"),x=Ur(u,"y",a,"px")),(g||_||m||p)&&(v=zt(v+g-(g*T+_*A)+m),x=zt(x+_-(g*w+_*C)+p)),(i||s)&&(M=u.getBBox(),v=zt(v+i/100*M.width),x=zt(x+s/100*M.height)),M="matrix("+T+","+w+","+A+","+C+","+v+","+x+")",u.setAttribute("transform",M),y&&(u.style[Nt]=M)},hT=function(e,t,n,i,s){var o=360,a=jt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?us:1),c=l-i,h=i+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Xg)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Xg)%o-~~(c/o)*o)),e._pt=d=new Cn(e._pt,t,n,i,c,Yb),d.e=h,d.u="deg",e._props.push(n),d},Qg=function(e,t){for(var n in t)e[n]=t[n];return e},uT=function(e,t,n){var i=Qg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,d,u,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Nt]=t,a=Na(n,1),ds(n,Nt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Nt],o[Nt]=t,a=Na(n,1),o[Nt]=c);for(l in sr)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(u=cn(c),g=cn(h),f=u!==g?Ur(n,l,c,g):parseFloat(c),d=parseFloat(h),e._pt=new Cn(e._pt,a,l,f,d-f,Md),e._pt.u=g||0,e._props.push(l));Qg(a,i)};An("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Eh[e>1?"border"+r:r]=function(a,l,c,h,f){var d,u;if(arguments.length<4)return d=o.map(function(g){return rr(a,g,c)}),u=d.join(" "),u.split(d[0]).length===5?d[0]:u;d=(h+"").split(" "),u={},o.forEach(function(g,_){return u[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,u,f)}});var Rd={name:"css",register:bd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,f,d,u,g,_,m,p,y,v,x,T,w,A,C;Ed||bd(),this.styles=this.styles||n_(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(On[_]&&pd(_,t,n,i,e,s)))){if(u=typeof h,g=Eh[_],u==="function"&&(h=h.call(n,i,e,s),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=po(h)),g)g(this,e,_,h,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",nr.lastIndex=0,nr.test(c)||(m=cn(c),p=cn(h)),p?m!==p&&(c=Ur(e,_,c,p)+p):m&&(h+=m),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],jt(c)&&~c.indexOf("random(")&&(c=po(c)),cn(c+"")||c==="auto"||(c+=kn.units[_]||cn(rr(e,_))||""),(c+"").charAt(1)==="="&&(c=rr(e,_))):c=rr(e,_),d=parseFloat(c),y=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),f=parseFloat(h),_ in Ni&&(_==="autoAlpha"&&(d===1&&rr(e,"visibility")==="hidden"&&f&&(d=0),C.push("visibility",0,a.visibility),Lr(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Ni[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in sr,v){if(this.styles.save(_),u==="string"&&h.substring(0,6)==="var(--"&&(h=fi(e,h.substring(4,h.indexOf(")"))),f=parseFloat(h)),x||(T=e._gsap,T.renderTransform&&!t.parseTransform||Na(e,t.parseTransform),w=t.smoothOrigin!==!1&&T.smooth,x=this._pt=new Cn(this._pt,a,Nt,0,1,T.renderTransform,T,0,-1),x.dep=1),_==="scale")this._pt=new Cn(this._pt,T,"scaleY",T.scaleY,(y?as(T.scaleY,y+f):f)-T.scaleY||0,Md),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Vn,0,a[Vn]),h=oT(h),T.svg?Td(e,h,0,w,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==T.zOrigin&&Lr(this,T,"zOrigin",T.zOrigin,p),Lr(this,a,_,wh(c),wh(h)));continue}else if(_==="svgOrigin"){Td(e,h,1,w,0,this);continue}else if(_ in o_){hT(this,T,_,d,y?as(d,y+h):h);continue}else if(_==="smoothOrigin"){Lr(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){uT(this,h,e);continue}}else _ in a||(_=xo(_)||_);if(v||(f||f===0)&&(d||d===0)&&!qb.test(h)&&_ in a)m=(c+"").substr((d+"").length),f||(f=0),p=cn(h)||(_ in kn.units?kn.units[_]:m),m!==p&&(d=Ur(e,_,c,p)),this._pt=new Cn(this._pt,v?T:a,_,d,(y?as(d,y+f):f)-d,!v&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?$b:Md),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Zb);else if(_ in a)sT.call(this,e,_,c,y?y+h:h);else if(_ in e)this.add(e,_,c||e[_],y?y+h:h,i,s);else if(_!=="parseTransform"){yh(_,h);continue}v||(_ in a?C.push(_,0,a[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),o.push(_)}}A&&vd(this)},render:function(e,t){if(t.tween._time||!wd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:rr,aliases:Ni,getSetter:function(e,t,n){var i=Ni[t];return i&&i.indexOf(",")<0&&(t=i),t in sr&&t!==Vn&&(e._gsap.x||rr(e,"x"))?n&&Wg===n?t==="scale"?jb:Qb:(Wg=n||{})&&(t==="scale"?eT:tT):e.style&&!vh(e.style[t])?Jb:~t.indexOf("-")?Kb:Th(e,t)},core:{_removeProperty:ds,_getMatrix:Cd}};gn.utils.checkPrefix=xo;gn.core.getStyleSaver=n_;(function(r,e,t,n){var i=An(r+","+e+","+t,function(s){sr[s]=1});An(e,function(s){kn.units[s]="deg",o_[s]=1}),Ni[i[13]]=r+","+e,An(n,function(s){var o=s.split(":");Ni[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");An("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){kn.units[r]="px"});gn.registerPlugin(Rd);var Qn=gn.registerPlugin(Rd)||gn,Ow=Qn.core.Tween;function c_(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function fT(r,e,t){return e&&c_(r.prototype,e),t&&c_(r,t),r}var hn,Rh,dT,jn,Fr,Nr,yo,u_,ps,Ba,f_,or,Ti,d_,p_=function(){return hn||typeof window<"u"&&(hn=window.gsap)&&hn.registerPlugin&&hn},m_=1,vo=[],nt=[],Ei=[],za=Date.now,Pd=function(e,t){return t},pT=function(){var e=Ba.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,nt),i.push.apply(i,Ei),nt=n,Ei=i,Pd=function(o,a){return t[o](a)}},lr=function(e,t){return~Ei.indexOf(e)&&Ei[Ei.indexOf(e)+1][t]},ka=function(e){return!!~f_.indexOf(e)},Pn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Rn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Ah="scrollLeft",Ch="scrollTop",Id=function(){return or&&or.isPressed||nt.cache++},Ph=function(e,t){var n=function i(s){if(s||s===0){m_&&(jn.history.scrollRestoration="manual");var o=or&&or.isPressed;s=i.v=Math.round(s)||(or&&or.iOS?1:0),e(s),i.cacheID=nt.cache,o&&Pd("ss",s)}else(t||nt.cache!==i.cacheID||Pd("ref"))&&(i.cacheID=nt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},_n={s:Ah,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ph(function(r){return arguments.length?jn.scrollTo(r,Yt.sc()):jn.pageXOffset||Fr[Ah]||Nr[Ah]||yo[Ah]||0})},Yt={s:Ch,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:_n,sc:Ph(function(r){return arguments.length?jn.scrollTo(_n.sc(),r):jn.pageYOffset||Fr[Ch]||Nr[Ch]||yo[Ch]||0})},In=function(e,t){return(t&&t._ctx&&t._ctx.selector||hn.utils.toArray)(e)[0]||(typeof e=="string"&&hn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},mT=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ar=function(e,t){var n=t.s,i=t.sc;ka(e)&&(e=Fr.scrollingElement||Nr);var s=nt.indexOf(e),o=i===Yt.sc?1:2;!~s&&(s=nt.push(e)-1),nt[s+o]||Pn(e,"scroll",Id);var a=nt[s+o],l=a||(nt[s+o]=Ph(lr(e,n),!0)||(ka(e)?i:Ph(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=hn.getProperty(e,"scrollBehavior")==="smooth"),l},Ih=function(e,t,n){var i=e,s=e,o=za(),a=o,l=t||50,c=Math.max(500,l*3),h=function(g,_){var m=za();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,m=s,p=za();return(g||g===0)&&g!==i&&h(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:h,reset:f,getVelocity:d}},Oa=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},h_=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},g_=function(){Ba=hn.core.globals().ScrollTrigger,Ba&&Ba.core&&pT()},__=function(e){return hn=e||p_(),!Rh&&hn&&typeof document<"u"&&document.body&&(jn=window,Fr=document,Nr=Fr.documentElement,yo=Fr.body,f_=[jn,Fr,Nr,yo],dT=hn.utils.clamp,d_=hn.core.context||function(){},ps="onpointerenter"in yo?"pointer":"mouse",u_=kt.isTouch=jn.matchMedia&&jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ti=kt.eventTypes=("ontouchstart"in Nr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Nr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return m_=0},500),g_(),Rh=1),Rh};_n.op=Yt;nt.cache=0;var kt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Rh||__(hn)||console.warn("Please gsap.registerPlugin(Observer)"),Ba||g_();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,d=n.onStopDelay,u=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,v=n.onPress,x=n.onRelease,T=n.onRight,w=n.onLeft,A=n.onUp,C=n.onDown,M=n.onChangeX,S=n.onChangeY,I=n.onChange,D=n.onToggleX,k=n.onToggleY,H=n.onHover,W=n.onHoverEnd,G=n.onMove,Z=n.ignoreCheck,V=n.isNormalizer,ne=n.onGestureStart,L=n.onGestureEnd,ae=n.onWheel,he=n.onEnable,Pe=n.onDisable,Le=n.onClick,ze=n.scrollSpeed,$=n.capture,K=n.allowClicks,fe=n.lockAxis,Ce=n.onLockAxis;this.target=a=In(a)||Nr,this.vars=n,u&&(u=hn.utils.toArray(u)),i=i||1e-9,s=s||0,g=g||1,ze=ze||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(jn.getComputedStyle(yo).lineHeight)||22);var Ee,Ge,dt,P,qe,Fe,Re,N=this,rt=0,ve=0,We=n.passive||!h&&n.passive!==!1,Ke=ar(a,_n),pt=ar(a,Yt),R=Ke(),b=pt(),z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ti[0]==="pointerdown",J=ka(a),Q=a.ownerDocument||Fr,Y=[0,0,0],ye=[0,0,0],se=0,we=function(){return se=za()},de=function(Ie,$e){return(N.event=Ie)&&u&&mT(Ie.target,u)||$e&&z&&Ie.pointerType!=="touch"||Z&&Z(Ie,$e)},re=function(){N._vx.reset(),N._vy.reset(),Ge.pause(),f&&f(N)},ue=function(){var Ie=N.deltaX=h_(Y),$e=N.deltaY=h_(ye),pe=Math.abs(Ie)>=i,Ve=Math.abs($e)>=i;I&&(pe||Ve)&&I(N,Ie,$e,Y,ye),pe&&(T&&N.deltaX>0&&T(N),w&&N.deltaX<0&&w(N),M&&M(N),D&&N.deltaX<0!=rt<0&&D(N),rt=N.deltaX,Y[0]=Y[1]=Y[2]=0),Ve&&(C&&N.deltaY>0&&C(N),A&&N.deltaY<0&&A(N),S&&S(N),k&&N.deltaY<0!=ve<0&&k(N),ve=N.deltaY,ye[0]=ye[1]=ye[2]=0),(P||dt)&&(G&&G(N),dt&&(m&&dt===1&&m(N),y&&y(N),dt=0),P=!1),Fe&&!(Fe=!1)&&Ce&&Ce(N),qe&&(ae(N),qe=!1),Ee=0},Oe=function(Ie,$e,pe){Y[pe]+=Ie,ye[pe]+=$e,N._vx.update(Ie),N._vy.update($e),c?Ee||(Ee=requestAnimationFrame(ue)):ue()},Ae=function(Ie,$e){fe&&!Re&&(N.axis=Re=Math.abs(Ie)>Math.abs($e)?"x":"y",Fe=!0),Re!=="y"&&(Y[2]+=Ie,N._vx.update(Ie,!0)),Re!=="x"&&(ye[2]+=$e,N._vy.update($e,!0)),c?Ee||(Ee=requestAnimationFrame(ue)):ue()},ce=function(Ie){if(!de(Ie,1)){Ie=Oa(Ie,h);var $e=Ie.clientX,pe=Ie.clientY,Ve=$e-N.x,Ne=pe-N.y,Ye=N.isDragging;N.x=$e,N.y=pe,(Ye||(Ve||Ne)&&(Math.abs(N.startX-$e)>=s||Math.abs(N.startY-pe)>=s))&&(dt=Ye?2:1,Ye||(N.isDragging=!0),Ae(Ve,Ne))}},Xe=N.onPress=function(_e){de(_e,1)||_e&&_e.button||(N.axis=Re=null,Ge.pause(),N.isPressed=!0,_e=Oa(_e),rt=ve=0,N.startX=N.x=_e.clientX,N.startY=N.y=_e.clientY,N._vx.reset(),N._vy.reset(),Pn(V?a:Q,Ti[1],ce,We,!0),N.deltaX=N.deltaY=0,v&&v(N))},U=N.onRelease=function(_e){if(!de(_e,1)){Rn(V?a:Q,Ti[1],ce,!0);var Ie=!isNaN(N.y-N.startY),$e=N.isDragging,pe=$e&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),Ve=Oa(_e);!pe&&Ie&&(N._vx.reset(),N._vy.reset(),h&&K&&hn.delayedCall(.08,function(){if(za()-se>300&&!_e.defaultPrevented){if(_e.target.click)_e.target.click();else if(Q.createEvent){var Ne=Q.createEvent("MouseEvents");Ne.initMouseEvent("click",!0,!0,jn,1,Ve.screenX,Ve.screenY,Ve.clientX,Ve.clientY,!1,!1,!1,!1,0,null),_e.target.dispatchEvent(Ne)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,f&&$e&&!V&&Ge.restart(!0),dt&&ue(),p&&$e&&p(N),x&&x(N,pe)}},ie=function(Ie){return Ie.touches&&Ie.touches.length>1&&(N.isGesturing=!0)&&ne(Ie,N.isDragging)},oe=function(){return(N.isGesturing=!1)||L(N)},me=function(Ie){if(!de(Ie)){var $e=Ke(),pe=pt();Oe(($e-R)*ze,(pe-b)*ze,1),R=$e,b=pe,f&&Ge.restart(!0)}},te=function(Ie){if(!de(Ie)){Ie=Oa(Ie,h),ae&&(qe=!0);var $e=(Ie.deltaMode===1?l:Ie.deltaMode===2?jn.innerHeight:1)*g;Oe(Ie.deltaX*$e,Ie.deltaY*$e,0),f&&!V&&Ge.restart(!0)}},j=function(Ie){if(!de(Ie)){var $e=Ie.clientX,pe=Ie.clientY,Ve=$e-N.x,Ne=pe-N.y;N.x=$e,N.y=pe,P=!0,f&&Ge.restart(!0),(Ve||Ne)&&Ae(Ve,Ne)}},Se=function(Ie){N.event=Ie,H(N)},ke=function(Ie){N.event=Ie,W(N)},ut=function(Ie){return de(Ie)||Oa(Ie,h)&&Le(N)};Ge=N._dc=hn.delayedCall(d||.25,re).pause(),N.deltaX=N.deltaY=0,N._vx=Ih(0,50,!0),N._vy=Ih(0,50,!0),N.scrollX=Ke,N.scrollY=pt,N.isDragging=N.isGesturing=N.isPressed=!1,d_(this),N.enable=function(_e){return N.isEnabled||(Pn(J?Q:a,"scroll",Id),o.indexOf("scroll")>=0&&Pn(J?Q:a,"scroll",me,We,$),o.indexOf("wheel")>=0&&Pn(a,"wheel",te,We,$),(o.indexOf("touch")>=0&&u_||o.indexOf("pointer")>=0)&&(Pn(a,Ti[0],Xe,We,$),Pn(Q,Ti[2],U),Pn(Q,Ti[3],U),K&&Pn(a,"click",we,!0,!0),Le&&Pn(a,"click",ut),ne&&Pn(Q,"gesturestart",ie),L&&Pn(Q,"gestureend",oe),H&&Pn(a,ps+"enter",Se),W&&Pn(a,ps+"leave",ke),G&&Pn(a,ps+"move",j)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=P=dt=!1,N._vx.reset(),N._vy.reset(),R=Ke(),b=pt(),_e&&_e.type&&Xe(_e),he&&he(N)),N},N.disable=function(){N.isEnabled&&(vo.filter(function(_e){return _e!==N&&ka(_e.target)}).length||Rn(J?Q:a,"scroll",Id),N.isPressed&&(N._vx.reset(),N._vy.reset(),Rn(V?a:Q,Ti[1],ce,!0)),Rn(J?Q:a,"scroll",me,$),Rn(a,"wheel",te,$),Rn(a,Ti[0],Xe,$),Rn(Q,Ti[2],U),Rn(Q,Ti[3],U),Rn(a,"click",we,!0),Rn(a,"click",ut),Rn(Q,"gesturestart",ie),Rn(Q,"gestureend",oe),Rn(a,ps+"enter",Se),Rn(a,ps+"leave",ke),Rn(a,ps+"move",j),N.isEnabled=N.isPressed=N.isDragging=!1,Pe&&Pe(N))},N.kill=N.revert=function(){N.disable();var _e=vo.indexOf(N);_e>=0&&vo.splice(_e,1),or===N&&(or=0)},vo.push(N),V&&ka(a)&&(or=N),N.enable(_)},fT(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();kt.version="3.13.0";kt.create=function(r){return new kt(r)};kt.register=__;kt.getAll=function(){return vo.slice()};kt.getById=function(r){return vo.filter(function(e){return e.vars.id===r})[0]};p_()&&hn.registerPlugin(kt);var Te,bo,st,Et,ni,mt,qd,Yh,ja,Ya,Ha,Dh,xn,Kh,zd,Ln,x_,v_,To,F_,Dd,N_,Dn,kd,O_,B_,Or,Vd,Yd,Eo,Zd,Zh,Hd,Ld,Lh=1,vn=Date.now,Ud=vn(),mi=0,Ga=0,y_=function(e,t,n){var i=ti(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},M_=function(e,t){return t&&(!ti(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},gT=function r(){return Ga&&requestAnimationFrame(r)},S_=function(){return Kh=1},b_=function(){return Kh=0},Oi=function(e){return e},Wa=function(e){return Math.round(e*1e5)/1e5||0},z_=function(){return typeof window<"u"},k_=function(){return Te||z_()&&(Te=window.gsap)&&Te.registerPlugin&&Te},ys=function(e){return!!~qd.indexOf(e)},V_=function(e){return(e==="Height"?Zd:st["inner"+e])||ni["client"+e]||mt["client"+e]},H_=function(e){return lr(e,"getBoundingClientRect")||(ys(e)?function(){return qh.width=st.innerWidth,qh.height=Zd,qh}:function(){return cr(e)})},_T=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=lr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?V_(s):e["client"+s])||0}},xT=function(e,t){return!t||~Ei.indexOf(e)?H_(e):function(){return qh}},Bi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=lr(e,n))?o()-H_(e)()[s]:ys(e)?(ni[n]||mt[n])-V_(i):e[n]-e["offset"+i])},Uh=function(e,t){for(var n=0;n<To.length;n+=3)(!t||~t.indexOf(To[n+1]))&&e(To[n],To[n+1],To[n+2])},ti=function(e){return typeof e=="string"},yn=function(e){return typeof e=="function"},Xa=function(e){return typeof e=="number"},ms=function(e){return typeof e=="object"},Va=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Fd=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Mo=Math.abs,G_="left",W_="top",$d="right",Jd="bottom",_s="width",xs="height",Za="Right",$a="Left",Ja="Top",Ka="Bottom",Zt="padding",di="margin",Ao="Width",Kd="Height",en="px",pi=function(e){return st.getComputedStyle(e)},vT=function(e){var t=pi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},T_=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},cr=function(e,t){var n=t&&pi(e)[zd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Te.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},$h=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},X_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},yT=function(e){return function(t){return Te.utils.snap(X_(e),t)}},Qd=function(e){var t=Te.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},MT=function(e){return function(t,n){return Qd(X_(e))(t,n.direction)}},Fh=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},sn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},rn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Nh=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},E_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Oh={toggleActions:"play",anticipatePin:0},Jh={top:0,left:0,center:.5,bottom:1,right:1},Hh=function(e,t){if(ti(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Jh?Jh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Bh=function(e,t,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,f=s.fontSize,d=s.indent,u=s.fontWeight,g=Et.createElement("div"),_=ys(n)||lr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?mt:n,y=e.indexOf("start")!==-1,v=y?c:h,x="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(i===Yt?$d:Jd)+":"+(o+parseFloat(d))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=x,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Gh(g,0,i,y),g},Gh=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ao]=1,s["border"+a+Ao]=0,s[n.p]=t+"px",Te.set(e,s)},it=[],Gd={},el,w_=function(){return vn()-mi>34&&(el||(el=requestAnimationFrame(hr)))},So=function(){(!Dn||!Dn.isPressed||Dn.startX>mt.clientWidth)&&(nt.cache++,Dn?el||(el=requestAnimationFrame(hr)):hr(),mi||Ss("scrollStart"),mi=vn())},Nd=function(){B_=st.innerWidth,O_=st.innerHeight},qa=function(e){nt.cache++,(e===!0||!xn&&!N_&&!Et.fullscreenElement&&!Et.webkitFullscreenElement&&(!kd||B_!==st.innerWidth||Math.abs(st.innerHeight-O_)>st.innerHeight*.25))&&Yh.restart(!0)},Ms={},ST=[],q_=function r(){return rn(je,"scrollEnd",r)||gs(!0)},Ss=function(e){return Ms[e]&&Ms[e].map(function(t){return t()})||ST},ei=[],Y_=function(e){for(var t=0;t<ei.length;t+=5)(!e||ei[t+4]&&ei[t+4].query===e)&&(ei[t].style.cssText=ei[t+1],ei[t].getBBox&&ei[t].setAttribute("transform",ei[t+2]||""),ei[t+3].uncache=1)},jd=function(e,t){var n;for(Ln=0;Ln<it.length;Ln++)n=it[Ln],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Zh=!0,t&&Y_(t),t||Ss("revert")},Z_=function(e,t){nt.cache++,(t||!Un)&&nt.forEach(function(n){return yn(n)&&n.cacheID++&&(n.rec=0)}),ti(e)&&(st.history.scrollRestoration=Yd=e)},Un,vs=0,A_,bT=function(){if(A_!==vs){var e=A_=vs;requestAnimationFrame(function(){return e===vs&&gs(!0)})}},$_=function(){mt.appendChild(Eo),Zd=!Dn&&Eo.offsetHeight||st.innerHeight,mt.removeChild(Eo)},C_=function(e){return ja(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},gs=function(e,t){if(ni=Et.documentElement,mt=Et.body,qd=[st,Et,ni,mt],mi&&!e&&!Zh){sn(je,"scrollEnd",q_);return}$_(),Un=je.isRefreshing=!0,nt.forEach(function(i){return yn(i)&&++i.cacheID&&(i.rec=i())});var n=Ss("refreshInit");F_&&je.sort(),t||jd(),nt.forEach(function(i){yn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),it.slice(0).forEach(function(i){return i.refresh()}),Zh=!1,it.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Hd=1,C_(!0),it.forEach(function(i){var s=Bi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),C_(!1),Hd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),nt.forEach(function(i){yn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Z_(Yd,1),Yh.pause(),vs++,Un=2,hr(2),it.forEach(function(i){return yn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Un=je.isRefreshing=!1,Ss("refresh")},Wd=0,Wh=1,Qa,hr=function(e){if(e===2||!Un&&!Zh){je.isUpdating=!0,Qa&&Qa.update(0);var t=it.length,n=vn(),i=n-Ud>=50,s=t&&it[0].scroll();if(Wh=Wd>s?-1:1,Un||(Wd=s),i&&(mi&&!Kh&&n-mi>200&&(mi=0,Ss("scrollEnd")),Ha=Ud,Ud=n),Wh<0){for(Ln=t;Ln-- >0;)it[Ln]&&it[Ln].update(0,i);Wh=1}else for(Ln=0;Ln<t;Ln++)it[Ln]&&it[Ln].update(0,i);je.isUpdating=!1}el=0},Xd=[G_,W_,Jd,$d,di+Ka,di+Za,di+Ja,di+$a,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Xh=Xd.concat([_s,xs,"boxSizing","max"+Ao,"max"+Kd,"position",di,Zt,Zt+Ja,Zt+Za,Zt+Ka,Zt+$a]),TT=function(e,t,n){wo(n);var i=e._gsap;if(i.spacerIsNative)wo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Od=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Xd.length,o=t.style,a=e.style,l;s--;)l=Xd[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Jd]=a[$d]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[_s]=$h(e,_n)+en,o[xs]=$h(e,Yt)+en,o[Zt]=a[di]=a[W_]=a[G_]="0",wo(i),a[_s]=a["max"+Ao]=n[_s],a[xs]=a["max"+Kd]=n[xs],a[Zt]=n[Zt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},ET=/([A-Z])/g,wo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Te.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(ET,"-$1").toLowerCase())}},zh=function(e){for(var t=Xh.length,n=e.style,i=[],s=0;s<t;s++)i.push(Xh[s],n[Xh[s]]);return i.t=e,i},wT=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},qh={left:0,top:0},R_=function(e,t,n,i,s,o,a,l,c,h,f,d,u,g){yn(e)&&(e=e(l)),ti(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Hh("0"+e.substr(3),n):0));var _=u?u.time():0,m,p,y;if(u&&u.seek(0),isNaN(e)||(e=+e),Xa(e))u&&(e=Te.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,d,e)),a&&Gh(a,n,i,!0);else{yn(t)&&(t=t(l));var v=(e||"0").split(" "),x,T,w,A;y=In(t,l)||mt,x=cr(y)||{},(!x||!x.left&&!x.top)&&pi(y).display==="none"&&(A=y.style.display,y.style.display="block",x=cr(y),A?y.style.display=A:y.style.removeProperty("display")),T=Hh(v[0],x[i.d]),w=Hh(v[1]||"0",n),e=x[i.p]-c[i.p]-h+T+s-w,a&&Gh(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var C=e+n,M=o._isStart;m="scroll"+i.d2,Gh(o,C,i,M&&C>20||!M&&(f?Math.max(mt[m],ni[m]):o.parentNode[m])<=C+1),f&&(c=cr(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+en))}return u&&y&&(m=cr(y),u.seek(d),p=cr(y),u._caScrollDist=m[i.p]-p[i.p],e=e/u._caScrollDist*d),u&&u.seek(_),u?e:Math.round(e)},AT=/(webkit|moz|length|cssText|inset)/i,P_=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===mt){e._stOrig=s.cssText,a=pi(e);for(o in a)!+o&&!AT.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Te.core.getCache(e).uncache=1,t.appendChild(e)}},J_=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},kh=function(e,t,n){var i={};i[t.p]="+="+n,Te.set(e,i)},I_=function(e,t){var n=ar(e,t),i="_scroll"+t.p2,s=function o(a,l,c,h,f){var d=o.tween,u=l.onComplete,g={};c=c||n();var _=J_(n,c,function(){d.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){nt.cache++,o.tween&&hr()},l.onComplete=function(){o.tween=0,u&&u.call(d)},d=o.tween=Te.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},sn(e,"wheel",n.wheelHandler),je.isTouch&&sn(e,"touchmove",n.wheelHandler),s},je=(function(){function r(t,n){bo||r.register(Te)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Vd(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ga){this.update=this.refresh=this.kill=Oi;return}n=T_(ti(n)||Xa(n)||n.nodeType?{trigger:n}:n,Oh);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,d=s.trigger,u=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,v=s.once,x=s.snap,T=s.pinReparent,w=s.pinSpacer,A=s.containerAnimation,C=s.fastScrollEnd,M=s.preventOverlaps,S=n.horizontal||n.containerAnimation&&n.horizontal!==!1?_n:Yt,I=!f&&f!==0,D=In(n.scroller||st),k=Te.core.getCache(D),H=ys(D),W=("pinType"in n?n.pinType:lr(D,"pinType")||H&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Z=I&&n.toggleActions.split(" "),V="markers"in n?n.markers:Oh.markers,ne=H?0:parseFloat(pi(D)["border"+S.p2+Ao])||0,L=this,ae=n.onRefreshInit&&function(){return n.onRefreshInit(L)},he=_T(D,H,S),Pe=xT(D,H),Le=0,ze=0,$=0,K=ar(D,S),fe,Ce,Ee,Ge,dt,P,qe,Fe,Re,N,rt,ve,We,Ke,pt,R,b,z,J,Q,Y,ye,se,we,de,re,ue,Oe,Ae,ce,Xe,U,ie,oe,me,te,j,Se,ke;if(L._startClamp=L._endClamp=!1,L._dir=S,m*=45,L.scroller=D,L.scroll=A?A.time.bind(A):K,Ge=K(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(F_=1,n.refreshPriority===-9999&&(Qa=L)),k.tweenScroll=k.tweenScroll||{top:I_(D,Yt),left:I_(D,_n)},L.tweenTo=fe=k.tweenScroll[S.p],L.scrubDuration=function(pe){ie=Xa(pe)&&pe,ie?U?U.duration(pe):U=Te.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ie,paused:!0,onComplete:function(){return p&&p(L)}}):(U&&U.progress(1).kill(),U=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(f),ce=0,l||(l=i.vars.id)),x&&((!ms(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in mt.style&&Te.set(H?[mt,ni]:D,{scrollBehavior:"auto"}),nt.forEach(function(pe){return yn(pe)&&pe.target===(H?Et.scrollingElement||ni:D)&&(pe.smooth=!1)}),Ee=yn(x.snapTo)?x.snapTo:x.snapTo==="labels"?yT(i):x.snapTo==="labelsDirectional"?MT(i):x.directional!==!1?function(pe,Ve){return Qd(x.snapTo)(pe,vn()-ze<500?0:Ve.direction)}:Te.utils.snap(x.snapTo),oe=x.duration||{min:.1,max:2},oe=ms(oe)?Ya(oe.min,oe.max):Ya(oe,oe),me=Te.delayedCall(x.delay||ie/2||.1,function(){var pe=K(),Ve=vn()-ze<500,Ne=fe.tween;if((Ve||Math.abs(L.getVelocity())<10)&&!Ne&&!Kh&&Le!==pe){var Ye=(pe-P)/Ke,Vt=i&&!I?i.totalProgress():Ye,et=Ve?0:(Vt-Xe)/(vn()-Ha)*1e3||0,Pt=Te.utils.clamp(-Ye,1-Ye,Mo(et/2)*et/.185),Ht=Ye+(x.inertia===!1?0:Pt),wt,yt,gt=x,Hn=gt.onStart,At=gt.onInterrupt,Mn=gt.onComplete;if(wt=Ee(Ht,L),Xa(wt)||(wt=Ht),yt=Math.max(0,Math.round(P+wt*Ke)),pe<=qe&&pe>=P&&yt!==pe){if(Ne&&!Ne._initted&&Ne.data<=Mo(yt-pe))return;x.inertia===!1&&(Pt=wt-Ye),fe(yt,{duration:oe(Mo(Math.max(Mo(Ht-Vt),Mo(wt-Vt))*.185/et/.05||0)),ease:x.ease||"power3",data:Mo(yt-pe),onInterrupt:function(){return me.restart(!0)&&At&&At(L)},onComplete:function(){L.update(),Le=K(),i&&!I&&(U?U.resetTo("totalProgress",wt,i._tTime/i._tDur):i.progress(wt)),ce=Xe=i&&!I?i.totalProgress():L.progress,y&&y(L),Mn&&Mn(L)}},pe,Pt*Ke,yt-pe-Pt*Ke),Hn&&Hn(L,fe.tween)}}else L.isActive&&Le!==pe&&me.restart(!0)}).pause()),l&&(Gd[l]=L),d=L.trigger=In(d||u!==!0&&u),ke=d&&d._gsap&&d._gsap.stRevert,ke&&(ke=ke(L)),u=u===!0?d:In(u),ti(a)&&(a={targets:d,className:a}),u&&(g===!1||g===di||(g=!g&&u.parentNode&&u.parentNode.style&&pi(u.parentNode).display==="flex"?!1:Zt),L.pin=u,Ce=Te.core.getCache(u),Ce.spacer?pt=Ce.pinState:(w&&(w=In(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ce.spacerIsNative=!!w,w&&(Ce.spacerState=zh(w))),Ce.spacer=z=w||Et.createElement("div"),z.classList.add("pin-spacer"),l&&z.classList.add("pin-spacer-"+l),Ce.pinState=pt=zh(u)),n.force3D!==!1&&Te.set(u,{force3D:!0}),L.spacer=z=Ce.spacer,Ae=pi(u),we=Ae[g+S.os2],Q=Te.getProperty(u),Y=Te.quickSetter(u,S.a,en),Od(u,z,Ae),b=zh(u)),V){ve=ms(V)?T_(V,E_):E_,N=Bh("scroller-start",l,D,S,ve,0),rt=Bh("scroller-end",l,D,S,ve,0,N),J=N["offset"+S.op.d2];var ut=In(lr(D,"content")||D);Fe=this.markerStart=Bh("start",l,ut,S,ve,J,0,A),Re=this.markerEnd=Bh("end",l,ut,S,ve,J,0,A),A&&(Se=Te.quickSetter([Fe,Re],S.a,en)),!W&&!(Ei.length&&lr(D,"fixedMarkers")===!0)&&(vT(H?mt:D),Te.set([N,rt],{force3D:!0}),re=Te.quickSetter(N,S.a,en),Oe=Te.quickSetter(rt,S.a,en))}if(A){var _e=A.vars.onUpdate,Ie=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){L.update(0,0,1),_e&&_e.apply(A,Ie||[])})}if(L.previous=function(){return it[it.indexOf(L)-1]},L.next=function(){return it[it.indexOf(L)+1]},L.revert=function(pe,Ve){if(!Ve)return L.kill(!0);var Ne=pe!==!1||!L.enabled,Ye=xn;Ne!==L.isReverted&&(Ne&&(te=Math.max(K(),L.scroll.rec||0),$=L.progress,j=i&&i.progress()),Fe&&[Fe,Re,N,rt].forEach(function(Vt){return Vt.style.display=Ne?"none":"block"}),Ne&&(xn=L,L.update(Ne)),u&&(!T||!L.isActive)&&(Ne?TT(u,z,pt):Od(u,z,pi(u),de)),Ne||L.update(Ne),xn=Ye,L.isReverted=Ne)},L.refresh=function(pe,Ve,Ne,Ye){if(!((xn||!L.enabled)&&!Ve)){if(u&&pe&&mi){sn(r,"scrollEnd",q_);return}!Un&&ae&&ae(L),xn=L,fe.tween&&!Ne&&(fe.tween.kill(),fe.tween=0),U&&U.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(ot){return ot.vars.immediateRender&&ot.render(0,!0,!0)})),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Vt=he(),et=Pe(),Pt=A?A.duration():Bi(D,S),Ht=Ke<=.01||!Ke,wt=0,yt=Ye||0,gt=ms(Ne)?Ne.end:n.end,Hn=n.endTrigger||d,At=ms(Ne)?Ne.start:n.start||(n.start===0||!d?0:u?"0 0":"0 100%"),Mn=L.pinnedContainer=n.pinnedContainer&&In(n.pinnedContainer,L),ii=d&&Math.max(0,it.indexOf(L))||0,$t=ii,E,O,X,q,B,ee,le,be,Me,Be,Ue,De,Qe;for(V&&ms(Ne)&&(De=Te.getProperty(N,S.p),Qe=Te.getProperty(rt,S.p));$t-- >0;)ee=it[$t],ee.end||ee.refresh(0,1)||(xn=L),le=ee.pin,le&&(le===d||le===u||le===Mn)&&!ee.isReverted&&(Be||(Be=[]),Be.unshift(ee),ee.revert(!0,!0)),ee!==it[$t]&&(ii--,$t--);for(yn(At)&&(At=At(L)),At=y_(At,"start",L),P=R_(At,d,Vt,S,K(),Fe,N,L,et,ne,W,Pt,A,L._startClamp&&"_startClamp")||(u?-.001:0),yn(gt)&&(gt=gt(L)),ti(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(ti(At)?At.split(" ")[0]:"")+gt:(wt=Hh(gt.substr(2),Vt),gt=ti(At)?At:(A?Te.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,P):P)+wt,Hn=d)),gt=y_(gt,"end",L),qe=Math.max(P,R_(gt||(Hn?"100% 0":Pt),Hn,Vt,S,K()+wt,Re,rt,L,et,ne,W,Pt,A,L._endClamp&&"_endClamp"))||-.001,wt=0,$t=ii;$t--;)ee=it[$t],le=ee.pin,le&&ee.start-ee._pinPush<=P&&!A&&ee.end>0&&(E=ee.end-(L._startClamp?Math.max(0,ee.start):ee.start),(le===d&&ee.start-ee._pinPush<P||le===Mn)&&isNaN(At)&&(wt+=E*(1-ee.progress)),le===u&&(yt+=E));if(P+=wt,qe+=wt,L._startClamp&&(L._startClamp+=wt),L._endClamp&&!Un&&(L._endClamp=qe||-.001,qe=Math.min(qe,Bi(D,S))),Ke=qe-P||(P-=.01)&&.001,Ht&&($=Te.utils.clamp(0,1,Te.utils.normalize(P,qe,te))),L._pinPush=yt,Fe&&wt&&(E={},E[S.a]="+="+wt,Mn&&(E[S.p]="-="+K()),Te.set([Fe,Re],E)),u&&!(Hd&&L.end>=Bi(D,S)))E=pi(u),q=S===Yt,X=K(),ye=parseFloat(Q(S.a))+yt,!Pt&&qe>1&&(Ue=(H?Et.scrollingElement||ni:D).style,Ue={style:Ue,value:Ue["overflow"+S.a.toUpperCase()]},H&&pi(mt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(Ue.style["overflow"+S.a.toUpperCase()]="scroll")),Od(u,z,E),b=zh(u),O=cr(u,!0),be=W&&ar(D,q?_n:Yt)(),g?(de=[g+S.os2,Ke+yt+en],de.t=z,$t=g===Zt?$h(u,S)+Ke+yt:0,$t&&(de.push(S.d,$t+en),z.style.flexBasis!=="auto"&&(z.style.flexBasis=$t+en)),wo(de),Mn&&it.forEach(function(ot){ot.pin===Mn&&ot.vars.pinSpacing!==!1&&(ot._subPinOffset=!0)}),W&&K(te)):($t=$h(u,S),$t&&z.style.flexBasis!=="auto"&&(z.style.flexBasis=$t+en)),W&&(B={top:O.top+(q?X-P:be)+en,left:O.left+(q?be:X-P)+en,boxSizing:"border-box",position:"fixed"},B[_s]=B["max"+Ao]=Math.ceil(O.width)+en,B[xs]=B["max"+Kd]=Math.ceil(O.height)+en,B[di]=B[di+Ja]=B[di+Za]=B[di+Ka]=B[di+$a]="0",B[Zt]=E[Zt],B[Zt+Ja]=E[Zt+Ja],B[Zt+Za]=E[Zt+Za],B[Zt+Ka]=E[Zt+Ka],B[Zt+$a]=E[Zt+$a],R=wT(pt,B,T),Un&&K(0)),i?(Me=i._initted,Dd(1),i.render(i.duration(),!0,!0),se=Q(S.a)-ye+Ke+yt,ue=Math.abs(Ke-se)>1,W&&ue&&R.splice(R.length-2,2),i.render(0,!0,!0),Me||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Dd(0)):se=Ke,Ue&&(Ue.value?Ue.style["overflow"+S.a.toUpperCase()]=Ue.value:Ue.style.removeProperty("overflow-"+S.a));else if(d&&K()&&!A)for(O=d.parentNode;O&&O!==mt;)O._pinOffset&&(P-=O._pinOffset,qe-=O._pinOffset),O=O.parentNode;Be&&Be.forEach(function(ot){return ot.revert(!1,!0)}),L.start=P,L.end=qe,Ge=dt=Un?te:K(),!A&&!Un&&(Ge<te&&K(te),L.scroll.rec=0),L.revert(!1,!0),ze=vn(),me&&(Le=-1,me.restart(!0)),xn=0,i&&I&&(i._initted||j)&&i.progress()!==j&&i.progress(j||0,!0).render(i.time(),!0,!0),(Ht||$!==L.progress||A||_||i&&!i._initted)&&(i&&!I&&(i._initted||$||i.vars.immediateRender!==!1)&&i.totalProgress(A&&P<-.001&&!$?Te.utils.normalize(P,qe,0):$,!0),L.progress=Ht||(Ge-P)/Ke===$?0:$),u&&g&&(z._pinOffset=Math.round(L.progress*se)),U&&U.invalidate(),isNaN(De)||(De-=Te.getProperty(N,S.p),Qe-=Te.getProperty(rt,S.p),kh(N,S,De),kh(Fe,S,De-(Ye||0)),kh(rt,S,Qe),kh(Re,S,Qe-(Ye||0))),Ht&&!Un&&L.update(),h&&!Un&&!We&&(We=!0,h(L),We=!1)}},L.getVelocity=function(){return(K()-dt)/(vn()-Ha)*1e3||0},L.endAnimation=function(){Va(L.callbackAnimation),i&&(U?U.progress(1):i.paused()?I||Va(i,L.direction<0,1):Va(i,i.reversed()))},L.labelToScroll=function(pe){return i&&i.labels&&(P||L.refresh()||P)+i.labels[pe]/i.duration()*Ke||0},L.getTrailing=function(pe){var Ve=it.indexOf(L),Ne=L.direction>0?it.slice(0,Ve).reverse():it.slice(Ve+1);return(ti(pe)?Ne.filter(function(Ye){return Ye.vars.preventOverlaps===pe}):Ne).filter(function(Ye){return L.direction>0?Ye.end<=P:Ye.start>=qe})},L.update=function(pe,Ve,Ne){if(!(A&&!Ne&&!pe)){var Ye=Un===!0?te:L.scroll(),Vt=pe?0:(Ye-P)/Ke,et=Vt<0?0:Vt>1?1:Vt||0,Pt=L.progress,Ht,wt,yt,gt,Hn,At,Mn,ii;if(Ve&&(dt=Ge,Ge=A?K():Ye,x&&(Xe=ce,ce=i&&!I?i.totalProgress():et)),m&&u&&!xn&&!Lh&&mi&&(!et&&P<Ye+(Ye-dt)/(vn()-Ha)*m?et=1e-4:et===1&&qe>Ye+(Ye-dt)/(vn()-Ha)*m&&(et=.9999)),et!==Pt&&L.enabled){if(Ht=L.isActive=!!et&&et<1,wt=!!Pt&&Pt<1,At=Ht!==wt,Hn=At||!!et!=!!Pt,L.direction=et>Pt?1:-1,L.progress=et,Hn&&!xn&&(yt=et&&!Pt?0:et===1?1:Pt===1?2:3,I&&(gt=!At&&Z[yt+1]!=="none"&&Z[yt+1]||Z[yt],ii=i&&(gt==="complete"||gt==="reset"||gt in i))),M&&(At||ii)&&(ii||f||!i)&&(yn(M)?M(L):L.getTrailing(M).forEach(function(X){return X.endAnimation()})),I||(U&&!xn&&!Lh?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo("totalProgress",et,i._tTime/i._tDur):(U.vars.totalProgress=et,U.invalidate().restart())):i&&i.totalProgress(et,!!(xn&&(ze||pe)))),u){if(pe&&g&&(z.style[g+S.os2]=we),!W)Y(Wa(ye+se*et));else if(Hn){if(Mn=!pe&&et>Pt&&qe+1>Ye&&Ye+1>=Bi(D,S),T)if(!pe&&(Ht||Mn)){var $t=cr(u,!0),E=Ye-P;P_(u,mt,$t.top+(S===Yt?E:0)+en,$t.left+(S===Yt?0:E)+en)}else P_(u,z);wo(Ht||Mn?R:b),ue&&et<1&&Ht||Y(ye+(et===1&&!Mn?se:0))}}x&&!fe.tween&&!xn&&!Lh&&me.restart(!0),a&&(At||v&&et&&(et<1||!Ld))&&ja(a.targets).forEach(function(X){return X.classList[Ht||v?"add":"remove"](a.className)}),o&&!I&&!pe&&o(L),Hn&&!xn?(I&&(ii&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),o&&o(L)),(At||!Ld)&&(c&&At&&Fd(L,c),G[yt]&&Fd(L,G[yt]),v&&(et===1?L.kill(!1,1):G[yt]=0),At||(yt=et===1?1:3,G[yt]&&Fd(L,G[yt]))),C&&!Ht&&Math.abs(L.getVelocity())>(Xa(C)?C:2500)&&(Va(L.callbackAnimation),U?U.progress(1):Va(i,gt==="reverse"?1:!et,1))):I&&o&&!xn&&o(L)}if(Oe){var O=A?Ye/A.duration()*(A._caScrollDist||0):Ye;re(O+(N._isFlipped?1:0)),Oe(O)}Se&&Se(-Ye/A.duration()*(A._caScrollDist||0))}},L.enable=function(pe,Ve){L.enabled||(L.enabled=!0,sn(D,"resize",qa),H||sn(D,"scroll",So),ae&&sn(r,"refreshInit",ae),pe!==!1&&(L.progress=$=0,Ge=dt=Le=K()),Ve!==!1&&L.refresh())},L.getTween=function(pe){return pe&&fe?fe.tween:U},L.setPositions=function(pe,Ve,Ne,Ye){if(A){var Vt=A.scrollTrigger,et=A.duration(),Pt=Vt.end-Vt.start;pe=Vt.start+Pt*pe/et,Ve=Vt.start+Pt*Ve/et}L.refresh(!1,!1,{start:M_(pe,Ne&&!!L._startClamp),end:M_(Ve,Ne&&!!L._endClamp)},Ye),L.update()},L.adjustPinSpacing=function(pe){if(de&&pe){var Ve=de.indexOf(S.d)+1;de[Ve]=parseFloat(de[Ve])+pe+en,de[1]=parseFloat(de[1])+pe+en,wo(de)}},L.disable=function(pe,Ve){if(L.enabled&&(pe!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,Ve||U&&U.pause(),te=0,Ce&&(Ce.uncache=1),ae&&rn(r,"refreshInit",ae),me&&(me.pause(),fe.tween&&fe.tween.kill()&&(fe.tween=0)),!H)){for(var Ne=it.length;Ne--;)if(it[Ne].scroller===D&&it[Ne]!==L)return;rn(D,"resize",qa),H||rn(D,"scroll",So)}},L.kill=function(pe,Ve){L.disable(pe,Ve),U&&!Ve&&U.kill(),l&&delete Gd[l];var Ne=it.indexOf(L);Ne>=0&&it.splice(Ne,1),Ne===Ln&&Wh>0&&Ln--,Ne=0,it.forEach(function(Ye){return Ye.scroller===L.scroller&&(Ne=1)}),Ne||Un||(L.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),Ve||i.kill()),Fe&&[Fe,Re,N,rt].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),Qa===L&&(Qa=0),u&&(Ce&&(Ce.uncache=1),Ne=0,it.forEach(function(Ye){return Ye.pin===u&&Ne++}),Ne||(Ce.spacer=0)),n.onKill&&n.onKill(L)},it.push(L),L.enable(!1,!1),ke&&ke(L),i&&i.add&&!Ke){var $e=L.update;L.update=function(){L.update=$e,nt.cache++,P||qe||L.refresh()},Te.delayedCall(.01,L.update),Ke=.01,P=qe=0}else L.refresh();u&&bT()},r.register=function(n){return bo||(Te=n||k_(),z_()&&window.document&&r.enable(),bo=Ga),bo},r.defaults=function(n){if(n)for(var i in n)Oh[i]=n[i];return Oh},r.disable=function(n,i){Ga=0,it.forEach(function(o){return o[i?"kill":"disable"](n)}),rn(st,"wheel",So),rn(Et,"scroll",So),clearInterval(Dh),rn(Et,"touchcancel",Oi),rn(mt,"touchstart",Oi),Fh(rn,Et,"pointerdown,touchstart,mousedown",S_),Fh(rn,Et,"pointerup,touchend,mouseup",b_),Yh.kill(),Uh(rn);for(var s=0;s<nt.length;s+=3)Nh(rn,nt[s],nt[s+1]),Nh(rn,nt[s],nt[s+2])},r.enable=function(){if(st=window,Et=document,ni=Et.documentElement,mt=Et.body,Te&&(ja=Te.utils.toArray,Ya=Te.utils.clamp,Vd=Te.core.context||Oi,Dd=Te.core.suppressOverwrites||Oi,Yd=st.history.scrollRestoration||"auto",Wd=st.pageYOffset||0,Te.core.globals("ScrollTrigger",r),mt)){Ga=1,Eo=document.createElement("div"),Eo.style.height="100vh",Eo.style.position="absolute",$_(),gT(),kt.register(Te),r.isTouch=kt.isTouch,Or=kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),kd=kt.isTouch===1,sn(st,"wheel",So),qd=[st,Et,ni,mt],Te.matchMedia?(r.matchMedia=function(c){var h=Te.matchMedia(),f;for(f in c)h.add(f,c[f]);return h},Te.addEventListener("matchMediaInit",function(){return jd()}),Te.addEventListener("matchMediaRevert",function(){return Y_()}),Te.addEventListener("matchMedia",function(){gs(0,1),Ss("matchMedia")}),Te.matchMedia().add("(orientation: portrait)",function(){return Nd(),Nd})):console.warn("Requires GSAP 3.11.0 or later"),Nd(),sn(Et,"scroll",So);var n=mt.hasAttribute("style"),i=mt.style,s=i.borderTopStyle,o=Te.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=cr(mt),Yt.m=Math.round(a.top+Yt.sc())||0,_n.m=Math.round(a.left+_n.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(mt.setAttribute("style",""),mt.removeAttribute("style")),Dh=setInterval(w_,250),Te.delayedCall(.5,function(){return Lh=0}),sn(Et,"touchcancel",Oi),sn(mt,"touchstart",Oi),Fh(sn,Et,"pointerdown,touchstart,mousedown",S_),Fh(sn,Et,"pointerup,touchend,mouseup",b_),zd=Te.utils.checkPrefix("transform"),Xh.push(zd),bo=vn(),Yh=Te.delayedCall(.2,gs).pause(),To=[Et,"visibilitychange",function(){var c=st.innerWidth,h=st.innerHeight;Et.hidden?(x_=c,v_=h):(x_!==c||v_!==h)&&qa()},Et,"DOMContentLoaded",gs,st,"load",gs,st,"resize",qa],Uh(sn),it.forEach(function(c){return c.enable(0,1)}),l=0;l<nt.length;l+=3)Nh(rn,nt[l],nt[l+1]),Nh(rn,nt[l],nt[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Ld=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Dh)||(Dh=i)&&setInterval(w_,i),"ignoreMobileResize"in n&&(kd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Uh(rn)||Uh(sn,n.autoRefreshEvents||"none"),N_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=In(n),o=nt.indexOf(s),a=ys(s);~o&&nt.splice(o,a?6:2),i&&(a?Ei.unshift(st,i,mt,i,ni,i):Ei.unshift(s,i))},r.clearMatchMedia=function(n){it.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(ti(n)?In(n):n).getBoundingClientRect(),a=o[s?_s:xs]*i||0;return s?o.right-a>0&&o.left+a<st.innerWidth:o.bottom-a>0&&o.top+a<st.innerHeight},r.positionInViewport=function(n,i,s){ti(n)&&(n=In(n));var o=n.getBoundingClientRect(),a=o[s?_s:xs],l=i==null?a/2:i in Jh?Jh[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/st.innerWidth:(o.top+l)/st.innerHeight},r.killAll=function(n){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ms.killAll||[];Ms={},i.forEach(function(s){return s()})}},r})();je.version="3.13.0";je.saveStyles=function(r){return r?ja(r).forEach(function(e){if(e&&e.style){var t=ei.indexOf(e);t>=0&&ei.splice(t,5),ei.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Te.core.getCache(e),Vd())}}):ei};je.revert=function(r,e){return jd(!r,e)};je.create=function(r,e){return new je(r,e)};je.refresh=function(r){return r?qa(!0):(bo||je.register())&&gs(!0)};je.update=function(r){return++nt.cache&&hr(r===!0?2:0)};je.clearScrollMemory=Z_;je.maxScroll=function(r,e){return Bi(r,e?_n:Yt)};je.getScrollFunc=function(r,e){return ar(In(r),e?_n:Yt)};je.getById=function(r){return Gd[r]};je.getAll=function(){return it.filter(function(r){return r.vars.id!=="ScrollSmoother"})};je.isScrolling=function(){return!!mi};je.snapDirectional=Qd;je.addEventListener=function(r,e){var t=Ms[r]||(Ms[r]=[]);~t.indexOf(e)||t.push(e)};je.removeEventListener=function(r,e){var t=Ms[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};je.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,h){var f=[],d=[],u=Te.delayedCall(i,function(){h(f,d),f=[],d=[]}).pause();return function(g){f.length||u.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&u.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&yn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return yn(s)&&(s=s(),sn(je,"refresh",function(){return s=e.batchMax()})),ja(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(je.create(c))}),t};var D_=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Bd=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(kt.isTouch?" pinch-zoom":""):"none",e===ni&&r(mt,t)},Vh={auto:1,scroll:1},CT=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Te.core.getCache(s),a=vn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Vh[(l=pi(s)).overflowY]||Vh[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ys(s)&&(Vh[(l=pi(s)).overflowY]||Vh[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},K_=function(e,t,n,i){return kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&CT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&sn(Et,kt.eventTypes[0],U_,!1,!0)},onDisable:function(){return rn(Et,kt.eventTypes[0],U_,!0)}})},RT=/(input|label|select|textarea)/i,L_,U_=function(e){var t=RT.test(e.target.tagName);(t||L_)&&(e._gsapAllow=!0,L_=t)},PT=function(e){ms(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=In(e.target)||ni,h=Te.core.globals().ScrollSmoother,f=h&&h.get(),d=Or&&(e.content&&In(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),u=ar(c,Yt),g=ar(c,_n),_=1,m=(kt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,p=0,y=yn(i)?function(){return i(a)}:function(){return i||2.8},v,x,T=K_(c,e.type,!0,s),w=function(){return x=!1},A=Oi,C=Oi,M=function(){l=Bi(c,Yt),C=Ya(Or?1:0,l),n&&(A=Ya(0,Bi(c,_n))),v=vs},S=function(){d._gsap.y=Wa(parseFloat(d._gsap.y)+u.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},I=function(){if(x){requestAnimationFrame(w);var V=Wa(a.deltaY/2),ne=C(u.v-V);if(d&&ne!==u.v+u.offset){u.offset=ne-u.v;var L=Wa((parseFloat(d&&d._gsap.y)||0)-u.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",d._gsap.y=L+"px",u.cacheID=nt.cache,hr()}return!0}u.offset&&S(),x=!0},D,k,H,W,G=function(){M(),D.isActive()&&D.vars.scrollY>l&&(u()>l?D.progress(1)&&u(l):D.resetTo("scrollY",l))};return d&&Te.set(d,{y:"+=0"}),e.ignoreCheck=function(Z){return Or&&Z.type==="touchmove"&&I(Z)||_>1.05&&Z.type!=="touchstart"||a.isGesturing||Z.touches&&Z.touches.length>1},e.onPress=function(){x=!1;var Z=_;_=Wa((st.visualViewport&&st.visualViewport.scale||1)/m),D.pause(),Z!==_&&Bd(c,_>1.01?!0:n?!1:"x"),k=g(),H=u(),M(),v=vs},e.onRelease=e.onGestureStart=function(Z,V){if(u.offset&&S(),!V)W.restart(!0);else{nt.cache++;var ne=y(),L,ae;n&&(L=g(),ae=L+ne*.05*-Z.velocityX/.227,ne*=D_(g,L,ae,Bi(c,_n)),D.vars.scrollX=A(ae)),L=u(),ae=L+ne*.05*-Z.velocityY/.227,ne*=D_(u,L,ae,Bi(c,Yt)),D.vars.scrollY=C(ae),D.invalidate().duration(ne).play(.01),(Or&&D.vars.scrollY>=l||L>=l-1)&&Te.to({},{onUpdate:G,duration:ne})}o&&o(Z)},e.onWheel=function(){D._ts&&D.pause(),vn()-p>1e3&&(v=0,p=vn())},e.onChange=function(Z,V,ne,L,ae){if(vs!==v&&M(),V&&n&&g(A(L[2]===V?k+(Z.startX-Z.x):g()+V-L[1])),ne){u.offset&&S();var he=ae[2]===ne,Pe=he?H+Z.startY-Z.y:u()+ne-ae[1],Le=C(Pe);he&&Pe!==Le&&(H+=Le-Pe),u(Le)}(ne||V)&&hr()},e.onEnable=function(){Bd(c,n?!1:"x"),je.addEventListener("refresh",G),sn(st,"resize",G),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=g.smooth=!1),T.enable()},e.onDisable=function(){Bd(c,!0),rn(st,"resize",G),je.removeEventListener("refresh",G),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new kt(e),a.iOS=Or,Or&&!u()&&u(1),Or&&Te.ticker.add(Oi),W=a._dc,D=Te.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:J_(u,u(),function(){return D.pause()})},onUpdate:hr,onComplete:W.vars.onComplete}),a};je.sort=function(r){if(yn(r))return it.sort(r);var e=st.pageYOffset||0;return je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+st.innerHeight}),it.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};je.observe=function(r){return new kt(r)};je.normalizeScroll=function(r){if(typeof r>"u")return Dn;if(r===!0&&Dn)return Dn.enable();if(r===!1){Dn&&Dn.kill(),Dn=r;return}var e=r instanceof kt?r:PT(r);return Dn&&Dn.target===e.target&&Dn.kill(),ys(e.target)&&(Dn=e),e};je.core={_getVelocityProp:Ih,_inputObserver:K_,_scrollers:nt,_proxies:Ei,bridge:{ss:function(){mi||Ss("scrollStart"),mi=vn()},ref:function(){return xn}}};k_()&&Te.registerPlugin(je);Qn.registerPlugin(je);Qn.ticker.lagSmoothing(0);function IT(r){let e=r>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function ep(r,e){let t=o=>{let a=Math.sin(o*127.1+e*311.7)*43758.5453;return a-Math.floor(a)},n=Math.floor(r),i=r-n,s=i*i*(3-2*i);return t(n)*(1-s)+t(n+1)*s}var Q_=(r,e)=>ep(r,e)*.55+ep(r*2.1,e+1)*.28+ep(r*4.3,e+2)*.17;function Ww(r="rgba(255,190,110,1)",e="rgba(255,120,40,0)"){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d"),i=n.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,r),i.addColorStop(.25,r.replace(/[\d.]+\)$/,".55)")),i.addColorStop(1,e),n.fillStyle=i,n.fillRect(0,0,128,128);let s=new na(t);return s.colorSpace=Tn,s}function Xw(r,e,t=1){let n=new ea(new Ys({map:r,blending:Qs,depthWrite:!1,transparent:!0,opacity:t,fog:!1}));return n.scale.setScalar(e),n}var DT=(r,e={})=>new Mr({color:r,fog:!0,...e});function qw(r,e,t,n,i,s,o,a){let l=new nn(new Sr(t,n,i),e);return l.position.set(s,o+n/2,a),r.add(l),l}function Yw(r,e,t,n=.3,i=.5){let s=new Ki(n,i),o=[];return e.forEach(([a,l,c],h)=>{let f=new Mr({color:t,fog:!0,transparent:!0}),d=new nn(s,f);d.position.set(a,l,c),r.add(d),o.push({m:f,seed:h*2.3})}),a=>o.forEach(l=>{l.m.opacity=.8+.2*Math.sin(a*2.2+l.seed)*Math.sin(a*5.1+l.seed*1.7)})}var LT=`
  uniform vec3 uFog; uniform float uFogD;
  vec3 applyFog(vec3 col, float d){ float f = 1.0 - exp(-uFogD * uFogD * d * d); return mix(col, uFog, clamp(f, 0.0, 1.0)); }`;function Zw({top:r,mid:e,hor:t,horY:n=.4,midY:i=.58,glowAt:s=null,glowColor:o=[.55,.62,.72],glowStr:a=.3,stars:l=0,clouds:c=0,cloudColor:h=[.2,.24,.3],z:f=-170,y:d=40}){let u=m=>`vec3(${m.map(p=>p.toFixed(3)).join(",")})`,g=new En({depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uFlash:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      varying vec2 vUv; uniform float uTime, uFlash;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
        return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + 1.), f.x), f.y); }
      float fbm(vec2 p){ float a = .5, s = 0.; for(int i = 0; i < 5; i++){ s += a * n2(p); p *= 2.03; a *= .5; } return s; }
      void main(){
        float y = vUv.y;
        vec3 c = mix(${u(t)}, ${u(e)}, smoothstep(${n.toFixed(3)}, ${i.toFixed(3)}, y));
        c = mix(c, ${u(r)}, smoothstep(${i.toFixed(3)}, .95, y));
        ${s?`vec2 m = vec2(${s[0].toFixed(3)}, ${s[1].toFixed(3)}); float d = distance(vec2(vUv.x * 2.0, vUv.y), vec2(m.x * 2.0, m.y));
        c += ${u(o)} * ${a.toFixed(3)} * exp(-d * 9.0) + ${u(o)} * ${(a/3).toFixed(3)} * exp(-d * 2.5);`:""}
        ${l?`vec2 sc = vUv * vec2(520., 220.); vec2 g = floor(sc); float s = h(g);
        vec2 sp = vec2(h(g + 7.1), h(g + 3.3)) * .6 + .2; float sd = length(fract(sc) - sp);
        float tw = .55 + .45 * sin(uTime * (.6 + s * 1.7) + s * 40.);
        c += vec3(.85,.9,1.) * step(${(1-l).toFixed(4)}, s) * smoothstep(.16, .02, sd) * tw * smoothstep(.45, .75, y);`:""}
        ${c?`float cl = fbm(vec2(vUv.x * 7. + uTime * .025, y * 3.2 - uTime * .004));
        float cm = smoothstep(.42, .78, cl) * ${c.toFixed(3)} * smoothstep(.35, .6, y);
        c = mix(c, ${u(h)} * (1. + uFlash * 2.5), cm);`:""}
        c += vec3(.55,.6,.7) * uFlash * .35;
        gl_FragColor = vec4(c, 1.);
      }`}),_=new nn(new Ki(520,220),g);return _.position.set(0,d,f),_.userData.tick=m=>{g.uniforms.uTime.value=m},_}function $w(r,e,t,n,i,s=4,o=260){let a=new Js;a.moveTo(-o,-20);for(let c=-o;c<=o;c+=s)a.lineTo(c,e+Q_(c*.018,i)*t+Q_(c*.09,i+5)*t*.18);a.lineTo(o,-20),a.lineTo(-o,-20);let l=new nn(new pa(a),DT(n));return l.position.z=r,l}function Jw({color:r,deep:e,glint:t=[.9,.92,1],glintX:n=0,z:i=-40,y:s=0,w:o=500,d:a=200,fogColor:l,fogD:c,waves:h=1}){let f=g=>`vec3(${g.map(_=>_.toFixed(3)).join(",")})`,d=new En({uniforms:{uTime:{value:0},uFog:{value:new Ze(l)},uFogD:{value:c}},vertexShader:"varying vec3 vW; varying float vD; void main(){ vec4 w = modelMatrix * vec4(position, 1.); vW = w.xyz; vec4 mv = viewMatrix * w; vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:`varying vec3 vW; varying float vD; uniform float uTime; ${LT}
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
        return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + 1.), f.x), f.y); }
      void main(){
        vec2 p = vW.xz;
        float wv = n2(p * vec2(.35, 1.4) + vec2(uTime * .25, uTime * .5)) * .6 + n2(p * vec2(.9, 3.) - vec2(uTime * .4, uTime * .2)) * .4;
        wv *= ${h.toFixed(2)};
        float far = smoothstep(5., 120., vD);
        vec3 c = mix(${f(r)}, ${f(e)}, far * .7) * (.85 + wv * .3);
        float lane = exp(-abs(vW.x - ${n.toFixed(2)}) * (.08 + (1. - far) * .1)) * smoothstep(.55, .95, wv) * (.4 + far * .8);
        c += ${f(t)} * lane * .9;
        gl_FragColor = vec4(applyFog(c, vD), 1.);
      }`}),u=new nn(new Ki(o,a,1,1),d);return u.rotation.x=-Math.PI/2,u.position.set(0,s,i),u.userData.tick=g=>{d.uniforms.uTime.value=g},u}var j_={value:1};function Kw({count:r,area:e,size:t=[1,2],color:n=[.93,.96,1],speed:i=1.2,wind:s=1,sway:o=.6,opacity:a=.8,shape:l="dot",flicker:c=0,seed:h=3,add:f=!1}){let d=IT(h),u=new Float32Array(r*3),g=new Float32Array(r),_=new Float32Array(r);for(let T=0;T<r;T++)u[T*3]=(d()-.5)*e.w,u[T*3+1]=d()*e.h,u[T*3+2]=e.z0+d()*(e.z1-e.z0),g[T]=t[0]+d()*(t[1]-t[0]),_[T]=d();let m=new Xt;m.setAttribute("position",new dn(u,3)),m.setAttribute("aSize",new lt(g,1)),m.setAttribute("aSeed",new lt(_,1));let p=`vec3(${n.map(T=>T.toFixed(3)).join(",")})`,y=l==="streak"?"vec2 q = gl_PointCoord - .5; float a = smoothstep(.06, .0, abs(q.x + q.y * .25)) * smoothstep(.5, .1, abs(q.y));":l==="soft"?"float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .0, d) * .55;":"float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .0, d);",v=new En({transparent:!0,depthWrite:!1,blending:f?Qs:Zi,uniforms:{uTime:{value:0},uH:{value:e.h},uW:{value:e.w},uY0:{value:e.y0||0},uPx:j_,uOp:{value:a}},vertexShader:`attribute float aSize; attribute float aSeed; uniform float uTime, uH, uW, uY0, uPx; varying float vA; varying float vS;
      void main(){
        vec3 p = position;
        float sp = ${i.toFixed(3)} * (.75 + aSeed * .9);
        p.y = uY0 + mod(p.y - uTime * sp, uH);
        p.x += sin(uTime * (.4 + aSeed) + aSeed * 30.) * ${o.toFixed(3)} + uTime * ${s.toFixed(3)} * (.6 + aSeed * .6);
        p.x = mod(p.x + uW * .5, uW) - uW * .5;
        vec4 mv = modelViewMatrix * vec4(p, 1.);
        gl_PointSize = aSize * uPx * (60. / -mv.z);
        vA = smoothstep(90., 8., -mv.z); vS = aSeed;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`varying float vA; varying float vS; uniform float uOp, uTime;
      void main(){ ${y}
        float f = ${c?"(.55 + .45 * sin(uTime * (2. + vS * 5.) + vS * 50.))":"1."};
        gl_FragColor = vec4(${p}, a * vA * uOp * f); }`}),x=new ta(m,v);return x.userData.tick=T=>{v.uniforms.uTime.value=T},x}function Qw(r,{home:e,reduce:t,intro:n}){let i=e?document.querySelector(".homeToday"):document.querySelector("body.fieldPage .pageContent"),s,o;try{s=document.createElement("canvas"),s.className="cineCanvas",s.setAttribute("aria-hidden","true"),o=new lh({canvas:s,antialias:!1,powerPreference:"low-power"})}catch{return null}let a=Math.min(devicePixelRatio||1,1.6);o.setPixelRatio(a);let l=new Ze(r.clear);o.setClearColor(l),document.body.prepend(s),document.documentElement.classList.add("cine");let c=new Qo;r.fog&&(c.fog=new Ko(new Ze(r.fog[0]),r.fog[1]));let h=new on(46,1,.1,700),f=innerWidth<700,d={p:0,intro:n&&!t?1:0,px:0,py:0},u=r.build({scene:c,cam:h,small:f,reduce:t,st:d}),g=[];c.traverse(he=>{he.userData.tick&&g.push(he.userData.tick)});let _=Object.assign({y:2.2,z:15,ly:11,lz:-46,sy:4.5,sz:-9,sly:1.5,iy:22,iz:42,ily:6,fov:[58,46]},r.cam||{}),m=new F;function p(){let he=innerWidth,Pe=innerHeight;o.setSize(he,Pe,!1),s.style.width=he+"px",s.style.height=Pe+"px",h.aspect=he/Pe,h.fov=he/Pe<.7?_.fov[0]:_.fov[1],h.updateProjectionMatrix(),j_.value=a*(Pe/800)}p();let y=e?document.querySelector(".homeToday"):null;function v(){if(!y)return;y.style.marginTop="";let he=parseFloat(getComputedStyle(y).marginTop)||0,Pe=y.getBoundingClientRect().top+scrollY;y.style.marginTop=he+Math.max(0,Math.round(innerHeight*.9-96-Pe))+"px"}v(),window.dispatchEvent(new Event("kochbuch:sceneresize"));let x=0,T=!1,w=performance.now(),A=()=>i?i.getBoundingClientRect().top+scrollY+40:innerHeight;function C(he){x=0;let Pe=t?r.stillTime||0:Math.max(0,(he-w)/1e3);g.forEach(fe=>fe(Pe)),u?.update?.(Pe);let Le=d.p,ze=d.intro,$=t?0:1,K=Math.sin(Pe*.25)*.25*$;h.position.set(d.px*1.2+Math.sin(Pe*.11)*.4*$,_.y+Le*_.sy+K+ze*_.iy+d.py*.5,_.z+Le*_.sz+ze*_.iz),m.set(d.px*2,_.ly+Le*_.sly+ze*_.ily,_.lz),h.lookAt(m),u?.camera?.(h,Le,Pe),o.render(c,h),T&&!t&&(x=requestAnimationFrame(C))}function M(){T||(T=!0,x||(x=requestAnimationFrame(C)))}function S(){T=!1,x&&(cancelAnimationFrame(x),x=0)}let I=()=>{document.hidden||scrollY>A()?S():M(),t&&C(performance.now())},D=()=>d.intro?2.4:.15,k=e?".homeBrand, .homeGreetingSub, .homeContinue, .searchRow, .homeQuick, .houseCup":".fieldExtra",H=Qn.context(()=>{}),W=r.splitTitle===!1?null:document.querySelector(e?".homeGreetingTitle":".pageTitleBlock .h1"),G=null;H.add(()=>{if(W&&!t){G=W.textContent;let he=Pe=>Pe.replace(/[&<>]/g,Le=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[Le]);W.innerHTML=G.split(`
`).map(Pe=>Pe.split(" ").map(Le=>`<span class="cineW">${[...Le].map(ze=>`<span class="cineCh">${he(ze)}</span>`).join("")}</span>`).join(" ")).join("<br>"),W.setAttribute("aria-label",G.replace(/\n/g," ")),Qn.from(W.querySelectorAll(".cineCh"),{opacity:0,yPercent:60,duration:1.1,ease:"power3.out",stagger:.028,delay:D()})}if(!t&&r.splitTitle!==!1&&Qn.from(k,{opacity:0,y:14,duration:.9,ease:"power3.out",stagger:.07,delay:D()+.35,clearProps:"transform,opacity"}),Qn.fromTo(s,{opacity:0},{opacity:1,duration:t?.15:1.2,ease:"power2.out"}),!t){je.create({start:0,end:()=>Math.max(200,A()-innerHeight*.25),scrub:.8,onUpdate:Le=>{d.p=Le.progress}});let he=document.querySelector(e?".homeGreeting":".pageTitleBlock");he&&Qn.to(he,{opacity:0,ease:"none",scrollTrigger:{start:0,end:()=>innerHeight*.45,scrub:!0}});let Pe=e&&document.querySelector(".homeToday .homeFeatured .rcImg img");Pe&&r.expandImage!==!1&&Qn.fromTo(Pe,{scale:1.22},{scale:1,ease:"none",scrollTrigger:{trigger:Pe.closest(".rcImg"),start:"top bottom",end:"top 30%",scrub:.6}})}});let Z=setTimeout(()=>{document.querySelectorAll(".cineCh").forEach(he=>{he.style.opacity="",he.style.transform=""}),Qn.set(k,{clearProps:"transform,opacity"})},(D()+2.4)*1e3),V=null;if(d.intro){V=document.createElement("div"),V.className="cineIntro",V.setAttribute("aria-hidden","true"),V.innerHTML=`<div class="cineIntroInner"><span class="cineIntroWord">${r.intro.word}</span><i class="cineIntroRule"></i><span class="cineIntroSub">${r.intro.sub}</span></div>`,document.body.appendChild(V);let he=Qn.timeline({onComplete:()=>{V?.remove(),V=null}});he.from(".cineIntroWord",{opacity:0,scale:1.18,duration:1.4,ease:"power2.out"},.1).from(".cineIntroRule",{scaleX:0,duration:1,ease:"power3.inOut"},.5).from(".cineIntroSub",{opacity:0,y:8,duration:.8,ease:"power2.out"},.9).to(d,{intro:0,duration:2.8,ease:"power3.inOut"},.6).to(V,{opacity:0,duration:.9,ease:"power2.inOut"},1.9),V.addEventListener("click",()=>he.progress(1))}let ne=matchMedia("(hover:hover) and (pointer:fine)").matches,L=he=>{Qn.to(d,{px:he.clientX/innerWidth-.5,py:-(he.clientY/innerHeight-.5),duration:1.2,ease:"power3.out",overwrite:!0})};ne&&!t&&addEventListener("pointermove",L,{passive:!0});let ae=()=>{p(),v(),je.refresh(),I()};return addEventListener("resize",ae),addEventListener("scroll",I,{passive:!0}),document.addEventListener("visibilitychange",I),I(),t&&C(performance.now()),{stop(){S(),clearTimeout(Z),H.revert(),je.getAll().forEach(he=>he.kill()),removeEventListener("pointermove",L),removeEventListener("resize",ae),removeEventListener("scroll",I),document.removeEventListener("visibilitychange",I),W&&G!==null&&(W.textContent=G,W.removeAttribute("aria-label")),y&&(y.style.marginTop=""),V?.remove(),o.dispose(),s.remove(),document.documentElement.classList.remove("cine"),window.dispatchEvent(new Event("kochbuch:sceneresize"))}}}export{Pi as a,Qs as b,F as c,Ze as d,Mr as e,Xt as f,nn as g,En as h,Wr as i,Gl as j,Lu as k,Yl as l,Fu as m,Jl as n,Js as o,ku as p,Ki as q,Vu as r,pa as s,Hu as t,Gu as u,Wu as v,Xu as w,qu as x,Zu as y,Ju as z,Ku as A,IT as B,Q_ as C,Ww as D,Xw as E,DT as F,qw as G,Yw as H,LT as I,Zw as J,$w as K,Jw as L,Kw as M,Qw as N};
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
