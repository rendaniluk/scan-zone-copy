/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var ga;function ka(a,F){0==a.indexOf("dvt.")&&(a=a.substring(4));var D=a.split("."),E=eval("dvt");D[0]in E||!E.execScript||E.execScript("var "+D[0]);for(var v;D.length&&(v=D.shift());)D.length||void 0===F?E=E[v]?E[v]:E[v]={}:E[v]=F}Math.floor(2147483648*Math.random()).toString(36);
(function(a){function F(a){this.Init(F.oe);this.type=this.Hc();this.Jo=a}function D(a,c){this.Init(a,c)}function E(a,c,f){this.Init(a,c,f)}function v(a,c,f,p){this.Init(a,c,f,p)}function x(a,c){this.Init();this.lc=a;this.WZ=!1;this.af=c}function f(a,c,f,p){this.Init(c,f,p);this.Nt=a}a.f7=function(){};a.f.v(a.f7,a.f);a.f7.prototype.get=function(){};a.HS=function(){this.z2=[]};a.f.v(a.HS,a.f7);a.HS.prototype.add=function(a,c,f){this.z2.push({group:a,K4a:c,iva:f})};a.HS.prototype.get=function(a){if(null===
a)return null;for(var c=0;c<this.z2.length;c++)if(this.z2[c].group==a)return this.z2[c].iva;return null};a.HS.prototype.q3a=function(){return this.z2.slice(0)};a.pJ=function(a,c,f,p,v){this.Sm=a;this.zn=c;this.RXa=f?f:this.Sm;this.QXa=p?p:this.zn;this.i2=v;this.fFa=this.zn-this.Sm};a.f.v(a.pJ,a.f7);a.pJ.prototype.get=function(a){if(isNaN(a)||null===a)return null;a=0<this.fFa?(a-this.Sm)/this.fFa:.5;a=Math.max(Math.min(a,1),0);a*=this.i2.length-1;return a===Math.round(a)?this.i2[a]:this.wUa(this.i2[Math.floor(a)],
this.i2[Math.ceil(a)],a-Math.floor(a))};a.pJ.prototype.WIa=function(){return this.i2.slice(0)};a.pJ.prototype.D4=function(){return this.RXa};a.pJ.prototype.wUa=function(c,h,f){return a.D.FR(c,h,f)};a.xk=function(){};a.f.v(a.xk,a.f);a.xk.BRa=.4;a.xk.Zza=1;a.xk.aAa=50;a.xk.$za=10;a.xk.Fha=5;a.xk.zRa=11;a.xk.sAa="#636363";a.xk.s$a="#333333";a.xk.Nva=function(c,h,f,p,v,y,n){var z=null;y&&(y instanceof a.pJ?z=a.xk.NYa(c,h,f,p,y,n):y instanceof a.HS&&(z=a.xk.OYa(c,f,p,v,y,n)));return z};a.xk.NYa=function(c,
h,f,p,v,y){var n=a.m.ea(c),z=a.xk.$za/2+a.xk.Zza,w=new a.ca(c);f.B(w);f=v.D4();var A=new a.M(c,f,0,z);A.ub(y.pE);A.ug();w.B(A);var d=new a.Rect(c,0,a.xk.Zza,a.xk.aAa,a.xk.$za),g=n?v.WIa().slice().reverse():v.WIa();d.Ia(new a.hd(0,g));y.borderColor&&d.uc(y.borderColor);w.B(d);g=a.xk.aAa+a.xk.Fha;v=v.QXa;c=new a.M(c,v,0,z);c.ub(y.pE);c.ug();w.B(c);n?(y=c.V().b+a.xk.Fha,d.Ua(y),A.na(y+g)):(y=A.V().b+a.xk.Fha,d.Ua(y),c.na(y+g));h.Xb(d,new a.qg(f+" - "+v));w.V().b>p&&(w.removeChild(A),w.removeChild(c),
d.Ua(0));return w};a.xk.OYa=function(c,h,f,p,v,y){var n=new a.ca(c);h.B(n);h=[];v=v.q3a();for(var z=0;z<v.length;z++){var w=v[z];h.push({text:w.K4a,color:w.iva.color,pattern:w.iva.pattern,borderColor:y.borderColor})}y={sections:[{items:h}],orientation:"horizontal",layout:{outerGapWidth:0,outerGapHeight:0},textStyle:y.pE.toString()};h=a.Rf.newInstance(c);h.setId(null);n.B(h);p=h.ly(y,f,p*a.xk.BRa);h.ia(y,f,p.i);f=h.V3();c=new a.Rect(c,0,0,f.b,p.i);c.Yb();n.Ad(c,0);return n};a.DS=function(c){this.Init(a.DS.oe);
this.lc=c};a.f.v(a.DS,a.Pg);a.DS.oe="breadcrumbsDrill";a.DS.prototype.getId=function(){return this.lc};a.es=function(a,c,f,p){this.Init(a,c,f,p)};a.f.v(a.es,a.ca);a.es.prototype.Init=function(c,h,p,t){a.es.C.Init.call(this,c);this.o8a(t);this.hz=new f(this,c,h,p);this.hz.Lf(this);this.setId("breadcrumbs1000"+Math.floor(1E9*Math.random()));this.VJ=-1;this.tka=this.wna=null};a.es.prototype.o8a=function(a){this.Vf=c.mo(a)};a.es.prototype.ia=function(c,h){this.sb=c?a.bb.clone(c):this.sb;this.Ih();this.yza(null);
p.ia(this,this,h)};a.es.prototype.TAa=function(){return this.sb?this.sb:{}};a.es.prototype.Ob=function(){return this.hz};a.es.prototype.mf=function(){var a=this.VJ;this.VJ=-1;this.HU(a,this.VJ)};a.es.prototype.c9a=function(a){var c=this.VJ;this.VJ=this.dXa(c,!a);this.HU(c,this.VJ);return this.VJ};a.es.prototype.dXa=function(a,c){return-1==a?c?0:this.sb.items.length-2:c?a==this.sb.items.length-2?-1:++a:0==a?-1:--a};a.es.prototype.HU=function(c,h){var f=this.wna,p=null,v=this.oba(h);if(v){var y=this.hz.Ya(v);
y&&y.bk&&y.bk()?(p=this.a,y=v.V(),v=v.Wa(),this.wna=p=new a.Mh(p,this,y,v)):this.wna=null}f&&f.at();p&&p.show()};a.es.prototype.oba=function(a){var c=this.tka;return 0>a||!c||a>=c.length?null:c[a]};a.es.prototype.l2a=function(a){for(var c=this.tka,f=0;f<c.length;f++)if(c[f]==a)return f};a.es.prototype.yza=function(a){this.tka=a};var c={};a.f.v(c,a.f);c.If={labelStyle:a.ka.xJ+"color: #003286;",disabledLabelStyle:a.ka.xJ,g9:4,oTa:"\x3e"};c.mo=function(e){var h=c.Fla(e);return e?a.bb.ae(e,h):h};c.Fla=
function(){return a.bb.clone(c.If)};c.Bh=function(a,c){return Math.ceil(c*a.layout.gapRatio)};a.f.v(f,a.u);f.prototype.rj=function(a){f.C.rj.call(this,a);this.uoa(this.Ya(a.target))};f.prototype.ev=function(a){this.uoa(this.Ya(a.target))};f.prototype.uoa=function(c){c&&c instanceof x&&c.bk()&&(c=new a.DS(c.getId()),this.kt(c,this.Nt))};f.prototype.rV=function(c){var h=!0,f=c.keyCode;f==a.KeyboardEvent.rg?(f=this.Nt.c9a(c.shiftKey),-1==f?h=!1:this.IJ(this.Nt.oba(f))):f==a.KeyboardEvent.Mn&&this.uoa(this.Ya(this.Nt.oba(this.Nt.VJ)));
h&&a.u.Ud(c);return h};a.f.v(x,a.qg);x.prototype.getId=function(){return this.lc};x.prototype.bk=function(){return this.WZ};x.prototype.twa=function(a){this.WZ=a};x.prototype.Ga=function(){return this.af};var p={};a.f.v(p,a.f);p.OJ=3;p.ia=function(c,h,f){for(var t=c.a,v=c.TAa().items?c.TAa().items:[],y=c.Vf,n=c.Ob(),z=[],w=[],A=0;A<v.length;A++){var d=v[A];if(d){var g=p.hO(t,d.label?d.label:"",y,A<v.length-1);z.push(g);d=new x(d.id,g);n.Xb(g,d);w.push(d);A<v.length-1&&d.twa(!0)}}c.yza(z);a.m.ea(t)?
p.lYa(c,h,f,z,w):p.kYa(c,h,f,z,w)};p.I9=function(c,h,f){h=new a.M(c,h,0,0);h.dd(!1);h.ub(f);var p=f.ky(a.j.yw),v=f.ky(a.j.xw),y=f.ky(a.j.vw),n=f.ky(a.j.ww),z=a.uk.lI(c,h);c=new a.Rect(c,0,0,z.b+n+v,z.i+p+y);c.Yb();c.ub(f);h.ib(n,p);c.B(h);return c};p.hO=function(c,h,f,t){if(t&&(f.VJa||f.UJa)){var v=new a.j(f.pE);t=new a.j(f.VJa);f=new a.j(f.UJa);v=p.I9(c,h,v);t=p.I9(c,h,t);f=p.I9(c,h,f);c=new a.ra(c,v,t,f);c.zg("link");c.Od("label",h)}else t=new a.j(t?f.pE:f.h1a),t.ky(a.j.ww)||t.ky(a.j.xw)||t.ky(a.j.yw)||
t.ky(a.j.vw)?c=p.I9(c,h,t):(c=new a.M(c,h,0,0),c.ub(t));return c};p.oDa=function(c){if(c instanceof a.ra)return c=c.Sk.dc(0),c.Wc();c instanceof a.Rect&&(c=c.dc(0));return c.Wc()};p.cGa=function(c,h){if(c instanceof a.ra){var f=c.Sk.dc(0);a.ga.Yc(f,Math.max(h-f.ac(),0),Infinity,f.getParent());f=c.ci.dc(0);a.ga.Yc(f,Math.max(h-f.ac(),0),Infinity,f.getParent());f=c.Qh.dc(0);a.ga.Yc(f,Math.max(h-f.ac(),0),Infinity,f.getParent())}else c instanceof a.Rect?(f=c.dc(0),a.ga.Yc(f,Math.max(h-f.ac(),0),Infinity,
f.getParent())):a.ga.Yc(c,h,Infinity,c.getParent())};p.kYa=function(c,h,f,t,v){for(var y=c.Vf,n=c.Ob(),z=[],w=0,A=0;A<t.length;A++){h.B(t[A]);var d=t[A].V();z[A]=d;w=Math.max(d.i,w);h.removeChild(t[A])}for(var g=0,A=0;A<t.length;A++){h.B(t[A]);d=z[A];t[A].ib(g,.5*(w-d.i));if(a.m.cb()){var B=new a.Rect(h.a,-p.OJ,-p.OJ,d.b+2*p.OJ,d.i+2*p.OJ);B.Yb();t[A].B(B);A<v.length&&n.Xb(B,v[A])}if(g+d.b>f){c=p.oDa(t[A]);p.cGa(t[A],f-g);A<v.length?v[A].gt(c):n.Xb(t[A],new a.qg(c));break}else g+=d.b+y.g9;if(A<t.length-
1){d=p.EEa(c);h.B(d);B=d.V();d.ib(g,.5*(w-B.i));B=B.b;if(g+B>f){h.removeChild(d);break}g+=B+y.g9}}};p.lYa=function(c,h,f,t,v){for(var y=c.Vf,n=c.Ob(),z=0;z<t.length;z++){h.B(t[z]);var w=t[z].V();if(a.m.cb()){var A=new a.Rect(h.a,-p.OJ,-p.OJ,w.b+2*p.OJ,w.i+2*p.OJ);A.Yb();t[z].B(A);z<v.length&&n.Xb(A,v[z])}if(0>f-w.b){c=p.oDa(t[z]);p.cGa(t[z],f);t[z].Ua(0);z<v.length?v[z].gt(c):n.Xb(t[z],new a.qg(c));break}else t[z].Ua(f-w.b),f-=w.b+y.g9;if(z<t.length-1)if(w=p.EEa(c),h.B(w),A=w.V().b,0>f-A){h.removeChild(w);
break}else w.Ua(f-A),f-=A+y.g9}};p.EEa=function(c){var h=c.Vf;c=new a.M(c.a,h.oTa,0,0);c.ub(new a.j(h.pE));return c};a.qA=function(c){this.Init(a.qA.oe);this.Cn=c};a.f.v(a.qA,a.Pg);a.qA.oe="dvtPanelDrawerEvent";a.qA.gT="hide";a.qA.iT="show";a.sa=function(a,c,f,p){this.Init(a,c,f,p)};a.f.v(a.sa,a.ca);a.sa.XL="left";a.sa.$u="right";a.sa.y7="top";a.sa.x7="bottom";a.sa.oia=15;a.sa.yia=0;a.sa.Bk=42;a.sa.NSa=2;a.sa.tQa="#ffffff";a.sa.yA="#bbc7d0";a.sa.O8=.25;a.sa.oT=10;a.sa.qQa=1;a.sa.j$a=1;a.sa.rQa=1;
a.sa.lZ=1;a.sa.k$a=1;a.sa.LSa="#dee4e7";a.sa.MSa="#c1cede";a.sa.nT=1.25;a.sa.o$a="alta";a.sa.VS=24;a.sa.I9a="legend";a.sa.S9a="palette";a.sa.X9a="search";a.sa.N9a="overview";a.sa.Z9a="searchEna";a.sa.$9a="searchOvr";a.sa.Y9a="searchDwn";a.sa.a$a="searchTip";a.sa.U9a="paletteEna";a.sa.V9a="paletteOvr";a.sa.T9a="paletteDwn";a.sa.W9a="paletteTip";a.sa.K9a="legendEna";a.sa.L9a="legendOvr";a.sa.J9a="legendDwn";a.sa.M9a="legendTip";a.sa.P9a="overviewEna";a.sa.Q9a="overviewOvr";a.sa.O9a="overviewDwn";a.sa.R9a=
"overviewTip";a.sa.BS="backgroundAlpha";a.sa.dha="tab-color-inactive";a.sa.Bza="tab-border-color-inactive";a.sa.prototype.Init=function(c,h,f,p){a.sa.C.Init.call(this,c,null,"panelDrawer"+p);this.i_a=p;this.Fc=new E(c,h,f);this.Fc.Lf(this);this.Fc.wqa(a.sa);this.Fc.Xb(this,this);a.m.cb()||this.Fc.Zr(new D(this.Fc,this));this.Tb=h;this.Ba=f;this.L1={};this.Ex=[];this.jP=this.kP=Number.MAX_VALUE;this.H$=5;this.f1=0;this.U9;this.$G;this.nv=this.Jt=!1;this.$c;this.yT;this.vi;this.bka;this.vp;this.nq;
this.zU={};this.YJ=a.sa.XL;this.tO=a.sa.y7;this.hEa=!1;this.Ub=null;f&&(this.Ub=f.Yba());this.MA=a.Za.N(this.Ub,a.sa.BS,a.sa.qQa);this.Ww=a.Za.N(this.Ub,a.j.we,a.sa.yA);this.$i=parseInt(a.Za.N(this.Ub,a.j.ei,a.sa.NSa));this.Mja=a.Za.N(this.Ub,a.j.ge,a.sa.tQa);this.BBa=a.Za.N(this.Ub,a.sa.dha,a.sa.LSa);this.DBa=a.Za.N(this.Ub,a.sa.Bza,a.sa.MSa);this.Xc(!0);this.cz=a.sa.oT};a.sa.prototype.d0a=function(c,h,f,p,v){this.L1.legend={panel:c,iconUp:h,iconOver:f,iconDown:p,tooltip:v};this.Ex.push("legend");
this.f1=a.sa.oia+this.Ex.length*(a.sa.Bk+a.sa.yia)};a.sa.prototype.Twa=function(a){this.kP=a};a.sa.prototype.tIa=function(){return this.kP-2*this.cz};a.sa.prototype.g8a=function(a){this.jP=a};a.sa.prototype.sIa=function(){return this.jP-2*this.cz};a.sa.prototype.M7a=function(a){this.YJ=a};a.sa.prototype.P7a=function(a){this.tO=a};a.sa.prototype.iX=function(a){return this.L1[a].panel};a.sa.prototype.afa=function(a){return this.L1[a].icon};a.sa.prototype.tya=function(a){return this.L1[a].tooltip};a.sa.prototype.lM=
function(a){return this.zU[a]};a.sa.prototype.O7a=function(){this.$G=this.U9;this.U9="legend";this.gd()&&(this.oW(),this.Lxa("legend",void 0,void 0));this.$G=null};a.sa.prototype.a4=function(){var a=this.U9;return!a&&0<this.Ex.length?this.Ex[0]:a};a.sa.prototype.In=function(a,c,f){if(!this.nv){var p=this.Jt;this.Jt=a;p!=a&&(this.nv=!0,a?this.cNa(c,f):this.bNa(c,f))}};a.sa.prototype.gd=function(){return this.Jt};a.sa.prototype.n6=function(){this.$c||(this.$c=new a.ca(this.a,"pd_contentPane"),this.B(this.$c),
this.yT=new a.ca(this.a,"pdcp_activeContent"),this.$c.B(this.yT));this.XOa()};a.sa.prototype.XOa=function(){if(!this.hEa){var c=-a.sa.Bk;this.YJ==a.sa.$u&&(c=0);var h=a.sa.oia;if(this.tO==a.sa.y7)for(var f=0;f<this.Ex.length;f++){var p=this.Ex[f],p=this.jza(p);p.ib(c,h);h+=a.sa.Bk+a.sa.yia}else if(this.tO==a.sa.x7)for(h=-a.sa.oia-a.sa.Bk,f=this.Ex.length-1;0<=f;f--)p=this.Ex[f],p=this.jza(p),p.ib(c,h),h-=a.sa.Bk+a.sa.yia}};a.sa.prototype.BNa=function(){var c;switch(this.YJ){case a.sa.$u:c=["M",0,
0,"L",a.sa.Bk-this.$i,0,"A",this.$i,this.$i,0,0,1,a.sa.Bk,this.$i,"L",a.sa.Bk,a.sa.Bk-this.$i,"A",this.$i,this.$i,0,0,1,a.sa.Bk-this.$i,a.sa.Bk,"L",0,a.sa.Bk];break;default:c=["M",a.sa.Bk,0,"L",this.$i,0,"A",this.$i,this.$i,0,0,0,0,this.$i,"L",0,a.sa.Bk-this.$i,"A",this.$i,this.$i,0,0,0,this.$i,a.sa.Bk,"L",a.sa.Bk,a.sa.Bk]}return c};a.sa.prototype.jza=function(c){var h=this.BNa(),f=new v(this.a,h,c,this);f.Xc(!0);f.setCursor("pointer");this.$c.Ad(f,0);f.$a(this.BBa,this.MA);f.uc(this.DBa,a.sa.lZ,
1);var p=this.L1[c],x=new a.Jb(this.a,h);x.Yb();p.iconUp.ib(.5*(a.sa.Bk-a.sa.VS),.5*(a.sa.Bk-a.sa.VS));x.B(p.iconUp);var y=new a.Jb(this.a,h);y.Yb();p.iconOver.ib(.5*(a.sa.Bk-a.sa.VS),.5*(a.sa.Bk-a.sa.VS));y.B(p.iconOver);h=new a.Jb(this.a,h);h.Yb();p.iconDown.ib(.5*(a.sa.Bk-a.sa.VS),.5*(a.sa.Bk-a.sa.VS));h.B(p.iconDown);x=new a.ra(this.a,x,y,h);x.K6(!0);p.icon=x;f.B(x);this.zU[c]=f;var n=this;this.Fc.Xb(f,{dv:function(){n.$Na(c)},Ku:function(){return n.tya(c)}});f.S_a();return f};a.sa.prototype.$Na=
function(c){function h(){var a=p.a.cf();a&&a.ed()}this.$G=this.a4();this.U9=c;var f=this.lM(c).Ae(),p=this;this.gd()?this.$G==c?this.In(!1,!1,h):(this.oW(),this.Lxa(c,!1)):(this.In(!0,!1,h),this.rda());this.$G=null;this.pd(new a.qA(this.gd()?a.qA.iT:a.qA.gT));f&&this.a.cJ(this)};a.sa.prototype.Lxa=function(c,h,f){var p=null;h||(p=new a.L(this.a,a.sa.O8));this.$G&&(h=this.iX(this.$G))&&this.$J.removeChild(h);this.$xa(c,p);p?(this.rda(),f&&a.yb.Le(p,f),p.play()):f&&f()};a.sa.prototype.cNa=function(c,
h){this.$xa(this.a4());var f=-(1/a.sa.nT*this.vi.getWidth());this.YJ==a.sa.$u&&(f=-f,this.vi.na((1/a.sa.nT-1)*this.vi.getWidth()));if(c)this.$c.Ua(f),h&&h(),this.nv=!1;else{var p=new a.L(this.a,a.sa.O8);p.dk(a.nc.EK);p.aa(a.L.ta,this.$c,this.$c.ac,this.$c.Ua,f);h&&a.yb.Le(p,h);if(p){var v=this;a.yb.Le(p,function(){v.nv=!1});p.play()}}this.oW()};a.sa.prototype.bNa=function(c,h){if(c)this.$c.Ua(0),this.cza(),h&&h(),this.oW(),this.nv=!1;else{var f=new a.L(this.a,a.sa.O8);f.dk(a.nc.LU);f.aa(a.L.ta,this.$c,
this.$c.ac,this.$c.Ua,0);a.yb.Le(f,this.cza,this);a.yb.Le(f,this.oW,this);h&&a.yb.Le(f,h);var p=this;a.yb.Le(f,function(){p.nv=!1});f.play()}};a.sa.prototype.cza=function(){this.vi&&(this.bka=null,this.$J.Ih(),this.yT.FV(),this.vi.Ec(),this.yT.removeChild(this.vi),this.nq=this.vp=this.$J=this.vi=null)};a.sa.prototype.$xa=function(c,h){this.vi||(this.vi=new a.Rect(this.a,0,0,1,1,"pdcp_expandedContent"),this.yT.B(this.vi),this.vi.$a(this.Mja,this.MA),this.$J=new a.ca(this.a),this.vi.B(this.$J),this.$J.ib(this.cz,
this.cz));var f=this.iX(c);if(f){this.$J.B(f);if(this.$G){var p=this.iX(this.$G);p&&p.Oc(a.sn.xY,this.Aya,!1,this)}f.qb(a.sn.xY,this.Aya,!1,this)}this.vp||(this.vp=new a.Jb(this.a,["M",0,0,"L",1,1],"pdcp_expandedBorder"),this.nq=new a.Jb(this.a,["M",0,0,"L",1,1],"pdcp_expandedBorderResizable"),this.vi.B(this.vp),this.vi.B(this.nq),this.vp.uc(this.Ww,a.sa.lZ),this.vp.Ia(null),this.nq.uc(this.Ww,a.sa.lZ),this.nq.Ia(null),this.vp.Xc(!0),this.nq.Xc(!0));this.UOa(c,h)};a.sa.prototype.Aya=function(c){var h=
new a.L(this.a,a.sa.O8),f=c.getWidth(),p=c.getHeight(),f=this.oya(f),p=this.nya(p),v=c.rb()?c.rb():0;c=c.vb()?c.vb():0;this.hFa(this.a4(),h,f,p,v,c);h.play()};a.sa.prototype.UOa=function(a,c){var f=this.iX(a),p=2*this.cz,v=2*this.cz,y=0,n=0;f&&(f=f.V3?f.V3():f.Ss(),p=this.oya(f.b),v=this.nya(f.i),y=f.x,n=f.y);this.hFa(a,c,p,v,y,n)};a.sa.prototype.hFa=function(c,h,f,p,v,y){var n=this.iX(c);h?h.aa(a.L.ta,n,n.ac,n.Ua,-v):n.Ua(-v);h?h.aa(a.L.ta,n,n.qc,n.Eb,-y):n.Eb(-y);v=new a.U(this.cz,this.cz,f-2*this.cz,
p-2*this.cz);y=a.sa.nT*f;h?(h.aa(a.L.ta,this.vi,this.vi.getWidth,this.vi.jb,y),h.aa(a.L.ta,this.vi,this.vi.getHeight,this.vi.Mb,p),h.aa(a.L.GJ,this,this.tWa,this.MFa,v),this.YJ==a.sa.XL?h.aa(a.L.ta,this.$c,this.$c.ac,this.$c.Ua,-f):this.YJ==a.sa.$u&&(h.aa(a.L.ta,this.$c,this.$c.ac,this.$c.Ua,f),h.aa(a.L.ta,this.vp,this.vp.ac,this.vp.Ua,f),h.aa(a.L.ta,this.nq,this.nq.ac,this.nq.Ua,f),h.aa(a.L.ta,this.vi,this.vi.ac,this.vi.Ua,-f)),this.tO==a.sa.x7&&(h.aa(a.L.ta,this.vp,this.vp.qc,this.vp.Eb,p),h.aa(a.L.ta,
this.nq,this.nq.qc,this.nq.Eb,p),h.aa(a.L.ta,this.vi,this.vi.qc,this.vi.Eb,-p))):(this.vi.jb(y),this.vi.Mb(p),this.YJ==a.sa.$u&&(this.vi.Ua(-f),this.vp.Ua(f),this.nq.Ua(f)),this.tO==a.sa.x7&&(this.vi.Eb(-p),this.vp.Eb(p),this.nq.Eb(p)),this.MFa(v));v=this.lM(c);var z;c=f;this.YJ==a.sa.$u&&(c=-f);this.tO==a.sa.y7?v?(z=["M",0,0,"L",0,v.qc(),"M",0,v.qc()+a.sa.Bk],f=this.lM(this.Ex[this.Ex.length-1]),z.push("L",0,f.qc()+a.sa.Bk),this.vp.Dy(z),c*=a.sa.nT,z=["M",0,f.qc()+a.sa.Bk,"L",0,p,"L",c,p]):(z=["M",
0,0,"L",0,p,"L",c,p],this.vp.Dy(z)):this.tO==a.sa.x7&&(v?(z=["M",0,0,"L",0,v.qc()+a.sa.Bk,"M",0,v.qc()],f=this.lM(this.Ex[0]),z.push("L",0,f.qc()),this.vp.Dy(z),c*=a.sa.nT,z=["M",0,f.qc(),"L",0,-p,"L",c,-p]):(z=["M",0,0,"L",0,-p,"L",c,-p],this.vp.Dy(z)));h?h.aa(a.L.XC,this.nq,this.nq.Nra,this.nq.Dy,z):this.nq.Dy(z)};a.sa.prototype.MFa=function(c){if(this.$J&&c){var h=new a.fc("pdcp"+this.i_a);h.se(c.x,c.y,c.b,c.i);this.$J.be(h)}this.bka=c};a.sa.prototype.tWa=function(){return this.bka};a.sa.prototype.oya=
function(a){a+=2*this.cz;(this.H$||0==this.H$)&&a<this.H$&&(a=this.H$);this.kP&&a>this.kP&&(a=this.kP);return a};a.sa.prototype.nya=function(a){a+=2*this.cz;(this.f1||0==this.f1)&&a<this.f1&&(a=this.f1);this.jP&&a>this.jP&&(a=this.jP);return a};a.sa.prototype.Bxa=function(a){if(this.vi){var c=this.vi.Hd().clone();c.qa(a);this.vi.Ia(c)}for(var f in this.zU){var p=this.zU[f];p&&(c=p.Hd().clone(),c.qa(a),p.Ia(c))}};a.sa.prototype.TS=function(){this.rda()};a.sa.prototype.SS=function(){this.E$a||this.eMa()};
a.sa.prototype.rda=function(){this.Bxa(a.sa.rQa)};a.sa.prototype.eMa=function(){this.Bxa(this.MA)};a.sa.prototype.oW=function(){for(var c in this.zU){var h=this.zU[c];h&&(c==this.a4()&&this.gd()?(h.$a(this.Mja,this.MA),h.uc(this.Ww,a.sa.lZ),h.In(!0)):(h.$a(this.BBa,this.MA),h.uc(this.DBa,a.sa.lZ),h.In(!1)));var f=this.gd()&&c==this.a4(),p=this.afa(c);p&&p.Zv(f);f?this.yT.B(h):this.$c.Ad(h,0)}};a.sa.prototype.V=function(c){c=a.sa.C.V.call(this,c);c.b/=a.sa.nT;return c};a.sa.prototype.Ob=function(){return this.Fc};
a.f.v(v,a.Jb);v.prototype.Init=function(a,c,f,p){v.C.Init.call(this,a,c);this.iH=p;this.ST=!1;this.cYa=f};v.prototype.Ry=function(c){var h=c.keyCode;if(h==a.KeyboardEvent.Mn||h==a.KeyboardEvent.Kj){var h=this.iH.Ob(),f=this.sm(new a.P(0,0));c=a.Ei.bba(c,this.a,a.MouseEvent.He,this.a.Gc,f.x,f.y);c.target=this;h.eT(c)}};v.prototype.gd=function(){return this.ST};v.prototype.In=function(a){this.ST!=a?(this.ST=a,this.a9a()):this.ST=a};v.prototype.te=function(){var c=[];c.push(this.gd()?a.I.Ja(a.I.pa,"STATE_EXPANDED"):
a.I.Ja(a.I.pa,"STATE_COLLAPSED"));return a.R.lm(this.iH.tya(this.cYa),c)};v.prototype.S_a=function(){this.zg("button");a.m.Vj()||this.Od("label",this.te())};v.prototype.a9a=function(){a.m.Vj()||this.Od("label",this.te())};v.prototype.md=function(a){return this.V(a)};v.prototype.$j=function(){return this.ja()};v.prototype.rh=function(){this.Tc=!0;this.yv||this.aCa();this.yv.show();this.a.$I(this)};v.prototype.mf=function(){this.Tc=!1;this.yv||this.aCa();this.yv.at()};v.prototype.Ae=function(){return this.Tc};
v.prototype.Kd=function(a){return this.iH.Ob().ya.Kd(this,a)};v.prototype.aCa=function(){var c=this.V();this.yv=new a.Mh(this.a,this,new a.U(c.x+1,c.y+1,c.b-2,c.i-2),null,null,!0)};a.f.v(E,a.u);E.prototype.rj=function(a){var c=this.Ya(this.Vd(a));E.C.rj.call(this,a);c&&(c.dv&&c.dv(a),a.stopPropagation())};E.prototype.DJ=function(a){var c=this.Ya(this.Vd(a));c&&(c.Wp&&c.Wp()&&c.JNa&&c.JNa(a),a.stopPropagation())};E.prototype.HM=function(a){E.C.HM.call(this,a);var c=this.Ya(this.Vd(a));c&&c.TS&&c.TS(a)};
E.prototype.GM=function(a){E.C.GM.call(this,a);var c=this.Ya(this.Vd(a));c&&c.SS&&c.SS(a)};E.prototype.CJ=function(a){var c=this.Ya(this.Vd(a));E.C.CJ.call(this,a);c&&(c.dv&&c.dv(a),a.stopPropagation())};a.f.v(D,a.ya);D.prototype.Init=function(a,c){D.C.Init.call(this,a);this.iH=c};D.prototype.Rk=function(c){var h=c.keyCode,f=this.Fc.Fe();return h==a.KeyboardEvent.rg?(h=null,a.u.Ud(c),h=f?f:this.iH.lM(this.iH.Ex[0])):h==a.KeyboardEvent.Mn||h==a.KeyboardEvent.Kj?(f.Ry(c),null):D.C.Rk.call(this,c)};
D.prototype.Kd=function(c,h){if(h.keyCode!=a.KeyboardEvent.kf&&h.keyCode!=a.KeyboardEvent.sg)return c;for(var f=c,p=h.keyCode==a.KeyboardEvent.kf?!0:!1,v=this.iH.Ex,y=-1,n=0;n<v.length;n++)if(c==this.iH.lM(v[n])){y=p?n==v.length-1?-1:n+1:0==n?-1:n-1;break}0<=y&&(f=this.iH.lM(v[y]));return f};a.Zg=function(a,c,f,p,v,y){this.Init(a,c,f,p,v,y)};a.f.v(a.Zg,a.ca);a.Zg.h$a="dvtTrain";a.Zg.bya="#c0cbd5";a.Zg.we="#5d7891";a.Zg.lPa="#61bde3";a.Zg.kPa="#0066ff";a.Zg.vMa=8;a.Zg.PPa=1;a.Zg.GNa=3;a.Zg.Hm=0;a.Zg.pPa=
1;a.Zg.Mga=2;a.Zg.prototype.Init=function(c,h,f,p,v,y){a.Zg.C.Init.call(this,c,null,v);this.Rx=c.cf();this.xn=f;this.TJ=p;this.G9=f.length;this.FT=Array(this.G9);this.BH=0;this.tXa=y;this.WOa(h)};a.Zg.prototype.sLa=function(a){0<=a&&a<this.G9&&this.wza(this.BH,a)};a.Zg.prototype.dv=function(c){a.u.Ud(c);for(var h=0;h<this.FT.length;h++){var f=c.target;if(this.FT[h]===f||this.FT[h]===f.getParent()){c=this.BH;this.wza(c,h);c!=h&&this.v1a();break}}};a.Zg.prototype.wza=function(a,c){this.BH=c;var f=this.FT[a];
f&&(f.ci&&f.ci.setCursor("pointer"),f.Qh&&f.Qh.setCursor("pointer"),f.Zv(!1));if(f=this.FT[c])f.ci&&f.ci.setCursor("default"),f.Qh&&f.Qh.setCursor("default"),f.Zv(!0)};a.Zg.prototype.v1a=function(){var a=new F(this.BH);this.pd(a,!1)};a.Zg.prototype.WOa=function(c){for(var h=a.m.ea(this.a),f=this.kWa(),p=0;p<this.G9;p++){var v;v=this.KMa(f,p==this.BH,this.xn[p]);this.U_a(v);var y=p;h&&(y=this.G9-1-p);c&&c.Xb(v,v);v.ib(y*(f+a.Zg.GNa),this.tXa?0:a.Zg.PPa);this.B(v);this.FT[p]=v}};a.Zg.prototype.dNa=
function(c,h){var f,p,v,y;h?(y=0,v=a.Zg.lPa,p=a.Zg.kPa,this.TJ&&(f=this.TJ[a.Zg.Mga])):(y=1,v=a.Zg.bya,p=a.Zg.we,this.TJ&&(f=this.TJ[a.Zg.Hm]));f&&(f.N(a.j.we)&&(p=f.N(a.j.we)),f.N(a.j.ge)&&(v=f.N(a.j.ge)));f=new a.Rect(this.a,y,y,c-2*y,c-2*y);f.$a(v);f.uc(p);return f};a.Zg.prototype.U_a=function(c){c.qb(a.TouchEvent.Nj,this.dv,!1,this);a.m.cb()||c.qb(a.MouseEvent.He,this.dv,!1,this)};a.Zg.prototype.kWa=function(){if(!this.y9){if(this.TJ){var c=this.TJ[0];c&&(this.y9=a.j.Xe(c.getWidth()))}this.y9||
(this.y9=a.Zg.vMa)}return this.y9};a.Zg.prototype.LMa=function(c,h){return new a.Image(this.a,c,0,0,h,h)};a.Zg.prototype.Ufa=function(c,h,f){var p=this.TJ?this.TJ[h]:null;c=(p=p?p.ZHa():null)?this.LMa(p,c):this.dNa(c,h==a.Zg.Mga);c.setCursor(h==a.Zg.Hm||f?"default":"pointer");return c};a.Zg.prototype.KMa=function(c,h,f){c=new a.ra(this.a,this.Ufa(c,a.Zg.Hm,h),this.Ufa(c,a.Zg.pPa,h),this.Ufa(c,a.Zg.Mga,h),null);c.gt(f);c.K6(!0);h&&c.Zv(h);return c};a.f.v(F,a.Pg);F.oe="dvtTrain";F.prototype.$b=function(){return this.Jo};
a.Em=function(a,c,f,p,v,y){this.Init(a,c,f,p,v,y)};a.f.v(a.Em,a.ca);a.Em.NPa="viewport-bg-color";a.Em.OPa="viewport-border-color";a.Em.H9a="isOverviewDisclosed";a.Em.prototype.Init=function(c,h,f,p,v,y){a.Em.C.Init.call(this,c,null,h);this.wc=f;this.Gd=p;this.So=v;this.xp=y;this.Npa=null};a.Em.prototype.ia=function(){this.d1=!1;this.moa=!0;this.Jc&&(a.m.cb()?(this.Jc.Oc(a.TouchEvent.Nj,this.J$,!1,this),this.Jc.Oc(a.TouchEvent.gq,this.K$,!1,this),this.Jc.Oc(a.TouchEvent.Vl,this.g1,!1,this)):(this.Jc.Oc(a.MouseEvent.gp,
this.J$,!1,this),this.Jc.Oc(a.MouseEvent.pt,this.K$,!1,this),this.Jc.Oc(a.MouseEvent.Oq,this.g1,!1,this),this.Jc.Oc(a.MouseEvent.Zh,this.BEa,!1,this)),this.Jc.be(null));this.Ih();this.Jc=this.Ls=null;var c=new a.fc(this.getId());c.se(0,0,this.So,this.xp);this.Jc=new a.Rect(this.a,0,0,this.So,this.xp);this.Jc.be(c);this.Jc.Yb();this.B(this.Jc);this.Ls=new a.Rect(this.a,0,0,0,0,this.getId()+":viewport");c=this.cJa(a.Em.NPa);this.Ls.uc(this.cJa(a.Em.OPa),null,2);this.Ls.$a(c);this.Ls.dd(!1);this.Jc.B(this.Ls);
a.m.cb()?(this.Jc.qb(a.TouchEvent.Nj,this.J$,!1,this),this.Jc.qb(a.TouchEvent.gq,this.K$,!1,this),this.Jc.qb(a.TouchEvent.Vl,this.g1,!1,this)):(this.Jc.qb(a.MouseEvent.gp,this.J$,!1,this),this.Jc.qb(a.MouseEvent.pt,this.K$,!1,this),this.Jc.qb(a.MouseEvent.Oq,this.g1,!1,this),this.Jc.qb(a.MouseEvent.Zh,this.BEa,!1,this))};a.Em.prototype.gd=function(){return this.ST};a.Em.prototype.In=function(a){this.ST=a};a.Em.prototype.V3=function(){return new a.U(this.wc,this.Gd,this.So,this.xp)};a.Em.prototype.nJa=
function(){var c=this.M8(this.Ls.rb(),this.Ls.vb()),h=this.M8(this.Ls.rb()+this.Ls.getWidth(),this.Ls.vb()+this.Ls.getHeight());return new a.U(c.x,c.y,h.x-c.x,h.y-c.y)};a.Em.prototype.J$=function(c){if(!this.d1&&this.moa){this.d1=!0;var h=this.Cs(c);c=new a.xA(this.nJa(),this.YCa(h),c);this.pd(c)}};a.Em.prototype.K$=function(c){if(this.d1&&this.moa){var h=this.Cs(c);c=new a.xA(this.nJa(),this.YCa(h),c);this.pd(c)}};a.Em.prototype.g1=function(){this.d1&&this.moa&&(this.d1=!1)};a.Em.prototype.BEa=function(){this.g1()};
a.Em.prototype.Cs=function(c){var h,f;a.m.cb()?(c=c.touches,0<c.length&&(h=c[0].pageX,f=c[0].pageY)):(h=c.pageX,f=c.pageY);return this.a.nf(h,f)};a.Em.prototype.M8=function(c,h){var f=0,p=0,v=1,y=1;this.bz&&(f=this.bz.ac(),p=this.bz.qc(),v=this.bz.ng(),y=this.bz.gh());return new a.P((c-f)/v,(h-p)/y)};a.Em.prototype.cJa=function(a){return this.Npa&&"undefined"!=this.Npa[a]?this.Npa[a]:null};a.Em.prototype.YCa=function(c){var h=this.Jc.sm(new a.P(0,0)),f=this.Ls.V(),p=c.x-h.x-f.b/2,h=c.y-h.y-f.i/2;
c=this.M8(p,h);f=this.M8(p+f.b,h+f.i);return new a.U(c.x,c.y,f.x-c.x,f.y-c.y)};a.Em.prototype.V=function(c){var h=new a.U(0,0,this.So,this.xp);return c&&c!==this?this.Cg(h,c):h};a.Em.prototype.Ss=function(a){return this.V(a)};a.I.ND(a.I.rF,{CONTROL_PANEL:"Control Panel",CONTROL_PANEL_ZOOMANDCENTER:"Zoom and Center",CONTROL_PANEL_PAN:"Pan",CONTROL_PANEL_LAYOUT:"Layout",CONTROL_PANEL_LAYOUT_VERT_TOP:"Vertical, Top Down",CONTROL_PANEL_LAYOUT_VERT_BOTTOM:"Vertical, Bottom Up",CONTROL_PANEL_LAYOUT_HORIZ_START:"Horizontal, Start-to-End",
CONTROL_PANEL_LAYOUT_HORIZ_LEFT:"Horizontal, Left-to-Right",CONTROL_PANEL_LAYOUT_HORIZ_RIGHT:"Horizontal, Right-to-Left",CONTROL_PANEL_LAYOUT_RADIAL:"Radial",CONTROL_PANEL_LAYOUT_TREE:"Tree",CONTROL_PANEL_LAYOUT_CIRCLE:"Circle",CONTROL_PANEL_SYNC:"View",CONTROL_PANEL_ZOOMTOFIT:"Zoom to Fit",CONTROL_PANEL_ZOOMIN:"Zoom In",CONTROL_PANEL_ZOOMOUT:"Zoom Out",CONTROL_PANEL_RESET:"Reset Map",CONTROL_PANEL_DRILLUP:"Drill Up",CONTROL_PANEL_DRILLDOWN:"Drill Down",LEGEND:"Legend",OVERVIEW:"Overview",PALETTE:"Palette",
SEARCH:"Search",SEARCH_TEXT:"Search",SEARCH_TEXT_ALTA:"Find",SEARCH_RESULTS:"Search Results [{0}]",SEARCH_RESULTS_ALTA:"{0} Results",SEARCH_RESULTS_CLOSE:"Close",SEARCH_RESULTS_NO_DATA:"No results to display"})})(dvt);
  return dvt;
});