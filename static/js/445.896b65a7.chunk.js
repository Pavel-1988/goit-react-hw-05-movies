"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[445],{445:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r,o,a=t(982),i=t(885),c=t(791),l=t(731),s=t(689),u=t(596),d=t(368),h=t(168),p=t(444),g=p.ZP.input(r||(r=(0,h.Z)(["\n  width: 250px;\n  height: 20px;\n  font-size: 15px;\n  margin-right: 3px;\n  border-radius: 4px;\n  &:focus-within {\n    outline-color: orangered !important;\n  }\n  &:focus-visible {\n    outline-color: orangered !important;\n  }\n  &:focus {\n    outline-color: orangered !important;\n  }\n  &:active {\n    outline-color: orangered !important;\n  }\n"]))),f=(p.ZP.input(o||(o=(0,h.Z)(["\n  padding: 4px 8px;\n  background-color: orangered;\n  color: white;\n  border-radius: 4px;\n  border-color: orangered;\n  margin-left: 5px;\n  font-weight: bold;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n"]))),t(184));function m(){var e,n=(0,s.TH)(),t=(0,c.useState)([]),r=(0,i.Z)(t,2),o=r[0],h=r[1],p=(0,l.lr)(),m=(0,i.Z)(p,2),x=m[0],v=m[1],_=null!==(e=x.get("filter"))&&void 0!==e?e:"";return(0,c.useEffect)((function(){_&&fetch("https://api.themoviedb.org/3/search/movie?api_key=bfc78256055c27ed6be30c1c43cfe9c3&language=en-US&query=".concat(_,"&page=1&include_adult=false")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Change your serch query"))})).then((function(e){return 0===e.results?u.Am.error("Something went wrong. Try changing your search query"):h((0,a.Z)(e.results))})).catch((function(e){return u.Am.error(e.message)}))}),[_]),(0,f.jsxs)(d.W2,{children:[(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("\u043d\u0430\u0436\u0430\u043b \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443")},children:[(0,f.jsx)(g,{value:_,onChange:function(e){var n=e.currentTarget.value;v(""!==n?{filter:n}:{}),console.log(n)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,f.jsx)("button",{children:"Search"})]}),(0,f.jsx)(d.eW,{children:o.map((function(e){var t=e.poster_path,r=e.id,o=e.title,a=e.name,i=e.release_date,c=e.first_air_date,l=new Date(i).getFullYear(),s=new Date(c).getFullYear();return(0,f.jsx)(d.H2,{children:(0,f.jsxs)(d.up,{to:"".concat(r),state:{from:n},children:[(0,f.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w220_and_h330_face".concat(t):"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg",alt:null!==o&&void 0!==o?o:a}),(0,f.jsxs)("h4",{children:[null!==a&&void 0!==a?a:o," (",l||s,")"]})]})},r)}))}),(0,f.jsx)(c.Suspense,{children:(0,f.jsx)(s.j3,{})})]})}}}]);
//# sourceMappingURL=445.896b65a7.chunk.js.map