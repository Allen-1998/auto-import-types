import{_ as n,c as s,o as a,a as t}from"./app.2b93ed06.js";const f='{"title":"Getting started","description":"","frontmatter":{},"headers":[{"level":2,"title":"Install","slug":"install"},{"level":2,"title":"Setup","slug":"setup"},{"level":2,"title":"Config Options","slug":"config-options"}],"relativePath":"index.md"}',p={},o=t(`<h1 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h1><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h2><p><code>npm i auto-import-types</code></p><h2 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> AutoImportTypes <span class="token keyword">from</span> <span class="token string">&#39;auto-import-types&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">AutoImportTypes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// .eslintrc.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.eslintrc-auto-import-types.json&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="config-options" tabindex="-1">Config Options <a class="header-anchor" href="#config-options" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">ESLintGlobalsPropValue</span> <span class="token operator">=</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token string">&#39;readonly&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;readable&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;writable&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;writeable&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">ESLintConfigs</span> <span class="token punctuation">{</span>
  globals<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> ESLintGlobalsPropValue<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Options</span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  dtsDir<span class="token operator">:</span> <span class="token builtin">string</span>
  filepath<span class="token operator">:</span> <span class="token builtin">string</span>
  globalsPropValue<span class="token operator">:</span> ESLintGlobalsPropValue
<span class="token punctuation">}</span><span class="token operator">&gt;</span>

<span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  dtsDir<span class="token operator">:</span> <span class="token string">&#39;src/@types&#39;</span><span class="token punctuation">,</span>
  filepath<span class="token operator">:</span> <span class="token string">&#39;.eslintrc-auto-import-types.json&#39;</span><span class="token punctuation">,</span>
  globalsPropValue<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8),e=[o];function c(l,r,i,u,k,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{f as __pageData,h as default};
