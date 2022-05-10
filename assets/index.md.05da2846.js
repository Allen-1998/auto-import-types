import{_ as n,c as s,o as a,a as t}from"./app.2b93ed06.js";const h='{"title":"Getting started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Install","slug":"install"},{"level":2,"title":"Setup","slug":"setup"},{"level":2,"title":"Config Options","slug":"config-options"}],"relativePath":"index.md"}',p={},o=t(`<h1 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h2><p><code>npm i auto-import-types</code></p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&#39;unplugin-auto-import/vite&#39;</span>
<span class="token keyword">import</span> AutoImportTypes <span class="token keyword">from</span> <span class="token string">&#39;auto-import-types&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      imports<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;pinia&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;@/helper/auto-import-types&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;useStore&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// !important</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">AutoImportTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="config-options" tabindex="-1">Config Options <a class="header-anchor" href="#config-options" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">Options</span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  storeDir<span class="token operator">:</span> <span class="token builtin">string</span>
  excludes<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  outputFile<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span>

<span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  storeDir<span class="token operator">:</span> <span class="token string">&#39;src/store&#39;</span><span class="token punctuation">,</span>
  excludes<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  outputFile<span class="token operator">:</span> <span class="token string">&#39;src/helper/auto-import-types.ts&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7),e=[o];function c(i,l,r,u,k,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{h as __pageData,f as default};