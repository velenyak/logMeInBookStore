webpackJsonp([1],{"+h1B":function(l,n,u){"use strict";var t=u("/oeL"),e=u("aR8+"),o=u("wQAS"),i=u("f4wg"),r=u("HIgh"),a=u("q4dy"),c=u("qbdv"),s=u("fc+i"),_=u("bm2B"),f=u("CPp0"),d=u("BkNc"),p=u("gdNq"),g=u("wVMA"),h=u("Ro/G"),m=u("diW6"),v=u("D0f4"),b=u("nPHD");u.d(n,"a",function(){return k});var k=t.b(e.a,[o.a],function(l){return t.c([t.d(512,t.e,t.f,[[8,[i.a,r.a,a.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,c.a,c.b,[t.h]),t.d(5120,t.j,t.k,[]),t.d(5120,t.l,t.m,[]),t.d(5120,t.n,t.o,[]),t.d(4608,s.b,s.c,[c.c]),t.d(6144,t.p,null,[s.b]),t.d(4608,s.d,s.e,[]),t.d(5120,s.f,function(l,n,u,t){return[new s.g(l),new s.h(n),new s.i(u,t)]},[c.c,c.c,c.c,s.d]),t.d(4608,s.j,s.j,[s.f,t.q]),t.d(135680,s.k,s.k,[c.c]),t.d(4608,s.l,s.l,[s.j,s.k]),t.d(6144,t.r,null,[s.l]),t.d(6144,s.m,null,[s.k]),t.d(4608,t.s,t.s,[t.q]),t.d(4608,s.n,s.n,[c.c]),t.d(4608,s.o,s.o,[c.c]),t.d(4608,_.a,_.a,[]),t.d(4608,f.a,f.a,[]),t.d(4608,f.b,f.c,[]),t.d(5120,f.d,f.e,[]),t.d(4608,f.f,f.f,[f.a,f.b,f.d]),t.d(4608,f.g,f.h,[]),t.d(5120,f.i,f.j,[f.f,f.g]),t.d(5120,d.a,d.b,[d.c]),t.d(4608,d.d,d.d,[]),t.d(6144,d.e,null,[d.d]),t.d(135680,d.f,d.f,[d.c,t.t,t.u,t.v,d.e]),t.d(4608,d.g,d.g,[]),t.d(5120,d.h,d.i,[d.j]),t.d(5120,t.w,function(l){return[l]},[d.h]),t.d(4608,p.a,p.a,[f.i]),t.d(4608,g.a,g.a,[p.a]),t.d(4608,h.a,h.a,[]),t.d(512,c.d,c.d,[]),t.d(1024,t.x,s.p,[]),t.d(1024,t.y,function(){return[d.k()]},[]),t.d(512,d.j,d.j,[t.v]),t.d(1024,t.z,function(l,n,u){return[s.q(l,n),d.l(u)]},[[2,s.r],[2,t.y],d.j]),t.d(512,t.A,t.A,[[2,t.z]]),t.d(131584,t.B,t.B,[t.q,t.C,t.v,t.x,t.e,t.A]),t.d(2048,t.D,null,[t.B]),t.d(512,t.E,t.E,[t.D]),t.d(512,s.s,s.s,[[3,s.s]]),t.d(512,_.b,_.b,[]),t.d(512,_.c,_.c,[]),t.d(512,f.k,f.k,[]),t.d(1024,d.m,d.n,[[3,d.c]]),t.d(512,d.o,d.p,[]),t.d(512,d.q,d.q,[]),t.d(256,d.r,{},[]),t.d(1024,c.e,d.s,[c.f,[2,c.g],d.r]),t.d(512,c.h,c.h,[c.e]),t.d(512,t.u,t.u,[]),t.d(512,t.t,t.F,[t.u,[2,t.G]]),t.d(1024,d.t,function(){return[[{path:"",redirectTo:"/main",pathMatch:"full"},{path:"main",component:m.a},{path:"book/:id",component:v.a,resolve:{book:g.a}}]]},[]),t.d(1024,d.c,d.u,[t.D,d.o,d.q,c.h,t.v,t.t,t.u,d.t,d.r,[2,d.v],[2,d.w]]),t.d(512,d.x,d.x,[[2,d.m],[2,d.c]]),t.d(512,b.a,b.a,[]),t.d(512,e.a,e.a,[])])})},0:function(l,n,u){l.exports=u("cDNt")},"8cHN":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[".price[_ngcontent-%COMP%]{font-size:1.4em}"]},D0f4:function(l,n,u){"use strict";var t=u("BkNc"),e=u("gdNq"),o=u("Ro/G");u.d(n,"a",function(){return i});var i=function(){function l(l,n,u){this.route=l,this.bookService=n,this.cartService=u}return l.prototype.ngOnInit=function(){var l=this;this.orderCount=1,this.route.data.subscribe(function(n){l.book=n.book,l.authors=l.bookService.convertAuthors(l.book.volumeInfo.authors),l.price=l.setPrice(l.book)})},l.prototype.setPrice=function(l){switch(l.saleInfo.saleability){case"FOR_SALE":return"Price: "+l.saleInfo.retailPrice.amount+" "+l.saleInfo.retailPrice.currencyCode;default:return"Price: FREE"}},l.prototype.addToCart=function(l,n){var u={book:l,count:n},t=JSON.parse(sessionStorage.getItem("cart"));if(null==t)t=[],t.push(u);else{for(var e=!1,o=0;o<t.length;o++)t[o].book.id==u.book.id&&(e=!0,t[o].count+=u.count);e||t.push(u)}sessionStorage.setItem("cart",JSON.stringify(t)),this.cartService.newItem(t)},l.ctorParameters=function(){return[{type:t.a},{type:e.a},{type:o.a}]},l}()},HIgh:function(l,n,u){"use strict";function t(l){return i._26(0,[(l()(),i._27(0,null,null,40,"div",[["class","container top-buffer-md"]],null,null,null,null,null)),(l()(),i._29(null,["\n  "])),(l()(),i._27(0,null,null,37,"div",[["class","row"]],null,null,null,null,null)),(l()(),i._29(null,["\n    "])),(l()(),i._27(0,null,null,3,"div",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),i._29(null,["\n      "])),(l()(),i._27(0,null,null,0,"img",[["class","img-responsive"]],[[8,"src",4]],null,null,null,null)),(l()(),i._29(null,["\n    "])),(l()(),i._29(null,["\n    "])),(l()(),i._27(0,null,null,12,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),i._29(null,["\n      "])),(l()(),i._27(0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),i._29(null,["Title: ",""])),(l()(),i._29(null,["\n      "])),(l()(),i._27(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i._29(null,["Authors: ",""])),(l()(),i._29(null,["\n      "])),(l()(),i._27(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),i._29(null,["Description: "])),(l()(),i._29(null,["\n      "])),(l()(),i._27(0,null,null,0,"span",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),i._29(null,["\n    "])),(l()(),i._29(null,["\n    "])),(l()(),i._27(0,null,null,15,"div",[["class","col-sm-3 text-center"]],null,null,null,null,null)),(l()(),i._29(null,["\n      "])),(l()(),i._27(0,null,null,1,"p",[["class","text-center label label-danger price"]],null,null,null,null,null)),(l()(),i._29(null,["",""])),(l()(),i._29(null,["\n      "])),(l()(),i._27(0,null,null,6,"input",[["class","form-control top-buffer-sm text-center"],["max","999"],["min","1"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,e=l.component;if("input"===n){t=!1!==i._31(l,29)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==i._31(l,29).onTouched()&&t}if("compositionstart"===n){t=!1!==i._31(l,29)._compositionStart()&&t}if("compositionend"===n){t=!1!==i._31(l,29)._compositionEnd(u.target.value)&&t}if("change"===n){t=!1!==i._31(l,30).onChange(u.target.value)&&t}if("input"===n){t=!1!==i._31(l,30).onChange(u.target.value)&&t}if("blur"===n){t=!1!==i._31(l,30).onTouched()&&t}if("ngModelChange"===n){t=!1!==(e.orderCount=u)&&t}return t},null,null)),i._28(16384,null,0,a.d,[i.O,i.P,[2,a.e]],null,null),i._28(16384,null,0,a.f,[i.O,i.P],null,null),i._34(1024,null,a.g,function(l,n){return[l,n]},[a.d,a.f]),i._28(671744,null,0,a.h,[[8,null],[8,null],[8,null],[2,a.g]],{model:[0,"model"]},{update:"ngModelChange"}),i._34(2048,null,a.i,null,[a.h]),i._28(16384,null,0,a.j,[a.i],null,null),(l()(),i._29(null,["\n      "])),(l()(),i._27(0,null,null,1,"button",[["class","btn btn-success btn-lg top-buffer-sm"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.addToCart(e.book,e.orderCount)&&t}return t},null,null)),(l()(),i._29(null,["Add to Cart"])),(l()(),i._29(null,["\n    "])),(l()(),i._29(null,["\n  "])),(l()(),i._29(null,["\n"]))],function(l,n){l(n,32,0,n.component.orderCount)},function(l,n){var u=n.component;l(n,6,0,u.book.volumeInfo.imageLinks.thumbnail),l(n,12,0,null==u.book?null:u.book.volumeInfo.title),l(n,15,0,u.authors),l(n,20,0,null==u.book?null:u.book.volumeInfo.description),l(n,26,0,u.price),l(n,28,0,i._31(n,34).ngClassUntouched,i._31(n,34).ngClassTouched,i._31(n,34).ngClassPristine,i._31(n,34).ngClassDirty,i._31(n,34).ngClassValid,i._31(n,34).ngClassInvalid,i._31(n,34).ngClassPending)})}function e(l){return i._26(0,[(l()(),i._27(0,null,null,2,"app-book",[],null,null,null,t,p)),i._34(512,null,c.a,c.a,[s.i]),i._28(114688,null,0,r.a,[_.a,c.a,f.a],null,null)],function(l,n){l(n,2,0)},null)}var o=u("8cHN"),i=u("/oeL"),r=u("D0f4"),a=u("bm2B"),c=u("gdNq"),s=u("CPp0"),_=u("BkNc"),f=u("Ro/G");u.d(n,"a",function(){return g});var d=[o.a],p=i._25({encapsulation:0,styles:d,data:{}}),g=i._30("app-book",r.a,e,{},{},[])},LOXf:function(l,n,u){"use strict";function t(l){return i._26(0,[(l()(),i._27(0,null,null,22,"div",[["class","container top-buffer-md"]],null,null,null,null,null)),(l()(),i._29(null,["\n    "])),(l()(),i._27(0,null,null,19,"div",[["class","row"]],null,null,null,null,null)),(l()(),i._29(null,["\n        "])),(l()(),i._27(0,null,null,6,"div",[["class","col-xs-offset-3 col-xs-6"]],null,null,null,null,null)),(l()(),i._29(null,["\n            "])),(l()(),i._27(0,null,null,3,"h3",[["class","text-center clickable"]],null,[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==i._31(l,7).onClick()&&t}return t},null,null)),i._28(16384,null,0,r.z,[r.c,r.a,[8,null],i.O,i.P],{routerLink:[0,"routerLink"]},null),i._32(1),(l()(),i._29(null,["Book Store"])),(l()(),i._29(null,["\n        "])),(l()(),i._29(null,["\n        "])),(l()(),i._27(0,null,null,8,"div",[["class","col-xs-3"]],null,null,null,null,null)),(l()(),i._29(null,["\n            "])),(l()(),i._27(0,null,null,5,"div",[["class","text-right"]],null,null,null,null,null)),(l()(),i._29(null,["\n                "])),(l()(),i._27(0,null,null,2,"span",[["class","fa fa-2x clickable"]],null,null,null,null,null)),i._28(278528,null,0,a.n,[i.l,i.n,i.P,i._7],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),i._33({"fa-shopping-cart":0,"fa-cart-plus":1}),(l()(),i._29(null,["\n            "])),(l()(),i._29(null,["\n        "])),(l()(),i._29(null,["\n    "])),(l()(),i._29(null,["\n"]))],function(l,n){var u=n.component;l(n,7,0,l(n,8,0,"/main"));l(n,17,0,"fa fa-2x clickable",l(n,18,0,u.isCartEmpty,!u.isCartEmpty))},null)}function e(l){return i._26(0,[(l()(),i._27(0,null,null,1,"app-header",[],null,null,null,t,f)),i._28(114688,null,0,c.a,[s.a],null,null)],function(l,n){l(n,1,0)},null)}var o=u("gqlS"),i=u("/oeL"),r=u("BkNc"),a=u("qbdv"),c=u("XV61"),s=u("Ro/G");u.d(n,"b",function(){return f}),n.a=t;var _=[o.a],f=i._25({encapsulation:0,styles:_,data:{}});i._30("app-header",c.a,e,{},{},[])},NhKt:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[""]},"Ro/G":function(l,n,u){"use strict";var t=u("/oeL");u.d(n,"a",function(){return e});var e=function(){function l(){this.cartChange=new t.V}return l.prototype.newItem=function(l){this.cartChange.emit(l)},l.ctorParameters=function(){return[]},l}()},XV61:function(l,n,u){"use strict";var t=u("Ro/G");u.d(n,"a",function(){return e});var e=function(){function l(l){this.cartService=l}return l.prototype.ngOnInit=function(){var l=this;this.collapsed="yes",this.isCartEmpty=null==sessionStorage.getItem("cart"),this.subscription=this.cartService.cartChange.subscribe(function(n){console.log(n),l.isCartEmpty=0==n.length})},l.prototype.toggle=function(){this.collapsed="yes"===this.collapsed?"no":"yes"},l.ctorParameters=function(){return[{type:t.a}]},l}()},"aR8+":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},cDNt:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("/oeL"),e=u("p5Ee"),o=u("+h1B"),i=u("fc+i");e.a.production&&u.i(t.a)(),u.i(i.a)().bootstrapModuleFactory(o.a)},diW6:function(l,n,u){"use strict";var t=u("gdNq");u.d(n,"a",function(){return e});var e=function(){function l(l){this.bookService=l}return l.prototype.ngOnInit=function(){this.activePageNumbers=Array.from(Array(8).keys()),this.isLoading=!1},l.prototype.searchBooks=function(l,n){var u=this;this.isLoading=!0,this.query=l;var t=10*(n-1);this.bookService.getBooks(encodeURIComponent(l),t).subscribe(function(l){u.isLoading=!1,u.books=u.convertResponse(l.items),u.currentPage=n,u.maxPage=Math.ceil(l.totalItems/10),u.activePageNumbers=u.getActivePageNumbers(u.maxPage,u.currentPage)})},l.prototype.convertResponse=function(l){for(var n=[],u=0,t=l;u<t.length;u++){var e=t[u],o={id:e.id,title:e.volumeInfo.title,description:e.volumeInfo.description,authors:this.bookService.convertAuthors(e.volumeInfo.authors),publishDate:this.convertPublishDate(e.volumeInfo.publishedDate),imageLinks:e.volumeInfo.imageLinks||{smallThumbnail:"https://books.google.hu//googlebooks/images/no_cover_thumb.gif"}};n.push(o)}return n},l.prototype.convertPublishDate=function(l){return void 0!=l?l.length>4?l.substr(0,l.indexOf("-")):l:"Unknown"},l.prototype.getActivePageNumbers=function(l,n){for(var u=[],t=this.getMinActivePageNumber(n),e=t;e<t+8&&e<=this.maxPage;)u.push(e),e++;return u},l.prototype.getMinActivePageNumber=function(l){for(var n=l;n>1&&n>l-3;)n--;return n},l.prototype.switchPage=function(l){this.currentPage!=l&&this.searchBooks(this.query,l)},l.ctorParameters=function(){return[{type:t.a}]},l}()},eXs4:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=[".page-item[_ngcontent-%COMP%]:hover{cursor:pointer!important}.book-title[_ngcontent-%COMP%]{font-size:1.3em;cursor:pointer}.book-description[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:3;display:-webkit-box;-webkit-box-orient:vertical;line-height:1em;max-height:3em}"]},f4wg:function(l,n,u){"use strict";function t(l){return s._26(0,[(l()(),s._27(0,null,null,3,"div",[["class","text-center top-buffer-md"]],null,null,null,null,null)),(l()(),s._29(null,["\n    "])),(l()(),s._27(0,null,null,0,"span",[["class","fa fa-spinner fa-pulse fa-5x"]],null,null,null,null,null)),(l()(),s._29(null,["\n  "]))],null,null)}function e(l){return s._26(0,[(l()(),s._27(0,null,null,26,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),s._29(null,["\n          "])),(l()(),s._27(0,null,null,23,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),s._29(null,["\n            "])),(l()(),s._27(0,null,null,15,"div",[["class","col-sm-8"]],null,null,null,null,null)),(l()(),s._29(null,["\n              "])),(l()(),s._27(0,null,null,3,"a",[["class","book-title"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==s._31(l,7).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t}return t},null,null)),s._28(671744,null,0,_.A,[_.c,_.a,f.e],{routerLink:[0,"routerLink"]},null),s._32(2),(l()(),s._29(null,["",""])),(l()(),s._29(null,["\n              "])),(l()(),s._27(0,null,null,1,"p",[["class","book-description"]],null,null,null,null,null)),(l()(),s._29(null,["\n                ","\n              "])),(l()(),s._29(null,["\n              "])),(l()(),s._27(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s._29(null,["\n                Authors: ","\n              "])),(l()(),s._29(null,["\n              "])),(l()(),s._27(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),s._29(null,["\n                Publish Date: ","\n              "])),(l()(),s._29(null,["\n            "])),(l()(),s._29(null,["\n            "])),(l()(),s._27(0,null,null,3,"div",[["class","col-sm-3 pull-right"]],null,null,null,null,null)),(l()(),s._29(null,["\n              "])),(l()(),s._27(0,null,null,0,"img",[["class","img-responsive pull-right"]],[[8,"src",4]],null,null,null,null)),(l()(),s._29(null,["\n            "])),(l()(),s._29(null,["\n          "])),(l()(),s._29(null,["\n        "]))],function(l,n){l(n,7,0,l(n,8,0,"/book",n.context.$implicit.id))},function(l,n){l(n,6,0,s._31(n,7).target,s._31(n,7).href),l(n,9,0,n.context.$implicit.title),l(n,12,0,n.context.$implicit.description),l(n,15,0,n.context.$implicit.authors),l(n,18,0,n.context.$implicit.publishDate),l(n,23,0,n.context.$implicit.imageLinks.smallThumbnail)})}function o(l){return s._26(0,[(l()(),s._27(0,null,null,6,"li",[["class","page-item"]],null,null,null,null,null)),s._28(278528,null,0,f.n,[s.l,s.n,s.P,s._7],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),s._33({active:0}),(l()(),s._29(null,["\n          "])),(l()(),s._27(0,null,null,1,"a",[["class","page-link"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.switchPage(l.context.$implicit)&&t}return t},null,null)),(l()(),s._29(null,["",""])),(l()(),s._29(null,["\n        "]))],function(l,n){var u=n.component;l(n,1,0,"page-item",l(n,2,0,n.context.$implicit==u.currentPage))},function(l,n){l(n,5,0,n.context.$implicit)})}function i(l){return s._26(0,[(l()(),s._27(0,null,null,44,"div",[],null,null,null,null,null)),(l()(),s._29(null,["\n    "])),(l()(),s._27(0,null,null,7,"div",[["class","top-buffer-lg"]],null,null,null,null,null)),(l()(),s._29(null,["\n      "])),(l()(),s._27(0,null,null,4,"ul",[["class","list-group"]],null,null,null,null,null)),(l()(),s._29(null,["\n        "])),(l()(),s._35(16777216,null,null,1,null,e)),s._28(802816,null,0,f.o,[s.W,s._8,s.l],{ngForOf:[0,"ngForOf"]},null),(l()(),s._29(null,["\n      "])),(l()(),s._29(null,["\n    "])),(l()(),s._29(null,["\n    "])),(l()(),s._29(null,["\n    "])),(l()(),s._27(0,null,null,31,"div",[["class","top-buffer-md"]],null,null,null,null,null)),(l()(),s._29(null,["\n      "])),(l()(),s._27(0,null,null,28,"ul",[["class","pagination"]],null,null,null,null,null)),(l()(),s._29(null,["\n        "])),(l()(),s._27(0,null,null,3,"li",[["class","page-item"]],null,null,null,null,null)),(l()(),s._29(null,["\n          "])),(l()(),s._27(0,null,null,0,"span",[["class","fa fa-angle-double-left"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.switchPage(1)&&t}return t},null,null)),(l()(),s._29(null,["\n        "])),(l()(),s._29(null,["\n        "])),(l()(),s._27(0,null,null,5,"li",[["class","page-item"]],null,null,null,null,null)),s._28(278528,null,0,f.n,[s.l,s.n,s.P,s._7],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),s._33({disabled:0}),(l()(),s._29(null,["\n          "])),(l()(),s._27(0,null,null,0,"span",[["class","fa fa-angle-left"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.switchPage(e.currentPage-1)&&t}return t},null,null)),(l()(),s._29(null,["\n        "])),(l()(),s._29(null,["\n        "])),(l()(),s._35(16777216,null,null,1,null,o)),s._28(802816,null,0,f.o,[s.W,s._8,s.l],{ngForOf:[0,"ngForOf"]},null),(l()(),s._29(null,["\n        "])),(l()(),s._27(0,null,null,5,"li",[["class","page-item"]],null,null,null,null,null)),s._28(278528,null,0,f.n,[s.l,s.n,s.P,s._7],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),s._33({disabled:0}),(l()(),s._29(null,["\n          "])),(l()(),s._27(0,null,null,0,"span",[["class","fa fa-angle-right"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.switchPage(e.currentPage+1)&&t}return t},null,null)),(l()(),s._29(null,["\n        "])),(l()(),s._29(null,["\n        "])),(l()(),s._27(0,null,null,3,"li",[["class","page-item"]],null,null,null,null,null)),(l()(),s._29(null,["\n          "])),(l()(),s._27(0,null,null,0,"span",[["class","fa fa-angle-double-right"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.switchPage(e.maxPage)&&t}return t},null,null)),(l()(),s._29(null,["\n        "])),(l()(),s._29(null,["\n      "])),(l()(),s._29(null,["\n    "])),(l()(),s._29(null,["\n  "]))],function(l,n){var u=n.component;l(n,7,0,u.books);l(n,22,0,"page-item",l(n,23,0,u.currentPage-1<1)),l(n,29,0,u.activePageNumbers);l(n,32,0,"page-item",l(n,33,0,u.currentPage+1>u.maxPage))},null)}function r(l){return s._26(0,[(l()(),s._27(0,null,null,34,"div",[["class","container top-buffer-lg"]],null,null,null,null,null)),(l()(),s._29(null,["\n  "])),(l()(),s._29(null,["\n  "])),(l()(),s._27(0,null,null,22,"div",[["class","row"]],null,null,null,null,null)),(l()(),s._29(null,["\n    "])),(l()(),s._27(0,null,null,19,"div",[["class","col-sm-offset-3 col-sm-6"]],null,null,null,null,null)),(l()(),s._29(null,["\n      "])),(l()(),s._27(0,null,null,16,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),s._29(null,["\n        "])),(l()(),s._27(0,null,null,5,"input",[["class","form-control"],["placeholder","Search..."],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup.enter"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,e=l.component;if("input"===n){t=!1!==s._31(l,10)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==s._31(l,10).onTouched()&&t}if("compositionstart"===n){t=!1!==s._31(l,10)._compositionStart()&&t}if("compositionend"===n){t=!1!==s._31(l,10)._compositionEnd(u.target.value)&&t}if("ngModelChange"===n){t=!1!==(e.searchText=u)&&t}if("keyup.enter"===n){t=!1!==e.searchBooks(e.searchText,1)&&t}return t},null,null)),s._28(16384,null,0,p.d,[s.O,s.P,[2,p.e]],null,null),s._34(1024,null,p.g,function(l){return[l]},[p.d]),s._28(671744,null,0,p.h,[[8,null],[8,null],[8,null],[2,p.g]],{model:[0,"model"]},{update:"ngModelChange"}),s._34(2048,null,p.i,null,[p.h]),s._28(16384,null,0,p.j,[p.i],null,null),(l()(),s._29(null,["\n        "])),(l()(),s._27(0,null,null,6,"span",[["class","input-group-btn"]],null,null,null,null,null)),(l()(),s._29(null,["\n          "])),(l()(),s._27(0,null,null,3,"button",[["class","btn btn-default"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.searchBooks(e.searchText,1)&&t}return t},null,null)),(l()(),s._29(null,["\n            "])),(l()(),s._27(0,null,null,0,"span",[["class","fa fa-search"]],null,null,null,null,null)),(l()(),s._29(null,["\n          "])),(l()(),s._29(null,["\n        "])),(l()(),s._29(null,["\n      "])),(l()(),s._29(null,["\n    "])),(l()(),s._29(null,["\n  "])),(l()(),s._29(null,["\n  "])),(l()(),s._29(null,["\n  "])),(l()(),s._35(16777216,null,null,1,null,t)),s._28(16384,null,0,f.p,[s.W,s._8],{ngIf:[0,"ngIf"]},null),(l()(),s._29(null,["\n  "])),(l()(),s._29(null,["\n  "])),(l()(),s._35(16777216,null,null,1,null,i)),s._28(16384,null,0,f.p,[s.W,s._8],{ngIf:[0,"ngIf"]},null),(l()(),s._29(null,["\n"]))],function(l,n){var u=n.component;l(n,12,0,u.searchText),l(n,29,0,u.isLoading),l(n,33,0,(null==u.books?null:u.books.length)>0)},function(l,n){var u=n.component;l(n,9,0,s._31(n,14).ngClassUntouched,s._31(n,14).ngClassTouched,s._31(n,14).ngClassPristine,s._31(n,14).ngClassDirty,s._31(n,14).ngClassValid,s._31(n,14).ngClassInvalid,s._31(n,14).ngClassPending),l(n,18,0,void 0==u.searchText||0==u.searchText.length)})}function a(l){return s._26(0,[(l()(),s._27(0,null,null,2,"app-main",[],null,null,null,r,v)),s._34(512,null,g.a,g.a,[h.i]),s._28(114688,null,0,d.a,[g.a],null,null)],function(l,n){l(n,2,0)},null)}var c=u("eXs4"),s=u("/oeL"),_=u("BkNc"),f=u("qbdv"),d=u("diW6"),p=u("bm2B"),g=u("gdNq"),h=u("CPp0");u.d(n,"a",function(){return b});var m=[c.a],v=s._25({encapsulation:0,styles:m,data:{}}),b=s._30("app-main",d.a,a,{},{},[])},gdNq:function(l,n,u){"use strict";var t=u("CPp0"),e=u("5v8a");u.n(e);u.d(n,"a",function(){return o});var o=function(){function l(l){this.http=l}return l.prototype.getBooks=function(l,n){return this.http.get("https://www.googleapis.com/books/v1/volumes?q="+l+"+intitle&startIndex="+n).map(function(l){return l.json()})},l.prototype.getBook=function(l){return this.http.get("https://www.googleapis.com/books/v1/volumes/"+l).map(function(l){return l.json()})},l.prototype.convertAuthors=function(l){var n="";if(void 0!=l){for(var u=0;u<l.length-2;u++)n=n.concat(l[u]+", ");return n.concat(l[l.length-1])}return"Unknown"},l.ctorParameters=function(){return[{type:t.i}]},l}()},gqlS:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=["h3[_ngcontent-%COMP%]{margin-top:0}"]},nPHD:function(l,n,u){"use strict";var t=u("diW6"),e=u("D0f4"),o=u("wVMA");u.d(n,"a",function(){return i});var i=(t.a,e.a,o.a,function(){function l(){}return l}())},p5Ee:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t={production:!0}},q4dy:function(l,n,u){"use strict";function t(l){return i._26(0,[(l()(),i._27(0,null,null,1,"app-header",[],null,null,null,r.a,r.b)),i._28(114688,null,0,a.a,[c.a],null,null),(l()(),i._29(null,["\n"])),(l()(),i._27(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),i._28(212992,null,0,s.y,[s.q,i.W,i.e,[8,null],i.T],null,null),(l()(),i._29(null,["\n"])),(l()(),i._27(0,null,null,0,"footer",[],null,null,null,null,null))],function(l,n){l(n,1,0),l(n,4,0)},null)}function e(l){return i._26(0,[(l()(),i._27(0,null,null,1,"app-root",[],null,null,null,t,d)),i._28(49152,null,0,_.a,[],null,null)],null,null)}var o=u("NhKt"),i=u("/oeL"),r=u("LOXf"),a=u("XV61"),c=u("Ro/G"),s=u("BkNc"),_=u("wQAS");u.d(n,"a",function(){return p});var f=[o.a],d=i._25({encapsulation:0,styles:f,data:{}}),p=i._30("app-root",_.a,e,{},{},[])},qtrl:function(l,n){function u(l){throw new Error("Cannot find module '"+l+"'.")}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="qtrl"},wQAS:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){this.title="app works!"}return l}()},wVMA:function(l,n,u){"use strict";var t=u("gdNq");u.d(n,"a",function(){return e});var e=function(){function l(l){this.bookService=l}return l.prototype.resolve=function(l,n){var u=l.params.id;return this.bookService.getBook(u)},l.ctorParameters=function(){return[{type:t.a}]},l}()}},[0]);