(this.webpackJsonpportfolio_scz=this.webpackJsonpportfolio_scz||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c(17),a=c.n(i),n=c(8),r=c(2),l=c(4),o=c(0),j=function(){var e=Object(s.useRef)(null),t=Object(s.useRef)(null),c=Object(s.useRef)(null),i=Object(s.useRef)(null),a=Object(s.useRef)(null),r=Object(s.useMemo)((function(){return l.a.timeline({paused:!1})}),[]);return Object(s.useEffect)((function(){r.to([c,i,a],{y:"0%",duration:1,opacity:1,stagger:.25}),r.to([t,e],{y:"-100%",opacity:1,duration:1,position:"-=1",stagger:.25})}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("section",{className:"main-section",children:[Object(o.jsxs)("div",{className:"hero",children:[Object(o.jsxs)("h2",{children:["Hi,",Object(o.jsx)("br",{}),"I'm Steven,",Object(o.jsx)("br",{}),"Frontend Developer"]}),Object(o.jsx)("p",{children:"Front End Developer"}),Object(o.jsx)("button",{children:Object(o.jsx)(n.b,{to:"/contact",children:"Contact me!"})})]}),Object(o.jsxs)("div",{className:"container-circles",children:[Object(o.jsx)("div",{className:"circle circle1"}),Object(o.jsx)("div",{className:"circle circle2"}),Object(o.jsx)("div",{className:"circle circle3"})]})]}),Object(o.jsxs)("div",{className:"intro-section",ref:function(t){e=t},children:[Object(o.jsxs)("div",{className:"intro-text",children:[Object(o.jsx)("h1",{className:"hide",children:Object(o.jsx)("span",{className:"text",ref:function(e){c=e},children:"Creating inovation"})}),Object(o.jsx)("h1",{className:"hide",children:Object(o.jsx)("span",{className:"text",ref:function(e){i=e},children:"For Everyday"})}),Object(o.jsx)("h1",{className:"hide",children:Object(o.jsx)("span",{className:"text",ref:function(e){a=e},children:"people."})})]}),Object(o.jsx)("svg",{className:"svg",children:Object(o.jsxs)("filter",{id:"gooey",children:[Object(o.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10"}),Object(o.jsx)("feColorMatrix",{values:" 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10 "})]})})]}),Object(o.jsx)("div",{className:"slider",ref:function(e){t=e}})]})},b=c(9),d=function(e){l.a.to(e.target,{duration:.3,y:3,skewX:4,ease:"power1.inOut"})},u=function(e){l.a.to(e.target,{duration:.3,y:-3,skewX:0,ease:"power1.inOut"})},h=function(e){var t=e.state,c=Object(s.useRef)(null),i=Object(s.useRef)(null),a=Object(s.useRef)(null),r=Object(s.useRef)(null),j=Object(s.useRef)(null),b=Object(s.useRef)(null),h=Object(s.useRef)(null),m=Object(s.useRef)(null);return Object(s.useEffect)((function(){var e,s,n;!1===t.clicked?(s=a,n=i,l.a.to([s,n],{duration:.8,height:0,ease:"power3.inOut",stagger:{amount:.07}}),l.b.to(c,{duration:1,css:{display:"none"}})):(!0===t.clicked||!0===t.clicked&&null===t.initial)&&(l.b.to(c,{duration:0,css:{display:"block"}}),l.b.to([i,a],{duration:0,opacity:1,height:"100%"}),function(e,t){l.a.from([e,t],{duration:.8,height:0,transformOrigin:"right top",skewY:2,ease:"power3.inOut",stagger:{amount:.1}})}(i,a),e=m,l.a.from(e,{y:60,duration:1,delay:.2,opacity:0,ease:"power3.inOut"}),function(e,t,c,s){l.a.from([e,t,c,s],{duration:.8,y:100,delay:.1,ease:"power3.inOut",stagger:{amount:.3}})}(r,j,b,h))}),[t]),Object(o.jsxs)("div",{ref:function(e){return c=e},className:"hamburger-menu",children:[Object(o.jsx)("div",{ref:function(e){return i=e},className:"menu-secondary-background-color"}),Object(o.jsx)("div",{ref:function(e){return a=e},className:"menu-layer",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsxs)("div",{className:"menu-links",children:[Object(o.jsx)("nav",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{onMouseEnter:function(e){return d(e)},onMouseOut:function(e){return u(e)},ref:function(e){return r=e},to:"/about",children:"About me"})}),Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{onMouseEnter:function(e){return d(e)},onMouseOut:function(e){return u(e)},ref:function(e){return j=e},to:"/skills",children:"Skills"})}),Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{onMouseEnter:function(e){return d(e)},onMouseOut:function(e){return u(e)},ref:function(e){return b=e},to:"/projects",children:"My projects"})}),Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{onMouseEnter:function(e){return d(e)},onMouseOut:function(e){return u(e)},ref:function(e){return h=e},to:"/contact",children:"Contact me"})})]})}),Object(o.jsxs)("div",{ref:function(e){return m=e},className:"info",children:[Object(o.jsx)("h3",{children:"Hello there!"}),Object(o.jsx)("p",{children:"describe a complex or technical issue using words and terms that the average individual (someone without professional training in the subject area) can understand, so that they may comprehend the issue to some degree."})]})]})})})})]})},m=Object(r.f)((function(e){var t=e.history,c=Object(s.useState)({initial:!1,clicked:null,menuName:"Menu"}),i=Object(b.a)(c,2),a=i[0],r=i[1],l=Object(s.useState)(!1),j=Object(b.a)(l,2),d=j[0],u=j[1];Object(s.useEffect)((function(){t.listen((function(){r({clicked:!1,menuName:"Menu"})}))}),[t]);var m=function(){u(!d),setTimeout((function(){u(!1)}),1200)};return Object(o.jsxs)("header",{children:[Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"wrapper",children:Object(o.jsxs)("div",{className:"inner-header",children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsxs)(n.b,{to:"/",children:[Object(o.jsx)("span",{children:"<"}),"StevenACZ",Object(o.jsx)("span",{children:"/>"})]})}),Object(o.jsx)("div",{className:"menu",children:Object(o.jsx)("button",{disabled:d,onClick:function(){m(),!1===a.initial?r({initial:null,clicked:!0,menuName:"Close"}):!0===a.clicked?r({clicked:!a.clicked,menuName:"Menu"}):!1===a.clicked&&r({clicked:!a.clicked,menuName:"Close"})},children:a.menuName})})]})})}),Object(o.jsx)(h,{state:a})]})})),p=function(){return Object(o.jsxs)("section",{className:"about-section",children:[Object(o.jsxs)("div",{className:"hero",children:[Object(o.jsx)("h2",{children:"About me"}),Object(o.jsx)("p",{children:"Front-end Developer seeking Full-Time Software Engineer Job in an entry-level position, looking to apply my experience in front-end development work, JavaScript, React, CSS and Web Standard HTML. I have a keen eye for details, witch it help me to implement the client-approved mock-ups, such as wireframes, visual design comprehensive layouts, and prototypes."}),Object(o.jsx)("svg",{className:"svg",children:Object(o.jsxs)("filter",{id:"gooey",children:[Object(o.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10"}),Object(o.jsx)("feColorMatrix",{values:" 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10 "})]})})]}),Object(o.jsxs)("div",{className:"container-circles",children:[Object(o.jsx)("div",{className:"circle circle1"}),Object(o.jsx)("div",{className:"circle circle2"}),Object(o.jsx)("div",{className:"circle circle3"})]})]})},g=function(){return Object(o.jsxs)("section",{className:"skills-section",children:[Object(o.jsxs)("div",{className:"hero",children:[Object(o.jsx)("h2",{children:"Skills & Experience"}),Object(o.jsxs)("p",{children:["The main area of my expertise is front end development",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"HTML, CSS, JS, building small and medium web apps with React",Object(o.jsx)("br",{}),"features, animations, and coding interactive layouts.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"I have also a little full-stack developer experience",Object(o.jsx)("br",{}),"with (Ruby and Ruby on Rails)",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Visit my"," ",Object(o.jsx)("a",{href:"https://www.linkedin.com/in/stevenacz/",target:"_blank",children:"Linkeding"})," ","profile for more details."]})]}),Object(o.jsxs)("div",{className:"skills",children:[Object(o.jsx)("div",{className:"skill-range beginner",children:Object(o.jsx)("div",{children:"beginner"})}),Object(o.jsx)("div",{className:"skill-range elementary",children:Object(o.jsx)("div",{children:"elementary"})}),Object(o.jsx)("div",{className:"skill-range intermediate",children:Object(o.jsx)("div",{children:"intermediate"})}),Object(o.jsx)("div",{className:"skill-range advanced",children:Object(o.jsx)("div",{children:"advanced"})}),Object(o.jsxs)("div",{className:"skill",children:[Object(o.jsx)("p",{children:"HTML"}),Object(o.jsx)("div",{className:"experience-bar html"})]}),Object(o.jsxs)("div",{className:"skill",children:[Object(o.jsx)("p",{children:"CSS"}),Object(o.jsx)("div",{className:"experience-bar css"})]}),Object(o.jsxs)("div",{className:"skill",children:[Object(o.jsx)("p",{children:"JavaScript"}),Object(o.jsx)("div",{className:"experience-bar js"})]}),Object(o.jsxs)("div",{className:"skill",children:[Object(o.jsx)("p",{children:"TypeScript"}),Object(o.jsx)("div",{className:"experience-bar ts"})]}),Object(o.jsxs)("div",{className:"skill",children:[Object(o.jsx)("p",{children:"React"}),Object(o.jsx)("div",{className:"experience-bar react"})]}),Object(o.jsxs)("div",{className:"skill",children:[Object(o.jsx)("p",{children:"Node.js"}),Object(o.jsx)("div",{className:"experience-bar nodejs"})]}),Object(o.jsxs)("div",{className:"skill",children:[Object(o.jsx)("p",{children:"MongoDB"}),Object(o.jsx)("div",{className:"experience-bar mongoDb"})]}),Object(o.jsxs)("div",{className:"skill",children:[Object(o.jsx)("p",{children:"Ruby"}),Object(o.jsx)("div",{className:"experience-bar ruby"})]}),Object(o.jsxs)("div",{className:"skill",children:[Object(o.jsx)("p",{children:"Ruby on Rails"}),Object(o.jsx)("div",{className:"experience-bar rubyonrails"})]})]})]})},O=c(19),x=function(e){var t=e.img,c=e.skills,s=e.webpage,i=e.github;return Object(o.jsxs)("div",{className:"project-card",children:[Object(o.jsx)("div",{className:"project-img",children:Object(o.jsx)("img",{src:t})}),Object(o.jsxs)("div",{className:"project-information",children:[Object(o.jsx)("div",{className:"project-skills",children:c.map((function(e){return Object(o.jsx)("span",{children:e})}))}),Object(o.jsxs)("div",{className:"project-links",children:[s&&Object(o.jsx)("a",{href:s,target:"_blank",children:"Web page"}),i&&Object(o.jsx)("a",{href:i,target:"_blank",children:"GitHub"})]})]})]})},v=c.p+"static/media/angry-birds.e06c032c.png",f=c.p+"static/media/angry-birds-stories.04b1b35a.png",S=c.p+"static/media/todolistjs.8386af7a.png",N=c.p+"static/media/color-game.d0448f0c.png",k=c.p+"static/media/a11y.977a2ec2.png",C=c.p+"static/media/chairdnb.8242d1fa.png",y=c.p+"static/media/blog-sass.30de63f4.png",w=c.p+"static/media/el-veraz.4a4dfaca.png",M=c.p+"static/media/natours-page.410fb422.png",A=c.p+"static/media/pig-game.0767cc4d.png",R=c.p+"static/media/portfolio-v2.5bde2306.png",T=c.p+"static/media/portfolio-v1.6707d28e.png",z=c.p+"static/media/expense-tracker.1cdafbd2.png",H=c.p+"static/media/react-ui.54f61d4c.png",L=c.p+"static/media/deliverable.454ea7aa.png",Z=c.p+"static/media/devconnector.8c5a835b.png",J=c.p+"static/media/crehana-clone.11de49e6.png",E=[{id:"peqweqwe12342",name:"Pro-Shop",img:c.p+"static/media/pro-shop.48e7a0c7.png",skills:["HTML","CSS","Styled-components","TypeScript","React","Express","MongoDB","Node.js"],webpage:"https://stevenacz.github.io/shop-frontend/#/",github:"https://github.com/StevenACZ/shop-frontend"},{id:"99992221123221232",name:"Crehana-clone",img:J,skills:["HTML","CSS","JavaScript","React"],webpage:"https://stevenacz.github.io/crehana-clone-react/#/",github:"https://github.com/StevenACZ/crehana-clone-react"},{id:"9999222111232",name:"DevConnector",img:Z,skills:["HTML","CSS","JavaScript","React","NodeJs","MongoDB","Express"],webpage:"https://stevenacz.github.io/dev-connector-frontend/#/",github:"https://github.com/StevenACZ/dev-connector-frontend"},{id:"9999222111",name:"Deliverable",img:L,skills:["HTML","CSS","SASS","JavaScript","React"],webpage:"https://rappi-fake-react.herokuapp.com/",github:"https://github.com/StevenACZ/rappi-fake-react"},{id:"1212a23213123213123123",name:"React UI",img:H,skills:["HTML","CSS","SASS","JavaScript","React"],webpage:"https://react-ui-acz.herokuapp.com/",github:"https://github.com/StevenACZ/ReactUI"},{id:"12a23213123213123123",name:"Expense tracker",img:z,skills:["HTML","CSS","SASS","JavaScript","React","Node.js","Express","MongoDB"],github:"https://github.com/StevenACZ/expense-tracker-react"},{id:"12a",name:"Angry Birds",img:v,skills:["HTML","CSS"],webpage:"https://stevenacz.github.io/week2-team1/",github:"https://github.com/StevenACZ/week2-team1"},{id:"121a",name:"ToDoListJS",img:S,skills:["HTML","CSS","JavaScript"],webpage:"https://stevenacz.github.io/ToDo-List-JS/",github:"https://github.com/StevenACZ/ToDo-List-JS"},{id:"12adasd",name:"Color Game",img:N,skills:["HTML","CSS","JavaScript"],webpage:"https://stevenacz.github.io/color-game/",github:"https://github.com/StevenACZ/color-game"},{id:"12a123s",name:"Angry Birds Stories",img:f,skills:["HTML","CSS"],webpage:"https://stevenacz.github.io/html-css-individual-StevenACZ/",github:"https://github.com/StevenACZ/html-css-individual-StevenACZ"},{id:"12a123222s",name:"a11y",img:k,skills:["HTML","CSS"],webpage:"https://stevenacz.github.io/component-library-animations-a11y-StevenACZ/",github:"https://github.com/StevenACZ/component-library-animations-a11y-StevenACZ"},{id:"12a123lldws",name:"Chairdnb",img:C,skills:["HTML","CSS"],webpage:"https://stevenacz.github.io/week1-team5/",github:"https://github.com/StevenACZ/week1-team5"},{id:"1",name:"Blog contact",img:y,skills:["HTML","CSS","SASS"],webpage:"https://stevenacz.github.io/BlogSass/",github:"https://github.com/StevenACZ/BlogSass"},{id:"2",name:"El veraz",img:w,skills:["HTML","CSS","SASS","JavaScript"],webpage:"https://stevenacz.github.io/Elveraz/",github:"https://github.com/StevenACZ/Elveraz"},{id:"99",name:"Natours Page",img:M,skills:["HTML","CSS","SASS"],webpage:"https://stevenacz.github.io/Natours-Page/",github:"https://github.com/StevenACZ/Natours-Page"},{id:"12p342",name:"Pig game",img:A,skills:["HTML","CSS","JavaScript"],webpage:"https://stevenacz.github.io/Pig-Game/",github:"https://github.com/StevenACZ/Pig-Game"},{id:"12p342s22323",name:"Portfolio",img:R,skills:["HTML","CSS","SASS","React","JavaScript","GSAP"],webpage:"https://stevenacz.github.io/portfolio_scz/#/",github:"https://github.com/StevenACZ/portfolio_scz"},{id:"oli23",name:"Portfolio v1",img:T,skills:["HTML","CSS","SASS","JavaScript"],webpage:"https://stevenacz.github.io/Portfolio_Dev/",github:"https://github.com/StevenACZ/Portfolio_Dev"}],D=function(){return Object(o.jsxs)("section",{className:"projects-section",children:[Object(o.jsx)("div",{className:"hero",children:Object(o.jsx)("h2",{children:"Projects"})}),Object(o.jsx)("section",{className:"projects-container",children:E.map((function(e){return Object(o.jsx)(x,Object(O.a)({},e),e.id)}))})]})},P=function(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),c=t[0],i=t[1],a=Object(s.useState)(""),n=Object(b.a)(a,2),r=n[0],l=n[1],j=Object(s.useState)(""),d=Object(b.a)(j,2),u=d[0],h=d[1],m=Object(s.useState)(""),p=Object(b.a)(m,2),g=p[0],O=p[1],x="mailto:scoailazaa@gmail.com?&subject=".concat(u,"&body=").concat(g);return Object(o.jsx)("section",{className:"contact-section",children:Object(o.jsxs)("div",{className:"hero",children:[Object(o.jsx)("h2",{children:"Contact me"}),Object(o.jsxs)("p",{children:["Hello, if you have a request or question,",Object(o.jsx)("br",{}),"don't hesitate to contact me using below form either."]}),Object(o.jsxs)("div",{className:"contact-form",children:[Object(o.jsx)("input",{onChange:function(e){i(e.target.value)},className:"name",value:c,type:"text",placeholder:"Name"}),Object(o.jsx)("input",{onChange:function(e){l(e.target.value)},className:"email",value:r,type:"text",placeholder:"Email"}),Object(o.jsx)("input",{onChange:function(e){h(e.target.value)},value:u,className:"subject",type:"text",placeholder:"Subject"}),Object(o.jsx)("textarea",{onChange:function(e){O(e.target.value)},value:g,className:"message",placeholder:"Message",cols:"30",rows:"5"})]}),Object(o.jsx)("div",{className:"submit-container",children:Object(o.jsx)("a",{className:"submit",href:x,onClick:function(){setTimeout((function(){i(""),l(""),h(""),O("")}),3e3)},children:"Send"})})]})})},B=function(){return Object(o.jsx)(n.a,{children:Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)(m,{}),Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{exact:!0,path:"/",component:j}),Object(o.jsx)(r.a,{exact:!0,path:"/about",component:p}),Object(o.jsx)(r.a,{exact:!0,path:"/skills",component:g}),Object(o.jsx)(r.a,{exact:!0,path:"/projects",component:D}),Object(o.jsx)(r.a,{exact:!0,path:"/contact",component:P})]})]})})},G=function(){return Object(o.jsx)(B,{})};c(30);a.a.render(Object(o.jsx)(G,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.09276f9a.chunk.js.map