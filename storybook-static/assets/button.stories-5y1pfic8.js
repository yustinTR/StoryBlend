import{T as h,t as f,D as _}from"./index--Fh861-6.js";import"./_commonjsHelpers-4gQjN7DL.js";h.cache(!1);const n=r=>r,s=(r={})=>{const o=f.twig({id:"/Users/yustintroost/Documents/sites/drupal-yustin/web/themes/custom/StoryBlend/components/button/button.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"button"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"variant",match:["variant"]},{type:"Twig.expression.type.string",value:"button--"},{type:"Twig.expression.type.variable",value:"variant",match:["variant"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.string",value:"button--"},{type:"Twig.expression.type.variable",value:"size",match:["size"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"style",match:["style"]},{type:"Twig.expression.type.string",value:"button--"},{type:"Twig.expression.type.variable",value:"style",match:["style"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"is_active",match:["is_active"]},{type:"Twig.expression.type.string",value:"button--active"},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"extra_classes",match:["extra_classes"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}],position:{start:0,end:201}},position:{start:0,end:201}},{type:"raw",value:`
`,position:{start:202,end:203}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"]},{type:"Twig.expression.type.test",filter:"empty"}],position:{start:203,end:227},output:[{type:"raw",value:"  ",position:{start:228,end:230}},{type:"logic",token:{type:"Twig.logic.type.set",key:"label",expression:[{type:"Twig.expression.type.string",value:""}],position:{start:230,end:250}},position:{start:230,end:250}}]},position:{open:{start:203,end:227},close:{start:251,end:262}}},{type:"raw",value:`

<`,position:{start:263,end:266}},{type:"output",position:{start:266,end:295},stack:[{type:"Twig.expression.type.variable",value:"element",match:["element"],position:{start:266,end:295}},{type:"Twig.expression.type.variable",value:"element",match:["element"],position:{start:266,end:295}},{type:"Twig.expression.type.string",value:"a",position:{start:266,end:295}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:266,end:295},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:' class="',position:{start:295,end:303}},{type:"output",position:{start:303,end:326},stack:[{type:"Twig.expression.type.variable",value:"classes",match:["classes"],position:{start:303,end:326}},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],position:{start:303,end:326},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:303,end:326}},{type:"Twig.expression.type.string",value:" ",position:{start:303,end:326}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:303,end:326},expression:!1}]}]},{type:"raw",value:`">
    `,position:{start:326,end:333}},{type:"output",position:{start:333,end:344},stack:[{type:"Twig.expression.type.variable",value:"label",match:["label"],position:{start:333,end:344}}]},{type:"raw",value:`
</`,position:{start:344,end:347}},{type:"output",position:{start:347,end:375},stack:[{type:"Twig.expression.type.variable",value:"element",match:["element"],position:{start:347,end:375}},{type:"Twig.expression.type.variable",value:"element",match:["element"],position:{start:347,end:375}},{type:"Twig.expression.type.string",value:"a",position:{start:347,end:375}},{type:"Twig.expression.type.operator.binary",value:"?",position:{start:347,end:375},precidence:16,associativity:"rightToLeft",operator:"?"}]},{type:"raw",value:`>
`,position:{start:375,end:375}}],precompiled:!0});o.options.allowInlineIncludes=!0;try{return n(o.render({attributes:new _,...r}))}catch(x){return n("An error occurred whilst rendering /Users/yustintroost/Documents/sites/drupal-yustin/web/themes/custom/StoryBlend/components/button/button.twig: "+x.toString())}},B={title:"Components/Button",parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{default:"text",control:"text",description:"Text fot the button"}}},e=()=>s({label:"Lorem ipsum!",element:"button",aria_label:"hidden"}),t=()=>s({label:"Lorem ipsum!",element:"button",variant:"filter ",aria_label:"hidden"}),i=()=>s({label:"Lorem ipsum!",element:"button",variant:"webform ",aria_label:"hidden"}),a=()=>s({label:"Lorem ipsum!",element:"button",variant:"secondary ",aria_label:"hidden"});var p,l,y;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`() => button({
  label: 'Lorem ipsum!',
  element: 'button',
  aria_label: 'hidden'
})`,...(y=(l=e.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var u,c,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`() => button({
  label: 'Lorem ipsum!',
  element: 'button',
  variant: 'filter ',
  aria_label: 'hidden'
})`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,d,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => button({
  label: 'Lorem ipsum!',
  element: 'button',
  variant: 'webform ',
  aria_label: 'hidden'
})`,...(v=(d=i.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var b,w,T;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`() => button({
  label: 'Lorem ipsum!',
  element: 'button',
  variant: 'secondary ',
  aria_label: 'hidden'
})`,...(T=(w=a.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const S=["Button","ButtonFilter","ButtonWebform","ButtonOutline"];export{e as Button,t as ButtonFilter,a as ButtonOutline,i as ButtonWebform,S as __namedExportsOrder,B as default};