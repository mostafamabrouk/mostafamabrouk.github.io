(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,n,t){e.exports=t(38)},38:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(17),o=t.n(c),u=t(2),i=t(18),l=t(8),s=t.n(l),f=t(3),m=t(4);function d(){var e=Object(f.a)(["\n    width: 120px;\n    height: 160px;\n    border: 2px solid #000;\n    margin: 0 8px;\n    text-transform: uppercase;\n    line-height: 160px;\n    font-family: Helvetica;\n    font-size: 96px;\n    color: #009680;\n    text-align: center;\n    cursor: move;\n    transition: 0.2s all ease;\n    ","\n    ","\n    ","\n  "]);return d=function(){return e},e}var p=a.a.forwardRef(function(e,n){var t=e.char,r=e.opaque,c=e.error,o=e.success,u=m.a.div(d(),r&&"opacity: 0.25;",c&&"border-color: #FF0000; opacity: 0.42;",o&&"border-color: #6CBC36; color: #000;");return a.a.createElement(u,{ref:n},t)});function g(){var e=Object(f.a)(["\n  display: block;\n  padding: 15px;\n  border: none;\n  background: #009680;\n  color: #fff;\n  margin: 20px auto;\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: 200;\n  letter-spacing: 3px;\n  cursor: pointer;\n  transition: 0.2s all ease;\n  &:hover {\n    background: #000;\n  }\n"]);return g=function(){return e},e}var b=m.a.button(g()),h=function(e){return a.a.createElement(b,{onClick:e.onClick},e.children)};function v(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n"]);return v=function(){return e},e}var O=m.a.div(v());function E(){var e=Object(f.a)(["\n  text-align: center;\n  font-size: 20px;\n  margin: 0 0 30px;\n"]);return E=function(){return e},e}function j(){var e=Object(f.a)(["\n  padding: 30px;\n  font-family: Helvetica;\n"]);return j=function(){return e},e}function x(){var e=Object(f.a)(["\n  font-family: Helvetica;\n  font-size: 32px;\n  color: #00648f;\n  text-align: center;\n  display: block;\n  margin: 0 0 30px;\n"]);return x=function(){return e},e}function y(){var e=Object(f.a)(["\n  font-family: Helvetica;\n  font-size: 48px;\n  color: #00648f;\n  text-align: center;\n  font-weight: 300;\n  display: block;\n  margin: 0 0 30px;\n"]);return y=function(){return e},e}var w=m.a.h3(y()),k=m.a.p(x()),C=m.a.div(j()),S=m.a.p(E()),M=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(w,null,"Create the word by dragging letters into the empty boxes"),a.a.createElement(k,null,"You have one minute"))};function D(){var e=Object(f.a)(["\n  display: flex;\n  list-style: none;\n  justify-content: center;\n  padding: 0;\n  li {\n    margin: 10px;\n  }\n"]);return D=function(){return e},e}var F=m.a.ul(D()),R=function(e){var n=e.wins,t=e.loses;return a.a.createElement(F,null,a.a.createElement("li",null,a.a.createElement("strong",null,"Win:")," ",n),a.a.createElement("li",null,a.a.createElement("strong",null,"Loses:")," ",t))};function W(){var e=Object(f.a)(["\n  opacity: 0.5;\n  font-family: Helvetica;\n  font-size: 48px;\n  color: #00648f;\n  text-align: center;\n  transition: 0.2s all ease;\n  margin: 0 0 30px;\n  ","\n"]);return W=function(){return e},e}var G=m.a.div(W(),function(e){return e.isCompleted?"color: #FF0000;":""}),$=function(e){var n=e.minutes,t=e.seconds,r=e.isCompleted;return a.a.createElement(G,{isCompleted:r},n,":",t)};function z(){var e=Object(f.a)(["\n  padding: 10px;\n  background: #eee;\n  display: table;\n  margin: auto;\n  ","\n  ","\n"]);return z=function(){return e},e}var B=m.a.p(z(),function(e){return e.error&&"color: #F00; background:#FFEBEE"},function(e){return e.success&&"color: #6CBC36; background:#E8F5E9"}),I=function(e){var n=e.message,t=e.error,r=e.success;return a.a.createElement(B,{error:t,success:r},n)},H=function(e){var n=e.correctWord,t=e.word,c=e.hint,o=e.onError,l=e.onCorrectMove,f=e.isRunning,m=Object(r.useState)(n.split("").map(function(e,n){return{accepts:{char:e,index:n,type:"char"},lastDroppedItem:null}})),d=Object(u.a)(m,2),p=d[0],g=d[1],b=Object(r.useState)(t.split("").map(function(e,n){return{char:e,index:n,type:"char"}})),h=Object(u.a)(b,1)[0],v=Object(r.useState)([]),E=Object(u.a)(v,2),j=E[0],x=E[1],y=Object(r.useState)([]),w=Object(u.a)(y,2),k=w[0],C=w[1];function M(e,n){return!!k.find(function(t){return t.char===e&&t.index===n})}var D=Object(r.useCallback)(function(e,t){var r=t.char;n.split("")[e]===r?(x(s()(j,r?{$push:[t]}:{$push:[]})),C(s()(k,r?{$push:[t]}:{$push:[]})),g(s()(p,Object(i.a)({},e,{lastDroppedItem:{$set:t}})))):(x(s()(j,r?{$push:[t]}:{$push:[]})),o())},[j,k,p]);return Object(r.useEffect)(function(){k.length>0&&l(n.length-k.length)},[k]),a.a.createElement("div",null,a.a.createElement(O,null,h.map(function(e,n){var t=e.char;return a.a.createElement(P,{char:t,index:n,isDropped:M(t,n),key:n,isRunning:f,error:!!j.find(function(e){return e.char===t&&e.index===n})&&!k.find(function(e){return e.char===t&&e.index===n})})})),a.a.createElement(S,null,a.a.createElement("strong",null,"Hint: "),c),a.a.createElement(O,null,p.map(function(e,n){var t=e.accepts,r=e.lastDroppedItem;return a.a.createElement(K,{accept:t,lastDroppedItem:r,onDrop:function(e){return D(n,e)},key:n})})))},q=t(7),T=t(23),J=function(e){for(var n,t,r=e.length;0!==r;)t=Math.floor(Math.random()*r),n=e[r-=1],e[r]=e[t],e[t]=n;return e},L=function(){var e=["Ankra","Cairo","Dubai","Berlin","Paris","London","Madrid","Rome","New York","Tokyo","Jeddah","Mekka"],n="qwertyuiopasdfghjklzxcvbnm".split(""),t=e[Math.floor(Math.random()*e.length)].toLowerCase(),r=t;if(t.length<9)for(var a=9-t.length,c=0;c<a;c++)r+=n[Math.floor(Math.random()*n.length)];return{word:r=J(r.split("")).join(""),correctWord:t,hint:"It's a famous city"}};function Y(){var e=Object(f.a)(["\n    padding: 10px;\n    background: #eee;\n    display: table;\n    margin: auto;\n    ","\n    ","\n  "]);return Y=function(){return e},e}var A=function(e){var n=e.isRunning,t=e.onSuccess,c=e.onGameOver,o=e.duration,i=Object(r.useState)(3),l=Object(u.a)(i,2),s=l[0],f=l[1],d=Object(r.useState)(L()),p=Object(u.a)(d,1)[0],g=p.word,b=p.correctWord,h=p.hint;console.log("word",g),console.log("correctWord",b);var v=Object(r.useState)({message:a.a.createElement("span",null,"Wow, start dragging your first card. Choose your moves wisely as you have only ",a.a.createElement("strong",null,"3")," trials"),error:!1}),O=Object(u.a)(v,2),E=O[0],j=O[1];Object(r.useEffect)(function(){0===s?(c(),j({message:"Game Over!",error:!0,success:!1})):s<3&&j({message:a.a.createElement("span",null,"Ops, Wrong choice!! Choose your moves wisely. You only have"," ",a.a.createElement("strong",null,s)," trials left."),error:!0,success:!1})},[s]);m.a.p(Y(),E.error&&"color: #F00; background:#E57373 ",E.success&&"color: #6CBC36; background: #81C784;");return a.a.createElement(r.Fragment,null,a.a.createElement(Q,{seconds:o,isRunning:n,onTimerCompleted:function(){c(),j({message:"Timeout, Game Over!",error:!0,success:!1})}}),a.a.createElement(M,null),a.a.createElement(q.b,{backend:T.a},a.a.createElement(H,{word:g,correctWord:b,hint:h,isRunning:n,onCorrectMove:function(e){0===e?(t(),j({message:a.a.createElement("span",null,"Nice guess, congratulations"),error:!1,success:!0})):j(1===e?{message:a.a.createElement("span",null,"Great, ",a.a.createElement("strong",null,"last character"),". Almost there..."),error:!1,success:!1}:{message:a.a.createElement("span",null,"Great, Only ",a.a.createElement("strong",null,e)," characters remaining"),error:!1,success:!1})},onError:function(){f(s-1)}}),a.a.createElement(I,E)))},N=function(e){var n=e.duration,t=Object(r.useState)(L()),c=Object(u.a)(t,1)[0],o=c.word,i=c.correctWord,l=Object(r.useRef)();return a.a.createElement("div",null,a.a.createElement(Q,{seconds:n,isRunning:!1}),a.a.createElement(M,null),a.a.createElement(O,null,o.split("").map(function(e,n){return a.a.createElement(p,{ref:l,char:null,key:n})})),a.a.createElement(O,null,i.split("").map(function(e,n){return a.a.createElement(p,{ref:l,char:null,key:n})})))},P=function(e){var n=e.isDropped,t=e.char,r=e.index,c=e.error,o=Object(q.c)({item:{char:t,index:r,type:"char"},collect:function(e){return{opacity:e.isDragging()}}}),i=Object(u.a)(o,2),l=i[0].opaque,s=i[1];return a.a.createElement(p,Object.assign({ref:n?null:s},e,{char:t,error:c,opaque:l||n}))},K=function(e){var n=e.onDrop,t=e.lastDroppedItem,r=Object(q.d)({accept:"char",drop:n,collect:function(e){return{isOver:e.isOver()}}}),c=Object(u.a)(r,2),o=c[0].isOver,i=c[1];return a.a.createElement(p,Object.assign({ref:t?null:i,char:t?t.char:null,success:!!t},e,{opaque:o}))},Q=function(e){var n=e.onTimerCompleted,t=e.isRunning,c=Object(r.useState)(!1),o=Object(u.a)(c,2),i=o[0],l=o[1],s=Object(r.useState)("00"),f=Object(u.a)(s,2),m=f[0],d=f[1],p=Object(r.useState)("00"),g=Object(u.a)(p,2),b=g[0],h=g[1],v=Object(r.useState)(1e3*e.seconds),O=Object(u.a)(v,2),E=O[0],j=O[1],x=Object(r.useState)(new Date),y=Object(u.a)(x,2),w=y[0],k=y[1];Object(r.useEffect)(function(){var n=e.seconds%60,t=Math.floor(e.seconds/60);d(n<10?"0".concat(n):"".concat(n)),h(t<10?"0".concat(t):"".concat(t)),k(new Date)},[e.seconds]);return Object(r.useEffect)(function(){t&&setTimeout(function(){var t=1e3*e.seconds-(new Date-w);if(t>=0&&t<E){0===Math.floor(t/1e3)&&(l(!0),n()),j(t);var r=Math.floor(t/1e3)%60,a=Math.floor(Math.floor(t/1e3)/60);d(r<10?"0".concat(r):"".concat(r)),h(a<10?"0".concat(a):"".concat(a))}},50)},[E,t]),a.a.createElement($,{minutes:b,seconds:m,isCompleted:i})},U=function(e){var n=e.duration,t=Object(r.useState)("notStarted"),c=Object(u.a)(t,2),o=c[0],i=c[1],l=Object(r.useState)(0),s=Object(u.a)(l,2),f=s[0],m=s[1],d=Object(r.useState)(0),p=Object(u.a)(d,2),g=p[0],b=p[1];return a.a.createElement(C,null,a.a.createElement(R,{wins:f,loses:g}),"notStarted"===o?a.a.createElement(r.Fragment,null,a.a.createElement(N,{duration:n}),a.a.createElement(h,{onClick:function(){return i("running")}},"Start Game")):a.a.createElement(A,{isRunning:"running"===o,onSuccess:function(){i("solved"),m(f+1)},onGameOver:function(){i("gameOver"),b(g+1)},duration:n}),("gameOver"===o||"solved"===o)&&a.a.createElement(h,{onClick:function(){return i("notStarted")}},"Reset Game"))};var V=function(){return a.a.createElement(U,{duration:120})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.4b58fe65.chunk.js.map