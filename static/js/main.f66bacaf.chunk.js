(this["webpackJsonpdice-roll"]=this["webpackJsonpdice-roll"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=n(7),c=n.n(a),l=(n(13),n(1)),r=n(2),s=n(4),u=n(3),h=n(5),m=(n(14),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("i",{className:"Dice fas fa-dice-".concat(this.props.num," ").concat(this.props.isRolling&&"Dice-shake")})}}]),n}(i.Component)),d=(n(15),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={dice1:"one",dice2:"one",isRolling:!1},i.roll=i.roll.bind(Object(h.a)(i)),i}return Object(r.a)(n,[{key:"roll",value:function(){var e=this,t=["one","two","three","four","five","six"];this.setState({dice1:t[Math.floor(6*Math.random())],dice2:t[Math.floor(6*Math.random())],isRolling:!0}),setTimeout((function(){e.setState({isRolling:!1})}),1e3)}},{key:"render",value:function(){return o.a.createElement("div",{className:"RollDice"},o.a.createElement(m,{num:this.state.dice1,isRolling:this.state.isRolling}),o.a.createElement(m,{num:this.state.dice2,isRolling:this.state.isRolling}),o.a.createElement("button",{onClick:this.roll,disabled:this.state.isRolling},this.state.isRolling?"Rolling ... ":"Roll Dice !"))}}]),n}(i.Component)),f=(n(16),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d,null))}}]),n}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.f66bacaf.chunk.js.map