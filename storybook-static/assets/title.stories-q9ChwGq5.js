import{T as g,t as d,D as v}from"./index--Fh861-6.js";import"./_commonjsHelpers-4gQjN7DL.js";g.cache(!1);const a=i=>i,c=(i={})=>{const s=d.twig({id:"/Users/yustintroost/Documents/sites/drupal-yustin/web/themes/custom/StoryBlend/components/title/title.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"title"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"style",match:["style"]},{type:"Twig.expression.type.string",value:"title--"},{type:"Twig.expression.type.variable",value:"style",match:["style"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"icon",match:["icon"]},{type:"Twig.expression.type.string",value:"title-"},{type:"Twig.expression.type.variable",value:"icon",match:["icon"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"heading",match:["heading"]},{type:"Twig.expression.type.string",value:"heading-"},{type:"Twig.expression.type.variable",value:"heading",match:["heading"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"variant",match:["variant"]},{type:"Twig.expression.type.string",value:"title--"},{type:"Twig.expression.type.variable",value:"variant",match:["variant"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"extra_classes",match:["extra_classes"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}],position:{start:0,end:190}},position:{start:0,end:190}},{type:"raw",value:`
<`,position:{start:191,end:193}},{type:"output",position:{start:193,end:221},stack:[{type:"Twig.expression.type.variable",value:"element",match:["element"],position:{start:193,end:221}},{type:"Twig.expression.type.variable",value:"element",match:["element"],position:{start:193,end:221}},{type:"Twig.expression.type.string",value:"h2",position:{start:193,end:221}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:193,end:221},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:'  class="',position:{start:221,end:230}},{type:"output",position:{start:230,end:253},stack:[{type:"Twig.expression.type.variable",value:"classes",match:["classes"],position:{start:230,end:253}},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],position:{start:230,end:253},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:230,end:253}},{type:"Twig.expression.type.string",value:" ",position:{start:230,end:253}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:230,end:253},expression:!1}]}]},{type:"raw",value:`">

  `,position:{start:253,end:259}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"title_url",match:["title_url"]}],position:{start:259,end:277},output:[{type:"raw",value:"    <a href=",position:{start:278,end:290}},{type:"output",position:{start:290,end:305},stack:[{type:"Twig.expression.type.variable",value:"title_url",match:["title_url"],position:{start:290,end:305}}]},{type:"raw",value:`>
  `,position:{start:305,end:309}}]},position:{open:{start:259,end:277},close:{start:309,end:320}}},{type:"raw",value:"  ",position:{start:321,end:323}},{type:"output",position:{start:323,end:334},stack:[{type:"Twig.expression.type.variable",value:"title",match:["title"],position:{start:323,end:334}}]},{type:"raw",value:`

  `,position:{start:334,end:338}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"title_url",match:["title_url"]}],position:{start:338,end:356},output:[{type:"raw",value:`    </a>
  `,position:{start:357,end:368}}]},position:{open:{start:338,end:356},close:{start:368,end:379}}},{type:"raw",value:"</",position:{start:380,end:382}},{type:"output",position:{start:382,end:410},stack:[{type:"Twig.expression.type.variable",value:"element",match:["element"],position:{start:382,end:410}},{type:"Twig.expression.type.variable",value:"element",match:["element"],position:{start:382,end:410}},{type:"Twig.expression.type.string",value:"h2",position:{start:382,end:410}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:382,end:410},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:`>
`,position:{start:410,end:410}}],precompiled:!0});s.options.allowInlineIncludes=!0;try{return a(s.render({attributes:new v,...i}))}catch(u){return a("An error occurred whilst rendering /Users/yustintroost/Documents/sites/drupal-yustin/web/themes/custom/StoryBlend/components/title/title.twig: "+u.toString())}},T={title:"Components/Title",parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{default:"text",control:"text",description:"Title text"}}},e=()=>c({title:"Lorum ipsum",heading:"md",element:"h1",extra_classes:"call-to-action__title"}),t=()=>c({title:"Lorum ipsum",heading:"lg",element:"h1",extra_classes:"call-to-action__title"});var r,o,p;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => title({
  title: 'Lorum ipsum',
  heading: 'md',
  element: 'h1',
  extra_classes: 'call-to-action__title'
})`,...(p=(o=e.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var n,l,y;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => title({
  title: 'Lorum ipsum',
  heading: 'lg',
  element: 'h1',
  extra_classes: 'call-to-action__title'
})`,...(y=(l=t.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const x=["TitleMd","TitleLg"];export{t as TitleLg,e as TitleMd,x as __namedExportsOrder,T as default};