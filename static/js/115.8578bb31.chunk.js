"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[115],{115:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,a,i,c,o=t(885),s=t(689),p=t(791),d=t(168),f=t(444),l=f.ZP.ul(r||(r=(0,d.Z)(["\n    display: flex;\n  flex-wrap: wrap;\n  flex-grow: 1;\n  justify-content: space-between;\n  padding: 15px;\n  margin-left: -10px;\n  transition: transform 3s ease-in-out;\n"]))),x=f.ZP.li(a||(a=(0,d.Z)(["\n   display: flex;\n  flex-direction: column;\n  margin-left: 10px;\n  margin-top: 20px;\n  justify-content: space-between;\n  flex-basis: calc((100% - 60px) / 4);\n  border-bottom: 1px solid orangered;\n  \n  :hover {\n    transform: scale(1.05);\n  }\n\n"]))),u=f.ZP.img(i||(i=(0,d.Z)(["\n  max-height: 100%;\n  max-width: 100%;\n  border-radius: 10px;\n  box-shadow: 0px 0px 4px 2px orangered;\n  \n"]))),h=f.ZP.div(c||(c=(0,d.Z)(["\n  padding: 10px;\n  text-align: center;\n"]))),m=t(544),g=t(184);function b(){var n=(0,s.UO)().movieId,e=(0,p.useState)([]),t=(0,o.Z)(e,2),r=t[0],a=t[1];return(0,p.useEffect)((function(){n&&fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=bfc78256055c27ed6be30c1c43cfe9c3&language=en-US")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Nothing found"))})).then((function(n){a(n.cast)}))}),[n]),(0,g.jsx)(l,{children:r.map((function(n){var e=n.id,t=n.name,r=n.profile_path,a=n.character;return(0,g.jsxs)(x,{children:[(0,g.jsx)(u,{src:r?"https://image.tmdb.org/t/p/w220_and_h330_face".concat(r):"".concat(m),alt:t}),(0,g.jsxs)(h,{children:[(0,g.jsx)("h4",{children:t}),(0,g.jsx)("p",{children:a})]})]},e)}))})}},544:function(n,e,t){n.exports=t.p+"static/media/default.0d99f81d76c81f718a13.png"}}]);
//# sourceMappingURL=115.8578bb31.chunk.js.map