import{_,r as n,o as s,c as o,a as i,b as r,F as c,e as l,d as e}from"./app.09054c5a.js";const d={},t=l('<h1 id="tca-server" tabindex="-1"><a class="header-anchor" href="#tca-server" aria-hidden="true">#</a> TCA Server</h1><h2 id="\u5DE5\u7A0B\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u7A0B\u7ED3\u6784" aria-hidden="true">#</a> \u5DE5\u7A0B\u7ED3\u6784</h2><p>TCA Server\u7531Main\u3001Analysis\u3001Login\u3001File\u3001ScmProxy\u4E94\u4E2A\u5FAE\u670D\u52A1\u7EC4\u6210\uFF0C\u4E3B\u8981\u6280\u672F\u6808\u4E3ADjango+uwsgi+nginx</p><h2 id="\u914D\u7F6E\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u8BF4\u660E" aria-hidden="true">#</a> \u914D\u7F6E\u8BF4\u660E</h2>',4),S=e("\u6CE8\u610F\uFF1A\u4EE5\u4E0B\u914D\u7F6E\u5185\u5BB9\u53EF\u4EE5\u53C2\u8003 "),E={href:"https://github.com/Faberiii/CodeAnalysis/blob/main/server/scripts/config.sh",target:"_blank",rel:"noopener noreferrer"},I=e("config.sh"),A=e("\u6587\u4EF6\u8FDB\u884C\u67E5\u9605\uFF0C\u4F7F\u7528\u65F6\u4E3B\u8981\u5173\u6CE8 MySQL\u3001Redis \u7684\u914D\u7F6E\uFF0C\u5176\u4ED6\u914D\u7F6E\u5747\u5DF2\u63D0\u4F9B\u9ED8\u8BA4\u503C\uFF0C\u53EF\u4EE5\u6839\u636E\u9700\u8981\u8FDB\u884C\u8C03\u6574"),u=l(`<h3 id="main\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#main\u670D\u52A1" aria-hidden="true">#</a> Main\u670D\u52A1</h3><p>\u6846\u67B6\u914D\u7F6E\uFF1A</p><ul><li>MAIN_DEBUG_MODE: Main\u670D\u52A1\u7684Debug\u6A21\u5F0F\uFF0C<code>true/false</code></li><li>MAIN_SECRET_KEY: Main\u670D\u52A1\u7684Secret Key\u914D\u7F6E\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>from django.core.management.utils import get_random_secret_key;get_random_secret_key()</code>\u65B9\u6CD5\u83B7\u53D6</li></ul><p>Main\u670D\u52A1DB\u914D\u7F6E\uFF1A</p><ul><li>MAIN_DB_NAME\uFF1AMain\u670D\u52A1\u7684\u6570\u636E\u5E93\u540D\u79F0</li><li>MAIN_DB_USER\uFF1AMain\u670D\u52A1\u7684\u6570\u636E\u5E93\u7528\u6237\u540D</li><li>MAIN_DB_PASSWORD\uFF1AMain\u670D\u52A1\u7684\u6570\u636E\u5E93\u5BC6\u7801</li><li>MAIN_DB_HOST\uFF1AMain\u670D\u52A1\u7684\u6570\u636E\u5E93\u5730\u5740</li><li>MAIN_DB_PORT\uFF1AMain\u670D\u52A1\u7684\u6570\u636E\u5E93\u7AEF\u53E3\u53F7</li></ul><p>Main\u670D\u52A1Redis\u914D\u7F6E\uFF1A</p><ul><li>MAIN_REDIS_HOST\uFF1AMain\u670D\u52A1\u8BBF\u95EE\u7684Redis\u5730\u5740</li><li>MAIN_REDIS_PORT\uFF1AMain\u670D\u52A1\u8BBF\u95EE\u7684Redis\u7AEF\u53E3\u53F7</li><li>MAIN_REDIS_PASSWD\uFF1AMain\u670D\u52A1\u8BBF\u95EE\u7684Redis\u5BC6\u7801</li><li>MAIN_REDIS_DBID\uFF1AMain\u670D\u52A1\u8BBF\u95EE\u7684Redis DB\u7F16\u53F7\uFF0C\u9ED8\u8BA4\u4E3A1\uFF08Analysis\u670D\u52A1\u9ED8\u8BA4\u8BBF\u95EE0\u53F7DB\uFF09</li></ul><p>\u670D\u52A1\u4EA4\u4E92\u914D\u7F6E\uFF1A</p><ul><li>MAIN_SENTRY_DSN\uFF1AMain\u670D\u52A1\u5F02\u5E38\u65E5\u5FD7\u4E0A\u62A5\u81F3sentry\u914D\u7F6E</li><li>PASSWORD_KEY\uFF1A\u6570\u636E\u52A0\u5BC6\u5BC6\u94A5</li><li>API_TICKET_SALT\uFF1A\u670D\u52A1\u8BBF\u95EEToken\u52A0\u5BC6\u5BC6\u94A5</li><li>API_TICKET_TOKEN\uFF1A\u670D\u52A1\u8BBF\u95EEToken</li><li>FILE_SERVER_TOKEN\uFF1A\u6587\u4EF6\u670D\u52A1\u5668\u8BBF\u95EEToken</li><li>CODEDOG_TOKEN\uFF1ACodeDog\u9ED8\u8BA4\u8BBF\u95EE\u7684Token</li></ul><h3 id="analysis\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#analysis\u670D\u52A1" aria-hidden="true">#</a> Analysis\u670D\u52A1</h3><p>\u6846\u67B6\u914D\u7F6E\uFF1A</p><ul><li>ANALYSIS_DEBUG_MODE: Analysis\u670D\u52A1\u7684Debug\u6A21\u5F0F\uFF0C<code>true/false</code></li><li>ANALYSIS_SECRET_KEY: Analysis\u670D\u52A1\u7684Secret Key\u914D\u7F6E\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>from django.core.management.utils import get_random_secret_key;get_random_secret_key()</code>\u65B9\u6CD5\u83B7\u53D6</li></ul><p>Analysis\u670D\u52A1DB\u914D\u7F6E\uFF1A</p><ul><li>ANALYSIS_DB_NAME\uFF1AAnalysis\u670D\u52A1\u7684\u6570\u636E\u5E93\u540D\u79F0</li><li>ANALYSIS_DB_USER\uFF1AAnalysis\u670D\u52A1\u7684\u6570\u636E\u5E93\u7528\u6237\u540D</li><li>ANALYSIS_DB_PASSWORD\uFF1AAnalysis\u670D\u52A1\u7684\u6570\u636E\u5E93\u5BC6\u7801</li><li>ANALYSIS_DB_HOST\uFF1AAnalysis\u670D\u52A1\u7684\u6570\u636E\u5E93\u5730\u5740</li><li>ANALYSIS_DB_PORT\uFF1AAnalysis\u670D\u52A1\u7684\u6570\u636E\u5E93\u7AEF\u53E3\u53F7</li></ul><p>Analysis\u670D\u52A1Redis\u914D\u7F6E\uFF1A</p><ul><li>ANALYSIS_REDIS_HOST\uFF1AAnalysis\u670D\u52A1\u8BBF\u95EE\u7684Redis\u5730\u5740</li><li>ANALYSIS_REDIS_PORT\uFF1AAnalysis\u670D\u52A1\u8BBF\u95EE\u7684Redis\u7AEF\u53E3\u53F7</li><li>ANALYSIS_REDIS_PASSWD\uFF1AAnalysis\u670D\u52A1\u8BBF\u95EE\u7684Redis\u5BC6\u7801</li><li>ANALYSIS_REDIS_DBID\uFF1AAnalysis\u670D\u52A1\u8BBF\u95EE\u7684Redis DB\u7F16\u53F7\uFF0C\u9ED8\u8BA4\u4E3A0\uFF08Main\u670D\u52A1\u9ED8\u8BA4\u8BBF\u95EE1\u53F7DB\uFF09</li></ul><p>\u670D\u52A1\u4EA4\u4E92\u914D\u7F6E\uFF1A</p><ul><li>ANALYSIS_SENTRY_DSN\uFF1AAnalysis\u670D\u52A1\u5F02\u5E38\u65E5\u5FD7\u4E0A\u62A5\u81F3sentry\u914D\u7F6E</li><li>PASSWORD_KEY\uFF1A\u6570\u636E\u52A0\u5BC6\u5BC6\u94A5</li><li>API_TICKET_SALT\uFF1A\u670D\u52A1\u8BBF\u95EEToken\u52A0\u5BC6\u5BC6\u94A5</li><li>API_TICKET_TOKEN\uFF1A\u670D\u52A1\u8BBF\u95EEToken</li></ul><h3 id="login\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#login\u670D\u52A1" aria-hidden="true">#</a> Login\u670D\u52A1</h3><p>\u6846\u67B6\u914D\u7F6E\uFF1A</p><ul><li>LOGIN_DEBUG_MODE: Login\u670D\u52A1\u7684Debug\u6A21\u5F0F\uFF0C<code>true/false</code></li><li>LOGIN_SECRET_KEY: Login\u670D\u52A1\u7684Secret Key\u914D\u7F6E\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>from django.core.management.utils import get_random_secret_key;get_random_secret_key()</code>\u65B9\u6CD5\u83B7\u53D6</li></ul><p>Login\u670D\u52A1DB\u914D\u7F6E\uFF1A</p><ul><li>LOGIN_DB_NAME\uFF1ALogin\u670D\u52A1\u7684\u6570\u636E\u5E93\u540D\u79F0</li><li>LOGIN_DB_USER\uFF1ALogin\u670D\u52A1\u7684\u6570\u636E\u5E93\u7528\u6237\u540D</li><li>LOGIN_DB_PASSWORD\uFF1ALogin\u670D\u52A1\u7684\u6570\u636E\u5E93\u5BC6\u7801</li><li>LOGIN_DB_HOST\uFF1ALogin\u670D\u52A1\u7684\u6570\u636E\u5E93\u5730\u5740</li><li>LOGIN_DB_PORT\uFF1ALogin\u670D\u52A1\u7684\u6570\u636E\u5E93\u7AEF\u53E3\u53F7</li></ul><p>\u670D\u52A1\u4EA4\u4E92\u914D\u7F6E\uFF1A</p><ul><li>PASSWORD_KEY\uFF1A\u6570\u636E\u52A0\u5BC6\u5BC6\u94A5</li><li>API_TICKET_SALT\uFF1A\u670D\u52A1\u8BBF\u95EEToken\u52A0\u5BC6\u5BC6\u94A5</li><li>API_TICKET_TOKEN\uFF1A\u670D\u52A1\u8BBF\u95EEToken</li></ul><p>\u6CE8\uFF1A\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684pub_key\u4E0Eprivate_key\u751F\u6210\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003\u4EE5\u4E0B\u65B9\u6CD5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-keygen -t rsa -b 1024 -m PEM -f tca_login.key
$ openssl rsa -in tca_login.key -pubout -outform PEM -out tca_login.key.pub
$ cat tca_login.key  # \u4F5C\u4E3Aprivate_key\u7684\u5185\u5BB9
$ cat tca_login.key.pub  # \u4F5C\u4E3Apub_key\u7684\u5185\u5BB9
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="file\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#file\u670D\u52A1" aria-hidden="true">#</a> File\u670D\u52A1</h3><p>\u6846\u67B6\u914D\u7F6E\uFF1A</p><ul><li>FILE_DEBUG_MODE: File\u670D\u52A1\u7684Debug\u6A21\u5F0F\uFF0C<code>true/false</code></li><li>FILE_SECRET_KEY: File\u670D\u52A1\u7684Secret Key\u914D\u7F6E\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>from django.core.management.utils import get_random_secret_key;get_random_secret_key()</code>\u65B9\u6CD5\u83B7\u53D6</li></ul><p>File\u670D\u52A1DB\u914D\u7F6E\uFF1A</p><ul><li>FILE_DB_NAME\uFF1AFile\u670D\u52A1\u7684\u6570\u636E\u5E93\u540D\u79F0</li><li>FILE_DB_USER\uFF1AFile\u670D\u52A1\u7684\u6570\u636E\u5E93\u7528\u6237\u540D</li><li>FILE_DB_PASSWORD\uFF1AFile\u670D\u52A1\u7684\u6570\u636E\u5E93\u5BC6\u7801</li><li>FILE_DB_HOST\uFF1AFile\u670D\u52A1\u7684\u6570\u636E\u5E93\u5730\u5740</li><li>FILE_DB_PORT\uFF1AFile\u670D\u52A1\u7684\u6570\u636E\u5E93\u7AEF\u53E3\u53F7</li></ul><p>\u670D\u52A1\u4EA4\u4E92\u914D\u7F6E\uFF1A</p><ul><li>FILE_SENTRY_DSN\uFF1AFile\u670D\u52A1\u5F02\u5E38\u65E5\u5FD7\u4E0A\u62A5\u81F3sentry\u914D\u7F6E</li><li>API_TICKET_SALT\uFF1A\u670D\u52A1\u8BBF\u95EEToken\u52A0\u5BC6\u5BC6\u94A5</li><li>API_TICKET_TOKEN\uFF1A\u670D\u52A1\u8BBF\u95EEToken</li></ul><p>File\u5B58\u50A8\u5F15\u64CE\u914D\u7F6E</p><ul><li>FILE_STORAGE_CLIENT: \u6587\u4EF6\u5B58\u50A8\u5F15\u64CE\uFF0C\u53EF\u9009\u9879\uFF1A<code>LOCAL</code>/<code>MINIO</code>/<code>COS</code><ul><li>\u5F53\u914D\u7F6E\u5F15\u64CE\u4E3A<code>LOCAL</code>\uFF0C\u53EF\u4EE5\u6307\u5B9A<code>FILE_STORAGE_DIR</code>\u6587\u4EF6\u5B58\u653E\u7684\u8DEF\u5F84</li><li>\u5F53\u914D\u7F6E\u5F15\u64CE\u4E3A<code>MINIO</code>\uFF0C\u53EF\u4EE5\u6307\u5B9A\u4EE5\u4E0B\u53D8\u91CF\uFF1A <ul><li>FILE_MINIO_ENTRYPOINT\uFF1AMINIO\u670D\u52A1\u5730\u5740</li><li>FILE_MINIO_ACCESS_KEY\uFF1AMINIO\u670D\u52A1\u8BBF\u95EE\u8D26\u53F7</li><li>MINIO_SECRET_KEY\uFF1AMINIO\u670D\u52A1\u8BBF\u95EE\u5BC6\u7801</li></ul></li><li>\u5F53\u914D\u7F6E\u5F15\u64CE\u4E3A<code>COS</code>\uFF0C\u53EF\u4EE5\u6307\u5B9A\u4EE5\u4E0B\u53D8\u91CF <ul><li>TENCENT_COS_APPID</li><li>TENCENT_COS_SECRETID</li><li>TENCENT_COS_SECRETKEY</li><li>TENCENT_COS_REGION</li><li>TENCENT_COS_ROOT_BUCKET\uFF1A\u586B\u5199\u683C\u5F0F\u4E3Abucket-appid</li></ul></li></ul></li></ul><h3 id="scmproxy" tabindex="-1"><a class="header-anchor" href="#scmproxy" aria-hidden="true">#</a> ScmProxy</h3><p>\u670D\u52A1\u914D\u7F6E\uFF1A</p><ul><li>SCMPROXY_HOST\uFF1AScmProxy\u670D\u52A1\u7684HOST\uFF0C\u9ED8\u8BA4\u4E3A<code>0.0.0.0</code></li><li>SCMPROXY_PORT\uFF1AScmProxy\u670D\u52A1\u76D1\u542C\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u4E3A<code>8009</code></li><li>SCMPROXY_SENTRY_URL\uFF1AScmProxy\u670D\u52A1\u5F02\u5E38\u65E5\u5FD7\u4E0A\u62A5\u81F3sentry\u914D\u7F6E</li></ul>`,39);function T(N,p){const a=n("ExternalLinkIcon");return s(),o(c,null,[t,i("p",null,[S,i("a",E,[I,r(a)]),A]),u],64)}var h=_(d,[["render",T],["__file","server.html.vue"]]);export{h as default};
