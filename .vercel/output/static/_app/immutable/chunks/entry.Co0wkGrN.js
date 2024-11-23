var _a, _b;
import { ae as tick } from "./runtime.BkfDdwap.js";
import { w as writable } from "./index.IFFPp5_U.js";
new URL("sveltekit-internal://");
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore") return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key in params) {
    params[key] = decodeURIComponent(params[key]);
  }
  return params;
}
function strip_hash({ href }) {
  return href.split("#")[0];
}
const tracked_url_properties = (
  /** @type {const} */
  [
    "href",
    "pathname",
    "search",
    "toString",
    "toJSON"
  ]
);
function make_trackable(url, callback, search_params_callback) {
  const tracked = new URL(url);
  Object.defineProperty(tracked, "searchParams", {
    value: new Proxy(tracked.searchParams, {
      get(obj, key) {
        if (key === "get" || key === "getAll" || key === "has") {
          return (param) => {
            search_params_callback(param);
            return obj[key](param);
          };
        }
        callback();
        const value = Reflect.get(obj, key);
        return typeof value === "function" ? value.bind(obj) : value;
      }
    }),
    enumerable: true,
    configurable: true
  });
  for (const property of tracked_url_properties) {
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return url[property];
      },
      enumerable: true,
      configurable: true
    });
  }
  return tracked;
}
const DATA_SUFFIX = "/__data.json";
const HTML_DATA_SUFFIX = ".html__data.json";
function add_data_suffix(pathname) {
  if (pathname.endsWith(".html")) return pathname.replace(/\.html$/, HTML_DATA_SUFFIX);
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i = value.length;
      while (i) hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i = buffer.length;
      while (i) hash2 = hash2 * 33 ^ buffer[--i];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
function b64_decode(text) {
  const d = atob(text);
  const u8 = new Uint8Array(d.length);
  for (let i = 0; i < d.length; i++) {
    u8[i] = d.charCodeAt(i);
  }
  return u8.buffer;
}
const native_fetch = window.fetch;
{
  window.fetch = (input, init) => {
    const method = input instanceof Request ? input.method : (init == null ? void 0 : init.method) || "GET";
    if (method !== "GET") {
      cache.delete(build_selector(input));
    }
    return native_fetch(input, init);
  };
}
const cache = /* @__PURE__ */ new Map();
function initial_fetch(resource, opts) {
  const selector = build_selector(resource, opts);
  const script = document.querySelector(selector);
  if (script == null ? void 0 : script.textContent) {
    let { body, ...init } = JSON.parse(script.textContent);
    const ttl = script.getAttribute("data-ttl");
    if (ttl) cache.set(selector, { body, init, ttl: 1e3 * Number(ttl) });
    const b64 = script.getAttribute("data-b64");
    if (b64 !== null) {
      body = b64_decode(body);
    }
    return Promise.resolve(new Response(body, init));
  }
  return window.fetch(resource, opts);
}
function subsequent_fetch(resource, resolved, opts) {
  if (cache.size > 0) {
    const selector = build_selector(resource, opts);
    const cached = cache.get(selector);
    if (cached) {
      if (performance.now() < cached.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(opts == null ? void 0 : opts.cache)) {
        return new Response(cached.body, cached.init);
      }
      cache.delete(selector);
    }
  }
  return window.fetch(resolved, opts);
}
function build_selector(resource, opts) {
  const url = JSON.stringify(resource instanceof Request ? resource.url : resource);
  let selector = `script[data-sveltekit-fetched][data-url=${url}]`;
  if ((opts == null ? void 0 : opts.headers) || (opts == null ? void 0 : opts.body)) {
    const values = [];
    if (opts.headers) {
      values.push([...new Headers(opts.headers)].join(","));
    }
    if (opts.body && (typeof opts.body === "string" || ArrayBuffer.isView(opts.body))) {
      values.push(opts.body);
    }
    selector += `[data-hash="${hash(...values)}"]`;
  }
  return selector;
}
const param_pattern = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function parse_route_id(id) {
  const params = [];
  const pattern = id === "/" ? /^\/$/ : new RegExp(
    `^${get_route_segments(id).map((segment) => {
      const rest_match = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(segment);
      if (rest_match) {
        params.push({
          name: rest_match[1],
          matcher: rest_match[2],
          optional: false,
          rest: true,
          chained: true
        });
        return "(?:/(.*))?";
      }
      const optional_match = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(segment);
      if (optional_match) {
        params.push({
          name: optional_match[1],
          matcher: optional_match[2],
          optional: true,
          rest: false,
          chained: true
        });
        return "(?:/([^/]+))?";
      }
      if (!segment) {
        return;
      }
      const parts = segment.split(/\[(.+?)\](?!\])/);
      const result = parts.map((content, i) => {
        if (i % 2) {
          if (content.startsWith("x+")) {
            return escape(String.fromCharCode(parseInt(content.slice(2), 16)));
          }
          if (content.startsWith("u+")) {
            return escape(
              String.fromCharCode(
                ...content.slice(2).split("-").map((code) => parseInt(code, 16))
              )
            );
          }
          const match = (
            /** @type {RegExpExecArray} */
            param_pattern.exec(content)
          );
          const [, is_optional, is_rest, name, matcher] = match;
          params.push({
            name,
            matcher,
            optional: !!is_optional,
            rest: !!is_rest,
            chained: is_rest ? i === 1 && parts[0] === "" : false
          });
          return is_rest ? "(.*?)" : is_optional ? "([^/]*)?" : "([^/]+?)";
        }
        return escape(content);
      }).join("");
      return "/" + result;
    }).join("")}/?$`
  );
  return { pattern, params };
}
function affects_path(segment) {
  return !/^\([^)]+\)$/.test(segment);
}
function get_route_segments(route) {
  return route.slice(1).split("/").filter(affects_path);
}
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  const values_needing_match = values.filter((value) => value !== void 0);
  let buffered = 0;
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    let value = values[i - buffered];
    if (param.chained && param.rest && buffered) {
      value = values.slice(i - buffered, i + 1).filter((s) => s).join("/");
      buffered = 0;
    }
    if (value === void 0) {
      if (param.rest) result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i + 1];
      const next_value = values[i + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value && param.chained) {
        buffered = 0;
      }
      if (!next_param && !next_value && Object.keys(result).length === values_needing_match.length) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered) return;
  return result;
}
function escape(str) {
  return str.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&");
}
function parse({ nodes, server_loads, dictionary, matchers }) {
  const layouts_with_server_load = new Set(server_loads);
  return Object.entries(dictionary).map(([id, [leaf, layouts, errors]]) => {
    const { pattern, params } = parse_route_id(id);
    const route = {
      id,
      /** @param {string} path */
      exec: (path) => {
        const match = pattern.exec(path);
        if (match) return exec(match, params, matchers);
      },
      errors: [1, ...errors || []].map((n) => nodes[n]),
      layouts: [0, ...layouts || []].map(create_layout_loader),
      leaf: create_leaf_loader(leaf)
    };
    route.errors.length = route.layouts.length = Math.max(
      route.errors.length,
      route.layouts.length
    );
    return route;
  });
  function create_leaf_loader(id) {
    const uses_server_data = id < 0;
    if (uses_server_data) id = ~id;
    return [uses_server_data, nodes[id]];
  }
  function create_layout_loader(id) {
    return id === void 0 ? id : [layouts_with_server_load.has(id), nodes[id]];
  }
}
function get(key, parse2 = JSON.parse) {
  try {
    return parse2(sessionStorage[key]);
  } catch {
  }
}
function set(key, value, stringify = JSON.stringify) {
  const data = stringify(value);
  try {
    sessionStorage[key] = data;
  } catch {
  }
}
const base = ((_a = globalThis.__sveltekit_1bkfj5r) == null ? void 0 : _a.base) ?? "";
const assets = ((_b = globalThis.__sveltekit_1bkfj5r) == null ? void 0 : _b.assets) ?? base;
const version = "1732345707609";
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
const STATES_KEY = "sveltekit:states";
const PAGE_URL_KEY = "sveltekit:pageurl";
const HISTORY_INDEX = "sveltekit:history";
const NAVIGATION_INDEX = "sveltekit:navigation";
const PRELOAD_PRIORITIES = (
  /** @type {const} */
  {
    tap: 1,
    hover: 2,
    viewport: 3,
    eager: 4,
    off: -1,
    false: -1
  }
);
const origin = location.origin;
function resolve_url(url) {
  if (url instanceof URL) return url;
  let baseURI = document.baseURI;
  if (!baseURI) {
    const baseTags = document.getElementsByTagName("base");
    baseURI = baseTags.length ? baseTags[0].href : document.URL;
  }
  return new URL(url, baseURI);
}
function scroll_state() {
  return {
    x: pageXOffset,
    y: pageYOffset
  };
}
function link_option(element, name) {
  const value = (
    /** @type {ValidLinkOptions<T> | null} */
    element.getAttribute(`data-sveltekit-${name}`)
  );
  return value;
}
const levels = {
  ...PRELOAD_PRIORITIES,
  "": PRELOAD_PRIORITIES.hover
};
function parent_element(element) {
  let parent = element.assignedSlot ?? element.parentNode;
  if ((parent == null ? void 0 : parent.nodeType) === 11) parent = parent.host;
  return (
    /** @type {Element} */
    parent
  );
}
function find_anchor(element, target2) {
  while (element && element !== target2) {
    if (element.nodeName.toUpperCase() === "A" && element.hasAttribute("href")) {
      return (
        /** @type {HTMLAnchorElement | SVGAElement} */
        element
      );
    }
    element = /** @type {Element} */
    parent_element(element);
  }
}
function get_link_info(a, base2) {
  let url;
  try {
    url = new URL(a instanceof SVGAElement ? a.href.baseVal : a.href, document.baseURI);
  } catch {
  }
  const target2 = a instanceof SVGAElement ? a.target.baseVal : a.target;
  const external = !url || !!target2 || is_external_url(url, base2) || (a.getAttribute("rel") || "").split(/\s+/).includes("external");
  const download = (url == null ? void 0 : url.origin) === origin && a.hasAttribute("download");
  return { url, external, target: target2, download };
}
function get_router_options(element) {
  let keepfocus = null;
  let noscroll = null;
  let preload_code = null;
  let preload_data = null;
  let reload = null;
  let replace_state = null;
  let el = element;
  while (el && el !== document.documentElement) {
    if (preload_code === null) preload_code = link_option(el, "preload-code");
    if (preload_data === null) preload_data = link_option(el, "preload-data");
    if (keepfocus === null) keepfocus = link_option(el, "keepfocus");
    if (noscroll === null) noscroll = link_option(el, "noscroll");
    if (reload === null) reload = link_option(el, "reload");
    if (replace_state === null) replace_state = link_option(el, "replacestate");
    el = /** @type {Element} */
    parent_element(el);
  }
  function get_option_state(value) {
    switch (value) {
      case "":
      case "true":
        return true;
      case "off":
      case "false":
        return false;
      default:
        return void 0;
    }
  }
  return {
    preload_code: levels[preload_code ?? "off"],
    preload_data: levels[preload_data ?? "off"],
    keepfocus: get_option_state(keepfocus),
    noscroll: get_option_state(noscroll),
    reload: get_option_state(reload),
    replace_state: get_option_state(replace_state)
  };
}
function notifiable_store(value) {
  const store = writable(value);
  let ready = true;
  function notify() {
    ready = true;
    store.update((val) => val);
  }
  function set2(new_value) {
    ready = false;
    store.set(new_value);
  }
  function subscribe(run) {
    let old_value;
    return store.subscribe((new_value) => {
      if (old_value === void 0 || ready && new_value !== old_value) {
        run(old_value = new_value);
      }
    });
  }
  return { notify, set: set2, subscribe };
}
function create_updated_store() {
  const { set: set2, subscribe } = writable(false);
  let timeout;
  async function check() {
    clearTimeout(timeout);
    try {
      const res = await fetch(`${assets}/${"_app/version.json"}`, {
        headers: {
          pragma: "no-cache",
          "cache-control": "no-cache"
        }
      });
      if (!res.ok) {
        return false;
      }
      const data = await res.json();
      const updated = data.version !== version;
      if (updated) {
        set2(true);
        clearTimeout(timeout);
      }
      return updated;
    } catch {
      return false;
    }
  }
  return {
    subscribe,
    check
  };
}
function is_external_url(url, base2) {
  return url.origin !== origin || !url.pathname.startsWith(base2);
}
function decode64(string) {
  const binaryString = asciiToBinary(string);
  const arraybuffer = new ArrayBuffer(binaryString.length);
  const dv = new DataView(arraybuffer);
  for (let i = 0; i < arraybuffer.byteLength; i++) {
    dv.setUint8(i, binaryString.charCodeAt(i));
  }
  return arraybuffer;
}
const KEY_STRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function asciiToBinary(data) {
  if (data.length % 4 === 0) {
    data = data.replace(/==?$/, "");
  }
  let output = "";
  let buffer = 0;
  let accumulatedBits = 0;
  for (let i = 0; i < data.length; i++) {
    buffer <<= 6;
    buffer |= KEY_STRING.indexOf(data[i]);
    accumulatedBits += 6;
    if (accumulatedBits === 24) {
      output += String.fromCharCode((buffer & 16711680) >> 16);
      output += String.fromCharCode((buffer & 65280) >> 8);
      output += String.fromCharCode(buffer & 255);
      buffer = accumulatedBits = 0;
    }
  }
  if (accumulatedBits === 12) {
    buffer >>= 4;
    output += String.fromCharCode(buffer);
  } else if (accumulatedBits === 18) {
    buffer >>= 2;
    output += String.fromCharCode((buffer & 65280) >> 8);
    output += String.fromCharCode(buffer & 255);
  }
  return output;
}
const UNDEFINED = -1;
const HOLE = -2;
const NAN = -3;
const POSITIVE_INFINITY = -4;
const NEGATIVE_INFINITY = -5;
const NEGATIVE_ZERO = -6;
function unflatten(parsed, revivers) {
  if (typeof parsed === "number") return hydrate(parsed, true);
  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new Error("Invalid input");
  }
  const values = (
    /** @type {any[]} */
    parsed
  );
  const hydrated2 = Array(values.length);
  function hydrate(index, standalone = false) {
    if (index === UNDEFINED) return void 0;
    if (index === NAN) return NaN;
    if (index === POSITIVE_INFINITY) return Infinity;
    if (index === NEGATIVE_INFINITY) return -Infinity;
    if (index === NEGATIVE_ZERO) return -0;
    if (standalone) throw new Error(`Invalid input`);
    if (index in hydrated2) return hydrated2[index];
    const value = values[index];
    if (!value || typeof value !== "object") {
      hydrated2[index] = value;
    } else if (Array.isArray(value)) {
      if (typeof value[0] === "string") {
        const type = value[0];
        const reviver = revivers == null ? void 0 : revivers[type];
        if (reviver) {
          return hydrated2[index] = reviver(hydrate(value[1]));
        }
        switch (type) {
          case "Date":
            hydrated2[index] = new Date(value[1]);
            break;
          case "Set":
            const set2 = /* @__PURE__ */ new Set();
            hydrated2[index] = set2;
            for (let i = 1; i < value.length; i += 1) {
              set2.add(hydrate(value[i]));
            }
            break;
          case "Map":
            const map = /* @__PURE__ */ new Map();
            hydrated2[index] = map;
            for (let i = 1; i < value.length; i += 2) {
              map.set(hydrate(value[i]), hydrate(value[i + 1]));
            }
            break;
          case "RegExp":
            hydrated2[index] = new RegExp(value[1], value[2]);
            break;
          case "Object":
            hydrated2[index] = Object(value[1]);
            break;
          case "BigInt":
            hydrated2[index] = BigInt(value[1]);
            break;
          case "null":
            const obj = /* @__PURE__ */ Object.create(null);
            hydrated2[index] = obj;
            for (let i = 1; i < value.length; i += 2) {
              obj[value[i]] = hydrate(value[i + 1]);
            }
            break;
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array": {
            const TypedArrayConstructor = globalThis[type];
            const base64 = value[1];
            const arraybuffer = decode64(base64);
            const typedArray = new TypedArrayConstructor(arraybuffer);
            hydrated2[index] = typedArray;
            break;
          }
          case "ArrayBuffer": {
            const base64 = value[1];
            const arraybuffer = decode64(base64);
            hydrated2[index] = arraybuffer;
            break;
          }
          default:
            throw new Error(`Unknown type ${type}`);
        }
      } else {
        const array = new Array(value.length);
        hydrated2[index] = array;
        for (let i = 0; i < value.length; i += 1) {
          const n = value[i];
          if (n === HOLE) continue;
          array[i] = hydrate(n);
        }
      }
    } else {
      const object = {};
      hydrated2[index] = object;
      for (const key in value) {
        const n = value[key];
        object[key] = hydrate(n);
      }
    }
    return hydrated2[index];
  }
  return hydrate(0);
}
const valid_layout_exports = /* @__PURE__ */ new Set([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config"
]);
/* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
const valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports]);
/* @__PURE__ */ new Set([...valid_layout_server_exports, "actions", "entries"]);
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
class HttpError {
  /**
   * @param {number} status
   * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
   */
  constructor(status, body) {
    this.status = status;
    if (typeof body === "string") {
      this.body = { message: body };
    } else if (body) {
      this.body = body;
    } else {
      this.body = { message: `Error: ${status}` };
    }
  }
  toString() {
    return JSON.stringify(this.body);
  }
}
class Redirect {
  /**
   * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
   * @param {string} location
   */
  constructor(status, location2) {
    this.status = status;
    this.location = location2;
  }
}
class SvelteKitError extends Error {
  /**
   * @param {number} status
   * @param {string} text
   * @param {string} message
   */
  constructor(status, text, message) {
    super(message);
    this.status = status;
    this.text = text;
  }
}
const INVALIDATED_PARAM = "x-sveltekit-invalidated";
const TRAILING_SLASH_PARAM = "x-sveltekit-trailing-slash";
function get_status(error) {
  return error instanceof HttpError || error instanceof SvelteKitError ? error.status : 500;
}
function get_message(error) {
  return error instanceof SvelteKitError ? error.text : "Internal Error";
}
const scroll_positions = get(SCROLL_KEY) ?? {};
const snapshots = get(SNAPSHOT_KEY) ?? {};
const stores = {
  url: /* @__PURE__ */ notifiable_store({}),
  page: /* @__PURE__ */ notifiable_store({}),
  navigating: /* @__PURE__ */ writable(
    /** @type {import('@sveltejs/kit').Navigation | null} */
    null
  ),
  updated: /* @__PURE__ */ create_updated_store()
};
function update_scroll_positions(index) {
  scroll_positions[index] = scroll_state();
}
function clear_onward_history(current_history_index2, current_navigation_index2) {
  let i = current_history_index2 + 1;
  while (scroll_positions[i]) {
    delete scroll_positions[i];
    i += 1;
  }
  i = current_navigation_index2 + 1;
  while (snapshots[i]) {
    delete snapshots[i];
    i += 1;
  }
}
function native_navigation(url) {
  location.href = url.href;
  return new Promise(() => {
  });
}
async function update_service_worker() {
  if ("serviceWorker" in navigator) {
    const registration = await navigator.serviceWorker.getRegistration(base || "/");
    if (registration) {
      await registration.update();
    }
  }
}
function noop() {
}
let routes;
let default_layout_loader;
let default_error_loader;
let container;
let target;
let app;
const invalidated = [];
const components = [];
let load_cache = null;
const before_navigate_callbacks = [];
const on_navigate_callbacks = [];
let after_navigate_callbacks = [];
let current = {
  branch: [],
  error: null,
  // @ts-ignore - we need the initial value to be null
  url: null
};
let hydrated = false;
let started = false;
let autoscroll = true;
let navigating = false;
let hash_navigating = false;
let has_navigated = false;
let force_invalidation = false;
let root;
let current_history_index;
let current_navigation_index;
let page;
let token;
const preload_tokens = /* @__PURE__ */ new Set();
async function start(_app, _target, hydrate) {
  var _a2, _b2;
  if (document.URL !== location.href) {
    location.href = location.href;
  }
  app = _app;
  routes = parse(_app);
  container = document.documentElement;
  target = _target;
  default_layout_loader = _app.nodes[0];
  default_error_loader = _app.nodes[1];
  default_layout_loader();
  default_error_loader();
  current_history_index = (_a2 = history.state) == null ? void 0 : _a2[HISTORY_INDEX];
  current_navigation_index = (_b2 = history.state) == null ? void 0 : _b2[NAVIGATION_INDEX];
  if (!current_history_index) {
    current_history_index = current_navigation_index = Date.now();
    history.replaceState(
      {
        ...history.state,
        [HISTORY_INDEX]: current_history_index,
        [NAVIGATION_INDEX]: current_navigation_index
      },
      ""
    );
  }
  const scroll = scroll_positions[current_history_index];
  if (scroll) {
    history.scrollRestoration = "manual";
    scrollTo(scroll.x, scroll.y);
  }
  if (hydrate) {
    await _hydrate(target, hydrate);
  } else {
    goto(location.href, { replaceState: true });
  }
  _start_router();
}
function reset_invalidation() {
  invalidated.length = 0;
  force_invalidation = false;
}
function capture_snapshot(index) {
  if (components.some((c) => c == null ? void 0 : c.snapshot)) {
    snapshots[index] = components.map((c) => {
      var _a2;
      return (_a2 = c == null ? void 0 : c.snapshot) == null ? void 0 : _a2.capture();
    });
  }
}
function restore_snapshot(index) {
  var _a2;
  (_a2 = snapshots[index]) == null ? void 0 : _a2.forEach((value, i) => {
    var _a3, _b2;
    (_b2 = (_a3 = components[i]) == null ? void 0 : _a3.snapshot) == null ? void 0 : _b2.restore(value);
  });
}
function persist_state() {
  update_scroll_positions(current_history_index);
  set(SCROLL_KEY, scroll_positions);
  capture_snapshot(current_navigation_index);
  set(SNAPSHOT_KEY, snapshots);
}
async function _goto(url, options, redirect_count, nav_token) {
  return navigate({
    type: "goto",
    url: resolve_url(url),
    keepfocus: options.keepFocus,
    noscroll: options.noScroll,
    replace_state: options.replaceState,
    state: options.state,
    redirect_count,
    nav_token,
    accept: () => {
      if (options.invalidateAll) {
        force_invalidation = true;
      }
    }
  });
}
async function _preload_data(intent) {
  if (intent.id !== (load_cache == null ? void 0 : load_cache.id)) {
    const preload = {};
    preload_tokens.add(preload);
    load_cache = {
      id: intent.id,
      token: preload,
      promise: load_route({ ...intent, preload }).then((result) => {
        preload_tokens.delete(preload);
        if (result.type === "loaded" && result.state.error) {
          load_cache = null;
        }
        return result;
      })
    };
  }
  return load_cache.promise;
}
async function _preload_code(pathname) {
  const route = routes.find((route2) => route2.exec(get_url_path(pathname)));
  if (route) {
    await Promise.all([...route.layouts, route.leaf].map((load) => load == null ? void 0 : load[1]()));
  }
}
function initialize(result, target2, hydrate) {
  var _a2;
  current = result.state;
  const style = document.querySelector("style[data-sveltekit]");
  if (style) style.remove();
  page = /** @type {import('@sveltejs/kit').Page} */
  result.props.page;
  root = new app.root({
    target: target2,
    props: { ...result.props, stores, components },
    hydrate,
    // @ts-ignore Svelte 5 specific: asynchronously instantiate the component, i.e. don't call flushSync
    sync: false
  });
  restore_snapshot(current_navigation_index);
  const navigation = {
    from: null,
    to: {
      params: current.params,
      route: { id: ((_a2 = current.route) == null ? void 0 : _a2.id) ?? null },
      url: new URL(location.href)
    },
    willUnload: false,
    type: "enter",
    complete: Promise.resolve()
  };
  after_navigate_callbacks.forEach((fn) => fn(navigation));
  started = true;
}
function get_navigation_result_from_branch({ url, params, branch, status, error, route, form }) {
  let slash = "never";
  if (base && (url.pathname === base || url.pathname === base + "/")) {
    slash = "always";
  } else {
    for (const node of branch) {
      if ((node == null ? void 0 : node.slash) !== void 0) slash = node.slash;
    }
  }
  url.pathname = normalize_path(url.pathname, slash);
  url.search = url.search;
  const result = {
    type: "loaded",
    state: {
      url,
      params,
      branch,
      error,
      route
    },
    props: {
      // @ts-ignore Somehow it's getting SvelteComponent and SvelteComponentDev mixed up
      constructors: compact(branch).map((branch_node) => branch_node.node.component),
      page
    }
  };
  if (form !== void 0) {
    result.props.form = form;
  }
  let data = {};
  let data_changed = !page;
  let p = 0;
  for (let i = 0; i < Math.max(branch.length, current.branch.length); i += 1) {
    const node = branch[i];
    const prev = current.branch[i];
    if ((node == null ? void 0 : node.data) !== (prev == null ? void 0 : prev.data)) data_changed = true;
    if (!node) continue;
    data = { ...data, ...node.data };
    if (data_changed) {
      result.props[`data_${p}`] = data;
    }
    p += 1;
  }
  const page_changed = !current.url || url.href !== current.url.href || current.error !== error || form !== void 0 && form !== page.form || data_changed;
  if (page_changed) {
    result.props.page = {
      error,
      params,
      route: {
        id: (route == null ? void 0 : route.id) ?? null
      },
      state: {},
      status,
      url: new URL(url),
      form: form ?? null,
      // The whole page store is updated, but this way the object reference stays the same
      data: data_changed ? data : page.data
    };
  }
  return result;
}
async function load_node({ loader, parent, url, params, route, server_data_node }) {
  var _a2, _b2, _c;
  let data = null;
  let is_tracking = true;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false,
    search_params: /* @__PURE__ */ new Set()
  };
  const node = await loader();
  if ((_a2 = node.universal) == null ? void 0 : _a2.load) {
    let depends = function(...deps) {
      for (const dep of deps) {
        const { href } = new URL(dep, url);
        uses.dependencies.add(href);
      }
    };
    const load_input = {
      route: new Proxy(route, {
        get: (target2, key) => {
          if (is_tracking) {
            uses.route = true;
          }
          return target2[
            /** @type {'id'} */
            key
          ];
        }
      }),
      params: new Proxy(params, {
        get: (target2, key) => {
          if (is_tracking) {
            uses.params.add(
              /** @type {string} */
              key
            );
          }
          return target2[
            /** @type {string} */
            key
          ];
        }
      }),
      data: (server_data_node == null ? void 0 : server_data_node.data) ?? null,
      url: make_trackable(
        url,
        () => {
          if (is_tracking) {
            uses.url = true;
          }
        },
        (param) => {
          if (is_tracking) {
            uses.search_params.add(param);
          }
        }
      ),
      async fetch(resource, init) {
        let requested;
        if (resource instanceof Request) {
          requested = resource.url;
          init = {
            // the request body must be consumed in memory until browsers
            // implement streaming request bodies and/or the body getter
            body: resource.method === "GET" || resource.method === "HEAD" ? void 0 : await resource.blob(),
            cache: resource.cache,
            credentials: resource.credentials,
            // the headers are undefined on the server if the Headers object is empty
            // so we need to make sure they are also undefined here if there are no headers
            headers: [...resource.headers].length ? resource.headers : void 0,
            integrity: resource.integrity,
            keepalive: resource.keepalive,
            method: resource.method,
            mode: resource.mode,
            redirect: resource.redirect,
            referrer: resource.referrer,
            referrerPolicy: resource.referrerPolicy,
            signal: resource.signal,
            ...init
          };
        } else {
          requested = resource;
        }
        const resolved = new URL(requested, url);
        if (is_tracking) {
          depends(resolved.href);
        }
        if (resolved.origin === url.origin) {
          requested = resolved.href.slice(url.origin.length);
        }
        return started ? subsequent_fetch(requested, resolved.href, init) : initial_fetch(requested, init);
      },
      setHeaders: () => {
      },
      // noop
      depends,
      parent() {
        if (is_tracking) {
          uses.parent = true;
        }
        return parent();
      },
      untrack(fn) {
        is_tracking = false;
        try {
          return fn();
        } finally {
          is_tracking = true;
        }
      }
    };
    {
      data = await node.universal.load.call(null, load_input) ?? null;
    }
  }
  return {
    node,
    loader,
    server: server_data_node,
    universal: ((_b2 = node.universal) == null ? void 0 : _b2.load) ? { type: "data", data, uses } : null,
    data: data ?? (server_data_node == null ? void 0 : server_data_node.data) ?? null,
    slash: ((_c = node.universal) == null ? void 0 : _c.trailingSlash) ?? (server_data_node == null ? void 0 : server_data_node.slash)
  };
}
function has_changed(parent_changed, route_changed, url_changed, search_params_changed, uses, params) {
  if (force_invalidation) return true;
  if (!uses) return false;
  if (uses.parent && parent_changed) return true;
  if (uses.route && route_changed) return true;
  if (uses.url && url_changed) return true;
  for (const tracked_params of uses.search_params) {
    if (search_params_changed.has(tracked_params)) return true;
  }
  for (const param of uses.params) {
    if (params[param] !== current.params[param]) return true;
  }
  for (const href of uses.dependencies) {
    if (invalidated.some((fn) => fn(new URL(href)))) return true;
  }
  return false;
}
function create_data_node(node, previous) {
  if ((node == null ? void 0 : node.type) === "data") return node;
  if ((node == null ? void 0 : node.type) === "skip") return previous ?? null;
  return null;
}
function diff_search_params(old_url, new_url) {
  if (!old_url) return new Set(new_url.searchParams.keys());
  const changed = /* @__PURE__ */ new Set([...old_url.searchParams.keys(), ...new_url.searchParams.keys()]);
  for (const key of changed) {
    const old_values = old_url.searchParams.getAll(key);
    const new_values = new_url.searchParams.getAll(key);
    if (old_values.every((value) => new_values.includes(value)) && new_values.every((value) => old_values.includes(value))) {
      changed.delete(key);
    }
  }
  return changed;
}
function preload_error({ error, url, route, params }) {
  return {
    type: "loaded",
    state: {
      error,
      url,
      route,
      params,
      branch: []
    },
    props: { page, constructors: [] }
  };
}
async function load_route({ id, invalidating, url, params, route, preload }) {
  if ((load_cache == null ? void 0 : load_cache.id) === id) {
    preload_tokens.delete(load_cache.token);
    return load_cache.promise;
  }
  const { errors, layouts, leaf } = route;
  const loaders = [...layouts, leaf];
  errors.forEach((loader) => loader == null ? void 0 : loader().catch(() => {
  }));
  loaders.forEach((loader) => loader == null ? void 0 : loader[1]().catch(() => {
  }));
  let server_data = null;
  const url_changed = current.url ? id !== current.url.pathname + current.url.search : false;
  const route_changed = current.route ? route.id !== current.route.id : false;
  const search_params_changed = diff_search_params(current.url, url);
  let parent_invalid = false;
  const invalid_server_nodes = loaders.map((loader, i) => {
    var _a2;
    const previous = current.branch[i];
    const invalid = !!(loader == null ? void 0 : loader[0]) && ((previous == null ? void 0 : previous.loader) !== loader[1] || has_changed(
      parent_invalid,
      route_changed,
      url_changed,
      search_params_changed,
      (_a2 = previous.server) == null ? void 0 : _a2.uses,
      params
    ));
    if (invalid) {
      parent_invalid = true;
    }
    return invalid;
  });
  if (invalid_server_nodes.some(Boolean)) {
    try {
      server_data = await load_data(url, invalid_server_nodes);
    } catch (error) {
      const handled_error = await handle_error(error, { url, params, route: { id } });
      if (preload_tokens.has(preload)) {
        return preload_error({ error: handled_error, url, params, route });
      }
      return load_root_error_page({
        status: get_status(error),
        error: handled_error,
        url,
        route
      });
    }
    if (server_data.type === "redirect") {
      return server_data;
    }
  }
  const server_data_nodes = server_data == null ? void 0 : server_data.nodes;
  let parent_changed = false;
  const branch_promises = loaders.map(async (loader, i) => {
    var _a2;
    if (!loader) return;
    const previous = current.branch[i];
    const server_data_node = server_data_nodes == null ? void 0 : server_data_nodes[i];
    const valid = (!server_data_node || server_data_node.type === "skip") && loader[1] === (previous == null ? void 0 : previous.loader) && !has_changed(
      parent_changed,
      route_changed,
      url_changed,
      search_params_changed,
      (_a2 = previous.universal) == null ? void 0 : _a2.uses,
      params
    );
    if (valid) return previous;
    parent_changed = true;
    if ((server_data_node == null ? void 0 : server_data_node.type) === "error") {
      throw server_data_node;
    }
    return load_node({
      loader: loader[1],
      url,
      params,
      route,
      parent: async () => {
        var _a3;
        const data = {};
        for (let j = 0; j < i; j += 1) {
          Object.assign(data, (_a3 = await branch_promises[j]) == null ? void 0 : _a3.data);
        }
        return data;
      },
      server_data_node: create_data_node(
        // server_data_node is undefined if it wasn't reloaded from the server;
        // and if current loader uses server data, we want to reuse previous data.
        server_data_node === void 0 && loader[0] ? { type: "skip" } : server_data_node ?? null,
        loader[0] ? previous == null ? void 0 : previous.server : void 0
      )
    });
  });
  for (const p of branch_promises) p.catch(() => {
  });
  const branch = [];
  for (let i = 0; i < loaders.length; i += 1) {
    if (loaders[i]) {
      try {
        branch.push(await branch_promises[i]);
      } catch (err) {
        if (err instanceof Redirect) {
          return {
            type: "redirect",
            location: err.location
          };
        }
        if (preload_tokens.has(preload)) {
          return preload_error({
            error: await handle_error(err, { params, url, route: { id: route.id } }),
            url,
            params,
            route
          });
        }
        let status = get_status(err);
        let error;
        if (server_data_nodes == null ? void 0 : server_data_nodes.includes(
          /** @type {import('types').ServerErrorNode} */
          err
        )) {
          status = /** @type {import('types').ServerErrorNode} */
          err.status ?? status;
          error = /** @type {import('types').ServerErrorNode} */
          err.error;
        } else if (err instanceof HttpError) {
          error = err.body;
        } else {
          const updated = await stores.updated.check();
          if (updated) {
            await update_service_worker();
            return await native_navigation(url);
          }
          error = await handle_error(err, { params, url, route: { id: route.id } });
        }
        const error_load = await load_nearest_error_page(i, branch, errors);
        if (error_load) {
          return get_navigation_result_from_branch({
            url,
            params,
            branch: branch.slice(0, error_load.idx).concat(error_load.node),
            status,
            error,
            route
          });
        } else {
          return await server_fallback(url, { id: route.id }, error, status);
        }
      }
    } else {
      branch.push(void 0);
    }
  }
  return get_navigation_result_from_branch({
    url,
    params,
    branch,
    status: 200,
    error: null,
    route,
    // Reset `form` on navigation, but not invalidation
    form: invalidating ? void 0 : null
  });
}
async function load_nearest_error_page(i, branch, errors) {
  while (i--) {
    if (errors[i]) {
      let j = i;
      while (!branch[j]) j -= 1;
      try {
        return {
          idx: j + 1,
          node: {
            node: await /** @type {import('types').CSRPageNodeLoader } */
            errors[i](),
            loader: (
              /** @type {import('types').CSRPageNodeLoader } */
              errors[i]
            ),
            data: {},
            server: null,
            universal: null
          }
        };
      } catch {
        continue;
      }
    }
  }
}
async function load_root_error_page({ status, error, url, route }) {
  const params = {};
  let server_data_node = null;
  const default_layout_has_server_load = app.server_loads[0] === 0;
  if (default_layout_has_server_load) {
    try {
      const server_data = await load_data(url, [true]);
      if (server_data.type !== "data" || server_data.nodes[0] && server_data.nodes[0].type !== "data") {
        throw 0;
      }
      server_data_node = server_data.nodes[0] ?? null;
    } catch {
      if (url.origin !== origin || url.pathname !== location.pathname || hydrated) {
        await native_navigation(url);
      }
    }
  }
  const root_layout = await load_node({
    loader: default_layout_loader,
    url,
    params,
    route,
    parent: () => Promise.resolve({}),
    server_data_node: create_data_node(server_data_node)
  });
  const root_error = {
    node: await default_error_loader(),
    loader: default_error_loader,
    universal: null,
    server: null,
    data: null
  };
  return get_navigation_result_from_branch({
    url,
    params,
    branch: [root_layout, root_error],
    status,
    error,
    route: null
  });
}
function get_navigation_intent(url, invalidating) {
  if (!url) return void 0;
  if (is_external_url(url, base)) return;
  let rerouted;
  try {
    rerouted = app.hooks.reroute({ url: new URL(url) }) ?? url.pathname;
  } catch (e) {
    return void 0;
  }
  const path = get_url_path(rerouted);
  for (const route of routes) {
    const params = route.exec(path);
    if (params) {
      const id = url.pathname + url.search;
      const intent = {
        id,
        invalidating,
        route,
        params: decode_params(params),
        url
      };
      return intent;
    }
  }
}
function get_url_path(pathname) {
  return decode_pathname(pathname.slice(base.length) || "/");
}
function _before_navigate({ url, type, intent, delta }) {
  let should_block = false;
  const nav = create_navigation(current, intent, url, type);
  if (delta !== void 0) {
    nav.navigation.delta = delta;
  }
  const cancellable = {
    ...nav.navigation,
    cancel: () => {
      should_block = true;
      nav.reject(new Error("navigation cancelled"));
    }
  };
  if (!navigating) {
    before_navigate_callbacks.forEach((fn) => fn(cancellable));
  }
  return should_block ? null : nav;
}
async function navigate({
  type,
  url,
  popped,
  keepfocus,
  noscroll,
  replace_state,
  state = {},
  redirect_count = 0,
  nav_token = {},
  accept = noop,
  block = noop
}) {
  const intent = get_navigation_intent(url, false);
  const nav = _before_navigate({ url, type, delta: popped == null ? void 0 : popped.delta, intent });
  if (!nav) {
    block();
    return;
  }
  const previous_history_index = current_history_index;
  const previous_navigation_index = current_navigation_index;
  accept();
  navigating = true;
  if (started) {
    stores.navigating.set(nav.navigation);
  }
  token = nav_token;
  let navigation_result = intent && await load_route(intent);
  if (!navigation_result) {
    if (is_external_url(url, base)) {
      return await native_navigation(url);
    }
    navigation_result = await server_fallback(
      url,
      { id: null },
      await handle_error(new SvelteKitError(404, "Not Found", `Not found: ${url.pathname}`), {
        url,
        params: {},
        route: { id: null }
      }),
      404
    );
  }
  url = (intent == null ? void 0 : intent.url) || url;
  if (token !== nav_token) {
    nav.reject(new Error("navigation aborted"));
    return false;
  }
  if (navigation_result.type === "redirect") {
    if (redirect_count >= 20) {
      navigation_result = await load_root_error_page({
        status: 500,
        error: await handle_error(new Error("Redirect loop"), {
          url,
          params: {},
          route: { id: null }
        }),
        url,
        route: { id: null }
      });
    } else {
      _goto(new URL(navigation_result.location, url).href, {}, redirect_count + 1, nav_token);
      return false;
    }
  } else if (
    /** @type {number} */
    navigation_result.props.page.status >= 400
  ) {
    const updated = await stores.updated.check();
    if (updated) {
      await update_service_worker();
      await native_navigation(url);
    }
  }
  reset_invalidation();
  update_scroll_positions(previous_history_index);
  capture_snapshot(previous_navigation_index);
  if (navigation_result.props.page.url.pathname !== url.pathname) {
    url.pathname = navigation_result.props.page.url.pathname;
  }
  state = popped ? popped.state : state;
  if (!popped) {
    const change = replace_state ? 0 : 1;
    const entry = {
      [HISTORY_INDEX]: current_history_index += change,
      [NAVIGATION_INDEX]: current_navigation_index += change,
      [STATES_KEY]: state
    };
    const fn = replace_state ? history.replaceState : history.pushState;
    fn.call(history, entry, "", url);
    if (!replace_state) {
      clear_onward_history(current_history_index, current_navigation_index);
    }
  }
  load_cache = null;
  navigation_result.props.page.state = state;
  if (started) {
    current = navigation_result.state;
    if (navigation_result.props.page) {
      navigation_result.props.page.url = url;
    }
    const after_navigate = (await Promise.all(
      on_navigate_callbacks.map(
        (fn) => fn(
          /** @type {import('@sveltejs/kit').OnNavigate} */
          nav.navigation
        )
      )
    )).filter(
      /** @returns {value is () => void} */
      (value) => typeof value === "function"
    );
    if (after_navigate.length > 0) {
      let cleanup = function() {
        after_navigate_callbacks = after_navigate_callbacks.filter(
          // @ts-ignore
          (fn) => !after_navigate.includes(fn)
        );
      };
      after_navigate.push(cleanup);
      after_navigate_callbacks.push(...after_navigate);
    }
    root.$set(navigation_result.props);
    has_navigated = true;
  } else {
    initialize(navigation_result, target, false);
  }
  const { activeElement } = document;
  await tick();
  const scroll = popped ? popped.scroll : noscroll ? scroll_state() : null;
  if (autoscroll) {
    const deep_linked = url.hash && document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (scroll) {
      scrollTo(scroll.x, scroll.y);
    } else if (deep_linked) {
      deep_linked.scrollIntoView();
    } else {
      scrollTo(0, 0);
    }
  }
  const changed_focus = (
    // reset focus only if any manual focus management didn't override it
    document.activeElement !== activeElement && // also refocus when activeElement is body already because the
    // focus event might not have been fired on it yet
    document.activeElement !== document.body
  );
  if (!keepfocus && !changed_focus) {
    reset_focus();
  }
  autoscroll = true;
  if (navigation_result.props.page) {
    page = navigation_result.props.page;
  }
  navigating = false;
  if (type === "popstate") {
    restore_snapshot(current_navigation_index);
  }
  nav.fulfil(void 0);
  after_navigate_callbacks.forEach(
    (fn) => fn(
      /** @type {import('@sveltejs/kit').AfterNavigate} */
      nav.navigation
    )
  );
  stores.navigating.set(null);
}
async function server_fallback(url, route, error, status) {
  if (url.origin === origin && url.pathname === location.pathname && !hydrated) {
    return await load_root_error_page({
      status,
      error,
      url,
      route
    });
  }
  return await native_navigation(url);
}
function setup_preload() {
  let mousemove_timeout;
  container.addEventListener("mousemove", (event) => {
    const target2 = (
      /** @type {Element} */
      event.target
    );
    clearTimeout(mousemove_timeout);
    mousemove_timeout = setTimeout(() => {
      preload(target2, 2);
    }, 20);
  });
  function tap(event) {
    if (event.defaultPrevented) return;
    preload(
      /** @type {Element} */
      event.composedPath()[0],
      1
    );
  }
  container.addEventListener("mousedown", tap);
  container.addEventListener("touchstart", tap, { passive: true });
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          _preload_code(
            /** @type {HTMLAnchorElement} */
            entry.target.href
          );
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0 }
  );
  function preload(element, priority) {
    const a = find_anchor(element, container);
    if (!a) return;
    const { url, external, download } = get_link_info(a, base);
    if (external || download) return;
    const options = get_router_options(a);
    const same_url = url && current.url.pathname + current.url.search === url.pathname + url.search;
    if (!options.reload && !same_url) {
      if (priority <= options.preload_data) {
        const intent = get_navigation_intent(url, false);
        if (intent) {
          {
            _preload_data(intent);
          }
        }
      } else if (priority <= options.preload_code) {
        _preload_code(
          /** @type {URL} */
          url.pathname
        );
      }
    }
  }
  function after_navigate() {
    observer.disconnect();
    for (const a of container.querySelectorAll("a")) {
      const { url, external, download } = get_link_info(a, base);
      if (external || download) continue;
      const options = get_router_options(a);
      if (options.reload) continue;
      if (options.preload_code === PRELOAD_PRIORITIES.viewport) {
        observer.observe(a);
      }
      if (options.preload_code === PRELOAD_PRIORITIES.eager) {
        _preload_code(
          /** @type {URL} */
          url.pathname
        );
      }
    }
  }
  after_navigate_callbacks.push(after_navigate);
  after_navigate();
}
function handle_error(error, event) {
  if (error instanceof HttpError) {
    return error.body;
  }
  const status = get_status(error);
  const message = get_message(error);
  return app.hooks.handleError({ error, event, status, message }) ?? /** @type {any} */
  { message };
}
function goto(url, opts = {}) {
  url = resolve_url(url);
  if (url.origin !== origin) {
    return Promise.reject(
      new Error(
        "goto: invalid URL"
      )
    );
  }
  return _goto(url, opts, 0);
}
function _start_router() {
  var _a2;
  history.scrollRestoration = "manual";
  addEventListener("beforeunload", (e) => {
    let should_block = false;
    persist_state();
    if (!navigating) {
      const nav = create_navigation(current, void 0, null, "leave");
      const navigation = {
        ...nav.navigation,
        cancel: () => {
          should_block = true;
          nav.reject(new Error("navigation cancelled"));
        }
      };
      before_navigate_callbacks.forEach((fn) => fn(navigation));
    }
    if (should_block) {
      e.preventDefault();
      e.returnValue = "";
    } else {
      history.scrollRestoration = "auto";
    }
  });
  addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      persist_state();
    }
  });
  if (!((_a2 = navigator.connection) == null ? void 0 : _a2.saveData)) {
    setup_preload();
  }
  container.addEventListener("click", async (event) => {
    if (event.button || event.which !== 1) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (event.defaultPrevented) return;
    const a = find_anchor(
      /** @type {Element} */
      event.composedPath()[0],
      container
    );
    if (!a) return;
    const { url, external, target: target2, download } = get_link_info(a, base);
    if (!url) return;
    if (target2 === "_parent" || target2 === "_top") {
      if (window.parent !== window) return;
    } else if (target2 && target2 !== "_self") {
      return;
    }
    const options = get_router_options(a);
    const is_svg_a_element = a instanceof SVGAElement;
    if (!is_svg_a_element && url.protocol !== location.protocol && !(url.protocol === "https:" || url.protocol === "http:"))
      return;
    if (download) return;
    const [nonhash, hash2] = url.href.split("#");
    const same_pathname = nonhash === strip_hash(location);
    if (external || options.reload && (!same_pathname || !hash2)) {
      if (_before_navigate({ url, type: "link" })) {
        navigating = true;
      } else {
        event.preventDefault();
      }
      return;
    }
    if (hash2 !== void 0 && same_pathname) {
      const [, current_hash] = current.url.href.split("#");
      if (current_hash === hash2) {
        event.preventDefault();
        if (hash2 === "" || hash2 === "top" && a.ownerDocument.getElementById("top") === null) {
          window.scrollTo({ top: 0 });
        } else {
          const element = a.ownerDocument.getElementById(decodeURIComponent(hash2));
          if (element) {
            element.scrollIntoView();
            element.focus();
          }
        }
        return;
      }
      hash_navigating = true;
      update_scroll_positions(current_history_index);
      update_url(url);
      if (!options.replace_state) return;
      hash_navigating = false;
    }
    event.preventDefault();
    await new Promise((fulfil) => {
      requestAnimationFrame(() => {
        setTimeout(fulfil, 0);
      });
      setTimeout(fulfil, 100);
    });
    navigate({
      type: "link",
      url,
      keepfocus: options.keepfocus,
      noscroll: options.noscroll,
      replace_state: options.replace_state ?? url.href === location.href
    });
  });
  container.addEventListener("submit", (event) => {
    if (event.defaultPrevented) return;
    const form = (
      /** @type {HTMLFormElement} */
      HTMLFormElement.prototype.cloneNode.call(event.target)
    );
    const submitter = (
      /** @type {HTMLButtonElement | HTMLInputElement | null} */
      event.submitter
    );
    const target2 = (submitter == null ? void 0 : submitter.formTarget) || form.target;
    if (target2 === "_blank") return;
    const method = (submitter == null ? void 0 : submitter.formMethod) || form.method;
    if (method !== "get") return;
    const url = new URL(
      (submitter == null ? void 0 : submitter.hasAttribute("formaction")) && (submitter == null ? void 0 : submitter.formAction) || form.action
    );
    if (is_external_url(url, base)) return;
    const event_form = (
      /** @type {HTMLFormElement} */
      event.target
    );
    const options = get_router_options(event_form);
    if (options.reload) return;
    event.preventDefault();
    event.stopPropagation();
    const data = new FormData(event_form);
    const submitter_name = submitter == null ? void 0 : submitter.getAttribute("name");
    if (submitter_name) {
      data.append(submitter_name, (submitter == null ? void 0 : submitter.getAttribute("value")) ?? "");
    }
    url.search = new URLSearchParams(data).toString();
    navigate({
      type: "form",
      url,
      keepfocus: options.keepfocus,
      noscroll: options.noscroll,
      replace_state: options.replace_state ?? url.href === location.href
    });
  });
  addEventListener("popstate", async (event) => {
    var _a3;
    if ((_a3 = event.state) == null ? void 0 : _a3[HISTORY_INDEX]) {
      const history_index = event.state[HISTORY_INDEX];
      token = {};
      if (history_index === current_history_index) return;
      const scroll = scroll_positions[history_index];
      const state = event.state[STATES_KEY] ?? {};
      const url = new URL(event.state[PAGE_URL_KEY] ?? location.href);
      const navigation_index = event.state[NAVIGATION_INDEX];
      const is_hash_change = strip_hash(location) === strip_hash(current.url);
      const shallow = navigation_index === current_navigation_index && (has_navigated || is_hash_change);
      if (shallow) {
        update_url(url);
        scroll_positions[current_history_index] = scroll_state();
        if (scroll) scrollTo(scroll.x, scroll.y);
        if (state !== page.state) {
          page = { ...page, state };
          root.$set({ page });
        }
        current_history_index = history_index;
        return;
      }
      const delta = history_index - current_history_index;
      await navigate({
        type: "popstate",
        url,
        popped: {
          state,
          scroll,
          delta
        },
        accept: () => {
          current_history_index = history_index;
          current_navigation_index = navigation_index;
        },
        block: () => {
          history.go(-delta);
        },
        nav_token: token
      });
    } else {
      if (!hash_navigating) {
        const url = new URL(location.href);
        update_url(url);
      }
    }
  });
  addEventListener("hashchange", () => {
    if (hash_navigating) {
      hash_navigating = false;
      history.replaceState(
        {
          ...history.state,
          [HISTORY_INDEX]: ++current_history_index,
          [NAVIGATION_INDEX]: current_navigation_index
        },
        "",
        location.href
      );
    }
  });
  for (const link of document.querySelectorAll("link")) {
    if (link.rel === "icon") link.href = link.href;
  }
  addEventListener("pageshow", (event) => {
    if (event.persisted) {
      stores.navigating.set(null);
    }
  });
  function update_url(url) {
    current.url = url;
    stores.page.set({ ...page, url });
    stores.page.notify();
  }
}
async function _hydrate(target2, { status = 200, error, node_ids, params, route, data: server_data_nodes, form }) {
  hydrated = true;
  const url = new URL(location.href);
  {
    ({ params = {}, route = { id: null } } = get_navigation_intent(url, false) || {});
  }
  let result;
  try {
    const branch_promises = node_ids.map(async (n, i) => {
      const server_data_node = server_data_nodes[i];
      if (server_data_node == null ? void 0 : server_data_node.uses) {
        server_data_node.uses = deserialize_uses(server_data_node.uses);
      }
      return load_node({
        loader: app.nodes[n],
        url,
        params,
        route,
        parent: async () => {
          const data = {};
          for (let j = 0; j < i; j += 1) {
            Object.assign(data, (await branch_promises[j]).data);
          }
          return data;
        },
        server_data_node: create_data_node(server_data_node)
      });
    });
    const branch = await Promise.all(branch_promises);
    const parsed_route = routes.find(({ id }) => id === route.id);
    if (parsed_route) {
      const layouts = parsed_route.layouts;
      for (let i = 0; i < layouts.length; i++) {
        if (!layouts[i]) {
          branch.splice(i, 0, void 0);
        }
      }
    }
    result = get_navigation_result_from_branch({
      url,
      params,
      branch,
      status,
      error,
      form,
      route: parsed_route ?? null
    });
  } catch (error2) {
    if (error2 instanceof Redirect) {
      await native_navigation(new URL(error2.location, location.href));
      return;
    }
    result = await load_root_error_page({
      status: get_status(error2),
      error: await handle_error(error2, { url, params, route }),
      url,
      route
    });
  }
  if (result.props.page) {
    result.props.page.state = {};
  }
  initialize(result, target2, true);
}
async function load_data(url, invalid) {
  var _a2;
  const data_url = new URL(url);
  data_url.pathname = add_data_suffix(url.pathname);
  if (url.pathname.endsWith("/")) {
    data_url.searchParams.append(TRAILING_SLASH_PARAM, "1");
  }
  data_url.searchParams.append(INVALIDATED_PARAM, invalid.map((i) => i ? "1" : "0").join(""));
  const res = await native_fetch(data_url.href);
  if (!res.ok) {
    let message;
    if ((_a2 = res.headers.get("content-type")) == null ? void 0 : _a2.includes("application/json")) {
      message = await res.json();
    } else if (res.status === 404) {
      message = "Not Found";
    } else if (res.status === 500) {
      message = "Internal Error";
    }
    throw new HttpError(res.status, message);
  }
  return new Promise(async (resolve) => {
    var _a3;
    const deferreds = /* @__PURE__ */ new Map();
    const reader = (
      /** @type {ReadableStream<Uint8Array>} */
      res.body.getReader()
    );
    const decoder = new TextDecoder();
    function deserialize(data) {
      return unflatten(data, {
        Promise: (id) => {
          return new Promise((fulfil, reject) => {
            deferreds.set(id, { fulfil, reject });
          });
        }
      });
    }
    let text = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done && !text) break;
      text += !value && text ? "\n" : decoder.decode(value, { stream: true });
      while (true) {
        const split = text.indexOf("\n");
        if (split === -1) {
          break;
        }
        const node = JSON.parse(text.slice(0, split));
        text = text.slice(split + 1);
        if (node.type === "redirect") {
          return resolve(node);
        }
        if (node.type === "data") {
          (_a3 = node.nodes) == null ? void 0 : _a3.forEach((node2) => {
            if ((node2 == null ? void 0 : node2.type) === "data") {
              node2.uses = deserialize_uses(node2.uses);
              node2.data = deserialize(node2.data);
            }
          });
          resolve(node);
        } else if (node.type === "chunk") {
          const { id, data, error } = node;
          const deferred = (
            /** @type {import('types').Deferred} */
            deferreds.get(id)
          );
          deferreds.delete(id);
          if (error) {
            deferred.reject(deserialize(error));
          } else {
            deferred.fulfil(deserialize(data));
          }
        }
      }
    }
  });
}
function deserialize_uses(uses) {
  return {
    dependencies: new Set((uses == null ? void 0 : uses.dependencies) ?? []),
    params: new Set((uses == null ? void 0 : uses.params) ?? []),
    parent: !!(uses == null ? void 0 : uses.parent),
    route: !!(uses == null ? void 0 : uses.route),
    url: !!(uses == null ? void 0 : uses.url),
    search_params: new Set((uses == null ? void 0 : uses.search_params) ?? [])
  };
}
function reset_focus() {
  const autofocus = document.querySelector("[autofocus]");
  if (autofocus) {
    autofocus.focus();
  } else {
    const root2 = document.body;
    const tabindex = root2.getAttribute("tabindex");
    root2.tabIndex = -1;
    root2.focus({ preventScroll: true, focusVisible: false });
    if (tabindex !== null) {
      root2.setAttribute("tabindex", tabindex);
    } else {
      root2.removeAttribute("tabindex");
    }
    const selection = getSelection();
    if (selection && selection.type !== "None") {
      const ranges = [];
      for (let i = 0; i < selection.rangeCount; i += 1) {
        ranges.push(selection.getRangeAt(i));
      }
      setTimeout(() => {
        if (selection.rangeCount !== ranges.length) return;
        for (let i = 0; i < selection.rangeCount; i += 1) {
          const a = ranges[i];
          const b = selection.getRangeAt(i);
          if (a.commonAncestorContainer !== b.commonAncestorContainer || a.startContainer !== b.startContainer || a.endContainer !== b.endContainer || a.startOffset !== b.startOffset || a.endOffset !== b.endOffset) {
            return;
          }
        }
        selection.removeAllRanges();
      });
    }
  }
}
function create_navigation(current2, intent, url, type) {
  var _a2, _b2;
  let fulfil;
  let reject;
  const complete = new Promise((f, r) => {
    fulfil = f;
    reject = r;
  });
  complete.catch(() => {
  });
  const navigation = {
    from: {
      params: current2.params,
      route: { id: ((_a2 = current2.route) == null ? void 0 : _a2.id) ?? null },
      url: current2.url
    },
    to: url && {
      params: (intent == null ? void 0 : intent.params) ?? null,
      route: { id: ((_b2 = intent == null ? void 0 : intent.route) == null ? void 0 : _b2.id) ?? null },
      url
    },
    willUnload: !intent,
    type,
    complete
  };
  return {
    navigation,
    // @ts-expect-error
    fulfil,
    // @ts-expect-error
    reject
  };
}
export {
  start as a,
  stores as s
};
