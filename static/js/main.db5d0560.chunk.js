(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(5),r=n.n(s),i=(n(11),n(3)),o=n(6),u=n.n(o),j=n(0);function d(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(j.jsx)("button",{type:"button",onClick:function(){return n(e)},className:u.a.btn,children:l(e)},e)}))}function l(e){return e?e[0].toUpperCase()+e.slice(1):e}function b(e){var t=e.title,n=e.children;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:t}),n]})}var p=n(2),O=n.n(p);function h(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,s=e.positivePercentage;return Object(j.jsxs)("div",{className:O.a.wrapper,children:[Object(j.jsxs)("span",{className:O.a.span,children:["Good: ",t]}),Object(j.jsxs)("span",{className:O.a.span,children:["Neutral: ",n]}),Object(j.jsxs)("span",{className:O.a.span,children:["Bad: ",a]}),Object(j.jsxs)("div",{className:O.a.div,children:[Object(j.jsxs)("p",{className:O.a.p,children:["Total: ",c]}),Object(j.jsxs)("p",{className:O.a.p,children:["Positive feedback: ",s,"%"]})]})]})}function f(e){var t=e.message;return Object(j.jsx)("span",{children:t})}function x(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),r=Object(i.a)(s,2),o=r[0],u=r[1],l=Object(a.useState)(0),p=Object(i.a)(l,2),O=p[0],x=p[1],v=function(){return n+o+O};return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(b,{title:"Please leave feedback",children:Object(j.jsx)(d,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":return c((function(e){return e+1}));case"neutral":return u((function(e){return e+1}));case"bad":return x((function(e){return e+1}));default:return}}})}),Object(j.jsx)(b,{title:"Statistics",children:v()?Object(j.jsx)(h,{good:n,neutral:o,bad:O,total:v(),positivePercentage:Math.round(100/((n+o+O)/n))}):Object(j.jsx)(f,{message:"No feedback given"})})]})}r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={span:"Statistics_span__2lAFW"}},6:function(e,t,n){e.exports={btn:"FeedbackOptions_btn__C2SOV"}}},[[13,1,2]]]);
//# sourceMappingURL=main.db5d0560.chunk.js.map