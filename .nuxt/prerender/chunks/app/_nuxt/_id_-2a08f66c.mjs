import { _ as __nuxt_component_0$1 } from './Navbar-cb101c2c.mjs';
import timestamp from 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/unix-timestamp@1.0.3/node_modules/unix-timestamp/lib/timestamp.js';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderAttrs, ssrRenderStyle, ssrIncludeBooleanAttr } from 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/vue@3.3.6/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext, ref, unref } from 'file:///Users/bre/HackerNewsNuxt/node_modules/.pnpm/vue@3.3.6/node_modules/vue/index.mjs';
import { _ as _export_sfc, u as useRoute } from '../server.mjs';
import './nuxt-link-c659c711.mjs';
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

const _sfc_main$3 = {
  props: ["time"],
  data() {
    return {
      abs_time: null,
      relative_time: null
    };
  },
  mounted() {
    const pattern = / GMT\+0800 \(China Standard Time\)$/;
    this.abs_time = timestamp.toDate(this.time).toString().replace(pattern, "");
  },
  computed: {
    relative_time() {
      var a = { hour: Math.round((parseInt(timestamp.now()) - parseInt(this.time)) / 3600), min: (parseInt(timestamp.now()) - parseInt(this.time)) % 60 };
      return `${a.hour} hours ago`;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><span>${ssrInterpolate($data.abs_time)}</span><span style="${ssrRenderStyle(null)}">\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 ${ssrInterpolate($options.relative_time)}</span></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Time.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  props: ["id"],
  data() {
    return {
      reply: null,
      author: null,
      time: null
    };
  },
  mounted() {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${this.id}.json?print=pretty`).then((res) => res.json()).then((data) => {
      this.reply = data.text;
      this.author = data.by;
      this.time = data.time;
    }).catch((error) => console.log(error));
  },
  computed: {
    postTime() {
      const pattern = / GMT\+0800 \(China Standard Time\)$/;
      return timestamp.toDate(this.time).toString().replace(pattern, "");
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  if ($data.reply) {
    _push(`<div data-v-fa77065d><div class="replay" data-v-fa77065d>${$data.reply}</div><div id="author" data-v-fa77065d> by ${ssrInterpolate($data.author)} \xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0${ssrInterpolate($options.postTime)}</div></div>`);
  } else {
    _push(`<div data-v-fa77065d><div data-v-fa77065d>loading</div></div>`);
  }
  _push(`<br data-v-fa77065d><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/reply.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-fa77065d"]]);
const _sfc_main$1 = {
  props: ["id"],
  data() {
    return {
      comment: null,
      kids: [],
      showReply: true,
      time: null,
      user: null
    };
  },
  methods: {
    toggle() {
      this.showReply = !this.showReply;
      console.log(this.showReply);
    }
  },
  computed: {
    showTime() {
      return { hour: (parseInt(timestamp.now()) - parseInt(this.time)) / 3600, min: (parseInt(timestamp.now()) - parseInt(this.time)) % 60 };
    },
    postTime() {
      const pattern = / GMT\+0800 \(China Standard Time\)$/;
      return timestamp.toDate(this.time).toString().replace(pattern, "");
    }
  },
  mounted() {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${this.id}.json?print=pretty`).then((res) => res.json()).then((res) => {
      this.kids = res.kids || [];
      this.comment = res.text;
      this.time = res.time;
      this.user = res.by;
    }).catch((error) => console.log(error));
  }
  /*
  async mounted() {
      const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${this.id}.json?print=pretty`);
      const data = await res.json();
      this.comment = data.text;
      if(data.kids==undefined){
          console.log(data)
      }
      this.kids = data.kids || [];
  },*/
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_reply = __nuxt_component_0;
  _push(`<!--[--><link rel="preconnect" href="https://rsms.me/" data-v-d16836bd><link rel="stylesheet" href="https://rsms.me/inter/inter.css" data-v-d16836bd><div class="comment" data-v-d16836bd><div id="comment-root" data-v-d16836bd><div class="comment-html" data-v-d16836bd>${$data.comment}</div><div data-v-d16836bd>${ssrInterpolate(Math.round($options.showTime.hour))} hours ${ssrInterpolate($options.showTime.min.toString().slice(0, 2))} mins ago </div><button${ssrIncludeBooleanAttr(!$data.kids.length) ? " hidden" : ""} data-v-d16836bd>show ${ssrInterpolate($data.kids.length)} replies</button><br data-v-d16836bd><br data-v-d16836bd>`);
  if ($data.showReply) {
    _push(`<ol class="grid-container" data-v-d16836bd><!--[-->`);
    ssrRenderList($data.kids, (kid) => {
      _push(`<li class="no-number" data-v-d16836bd>`);
      _push(ssrRenderComponent(_component_reply, { id: kid }, null, _parent));
      _push(`</li>`);
    });
    _push(`<!--]--></ol>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Comments.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d16836bd"]]);
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    console.log(route.params.id);
    const story = ref(null);
    const domain = ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0$1;
      const _component_Time = __nuxt_component_1;
      const _component_Comments = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      if (unref(story)) {
        _push(`<div id="Comments-root" data-v-e07058bb><a class="title"${ssrRenderAttr("href", unref(story).url)} data-v-e07058bb><h3 data-v-e07058bb>${ssrInterpolate(unref(story).title)}</h3></a><div id="time " class="container" data-v-e07058bb><a${ssrRenderAttr("href", unref(story).url)} class="domain" data-v-e07058bb>www.${ssrInterpolate(unref(domain))}</a></div>`);
        _push(ssrRenderComponent(_component_Time, {
          id: "source-time",
          time: unref(story).time
        }, null, _parent));
        _push(`<!--[-->`);
        ssrRenderList(unref(story).kids, (kid) => {
          _push(`<ul data-v-e07058bb><li data-v-e07058bb>`);
          _push(ssrRenderComponent(_component_Comments, { id: kid }, null, _parent));
          _push(`<br data-v-e07058bb></li></ul>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div data-v-e07058bb><h1 data-v-e07058bb>loading...</h1></div>`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e07058bb"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-2a08f66c.mjs.map
