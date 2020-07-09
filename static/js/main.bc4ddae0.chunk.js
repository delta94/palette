(this.webpackJsonppalette=this.webpackJsonppalette||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(7),r=a.n(o),c=(a(14),a(5)),s=a(1),i=a(2),u=a(4),m=a(3),d=(a(15),a(16),a(17),a(18),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={color:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.handleChange,a=this.state.color;return l.a.createElement("div",{className:"search"},l.a.createElement("input",{type:"search",onChange:t,placeholder:"Search by color, font or text",spellCheck:"false",onFocus:function(){return e.setState({color:"0081ff"})},onBlur:function(){return e.setState({color:"e6e6e6"})},style:{border:"1px solid #".concat(a)}}))}}]),a}(l.a.Component)),h=function(e){return l.a.createElement("nav",{className:"top-nav-container"},l.a.createElement("nav",{className:"top-nav"},l.a.createElement("div",{className:"logo rainbow"},l.a.createElement("i",{className:"fas fa-palette"}),"Palette"),l.a.createElement(d,{handleChange:e.handleChange}),l.a.createElement("div",{className:"icons"},l.a.createElement("a",{href:"https://juneseong.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"far fa-folder"})),l.a.createElement("a",{href:"https://github.com/juneseong/palette",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-github"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/juneseong",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-linkedin-in"})),l.a.createElement("a",{href:"https://angel.co/u/june-seong",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fab fa-angellist"})))))},f=a(8),p=(a(19),a(20),a(21),a(22),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={text:"Copy"},e.handleCopy=function(){e.setState({text:"Copied!"});var t="html"===e.props.type?document.querySelector("#html-code").innerText:document.querySelector("#css-code").innerText,a=document.createElement("input");a.setAttribute("value",t),document.body.appendChild(a),a.select();var n=document.execCommand("copy");return document.body.removeChild(a),setTimeout(e.returnText,2500),n},e.returnText=function(){e.setState({text:"Copy"})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.text;return l.a.createElement("button",{onClick:this.handleCopy},e)}}]),a}(l.a.Component)),y=function(e){var t=Object.assign({},e).style,a=t.font,n=t.size,o=t.weight,r=t.style,c=t.decoration,s=t.color,i=t.category;return l.a.createElement("div",{className:"code-container"},l.a.createElement("div",{className:"code-instruction-code"},l.a.createElement("div",{className:"code-instruction"},l.a.createElement(p,{type:"html"})," and paste the code into the ","<head>"," of your html."),l.a.createElement("div",{className:"code",id:"html-code"},'<link href="https://fonts.googleapis.com/css2?family=',l.a.createElement("span",null,a.split(" ").join("+")+":wght@"+o),'&display=swap" rel="stylesheet">')),l.a.createElement("div",{className:"code-instruction-code"},l.a.createElement("div",{className:"code-instruction"},l.a.createElement(p,{type:"css"})," and paste the code into your CSS file."),l.a.createElement("div",{className:"code",id:"css-code"},l.a.createElement("p",null,a?"font-family: '".concat(a,"', ").concat(i,";"):null),l.a.createElement("p",null,n?"font-size: ".concat(n,";"):null),l.a.createElement("p",null,o?"font-weight: ".concat(o,";"):null),l.a.createElement("p",null,"normal"!==r?"font-style: ".concat(r,";"):null),l.a.createElement("p",null,"none"!==c?"text-decoration: ".concat(c,";"):null),l.a.createElement("p",null,s?"color: #".concat(s,";"):null))))},v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n,o,r,i,u,m,d,h;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){n.setState(Object(c.a)({},t,e.target.value))},n.handleSubmit=function(e,t){if(e.preventDefault(),n.isValid()){var a=n.props,l=a.handleSubmit,o=a.style,r=a.closeEditForm;l("styles",t,o.id),r()}},n.handleBlur=function(){var e=n.state.size;1!==e.length&&2!==e.length||!(parseInt(e)>0||parseInt(e)<100)||n.setState({size:e+"px"}),n.setState({sizeClass:""})},n.isValid=function(){var e=n.state,t=e.color,a=e.size,l=a.slice(a.length-2),o=a.slice(0,a.length-2);return"px"!==l||o!==parseInt(o).toString()?(n.setState({sizeClass:"error"}),!1):3===t.length||6===t.length||(n.setState({colorClass:"error"}),!1)},"create"===e.type?(o="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a diam eleifend mauris porta posuere a eu lectus. Suspendisse pellentesque diam tempor enim rutrum pretium.",r="Roboto",i="15px",u="400",m="normal",d="none",h="000000"):(o=e.style.text,r=e.style.font,i=e.style.size,u=e.style.weight,m=e.style.style,d=e.style.decoration,h=e.style.color),n.state={text:o,font:r,size:i,weight:u,style:m,decoration:d,color:h,fonts:null,weights:null,category:null,sizeClass:"",colorClass:""},n.textarea=l.a.createRef(),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.textarea.current.focus(),fetch("https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=".concat("AIzaSyCOtyEvsXtL3kzotZF15oVNzl2oCVcZEU4")).then((function(e){return e.json()})).then((function(t){for(var a=[],n=0;n<40;n++)a.push(t.items[n]);e.setState({fonts:a});for(var l=0;l<a.length;l++){var o=a[l],r=o.family,c=o.variants;if(r===e.state.font){var s=c.filter((function(e){return e.length<4||"regular"===e})),i=s.indexOf("regular");null!==i&&(s[i]="400");var u=o.category;e.setState({category:u,weights:s});break}}}));var t=document.querySelector(".google-fonts-link");if(!t){(t=document.createElement("link")).rel="stylesheet",t.classList.add("google-fonts-link"),document.getElementsByTagName("head")[0].appendChild(t),t.href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"}}},{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.font,l=a.weight;if(t.font!==n||t.weight!==l){var o=document.querySelector(".google-fonts-link"),r=o.href;n.split(" ").length>1&&(n=n.split(" ").join("+"));var c=r.indexOf("&display=swap");r="".concat(r.slice(0,c),"&family=").concat(n,":wght@").concat(l).concat(r.slice(c)),o.href=r}}},{key:"render",value:function(){var e=this,t=this.props,a=t.type,n=t.handleSubmit,o=t.closeCreateForm,r=t.closeEditForm,c=t.code,s=this.state,i=s.text,u=s.font,m=s.size,d=s.weight,h=s.style,f=s.decoration,p=s.color,v=s.fonts,g=s.weights,E=s.sizeClass,b=s.colorClass;return l.a.createElement(l.a.Fragment,null,c?l.a.createElement(y,{style:this.state}):l.a.createElement("form",null,l.a.createElement("div",{className:"form-style"},l.a.createElement("div",null,l.a.createElement("i",{className:"fas fa-font"}),l.a.createElement("select",{className:"font-select",value:u,onChange:function(t){return e.setState({font:t.target.value})}},v?v.map((function(e,t){return l.a.createElement("option",{key:"font-option-".concat(t)},e.family)})):null)),l.a.createElement("div",null,l.a.createElement("span",{className:"material-icons"},"format_size"),l.a.createElement("input",{className:"size-input ".concat(E),value:m,onChange:function(t){return e.setState({size:t.target.value})},type:"text",maxLength:"4",spellCheck:"false",onFocus:function(){return e.setState({sizeClass:"focused"})},onBlur:this.handleBlur})),l.a.createElement("div",null,l.a.createElement("i",{className:"fas fa-bold"}),l.a.createElement("select",{value:d,onChange:function(t){return e.setState({weight:t.target.value})}},g?this.state.weights.map((function(e,t){return l.a.createElement("option",{key:"weight-option-".concat(t)},e)})):null)),l.a.createElement("div",{className:"font-style-icon"},l.a.createElement("i",{className:"fas fa-italic",style:{color:"italic"===h?"#0081ff":""},onClick:function(){return e.setState({style:"normal"===h?"italic":"normal"})}}),l.a.createElement("i",{className:"fas fa-underline",style:{color:"underline"===f?"#0081ff":""},onClick:function(){return e.setState({decoration:"underline"===f?"none":"underline"})}})),l.a.createElement("div",{className:"color-input-form ".concat(b)},l.a.createElement("i",{className:"fas fa-palette"}),"#",l.a.createElement("input",{className:"color-input",type:"text",maxLength:"6",spellCheck:"false",value:p,onChange:function(t){return e.setState({color:t.target.value})},onFocus:function(){return e.setState({colorClass:"focused"})},onBlur:function(){return e.setState({colorClass:""})}}))),l.a.createElement("textarea",{ref:this.textarea,placeholder:"Add text",value:i,onChange:function(t){return e.handleChange(t,"text")},spellCheck:"false",style:{fontFamily:u,fontSize:m,fontWeight:d,fontStyle:h,textDecoration:f,color:"#"+p}})),"create"===a?l.a.createElement("div",{className:"cancel-save-btn"},l.a.createElement("button",{onClick:o},"Cancel"),l.a.createElement("button",{onClick:function(){return e.isValid()?n("styles",e.state):null}},"Save")):l.a.createElement("div",{className:"cancel-save-btn"},l.a.createElement("button",{onClick:r},"Cancel"),l.a.createElement("button",{onClick:function(t){return e.handleSubmit(t,e.state)}},"Save")))}}]),a}(l.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={code:!1},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.type,n=t.handleSubmit,o=t.closeCreateForm,r=t.closeEditForm,c=t.style,s=this.state.code;return l.a.createElement("div",{className:"form-container"},l.a.createElement("div",{className:"form-header"},l.a.createElement("ul",null,l.a.createElement("li",{className:s?"":"active",onClick:function(){return e.setState({code:!1})}},"create"===a?"Add Style":"Edit Style"),l.a.createElement("li",{className:s?"active":"",onClick:function(){return e.setState({code:!0})}},"Code"),l.a.createElement("li",null))),l.a.createElement(v,{handleSubmit:n,closeCreateForm:o,closeEditForm:r,type:a,style:c,code:s}))}}]),a}(l.a.Component),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={editing:!1},e.closeEditForm=function(){e.setState({editing:!1})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.style,n=t.handleDelete,o=t.handleSubmit,r=this.state.editing;return l.a.createElement(l.a.Fragment,null,r?l.a.createElement(g,{type:"edit",style:a,closeEditForm:this.closeEditForm,handleSubmit:o}):l.a.createElement("div",{className:"style"},l.a.createElement("div",{className:"edit-delete-style"},l.a.createElement("button",{onClick:function(){return e.setState({editing:!0})}},"Edit"),l.a.createElement("button",{onClick:function(){return n(a.id,"styles")}},"Delete")),l.a.createElement("span",{style:{fontFamily:a.font,fontSize:a.size,fontWeight:a.weight,fontStyle:a.style,textDecoration:a.decoration,color:"#"+a.color}},a.text),l.a.createElement("div",{className:"style-label"},"".concat(a.font," \u2014 ").concat(a.size,", #").concat(a.color))))}}]),a}(l.a.Component),b=(a(23),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props.styles;if(t.length>0&&t!==e.styles){for(var a={},n=0;n<t.length;n++){var l=t[n].style,o=l.font,r=l.weight;a[o]||(a[o]=[]),a[o].includes(r)||a[o].push(r),a[o].length>1&&a[o].sort()}var c=["https://fonts.googleapis.com/css2?","&display=swap"],s=[];Object.entries(a).forEach((function(e,t){var a=Object(f.a)(e,2),n=a[0],l=a[1];n.split(" ").length>1&&(n=n.split(" ").join("+")),l=l.join(";"),0===t?s.push("family=".concat(n)):s.push("&family=".concat(n)),s.push(":wght@".concat(l))}));var i=document.querySelector(".google-fonts-link");i||((i=document.createElement("link")).rel="stylesheet",i.classList.add("google-fonts-link"),document.getElementsByTagName("head")[0].appendChild(i)),c=c.join(s.join("")),i.href=c}}},{key:"render",value:function(){var e=this.props,t=e.handleDelete,a=e.handleSubmit,n=e.styles;return l.a.createElement("div",{className:"style-list"},n.map((function(e,n){var o=e.style;return l.a.createElement(E,{key:"style-".concat(n),style:o,handleDelete:t,handleSubmit:a})})))}}]),a}(l.a.Component)),C=(a(24),a(25),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={color:"",message:"Press enter to save.",messageColor:""},n.textarea=l.a.createRef(),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.textarea.current.focus()}},{key:"handleSubmit",value:function(){var e=this.props,t=e.handleSubmit,a=e.handleClose,n=this.state.color;3===n.length||6===n.length?(t("colors",n),a()):this.setState({message:"Invalid color",messageColor:"#ff0000"})}},{key:"render",value:function(){var e=this,t=this.props.handleClose,a=this.state,n=a.color,o=a.message,r=a.messageColor;return l.a.createElement("div",{className:"add-color"},l.a.createElement("div",{className:"colored",style:{backgroundColor:"#".concat(n)}}),l.a.createElement("div",{id:"color-form",className:"add-color-form"},l.a.createElement("div",{className:"color-code"},"#",l.a.createElement("input",{ref:this.textarea,type:"text",spellCheck:"false",placeholder:"000000",maxLength:"6",onChange:function(t){return e.setState({color:t.target.value})},value:n,onKeyDown:function(t){return"Enter"===t.key?e.handleSubmit():null}}),l.a.createElement("i",{className:"fas fa-times",onClick:t})),l.a.createElement("span",{className:"color-code-instruction",style:{color:r}},o)))}}]),a}(l.a.Component)),S=(a(26),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={show:!1,copy:"Copy"},e.copy=function(){e.setState({copy:"Copied!"});var t=document.createElement("input");t.setAttribute("value",e.props.color.value),document.body.appendChild(t),t.select();var a=document.execCommand("copy");return document.body.removeChild(t),a},e.handleDelete=function(t){var a=e.props,n=a.color,l=a.handleDelete;t.stopPropagation(),l(n.id,"colors")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.show,n=t.copy,o=this.props.color;return l.a.createElement("div",{className:"colored",style:{backgroundColor:"#".concat(o.value)},onMouseEnter:function(){return e.setState({show:!0})},onMouseLeave:function(){return e.setState({show:!1,copy:"Copy"})}},a?l.a.createElement("div",{className:"colored-dark",onClick:this.copy},l.a.createElement("i",{className:"fas fa-times",onClick:function(t){return e.handleDelete(t)}}),l.a.createElement("div",{className:"color-copy"},l.a.createElement("p",null,n))):null)}}]),a}(l.a.Component)),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={adding:!1},e.handleClose=function(){e.setState({adding:!1})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("click",(function(t){t.target.closest("[id=color-form]")||t.target.closest("[id=add-color]")||e.setState({adding:!1})}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.colors,n=t.handleDelete,o=t.handleSubmit;return l.a.createElement("div",{className:"color-list"},a.map((function(e,t){var a=e.color;return l.a.createElement(S,{key:"color-".concat(t),color:a,handleDelete:n})})),this.state.adding?l.a.createElement(C,{handleClose:this.handleClose,handleSubmit:o}):l.a.createElement("div",{className:"add-color",onClick:function(){return e.setState({adding:!0})},id:"add-color"},l.a.createElement("i",{className:"fas fa-plus"})))}}]),a}(l.a.Component),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={styles:[],colors:[],searchText:"",creating:!1},e.handleChange=function(t){e.setState({searchText:t.target.value})},e.handleSubmit=function(t,a){var n,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=e.state[t],r=null!==l?l:o.length;if(null===l)for(var s=0;s<o.length;s++)o[s].id!==s&&(r=s);if("styles"===t){var i=a.text,u=a.font,m=a.size,d=a.weight,h=a.style,f=a.decoration,p=a.color;n={id:r,text:i,font:u,size:m,weight:d,style:h,decoration:f,color:p}}else n={id:r,value:a};if(null!==l)for(var y=0;y<o.length;y++)o[y].id===r&&(o[y]=n);else o.push(n);localStorage.setItem(t,JSON.stringify(o)),e.setState(Object(c.a)({},t,o)),"styles"===t&&null===l&&e.closeCreateForm()},e.handleDelete=function(t,a){for(var n=e.state[a],l=0;l<n.length;l++)n[l]&&n[l].id===t&&delete n[l];var o=n.filter((function(e){return null!==e}));e.setState(Object(c.a)({},a,o)),localStorage.setItem("".concat(a),JSON.stringify(o))},e.closeCreateForm=function(){e.setState({creating:!1})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({styles:JSON.parse(localStorage.getItem("styles"))||[],colors:JSON.parse(localStorage.getItem("colors"))||[]})}},{key:"componentDidUpdate",value:function(){var e=this.state.creating,t=document.querySelector(".google-fonts-link");if(e&&t&&!t.href.includes("Roboto")){var a=t.href,n=a.indexOf("&display=swap");a="".concat(a.slice(0,n),"&family=Roboto:wght@400").concat(a.slice(n)),t.href=a}}},{key:"render",value:function(){var e=this,t=[],a=[],n=this.state,o=n.creating,r=n.styles,c=n.colors;return r.forEach((function(a,n){a&&(a.text.toLowerCase().includes(e.state.searchText.toLowerCase())||a.font.toLowerCase().includes(e.state.searchText.toLowerCase())||a.color.toLowerCase().includes(e.state.searchText.toLowerCase()))&&t.push({id:n,style:a})})),c.forEach((function(t,n){t&&t.value.toLowerCase().includes(e.state.searchText.toLowerCase())&&a.push({id:n,color:t})})),l.a.createElement(l.a.Fragment,null,l.a.createElement(h,{handleChange:this.handleChange}),l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"colors"},l.a.createElement("h1",null,"Colors"),l.a.createElement(k,{colors:a,handleSubmit:this.handleSubmit,handleDelete:this.handleDelete})),l.a.createElement("div",{className:"styles"},l.a.createElement("h1",null,"Fonts"),o?l.a.createElement(g,{type:"create",closeCreateForm:this.closeCreateForm,handleSubmit:this.handleSubmit}):l.a.createElement(l.a.Fragment,null,r.length<1?l.a.createElement("div",{className:"empty-style"},"No styles to show"):null,l.a.createElement("div",{className:"add-style-btn"},l.a.createElement("button",{onClick:function(){return e.setState({creating:!0})}},"Add"))),l.a.createElement(b,{styles:t.reverse(),handleDelete:this.handleDelete,handleSubmit:this.handleSubmit}))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.bc4ddae0.chunk.js.map