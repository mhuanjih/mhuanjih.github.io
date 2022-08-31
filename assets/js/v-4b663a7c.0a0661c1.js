"use strict";(self.webpackChunkblog_demo=self.webpackChunkblog_demo||[]).push([[14],{6960:(e,l,n)=>{n.r(l),n.d(l,{data:()=>t});const t={key:"v-4b663a7c",path:"/issue/vue.html",title:"Vue",lang:"zh-CN",frontmatter:{date:"2022/1/14 20:37",title:"Vue",tag:["Vue"]},excerpt:"",headers:[{level:2,title:"Missing required prop: “value” 报错的解决办法",slug:"missing-required-prop-value-报错的解决办法",children:[]},{level:2,title:"解决npm ERR! Cannot read properties of null (reading ‘pickAlgorithm‘)报错问题",slug:"解决npm-err-cannot-read-properties-of-null-reading-pickalgorithm-报错问题",children:[]}],git:{updatedTime:null,contributors:[]}}},3622:(e,l,n)=>{n.r(l),n.d(l,{default:()=>s});const t=(0,n(6252).uE)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>记录的是本所遇到的bug</p></div><h2 id="missing-required-prop-value-报错的解决办法" tabindex="-1"><a class="header-anchor" href="#missing-required-prop-value-报错的解决办法" aria-hidden="true">#</a> Missing required prop: “value” 报错的解决办法</h2><h5 id="一-在vue中使用element-ui的el-select组件时出现该报错" tabindex="-1"><a class="header-anchor" href="#一-在vue中使用element-ui的el-select组件时出现该报错" aria-hidden="true">#</a> 一. 在VUE中使用element-ui的el-select组件时出现该报错</h5><p>[Vue warn]: Missing required prop: &quot;value&quot;<br> 1</p><h5 id="二-报错原因" tabindex="-1"><a class="header-anchor" href="#二-报错原因" aria-hidden="true">#</a> 二. 报错原因</h5><p>2.1.el-select中没有进行双向数据绑定（v-model）</p><p>2.2 el-option没有进行value赋值</p><h5 id="三-具体示例" tabindex="-1"><a class="header-anchor" href="#三-具体示例" aria-hidden="true">#</a> 三. 具体示例</h5><p>3.1 报错示例一： el-select中没有进行双向数据绑定，且el-option没有进行value赋值</p><p>代码如下：</p><p>运行结果： （界面初始加载时会报以下错，且在点击el-select与切换el-option时都会继续报错） <img src="https://tuchuang-1313331077.cos.ap-beijing.myqcloud.com/博客/vue/3.png" alt=""></p><p>3.2 报错示例二： el-select中没有进行双向数据绑定，el-option进行了value赋值</p><p>代码如下：</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- &lt;el-form-item label=&quot;获取积分&quot;&gt;\n   &lt;el-select&gt;\n      &lt;el-option label=&quot;请选择...&quot; value=&quot;&quot;&gt;&lt;/el-option&gt;\n      &lt;el-option value=&quot;item.id&quot;&gt;&lt;/el-option&gt;\n    &lt;/el-select&gt;\n &lt;/el-form-item&gt; --&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>运行结果：（界面初始加载时会报以下错，点击el-select与切换el-option时不会再继续报错） <img src="https://tuchuang-1313331077.cos.ap-beijing.myqcloud.com/博客/vue/4.png" alt=""></p><p>3.3 报错示例三： el-select中进行了双向数据绑定，el-option没有进行value赋值</p><p>代码如下：</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- &lt;el-form-item label=&quot;获取积分&quot;&gt;\n   &lt;el-select v-model=&quot;channel&quot;&gt;\n      &lt;el-option label=&quot;请选择...&quot;&gt;&lt;/el-option&gt;\n      &lt;el-option&gt;&lt;/el-option&gt;\n    &lt;/el-select&gt;\n&lt;/el-form-item&gt; --&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>运行结果： （界面初始加载时会报以下错，且在点击el-select与切换el-option时都会继续报错） <img src="https://tuchuang-1313331077.cos.ap-beijing.myqcloud.com/博客/vue/5.png" alt=""></p><h5 id="四-解决办法" tabindex="-1"><a class="header-anchor" href="#四-解决办法" aria-hidden="true">#</a> 四. 解决办法</h5><p>☆ el-select进行双向数据绑定，且每一项el-option进行value赋值 测试代码如下： （没有了上面的报错情况）</p><p>实际编写代码如下： （没有了上面的报错情况）</p><p>补充：若el-select进行了双向数据绑定，且每一项el-option都进行了value赋值，然而还报了这个错，这时需要检查下每一项绑定value的变量是否都在数组中存在。比如上面的例子，就需要检查下channelList数组中每一项是否都有id这个变量。</p><h2 id="解决npm-err-cannot-read-properties-of-null-reading-pickalgorithm-报错问题" tabindex="-1"><a class="header-anchor" href="#解决npm-err-cannot-read-properties-of-null-reading-pickalgorithm-报错问题" aria-hidden="true">#</a> 解决npm ERR! Cannot read properties of null (reading ‘pickAlgorithm‘)报错问题</h2><p>在vue项目中，使用npm i 命令安装node modules时，出现报错： <img src="https://tuchuang-1313331077.cos.ap-beijing.myqcloud.com/博客/vue/1.png" alt=""> 最关键的应该是这一句：</p><p>npm ERR! Cannot read properties of null (reading &#39;pickAlgorithm&#39;) 1 解决方法： 在终端中运行命令： npm cache clear --force</p><p>然后重新运行 npm i 命令，再次安装 安装完成，没有出现报错 npm run serve 运行项目，项目可以正常启动了。 <img src="https://tuchuang-1313331077.cos.ap-beijing.myqcloud.com/博客/vue/2.png" alt=""></p>',27),a={},s=(0,n(3744).Z)(a,[["render",function(e,l){return t}]])}}]);