import { _ as __nuxt_component_0$1 } from './nuxt-link-c659c711.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/vue@3.3.6/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/vue@3.3.6/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  data() {
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ id: "navbar" }, _attrs))} data-v-ee2b5da5><ul data-v-ee2b5da5>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li data-v-ee2b5da5${_scopeId}>HackerNuxt</li>`);
      } else {
        return [
          createVNode("li", null, "HackerNuxt")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/New" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li data-v-ee2b5da5${_scopeId}>New</li>`);
      } else {
        return [
          createVNode("li", null, "New")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/ask" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li data-v-ee2b5da5${_scopeId}>Ask Hackers</li>`);
      } else {
        return [
          createVNode("li", null, "Ask Hackers")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li data-v-ee2b5da5${_scopeId}>Best</li>`);
      } else {
        return [
          createVNode("li", null, "Best")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "show" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<li data-v-ee2b5da5${_scopeId}>Show Hackers</li>`);
      } else {
        return [
          createVNode("li", null, "Show Hackers")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</ul></nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ee2b5da5"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Navbar-cb101c2c.mjs.map
