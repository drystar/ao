(this.webpackJsonpao=this.webpackJsonpao||[]).push([[0],{41:function(e,t,a){e.exports=a(78)},52:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),i=a.n(c),l=a(8),s=a(3),o=a(35),m=a(9),u=a(25),p=a(36),d=a.n(p),b=a(37),h=a.n(b),g=a(4),f="SET_CURRENT_USER",E={currentUser:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.tpe){case f:return Object(g.a)({},e,{currentUser:t.payload});default:return e}},y={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"  REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},O=a(40),k=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(g.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object(O.a)(e),[Object(g.a)({},t,{quantity:1})])},N=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(g.a)({},e,{quantity:e.quantity-1}):e}))},w={hidden:!0,cartItems:[]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.TOGGLE_CART_HIDDEN:return Object(g.a)({},e,{hidden:!e.hidden});case y.ADD_ITEM:return Object(g.a)({},e,{cartItems:k(e.cartItems,t.payload)});case y.REMOVE_ITEM:return Object(g.a)({},e,{cartItems:N(e.cartItems,t.payload)});case y.CLEAR_ITEM_FROM_CART:return Object(g.a)({},e,{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},C={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return t.type,e},I={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return t.type,e},S={key:"root",storage:h.a,whitelist:["cart"]},M=Object(m.c)({user:v,cart:j,directory:U,shop:T}),R=Object(u.a)(S,M),x=[d.a],P=Object(m.d)(R,m.a.apply(void 0,x)),A=Object(u.b)(P),B=(a(52),a(6)),_=a.n(B),D=a(10),G=a(16),H=a(17),L=a(18),q=a(19),z=a(12),V=a(2),J=(a(54),a(11)),W=Object(V.a)([function(e){return e.directory}],(function(e){return e.sections})),F=(a(55),a(56),Object(z.f)((function(e){var t=e.title,a=e.imageUrl,n=(e.size,e.history),c=e.linkUrl,i=e.match;return r.a.createElement("div",{className:"{size} menu-item",onClick:function(){return n.push("".concat(i.url).concat(c))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),Y=Object(V.b)({sections:W}),K=Object(s.b)(Y)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,a=Object(J.a)(e,["id"]);return r.a.createElement(F,Object.assign({key:t},a))})))})),Q=(a(58),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(K,null))}),X=Object(V.a)([function(e){return e.shop}],(function(e){return e.collections})),Z=Object(V.a)([X],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),$=(a(59),function(e){var t=e.children,a=e.isGoogleSignIn,n=e.inverted,c=Object(J.a)(e,["children","isGoogleSignIn","inverted"]);return r.a.createElement("button",Object.assign({className:"".concat(a?"google-sign-in":""," ").concat(n?"inverted":""," custom-button")},c),t)}),ee=function(){return{type:y.TOGGLE_CART_HIDDEN}},te=function(e){return{type:y.ADD_ITEM,payload:e}},ae=(a(60),Object(s.b)(null,(function(e){return{addItem:function(t){return e(te(t))}}}))((function(e){var t=e.item,a=e.addItem,n=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"},c)),r.a.createElement($,{onClick:function(){return a(t)},inverted:!0},"Add to Cart"))}))),ne=(a(61),function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(ae,{key:e.id,item:e})}))))}),re=Object(V.b)({collections:Z}),ce=Object(s.b)(re)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,a=Object(J.a)(e,["id"]);return r.a.createElement(ne,Object.assign({key:t},a))})))})),ie=(a(62),Object(s.b)((function(e,t){return{collection:(a=t.match.params.collectionId,Object(V.a)([X],(function(e){return e[a]})))(e)};var a}))((function(e){var t=e.collection,a=t.title,n=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"}," ",a," "),r.a.createElement("div",{className:"items"},n.map((function(e){return r.a.createElement(ae,{key:e.id,item:e})}))))}))),le=function(e){var t=e.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(z.b,{exact:!0,path:"".concat(t.path),component:ce}),r.a.createElement(z.b,{path:"".concat(t.path,"/:collectionId"),component:ie}))},se=a(20),oe=a.n(se),me=(a(63),a(66),function(){var e=Object(D.a)(_.a.mark((function e(t,a){var n,r,c,i;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=pe.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,n.set(Object(g.a)({displayName:r,email:c,createdAt:i},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error crating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}());oe.a.initializeApp({apiKey:"AIzaSyBwhOdd8pPehfYipos-hHEU_t3z8BCDTe4",authDomain:"ao-db-a1255.firebaseapp.com",databaseURL:"https://ao-db-a1255.firebaseio.com",projectId:"ao-db-a1255",storageBucket:"ao-db-a1255.appspot.com",messagingSenderId:"508455962045",appId:"1:508455962045:web:567fcae140d6136126fed4",measurementId:"G-5P6QP5BLZR"});var ue=oe.a.auth(),pe=oe.a.firestore(),de=new oe.a.auth.GoogleAuthProvider;de.setCustomParameters({prompt:"select_account"});var be=function(){return ue.signInWithPopup(de)},he=(oe.a,function(e){return e.cart}),ge=Object(V.a)([he],(function(e){return e.cartItems})),fe=Object(V.a)([he],(function(e){return e.hidden})),Ee=Object(V.a)([ge],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),ve=Object(V.a)([ge],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}));function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Oe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ke=r.a.createElement("g",null),Ne=r.a.createElement("g",null),we=r.a.createElement("g",null),je=r.a.createElement("g",null),Ce=r.a.createElement("g",null),Ue=r.a.createElement("g",null),Ie=r.a.createElement("g",null),Te=r.a.createElement("g",null),Se=r.a.createElement("g",null),Me=r.a.createElement("g",null),Re=r.a.createElement("g",null),xe=r.a.createElement("g",null),Pe=r.a.createElement("g",null),Ae=r.a.createElement("g",null),Be=r.a.createElement("g",null),_e=function(e){var t=e.svgRef,a=e.title,n=Oe(e,["svgRef","title"]);return r.a.createElement("svg",ye({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),ke,Ne,we,je,Ce,Ue,Ie,Te,Se,Me,Re,xe,Pe,Ae,Be)},De=r.a.forwardRef((function(e,t){return r.a.createElement(_e,ye({svgRef:t},e))})),Ge=(a.p,a(68),Object(V.b)({itemCount:Ee})),He=Object(s.b)(Ge,(function(e){return{toggleCartHidden:function(){return e(ee())}}}))((function(e){var t=e.toggleCartHidden,a=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(De,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},a))})),Le=(a(69),function(e){var t=e.item,a=t.imageUrl,n=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x $",n)))}),qe=(a(70),Object(V.b)({cartItems:ge})),ze=Object(z.f)(Object(s.b)(qe)((function(e){var t=e.cartItems,a=e.history,n=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(Le,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-cart"},"Your Cart is Empty")),r.a.createElement($,{onClick:function(){a.push("/checkout"),n(ee())}},"GO TO CHECKOUT"))}))),Ve=Object(V.a)([function(e){return e.user}],(function(e){return e.currentUser}));function Je(){return(Je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function We(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Fe=r.a.createElement("metadata",null,"\nCreated by potrace 1.15, written by Peter Selinger 2001-2017\n"),Ye=r.a.createElement("g",{transform:"translate(0.000000,137.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},r.a.createElement("path",{d:"M516 1362 c-3 -5 -64 -161 -136 -348 -72 -186 -145 -367 -161 -400 -31 -66 -97 -134 -128 -134 -11 0 -23 -4 -26 -10 -4 -7 48 -10 150 -10 102 0 154 3 150 10 -3 6 -15 10 -25 10 -10 0 -32 12 -49 26 -44 36 -42 87 8 217 21 56 69 183 106 282 37 99 71 183 74 187 4 4 37 -66 74 -157 l66 -164 -65 -62 c-261 -251 -167 -674 177 -789 55 -19 81 -21 185 -18 116 3 123 4 198 42 229 113 338 374 250 596 -83 209 -316 348 -524 312 -37 -6 -73 -14 -81 -17 -10 -4 -37 52 -104 215 -79 192 -93 220 -112 220 -12 0 -24 -4 -27 -8z m509 -453 c86 -41 159 -154 191 -297 22 -101 15 -262 -16 -351 -31 -88 -101 -177 -170 -215 -48 -27 -64 -31 -130 -30 -53 0 -87 6 -115 19 -90 43 -180 172 -206 293 -14 71 -6 269 14 332 19 57 49 120 58 120 10 0 79 -187 79 -216 0 -36 -50 -84 -89 -84 -16 0 -33 -4 -36 -10 -4 -7 72 -10 220 -10 209 0 272 8 177 23 -43 7 -79 41 -110 102 -41 82 -134 316 -128 322 3 3 27 12 53 19 62 18 150 10 208 -17z"})),Ke=function(e){var t=e.svgRef,a=e.title,n=We(e,["svgRef","title"]);return r.a.createElement("svg",Je({width:"55.000000pt",height:"40.000000pt",viewBox:"0 0 144.000000 137.000000",preserveAspectRatio:"xMidYMid meet",ref:t},n),a?r.a.createElement("title",null,a):null,Fe,Ye)},Qe=r.a.forwardRef((function(e,t){return r.a.createElement(Ke,Je({svgRef:t},e))})),Xe=(a.p,a(71),Object(V.b)({currentUser:Ve,hidden:fe})),Ze=Object(s.b)(Xe)((function(e){var t=e.currentUser,a=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(l.b,{className:"logo-container",to:"/"},r.a.createElement(Qe,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(l.b,{className:"option",to:"/shop"},"SHOP"),r.a.createElement(l.b,{className:"option",to:"/shop"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return ue.signOut()}},"SIGN OUT"):r.a.createElement(l.b,{className:"option",to:"/signin"},"SIGN IN"),r.a.createElement(He,null)),a?null:r.a.createElement(ze,null))})),$e=a(15),et=(a(72),function(e){var t=e.handleChange,a=e.label,n=Object(J.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label ")},a):null)}),tt=(a(73),function(e){Object(q.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(G.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(D.a)(_.a.mark((function e(t){var a,r,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,c=a.password,e.prev=2,e.next=5,ue.signInWithEmailAndPassword(r,c);case 5:n.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object($e.a)({},r,a))},n.state={email:"",password:""},n}return Object(H.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(et,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),r.a.createElement(et,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement($,{type:"submit"}," Sign in "),r.a.createElement($,{type:"button",onClick:be,isGoogleSignIn:!0},"Sign in with Google"))))}}]),a}(r.a.Component)),at=(a(74),function(e){Object(q.a)(a,e);var t=Object(L.a)(a);function a(){var e;return Object(G.a)(this,a),(e=t.call(this)).handleSubmit=function(){var t=Object(D.a)(_.a.mark((function t(a){var n,r,c,i,l,s,o;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.displayName,c=n.email,i=n.password,l=n.confirmPassword,i===l){t.next=5;break}return alert("Passwords Don't Match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,ue.createUserWithEmailAndPassword(c,i);case 8:return s=t.sent,o=s.user,t.next=12,me(o,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object($e.a)({},n,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(H.a)(a,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I Do Not Have an Account Yet"),r.a.createElement("span",null,"Sign Up with Your Email & Password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(et,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(et,{type:"email",name:"email",value:a,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(et,{type:"password",name:"password",value:n,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(et,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement($,{type:"submit"}," Sign Up")))}}]),a}(r.a.Component)),nt=(a(75),function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(tt,null),r.a.createElement(at,null))}),rt=(a(76),Object(s.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:y.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(te(t))},removeItem:function(t){return e(function(e){return{type:y.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,a=e.clearItem,n=e.addItem,c=e.removeItem,i=t.name,l=t.imageUrl,s=t.price,o=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:l,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},o),r.a.createElement("div",{className:"arrow",onClick:function(){return n(t)}},"\u276f")),r.a.createElement("span",{className:"price"},s),r.a.createElement("div",{className:"remove-button",onClick:function(){return a(t)}},"\u2715"))}))),ct=a(39),it=a.n(ct),lt=function(e){var t=e.price,a=100*t;return r.a.createElement(it.a,{label:"Pay Now",name:"ao",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/s/LEu",description:"Your total today is \xa3".concat(t),amount:a,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_SP0F533sYcVFXJBjGE3rat9v00fEy5pKQi"})},st=(a(77),Object(V.b)({cartItems:ge,total:ve})),ot=Object(s.b)(st)((function(e){var t=e.cartItems,a=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(rt,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"cart-total"},"TOTAL: \xa3",a),r.a.createElement("div",{className:"test-warning"},"** Test Credit Card Details for Payments **",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/21 - CVV: 123"),r.a.createElement(lt,{price:a}))})),mt=function(e){Object(q.a)(a,e);var t=Object(L.a)(a);function a(){var e;Object(G.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(H.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=ue.onAuthStateChanged(function(){var t=Object(D.a)(_.a.mark((function t(a){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,me(a);case 3:t.sent.onSnapshot((function(t){e(Object(g.a)({id:t.id},t.data()))}));case 5:e(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Ze,null),r.a.createElement("switch",null,r.a.createElement(z.b,{exact:!0,path:"/",component:Q}),r.a.createElement(z.b,{path:"/shop",component:le}),r.a.createElement(z.b,{exact:!0,path:"/checkout",component:ot}),r.a.createElement(z.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?r.a.createElement(z.a,{to:"/"}):r.a.createElement(nt,null)}})))}}]),a}(r.a.Component),ut=Object(V.b)({currentUser:Ve}),pt=Object(s.b)(ut,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:f,payload:e}}(t))}}}))(mt);i.a.render(r.a.createElement(s.a,{store:P},r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(o.a,{persistor:A},r.a.createElement(pt,null))))),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.6c06ff9e.chunk.js.map