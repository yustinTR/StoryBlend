import{T as n,t as y,D as l}from"./index--Fh861-6.js";import"./_commonjsHelpers-4gQjN7DL.js";n.cache(!1);const a=t=>t,c=(t={})=>{const s=y.twig({id:"/Users/yustintroost/Documents/sites/drupal-yustin/web/themes/custom/StoryBlend/components/tag/tag.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"tag"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"variant",match:["variant"]},{type:"Twig.expression.type.string",value:"tag--"},{type:"Twig.expression.type.variable",value:"variant",match:["variant"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.string",value:"tag--"},{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"extra_classes",match:["extra_classes"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}],position:{start:0,end:115}},position:{start:0,end:115}},{type:"raw",value:`

<`,position:{start:116,end:119}},{type:"output",position:{start:119,end:151},stack:[{type:"Twig.expression.type.variable",value:"element",match:["element"],position:{start:119,end:151}},{type:"Twig.expression.type.variable",value:"element",match:["element"],position:{start:119,end:151}},{type:"Twig.expression.type.string",value:"span",position:{start:119,end:151}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:119,end:151},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:' class="',position:{start:151,end:159}},{type:"output",position:{start:159,end:182},stack:[{type:"Twig.expression.type.variable",value:"classes",match:["classes"],position:{start:159,end:182}},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],position:{start:159,end:182},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:159,end:182}},{type:"Twig.expression.type.string",value:" ",position:{start:159,end:182}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:159,end:182},expression:!1}]}]},{type:"raw",value:`">
`,position:{start:182,end:185}},{type:"output",position:{start:185,end:196},stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"],position:{start:185,end:196}}]},{type:"raw",value:`
</`,position:{start:196,end:199}},{type:"output",position:{start:199,end:230},stack:[{type:"Twig.expression.type.variable",value:"element",match:["element"],position:{start:199,end:230}},{type:"Twig.expression.type.variable",value:"element",match:["element"],position:{start:199,end:230}},{type:"Twig.expression.type.string",value:"span",position:{start:199,end:230}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:199,end:230},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:`>
`,position:{start:230,end:230}}],precompiled:!0});s.options.allowInlineIncludes=!0;try{return a(s.render({attributes:new l,...t}))}catch(o){return a("An error occurred whilst rendering /Users/yustintroost/Documents/sites/drupal-yustin/web/themes/custom/StoryBlend/components/tag/tag.twig: "+o.toString())}},m={title:"Components/Tag",parameters:{layout:"centered"},tags:["autodocs"]},e=()=>c({label:"Lorem ipsum!",element:"span"});var i,r,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => tag({
  label: 'Lorem ipsum!',
  element: 'span'
})`,...(p=(r=e.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const v=["Tag"];export{e as Tag,v as __namedExportsOrder,m as default};
