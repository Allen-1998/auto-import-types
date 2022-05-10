import{_ as s,c as a,o as n,a as e}from"./app.2b93ed06.js";const y='{"title":"Basic usage","description":"","frontmatter":{},"headers":[{"level":3,"title":"@types/global.d.ts","slug":"types-global-d-ts"},{"level":3,"title":"@types/api.d.ts","slug":"types-api-d-ts"},{"level":3,"title":"@types/store.d.ts","slug":"types-store-d-ts"},{"level":3,"title":".eslintrc-auto-import-types.json","slug":"eslintrc-auto-import-types-json"}],"relativePath":"basic-usage.md"}',t={},p=e(`<h1 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h1><p>The types declared by.d.ts files do not need to be imported when used, but need to be manually configured in esLint&#39;s global option.Referring to the implementation idea of eslintrc in <a href="https://github.com/antfu/unplugin-auto-import" target="_blank" rel="noopener noreferrer">unplugin-auto-import</a>, it will automatically configure declared types in esLint&#39;s global option.</p><h3 id="types-global-d-ts" tabindex="-1">@types/global.d.ts <a class="header-anchor" href="#types-global-d-ts" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">AnyObj</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="types-api-d-ts" tabindex="-1">@types/api.d.ts <a class="header-anchor" href="#types-api-d-ts" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">declare</span> <span class="token keyword">namespace</span> ApiTest <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">params</span> <span class="token punctuation">{</span>
    a<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">interface</span> <span class="token class-name">data</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="types-store-d-ts" tabindex="-1">@types/store.d.ts <a class="header-anchor" href="#types-store-d-ts" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">declare</span> <span class="token keyword">interface</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  token<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="eslintrc-auto-import-types-json" tabindex="-1">.eslintrc-auto-import-types.json <a class="header-anchor" href="#eslintrc-auto-import-types-json" aria-hidden="true">#</a></h3><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;globals&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ApiTest&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;AnyObj&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Test&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,10),o=[p];function l(c,r,i,u,d,k){return n(),a("div",null,o)}var g=s(t,[["render",l]]);export{y as __pageData,g as default};
