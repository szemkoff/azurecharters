"use strict";(self.webpackChunkcharter_framework=self.webpackChunkcharter_framework||[]).push([[362],{5680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),o=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=o(a),m=r,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(y,c(c({ref:t},p),{},{components:a})):n.createElement(y,c({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,c=new Array(s);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,c[1]=i;for(var o=2;o<s;o++)c[o]=a[o];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8927:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var n=a(8168),r=(a(6540),a(5680));const s={},c="Charter Website Templates",i={unversionedId:"resources/templates",id:"resources/templates",title:"Charter Website Templates",description:"This document provides templates for Tilda implementation of charter websites.",source:"@site/docs/resources/templates.md",sourceDirName:"resources",slug:"/resources/templates",permalink:"/azurecharters/docs/resources/templates",draft:!1,editUrl:"https://github.com/szemkoff/azurecharters/tree/main/docs/resources/templates.md",tags:[],version:"current",frontMatter:{},sidebar:"frameworkSidebar",previous:{title:"Code Samples",permalink:"/azurecharters/docs/development/code-samples"}},l={},o=[{value:"Yacht Listing Templates",id:"yacht-listing-templates",level:2},{value:"Standard Yacht Card",id:"standard-yacht-card",level:3},{value:"Featured Yacht Block",id:"featured-yacht-block",level:3},{value:"Inquiry Form Templates",id:"inquiry-form-templates",level:2},{value:"Quick Inquiry Form",id:"quick-inquiry-form",level:3}],p={toc:o},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"charter-website-templates"},"Charter Website Templates"),(0,r.yg)("p",null,"This document provides templates for Tilda implementation of charter websites."),(0,r.yg)("h2",{id:"yacht-listing-templates"},"Yacht Listing Templates"),(0,r.yg)("h3",{id:"standard-yacht-card"},"Standard Yacht Card"),(0,r.yg)("p",null,"Use this template for consistent yacht listings across your site:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<div class="t-card yacht-card">\n  <div class="yacht-image">\n    <img src="{{yacht_image}}" alt="{{yacht_name}}">\n    <div class="yacht-overlay">\n      <span class="yacht-length">{{yacht_length}}m</span>\n      <span class="yacht-year">{{yacht_year}}</span>\n    </div>\n  </div>\n  <div class="yacht-details">\n    <h3 class="yacht-name">{{yacht_name}}</h3>\n    <div class="yacht-specs">\n      <div class="spec">\n        <i class="icon-guests"></i>\n        <span>{{yacht_guests}} Guests</span>\n      </div>\n      <div class="spec">\n        <i class="icon-cabins"></i>\n        <span>{{yacht_cabins}} Cabins</span>\n      </div>\n      <div class="spec">\n        <i class="icon-crew"></i>\n        <span>{{yacht_crew}} Crew</span>\n      </div>\n    </div>\n    <div class="yacht-price">\n      From {{yacht_price}} per week\n    </div>\n    <a href="{{yacht_detail_url}}" class="t-btn t-btn_sm">View Details</a>\n  </div>\n</div>\n')),(0,r.yg)("h3",{id:"featured-yacht-block"},"Featured Yacht Block"),(0,r.yg)("p",null,"Template for highlighting premium yacht offerings:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<div class="t-container featured-yacht">\n  <div class="t-col t-col_6">\n    <img src="{{yacht_image}}" alt="{{yacht_name}}" class="featured-yacht-image">\n  </div>\n  <div class="t-col t-col_6">\n    <div class="featured-yacht-content">\n      <span class="featured-tag">Featured</span>\n      <h2 class="featured-yacht-name">{{yacht_name}}</h2>\n      <p class="featured-yacht-desc">{{yacht_description}}</p>\n      <div class="featured-yacht-specs">\n        <div class="spec-group">\n          <div class="spec"><strong>Length:</strong> {{yacht_length}}m</div>\n          <div class="spec"><strong>Beam:</strong> {{yacht_beam}}m</div>\n          <div class="spec"><strong>Year:</strong> {{yacht_year}}</div>\n        </div>\n        <div class="spec-group">\n          <div class="spec"><strong>Guests:</strong> {{yacht_guests}}</div>\n          <div class="spec"><strong>Cabins:</strong> {{yacht_cabins}}</div>\n          <div class="spec"><strong>Crew:</strong> {{yacht_crew}}</div>\n        </div>\n      </div>\n      <div class="featured-yacht-price">\n        From <strong>{{yacht_price}}</strong> per week\n      </div>\n      <div class="featured-yacht-cta">\n        <a href="{{yacht_detail_url}}" class="t-btn">View Details</a>\n        <a href="{{enquiry_url}}" class="t-btn t-btn_secondary">Enquire Now</a>\n      </div>\n    </div>\n  </div>\n</div>\n')),(0,r.yg)("h2",{id:"inquiry-form-templates"},"Inquiry Form Templates"),(0,r.yg)("h3",{id:"quick-inquiry-form"},"Quick Inquiry Form"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},'<form class="t-form inquiry-form">\n  <div class="t-form__inputsbox">\n    <div class="t-input-group">\n      <input type="text" name="name" class="t-input" placeholder="Your Name" required>\n    </div>\n    <div class="t-input-group">\n      <input type="email" name="email" class="t-input" placeholder="Email" required>\n    </div>\n    <div class="t-input-group">\n      <select name="yacht" class="t-input">\n        <option value="">Select Yacht</option>\n        {{#each yachts}}\n        <option value="{{id}}">{{name}}</option>\n        {{/each}}\n      </select>\n    </div>\n    <div class="t-input-group">\n      <textarea name="message" class="t-input" placeholder="Your Message"></textarea>\n    </div>\n    <div class="t-form__submit">\n      <button type="submit" class="t-submit">Send Inquiry</button>\n    </div>\n  </div>\n</form>\n')),(0,r.yg)("p",null,"More templates will be added in future updates."))}u.isMDXComponent=!0}}]);