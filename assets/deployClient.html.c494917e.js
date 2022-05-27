import{_ as d}from"./personalToken.5afad68b.js";import{_ as t,r as o,o as r,c as h,a as e,b as a,w as l,F as p,e as s,d as n}from"./app.09054c5a.js";const u={},_=s('<h1 id="\u90E8\u7F72\u4E0E\u914D\u7F6E\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u4E0E\u914D\u7F6E\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> \u90E8\u7F72\u4E0E\u914D\u7F6E\u5BA2\u6237\u7AEF</h1><h2 id="\u901A\u8FC7\u6E90\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u6E90\u4EE3\u7801" aria-hidden="true">#</a> \u901A\u8FC7\u6E90\u4EE3\u7801</h2><h3 id="\u4F9D\u8D56\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u73AF\u5883" aria-hidden="true">#</a> \u4F9D\u8D56\u73AF\u5883</h3>',3),b=e("li",null,[e("p",null,"\u7CFB\u7EDF\u73AF\u5883"),e("ul",null,[e("li",null,"Linux\uFF0CWindows\u6216macOS")])],-1),m=e("p",null,"\u73AF\u5883\u51C6\u5907",-1),g=e("strong",null,"Python 3.7",-1),v=n("\uFF0C"),f=n("\u5B89\u88C5\u6307\u5F15"),x=s(`<h3 id="\u4F7F\u7528\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6B65\u9AA4" aria-hidden="true">#</a> \u4F7F\u7528\u6B65\u9AA4</h3><h4 id="\u5B89\u88C5\u7B2C\u4E09\u65B9\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u7B2C\u4E09\u65B9\u5E93" aria-hidden="true">#</a> \u5B89\u88C5\u7B2C\u4E09\u65B9\u5E93</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u6E90\u7801\u6839\u76EE\u5F55\u4E0B\u6267\u884C
pip3 install -r client/requirements/app_reqs.pip
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u5B89\u88C5\u7B2C\u4E09\u65B9\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u7B2C\u4E09\u65B9\u5DE5\u5177" aria-hidden="true">#</a> \u5B89\u88C5\u7B2C\u4E09\u65B9\u5DE5\u5177</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u6E90\u7801\u6839\u76EE\u5F55
cd client/requirements

# \u6267\u884C\u5B89\u88C5\u811A\u672C
# Linux/macOS\u73AF\u5883
./install.sh
# Windows\u73AF\u5883
./install.bat
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="\u914D\u7F6E\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> \u914D\u7F6E\u5BA2\u6237\u7AEF</h4><ul><li><p>\u914D\u7F6E <code>client/config.ini</code> \u6587\u4EF6</p><p>\u5C06 <code>&lt;Server IP\u5730\u5740&gt;</code> \u66FF\u6362\u6210\u5B9E\u9645\u7684serve ip\uFF08\u53EF\u5305\u542B\u7AEF\u53E3\u53F7\uFF09\u3002</p><p><img src="https://tencent.github.io/CodeAnalysis/media/clientConfigIni.png" alt="\u5BA2\u6237\u7AEF\u6267\u884C\u73AF\u5883\u914D\u7F6E"></p></li><li><p>\u914D\u7F6E <code>client/codedog.ini</code> \u6587\u4EF6</p><p>\u5FC5\u586B\u9879\uFF1A<code>token</code>\u3001<code>org_sid</code>\u3001<code>team_name</code>\u3001<code>source_dir</code></p><ul><li><p><strong>\u4E2A\u4EBA\u4EE4\u724C</strong> - <code>token</code>\uFF1A\u4ECE TCA \u9875\u9762\u83B7\u53D6\uFF0C\u524D\u5F80[\u4E2A\u4EBA\u4E2D\u5FC3]-[\u4E2A\u4EBA\u4EE4\u724C]-\u590D\u5236Token</p><p><img src="`+d+`" alt="personalToken"></p></li><li><p><strong>\u56E2\u961F\u7F16\u53F7</strong> - <code>org_sid</code>\uFF1A\u8FDB\u5165 TCA \u9879\u76EE\u6982\u89C8\u9875\uFF0C\u4ECE URL \u4E2D\u83B7\u53D6</p></li><li><p><strong>\u9879\u76EE\u540D\u79F0</strong> - <code>team_name</code>\uFF1A\uFF1A\u8FDB\u5165 TCA \u9879\u76EE\u6982\u89C8\u9875\uFF0C\u4ECE URL \u4E2D\u83B7\u53D6</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u9879\u76EE\u6982\u89C8URL\u683C\u5F0F\uFF1A<code>http://{\u57DF\u540D}/t/{org_sid}/p/{team_name}/profile</code></p></div></li><li><p><strong>\u5206\u6790\u8DEF\u5F84</strong> - <code>source_dir</code>: \u672C\u5730\u4EE3\u7801\u76EE\u5F55\u8DEF\u5F84</p></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li><p>\u5982\u679C\u9879\u76EE\u4EE3\u7801\u4E3A\u7F16\u8BD1\u578B\u8BED\u8A00\uFF08\u6BD4\u5982\uFF1AC/C++\uFF0CC#\uFF0CGo\uFF0CJava\uFF0CKotlin\uFF0CObjective-C\u7B49\uFF09\uFF0C\u4E14\u4F7F\u7528\u7684\u5206\u6790\u65B9\u6848\u4E2D\u914D\u7F6E\u4E86\u7F16\u8BD1\u578B\u5DE5\u5177\uFF08\u5982\u56FE\uFF0C\u4F7F\u7528\u4E86OC\u63A8\u8350\u89C4\u5219\u5305\uFF09\uFF0C\u9700\u8981\u586B\u5199<code>build_cmd</code>\u7F16\u8BD1\u547D\u4EE4\u3002</p></li><li><p>\u5176\u4ED6\u53EF\u9009\u9879\u6309\u9700\u586B\u5199\uFF0C\u4E0D\u586B\u5199\u65F6\u6309\u9ED8\u8BA4\u914D\u7F6E\u6267\u884C</p></li></ul></div></li></ul><h4 id="\u542F\u52A8\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> \u542F\u52A8\u5BA2\u6237\u7AEF</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u6E90\u7801\u6839\u76EE\u5F55
cd client

# \u6267\u884C\u5BA2\u6237\u7AEF\u811A\u672C
python3 codepuppy.py localscan
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Client \u7684\u5B9E\u73B0\u53CA\u542F\u52A8\u811A\u672C\u5747\u4F9D\u8D56 Python3 \u7248\u672C\u4E3A 3.7\uFF0C\u53EF\u6267\u884C <code>python3 --version</code> \u67E5\u770B\u7248\u672C\u3002\u82E5\u7248\u672C\u6709\u8BEF\uFF0C\u53EF\u5B89\u88C5\u7248\u672C\u4E3A3.7\u7684python\u5E76\u8F6F\u94FE\u63A5\u5230python3\u547D\u4EE4\u3002</p></div>`,10),k={class:"custom-container tip"},E=e("p",{class:"custom-container-title"},"TIP",-1),C=e("li",null,[e("p",null,[e("code",null,"codedog.ini"),n(" \u5404\u9879\u53C2\u6570\u53EF\u7531\u547D\u4EE4\u884C\u4F20\u5165\uFF0C\u83B7\u53D6\u8BE6\u7EC6\u53C2\u6570\u8BF4\u660E\u53EF\u8FD0\u884C "),e("code",null,"python3 codepuppy.py localscan -h")])],-1),A=n("\u4F7F\u7528"),y=e("code",null,"localscan",-1),B=n("\u547D\u4EE4\u542F\u52A8\u672C\u5730\u5355\u6B21\u7684\u4EE3\u7801\u5206\u6790\uFF0C\u5982\u9700\u542F\u52A8\u5206\u5E03\u5F0F\u5E76\u884C\u5206\u6790\u4EFB\u52A1\uFF0C\u8BF7\u53C2\u8003"),R=n("\u4F7F\u7528\u5206\u5E03\u5F0F\u8282\u70B9\u6A21\u5F0F"),I=n("\u8FDB\u884C\u914D\u7F6E\u3002"),D=s('<h2 id="\u901A\u8FC7docker-compose" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7docker-compose" aria-hidden="true">#</a> \u901A\u8FC7Docker-Compose</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u9002\u7528\u4E8E\u5FEB\u901F\u4E0A\u624B\u4F53\u9A8C\u3002\u4F7F\u7528docker\u8FD0\u884C\uFF0C\u53EF\u4EE5\u514D\u53BB\u5BA2\u6237\u7AEF\u73AF\u5883\u4F9D\u8D56\u7684\u5B89\u88C5\uFF0C\u907F\u514D\u73AF\u5883\u517C\u5BB9\u6027\u95EE\u9898\u3002</p><p>\u4F46\u662F\u7531\u4E8E\u73AF\u5883\u53D7\u9650\u4E8Edocker\uFF0C\u4F1A\u65E0\u6CD5\u590D\u7528\u672C\u5730\u7684\u7F16\u8BD1\u73AF\u5883\uFF0C\u90E8\u5206\u9700\u8981\u7F16\u8BD1\u7684\u5DE5\u5177\u65E0\u6CD5\u4F7F\u7528\u3002</p></div><h3 id="\u4F7F\u7528\u6B65\u9AA4-1" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6B65\u9AA4-1" aria-hidden="true">#</a> \u4F7F\u7528\u6B65\u9AA4</h3><h4 id="\u914D\u7F6E\u5BA2\u6237\u7AEF-1" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5BA2\u6237\u7AEF-1" aria-hidden="true">#</a> \u914D\u7F6E\u5BA2\u6237\u7AEF</h4><ul><li><p>\u914D\u7F6E <code>client/config.ini</code> \u6587\u4EF6</p></li><li><p>\u914D\u7F6E <code>client/codedog.ini</code> \u6587\u4EF6</p></li></ul>',5),S={class:"custom-container tip"},T=e("p",{class:"custom-container-title"},"TIP",-1),O=n("\u540C\u901A\u8FC7\u6E90\u4EE3\u7801\u4F7F\u7528-"),P=n("\u914D\u7F6E\u5BA2\u6237\u7AEF"),w=e("h4",{id:"\u6784\u5EFA\u955C\u50CF",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u6784\u5EFA\u955C\u50CF","aria-hidden":"true"},"#"),n(" \u6784\u5EFA\u955C\u50CF")],-1),L=n("\u5B89\u88C5Docker\uFF0C\u5B89\u88C5\u6559\u7A0B\uFF1A"),U={href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"},F=n("\u5B98\u65B9\u6587\u6863"),q=n("\u5B89\u88C5Docker-Compose\uFF0C\u5B89\u88C5\u6559\u7A0B\uFF1A"),N={href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"},W=n("\u5B98\u65B9\u6587\u6863"),V=e("li",null,[e("p",null,[n("\u8FDB\u5165"),e("code",null,"client"),n("\u76EE\u5F55\uFF0C\u6784\u5EFAdocker\u955C\u50CF")])],-1),$=s(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker build -t tca-client .
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u542F\u52A8\u5BA2\u6237\u7AEF-1" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u5BA2\u6237\u7AEF-1" aria-hidden="true">#</a> \u542F\u52A8\u5BA2\u6237\u7AEF</h4><h5 id="\u65B9\u6848\u4E00-\u76F4\u63A5\u4F7F\u7528docker\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848\u4E00-\u76F4\u63A5\u4F7F\u7528docker\u8FD0\u884C" aria-hidden="true">#</a> \u65B9\u6848\u4E00\uFF1A\u76F4\u63A5\u4F7F\u7528docker\u8FD0\u884C</h5><p>\u8FDB\u5165<code>client</code>\u76EE\u5F55\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u6309\u7167\u5B9E\u9645\u60C5\u51B5\u586B\u5199\`SOURCE_DIR\`\u73AF\u5883\u53D8\u91CF\u503C
export SOURCE_DIR=\u9700\u8981\u626B\u63CF\u7684\u4EE3\u7801\u76EE\u5F55\u7EDD\u5BF9\u8DEF\u5F84
docker run -it --rm  -v $PWD:/workspace/client -v $SOURCE_DIR:/workspace/src  --name tca-client tca-client
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="\u65B9\u6848\u4E8C-\u4F7F\u7528docker\u5185bash\u7EC8\u7AEF\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848\u4E8C-\u4F7F\u7528docker\u5185bash\u7EC8\u7AEF\u8FD0\u884C" aria-hidden="true">#</a> \u65B9\u6848\u4E8C\uFF1A\u4F7F\u7528docker\u5185bash\u7EC8\u7AEF\u8FD0\u884C</h5><ol><li><p>\u8FDB\u5165docker\u5BB9\u5668\u5185\u7684bash\u7EC8\u7AEF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># \u6309\u7167\u5B9E\u9645\u60C5\u51B5\u586B\u5199\`SOURCE_DIR\`\u73AF\u5883\u53D8\u91CF\u503C
export SOURCE_DIR=\u9700\u8981\u626B\u63CF\u7684\u4EE3\u7801\u76EE\u5F55\u7EDD\u5BF9\u8DEF\u5F84
docker run -it --rm  -v $PWD:/workspace/client -v $SOURCE_DIR:/workspace/src --name tca-client tca-client bash
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>\u901A\u8FC7\u547D\u4EE4\u884C\u542F\u52A8client\u4EE3\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>python3 codepuppy.py localscan
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ol><h2 id="\u901A\u8FC7\u53EF\u6267\u884C\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u53EF\u6267\u884C\u6587\u4EF6" aria-hidden="true">#</a> \u901A\u8FC7\u53EF\u6267\u884C\u6587\u4EF6</h2><h3 id="\u4F9D\u8D56\u73AF\u5883-1" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u73AF\u5883-1" aria-hidden="true">#</a> \u4F9D\u8D56\u73AF\u5883</h3><ul><li><p>\u7CFB\u7EDF\u73AF\u5883</p><ul><li>Linux\uFF0CWindows\u6216macOS</li></ul></li></ul><h3 id="\u4F7F\u7528\u6B65\u9AA4-2" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6B65\u9AA4-2" aria-hidden="true">#</a> \u4F7F\u7528\u6B65\u9AA4</h3><h4 id="\u4E0B\u8F7D\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> \u4E0B\u8F7D\u5BA2\u6237\u7AEF</h4>`,12),G=n("\u4ECE"),j={href:"https://github.com/Tencent/CodeAnalysis/releases",target:"_blank",rel:"noopener noreferrer"},J=n("\u53D1\u5E03\u9875\u9762"),K=n("\u4E0B\u8F7D\u4E0E\u7CFB\u7EDF\u76F8\u5BF9\u5E94\u7684\u5BA2\u6237\u7AEF\u538B\u7F29\u5305\u5230\u672C\u5730\u3002"),z=e("li",null,[e("p",null,"\u89E3\u538B\u7F29\u3002")],-1),H=e("h4",{id:"\u914D\u7F6E\u5BA2\u6237\u7AEF-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u914D\u7F6E\u5BA2\u6237\u7AEF-2","aria-hidden":"true"},"#"),n(" \u914D\u7F6E\u5BA2\u6237\u7AEF")],-1),M=e("ul",null,[e("li",null,[e("p",null,[n("\u914D\u7F6E "),e("code",null,"client/config.ini"),n(" \u6587\u4EF6")])]),e("li",null,[e("p",null,[n("\u914D\u7F6E "),e("code",null,"client/codedog.ini"),n(" \u6587\u4EF6")])])],-1),Q={class:"custom-container tip"},X=e("p",{class:"custom-container-title"},"TIP",-1),Y=n("\u540C\u901A\u8FC7\u6E90\u4EE3\u7801\u4F7F\u7528-"),Z=n("\u914D\u7F6E\u5BA2\u6237\u7AEF"),ee=s(`<h4 id="\u542F\u52A8\u5BA2\u6237\u7AEF-2" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u5BA2\u6237\u7AEF-2" aria-hidden="true">#</a> \u542F\u52A8\u5BA2\u6237\u7AEF</h4><p>\u8FDB\u5165\u5230<code>client</code>\u76EE\u5F55\u4E0B\uFF0C\u6267\u884C\u5BA2\u6237\u7AEF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./codepuppy localscan
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,3);function ne(ae,se){const i=o("RouterLink"),c=o("ExternalLinkIcon");return r(),h(p,null,[_,e("ul",null,[b,e("li",null,[m,e("ul",null,[e("li",null,[g,v,a(i,{to:"/en/quickStarted/references/install_python37_on_centos.html"},{default:l(()=>[f]),_:1})])])])]),x,e("div",k,[E,e("ul",null,[C,e("li",null,[e("p",null,[A,y,B,a(i,{to:"/en/client/#%E4%BA%94%E4%BD%BF%E7%94%A8%E5%88%86%E5%B8%83%E5%BC%8F%E8%8A%82%E7%82%B9%E6%A8%A1%E5%BC%8F%E6%89%A7%E8%A1%8C%E5%AE%A2%E6%88%B7%E7%AB%AF"},{default:l(()=>[R]),_:1}),I])])])]),D,e("div",S,[T,e("p",null,[O,a(i,{to:"/en/quickStarted/deployClient.html#%E9%85%8D%E7%BD%AE%E5%AE%A2%E6%88%B7%E7%AB%AF"},{default:l(()=>[P]),_:1})])]),w,e("ol",null,[e("li",null,[e("p",null,[L,e("a",U,[F,a(c)])])]),e("li",null,[e("p",null,[q,e("a",N,[W,a(c)])])]),V]),$,e("ol",null,[e("li",null,[e("p",null,[G,e("a",j,[J,a(c)]),K])]),z]),H,M,e("div",Q,[X,e("p",null,[Y,a(i,{to:"/en/quickStarted/deployClient.html#%E9%85%8D%E7%BD%AE%E5%AE%A2%E6%88%B7%E7%AB%AF"},{default:l(()=>[Z]),_:1})])]),ee],64)}var ce=t(u,[["render",ne],["__file","deployClient.html.vue"]]);export{ce as default};
