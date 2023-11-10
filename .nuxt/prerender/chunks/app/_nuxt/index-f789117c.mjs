import { _ as __nuxt_component_0$1 } from './Navbar-cb101c2c.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-c659c711.mjs';
import timestamp from 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/unix-timestamp@1.0.3/node_modules/unix-timestamp/lib/timestamp.js';
import { useSSRContext, withCtx, createVNode, createTextVNode } from 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/vue@3.3.6/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/vue@3.3.6/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/ufo@1.3.1/node_modules/ufo/dist/index.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/unhead@1.7.4/node_modules/unhead/dist/index.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/@unhead+shared@1.7.4/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/vue-router@4.2.5_vue@3.3.6/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/h3@1.8.2/node_modules/h3/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/destr@2.0.1/node_modules/destr/dist/index.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/unenv@1.7.4/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/scule@1.0.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/unstorage@1.9.0/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/unstorage@1.9.0/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/unstorage@1.9.0/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/unstorage@1.9.0/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/unstorage@1.9.0/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/radix3@1.1.0/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/pathe@1.1.1/node_modules/pathe/dist/index.mjs';

const _sfc_main$2 = {
  props: ["id"],
  data() {
    return {
      story: null
    };
  },
  mounted() {
    console.log("hello");
    console.log(this.id);
    fetch(`https://hacker-news.firebaseio.com/v0/item/${this.id}.json?print=pretty`).then((res) => res.json()).then((data) => this.story = data);
  },
  computed: {
    time() {
      const pattern = / GMT\+0800 \(China Standard Time\)$/;
      return timestamp.toDate(this.story.time).toString().replace(pattern, "");
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<!--[-->`);
  if ($data.story) {
    _push(`<div data-v-a041e273><div class="title" data-v-a041e273><a${ssrRenderAttr("href", $data.story.url)} data-v-a041e273>${ssrInterpolate($data.story.title)}</a></div><div class="details" data-v-a041e273>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      style: { "text-decoration": "none" },
      to: `/${$props.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<p data-v-a041e273${_scopeId}><span style="${ssrRenderStyle({ "text-decoration": "underline", "color": "burlywood", "top": "-2px" })}" data-v-a041e273${_scopeId}>Comments</span> \xA0\xA0\xA0\xA0313 Points</p>`);
        } else {
          return [
            createVNode("p", null, [
              createVNode("span", { style: { "text-decoration": "underline", "color": "burlywood", "top": "-2px" } }, "Comments"),
              createTextVNode(" \xA0\xA0\xA0\xA0313 Points")
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<p data-v-a041e273><span data-v-a041e273>${ssrInterpolate($data.story.by)}\xA0\xA0\xA0\xA0\xA0</span><span data-v-a041e273>${ssrInterpolate($options.time)}</span></p></div></div>`);
  } else {
    _push(`<div data-v-a041e273><h1 data-v-a041e273>loading...</h1></div>`);
  }
  _push(`<br data-v-a041e273><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StoryDetail.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-a041e273"]]);
const _sfc_main$1 = {
  props: ["stories"],
  data() {
    return {
      displaystories: null
    };
  },
  mounted() {
    this.displaystories = this.stories.slice(0, 10);
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_StoryDetail = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-ab2fea3d><div class="grid-container" data-v-ab2fea3d><!--[-->`);
  ssrRenderList($data.displaystories, (id) => {
    _push(`<div class="all-story" data-v-ab2fea3d>`);
    _push(ssrRenderComponent(_component_StoryDetail, { id }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllStory.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ab2fea3d"]]);
const _sfc_main = {
  data() {
    return {
      data: null
    };
  },
  mounted() {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty").then((data) => data.json()).then((json) => this.data = json);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Navbar = __nuxt_component_0$1;
  const _component_AllStory = __nuxt_component_1;
  _push(`<!--[--><link rel="preconnect" href="https://rsms.me/"><link rel="stylesheet" href="https://rsms.me/inter/inter.css">`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  if ($data.data) {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_AllStory, { stories: $data.data }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-f789117c.mjs.map
