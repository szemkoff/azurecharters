"use strict";(self.webpackChunkcharter_framework=self.webpackChunkcharter_framework||[]).push([[5834],{8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var s=i(6540);const n={},r=s.createContext(n);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(r.Provider,{value:t},e.children)}},8949:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=i(4848),n=i(8453);const r={id:"site-structure",title:"Website Structure",sidebar_position:2,description:"Comprehensive Charter Business Website Structure for Tilda Implementation"},a="Comprehensive Charter Business Website Structure",o={id:"website-architecture/site-structure",title:"Website Structure",description:"Comprehensive Charter Business Website Structure for Tilda Implementation",source:"@site/docs/website-architecture/site-structure.md",sourceDirName:"website-architecture",slug:"/website-architecture/site-structure",permalink:"/azurecharters/docs/website-architecture/site-structure",draft:!1,unlisted:!1,editUrl:"https://github.com/szemkoff/azurecharters/tree/main/docs/website-architecture/site-structure.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"site-structure",title:"Website Structure",sidebar_position:2,description:"Comprehensive Charter Business Website Structure for Tilda Implementation"},sidebar:"frameworkSidebar",previous:{title:"Website Architecture Overview",permalink:"/azurecharters/docs/website-architecture/overview"},next:{title:"Deployment Plan",permalink:"/azurecharters/docs/website-architecture/deployment-plan"}},c={},l=[{value:"Main Website Architecture (Visual Map)",id:"main-website-architecture-visual-map",level:2},{value:"Implementation Notes",id:"implementation-notes",level:2},{value:"Getting Started",id:"getting-started",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"comprehensive-charter-business-website-structure",children:"Comprehensive Charter Business Website Structure"}),"\n",(0,s.jsx)(t.p,{children:"This document outlines the complete structure for implementing a yacht charter business website using Tilda. Use this as a reference guide when building your site sections."}),"\n",(0,s.jsx)(t.h2,{id:"main-website-architecture-visual-map",children:"Main Website Architecture (Visual Map)"}),"\n",(0,s.jsx)(t.mermaid,{value:"%%{init: {'securityLevel': 'loose', 'theme': 'neutral'}}%%\ngraph TD\n    %% Main structure in vertical layout\n    root[AZURE YACHT GROUP WEBSITE]\n    root --\x3e home[HOME]\n    home --\x3e fleet[CHARTER FLEET]\n    fleet --\x3e destinations[DESTINATIONS]\n    destinations --\x3e services[SERVICES]\n    \n    %% Home page elements\n    home -.- hero[Hero Banner - Seasonal Offers]\n    home -.- featured[Featured Charters Carousel]\n    home -.- destHighlights[Destinations Highlights]\n    home -.- testimonials[Testimonials]\n    home -.- newsletter[Newsletter Signup]\n    \n    %% Fleet page elements\n    fleet -.- fleetOverview[Fleet Overview]\n    fleet -.- search[Advanced Search/Filter]\n    fleet -.- yachtPages[Individual Yacht Pages]\n    fleet -.- newArrivals[New Arrivals Section]\n    \n    %% Search options\n    search -.- bySize[By Size]\n    search -.- byPrice[By Price]\n    search -.- byLocation[By Location]\n    search -.- byAvailability[By Availability]\n    \n    %% Yacht page elements\n    yachtPages -.- gallery[Gallery]\n    yachtPages -.- specs[Specifications]\n    yachtPages -.- pricing[Pricing Calculator]\n    yachtPages -.- crew[Crew Information]\n    yachtPages -.- calendar[Calendar Availability]\n    yachtPages -.- similar[Similar Yachts]\n    yachtPages -.- booking[Booking Request Form]\n    \n    %% Destinations page elements\n    destinations -.- map[Interactive Map]\n    destinations -.- guides[Destination Guides]\n    destinations -.- seasonal[Seasonal Recommendations]\n    destinations -.- attractions[Local Attractions]\n    \n    %% Destination guides\n    guides -.- caribbean[Caribbean]\n    guides -.- mediterranean[Mediterranean]\n    guides -.- southPacific[South Pacific]\n    guides -.- otherRegions[Other Regions]\n    \n    %% Services\n    services -.- charterTypes[Charter Types]\n    charterTypes -.- bareboat[Bareboat]\n    charterTypes -.- crewed[Crewed]\n    \n    %% Style Classes\n    classDef sectionClass fill:#0078D4,color:#ffffff,stroke:#333,stroke-width:2px;\n    classDef subsectionClass fill:#00A36C,color:#ffffff,stroke:#333,stroke-width:1px;\n    classDef featureClass fill:#d4a017,color:#ffffff,stroke:#333,stroke-width:1px;\n    \n    %% Apply Styles\n    class root sectionClass;\n    class home,fleet,destinations,services sectionClass;\n    class fleetOverview,search,yachtPages,newArrivals,hero,featured,destHighlights,testimonials,newsletter,map,guides,seasonal,attractions,charterTypes subsectionClass;\n    class bySize,byPrice,byLocation,byAvailability,gallery,specs,pricing,crew,calendar,similar,booking,caribbean,mediterranean,southPacific,otherRegions,bareboat,crewed featureClass;"}),"\n",(0,s.jsx)(t.h2,{id:"implementation-notes",children:"Implementation Notes"}),"\n",(0,s.jsx)(t.p,{children:"This structure serves as a blueprint for organizing your Tilda-based yacht charter website. When implementing each section:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Consistency"}),": Maintain consistent navigation paths and user experience across sections"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Mobile Optimization"}),": Ensure all elements adapt properly to mobile devices"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Performance"}),": Optimize image sizes and page load times, especially for yacht galleries"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Integration Points"}),": Note where booking systems, availability calendars, and payment processing connect"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(t.p,{children:"To implement this structure in Tilda:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Begin by creating the primary pages for each main section"}),"\n",(0,s.jsx)(t.li,{children:"Build reusable blocks for common elements (yacht cards, testimonials, etc.)"}),"\n",(0,s.jsx)(t.li,{children:"Create templates for pages that will be replicated (yacht detail pages, destination guides)"}),"\n",(0,s.jsx)(t.li,{children:"Develop the search and filtering functionality using Tilda's native tools or integrate third-party search solutions"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Follow the ",(0,s.jsx)(t.a,{href:"./tilda-integration",children:"Tilda Integration"})," guide for specific implementation instructions."]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);