import { _ as __nuxt_component_0 } from './nuxt-link-c659c711.mjs';
import { u as useHead } from './index-6a088328.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/vue@3.3.6/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/vue@3.3.6/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/ufo@1.3.1/node_modules/ufo/dist/index.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/@unhead+shared@1.7.4/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.mjs';
import 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/unhead@1.7.4/node_modules/unhead/dist/index.mjs';
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

const _sfc_main = {
  __name: "error-404",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: Number,
      default: 404
    },
    statusMessage: {
      type: String,
      default: "Not Found"
    },
    description: {
      type: String,
      default: "Sorry, the page you are looking for could not be found."
    },
    backHome: {
      type: String,
      default: "Go back home"
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-f5c0a1bb><div class="fixed left-0 right-0 spotlight z-10" data-v-f5c0a1bb></div><div class="max-w-520px text-center z-20" data-v-f5c0a1bb><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-f5c0a1bb>${ssrInterpolate(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-f5c0a1bb>${ssrInterpolate(__props.description)}</p><div class="w-full flex items-center justify-center" data-v-f5c0a1bb>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.backHome)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.backHome), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-templates@1.3.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f5c0a1bb"]]);

export { error404 as default };
//# sourceMappingURL=error-404-55b2febe.mjs.map
