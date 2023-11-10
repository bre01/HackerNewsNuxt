import { _ as __nuxt_component_0$2 } from "./Navbar-cb101c2c.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-c659c711.js";
import timestamp from "unix-timestamp";
import { withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
const StoryDetail_vue_vue_type_style_index_0_scoped_a041e273_lang = "";
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
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<!--[-->`);
  if ($data.story) {
    _push(`<div data-v-a041e273><div class="title" data-v-a041e273><a${ssrRenderAttr("href", $data.story.url)} data-v-a041e273>${ssrInterpolate($data.story.title)}</a></div><div class="details" data-v-a041e273>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      style: { "text-decoration": "none" },
      to: `/${$props.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<p data-v-a041e273${_scopeId}><span style="${ssrRenderStyle({ "text-decoration": "underline", "color": "burlywood", "top": "-2px" })}" data-v-a041e273${_scopeId}>Comments</span>     313 Points</p>`);
        } else {
          return [
            createVNode("p", null, [
              createVNode("span", { style: { "text-decoration": "underline", "color": "burlywood", "top": "-2px" } }, "Comments"),
              createTextVNode("     313 Points")
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<p data-v-a041e273><span data-v-a041e273>${ssrInterpolate($data.story.by)}     </span><span data-v-a041e273>${ssrInterpolate($options.time)}</span></p></div></div>`);
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
const AllStory_vue_vue_type_style_index_0_scoped_ab2fea3d_lang = "";
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
const index_vue_vue_type_style_index_0_lang = "";
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
  const _component_Navbar = __nuxt_component_0$2;
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
export {
  index as default
};
//# sourceMappingURL=index-f789117c.js.map
