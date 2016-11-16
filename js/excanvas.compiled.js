document.createElement("canvas").getContext||function(){function J(){return this.context_||(this.context_=new x(this))}function K(a,b,c){var d=C.call(arguments,2);return function(){return a.apply(b,d.concat(C.call(arguments)))}}function L(a){var b=a.srcElement;switch(a.propertyName){case "width":b.style.width=b.attributes.width.nodeValue+"px";b.getContext().clearRect();break;case "height":b.style.height=b.attributes.height.nodeValue+"px",b.getContext().clearRect()}}function M(a){a=a.srcElement;a.firstChild&& (a.firstChild.style.width=a.clientWidth+"px",a.firstChild.style.height=a.clientHeight+"px")}function y(){return[[1,0,0],[0,1,0],[0,0,1]]}function q(a,b){for(var c=y(),d=0;3>d;d++)for(var f=0;3>f;f++){for(var z=0,e=0;3>e;e++)z+=a[d][e]*b[e][f];c[d][f]=z}return c}function D(a,b){b.fillStyle=a.fillStyle;b.lineCap=a.lineCap;b.lineJoin=a.lineJoin;b.lineWidth=a.lineWidth;b.miterLimit=a.miterLimit;b.shadowBlur=a.shadowBlur;b.shadowColor=a.shadowColor;b.shadowOffsetX=a.shadowOffsetX;b.shadowOffsetY=a.shadowOffsetY; b.strokeStyle=a.strokeStyle;b.globalAlpha=a.globalAlpha;b.arcScaleX_=a.arcScaleX_;b.arcScaleY_=a.arcScaleY_;b.lineScale_=a.lineScale_}function E(a){var b,c=1,a=String(a);if("rgb"==a.substring(0,3)){b=a.indexOf("(",3);var d=a.indexOf(")",b+1),d=a.substring(b+1,d).split(",");b="#";for(var f=0;3>f;f++)b+=F[Number(d[f])];4==d.length&&"a"==a.substr(3,1)&&(c=d[3])}else b=a;return{color:b,alpha:c}}function N(a){switch(a){case "butt":return"flat";case "round":return"round";default:return"square"}}function x(a){this.m_= y();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.fillStyle=this.strokeStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=1*k;this.globalAlpha=1;this.canvas=a;var b=a.ownerDocument.createElement("div");b.style.width=a.clientWidth+"px";b.style.height=a.clientHeight+"px";b.style.overflow="hidden";b.style.position="absolute";a.appendChild(b);this.element_=b;this.lineScale_=this.arcScaleY_=this.arcScaleX_=1}function G(a,b,c,d){a.currentPath_.push({type:"bezierCurveTo", cp1x:b.x,cp1y:b.y,cp2x:c.x,cp2y:c.y,x:d.x,y:d.y});a.currentX_=d.x;a.currentY_=d.y}function r(a,b,c){var d;a:{for(d=0;3>d;d++)for(var f=0;2>f;f++)if(!isFinite(b[d][f])||isNaN(b[d][f])){d=!1;break a}d=!0}d&&(a.m_=b,c&&(a.lineScale_=O(P(b[0][0]*b[1][1]-b[0][1]*b[1][0]))))}function v(a){this.type_=a;this.r1_=this.y1_=this.x1_=this.r0_=this.y0_=this.x0_=0;this.colors_=[]}function H(){}var t=Math,h=t.round,A=t.sin,B=t.cos,P=t.abs,O=t.sqrt,k=10,s=k/2,C=Array.prototype.slice,I={init:function(a){/MSIE/.test(navigator.userAgent)&& !window.opera&&(a=a||document,a.createElement("canvas"),a.attachEvent("onreadystatechange",K(this.init_,this,a)))},init_:function(a){a.namespaces.g_vml_||a.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML");a.namespaces.g_o_||a.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML");if(!a.styleSheets.ex_canvas_){var b=a.createStyleSheet();b.owningElement.id="ex_canvas_";b.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}"}a= a.getElementsByTagName("canvas");for(b=0;b<a.length;b++)this.initElement(a[b])},initElement:function(a){if(!a.getContext){a.getContext=J;a.innerHTML="";a.attachEvent("onpropertychange",L);a.attachEvent("onresize",M);var b=a.attributes;b.width&&b.width.specified?a.style.width=b.width.nodeValue+"px":a.width=a.clientWidth;b.height&&b.height.specified?a.style.height=b.height.nodeValue+"px":a.height=a.clientHeight}return a}};I.init();for(var F=[],e=0;16>e;e++)for(var w=0;16>w;w++)F[16*e+w]=e.toString(16)+ w.toString(16);e=x.prototype;e.clearRect=function(){this.element_.innerHTML=""};e.beginPath=function(){this.currentPath_=[]};e.moveTo=function(a,b){var c=this.getCoords_(a,b);this.currentPath_.push({type:"moveTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};e.lineTo=function(a,b){var c=this.getCoords_(a,b);this.currentPath_.push({type:"lineTo",x:c.x,y:c.y});this.currentX_=c.x;this.currentY_=c.y};e.bezierCurveTo=function(a,b,c,d,f,e){f=this.getCoords_(f,e);a=this.getCoords_(a,b);c=this.getCoords_(c, d);G(this,a,c,f)};e.quadraticCurveTo=function(a,b,c,d){a=this.getCoords_(a,b);c=this.getCoords_(c,d);d={x:this.currentX_+2/3*(a.x-this.currentX_),y:this.currentY_+2/3*(a.y-this.currentY_)};G(this,d,{x:d.x+(c.x-this.currentX_)/3,y:d.y+(c.y-this.currentY_)/3},c)};e.arc=function(a,b,c,d,f,e){var c=c*k,h=e?"at":"wa",j=a+B(d)*c-s,i=b+A(d)*c-s,d=a+B(f)*c-s,f=b+A(f)*c-s;j==d&&!e&&(j+=0.125);a=this.getCoords_(a,b);j=this.getCoords_(j,i);d=this.getCoords_(d,f);this.currentPath_.push({type:h,x:a.x,y:a.y,radius:c, xStart:j.x,yStart:j.y,xEnd:d.x,yEnd:d.y})};e.rect=function(a,b,c,d){this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+d);this.lineTo(a,b+d);this.closePath()};e.strokeRect=function(a,b,c,d){var f=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+d);this.lineTo(a,b+d);this.closePath();this.stroke();this.currentPath_=f};e.fillRect=function(a,b,c,d){var f=this.currentPath_;this.beginPath();this.moveTo(a,b);this.lineTo(a+c,b);this.lineTo(a+c,b+d);this.lineTo(a, b+d);this.closePath();this.fill();this.currentPath_=f};e.createLinearGradient=function(a,b,c,d){var f=new v("gradient");f.x0_=a;f.y0_=b;f.x1_=c;f.y1_=d;return f};e.createRadialGradient=function(a,b,c,d,f,e){var h=new v("gradientradial");h.x0_=a;h.y0_=b;h.r0_=c;h.x1_=d;h.y1_=f;h.r1_=e;return h};e.drawImage=function(a,b){var c,d,f,e,n,j,i,g;f=a.runtimeStyle.width;e=a.runtimeStyle.height;a.runtimeStyle.width="auto";a.runtimeStyle.height="auto";var l=a.width,m=a.height;a.runtimeStyle.width=f;a.runtimeStyle.height= e;if(3==arguments.length)c=arguments[1],d=arguments[2],n=j=0,i=f=l,g=e=m;else if(5==arguments.length)c=arguments[1],d=arguments[2],f=arguments[3],e=arguments[4],n=j=0,i=l,g=m;else if(9==arguments.length)n=arguments[1],j=arguments[2],i=arguments[3],g=arguments[4],c=arguments[5],d=arguments[6],f=arguments[7],e=arguments[8];else throw Error("Invalid number of arguments");var p=this.getCoords_(c,d),u=[];u.push(" <g_vml_:group",' coordsize="',10*k,",",10*k,'"',' coordorigin="0,0"',' style="width:',10, "px;height:",10,"px;position:absolute;");if(1!=this.m_[0][0]||this.m_[0][1]){var s=[];s.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",h(p.x/k),",","Dy=",h(p.y/k),"");var q=this.getCoords_(c+f,d),r=this.getCoords_(c,d+e);c=this.getCoords_(c+f,d+e);p.x=t.max(p.x,q.x,r.x,c.x);p.y=t.max(p.y,q.y,r.y,c.y);u.push("padding:0 ",h(p.x/k),"px ",h(p.y/k),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",s.join(""),", sizingmethod='clip');")}else u.push("top:", h(p.y/k),"px;left:",h(p.x/k),"px;");u.push(' ">','<g_vml_:image src="',a.src,'"',' style="width:',k*f,"px;"," height:",k*e,'px;"',' cropleft="',n/l,'"',' croptop="',j/m,'"',' cropright="',(l-n-i)/l,'"',' cropbottom="',(m-j-g)/m,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",u.join(""))};e.stroke=function(a){var b=[],c=E(a?this.fillStyle:this.strokeStyle),d=c.color,c=c.alpha*this.globalAlpha;b.push("<g_vml_:shape",' filled="',!!a,'"',' style="position:absolute;width:',10, "px;height:",10,'px;"',' coordorigin="0 0" coordsize="',10*k," ",10*k,'"',' stroked="',!a,'"',' path="');for(var f=null,e=null,n=null,j=null,i=0;i<this.currentPath_.length;i++){var g=this.currentPath_[i];switch(g.type){case "moveTo":b.push(" m ",h(g.x),",",h(g.y));break;case "lineTo":b.push(" l ",h(g.x),",",h(g.y));break;case "close":b.push(" x ");g=null;break;case "bezierCurveTo":b.push(" c ",h(g.cp1x),",",h(g.cp1y),",",h(g.cp2x),",",h(g.cp2y),",",h(g.x),",",h(g.y));break;case "at":case "wa":b.push(" ", g.type," ",h(g.x-this.arcScaleX_*g.radius),",",h(g.y-this.arcScaleY_*g.radius)," ",h(g.x+this.arcScaleX_*g.radius),",",h(g.y+this.arcScaleY_*g.radius)," ",h(g.xStart),",",h(g.yStart)," ",h(g.xEnd),",",h(g.yEnd))}if(g){if(null==f||g.x<f)f=g.x;if(null==n||g.x>n)n=g.x;if(null==e||g.y<e)e=g.y;if(null==j||g.y>j)j=g.y}}b.push(' ">');if(a)if("object"==typeof this.fillStyle){var d=this.fillStyle,l=0,g=c=a=0,m=1;"gradient"==d.type_?(l=d.x1_/this.arcScaleX_,f=d.y1_/this.arcScaleY_,i=this.getCoords_(d.x0_/this.arcScaleX_, d.y0_/this.arcScaleY_),l=this.getCoords_(l,f),l=180*Math.atan2(l.x-i.x,l.y-i.y)/Math.PI,0>l&&(l+=360),1E-6>l&&(l=0)):(i=this.getCoords_(d.x0_,d.y0_),g=n-f,m=j-e,a=(i.x-f)/g,c=(i.y-e)/m,g/=this.arcScaleX_*k,m/=this.arcScaleY_*k,i=t.max(g,m),g=2*d.r0_/i,m=2*d.r1_/i-g);if(f=d.colors_){f.sort(function(a,b){return a.offset-b.offset});for(var e=f.length,j=f[0].color,n=f[e-1].color,p=f[0].alpha*this.globalAlpha,s=f[e-1].alpha*this.globalAlpha,q=[],i=0;i<e;i++){var r=f[i];q.push(r.offset*m+g+" "+r.color)}b.push('<g_vml_:fill type="', d.type_,'"',' method="none" focus="100%"',' color="',j,'"',' color2="',n,'"',' colors="',q.join(","),'"',' opacity="',s,'"',' g_o_:opacity2="',p,'"',' angle="',l,'"',' focusposition="',a,",",c,'" />')}}else b.push('<g_vml_:fill color="',d,'" opacity="',c,'" />');else a=this.lineScale_*this.lineWidth,1>a&&(c*=a),b.push("<g_vml_:stroke",' opacity="',c,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',N(this.lineCap),'"',' weight="',a,'px"',' color="',d,'" />');b.push("</g_vml_:shape>"); this.element_.insertAdjacentHTML("beforeEnd",b.join(""))};e.fill=function(){this.stroke(!0)};e.closePath=function(){this.currentPath_.push({type:"close"})};e.getCoords_=function(a,b){var c=this.m_;return{x:k*(a*c[0][0]+b*c[1][0]+c[2][0])-s,y:k*(a*c[0][1]+b*c[1][1]+c[2][1])-s}};e.save=function(){var a={};D(this,a);this.aStack_.push(a);this.mStack_.push(this.m_);this.m_=q(y(),this.m_)};e.restore=function(){D(this.aStack_.pop(),this);this.m_=this.mStack_.pop()};e.translate=function(a,b){r(this,q([[1, 0,0],[0,1,0],[a,b,1]],this.m_),!1)};e.rotate=function(a){var b=B(a),a=A(a);r(this,q([[b,a,0],[-a,b,0],[0,0,1]],this.m_),!1)};e.scale=function(a,b){this.arcScaleX_*=a;this.arcScaleY_*=b;r(this,q([[a,0,0],[0,b,0],[0,0,1]],this.m_),!0)};e.transform=function(a,b,c,d,e,h){r(this,q([[a,b,0],[c,d,0],[e,h,1]],this.m_),!0)};e.setTransform=function(a,b,c,d,e,h){r(this,[[a,b,0],[c,d,0],[e,h,1]],!0)};e.clip=function(){};e.arcTo=function(){};e.createPattern=function(){return new H};v.prototype.addColorStop=function(a, b){b=E(b);this.colors_.push({offset:a,color:b.color,alpha:b.alpha})};G_vmlCanvasManager=I;CanvasRenderingContext2D=x;CanvasGradient=v;CanvasPattern=H}();