(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),s=a(3),i=a.n(s),r=a(4),o=a(5),l=a(6),d=a(8),b=a(7),u=(a(13),a(0)),j=function(t){var e=t.title,a=t.children;return Object(u.jsxs)("section",{children:[Object(u.jsx)("b",{className:"section-title",children:e}),a]})},h=(a(15),function(t){var e=t.options,a=t.onLeaveFeedback;return Object(u.jsx)("ul",{className:"feedback-btn-list",children:e.map((function(t){var e=t[0].toUpperCase()+t.substring(1);return Object(u.jsx)("li",{className:"feedback-btn-list-item",children:Object(u.jsx)("button",{className:"feedback-btn",type:"button",id:t,onClick:a,children:e})},t)}))})}),f=(a(16),function(t){var e=t.message;return Object(u.jsx)("p",{className:"message",children:e})}),O=(a(17),function(t){var e=t.good,a=t.neutral,c=t.bad,n=t.total,s=t.positivePercentage;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"statistics-title",children:"Statistics"}),0===n?Object(u.jsx)(f,{message:"No feedback given"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{className:"statistics-item",children:["Good: ",e]}),Object(u.jsxs)("p",{className:"statistics-item",children:["Neutral: ",a]}),Object(u.jsxs)("p",{className:"statistics-item",children:["Bad: ",c]}),Object(u.jsxs)("p",{className:"statistics-item",children:["Total: ",n]}),Object(u.jsxs)("p",{className:"statistics-item",children:["Positive feedback: ",s,"%"]})]})]})}),m=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(o.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={good:0,neutral:0,bad:0},t.handleOnButtonClick=function(e){var a=e.target.id;t.setState((function(t){return Object(r.a)({},a,t[a]+1)}))},t.countTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(){return Math.round(t.state.good/t.countTotalFeedback()*100)},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,c=t.bad;return Object(u.jsxs)(j,{title:"Please leave feedback",children:[Object(u.jsx)(h,{options:["good","neutral","bad"],onLeaveFeedback:this.handleOnButtonClick}),Object(u.jsx)(O,{good:e,neutral:a,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})}}]),a}(c.Component);a(18);i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.fd94061c.chunk.js.map