"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[156,3318,3279],{34878:function(e){function s(e){!function(e){function s(e,s){return e.replace(/<<(\d+)>>/g,function(e,n){return"(?:"+s[+n]+")"})}function n(e,n,t){return RegExp(s(e,n),t||"")}function t(e,s){for(var n=0;n<s;n++)e=e.replace(/<<self>>/g,function(){return"(?:"+e+")"});return e.replace(/<<self>>/g,"[^\\s\\S]")}var r={type:"bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",typeDeclaration:"class enum interface record struct",contextual:"add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",other:"abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"};function a(e){return"\\b(?:"+e.trim().replace(/ /g,"|")+")\\b"}var i=a(r.typeDeclaration),o=RegExp(a(r.type+" "+r.typeDeclaration+" "+r.contextual+" "+r.other)),c=a(r.typeDeclaration+" "+r.contextual+" "+r.other),u=a(r.type+" "+r.typeDeclaration+" "+r.other),l=t(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source,2),p=t(/\((?:[^()]|<<self>>)*\)/.source,2),d=/@?\b[A-Za-z_]\w*\b/.source,g=s(/<<0>>(?:\s*<<1>>)?/.source,[d,l]),b=s(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source,[c,g]),h=/\[\s*(?:,\s*)*\]/.source,f=s(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source,[b,h]),m=s(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source,[l,p,h]),y=s(/\(<<0>>+(?:,<<0>>+)+\)/.source,[m]),k=s(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source,[y,b,h]),w={keyword:o,punctuation:/[<>()?,.:[\]]/},x=/'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,v=/"(?:\\.|[^\\"\r\n])*"/.source,$=/@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;e.languages.csharp=e.languages.extend("clike",{string:[{pattern:n(/(^|[^$\\])<<0>>/.source,[$]),lookbehind:!0,greedy:!0},{pattern:n(/(^|[^@$\\])<<0>>/.source,[v]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:n(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source,[b]),lookbehind:!0,inside:w},{pattern:n(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source,[d,k]),lookbehind:!0,inside:w},{pattern:n(/(\busing\s+)<<0>>(?=\s*=)/.source,[d]),lookbehind:!0},{pattern:n(/(\b<<0>>\s+)<<1>>/.source,[i,g]),lookbehind:!0,inside:w},{pattern:n(/(\bcatch\s*\(\s*)<<0>>/.source,[b]),lookbehind:!0,inside:w},{pattern:n(/(\bwhere\s+)<<0>>/.source,[d]),lookbehind:!0},{pattern:n(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source,[f]),lookbehind:!0,inside:w},{pattern:n(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source,[k,u,d]),inside:w}],keyword:o,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),e.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),e.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:n(/([(,]\s*)<<0>>(?=\s*:)/.source,[d]),lookbehind:!0,alias:"punctuation"}}),e.languages.insertBefore("csharp","class-name",{namespace:{pattern:n(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source,[d]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:n(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source,[p]),lookbehind:!0,alias:"class-name",inside:w},"return-type":{pattern:n(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source,[k,b]),inside:w,alias:"class-name"},"constructor-invocation":{pattern:n(/(\bnew\s+)<<0>>(?=\s*[[({])/.source,[k]),lookbehind:!0,inside:w,alias:"class-name"},"generic-method":{pattern:n(/<<0>>\s*<<1>>(?=\s*\()/.source,[d,l]),inside:{function:n(/^<<0>>/.source,[d]),generic:{pattern:RegExp(l),alias:"class-name",inside:w}}},"type-list":{pattern:n(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,[i,g,d,k,o.source,p,/\bnew\s*\(\s*\)/.source]),lookbehind:!0,inside:{"record-arguments":{pattern:n(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source,[g,p]),lookbehind:!0,greedy:!0,inside:e.languages.csharp},keyword:o,"class-name":{pattern:RegExp(k),greedy:!0,inside:w},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var _=v+"|"+x,E=s(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source,[_]),S=t(s(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[E]),2),R=/\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,B=s(/<<0>>(?:\s*\(<<1>>*\))?/.source,[b,S]);e.languages.insertBefore("csharp","class-name",{attribute:{pattern:n(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source,[R,B]),lookbehind:!0,greedy:!0,inside:{target:{pattern:n(/^<<0>>(?=\s*:)/.source,[R]),alias:"keyword"},"attribute-arguments":{pattern:n(/\(<<0>>*\)/.source,[S]),inside:e.languages.csharp},"class-name":{pattern:RegExp(b),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var D=/:[^}\r\n]+/.source,N=t(s(/[^"'/()]|<<0>>|\(<<self>>*\)/.source,[E]),2),j=s(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[N,D]),z=t(s(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source,[_]),2),C=s(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source,[z,D]);function T(s,t){return{interpolation:{pattern:n(/((?:^|[^{])(?:\{\{)*)<<0>>/.source,[s]),lookbehind:!0,inside:{"format-string":{pattern:n(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source,[t,D]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:e.languages.csharp}}},string:/[\s\S]+/}}e.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:n(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source,[j]),lookbehind:!0,greedy:!0,inside:T(j,N)},{pattern:n(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source,[C]),lookbehind:!0,greedy:!0,inside:T(C,z)}],char:{pattern:RegExp(x),greedy:!0}}),e.languages.dotnet=e.languages.cs=e.languages.csharp}(e)}e.exports=s,s.displayName="csharp",s.aliases=["dotnet","cs"]},73903:function(e,s,n){var t=n(68815),r=n(34878);function a(e){e.register(t),e.register(r),e.languages.t4=e.languages["t4-cs"]=e.languages["t4-templating"].createT4("csharp")}e.exports=a,a.displayName="t4Cs",a.aliases=[]},68815:function(e){function s(e){!function(e){function s(e,s,n){return{pattern:RegExp("<#"+e+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+e+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:s,alias:n}}}}e.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:function(n){var t=e.languages[n],r="language-"+n;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:s("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\b\w+(?=\s)/,"attr-name":/\b\w+/}),expression:s("=",t,r),"class-feature":s("\\+",t,r),standard:s("",t,r)}}}}})}(e)}e.exports=s,s.displayName="t4Templating",s.aliases=[]}}]);