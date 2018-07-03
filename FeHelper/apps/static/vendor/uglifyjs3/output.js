"use strict";var EXPECT_DIRECTIVE=/^$|[;{][\s\n]*$/;function is_some_comments(b){return"comment2"==b.type&&/@preserve|@license|@cc_on/i.test(b.value)}function OutputStream(Q){function b(b,a){function c(){return"'"+b.replace(/\x27/g,"\\'")+"'"}function d(){return"\""+b.replace(/\x22/g,"\\\"")+"\""}function e(){return"`"+b.replace(/`/g,"\\`")+"`"}var f=0,g=0;if(b=b.replace(/[\\\b\f\n\r\v\t\x22\x27\u2028\u2029\0\ufeff]/g,function(a,c){return"\""===a?(++f,"\""):"'"===a?(++g,"'"):"\\"===a?"\\\\":"\n"===a?"\\n":"\r"===a?"\\r":"\t"===a?"\\t":"\b"===a?"\\b":"\f"===a?"\\f":"\x0B"===a?Q.ie8?"\\x0B":"\\v":"\u2028"===a?"\\u2028":"\u2029"===a?"\\u2029":"\uFEFF"===a?"\\ufeff":"\0"===a?/[0-9]/.test(get_full_char(b,c+1))?"\\x00":"\\0":a}),b=u(b),"`"===a)return e();switch(Q.quote_style){case 1:return c();case 2:return d();case 3:return"'"==a?c():d();default:return f>g?c():d();}}function R(a,c){var d=b(a,c);return Q.inline_script&&(d=d.replace(/<\x2fscript([>\/\t\n\f\r ])/gi,"<\\/script$1"),d=d.replace(/\x3c!--/g,"\\x3c!--"),d=d.replace(/--\x3e/g,"--\\x3e")),d}function c(b){return b=b.toString(),b=u(b,!0),b}function d(b){return repeat_string(" ",Q.indent_start+p-b*Q.indent_level)}function S(b){b+="";var c=get_full_char(b,0),d=get_full_char(B,B.length-1);y&&c&&(y=!1,"\n"!=c&&(S("\n"),H())),z&&c&&(z=!1,!/[\s;})]/.test(c)&&G()),A=-1;var d=B.charAt(B.length-1);if(w&&(w=!1,(":"==d&&"}"==c||(!c||0>";}".indexOf(c))&&";"!=d)&&(Q.semicolons||F(c)?(t+=";",q++,s++):(E(),t+="\n",s++,r++,q=0,/^\s+$/.test(b)&&(w=!0)),!Q.beautify&&(v=!1))),!Q.beautify&&Q.preserve_line&&M[M.length-1])for(var e=M[M.length-1].start.line;r<e;)E(),t+="\n",s++,r++,q=0,v=!1;v&&((is_identifier_char(d)&&(is_identifier_char(c)||"\\"==c)||"/"==c&&c==d||("+"==c||"-"==c)&&c==B)&&(t+=" ",q++,s++),v=!1),n&&(C.push({token:n,name:o,line:r,col:q}),n=!1,!x&&D()),t+=b,s+=b.length;var f=b.split(/\r?\n/),g=f.length-1;r+=g,q+=f[0].length,0<g&&(E(),q=f[g].length),B=b}function f(){w=!1,S(";")}function e(){return p+Q.indent_level}function a(){return x&&E(),t}function g(){var b=t.lastIndexOf("\n");return /^ *$/.test(t.slice(b+1))}function h(b){var f=this,a=b.start;if(a&&!(a.comments_before&&a.comments_before._dumped===f)){var c=a.comments_before;if(c||(c=a.comments_before=[]),c._dumped=f,b instanceof AST_Exit&&b.value){var e=new TreeWalker(function(g){var a=e.parent();if(a instanceof AST_Exit||a instanceof AST_Binary&&a.left===g||"Call"==a.TYPE&&a.expression===g||a instanceof AST_Conditional&&a.condition===g||a instanceof AST_Dot&&a.expression===g||a instanceof AST_Sequence&&a.expressions[0]===g||a instanceof AST_Sub&&a.expression===g||a instanceof AST_UnaryPostfix){if(!g.start)return;var b=g.start.comments_before;b&&b._dumped!==f&&(b._dumped=f,c=c.concat(b))}else return!0});e.push(b),b.value.walk(e)}if(0==s){0<c.length&&Q.shebang&&"comment5"==c[0].type&&(S("#!"+c.shift().value+"\n"),H());var d=Q.preamble;d&&S(d.replace(/\r\n?|[\n\u2028\u2029]|\s*$/g,"\n"))}if(c=c.filter(l,b),0!=c.length){var h=g();c.forEach(function(c,a){h||(c.nlb?(S("\n"),H(),h=!0):0<a&&G()),/comment[134]/.test(c.type)?(S("//"+c.value.replace(/[@#]__PURE__/g," ")+"\n"),H(),h=!0):"comment2"==c.type&&(S("/*"+c.value.replace(/[@#]__PURE__/g," ")+"*/"),h=!1)}),h||(a.nlb?(S("\n"),H()):G())}}}function i(f,h){var a=this,b=f.end;if(b){var c=b[h?"comments_before":"comments_after"];if(c&&c._dumped!==a&&(f instanceof AST_Statement||all(c,function(b){return!/comment[134]/.test(b.type)}))){c._dumped=a;var d=t.length;c.filter(l,f).forEach(function(b,a){z=!1,y?(S("\n"),H(),y=!1):b.nlb&&(0<a||!g())?(S("\n"),H()):(0<a||!h)&&G(),/comment[134]/.test(b.type)?(S("//"+b.value.replace(/[@#]__PURE__/g," ")),y=!0):"comment2"==b.type&&(S("/*"+b.value.replace(/[@#]__PURE__/g," ")+"*/"),z=!0)}),t.length>d&&(A=d)}}}var j=!Q;Q=defaults(Q,{ascii_only:!1,beautify:!1,bracketize:!1,comments:!1,ecma:5,ie8:!1,indent_level:4,indent_start:0,inline_script:!0,keep_quoted_props:!1,max_line_len:!1,preamble:null,preserve_line:!1,quote_keys:!1,quote_style:0,safari10:!1,semicolons:!0,shebang:!0,shorthand:void 0,source_map:null,webkit:!1,width:80,wrap_iife:!1},!0),void 0===Q.shorthand&&(Q.shorthand=5<Q.ecma);var l=return_false;if(Q.comments){var k=Q.comments;if("string"==typeof Q.comments&&/^\/.*\/[a-zA-Z]*$/.test(Q.comments)){var m=Q.comments.lastIndexOf("/");k=new RegExp(Q.comments.substr(1,m-1),Q.comments.substr(m+1))}l=k instanceof RegExp?function(b){return"comment5"!=b.type&&k.test(b.value)}:"function"==typeof k?function(b){return"comment5"!=b.type&&k(this,b)}:"some"===k?is_some_comments:return_true}var n,o,p=0,q=0,r=1,s=0,t="",u=Q.ascii_only?function(b,d){return 6<=Q.ecma&&(b=b.replace(/[\ud800-\udbff][\udc00-\udfff]/g,function(c){var a=get_full_char_code(c,0).toString(16);return"\\u{"+a+"}"})),b.replace(/[\u0000-\u001f\u007f-\uffff]/g,function(c){var a=c.charCodeAt(0).toString(16);if(2>=a.length&&!d){for(;2>a.length;)a="0"+a;return"\\x"+a}for(;4>a.length;)a="0"+a;return"\\u"+a})}:function(e){for(var a="",b=0,c=e.length;b<c;b++)a+=is_surrogate_pair_head(e[b])&&!is_surrogate_pair_tail(e[b+1])||is_surrogate_pair_tail(e[b])&&!is_surrogate_pair_head(e[b-1])?"\\u"+e.charCodeAt(b).toString(16):e[b];return a},v=!1,w=!1,x=0,y=!1,z=!1,A=-1,B="",C=Q.source_map&&[],D=C?function(){C.forEach(function(c){try{Q.source_map.add(c.token.file,c.line,c.col,c.token.line,c.token.col,c.name||"name"!=c.token.type?c.name:c.token.value)}catch(a){AST_Node.warn("Couldn't figure out mapping for {file}:{line},{col} \u2192 {cline},{ccol} [{name}]",{file:c.token.file,line:c.token.line,col:c.token.col,cline:c.line,ccol:c.col,name:c.name||""})}}),C=[]}:noop,E=Q.max_line_len?function(){if(q>Q.max_line_len){if(x){var b=t.slice(0,x),a=t.slice(x);if(C){var c=a.length-q;C.forEach(function(b){b.line++,b.col+=c})}t=b+"\n"+a,r++,s++,q=a.length}q>Q.max_line_len&&AST_Node.warn("Output exceeds {max_line_len} characters",Q)}x&&(x=0,D())}:noop,F=makePredicate("( [ + * / - , . `"),G=Q.beautify?function(){S(" ")}:function(){v=!0},H=Q.beautify?function(b){Q.beautify&&S(d(b?.5:0))}:noop,I=Q.beautify?function(f,a){!0===f&&(f=e());var b=p;p=f;var c=a();return p=b,c}:function(c,a){return a()},J=Q.beautify?function(){return 0>A?S("\n"):void("\n"!=t[A]&&(t=t.slice(0,A)+"\n"+t.slice(A),s++,r++),A++)}:Q.max_line_len?function(){E(),x=t.length}:noop,K=Q.beautify?function(){S(";")}:function(){w=!0},L=C?function(c,a){n=c,o=a}:noop,M=[];return{get:a,toString:a,indent:H,indentation:function(){return p},current_width:function(){return q-p},should_break:function(){return Q.width&&this.current_width()>=Q.width},newline:J,print:S,star:function(){S("*")},space:G,comma:function(){S(","),G()},colon:function(){S(":"),G()},last:function(){return B},semicolon:K,force_semicolon:f,to_utf8:u,print_name:function(b){S(c(b))},print_string:function(c,a,b){var d=R(c,a);!0===b&&-1===d.indexOf("\\")&&(!EXPECT_DIRECTIVE.test(t)&&f(),f()),S(d)},print_template_string_chars:function(c){var a=R(c,"`").replace(/\${/g,"\\${");return S(a.substr(1,a.length-2))},encode_string:R,next_indent:e,with_indent:I,with_block:function(c){var a;return S("{"),J(),I(e(),function(){a=c()}),H(),S("}"),a},with_parens:function(c){S("(");var a=c();return S(")"),a},with_square:function(c){S("[");var a=c();return S("]"),a},add_mapping:L,option:function(b){return Q[b]},prepend_comments:j?noop:h,append_comments:j||l===return_false?noop:i,line:function(){return r},col:function(){return q},pos:function(){return s},push_node:function(b){M.push(b)},pop_node:function(){return M.pop()},parent:function(b){return M[M.length-2-(b||0)]}}}(function(){function r(c,a){c.DEFMETHOD("_codegen",a)}function s(b,d){Array.isArray(b)?b.forEach(function(b){s(b,d)}):b.DEFMETHOD("needs_parens",d)}function t(f,g,b,a){var c=f.length-1;k=a,f.forEach(function(e,a){!0!==k||e instanceof AST_Directive||e instanceof AST_EmptyStatement||e instanceof AST_SimpleStatement&&e.body instanceof AST_String||(k=!1),e instanceof AST_EmptyStatement||(b.indent(),e.print(b),!(a==c&&g)&&(b.newline(),g&&b.newline())),!0===k&&e instanceof AST_SimpleStatement&&e.body instanceof AST_String&&(k=!1)}),k=!1}function u(c,a,b){0<c.body.length?a.with_block(function(){t(c.body,!1,a,b)}):(a.print("{"),a.with_indent(a.next_indent(),function(){a.append_comments(c,!0)}),a.print("}"))}function c(b,a){var c=b.body;if(a.option("bracketize")||a.option("ie8")&&c instanceof AST_Do)return i(c,a);if(!c)return a.force_semicolon();for(;;)if(c instanceof AST_If){if(!c.alternative)return void i(b.body,a);c=c.alternative}else if(c instanceof AST_StatementWithBody)c=c.body;else break;g(b.body,a)}function e(e,a,b){var c=!1;b&&e.walk(new TreeWalker(function(b){return!!(c||b instanceof AST_Scope)||(b instanceof AST_Binary&&"in"==b.operator?(c=!0,!0):void 0)})),e.print(a,c)}function f(d,a,b){b.option("quote_keys")?b.print_string(d):""+ +d==d&&0<=d?b.print(h(d)):(RESERVED_WORDS(d)?!b.option("ie8"):is_identifier_string(d))?a&&b.option("keep_quoted_props")?b.print_string(d,a):b.print_name(d):b.print_string(d,a)}function g(c,a){a.option("bracketize")?i(c,a):!c||c instanceof AST_EmptyStatement?a.force_semicolon():c.print(a)}function d(c,a){return!!(0<c.args.length)||a.option("beautify")}function a(e){for(var b=e[0],a=b.length,c=1;c<e.length;++c)e[c].length<a&&(b=e[c],a=b.length);return b}function h(f){var b,c=f.toString(10),d=[c.replace(/^0\./,".").replace("e+","e")];return Math.floor(f)===f?(0<=f?d.push("0x"+f.toString(16).toLowerCase(),"0"+f.toString(8)):d.push("-0x"+(-f).toString(16).toLowerCase(),"-0"+(-f).toString(8)),(b=/^(.*?)(0+)$/.exec(f))&&d.push(b[1]+"e"+b[2].length)):(b=/^0?\.(0+)(.*)$/.exec(f))&&d.push(b[2]+"e-"+(b[1].length+b[2].length),c.substr(c.indexOf("."))),a(d)}function i(c,a){!c||c instanceof AST_EmptyStatement?a.print("{}"):c instanceof AST_BlockStatement?c.print(a):a.with_block(function(){a.indent(),c.print(a),a.newline()})}function b(c,d){c.DEFMETHOD("add_source_map",function(b){d(this,b)})}function j(c,a){a.add_mapping(c.start)}var k=!1,l=null,m=null;AST_Node.DEFMETHOD("print",function(f,a){function b(){f.prepend_comments(c),c.add_source_map(f),d(c,f),f.append_comments(c)}var c=this,d=c._codegen;c instanceof AST_Scope?l=c:!m&&c instanceof AST_Directive&&"use asm"==c.value&&(m=l),f.push_node(c),a||c.needs_parens(f)?f.with_parens(b):b(),f.pop_node(),c===m&&(m=null)}),AST_Node.DEFMETHOD("_print",AST_Node.prototype.print),AST_Node.DEFMETHOD("print_to_string",function(c){var a=OutputStream(c);return this.print(a),a.get()}),s(AST_Node,return_false),s(AST_Function,function(c){if(first_in_statement(c))return!0;if(c.option("webkit")){var a=c.parent();if(a instanceof AST_PropAccess&&a.expression===this)return!0}if(c.option("wrap_iife")){var a=c.parent();return a instanceof AST_Call&&a.expression===this}return!1}),s(AST_Arrow,function(c){var a=c.parent();return a instanceof AST_PropAccess&&a.expression===this}),s([AST_ClassExpression,AST_Object],first_in_statement),s(AST_Unary,function(c){var a=c.parent();return a instanceof AST_PropAccess&&a.expression===this||a instanceof AST_Call&&a.expression===this||a instanceof AST_Binary&&"**"===a.operator&&this instanceof AST_UnaryPrefix&&a.left===this&&"++"!==this.operator&&"--"!==this.operator}),s(AST_Await,function(c){var a=c.parent();return a instanceof AST_PropAccess&&a.expression===this||a instanceof AST_Call&&a.expression===this||c.option("safari10")&&a instanceof AST_UnaryPrefix}),s(AST_Sequence,function(c){var a=c.parent();return a instanceof AST_Call||a instanceof AST_Unary||a instanceof AST_Binary||a instanceof AST_VarDef||a instanceof AST_PropAccess||a instanceof AST_Array||a instanceof AST_ObjectProperty||a instanceof AST_Conditional||a instanceof AST_Arrow||a instanceof AST_DefaultAssign||a instanceof AST_Expansion||a instanceof AST_ForOf&&this===a.object||a instanceof AST_Yield}),s(AST_Binary,function(g){var a=g.parent();if(a instanceof AST_Call&&a.expression===this)return!0;if(a instanceof AST_Unary)return!0;if(a instanceof AST_PropAccess&&a.expression===this)return!0;if(a instanceof AST_Binary){var b=a.operator,c=PRECEDENCE[b],d=this.operator,e=PRECEDENCE[d];if(c>e||c==e&&this===a.right)return!0}}),s(AST_Yield,function(c){var a=c.parent();return!!(a instanceof AST_Binary&&"="!==a.operator)||!!(a instanceof AST_Call&&a.expression===this)||!!(a instanceof AST_Conditional&&a.condition===this)||!!(a instanceof AST_Unary)||!!(a instanceof AST_PropAccess&&a.expression===this)||void 0}),s(AST_PropAccess,function(d){var a=d.parent();if(a instanceof AST_New&&a.expression===this){var b=!1;return this.walk(new TreeWalker(function(c){return!!(b||c instanceof AST_Scope)||(c instanceof AST_Call?(b=!0,!0):void 0)})),b}}),s(AST_Call,function(d){var a,b=d.parent();return!!(b instanceof AST_New&&b.expression===this)||this.expression instanceof AST_Function&&b instanceof AST_PropAccess&&b.expression===this&&(a=d.parent(1))instanceof AST_Assign&&a.left===b}),s(AST_New,function(c){var a=c.parent();if(!d(this,c)&&(a instanceof AST_PropAccess||a instanceof AST_Call&&a.expression===this))return!0}),s(AST_Number,function(d){var a=d.parent();if(a instanceof AST_PropAccess&&a.expression===this){var b=this.getValue();if(0>b||/^0/.test(h(b)))return!0}}),s([AST_Assign,AST_Conditional],function(c){var a=c.parent();return!!(a instanceof AST_Unary)||a instanceof AST_Binary&&!(a instanceof AST_Assign)||!!(a instanceof AST_Call&&a.expression===this)||!!(a instanceof AST_Conditional&&a.condition===this)||!!(a instanceof AST_PropAccess&&a.expression===this)||!!(this instanceof AST_Assign&&this.left instanceof AST_Destructuring&&!1===this.left.is_array)||void 0}),r(AST_Directive,function(c,a){a.print_string(c.value,c.quote),a.semicolon()}),r(AST_Expansion,function(c,a){a.print("..."),c.expression.print(a)}),r(AST_Destructuring,function(d,e){e.print(d.is_array?"[":"{");var b=d.names.length;d.names.forEach(function(c,a){0<a&&e.comma(),c.print(e),a==b-1&&c instanceof AST_Hole&&e.comma()}),e.print(d.is_array?"]":"}")}),r(AST_Debugger,function(c,a){a.print("debugger"),a.semicolon()}),AST_StatementWithBody.DEFMETHOD("_do_print_body",function(b){g(this.body,b)}),r(AST_Statement,function(c,a){c.body.print(a),a.semicolon()}),r(AST_Toplevel,function(c,a){t(c.body,!0,a,!0),a.print("")}),r(AST_LabeledStatement,function(c,a){c.label.print(a),a.colon(),c.body.print(a)}),r(AST_SimpleStatement,function(c,a){c.body.print(a),a.semicolon()}),r(AST_BlockStatement,function(c,a){u(c,a)}),r(AST_EmptyStatement,function(c,a){a.semicolon()}),r(AST_Do,function(c,a){a.print("do"),a.space(),i(c.body,a),a.space(),a.print("while"),a.space(),a.with_parens(function(){c.condition.print(a)}),a.semicolon()}),r(AST_While,function(c,a){a.print("while"),a.space(),a.with_parens(function(){c.condition.print(a)}),a.space(),c._do_print_body(a)}),r(AST_For,function(c,a){a.print("for"),a.space(),a.with_parens(function(){c.init?(c.init instanceof AST_Definitions?c.init.print(a):e(c.init,a,!0),a.print(";"),a.space()):a.print(";"),c.condition?(c.condition.print(a),a.print(";"),a.space()):a.print(";"),c.step&&c.step.print(a)}),a.space(),c._do_print_body(a)}),r(AST_ForIn,function(c,a){a.print("for"),a.space(),a.with_parens(function(){c.init.print(a),a.space(),a.print(c instanceof AST_ForOf?"of":"in"),a.space(),c.object.print(a)}),a.space(),c._do_print_body(a)}),r(AST_With,function(c,a){a.print("with"),a.space(),a.with_parens(function(){c.expression.print(a)}),a.space(),c._do_print_body(a)}),AST_Lambda.DEFMETHOD("_do_print",function(d,a){var b=this;a||(b.async&&(d.print("async"),d.space()),d.print("function"),b.is_generator&&d.star(),b.name&&d.space()),b.name instanceof AST_Symbol?b.name.print(d):a&&b.name instanceof AST_Node&&d.with_square(function(){b.name.print(d)}),d.with_parens(function(){b.argnames.forEach(function(a,b){b&&d.comma(),a.print(d)})}),d.space(),u(b,d,!0)}),r(AST_Lambda,function(c,a){c._do_print(a)}),r(AST_PrefixedTemplateString,function(c,a){c.prefix.print(a),c.template_string.print(a)}),r(AST_TemplateString,function(e,a){var b=a.parent()instanceof AST_PrefixedTemplateString;a.print("`");for(var c=0;c<e.segments.length;c++)e.segments[c]instanceof AST_TemplateSegment?b?a.print(e.segments[c].raw):a.print_template_string_chars(e.segments[c].value):(a.print("${"),e.segments[c].print(a),a.print("}"));a.print("`")}),AST_Arrow.DEFMETHOD("_do_print",function(d){var a=this,b=d.parent(),c=b instanceof AST_Binary||b instanceof AST_Unary||b instanceof AST_Call&&a===b.expression;c&&d.print("("),a.async&&(d.print("async"),d.space()),1===a.argnames.length&&a.argnames[0]instanceof AST_Symbol?a.argnames[0].print(d):d.with_parens(function(){a.argnames.forEach(function(a,b){b&&d.comma(),a.print(d)})}),d.space(),d.print("=>"),d.space(),a.body instanceof AST_Node?a.body.print(d):u(a,d),c&&d.print(")")}),AST_Exit.DEFMETHOD("_do_print",function(c,a){c.print(a),this.value&&(c.space(),this.value.print(c)),c.semicolon()}),r(AST_Return,function(c,a){c._do_print(a,"return")}),r(AST_Throw,function(c,a){c._do_print(a,"throw")}),r(AST_Yield,function(d,a){var b=d.is_star?"*":"";a.print("yield"+b),d.expression&&(a.space(),d.expression.print(a))}),r(AST_Await,function(e,a){a.print("await"),a.space();var b=e.expression,c=!(b instanceof AST_Call||b instanceof AST_SymbolRef||b instanceof AST_PropAccess||b instanceof AST_Unary||b instanceof AST_Constant);c&&a.print("("),e.expression.print(a),c&&a.print(")")}),AST_LoopControl.DEFMETHOD("_do_print",function(c,a){c.print(a),this.label&&(c.space(),this.label.print(c)),c.semicolon()}),r(AST_Break,function(c,a){c._do_print(a,"break")}),r(AST_Continue,function(c,a){c._do_print(a,"continue")}),r(AST_If,function(d,a){a.print("if"),a.space(),a.with_parens(function(){d.condition.print(a)}),a.space(),d.alternative?(c(d,a),a.space(),a.print("else"),a.space(),d.alternative instanceof AST_If?d.alternative.print(a):g(d.alternative,a)):d._do_print_body(a)}),r(AST_Switch,function(d,e){e.print("switch"),e.space(),e.with_parens(function(){d.expression.print(e)}),e.space();var b=d.body.length-1;0>b?e.print("{}"):e.with_block(function(){d.body.forEach(function(c,a){e.indent(!0),c.print(e),a<b&&0<c.body.length&&e.newline()})})}),AST_SwitchBranch.DEFMETHOD("_do_print_body",function(c){c.newline(),this.body.forEach(function(a){c.indent(),a.print(c),c.newline()})}),r(AST_Default,function(c,a){a.print("default:"),c._do_print_body(a)}),r(AST_Case,function(c,a){a.print("case"),a.space(),c.expression.print(a),a.print(":"),c._do_print_body(a)}),r(AST_Try,function(c,a){a.print("try"),a.space(),u(c,a),c.bcatch&&(a.space(),c.bcatch.print(a)),c.bfinally&&(a.space(),c.bfinally.print(a))}),r(AST_Catch,function(c,a){a.print("catch"),a.space(),a.with_parens(function(){c.argname.print(a)}),a.space(),u(c,a)}),r(AST_Finally,function(c,a){a.print("finally"),a.space(),u(c,a)}),AST_Definitions.DEFMETHOD("_do_print",function(f,a){f.print(a),f.space(),this.definitions.forEach(function(a,b){b&&f.comma(),a.print(f)});var b=f.parent(),c=b instanceof AST_For||b instanceof AST_ForIn,d=c&&b.init===this;d||f.semicolon()}),r(AST_Let,function(c,a){c._do_print(a,"let")}),r(AST_Var,function(c,a){c._do_print(a,"var")}),r(AST_Const,function(c,a){c._do_print(a,"const")}),r(AST_Import,function(e,a){a.print("import"),a.space(),e.imported_name&&e.imported_name.print(a),e.imported_name&&e.imported_names&&(a.print(","),a.space()),e.imported_names&&(1===e.imported_names.length&&"*"===e.imported_names[0].foreign_name.name?e.imported_names[0].print(a):(a.print("{"),e.imported_names.forEach(function(b,c){a.space(),b.print(a),c<e.imported_names.length-1&&a.print(",")}),a.space(),a.print("}"))),(e.imported_name||e.imported_names)&&(a.space(),a.print("from"),a.space()),e.module_name.print(a),a.semicolon()}),r(AST_NameMapping,function(f,a){var b=a.parent()instanceof AST_Import,c=f.name.definition(),d=(c&&c.mangled_name||f.name.name)!==f.foreign_name.name;d?(b?a.print(f.foreign_name.name):f.name.print(a),a.space(),a.print("as"),a.space(),b?f.name.print(a):a.print(f.foreign_name.name)):f.name.print(a)}),r(AST_Export,function(e,a){if(a.print("export"),a.space(),e.is_default&&(a.print("default"),a.space()),e.exported_names)1===e.exported_names.length&&"*"===e.exported_names[0].name.name?e.exported_names[0].print(a):(a.print("{"),e.exported_names.forEach(function(b,c){a.space(),b.print(a),c<e.exported_names.length-1&&a.print(",")}),a.space(),a.print("}"));else if(e.exported_value)e.exported_value.print(a);else if(e.exported_definition&&(e.exported_definition.print(a),e.exported_definition instanceof AST_Definitions))return;e.module_name&&(a.space(),a.print("from"),a.space(),e.module_name.print(a)),a.semicolon()}),r(AST_VarDef,function(f,a){if(f.name.print(a),f.value){a.space(),a.print("="),a.space();var b=a.parent(1),c=b instanceof AST_For||b instanceof AST_ForIn;e(f.value,a,c)}}),r(AST_Call,function(c,e){c.expression.print(e),c instanceof AST_New&&!d(c,e)||((c.expression instanceof AST_Call||c.expression instanceof AST_Lambda)&&e.add_mapping(c.start),e.with_parens(function(){c.args.forEach(function(b,a){a&&e.comma(),b.print(e)})}))}),r(AST_New,function(c,a){a.print("new"),a.space(),AST_Call.prototype._codegen(c,a)}),AST_Sequence.DEFMETHOD("_do_print",function(d){this.expressions.forEach(function(a,b){0<b&&(d.comma(),d.should_break()&&(d.newline(),d.indent())),a.print(d)})}),r(AST_Sequence,function(c,a){c._do_print(a)}),r(AST_Dot,function(e,a){var b=e.expression;b.print(a);var c=e.property;a.option("ie8")&&RESERVED_WORDS(c)?(a.print("["),a.add_mapping(e.end),a.print_string(c),a.print("]")):(b instanceof AST_Number&&0<=b.getValue()&&!/[xa-f.)]/i.test(a.last())&&a.print("."),a.print("."),a.add_mapping(e.end),a.print_name(c))}),r(AST_Sub,function(c,a){c.expression.print(a),a.print("["),c.property.print(a),a.print("]")}),r(AST_UnaryPrefix,function(d,a){var b=d.operator;a.print(b),(/^[a-z]/i.test(b)||/[+-]$/.test(b)&&d.expression instanceof AST_UnaryPrefix&&/^[+-]/.test(d.expression.operator))&&a.space(),d.expression.print(a)}),r(AST_UnaryPostfix,function(c,a){c.expression.print(a),a.print(c.operator)}),r(AST_Binary,function(d,a){var b=d.operator;d.left.print(a),">"==b[0]&&d.left instanceof AST_UnaryPostfix&&"--"==d.left.operator?a.print(" "):a.space(),a.print(b),("<"==b||"<<"==b)&&d.right instanceof AST_UnaryPrefix&&"!"==d.right.operator&&d.right.expression instanceof AST_UnaryPrefix&&"--"==d.right.expression.operator?a.print(" "):a.space(),d.right.print(a)}),r(AST_Conditional,function(c,a){c.condition.print(a),a.space(),a.print("?"),a.space(),c.consequent.print(a),a.space(),a.colon(),c.alternative.print(a)}),r(AST_Array,function(e,f){f.with_square(function(){var b=e.elements,c=b.length;0<c&&f.space(),b.forEach(function(a,b){b&&f.comma(),a.print(f),b===c-1&&a instanceof AST_Hole&&f.comma()}),0<c&&f.space()})}),r(AST_Object,function(c,d){0<c.properties.length?d.with_block(function(){c.properties.forEach(function(b,a){a&&(d.print(","),d.newline()),d.indent(),b.print(d)}),d.newline()}):d.print("{}")}),r(AST_Class,function(d,e){if(e.print("class"),e.space(),d.name&&(d.name.print(e),e.space()),d.extends){var a=!(d.extends instanceof AST_SymbolRef)&&!(d.extends instanceof AST_PropAccess)&&!(d.extends instanceof AST_ClassExpression)&&!(d.extends instanceof AST_Function);e.print("extends"),a?e.print("("):e.space(),d.extends.print(e),a?e.print(")"):e.space()}0<d.properties.length?e.with_block(function(){d.properties.forEach(function(b,a){a&&e.newline(),e.indent(),b.print(e)}),e.newline()}):e.print("{}")}),r(AST_NewTarget,function(c,a){a.print("new.target")}),r(AST_ObjectKeyVal,function(e,a){function b(c){var a=c.definition();return a?a.mangled_name||a.name:c.name}var c=a.option("shorthand");c&&e.value instanceof AST_Symbol&&is_identifier_string(e.key)&&b(e.value)===e.key&&is_identifier(e.key)?f(e.key,e.quote,a):c&&e.value instanceof AST_DefaultAssign&&e.value.left instanceof AST_Symbol&&is_identifier_string(e.key)&&b(e.value.left)===e.key?(f(e.key,e.quote,a),a.space(),a.print("="),a.space(),e.value.right.print(a)):(e.key instanceof AST_Node?a.with_square(function(){e.key.print(a)}):f(e.key,e.quote,a),a.colon(),e.value.print(a))}),AST_ObjectProperty.DEFMETHOD("_print_getter_setter",function(d,a){var b=this;b.static&&(a.print("static"),a.space()),d&&(a.print(d),a.space()),b.key instanceof AST_SymbolMethod?f(b.key.name,b.quote,a):a.with_square(function(){b.key.print(a)}),b.value._do_print(a,!0)}),r(AST_ObjectSetter,function(c,a){c._print_getter_setter("set",a)}),r(AST_ObjectGetter,function(c,a){c._print_getter_setter("get",a)}),r(AST_ConciseMethod,function(c,a){c._print_getter_setter(c.is_generator&&"*"||c.async&&"async",a)}),AST_Symbol.DEFMETHOD("_do_print",function(c){var a=this.definition();c.print_name(a?a.mangled_name||a.name:this.name)}),r(AST_Symbol,function(c,a){c._do_print(a)}),r(AST_Hole,noop),r(AST_This,function(c,a){a.print("this")}),r(AST_Super,function(c,a){a.print("super")}),r(AST_Constant,function(c,a){a.print(c.getValue())}),r(AST_String,function(c,a){a.print_string(c.getValue(),c.quote,k)}),r(AST_Number,function(c,a){m&&c.start&&null!=c.start.raw?a.print(c.start.raw):a.print(h(c.getValue()))}),r(AST_RegExp,function(f,a){var b=f.getValue(),c=b.toString();b.raw_source&&(c="/"+b.raw_source+c.slice(c.lastIndexOf("/"))),c=a.to_utf8(c),a.print(c);var d=a.parent();d instanceof AST_Binary&&/^in/.test(d.operator)&&d.left===f&&a.print(" ")}),b(AST_Node,noop),b(AST_Directive,j),b(AST_Debugger,j),b(AST_Symbol,j),b(AST_Jump,j),b(AST_StatementWithBody,j),b(AST_LabeledStatement,noop),b(AST_Lambda,j),b(AST_Switch,j),b(AST_SwitchBranch,j),b(AST_BlockStatement,j),b(AST_Toplevel,noop),b(AST_New,j),b(AST_Try,j),b(AST_Catch,j),b(AST_Finally,j),b(AST_Definitions,j),b(AST_Constant,j),b(AST_ObjectSetter,function(c,a){a.add_mapping(c.start,c.key.name)}),b(AST_ObjectGetter,function(c,a){a.add_mapping(c.start,c.key.name)}),b(AST_ObjectProperty,function(c,a){a.add_mapping(c.start,c.key)})})();