(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{105:function(e,t,n){e.exports=n.p+"static/media/person-icon.f540a12d.png"},11:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return c}));var r=n(132),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b2de6c08-33b5-4aa7-b1b9-f605b1978dd4"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},getUserProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object"),u.getProfile(e)}},u={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("/auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("/auth/login")}},c={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},133:function(e,t,n){e.exports={friendsWrapper:"Friends_friendsWrapper__1oNpK"}},134:function(e,t,n){e.exports={fImg:"FriendImg_fImg__3ZZOg"}},135:function(e,t,n){e.exports={avatar:"Users_avatar__Bk0ga"}},136:function(e,t,n){e.exports=n.p+"static/media/724.f34edff5.svg"},165:function(e,t,n){e.exports=n(299)},170:function(e,t,n){},197:function(e,t,n){},24:function(e,t,n){e.exports={formControl:"FormControls_formControl__3UHH8",error:"FormControls_error__89rfM",errorSummaryError:"FormControls_errorSummaryError__38inK"}},297:function(e,t,n){},298:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(129),u=n.n(o),i=n(16),c=n(17),s=n(19),l=n(18),f=n(20),d=(n(170),n(87)),m=n.n(d),p=n(303),g=function(e){return a.a.createElement("header",{className:m.a.header},a.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUpKSn///8nJyf8/PwrKysbGxsiIiIhISEYGBgWFhZERET39/cREREeHh4UFBTW1tYJCQnu7u6Ojo5gYGC0tLRLS0t5eXlnZ2fh4eEAAADQ0NDp6enZ2dmIiIg/Pz+np6fDw8O3t7ekpKRaWlo3NzdycnKXl5dBQUF/f39JSUmJiYlTU1NlZWXJyckyMjKdnZ0bInanAAASwElEQVR4nO1dCXeqOBSGcAkii1iXum+trX1W+///3STgkhsWCYRq5/idM68dCllv7p7EMJ544oknnnjiiSeeeOKJJ5544gkZQID4lMB9KmfVU5+1oMnqCQSD/t6279JHoLa97w8CIE1WQlor05wMjbDJWrJBXGM4Mc1Vq9nhtbcmx/Tn6NMm60mB+sefaVz31m6uFjZ4dtdM4K33UUAADNLokAIhBgAJov3aO9XctY2m6JTVFPVNK66G/9sZQkih6RUJQEMYdk518n/7EWmqVgh6lnWuh/8y/Vn4TjN1XeD4C06erLpTzZbVC5oaVkJnp2ou8NZv44ATanad5VqS9y0j0WD8diHPEyxzRpvic+6HmYHOkLo0c2mwFpZERh/ZM1ZuTJ4pfLjNdJB+WlnVcWJt+5mEYxvtMjCyuCMEfvvEPVOwPpth5NEhpz5GrKtvP9XMoDUfeWUwmreC1OD43yvPlBfFGYdIf/cA7GFefTFmQ9+mp/XIlTs63o4KXscYbcf0rI4BV178bPK8jOnQ1s1O2ZI6dnOHNK7U7G4+w4SzguG0vmdm0fvSt+bsu+WcWI4Tfm5u1nXULoch7Bc3mEsPa/XNdFbWRvdtUrZ7l0ZP3lw2PsS2v1dWUlzR2/1QZweBa73fuNKMBsSPZnPqR4OVSu8u368GkU/ns6Liz79b5jeFstLoNhg9EH8kFm+eZX4Gupt+he4l6G+6mc/P8l6ocuQTfdobW/vhj1ifuZmPcqjQkn6WR+GX7OFovkF/+wnz9IwqXXQGnljbiITB9pDTCSse8Co9tEwrb/lZh20QkpFYrDdwNC5Fd4KasmXiKwgHS+88vo0hKdtbDkJe5RbVNdGn2YA7R9Wux/yhQUPn3+gG16vdQ06e/5yQxgQ5XqM/zl1tnOYdrf9uvMDZOmes3X09SIqxZniHV9eO6+J1Am7IuxZOw4YpWiPq2F2pA4jjD5bZ/C9ZWea0U4ypWbBqu8uB7wii3d2h4teRBoHBCgi+UbEy+VMXdiMzzSQs/sT7ALdVBBc+vORV+WNGnjtwJRWbMQTxze9Ah0wkVGBhrM0DWa8HYke9lIzn/+9tqFusXTFt0KUbz0zzK2vVi9I+PcqYutCYkRZL0d8I3MQyf1xDrpetSydqL2VTx+svuFQuHmPu6fEXfXkxT5ftyMmqyL0KZt6ojV+/g3SPah8FGXPCn3BinV3GgVW+HrD+Gbekcvx34g/W4nKcncgzoyYSIIvF29e2FIkvikLT7OWXyDhrL1Ga2T+rQUjLrxBwwsHq9CUjT84980B7qD0Tvy6dSqKQ+7ny20lo9B5z1slbRJVYAJOuEbdHGPd8j4rCBrG/T8S8ntwHLgoFHsAk0I12kxB2q63rgJqFyl4Hx92udnDLmw5IOlusSQq0ki7N8Nci6zJ3rdulkZad8kmURGC3btMctHam2Ki1X0NgQLA1RT5+8MvMTHWVv9SXAP5BmEOTacnVe0gMZCR5bVoitFXHpinxLWsBbXtiF0dGVWYDRrRBi/qjDj3oA1s72HG7iaq1i7G3LxON1X3ChmkwJQob4F9qjPtSDAmRE9/qVWUg+hH0xIaZs7CK5w0M9wXZfv2GXOmV4ApCkTXyxa0yifQTG2PH3w2JFoMeceMqufn9FVrOQ/sxFmEC7oEXsaqggZ/i2ZciGogU1EKEJ0A99o0dBhYThQ8hKc5gjL7tiSZlV9l3St+QB3NZpHHfA0wDXyKJ8aa8EseICrpHfS50HWBtwbzmMFYug7RFlZuZTQ20sw5iI+raxM8Kmpu7FMfIaj+SsGCrqI0cO8sKwhqIRAaPNYk4IN09VmATBGzsnGwyF0kZNnbw7+xKYShiz0Qn24inJ2lvahXwRKyrh5M1cVbg1ykCCXriHJovoeaWVkf4giRFL6jWQxAlBk+4OJLfz0jMAiFHlKaxGlcmLoKN6YeRGFEfux6qDzxpbRA1pBz69wEdoNWzKeG+ykWsnV67OIkegUxJNBE7qK6RimVBuEOTOKy4pHWCBEM0hbuwRhfZ+vVnom+yjFuL8XLqMFAKgmeOSRr2yEnAfsK1JPYW0OSTMvKIOwCFJs38mhpz8IZE68ttOxjooMfw3XtzhKqBUP4sAfspeu7BcN6Svw1u+6/BfjHFOXyr7T3Cpr512+VD6JkBL6hAP86bWI75ds28JUAXZ7Z4Mx4IhCCFtIpxL4F+ouha/6Zv8pyFapn9a+0gWWNYhvnn5OqbmaNg4MCMpyMP00XJQtatgB2BaUb1QBYmxuJKDMIgTm9xDbpHAfEfDQ5AoDC9lmmZkxtkIS6TZevyOMTucybFrjpgS7DTXm7o974YyLemUCfwlAAMnFhq3XK6tQR943BprmSKmbHBc/6jfbgUbvZb2cWeWpPRlvpdZKSPfN83sgPoV5JLwP97vUSFbBxo5Zifuw/B6+l9y/S+ChcBz5oQOjiLbqUJlATFbPCjWEsK10n9ltm5ErQ9M2XMrvTod85m2rrQfiEtHJJR9z7lFYwkhmUVcgNwLlrj68UD6byms0nM15PAAIO+np8WZ+MRQGxmVTuGf2k0XSCJsS5mNu5Lf7lc9vs/4UXbCA9y+hv738Npvtg74U8//ualmDX6a7EIb1GfzZwB/o/YQqvnFK5vO2Tww2tr6WeKRjkEWeay9xmKGCnTfISIE2vOj6/R5QBOV/Qtbm6EeiDBpWnRMrOHy6v2gL/ILtRwRVvO6mpML2WyOUBRjGFQIhp9/ZVCdv6iBzTz/bwCAxSN2QY6s6ANEorZucUsPfV560Xu2wkvJVI7BHBBdCXTkGh1w4tmtTlV26+GhBiCauKdI6bOaXY4IN/pQU2fxxSOsFUzfXzRDbzT67/1RY1+o+ZWDCcpYXgiNHOiWJKo3PY1pCUK8MVtSFslKiX7vAx89nyvRKaOSA0dnT0kBhXDkUrp1RAVbTDpRyrMgrwLw+PRyplC6UaCsxda1VUaPEqyJ/DUTqLEL3zRQtk72vavEUCmwUTJMRyLirx1yAWGSmGRmOw6rxaOyQT4olKyUbKrg2nhPrupEjd1RVaz1Ki1QYgYjUqj4qyQvC7y50MVpo8ET0ffBj0pWNpWiUYm2we6kyx0szY3FDekLbSjUlg0p2C6F2ZhqpJDFiegWeZuHKUx3vHOq6TLASGCVmPttVlPOBrMpHTJguFs8Hcz+ToxYspYhwr6ZSiymp22NC2CkhaWpUM9BOh7rCvn8KaEb3jvtDRPJC3UElcbL22JIzcsnx1Fko2ZXk4exynX96f0UTBAqGhATZQkTTEujMYylRSt5CiUXM974v/pKnBTpgJeOXO3/He3ikUcrDztkyBZv708PdZJEgV2CjE7wFy99HfFEGzrmLuX7mOir8/ytTw/djKW16EBb14b6spaDpdCD5flDR7nNfYYDXN3CwAbO253vJY3VjDT05UdMhY1GgXDM0lV7kZ5WxjY8ygmOoUEayS4OurpetloiTuDFDaLsRnyTKvr52oIQPyuxd5RoDZ6tXIss6uJmZJPoYNdlUi+M42plM862qiXbMkzYq2VvaDi9yGByGqqZCRmAKVUdxRMp9M5BZ0o8YoJ1hwkJz6QKKb/HxUVOhKXjJLang9mOl3nUMVkYSpNHFHa8wwEoOGFWoHER2iRRN+1VHafiYYcY3s6PBmAg5JKDBp4unnCfoPxYH1ZwnS/HoyDmEnzzZhKngzkFp7o2KfEhhoJWQWvA8+/iNfue0i3HS7Zz61kDLGzpWGyk7CndBAjReqHlnRJKipKnpoEIq3YGfzyEv+4JPImQm30EvvCR4pJW+HF8c1VSB1uYUQWai48iJNfrPNxLxdNuTU5H8ZixSk6SvOAHJs6tBpAbtiloueAXCKPrDNnM5EbhhcXqrdQm0IIkc+ovicDjBZ2pSuWeIp5J5N4oikmta+sqziundEgHGBo1V6IhBhiOGSvunVGzDM2u9MEIutS3PMHolZjmlOjdlYv0C9xL/dR+Xv/kqMgetwuv8/UXYKiW8z6qu2rAcGBZ5kdVzVmlxBVvsdUlezZ225HKK/ONucTkLnSr+CEtb28Q3r42SfqahegOFiVrSQSUMxurs6cASl9UhcrDVkghhgUY5lZDWyJHso39ewAQBqD1MEqLk9w3kTvbW3dG+UUVkupdgsipFVoDG+NVBSnaUiRgkpFDOWuXVBNJakeRcksTTwGrlpgmRz/vWTj37HSBAisxlINuUsAaY/YvBrREzsP1SgMRTMPtU7DYipx2BXWkBZNvj5ErcbqhvUyMMlCzBR6jA6yLoqZQzVZDWY040fYDAySe7MWqwGcxj4itNkT2Eu1ibBWiElWP5VOjLhA1Ggsc7Z4gIMVwF6grOxaWg0QlElmmdPB3bsI9gDnPkydOnRFBh5WR7yB3dih9iUAQOwBTuW0vEEdVkPe5MN0vVf7ftuB+Wmbr6iD/DTYt1rMNNh6klLpDe+5HTgcSjNoevXUNjBaPXRsI//lX/Vtt/UAxvif3BivV9tTkyxsNI8/tw981I/4CElRdsWtYqyvfslBeyS7WJYaUwQU0FrKzp5RW8NVF2AER7Thhbtx1/e4SSdcy8fAzo4lUurLgMLElFjqwS2fBKMDBKh7wONsmhPQpihTeyXTR+cY/OJSBAiOHXmtrGxtHWRy1l3K5c8+f/P4tuBzJo/x0tWoexAgqR2SZneh80z0QoCzSJ03vQmJ3nVC/A95nXf39YMGZcCE8h51kLfjQ9u+tUs1EO1MCd7r7xzD576mdhXtIu13lHDX7lasKFYohnr3PGTDH8qnYXtbHxoxxvlYSg76XcWDNUsDDIl2eCigKdphlst+Ktf20+yZpmDgrY8c031jx4wy9WaR6qLGNNYMxGJK6uBCkyKTAVau8y5qcLHxuG7u4FZGNes4F1yoc/buNOsPc5gGJw3qKmhGg2OaWoCPmmAVT6Dhq+x4ahOuNdbg9G05FuuikqbGR7Px+wj5hXZ+X+qhOWrk9FZ6TF3X0/dzr+nTCX56lIX7OP3UvfoZV/ucytXUOhFKAcTwpY29FtPgKkZZciux912ZRF98ffvxisAsDcPfSaPLpLBeB1X4Kt+cZ+1YB3/PYkM+r1hoWEN9sp/J+aF1vZgzqeR3fXwE/G9PuofNmus6p5Z1cI6dX5blffu/6lQAAvZnSuH/0OS9IWHqOlDv0272tuoUGM/mvA5PIrdKNZRN4sg6WoPTtpZLgcojqcuJY0CoJev4GsvKg82/BMo0NWnkZovzzZG/DK7BSQxvFZBaHJ19jTU1Xnrjmlo+aCutwZFaGhxQktbUWo0oheXaQ+z+ZaRPYBRVg0o55aP5Y5rafS+diM//xIM+ajtV6ZQ4bXRICC/3tzS1/EZFqaNZmAZXhSmwL+x9ymn4cvcDRZmpMZeTK73XSuNOWrJPzbLm+Zumfg1guFvJDK/og/Nx9JMXuq2XZ6ENbu98BN0F83HqWrhCMI1sPJf6Z1q9B7kWBQx7gNdP7JNWzG6Ofep4PQ/sx5jB2Fptpw5KUvPB4Q3xMUbt5nxqFRC8j+Qp6LcIlDIH+GstyTNimaP3x7maiAMcIvngLKaLlMsRA0KYboSNJXNCfi2yVQ4EHJr2/B3L6ZPOMe2hpM6vmoO3wTeE2uhODY7ZIrgRQeF/DhY4T8CMNbVHSIOUQfyUBhf74IrmgiQ+NamDG+3BQV3wU7Z5d18ss5m+kNbUPn4jZlcFPKVHOmrWMruvxbk3rdeU03DnP8pFGlkIt6lUv21+uBYg2qYS8baPOoMJSBxFxcsqN4qaRD/x27r9rtoBIGUVxBpcjnpJ3LSmtm/dMX21JJwMDS5MO6uZIhNmaGp388ioII6iShpc+vpjoGHquME4+vkHQOI8OIxV6qRSQlNerAlouUi8cbBGJrFblOk64VFU4eQPepzIr6wCavxOcEkH4kxJNEEz8fQLoO8zWddW3dR9V7A5cnG2Kz+j5f0aKKbvUzQCPCvX/Y3ork5gH5yVRFFPf0uin4gZvTzKTUslwafD38lpt1ya87+EqR0FTFMz/toU8lj4UN7JwDUy1vWt9DT2zf0ZFnMBM5ok/yfvF9Oq/dQGfY9p5/d3i1aBrMHxpfcx/pCXINfU7t3UynC+UjsZUhnjo6+/ocjkwFngUItlyuxntPjDHeQhXe6DE3toSbnUE+LUCBrfHbzhJDzknfzBnh7iyP+f7WAMQoJ1bg/XwYNcGlkLxEjbgScswz8oBlPgF+iNUz64GB9juOeGVK2I4hynK61aSQ7VvZulE/Lez3vvRW0AfC+qOId87+f/DDgL4WpJ/Y8QDKanBWia08FjBQc1IYg1OE6qo8X/soNgUNqJp7BDVc+1+zOglMd6V/RRToFpAJRpcOvgf9xBnuo3vG8iXvMgf8Ot/cQTTzzxxBNPPPHEE0888cQTfw7/AXni7K+nIlN6AAAAAElFTkSuQmCC",alt:"avatar"}),a.a.createElement("div",{className:m.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"Logout")):a.a.createElement(p.a,{to:"/login"},"Login")))},h=n(14),v=n(8),E=n(6),b=n.n(E),w=n(9),O=n(11),y=n(31),S="samuraiNetwork/auth/SET_USER_DATA",P={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},C=function(e,t,n,r){return{type:S,payload:{userId:e,email:t,login:n,isAuth:r}}},U=function(e){return{type:"samuraiNetwork/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},N=function(){return function(e){var t,n,r,a,o;return b.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,b.a.awrap(O.a.me());case 2:0===(t=u.sent).data.resultCode&&(n=t.data.data,r=n.id,a=n.email,o=n.login,e(C(r,a,o,!0)));case 5:case"end":return u.stop()}}))}},j=function(){return function(e){var t,n;return b.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,b.a.awrap(O.c.getCaptchaUrl());case 2:t=r.sent,n=t.data.url,e(U(n));case 5:case"end":return r.stop()}}))}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:case"samuraiNetwork/auth/GET_CAPTCHA_URL_SUCCESS":return Object(w.a)({},e,{},t.payload);default:return e}},x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return a.a.createElement(g,this.props)}}]),t}(a.a.Component),A=Object(v.d)(Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{setAuthUserData:N,logout:function(){return function(e){return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.awrap(O.a.logout());case 2:0===t.sent.data.resultCode&&e(C(null,null,null,!1));case 5:case"end":return t.stop()}}))}}}))(x),I=n(30),B=n.n(I),T=(n(133),n(90),n(197),n(134),function(e){return a.a.createElement("nav",{className:B.a.nav},a.a.createElement("div",{className:B.a.item},a.a.createElement(p.a,{to:"/profile",activeClassName:B.a.active},"Profile")),a.a.createElement("div",{className:B.a.item},a.a.createElement(p.a,{to:"/dialogs",activeClassName:B.a.active},"Messages")),a.a.createElement("div",{className:B.a.item},a.a.createElement(p.a,{to:"/users",activeClassName:B.a.active},"Users")))}),F=(a.a.Component,n(29)),M=n(66),D=n(127),W=n(69),R=n.n(W),Z=n(91),z=n.n(Z),G=function(e){for(var t=e.totalUsersCount,n=e.pageSize,o=e.currentPage,u=e.onPageChanged,i=e.portionSize,c=void 0===i?10:i,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var d=Math.ceil(s/c),m=Object(r.useState)(1),p=Object(D.a)(m,2),g=p[0],h=p[1],v=(g-1)*c+1,E=g*c;return a.a.createElement("div",null,a.a.createElement("div",{className:z()(R.a.pagesWrapper)},g<=1?a.a.createElement("button",{disabled:!0},"Prev"):a.a.createElement("button",{onClick:function(){h(g-1)}},"Prev"),l.filter((function(e){return e>=v&&e<=E})).map((function(e){return a.a.createElement("span",{className:z()(Object(M.a)({},R.a.selectedPage,o===e),R.a.pageNumber),onClick:function(t){u(e)}},e)})),d>g&&a.a.createElement("button",{onClick:function(){h(g+1)}},"Next")))},X=n(135),K=n.n(X),V=n(105),L=n.n(V),J=function(e){for(var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow,u=Object(F.a)(e,["user","followingInProgress","unfollow","follow"]),i=Math.ceil(u.totalUsersCount/u.pageSize),c=[],s=1;s<=i;s++)c.push(s);return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",{className:K.a.avatar},a.a.createElement(p.a,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:L.a}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},Q=function(e){for(var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,o=e.pageSize,u=e.users,i=Object(F.a)(e,["currentPage","onPageChanged","totalUsersCount","pageSize","users"]),c=Math.ceil(r/o),s=[],l=1;l<=c;l++)s.push(l);return a.a.createElement("div",null,a.a.createElement(G,{currentPage:t,onPageChanged:n,totalUsersCount:r,pageSize:o}),a.a.createElement("div",null,u.map((function(e){return a.a.createElement(J,{user:e,key:e.id,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow})}))))},H=n(42),Y=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(w.a)({},e,{},r):e}))},_="samuraiNetwork/users/FOLLOW",q="samuraiNetwork/users/UNFOLLOW",$="samuraiNetwork/users/SET_USERS",ee="samuraiNetwork/users/SET_CURRENT_PAGE",te="samuraiNetwork/users/SET_TOTAL_USERS_COUNT",ne="samuraiNetwork/users/TOGGLE_IS_FETCHING",re={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},ae=function(e){return{type:_,userId:e}},oe=function(e){return{type:q,userId:e}},ue=function(e){return{type:ee,currentPage:e}},ie=function(e){return{type:ne,isFetching:e}},ce=function(e,t){return{type:"samuraiNetwork/users/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},se=function(e,t,n,r){return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e(ce(!0,t)),a.next=3,b.a.awrap(n(t));case 3:0==a.sent.resultCode&&e(r(t)),e(ce(!1,t));case 6:case"end":return a.stop()}}))},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(w.a)({},e,{users:Y(e.users,t.userId,"id",{followed:!0})});case q:return Object(w.a)({},e,{users:Y(e.users,t.userId,"id",{followed:!1})});case $:return Object(w.a)({},e,{users:t.users});case ee:return Object(w.a)({},e,{currentPage:t.currentPage});case te:return Object(w.a)({},e,{totalUsersCount:t.totalCount});case ne:return Object(w.a)({},e,{isFetching:t.isFetching});case"samuraiNetwork/users/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(w.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(H.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},fe=n(59),de=n(35),me=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).onPageChanged=function(e){n.props.getUsers(e,n.props.pageSize)},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(fe.a,null):null,a.a.createElement(Q,Object.assign({},this.props,{onPageChanged:this.onPageChanged})))}}]),t}(a.a.Component),pe=Object(h.b)((function(e){return{users:Object(de.j)(e),pageSize:Object(de.f)(e),totalUsersCount:Object(de.h)(e),currentPage:Object(de.b)(e),isFetching:Object(de.e)(e),followingInProgress:Object(de.c)(e)}}),{follow:function(e){return function(t){return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:se(t,e,O.d.follow.bind(O.d),ae);case 1:case"end":return n.stop()}}))}},unfollow:function(e){return function(t){return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:se(t,e,O.d.unfollow.bind(O.d),oe);case 1:case"end":return n.stop()}}))}},setCurrentPage:ue,toggleFollowingProgress:ce,getUsers:function(e,t){return function(n){var r;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return n(ie(!0)),n(ue(e)),a.next=4,b.a.awrap(O.d.getUsers(e,t));case 4:r=a.sent,n(ie(!1)),n((u=r.items,{type:$,users:u})),n((o=r.totalCount,{type:te,totalCount:o}));case 8:case"end":return a.stop()}var o,u}))}}})(me),ge=n(24),he=n.n(ge),ve=n(86),Ee=n(126),be=n(34),we=n(60),Oe=n(301),ye=Object(Ee.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return a.a.createElement("form",{onSubmit:t},a.a.createElement("div",null,a.a.createElement(ve.a,{placeholder:"Email",name:"email",component:be.a,validate:[we.b]})),a.a.createElement("div",null,a.a.createElement(ve.a,{placeholder:"Password",name:"password",type:"password",component:be.a,validate:[we.b]})),a.a.createElement("div",null,a.a.createElement(ve.a,{component:be.a,name:"rememberMe",type:"checkbox"})," Remember me"),r&&a.a.createElement("img",{src:r}),r&&Object(be.c)("Symbols from image","captcha",[we.b],be.a,{}),n&&a.a.createElement("div",{className:he.a.errorSummaryError},a.a.createElement("h3",null,n)),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),Se=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,r){return function(a){var o,u;return b.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,b.a.awrap(O.a.login(e,t,n,r));case 2:0===(o=i.sent).data.resultCode?a(N()):(10===o.data.resultCode&&a(j()),u=o.data.messages.length>0?o.data.messages[0]:"Some error",a(Object(y.a)("login",{_error:u})));case 5:case"end":return i.stop()}}))}}})((function(e){return e.isAuth?a.a.createElement(Oe.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(ye,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))})),Pe=(n(297),{border:"2px solid red"}),Ce=function(e){var t=function(t){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(f.a)(n,t),Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{style:Pe},a.a.createElement(e,this.props))}}]),n}(a.a.Component);return t.displayName="WithBorder",t},Ue=(a.a.Component,n(304)),Ne=n(130),je=n(300),ke={initialized:!1},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(w.a)({},e,{initialized:!0});default:return e}},Ae=n(302),Ie=n(95),Be=n(96),Te={friendsData:[{id:1,name:"Nikita",foto:"img"},{id:2,name:"Nadya",foto:"img"},{id:3,name:"Armen man",foto:"img"},{id:4,name:"Antoha",foto:"img"},{id:5,name:"Dimych",foto:"img"}]},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te;return e},Me=n(138),De=n(128),We=Object(v.c)({profilePage:Ie.b,messagePage:Be.a,friendsPage:Fe,usersPage:le,auth:k,form:De.a,app:xe}),Re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.d,Ze=Object(v.e)(We,Re(Object(v.a)(Me.a)));window.__store__=Ze;var ze=Ze,Ge=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(e,t))}},Xe=a.a.lazy((function(){return n.e(3).then(n.bind(null,310))})),Ke=a.a.lazy((function(){return n.e(4).then(n.bind(null,311))})),Ve=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).catchAllUnhandledErrors=function(e){alert("Some error accrued")},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledRejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledRejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(A,null),a.a.createElement(T,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(Ue.a,null,a.a.createElement(Ne.a,{exact:!0,path:"/",render:function(){return a.a.createElement(Oe.a,{to:"/profile"})}}),a.a.createElement(Ne.a,{path:"/profile/:userId?",render:Ge(Xe)}),a.a.createElement(Ne.a,{path:"/dialogs",render:Ge(Ke)}),a.a.createElement(Ne.a,{path:"/users",render:function(){return a.a.createElement(pe,null)}}),a.a.createElement(Ne.a,{path:"/login",render:function(){return a.a.createElement(Se,null)}}),a.a.createElement(Ne.a,{path:"*",render:function(){return a.a.createElement("div",null,"404 NOT FOUND")}})))):a.a.createElement(fe.a,null)}}]),t}(a.a.Component),Le=Object(v.d)(Ae.a,Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(N()).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Ve),Je=function(e){return a.a.createElement(je.a,null,a.a.createElement(h.a,{store:ze},a.a.createElement(Le,null)))};n(298),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(a.a.createElement(Je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},30:function(e,t,n){e.exports={nav:"Navbar_nav__2B2L-",item:"Navbar_item__2iEkr",friends:"Navbar_friends__2v36X",active:"Navbar_active__15pLw"}},34:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return f}));var r=n(29),a=n(0),o=n.n(a),u=n(24),i=n.n(u),c=n(86),s=function(e){var t=e.input,n=e.meta,a=Object(r.a)(e,["input","meta"]),u=n.touched&&n.error;return o.a.createElement("div",{className:i.a.formControl+" "+(u?i.a.error:"")},o.a.createElement("textarea",Object.assign({},t,a))," ",o.a.createElement("br",null),u&&o.a.createElement("span",null,n.error))},l=function(e){var t=e.input,n=e.meta,a=Object(r.a)(e,["input","meta"]),u=n.touched&&n.error;return o.a.createElement("div",{className:i.a.formControl+" "+(u?i.a.error:"")},o.a.createElement("input",Object.assign({},t,a)),u&&o.a.createElement("span",null,n.error))},f=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(c.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a))," ",u)}},35:function(e,t,n){"use strict";n.d(t,"j",(function(){return r})),n.d(t,"f",(function(){return a})),n.d(t,"h",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"g",(function(){return s})),n.d(t,"d",(function(){return l})),n.d(t,"i",(function(){return f})),n.d(t,"a",(function(){return d}));n(198);var r=function(e){return function(e){return e.usersPage.users}(e).filter((function(e){return!0}))},a=function(e){return e.usersPage.pageSize},o=function(e){return e.usersPage.totalUsersCount},u=function(e){return e.usersPage.currentPage},i=function(e){return e.usersPage.isFetching},c=function(e){return e.usersPage.followingInProgress},s=function(e){return e.profilePage.profile},l=function(e){return e.auth.isAuth},f=function(e){return e.profilePage.status},d=function(e){return e.auth.userId}},59:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(136),u=n.n(o);t.a=function(e){return a.a.createElement("div",{style:{width:"65px",height:"65px"}},a.a.createElement("img",{src:u.a}))}},60:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length ".concat(e)}}},69:function(e,t,n){e.exports={pagesWrapper:"Paginator_pagesWrapper__3r6VK",selectedPage:"Paginator_selectedPage__1qBig",pageNumber:"Paginator_pageNumber__2yvAr"}},87:function(e,t,n){e.exports={header:"Header_header__2eK2D",loginBlock:"Header_loginBlock__1MWU4"}},90:function(e,t,n){e.exports={friendsImgWrapper:"FriendsImg_friendsImgWrapper__Chc0i",friendImg:"FriendsImg_friendImg__3H2HT"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"f",(function(){return v})),n.d(t,"c",(function(){return E})),n.d(t,"g",(function(){return b})),n.d(t,"d",(function(){return w})),n.d(t,"e",(function(){return O}));var r=n(6),a=n.n(r),o=n(42),u=n(9),i=n(11),c=n(31),s="samuraiNetwork/profile/ADD-POST",l="samuraiNetwork/profile/SET_USER_PROFILE",f="samuraiNetwork/profile/SET_STATUS",d="samuraiNetwork/profile/DELETE_POST",m="samuraiNetwork/profileInfo/SAVE_PHOTO_SUCCESS",p={postData:[{id:1,like:8,message:"Hey, how r u?"},{id:2,like:10,message:"Hey, it`s my first post!"},{id:3,like:25,message:"Who`s there?"}],profile:null,status:""},g=function(e){return{type:s,newPostText:e}},h=function(e){return{type:f,status:e}},v=function(e){return function(t){var n;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.a.awrap(i.d.getUserProfile(e));case 2:n=r.sent,t((o=n.data,{type:l,profile:o}));case 4:case"end":return r.stop()}var o}))}},E=function(e){return function(t){var n;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.a.awrap(i.b.getStatus(e));case 2:n=r.sent,t(h(n.data));case 4:case"end":return r.stop()}}))}},b=function(e){return function(t){return a.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.a.awrap(i.b.updateStatus(e));case 3:0===n.sent.data.resultCode&&t(h(e)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),alert("Some error");case 11:case"end":return n.stop()}}),null,null,[[0,8]])}},w=function(e){return function(t){var n;return a.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.a.awrap(i.b.savePhoto(e));case 2:0==(n=r.sent).data.resultCode&&t((o=n.data.data.photos,{type:m,photos:o}));case 5:case"end":return r.stop()}var o}))}},O=function(e){return function(t,n){var r,o;return a.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return r=n().auth.userId,u.next=3,a.a.awrap(i.b.saveProfile(e));case 3:if(0!=(o=u.sent).data.resultCode){u.next=8;break}t(v(r)),u.next=10;break;case 8:return t(Object(c.a)("edit-profile",{_error:o.data.messages[0]})),u.abrupt("return",Promise.reject(o.data.messages[0]));case 10:case"end":return u.stop()}}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:4,like:0,message:t.newPostText};return Object(u.a)({},e,{postData:[].concat(Object(o.a)(e.postData),[n]),newPostText:""});case l:return Object(u.a)({},e,{profile:t.profile});case f:return Object(u.a)({},e,{status:t.status});case d:return Object(u.a)({},e,{postData:e.postData.filter((function(e){return e.id!=t.postId}))});case m:return Object(u.a)({},e,{profile:Object(u.a)({},e.profile,{photos:t.photos})});default:return e}}},96:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(42),a=n(9),o="samuraiNetwork/message/SEND-MESSAGE",u={dialogsData:[{id:1,name:"Nikita"},{id:2,name:"Nadya"},{id:3,name:"Armen man"},{id:4,name:"Antoha"},{id:5,name:"Dimych"}],messgeData:[{id:1,message:"Hi everybody!"},{id:2,message:"Hey"},{id:3,message:"Whasup"},{id:4,message:"Hi"},{id:5,message:"Yo!"}]},i=function(e){return{type:o,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n=t.newMessageBody;return Object(a.a)({},e,{messgeData:[].concat(Object(r.a)(e.messgeData),[{id:6,message:n}])});default:return e}}}},[[165,1,2]]]);
//# sourceMappingURL=main.d47bd4ff.chunk.js.map