"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[445],{445:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r,o,a=t(982),i=t(885),u=t(791),c=t(731),s=t(689),l=t(368),d=t(168),h=t(444),p=h.ZP.input(r||(r=(0,d.Z)(["\n  width: 250px;\n  height: 20px;\n  font-size: 15px;\n  margin-right: 3px;\n  border-radius: 4px;\n  &:focus-within {\n    outline-color: orangered !important;\n  }\n  &:focus-visible {\n    outline-color: orangered !important;\n  }\n  &:focus {\n    outline-color: orangered !important;\n  }\n  &:active {\n    outline-color: orangered !important;\n  }\n"]))),g=(h.ZP.input(o||(o=(0,d.Z)(["\n  padding: 4px 8px;\n  background-color: orangered;\n  color: white;\n  border-radius: 4px;\n  border-color: orangered;\n  margin-left: 5px;\n  font-weight: bold;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n"]))),t(184));function f(){var e,n,t=(0,s.TH)(),r=(0,u.useState)([]),o=(0,i.Z)(r,2),d=o[0],h=o[1],f=(0,c.lr)(),m=(0,i.Z)(f,2),x=m[0],v=m[1],b=(0,u.useState)(null!==(e=x.get("query"))&&void 0!==e?e:""),_=(0,i.Z)(b,2),w=_[0],y=_[1],j=null!==(n=x.get("query"))&&void 0!==n?n:"";(0,u.useEffect)((function(){j&&fetch("https://api.themoviedb.org/3/search/movie?api_key=bfc78256055c27ed6be30c1c43cfe9c3&language=en-US&query=".concat(j,"&page=1&include_adult=false")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Change your serch query"))})).then((function(e){return 0===e.results?alert("Something went wrong. Try changing your search query"):h((0,a.Z)(e.results))})).catch((function(e){return alert(e.message)}))}),[j]);return(0,g.jsxs)(l.W2,{children:[(0,g.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===w)return alert("Sorry. but write someting. Ok! idiot.");v({query:w})},children:[(0,g.jsx)(p,{value:w,onChange:function(e){y(e.target.value)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,g.jsx)("button",{children:"Search"})]}),(0,g.jsx)(l.eW,{children:d.map((function(e){var n=e.poster_path,r=e.id,o=e.title,a=e.name,i=e.release_date,u=e.first_air_date,c=new Date(i).getFullYear(),s=new Date(u).getFullYear();return(0,g.jsx)(l.H2,{children:(0,g.jsxs)(l.up,{to:"".concat(r),state:{from:t},children:[(0,g.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w220_and_h330_face".concat(n):"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg",alt:null!==o&&void 0!==o?o:a}),(0,g.jsxs)("h4",{children:[null!==a&&void 0!==a?a:o," (",c||s,")"]})]})},r)}))}),(0,g.jsx)(u.Suspense,{children:(0,g.jsx)(s.j3,{})})]})}}}]);
//# sourceMappingURL=445.1cdaf226.chunk.js.map