define(["jquery","formulas"],function(e,t){window.MathJax={startup:{elements:null,typeset:!0,document:document,invalidOption:"warn",ready:()=>{MathJax.startup.defaultReady(),MathJax.startup.promise.then(()=>{console.log("[MathJax] ready > completed"),document.getElementById("mathjax-ready").innerHTML=!0,t.loadTex(()=>{MathJax.typeset()}),e("#SI-button").attr("disabled",!1),e("#SI-button").click(e=>{e.preventDefault(),t.calculate(()=>{MathJax.typeset()})})})},pageReady:()=>MathJax.startup.defaultPageReady().then(()=>{console.log("[MathJax] pageReady > completed"),document.getElementById("mathjax-pageReady").innerHTML=!0,e("#SI-formula").text("$$\\displaystyle{\\displaylines{I=P*R*T}}$$")})},options:{skipHtmlTags:{"[+]":["li"]},includeHtmlTags:{br:"n",wbr:"","#comment":""},ignoreHtmlClass:"ignore_math",processHtmlClass:"process_math",compileError:function(e,t,a){e.compileError(t,a)},typesetError:function(e,t,a){e.typesetError(t,a)}},loader:{load:["input/tex","[tex]/color"]},tex:{packages:{"[+]":["color"]},inlineMath:[["\\(","\\)"]],displayMath:[["$$","$$"],["\\[","\\]"]]},svg:{fontCache:"global"}},function(){let e=document.createElement("script");e.id="MathJaxScriptSource",e.src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js",e.async=!0,document.head.appendChild(e)}()});