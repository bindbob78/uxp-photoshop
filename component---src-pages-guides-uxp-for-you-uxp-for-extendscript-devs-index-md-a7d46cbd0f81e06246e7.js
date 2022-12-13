"use strict";(self.webpackChunkuxp_photoshop_documentation=self.webpackChunkuxp_photoshop_documentation||[]).push([[3974],{52451:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return m}});var a=n(87462),o=n(63366),r=(n(15007),n(64983)),i=n(91515),s=["components"],d={},p={_frontmatter:d},l=i.Z;function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.mdx)(l,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"uxp-for-extendscript-developers"},"UXP for ExtendScript Developers"),(0,r.mdx)("p",null,"If you're coming to UXP from ExtendScript and the ESTK (ExtendScript ToolKit) or its 64-bit successor, the ",(0,r.mdx)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug"},"ExtendScript Debugger"),", you'll be pleasantly surprised but you'll also have some new things to learn:"),(0,r.mdx)("h3",{id:"different-dom-access"},"Different DOM access"),(0,r.mdx)("p",null,"UXP provides different methods for accessing the Photoshop DOM. See the ",(0,r.mdx)("a",{parentName:"p",href:"../../ps_reference/"},"Photoshop UXP API reference")," for more information. At present, the entire DOM is not yet supported, but more access is being added with every Photoshop release."),(0,r.mdx)("p",null,"As a workaround until all the significant Photoshop features are accessible via UXP, you can use a feature called ",(0,r.mdx)("a",{parentName:"p",href:"../../ps_reference/media/batchplay/"},"batchPlay"),"."),(0,r.mdx)("h3",{id:"migration-helper-for-extendscript-developers"},"Migration helper for ExtendScript developers"),(0,r.mdx)("p",null,"If you use ",(0,r.mdx)("inlineCode",{parentName:"p"},"executeAction")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"executeActionGet")," often in your code, the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/adobe-uxp/ps-es-to-uxp"},"ExtendScript batchPlay logger")," utility can help you migrate your code. Plug the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ps-es-to-uxp")," jsx code into your ExtendScript project, and it will print out all your ",(0,r.mdx)("inlineCode",{parentName:"p"},"executeAction")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"executeActionGet")," methods in a format suitable for the UXP equivalent API: ",(0,r.mdx)("a",{parentName:"p",href:"../../ps_reference/media/batchplay"},"batchPlay"),"."),(0,r.mdx)("h3",{id:"development-environment"},"Development environment"),(0,r.mdx)("p",null,'ExtendScript Toolkit ("ESTK") was the development environment of choice for many years, and still is for many Windows developers. On macOS, ESTK died a lingering death due to the deprecation of 32-bit code. Recently, ESTK has been replaced by a plugin for Visual Studio Code, a widely-used editor.'),(0,r.mdx)("p",null,"UXP source code (which is just HTML, CSS, and JavaScript) can be developed in the programming editor of your choice, although many in the UXP world prefer VS Code due to its powerful extensibility features."),(0,r.mdx)("h3",{id:"user-interface"},"User interface"),(0,r.mdx)("p",null,"In some ExtendScripts, there is generally little to no UI; the end user picks a script from the File->Scripts menu, and the script runs facelessly. If your ExtendScript  ",(0,r.mdx)("em",{parentName:"p"},"does")," need a UI, you typically use simple JavaScript ",(0,r.mdx)("inlineCode",{parentName:"p"},"alert()"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"confirm()"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"prompt()")," calls. Or you could use the full-featured but complex ",(0,r.mdx)("a",{parentName:"p",href:"https://creativepro.com/files/kahrel/indesign/scriptui.html"},"ScriptUI")," to create complex dialogs. Moving beyond ExtendScript into CEP, there are more possibilities with panels."),(0,r.mdx)("p",null,"In UXP, on the other hand, you're able to design as simple or as complex a UI as you want, merely by using HTML and CSS to create the visual part, and JavaScript to create the UI's underlying logic (e.g., \"what should I do when this button is clicked\")."),(0,r.mdx)("h3",{id:"modern-javascript"},"Modern JavaScript"),(0,r.mdx)("p",null,"ExtendScript uses a very old version of JavaScript (ES3), from the era when JavaScript was coded on punched cards. In contrast, UXP uses the V8 JavaScript engine which supports ES6; this has a number of important features lacking in ExtendScript. Not all of the newer features are used and/or supported in the UXP world, but as an ExtendScript developer you'll see enough puzzling syntax in UXP examples that you should probably familiarize yourself with ECMAScript ES6 (the standards body name for JavaScript) so you can understand the sample code."),(0,r.mdx)("p",null,"A full introduction to ES6 features and syntax is beyond the scope of this documentation. You can find many websites that discuss ES6 features, including the popular ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},"Mozilla Developer Network"),". Make sure you understand at least these language features, which you will find in UXP code you pick up from around the web:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements"},'"const" and "let" declarations vs "var"')),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous"},"Promises and asynchronous functions")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"},"Anonymous functions")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"},"Arrow functions")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"},"Template literals")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"},"Maps"))),(0,r.mdx)("h3",{id:"whats-missing-in-uxp"},"What's Missing in UXP"),(0,r.mdx)("p",null,"UXP provides an HTML interpreter similar to Chromium; it's more limited than a full browser, which means some commonly-used web CSS and HTML idioms don't work. For more information on what does and doesn't work in the UXP HTML environment, see ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-photoshop/guides/uxp_guide/unsupported/"},"this document"),"."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-uxp-for-you-uxp-for-extendscript-devs-index-md-a7d46cbd0f81e06246e7.js.map