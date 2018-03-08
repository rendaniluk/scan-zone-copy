/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","knockout","promise"],function(a,g){a.Jv={};a.Jv.Md={viewPath:"text!views/",viewSuffix:".html",modelPath:"viewModels/",initializeMethod:"initialize",disposeMethod:"dispose",activatedHandler:"handleActivated",attachedHandler:"handleAttached",detachedHandler:"handleDetached",bindingsAppliedHandler:"handleBindingsApplied",deactivatedHandler:"handleDeactivated",transitionCompletedHandler:"handleTransitionCompleted"};o_("ModuleBinding.defaults",a.Jv.Md,a);a.Jv.nDa="oj:blank";(function(){function c(b,
c,e,f,h,k,l){var m=c.canAnimate;if(null==m||m.call(c,b)){var q,n;if(m=c.prepareAnimation.call(c,b))q=m.newViewParent,n=m.oldViewParent;var s=q||e;n&&n!==e?d(f,n):s===e&&k(null);s!==e&&g.virtualElements.setDomNodeChildren(s,[]);h(s);var J=Array.prototype.slice.call(s.childNodes),D=!1,E=function(){D||(D=!0,e!==s&&(p(e,J),a.Components&&(t(J,a.Components.Ug),t(J,a.Components.rd))))},F=k.bind(null,n);b.newViewParent=q;b.oldViewParent=n;b.oldViewNodes=f;b.removeOldView=F;b.insertNewView=E;var G=function(){F();
E();l()};return c.animate.call(c,b).then(G,function(){G();a.D.error("ojModule animation promise was rejected")})}}function b(a,b,c){b=b||a;var d=[];c&&a===b&&(c.parentNode.removeChild(c),d.push(c));g.virtualElements.setDomNodeChildren(b,d)}function d(a,b){a.forEach(function(a){b.appendChild(a)})}function e(a,b,c){if(a&&a[b]){var d={element:c[0],valueAccessor:c[1]};2<c.length&&(d.viewModel=c[2],3<c.length&&(d["boolean"===typeof c[3]?"fromCache":"cachedNodes"]=c[3]));return g.ignoreDependencies(a[b],
a,[d])}}function f(b,c,d){if(null!=b&&(c=a.Jv.Md[c],null!=c&&b&&(c=b[c],"function"===typeof c))){var e=void 0;d&&(e={element:d[0],valueAccessor:d[1]},2<d.length&&(e["boolean"===typeof d[2]?"fromCache":"cachedNodes"]=d[2]));return g.ignoreDependencies(c,b,[e])}}function h(a,b,c){var d=[];for(a=g.virtualElements.firstChild(a);null!=a&&a!=c;a=a.nextSibling)a!=b&&d.push(a);return d}function k(a,b){var c=[],d=g.virtualElements.firstChild(a);l(d,b,function(a){c.push(a)});return c}function l(a,b,c){for(;null!=
a;){var d=g.virtualElements.nextSibling(a),e=a.nodeType;a===b||1!==e&&8!==e||c(a);a=d}}function m(a,b,c,d){var e=g.bindingProvider.instance,f=e.preprocessNode;f&&(l(b,d,function(a){f.call(e,a)}),b=g.virtualElements.firstChild(a));l(b,d,function(a){g.applyBindings(c,a)})}function p(a,b){for(var c=b.length-1;0<=c;c--)g.virtualElements.prepend(a,b[c])}function t(a,b){if(b)for(var c=0;c<a.length;c++){var d=a[c];1===d.nodeType&&b(d)}}function s(a,b){if("string"===typeof a)a=g.utils.parseHtmlFragment(a);
else if(window.DocumentFragment?a instanceof DocumentFragment:a&&11===a.nodeType)a=g.utils.arrayPushAll([],a.childNodes);else if(Array.isArray(a))a=g.utils.arrayPushAll([],a);else throw b(),"The View ("+a+") has an unsupported type";return a}function n(b,c){b=b?b:require;return new Promise(function(d,e){b([c],function(a){d(a)},function(b){a.D.error("ojModule failed to load "+c);e(b)})})}function q(a){return a?new Promise(function(b){a.then(b,b)}):a}g.bindingHandlers.ojModule={init:function(r,l,w,
v,x){function y(a){if(a!=D)throw O;}function z(a){f(a,"disposeMethod",[r,l])}function A(){G&&(G(),G=null)}var B,H,C={},J,D=-1,E,F,G,Q;g.utils.domNodeDisposal.addDisposeCallback(r,function(){z(B);for(var a=Object.keys(C),b=0;b<a.length;b++)z(C[a[b]].Xo);A()});var O=Error("Promise cancelled because ojModule is fetching new View and ViewModel"),I=r;8===r.nodeType&&(I=r.parentElement,g.virtualElements.setDomNodeChildren(r,[]),F=r.nextSibling);g.computed(function(){D++;G||(G=a.Context.getContext(I).Rc().Vc({description:"ojModule binding on a node with the Id "+
r.id+"is loading the module. Binding evaluator: "+l.toString()}));var w=0===D,v=g.utils.unwrapObservable,L=v(l()),T,V,X,Z,ka,U,ga,ja,fa,ba,R,P,K;"string"===typeof L?T=L:(T=v(L.name),V=v(L.viewName),X=v(L.params),Z=v(L.viewModelFactory),ka=v(L.createViewFunction),U=v(L.cacheKey),ga=v(L.lifecycleListener),ja=v(L.animation),P=v(L.view),K=v(L.viewModel),fa=v(L.require));null==fa||fa instanceof Function||(R=fa.viewPath,ba=fa.modelPath,fa=fa.instance);V=null==V?T:V;var M=a.Jv.nDa===V,v=e(ga,"activated",
[r,l]),ca,Y;if(M)ca=Promise.resolve([]),Y=Promise.resolve(null);else{var W=null==U?null:C[U];null!=W&&(delete C[U],ca=Promise.resolve(W.view),Y=Promise.resolve(W.Xo))}null==ca&&null!=P&&(ca=Promise.resolve(P));if(null==Y&&(null!=K?Y=Promise.resolve(K):null!=Z&&(Y=g.ignoreDependencies(Z.createViewModel,Z,[X,l])),null==Y&&null!=T&&(null==ba&&(ba=a.Jv.Md.modelPath),Y=n(fa,ba+T)),null!=Y&&(Y=Y.then(function(a,b){y(a);return b="function"===typeof b?new b(X):f(b,"initializeMethod",[r,l])||b}.bind(null,
D)),null==ca&&null!=ka&&(ca=Y.then(function(a,b){y(a);if(null==b)throw A(),"createViewFunction option cannot be used when the ViewModel is null";var c=b[ka];if(null==c)throw A(),"function specified by the createViewFunction option was not found on the ViewModel";return c.call(b)}.bind(null,D)))),null==ca))if(null!=V)null==R&&(R=a.Jv.Md.viewPath),ca=n(fa,R+V+a.Jv.Md.viewSuffix);else throw A(),Error("View name or view instance must be specified");if(null==ca)throw A(),Error("ojModule is missing a View");
var la;null!=Y&&(la=Y.then(function(a,b){y(a);return f(b,"activatedHandler",[r,l])}.bind(null,D)));Promise.all([ca,Y,v,la,H]).then(function(n,v){if(n==D){var y=v[0];if(null==y)throw A(),"The module's View was resolved to null";var G=s(y,A),I=v[1],O=!1,K,L=h(r,E,F),P=k(r,E);null==J||Q||(O=!0,K=L,E||(E=document.createElement("div"),E.className="oj-helper-module-cache",g.virtualElements.prepend(r,E)));var S=!1,y=function(c){S||(S=!0,O?d(L,E):P.forEach(function(a){g.cleanNode(a)}),b(r,c||r,E),w||(e(ga,
"detached",[r,l,B,K]),f(B,"detachedHandler",[r,l,K]),e(ga,"deactivated",[r,l,B]),f(B,"deactivatedHandler",[r,l])),O?(t(K,a.Components?a.Components.Jq:null),C[J]={Xo:B,view:K}):z(B),B=I,J=U,Q=M)},R=function(b){b=b||r;p(b,G);var c=null!=W;c&&t(G,a.Components?a.Components.Yo:null);e(ga,"attached",[b,l,I,c]);f(I,"attachedHandler",[b,l,c]);c||(c=x.createChildContext(I,void 0,function(a){a.$module=I;a.$params=X}),m(b,G[0],c,E),e(ga,"bindingsApplied",[b,l,I]),f(I,"bindingsAppliedHandler",[b,l]))},T=function(){e(ga,
"transitionCompleted",[r,l,I]);f(I,"transitionCompletedHandler",[r,l]);A()};if(null!=ja){var V=c({node:r,valueAccessor:l,isInitial:w,oldViewModel:B,newViewModel:I},ja,r,L,R,y,T);H=q(V)}else H=void 0;H||(y(null),R(null),T())}}.bind(null,D),function(b,c){c!==O&&null!=c&&(A(),a.D.error(c))}.bind(null,D))},null,{disposeWhenNodeIsRemoved:r});return{controlsDescendantBindings:!0}}};g.virtualElements.allowedBindings.ojModule=!0})()});