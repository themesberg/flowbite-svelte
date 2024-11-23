import { c as comment, a as append, t as template, b as text } from "./disclose-version.0TX42Q8e.js";
import { a1 as effect, m as untrack, an as render_effect, a5 as deep_read_state, i as safe_not_equal, w as hydrating, aL as LOADING_ATTR_SYMBOL, am as get_prototype_of, aM as queue_idle_task, aN as get_descriptors, M as queue_micro_task, E as EFFECT_TRANSPARENT, aO as BLOCK_EFFECT, aP as EFFECT_RAN, O as active_effect, as as is_function, h as noop, aQ as TRANSITION_GLOBAL, aB as set_active_reaction, av as set_active_effect, X as active_reaction, aR as is_runes, aC as teardown, b as get, a7 as set, a6 as state, p as push, g as getContext, f as first_child, c as child, s as sibling, r as reset, t as template_effect, a as pop, d as derived, e as setContext, u as user_effect } from "./runtime.BkfDdwap.js";
import { k as add_form_reset_listener, n as is_capture_event, o as create_event, d as delegate, p as autofocus, q as normalize_attribute, t as is_delegated, v as should_intro, l as listen_to_event_and_reset_event, a as set_text, i as event } from "./store.B2xZ3Ft6.js";
import { a as is, b as proxy, p as prop, i as if_block, r as rest_props, c as component, d as bind_this } from "./props.B7eOu8hW.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { w as writable } from "./index.IFFPp5_U.js";
function action(dom, action2, get_value) {
  effect(() => {
    var payload = untrack(() => action2(dom, get_value == null ? void 0 : get_value()) || {});
    if (get_value && (payload == null ? void 0 : payload.update)) {
      var inited = false;
      var prev = (
        /** @type {any} */
        {}
      );
      render_effect(() => {
        var value = get_value();
        deep_read_state(value);
        if (inited && safe_not_equal(prev, value)) {
          prev = value;
          payload.update(value);
        }
      });
      inited = true;
    }
    if (payload == null ? void 0 : payload.destroy) {
      return () => (
        /** @type {Function} */
        payload.destroy()
      );
    }
  });
}
function remove_input_defaults(input2) {
  if (!hydrating) return;
  var already_removed = false;
  var remove_defaults = () => {
    if (already_removed) return;
    already_removed = true;
    if (input2.hasAttribute("value")) {
      var value = input2.value;
      set_attribute(input2, "value", null);
      input2.value = value;
    }
    if (input2.hasAttribute("checked")) {
      var checked = input2.checked;
      set_attribute(input2, "checked", null);
      input2.checked = checked;
    }
  };
  input2.__on_r = remove_defaults;
  queue_idle_task(remove_defaults);
  add_form_reset_listener();
}
function set_attribute(element, attribute, value, skip_warning) {
  var attributes = element.__attributes ?? (element.__attributes = {});
  if (hydrating) {
    attributes[attribute] = element.getAttribute(attribute);
    if (attribute === "src" || attribute === "srcset" || attribute === "href" && element.nodeName === "LINK") {
      return;
    }
  }
  if (attributes[attribute] === (attributes[attribute] = value)) return;
  if (attribute === "style" && "__styles" in element) {
    element.__styles = {};
  }
  if (attribute === "loading") {
    element[LOADING_ATTR_SYMBOL] = value;
  }
  if (value == null) {
    element.removeAttribute(attribute);
  } else if (typeof value !== "string" && get_setters(element).includes(attribute)) {
    element[attribute] = value;
  } else {
    element.setAttribute(attribute, value);
  }
}
function set_attributes(element, prev, next, css_hash, preserve_attribute_case = false, is_custom_element = false, skip_warning = false) {
  var current = prev || {};
  var is_option_element = element.tagName === "OPTION";
  for (var key in prev) {
    if (!(key in next)) {
      next[key] = null;
    }
  }
  if (css_hash !== void 0) {
    next.class = next.class ? next.class + " " + css_hash : css_hash;
  }
  var setters = get_setters(element);
  var attributes = (
    /** @type {Record<string, unknown>} **/
    element.__attributes ?? (element.__attributes = {})
  );
  var events = [];
  for (const key2 in next) {
    let value = next[key2];
    if (is_option_element && key2 === "value" && value == null) {
      element.value = element.__value = "";
      current[key2] = value;
      continue;
    }
    var prev_value = current[key2];
    if (value === prev_value) continue;
    current[key2] = value;
    var prefix = key2[0] + key2[1];
    if (prefix === "$$") continue;
    if (prefix === "on") {
      const opts = {};
      const event_handle_key = "$$" + key2;
      let event_name = key2.slice(2);
      var delegated = is_delegated(event_name);
      if (is_capture_event(event_name)) {
        event_name = event_name.slice(0, -7);
        opts.capture = true;
      }
      if (!delegated && prev_value) {
        if (value != null) continue;
        element.removeEventListener(event_name, current[event_handle_key], opts);
        current[event_handle_key] = null;
      }
      if (value != null) {
        if (!delegated) {
          let handle = function(evt) {
            current[key2].call(this, evt);
          };
          if (!prev) {
            events.push([
              key2,
              value,
              () => current[event_handle_key] = create_event(event_name, element, handle, opts)
            ]);
          } else {
            current[event_handle_key] = create_event(event_name, element, handle, opts);
          }
        } else {
          element[`__${event_name}`] = value;
          delegate([event_name]);
        }
      }
    } else if (key2 === "style" && value != null) {
      element.style.cssText = value + "";
    } else if (key2 === "autofocus") {
      autofocus(
        /** @type {HTMLElement} */
        element,
        Boolean(value)
      );
    } else if (key2 === "__value" || key2 === "value" && value != null) {
      element.value = element[key2] = element.__value = value;
    } else {
      var name = key2;
      if (!preserve_attribute_case) {
        name = normalize_attribute(name);
      }
      if (value == null && !is_custom_element) {
        attributes[key2] = null;
        element.removeAttribute(key2);
      } else if (setters.includes(name) && (is_custom_element || typeof value !== "string")) {
        element[name] = value;
      } else if (typeof value !== "function") {
        if (hydrating && (name === "src" || name === "href" || name === "srcset")) ;
        else {
          set_attribute(element, name, value);
        }
      }
    }
    if (key2 === "style" && "__styles" in element) {
      element.__styles = {};
    }
  }
  if (!prev) {
    queue_micro_task(() => {
      if (!element.isConnected) return;
      for (const [key2, value, evt] of events) {
        if (current[key2] === value) {
          evt();
        }
      }
    });
  }
  return current;
}
var setters_cache = /* @__PURE__ */ new Map();
function get_setters(element) {
  var setters = setters_cache.get(element.nodeName);
  if (setters) return setters;
  setters_cache.set(element.nodeName, setters = []);
  var descriptors;
  var proto = get_prototype_of(element);
  var element_proto = Element.prototype;
  while (element_proto !== proto) {
    descriptors = get_descriptors(proto);
    for (var key in descriptors) {
      if (descriptors[key].set) {
        setters.push(key);
      }
    }
    proto = get_prototype_of(proto);
  }
  return setters;
}
function handle_lazy_img(element) {
  if (!hydrating && element.loading === "lazy") {
    var src = element.src;
    element[LOADING_ATTR_SYMBOL] = null;
    element.loading = "eager";
    element.removeAttribute("src");
    requestAnimationFrame(() => {
      if (element[LOADING_ATTR_SYMBOL] !== "eager") {
        element.loading = "lazy";
      }
      element.src = src;
    });
  }
}
function set_svg_class(dom, value) {
  var prev_class_name = dom.__className;
  var next_class_name = to_class(value);
  if (hydrating && dom.getAttribute("class") === next_class_name) {
    dom.__className = next_class_name;
  } else if (prev_class_name !== next_class_name || hydrating && dom.getAttribute("class") !== next_class_name) {
    if (next_class_name === "") {
      dom.removeAttribute("class");
    } else {
      dom.setAttribute("class", next_class_name);
    }
    dom.__className = next_class_name;
  }
}
function set_class(dom, value) {
  var prev_class_name = dom.__className;
  var next_class_name = to_class(value);
  if (hydrating && dom.className === next_class_name) {
    dom.__className = next_class_name;
  } else if (prev_class_name !== next_class_name || hydrating && dom.className !== next_class_name) {
    if (value == null) {
      dom.removeAttribute("class");
    } else {
      dom.className = next_class_name;
    }
    dom.__className = next_class_name;
  }
}
function to_class(value) {
  return value == null ? "" : value;
}
function toggle_class(dom, class_name, value) {
  if (value) {
    if (dom.classList.contains(class_name)) return;
    dom.classList.add(class_name);
  } else {
    if (!dom.classList.contains(class_name)) return;
    dom.classList.remove(class_name);
  }
}
const now = () => performance.now();
const raf = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (_2) => requestAnimationFrame(_2)
  ),
  now: () => now(),
  tasks: /* @__PURE__ */ new Set()
};
function run_tasks(now2) {
  raf.tasks.forEach((task) => {
    if (!task.c(now2)) {
      raf.tasks.delete(task);
      task.f();
    }
  });
  if (raf.tasks.size !== 0) {
    raf.tick(run_tasks);
  }
}
function loop(callback) {
  let task;
  if (raf.tasks.size === 0) {
    raf.tick(run_tasks);
  }
  return {
    promise: new Promise((fulfill) => {
      raf.tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      raf.tasks.delete(task);
    }
  };
}
function dispatch_event(element, type) {
  element.dispatchEvent(new CustomEvent(type));
}
function css_property_to_camelcase(style) {
  if (style === "float") return "cssFloat";
  if (style === "offset") return "cssOffset";
  if (style.startsWith("--")) return style;
  const parts = style.split("-");
  if (parts.length === 1) return parts[0];
  return parts[0] + parts.slice(1).map(
    /** @param {any} word */
    (word) => word[0].toUpperCase() + word.slice(1)
  ).join("");
}
function css_to_keyframe(css) {
  const keyframe = {};
  const parts = css.split(";");
  for (const part of parts) {
    const [property, value] = part.split(":");
    if (!property || value === void 0) break;
    const formatted_property = css_property_to_camelcase(property.trim());
    keyframe[formatted_property] = value.trim();
  }
  return keyframe;
}
const linear$2 = (t) => t;
function transition(flags, element, get_fn, get_params) {
  var is_global = (flags & TRANSITION_GLOBAL) !== 0;
  var direction = "both";
  var current_options;
  var inert = element.inert;
  var intro;
  var outro;
  function get_options() {
    var previous_reaction = active_reaction;
    var previous_effect = active_effect;
    set_active_reaction(null);
    set_active_effect(null);
    try {
      return current_options ?? (current_options = get_fn()(element, (get_params == null ? void 0 : get_params()) ?? /** @type {P} */
      {}, {
        direction
      }));
    } finally {
      set_active_reaction(previous_reaction);
      set_active_effect(previous_effect);
    }
  }
  var transition2 = {
    is_global,
    in() {
      element.inert = inert;
      dispatch_event(element, "introstart");
      intro = animate(element, get_options(), outro, 1, () => {
        dispatch_event(element, "introend");
        intro == null ? void 0 : intro.abort();
        intro = current_options = void 0;
      });
    },
    out(fn) {
      element.inert = true;
      dispatch_event(element, "outrostart");
      outro = animate(element, get_options(), intro, 0, () => {
        dispatch_event(element, "outroend");
        fn == null ? void 0 : fn();
      });
    },
    stop: () => {
      intro == null ? void 0 : intro.abort();
      outro == null ? void 0 : outro.abort();
    }
  };
  var e = (
    /** @type {Effect} */
    active_effect
  );
  (e.transitions ?? (e.transitions = [])).push(transition2);
  if (should_intro) {
    var run = is_global;
    if (!run) {
      var block = (
        /** @type {Effect | null} */
        e.parent
      );
      while (block && (block.f & EFFECT_TRANSPARENT) !== 0) {
        while (block = block.parent) {
          if ((block.f & BLOCK_EFFECT) !== 0) break;
        }
      }
      run = !block || (block.f & EFFECT_RAN) !== 0;
    }
    if (run) {
      effect(() => {
        untrack(() => transition2.in());
      });
    }
  }
}
function animate(element, options, counterpart, t2, on_finish) {
  var is_intro = t2 === 1;
  if (is_function(options)) {
    var a2;
    var aborted = false;
    queue_micro_task(() => {
      if (aborted) return;
      var o = options({ direction: is_intro ? "in" : "out" });
      a2 = animate(element, o, counterpart, t2, on_finish);
    });
    return {
      abort: () => {
        aborted = true;
        a2 == null ? void 0 : a2.abort();
      },
      deactivate: () => a2.deactivate(),
      reset: () => a2.reset(),
      t: () => a2.t()
    };
  }
  counterpart == null ? void 0 : counterpart.deactivate();
  if (!(options == null ? void 0 : options.duration)) {
    on_finish();
    return {
      abort: noop,
      deactivate: noop,
      reset: noop,
      t: () => t2
    };
  }
  const { delay = 0, css, tick, easing = linear$2 } = options;
  var keyframes = [];
  if (is_intro && counterpart === void 0) {
    if (tick) {
      tick(0, 1);
    }
    if (css) {
      var styles = css_to_keyframe(css(0, 1));
      keyframes.push(styles, styles);
    }
  }
  var get_t = () => 1 - t2;
  var animation = element.animate(keyframes, { duration: delay });
  animation.onfinish = () => {
    var t1 = (counterpart == null ? void 0 : counterpart.t()) ?? 1 - t2;
    counterpart == null ? void 0 : counterpart.abort();
    var delta = t2 - t1;
    var duration = (
      /** @type {number} */
      options.duration * Math.abs(delta)
    );
    var keyframes2 = [];
    if (duration > 0) {
      if (css) {
        var n2 = Math.ceil(duration / (1e3 / 60));
        for (var i2 = 0; i2 <= n2; i2 += 1) {
          var t = t1 + delta * easing(i2 / n2);
          var styles2 = css(t, 1 - t);
          keyframes2.push(css_to_keyframe(styles2));
        }
      }
      get_t = () => {
        var time = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          animation.currentTime
        );
        return t1 + delta * easing(time / duration);
      };
      if (tick) {
        loop(() => {
          if (animation.playState !== "running") return false;
          var t3 = get_t();
          tick(t3, 1 - t3);
          return true;
        });
      }
    }
    animation = element.animate(keyframes2, { duration, fill: "forwards" });
    animation.onfinish = () => {
      get_t = () => t2;
      tick == null ? void 0 : tick(t2, 1 - t2);
      on_finish();
    };
  };
  return {
    abort: () => {
      if (animation) {
        animation.cancel();
        animation.effect = null;
        animation.onfinish = noop;
      }
    },
    deactivate: () => {
      on_finish = noop;
    },
    reset: () => {
      if (t2 === 0) {
        tick == null ? void 0 : tick(1, 0);
      }
    },
    t: () => get_t()
  };
}
function bind_value(input2, get2, set2 = get2) {
  var runes = is_runes();
  listen_to_event_and_reset_event(input2, "input", () => {
    var value = is_numberlike_input(input2) ? to_number(input2.value) : input2.value;
    set2(value);
    if (runes && value !== (value = get2())) {
      input2.value = value ?? "";
    }
  });
  render_effect(() => {
    var value = get2();
    if (hydrating && input2.defaultValue !== input2.value) {
      set2(is_numberlike_input(input2) ? to_number(input2.value) : input2.value);
      return;
    }
    if (is_numberlike_input(input2) && value === to_number(input2.value)) {
      return;
    }
    if (input2.type === "date" && !value && !input2.value) {
      return;
    }
    if (value !== input2.value) {
      input2.value = value ?? "";
    }
  });
}
const pending = /* @__PURE__ */ new Set();
function bind_group(inputs, group_index, input2, get2, set2 = get2) {
  var is_checkbox = input2.getAttribute("type") === "checkbox";
  var binding_group = inputs;
  let hydration_mismatch = false;
  if (group_index !== null) {
    for (var index of group_index) {
      binding_group = binding_group[index] ?? (binding_group[index] = []);
    }
  }
  binding_group.push(input2);
  listen_to_event_and_reset_event(
    input2,
    "change",
    () => {
      var value = input2.__value;
      if (is_checkbox) {
        value = get_binding_group_value(binding_group, value, input2.checked);
      }
      set2(value);
    },
    // TODO better default value handling
    () => set2(is_checkbox ? [] : null)
  );
  render_effect(() => {
    var value = get2();
    if (hydrating && input2.defaultChecked !== input2.checked) {
      hydration_mismatch = true;
      return;
    }
    if (is_checkbox) {
      value = value || [];
      input2.checked = value.includes(input2.__value);
    } else {
      input2.checked = is(input2.__value, value);
    }
  });
  teardown(() => {
    var index2 = binding_group.indexOf(input2);
    if (index2 !== -1) {
      binding_group.splice(index2, 1);
    }
  });
  if (!pending.has(binding_group)) {
    pending.add(binding_group);
    queue_micro_task(() => {
      binding_group.sort((a2, b) => a2.compareDocumentPosition(b) === 4 ? -1 : 1);
      pending.delete(binding_group);
    });
  }
  queue_micro_task(() => {
    if (hydration_mismatch) {
      var value;
      if (is_checkbox) {
        value = get_binding_group_value(binding_group, value, input2.checked);
      } else {
        var hydration_input = binding_group.find((input3) => input3.checked);
        value = hydration_input == null ? void 0 : hydration_input.__value;
      }
      set2(value);
    }
  });
}
function bind_checked(input2, get2, set2 = get2) {
  listen_to_event_and_reset_event(input2, "change", () => {
    var value = input2.checked;
    set2(value);
  });
  if (get2() == void 0) {
    set2(false);
  }
  render_effect(() => {
    var value = get2();
    input2.checked = Boolean(value);
  });
}
function get_binding_group_value(group2, __value, checked) {
  var value = /* @__PURE__ */ new Set();
  for (var i2 = 0; i2 < group2.length; i2 += 1) {
    if (group2[i2].checked) {
      value.add(group2[i2].__value);
    }
  }
  if (!checked) {
    value.delete(__value);
  }
  return Array.from(value);
}
function is_numberlike_input(input2) {
  var type = input2.type;
  return type === "number" || type === "range";
}
function to_number(value) {
  return value === "" ? null : +value;
}
function bind_files(input2, get2, set2 = get2) {
  listen_to_event_and_reset_event(input2, "change", () => {
    set2(input2.files);
  });
  render_effect(() => {
    input2.files = get2();
  });
}
function uiHelpers() {
  let isOpen = state(false);
  function toggle2() {
    set(isOpen, !get(isOpen));
  }
  function close() {
    set(isOpen, false);
  }
  function open() {
    set(isOpen, true);
  }
  return {
    get isOpen() {
      return get(isOpen);
    },
    set isOpen(value) {
      set(isOpen, proxy(value));
    },
    toggle: toggle2,
    close,
    open
  };
}
function clickOutside(element, callbackFunction) {
  function onClick(event2) {
    if (typeof callbackFunction === "function") {
      const targetNode = event2.target;
      if (!element.contains(targetNode)) {
        callbackFunction();
      }
    } else {
      console.error("Callback function is not a function");
    }
  }
  document.body.addEventListener("click", onClick);
  return {
    update(newCallbackFunction) {
      if (typeof newCallbackFunction === "function") {
        callbackFunction = newCallbackFunction;
      } else {
        console.error("New callback function is not a function");
      }
    },
    destroy() {
      document.body.removeEventListener("click", onClick);
    }
  };
}
let n = Date.now();
function idGenerator() {
  return (n += 1).toString(36);
}
const CLASS_PART_SEPARATOR = "-";
const createClassGroupUtils = (config) => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = (className) => {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
const getGroupRecursive = (classParts, classPartObject) => {
  var _a;
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_a = classPartObject.validators.find(({
    validator
  }) => validator(classRest))) == null ? void 0 : _a.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = (className) => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
};
const createClassMap = (config) => {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
};
const getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
const isThemeGetter = (func) => func.isThemeGetter;
const getPrefixedClassGroupEntries = (classGroupEntries, prefix) => {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map((classDefinition) => {
      if (typeof classDefinition === "string") {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === "object") {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
};
const createLruCache = (maxCacheSize) => {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache = /* @__PURE__ */ new Map();
  let previousCache = /* @__PURE__ */ new Map();
  const update = (key, value) => {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ new Map();
    }
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
};
const IMPORTANT_MODIFIER = "!";
const createParseClassName = (config) => {
  const {
    separator,
    experimentalParseClassName
  } = config;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  const parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (experimentalParseClassName) {
    return (className) => experimentalParseClassName({
      className,
      parseClassName
    });
  }
  return parseClassName;
};
const sortModifiers = (modifiers) => {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach((modifier) => {
    const isArbitraryVariant = modifier[0] === "[";
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
};
const createConfigUtils = (config) => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  ...createClassGroupUtils(config)
});
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i2 = 0; i2 < conflictGroups.length; ++i2) {
      const group2 = conflictGroups[i2];
      classGroupsInConflict.push(modifierId + group2);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
const toValue = (mix) => {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
const fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isLength = (value) => isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
const isArbitraryLength = (value) => getIsArbitraryValue(value, "length", isLengthOnly);
const isNumber = (value) => Boolean(value) && !Number.isNaN(Number(value));
const isArbitraryNumber = (value) => getIsArbitraryValue(value, "number", isNumber);
const isInteger = (value) => Boolean(value) && Number.isInteger(Number(value));
const isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
const isArbitraryValue = (value) => arbitraryValueRegex.test(value);
const isTshirtSize = (value) => tshirtUnitRegex.test(value);
const sizeLabels = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
const isArbitrarySize = (value) => getIsArbitraryValue(value, sizeLabels, isNever);
const isArbitraryPosition = (value) => getIsArbitraryValue(value, "position", isNever);
const imageLabels = /* @__PURE__ */ new Set(["image", "url"]);
const isArbitraryImage = (value) => getIsArbitraryValue(value, imageLabels, isImage);
const isArbitraryShadow = (value) => getIsArbitraryValue(value, "", isShadow);
const isAny = () => true;
const getIsArbitraryValue = (value, label2, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label2 === "string" ? result[1] === label2 : label2.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
const isLengthOnly = (value) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
);
const isNever = () => false;
const isShadow = (value) => shadowRegex.test(value);
const isImage = (value) => imageRegex.test(value);
const getDefaultConfig = () => {
  const colors = fromTheme("colors");
  const spacing = fromTheme("spacing");
  const blur2 = fromTheme("blur");
  const brightness = fromTheme("brightness");
  const borderColor = fromTheme("borderColor");
  const borderRadius = fromTheme("borderRadius");
  const borderSpacing = fromTheme("borderSpacing");
  const borderWidth = fromTheme("borderWidth");
  const contrast = fromTheme("contrast");
  const grayscale = fromTheme("grayscale");
  const hueRotate = fromTheme("hueRotate");
  const invert = fromTheme("invert");
  const gap = fromTheme("gap");
  const gradientColorStops = fromTheme("gradientColorStops");
  const gradientColorStopPositions = fromTheme("gradientColorStopPositions");
  const inset = fromTheme("inset");
  const margin = fromTheme("margin");
  const opacity = fromTheme("opacity");
  const padding = fromTheme("padding");
  const saturate = fromTheme("saturate");
  const scale2 = fromTheme("scale");
  const sepia = fromTheme("sepia");
  const skew = fromTheme("skew");
  const space = fromTheme("space");
  const translate = fromTheme("translate");
  const getOverscroll = () => ["auto", "contain", "none"];
  const getOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const getSpacingWithAutoAndArbitrary = () => ["auto", isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ["", isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ["auto", isNumber, isArbitraryValue];
  const getPositions = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  const getLineStyles = () => ["solid", "dashed", "dotted", "double", "none"];
  const getBlendModes = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const getAlign = () => ["start", "end", "center", "between", "around", "evenly", "stretch"];
  const getZeroAndEmpty = () => ["", "0", isArbitraryValue];
  const getBreaks = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ["none", "", isTshirtSize, isArbitraryValue],
      brightness: getNumberAndArbitrary(),
      borderColor: [colors],
      borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumberAndArbitrary(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumberAndArbitrary(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumberAndArbitrary(),
      scale: getNumberAndArbitrary(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...getAlign(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...getAlign(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [isArbitraryValue, spacing, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [isArbitraryValue, spacing, "none", "full", "min", "max", "fit", "prose", {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...getLineStyles(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...getLineStyles(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [borderColor]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [borderColor]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...getBlendModes(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur2]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [blur2]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale2]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [scale2]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [scale2]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
};
const mergeConfigs = (baseConfig, {
  cacheSize,
  prefix,
  separator,
  experimentalParseClassName,
  extend = {},
  override = {}
}) => {
  overrideProperty(baseConfig, "cacheSize", cacheSize);
  overrideProperty(baseConfig, "prefix", prefix);
  overrideProperty(baseConfig, "separator", separator);
  overrideProperty(baseConfig, "experimentalParseClassName", experimentalParseClassName);
  for (const configKey in override) {
    overrideConfigProperties(baseConfig[configKey], override[configKey]);
  }
  for (const key in extend) {
    mergeConfigProperties(baseConfig[key], extend[key]);
  }
  return baseConfig;
};
const overrideProperty = (baseObject, overrideKey, overrideValue) => {
  if (overrideValue !== void 0) {
    baseObject[overrideKey] = overrideValue;
  }
};
const overrideConfigProperties = (baseObject, overrideObject) => {
  if (overrideObject) {
    for (const key in overrideObject) {
      overrideProperty(baseObject, key, overrideObject[key]);
    }
  }
};
const mergeConfigProperties = (baseObject, mergeObject) => {
  if (mergeObject) {
    for (const key in mergeObject) {
      const mergeValue = mergeObject[key];
      if (mergeValue !== void 0) {
        baseObject[key] = (baseObject[key] || []).concat(mergeValue);
      }
    }
  }
};
const extendTailwindMerge = (configExtension, ...createConfig) => typeof configExtension === "function" ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
const twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
const linear$1 = (x2) => x2;
function cubic_out(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function cubic_in_out(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function split_css_unit(value) {
  const split = typeof value === "string" && value.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return split ? [parseFloat(split[1]), split[2] || "px"] : [
    /** @type {number} */
    value,
    "px"
  ];
}
function blur(node, { delay = 0, duration = 400, easing = cubic_in_out, amount = 5, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const f = style.filter === "none" ? "" : style.filter;
  const od = target_opacity * (1 - opacity);
  const [value, unit] = split_css_unit(amount);
  return {
    delay,
    duration,
    easing,
    css: (_t, u2) => `opacity: ${target_opacity - od * u2}; filter: ${f} blur(${u2 * value}${unit});`
  };
}
function fade(node, { delay = 0, duration = 400, easing = linear$1 } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
function fly(node, { delay = 0, duration = 400, easing = cubic_out, x: x2 = 0, y: y2 = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const od = target_opacity * (1 - opacity);
  const [x_value, x_unit] = split_css_unit(x2);
  const [y_value, y_unit] = split_css_unit(y2);
  return {
    delay,
    duration,
    easing,
    css: (t, u2) => `
			transform: ${transform} translate(${(1 - t) * x_value}${x_unit}, ${(1 - t) * y_value}${y_unit});
			opacity: ${target_opacity - od * u2}`
  };
}
function slide(node, { delay = 0, duration = 400, easing = cubic_out, axis = "y" } = {}) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const primary_property = axis === "y" ? "height" : "width";
  const primary_property_value = parseFloat(style[primary_property]);
  const secondary_properties = axis === "y" ? ["top", "bottom"] : ["left", "right"];
  const capitalized_secondary_properties = secondary_properties.map(
    (e) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${e[0].toUpperCase()}${e.slice(1)}`
    )
  );
  const padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]);
  const padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]);
  const margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]);
  const margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]);
  const border_width_start_value = parseFloat(
    style[`border${capitalized_secondary_properties[0]}Width`]
  );
  const border_width_end_value = parseFloat(
    style[`border${capitalized_secondary_properties[1]}Width`]
  );
  return {
    delay,
    duration,
    easing,
    css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;`
  };
}
function scale(node, { delay = 0, duration = 400, easing = cubic_out, start = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const sd = 1 - start;
  const od = target_opacity * (1 - opacity);
  return {
    delay,
    duration,
    easing,
    css: (_t, u2) => `
			transform: ${transform} scale(${1 - sd * u2});
			opacity: ${target_opacity - od * u2}
		`
  };
}
const handleToggle = (_2, selected, open, self) => selected.set(open() ? {} : self);
var root_3$5 = template(`<svg class="h-3 w-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg>`);
var root_6$3 = template(`<svg class="h-3 w-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg>`);
var root_1$9 = template(`<!> <!>`, 1);
var root_8$1 = template(`<div><div><!></div></div>`);
var root$4 = template(`<h2><button type="button"><!></button></h2> <!>`, 1);
function AccordionItem($$anchor, $$props) {
  push($$props, true);
  let open = prop($$props, "open", 15, false), transition$1 = prop($$props, "transition", 3, slide);
  const ctx = getContext("ctx") ?? {};
  if (!ctx.selected) {
    ctx.selected = writable();
  }
  const self = {};
  const selected = ctx.isSingle ? ctx.selected : writable();
  if (open()) selected.set(self);
  selected.subscribe((x2) => open(x2 === self));
  const { base, button: button2, content, active, inactive } = accordionitem({ flush: ctx.flush, open: open() });
  let buttonClass = derived(() => twMerge(button2(), open() && !ctx.flush && ($$props.activeClass || ctx.activeClass || active()), !open() && !ctx.flush && ($$props.inactiveClass || ctx.inactiveClass || inactive()), $$props.class));
  var fragment = root$4();
  var h2 = first_child(fragment);
  const class_derived = derived(base);
  var button_1 = child(h2);
  button_1.__click = [handleToggle, selected, open, self];
  var node = child(button_1);
  if_block(node, () => $$props.header, ($$anchor2) => {
    var fragment_1 = root_1$9();
    var node_1 = first_child(fragment_1);
    snippet(node_1, () => $$props.header);
    var node_2 = sibling(node_1, 2);
    if_block(
      node_2,
      open,
      ($$anchor3) => {
        var fragment_2 = comment();
        var node_3 = first_child(fragment_2);
        if_block(
          node_3,
          () => !$$props.arrowup,
          ($$anchor4) => {
            var svg = root_3$5();
            append($$anchor4, svg);
          },
          ($$anchor4) => {
            var fragment_3 = comment();
            var node_4 = first_child(fragment_3);
            snippet(node_4, () => $$props.arrowup);
            append($$anchor4, fragment_3);
          }
        );
        append($$anchor3, fragment_2);
      },
      ($$anchor3) => {
        var fragment_4 = comment();
        var node_5 = first_child(fragment_4);
        if_block(
          node_5,
          () => !$$props.arrowdown,
          ($$anchor4) => {
            var svg_1 = root_6$3();
            append($$anchor4, svg_1);
          },
          ($$anchor4) => {
            var fragment_5 = comment();
            var node_6 = first_child(fragment_5);
            snippet(node_6, () => $$props.arrowdown);
            append($$anchor4, fragment_5);
          },
          true
        );
        append($$anchor3, fragment_4);
      }
    );
    append($$anchor2, fragment_1);
  });
  reset(button_1);
  reset(h2);
  var node_7 = sibling(h2, 2);
  if_block(node_7, open, ($$anchor2) => {
    var div = root_8$1();
    var div_1 = child(div);
    const class_derived_1 = derived(content);
    var node_8 = child(div_1);
    snippet(node_8, () => $$props.children);
    reset(div_1);
    reset(div);
    template_effect(() => set_class(div_1, get(class_derived_1)));
    transition(3, div, transition$1, () => $$props.params);
    append($$anchor2, div);
  });
  template_effect(() => {
    set_class(h2, get(class_derived));
    set_class(button_1, get(buttonClass));
    set_attribute(button_1, "aria-expanded", open());
  });
  append($$anchor, fragment);
  pop();
}
delegate(["click"]);
var l = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, u = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, x$1 = (e, o) => JSON.stringify(e) === JSON.stringify(o);
function i(e, o) {
  e.forEach(function(r) {
    Array.isArray(r) ? i(r, o) : o.push(r);
  });
}
function y(e) {
  let o = [];
  return i(e, o), o;
}
var a = (...e) => y(e).filter(Boolean), p = (e, o) => {
  let r = {}, c = Object.keys(e), f = Object.keys(o);
  for (let t of c) if (f.includes(t)) {
    let s = e[t], n2 = o[t];
    Array.isArray(s) || Array.isArray(n2) ? r[t] = a(n2, s) : typeof s == "object" && typeof n2 == "object" ? r[t] = p(s, n2) : r[t] = n2 + " " + s;
  } else r[t] = e[t];
  for (let t of f) c.includes(t) || (r[t] = o[t]);
  return r;
}, g = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
var ie = { twMerge: true, twMergeConfig: {}, responsiveVariants: false }, x = (s) => s || void 0, N = (...s) => x(y(s).filter(Boolean).join(" ")), R = null, v = {}, q = false, M = (...s) => (b$1) => b$1.twMerge ? ((!R || q) && (q = false, R = u(v) ? twMerge : extendTailwindMerge({ ...v, extend: { theme: v.theme, classGroups: v.classGroups, conflictingClassGroupModifiers: v.conflictingClassGroupModifiers, conflictingClassGroups: v.conflictingClassGroups, ...v.extend } })), x(R(N(s)))) : N(s), _ = (s, b) => {
  for (let e in b) s.hasOwnProperty(e) ? s[e] = N(s[e], b[e]) : s[e] = b[e];
  return s;
}, ce = (s, b$1) => {
  let { extend: e = null, slots: O = {}, variants: U = {}, compoundVariants: W = [], compoundSlots: C = [], defaultVariants: z = {} } = s, m = { ...ie, ...b$1 }, k = e != null && e.base ? N(e.base, s == null ? void 0 : s.base) : s == null ? void 0 : s.base, g$1 = e != null && e.variants && !u(e.variants) ? p(U, e.variants) : U, w = e != null && e.defaultVariants && !u(e.defaultVariants) ? { ...e.defaultVariants, ...z } : z;
  !u(m.twMergeConfig) && !x$1(m.twMergeConfig, v) && (q = true, v = m.twMergeConfig);
  let S = u(e == null ? void 0 : e.slots), T = u(O) ? {} : { base: N(s == null ? void 0 : s.base, S && (e == null ? void 0 : e.base)), ...O }, j = S ? T : _({ ...e == null ? void 0 : e.slots }, u(T) ? { base: s == null ? void 0 : s.base } : T), h$1 = u(e == null ? void 0 : e.compoundVariants) ? W : a(e == null ? void 0 : e.compoundVariants, W), V = (l$1) => {
    if (u(g$1) && u(O) && S) return M(k, l$1 == null ? void 0 : l$1.class, l$1 == null ? void 0 : l$1.className)(m);
    if (h$1 && !Array.isArray(h$1)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof h$1}`);
    if (C && !Array.isArray(C)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof C}`);
    let P = (a2, n2, t = [], i2) => {
      let r = t;
      if (typeof n2 == "string") r = r.concat(g(n2).split(" ").map((o) => `${a2}:${o}`));
      else if (Array.isArray(n2)) r = r.concat(n2.reduce((o, c) => o.concat(`${a2}:${c}`), []));
      else if (typeof n2 == "object" && typeof i2 == "string") {
        for (let o in n2) if (n2.hasOwnProperty(o) && o === i2) {
          let c = n2[o];
          if (c && typeof c == "string") {
            let u2 = g(c);
            r[i2] ? r[i2] = r[i2].concat(u2.split(" ").map((f) => `${a2}:${f}`)) : r[i2] = u2.split(" ").map((f) => `${a2}:${f}`);
          } else Array.isArray(c) && c.length > 0 && (r[i2] = c.reduce((u2, f) => u2.concat(`${a2}:${f}`), []));
        }
      }
      return r;
    }, D = (a$1, n2 = g$1, t = null, i2 = null) => {
      var L;
      let r = n2[a$1];
      if (!r || u(r)) return null;
      let o = (L = i2 == null ? void 0 : i2[a$1]) != null ? L : l$1 == null ? void 0 : l$1[a$1];
      if (o === null) return null;
      let c = l(o), u$1 = Array.isArray(m.responsiveVariants) && m.responsiveVariants.length > 0 || m.responsiveVariants === true, f = w == null ? void 0 : w[a$1], d = [];
      if (typeof c == "object" && u$1) for (let [E, Q] of Object.entries(c)) {
        let ne = r[Q];
        if (E === "initial") {
          f = Q;
          continue;
        }
        Array.isArray(m.responsiveVariants) && !m.responsiveVariants.includes(E) || (d = P(E, ne, d, t));
      }
      let $ = c != null && typeof c != "object" ? c : l(f), A = r[$ || "false"];
      return typeof d == "object" && typeof t == "string" && d[t] ? _(d, A) : d.length > 0 ? (d.push(A), t === "base" ? d.join(" ") : d) : A;
    }, p2 = () => g$1 ? Object.keys(g$1).map((a2) => D(a2, g$1)) : null, ee = (a2, n2) => {
      if (!g$1 || typeof g$1 != "object") return null;
      let t = new Array();
      for (let i2 in g$1) {
        let r = D(i2, g$1, a2, n2), o = a2 === "base" && typeof r == "string" ? r : r && r[a2];
        o && (t[t.length] = o);
      }
      return t;
    }, H = {};
    for (let a2 in l$1) l$1[a2] !== void 0 && (H[a2] = l$1[a2]);
    let I = (a2, n2) => {
      var i2;
      let t = typeof (l$1 == null ? void 0 : l$1[a2]) == "object" ? { [a2]: (i2 = l$1[a2]) == null ? void 0 : i2.initial } : {};
      return { ...w, ...H, ...t, ...n2 };
    }, J = (a2 = [], n2) => {
      let t = [];
      for (let { class: i2, className: r, ...o } of a2) {
        let c = true;
        for (let [u2, f] of Object.entries(o)) {
          let d = I(u2, n2)[u2];
          if (Array.isArray(f)) {
            if (!f.includes(d)) {
              c = false;
              break;
            }
          } else {
            let $ = (A) => A == null || A === false;
            if ($(f) && $(d)) continue;
            if (d !== f) {
              c = false;
              break;
            }
          }
        }
        c && (i2 && t.push(i2), r && t.push(r));
      }
      return t;
    }, te = (a2) => {
      let n2 = J(h$1, a2);
      if (!Array.isArray(n2)) return n2;
      let t = {};
      for (let i2 of n2) if (typeof i2 == "string" && (t.base = M(t.base, i2)(m)), typeof i2 == "object") for (let [r, o] of Object.entries(i2)) t[r] = M(t[r], o)(m);
      return t;
    }, ae = (a2) => {
      if (C.length < 1) return null;
      let n2 = {};
      for (let { slots: t = [], class: i2, className: r, ...o } of C) {
        if (!u(o)) {
          let c = true;
          for (let u2 of Object.keys(o)) {
            let f = I(u2, a2)[u2];
            if (f === void 0 || (Array.isArray(o[u2]) ? !o[u2].includes(f) : o[u2] !== f)) {
              c = false;
              break;
            }
          }
          if (!c) continue;
        }
        for (let c of t) n2[c] = n2[c] || [], n2[c].push([i2, r]);
      }
      return n2;
    };
    if (!u(O) || !S) {
      let a2 = {};
      if (typeof j == "object" && !u(j)) for (let n2 of Object.keys(j)) a2[n2] = (t) => {
        var i2, r;
        return M(j[n2], ee(n2, t), ((i2 = te(t)) != null ? i2 : [])[n2], ((r = ae(t)) != null ? r : [])[n2], t == null ? void 0 : t.class, t == null ? void 0 : t.className)(m);
      };
      return a2;
    }
    return M(k, p2(), J(h$1), l$1 == null ? void 0 : l$1.class, l$1 == null ? void 0 : l$1.className)(m);
  }, K = () => {
    if (!(!g$1 || typeof g$1 != "object")) return Object.keys(g$1);
  };
  return V.variantKeys = K(), V.extend = e, V.base = k, V.slots = j, V.variants = g$1, V.defaultVariants = w, V.compoundSlots = C, V.compoundVariants = h$1, V;
};
const accordion = ce({
  base: "w-full text-gray-500 dark:text-gray-400",
  variants: {
    flush: {
      true: "",
      false: "border border-gray-200 dark:border-gray-700 rounded-t-xl"
    }
  }
});
const accordionitem = ce({
  slots: {
    base: "group",
    button: "flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700 border-b",
    content: "border-b border-gray-200 dark:border-gray-700",
    active: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800",
    inactive: "text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800"
  },
  variants: {
    flush: {
      true: {
        button: "py-5",
        content: "py-5"
      },
      false: {
        button: "p-5 border-s border-e group-first:border-t",
        content: "p-5 border-s border-e"
      }
    },
    open: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      flush: true,
      open: true,
      class: {
        button: "text-gray-900 dark:text-white"
      }
    },
    {
      flush: true,
      open: false,
      class: {
        button: "text-gray-500 dark:text-gray-400"
      }
    }
  ],
  defaultVariants: {
    flush: false,
    open: false
  }
});
var root_3$4 = template(`<div><!></div>`);
var on_click$2 = (_2, alertStatus) => {
  alertStatus(false);
};
var root_6$2 = template(`<button type="button" class="m-0.5 -me-1.5 ms-1.5 whitespace-normal rounded p-0.5 text-primary-500 hover:bg-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-400 dark:hover:bg-primary-800 dark:hover:text-primary-300" aria-label="Remove badge"><span class="sr-only">Remove alert</span> <!></button>`);
var root_1$8 = template(`<div><!> <!> <!></div>`);
function Alert($$anchor, $$props) {
  push($$props, true);
  let alertStatus = prop($$props, "alertStatus", 15, true), color = prop($$props, "color", 3, "primary"), rounded = prop($$props, "rounded", 3, true), transition$1 = prop($$props, "transition", 3, fade), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "icon",
    "alertStatus",
    "closeIcon",
    "color",
    "rounded",
    "border",
    "class",
    "dismissable",
    "transition",
    "params",
    "onclick"
  ]);
  let divCls = derived(() => alert({
    color: color(),
    rounded: rounded(),
    border: $$props.border,
    icon: !!$$props.icon,
    dismissable: $$props.dismissable,
    className: $$props.class
  }));
  var fragment = comment();
  var node = first_child(fragment);
  if_block(node, alertStatus, ($$anchor2) => {
    var div = root_1$8();
    let attributes;
    var node_1 = child(div);
    if_block(node_1, () => $$props.icon, ($$anchor3) => {
      var fragment_1 = comment();
      var node_2 = first_child(fragment_1);
      snippet(node_2, () => $$props.icon);
      append($$anchor3, fragment_1);
    });
    var node_3 = sibling(node_1, 2);
    if_block(
      node_3,
      () => $$props.icon || $$props.dismissable,
      ($$anchor3) => {
        var div_1 = root_3$4();
        var node_4 = child(div_1);
        snippet(node_4, () => $$props.children);
        reset(div_1);
        append($$anchor3, div_1);
      },
      ($$anchor3) => {
        var fragment_2 = comment();
        var node_5 = first_child(fragment_2);
        snippet(node_5, () => $$props.children);
        append($$anchor3, fragment_2);
      }
    );
    var node_6 = sibling(node_3, 2);
    if_block(node_6, () => $$props.dismissable, ($$anchor3) => {
      var fragment_3 = comment();
      var node_7 = first_child(fragment_3);
      if_block(
        node_7,
        () => $$props.closeIcon,
        ($$anchor4) => {
          var button2 = root_6$2();
          button2.__click = [on_click$2, alertStatus];
          var node_8 = sibling(child(button2), 2);
          if_block(node_8, () => $$props.icon, ($$anchor5) => {
            var fragment_4 = comment();
            var node_9 = first_child(fragment_4);
            snippet(node_9, () => $$props.icon);
            append($$anchor5, fragment_4);
          });
          reset(button2);
          append($$anchor4, button2);
        },
        ($$anchor4) => {
          var fragment_5 = comment();
          var node_10 = first_child(fragment_5);
          if_block(
            node_10,
            () => $$props.onclick,
            ($$anchor5) => {
              CloseButton($$anchor5, {
                class: "-my-1.5 -me-1.5 ms-auto dark:hover:bg-gray-700",
                get color() {
                  return color();
                },
                ariaLabel: "Remove badge",
                get onclick() {
                  return $$props.onclick;
                }
              });
            },
            ($$anchor5) => {
              CloseButton($$anchor5, {
                class: "-my-1.5 -me-1.5 ms-auto dark:hover:bg-gray-700",
                get color() {
                  return color();
                },
                ariaLabel: "Remove alert",
                onclick: () => {
                  alertStatus(false);
                }
              });
            },
            true
          );
          append($$anchor4, fragment_5);
        }
      );
      append($$anchor3, fragment_3);
    });
    reset(div);
    template_effect(() => attributes = set_attributes(div, attributes, {
      role: "alert",
      ...restProps,
      class: get(divCls)
    }));
    transition(3, div, transition$1, () => $$props.params);
    append($$anchor2, div);
  });
  append($$anchor, fragment);
  pop();
}
delegate(["click"]);
const alert = ce({
  base: "p-4 gap-3 text-sm",
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: "bg-primary-50 dark:bg-gray-800 text-primary-800 dark:text-primary-400",
      secondary: "bg-secondary-50 dark:bg-secondary-800 text-secondary-800 dark:text-secondary-400",
      gray: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
      red: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      orange: "bg-orange-100 text-orange-500 hover:bg-orange-200 focus:ring-orange-400 dark:bg-orange-200 dark:text-orange-600 dark:hover:bg-orange-300",
      amber: "bg-amber-100 text-amber-500 hover:bg-amber-200 focus:ring-amber-400 dark:bg-amber-200 dark:text-amber-600 dark:hover:bg-amber-300",
      yellow: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
      lime: "bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300",
      green: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      emerald: "bg-emerald-100 text-emerald-500 hover:bg-emerald-200 focus:ring-emerald-400 dark:bg-emerald-200 dark:text-emerald-600 dark:hover:bg-emerald-300",
      teal: "bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300",
      cyan: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
      sky: "bg-sky-100 text-sky-500 hover:bg-sky-200 focus:ring-sky-400 dark:bg-sky-200 dark:text-sky-600 dark:hover:bg-sky-300",
      blue: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
      indigo: "bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300",
      violet: "bg-violet-100 text-violet-500 hover:bg-violet-200 focus:ring-violet-400 dark:bg-violet-200 dark:text-violet-600 dark:hover:bg-violet-300",
      purple: "bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300",
      fuchsia: "bg-fuchsia-100 text-fuchsia-500 hover:bg-fuchsia-200 focus:ring-fuchsia-400 dark:bg-fuchsia-200 dark:text-fuchsia-600 dark:hover:bg-fuchsia-300",
      pink: "bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300",
      rose: "bg-rose-100 text-rose-500 hover:bg-rose-200 focus:ring-rose-400 dark:bg-rose-200 dark:text-rose-600 dark:hover:bg-rose-300"
    },
    rounded: {
      true: "rounded-lg"
    },
    border: {
      true: "border"
    },
    icon: {
      true: "flex items-center"
    },
    dismissable: {
      true: "flex items-center"
    }
  },
  compoundVariants: [
    // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    {
      border: true,
      color: "primary",
      class: "border-primary-500 dark:border-primary-200 divide-primary-500 dark:divide-primary-200"
    },
    {
      border: true,
      color: "secondary",
      class: "border-secondary-500 dark:border-secondary-200 divide-secondary-500 dark:divide-secondary-200"
    },
    {
      border: true,
      color: "gray",
      class: "border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800"
    },
    {
      border: true,
      color: "red",
      class: "border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800"
    },
    {
      border: true,
      color: "orange",
      class: "border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800"
    },
    {
      border: true,
      color: "amber",
      class: "border-amber-300 dark:border-amber-800 divide-amber-300 dark:divide-amber-800"
    },
    {
      border: true,
      color: "yellow",
      class: "border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800"
    },
    {
      border: true,
      color: "lime",
      class: "border-lime-300 dark:border-lime-800 divide-lime-300 dark:divide-lime-800"
    },
    {
      border: true,
      color: "green",
      class: "border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800"
    },
    {
      border: true,
      color: "emerald",
      class: "border-emerald-300 dark:border-emerald-800 divide-emerald-300 dark:divide-emerald-800"
    },
    {
      border: true,
      color: "teal",
      class: "border-teal-300 dark:border-teal-800 divide-teal-300 dark:divide-teal-800"
    },
    {
      border: true,
      color: "cyan",
      class: "border-cyan-300 dark:border-cyan-800 divide-cyan-300 dark:divide-cyan-800"
    },
    {
      border: true,
      color: "sky",
      class: "border-sky-300 dark:border-sky-800 divide-sky-300 dark:divide-sky-800"
    },
    {
      border: true,
      color: "blue",
      class: "border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800"
    },
    {
      border: true,
      color: "indigo",
      class: "border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800"
    },
    //  violet, purple, fuchsia, pink, rose
    {
      border: true,
      color: "violet",
      class: "border-violet-300 dark:border-violet-800 divide-violet-300 dark:divide-violet-800"
    },
    {
      border: true,
      color: "purple",
      class: "border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800"
    },
    {
      border: true,
      color: "fuchsia",
      class: "border-fuchsia-300 dark:border-fuchsia-800 divide-fuchsia-300 dark:divide-fuchsia-800"
    },
    {
      border: true,
      color: "pink",
      class: "border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800"
    },
    {
      border: true,
      color: "rose",
      class: "border-rose-300 dark:border-rose-800 divide-rose-300 dark:divide-rose-800"
    }
  ],
  defaultVariants: {
    color: "primary",
    rounded: true
  }
});
const avatar = ce({
  base: "relative flex items-center justify-center bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300",
  variants: {
    cornerStyle: {
      rounded: "rounded",
      circular: "rounded-full"
    },
    border: {
      true: "p-1 ring-2 ring-gray-300 dark:ring-gray-500",
      false: ""
    },
    stacked: {
      true: "border-2 -ms-4 border-white dark:border-gray-800",
      false: ""
    },
    size: {
      xs: "w-6 h-6",
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-20 h-20",
      xl: "w-36 h-36"
    }
  },
  defaultVariants: {
    cornerStyle: "circular",
    border: false,
    stacked: false,
    size: "md"
  }
});
var root_2$4 = template(`<a><!></a>`);
var on_click$1 = (_2, badgeStatus) => {
  badgeStatus(false);
};
var root_5$1 = template(`<button type="button" class="m-0.5 -me-1.5 ms-1.5 whitespace-normal rounded p-0.5 text-primary-500 hover:bg-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-400 dark:hover:bg-primary-800 dark:hover:text-primary-300" aria-label="Remove badge"><span class="sr-only">Remove badge</span> <!></button>`);
var root_1$7 = template(`<div><!> <!></div>`);
function Badge($$anchor, $$props) {
  push($$props, true);
  let badgeStatus = prop($$props, "badgeStatus", 15, true), color = prop($$props, "color", 3, "primary"), large = prop($$props, "large", 3, false), dismissable = prop($$props, "dismissable", 3, false), transition$1 = prop($$props, "transition", 3, fade), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "icon",
    "badgeStatus",
    "color",
    "large",
    "dismissable",
    "class",
    "border",
    "href",
    "target",
    "rounded",
    "transition",
    "params",
    "aClass",
    "onclick"
  ]);
  const $$d = derived(() => badge({
    color: color(),
    size: large() ? "large" : "small",
    border: $$props.border,
    rounded: $$props.rounded
  })), base = derived(() => get($$d).base), hrefClass = derived(() => get($$d).hrefClass);
  var fragment = comment();
  var node = first_child(fragment);
  if_block(node, badgeStatus, ($$anchor2) => {
    var div = root_1$7();
    let attributes;
    var node_1 = child(div);
    if_block(
      node_1,
      () => $$props.href,
      ($$anchor3) => {
        var a2 = root_2$4();
        const class_derived = derived(() => get(hrefClass)({ class: $$props.aClass }));
        var node_2 = child(a2);
        snippet(node_2, () => $$props.children);
        reset(a2);
        template_effect(() => {
          set_attribute(a2, "href", $$props.href);
          set_attribute(a2, "target", $$props.target);
          set_class(a2, get(class_derived));
        });
        append($$anchor3, a2);
      },
      ($$anchor3) => {
        var fragment_1 = comment();
        var node_3 = first_child(fragment_1);
        snippet(node_3, () => $$props.children);
        append($$anchor3, fragment_1);
      }
    );
    var node_4 = sibling(node_1, 2);
    if_block(node_4, dismissable, ($$anchor3) => {
      var fragment_2 = comment();
      var node_5 = first_child(fragment_2);
      if_block(
        node_5,
        () => $$props.icon,
        ($$anchor4) => {
          var button2 = root_5$1();
          button2.__click = [on_click$1, badgeStatus];
          var node_6 = sibling(child(button2), 2);
          snippet(node_6, () => $$props.icon);
          reset(button2);
          append($$anchor4, button2);
        },
        ($$anchor4) => {
          var fragment_3 = comment();
          var node_7 = first_child(fragment_3);
          if_block(
            node_7,
            () => $$props.onclick,
            ($$anchor5) => {
              var size = derived(() => large() ? "sm" : "xs");
              CloseButton($$anchor5, {
                class: "-me-1.5 ms-1.5",
                get color() {
                  return color();
                },
                get size() {
                  return get(size);
                },
                ariaLabel: "Remove badge",
                get onclick() {
                  return $$props.onclick;
                }
              });
            },
            ($$anchor5) => {
              var size_1 = derived(() => large() ? "sm" : "xs");
              CloseButton($$anchor5, {
                class: "-me-1.5 ms-1.5",
                get color() {
                  return color();
                },
                get size() {
                  return get(size_1);
                },
                ariaLabel: "Remove badge",
                onclick: () => {
                  badgeStatus(false);
                }
              });
            },
            true
          );
          append($$anchor4, fragment_3);
        }
      );
      append($$anchor3, fragment_2);
    });
    reset(div);
    template_effect(() => attributes = set_attributes(div, attributes, {
      ...restProps,
      class: get(base)({ className: $$props.class })
    }));
    transition(3, div, transition$1, () => $$props.params);
    append($$anchor2, div);
  });
  append($$anchor, fragment);
  pop();
}
delegate(["click"]);
const badge = ce({
  slots: {
    hrefClass: "flex align-middle",
    base: "font-medium inline-flex items-center justify-center px-2.5 py-0.5"
  },
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: { base: "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300" },
      secondary: { base: "bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-300" },
      gray: { base: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300" },
      red: { base: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
      orange: { base: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
      amber: { base: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300" },
      yellow: { base: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
      lime: { base: "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300" },
      green: { base: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
      emerald: { base: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300" },
      teal: { base: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300" },
      cyan: { base: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300" },
      sky: { base: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300" },
      blue: { base: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      indigo: { base: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300" },
      violet: { base: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300" },
      fuchsia: { base: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300" },
      purple: { base: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" },
      pink: { base: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300" },
      rose: { base: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300" }
    },
    size: {
      small: "text-xs",
      large: "text-sm"
    },
    border: {
      true: "border"
    },
    rounded: {
      true: "rounded-full",
      false: "rounded"
    }
  },
  compoundVariants: [
    {
      border: true,
      color: "primary",
      class: "bg-primary-100 text-primary-800 dark:bg-primary-700/50 dark:text-primary-400 border-primary-400 dark:border-primary-400"
    },
    {
      border: true,
      color: "secondary",
      class: "bg-secondary-100 text-secondary-800 dark:bg-secondary-700/50 dark:text-secondary-400 border-secondary-400 dark:border-secondary-400"
    },
    {
      border: true,
      color: "gray",
      class: "bg-gray-100 text-gray-800 dark:bg-gray-700/50 dark:text-gray-400 border-gray-400 dark:border-gray-400"
    },
    {
      border: true,
      color: "red",
      class: "bg-red-100 text-red-800 dark:bg-red-700/50 dark:text-red-400 border-red-400 dark:border-red-400"
    },
    {
      border: true,
      color: "orange",
      class: "bg-orange-100 text-orange-800 dark:bg-orange-700/50 dark:text-orange-400 border-orange-400 dark:border-orange-400"
    },
    {
      border: true,
      color: "amber",
      class: "bg-amber-100 text-amber-800 dark:bg-amber-700/50 dark:text-amber-400 border-amber-400 dark:border-amber-400"
    },
    {
      border: true,
      color: "yellow",
      class: "bg-yellow-100 text-yellow-800 dark:bg-yellow-700/50 dark:text-yellow-300 border-yellow-300 dark:border-yellow-300"
    },
    {
      border: true,
      color: "lime",
      class: "bg-lime-100 text-lime-800 dark:bg-lime-700/50 dark:text-lime-400 border-lime-400 dark:border-lime-400"
    },
    {
      border: true,
      color: "green",
      class: "bg-green-100 text-green-800 dark:bg-green-700/50 dark:text-green-400 border-green-400 dark:border-green-400"
    },
    {
      border: true,
      color: "emerald",
      class: "bg-emerald-100 text-emerald-800 dark:bg-emerald-700/50 dark:text-emerald-400 border-emerald-400 dark:border-emerald-400"
    },
    {
      border: true,
      color: "teal",
      class: "bg-teal-100 text-teal-800 dark:bg-teal-700/50 dark:text-teal-400 border-teal-400 dark:border-teal-400"
    },
    {
      border: true,
      color: "cyan",
      class: "bg-cyan-100 text-cyan-800 dark:bg-cyan-700/50 dark:text-cyan-400 border-cyan-400 dark:border-cyan-400"
    },
    {
      border: true,
      color: "sky",
      class: "bg-sky-100 text-sky-800 dark:bg-sky-700/50 dark:text-sky-400 border-sky-400 dark:border-sky-400"
    },
    {
      border: true,
      color: "blue",
      class: "bg-blue-100 text-blue-800 dark:bg-blue-700/50 dark:text-blue-400 border-blue-400 dark:border-blue-400"
    },
    {
      border: true,
      color: "indigo",
      class: "bg-indigo-100 text-indigo-800 dark:bg-indigo-700/50 dark:text-indigo-400 border-indigo-400 dark:border-indigo-400"
    },
    {
      border: true,
      color: "violet",
      class: "bg-violet-100 text-violet-800 dark:bg-violet-700/50 dark:text-violet-400 border-violet-400 dark:border-violet-400"
    },
    {
      border: true,
      color: "purple",
      class: "bg-purple-100 text-purple-800 dark:bg-purple-700/50 dark:text-purple-400 border-purple-400 dark:border-purple-400"
    },
    {
      border: true,
      color: "fuchsia",
      class: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-700/50 dark:text-fuchsia-400 border-fuchsia-400 dark:border-fuchsia-400"
    },
    {
      border: true,
      color: "pink",
      class: "bg-pink-100 text-pink-800 dark:bg-pink-700/50 dark:text-pink-400 border-pink-400 dark:border-pink-400"
    },
    {
      border: true,
      color: "rose",
      class: "bg-rose-100 text-rose-800 dark:bg-rose-700/50 dark:text-rose-400 border-rose-400 dark:border-rose-400"
    },
    {
      href: true,
      color: "primary",
      class: "hover:bg-primary-200"
    },
    {
      href: true,
      color: "secondary",
      class: "hover:bg-secondary-200"
    },
    {
      href: true,
      color: "gray",
      class: "hover:bg-gray-200"
    },
    {
      href: true,
      color: "red",
      class: "hover:bg-red-200"
    },
    {
      href: true,
      color: "orange",
      class: "hover:bg-orange-200"
    },
    {
      href: true,
      color: "amber",
      class: "hover:bg-amber-200"
    },
    {
      href: true,
      color: "yellow",
      class: "hover:bg-yellow-200"
    },
    {
      href: true,
      color: "lime",
      class: "hover:bg-lime-200"
    },
    {
      href: true,
      color: "green",
      class: "hover:bg-green-200"
    },
    {
      href: true,
      color: "emerald",
      class: "hover:bg-emerald-200"
    },
    {
      href: true,
      color: "teal",
      class: "hover:bg-teal-200"
    },
    {
      href: true,
      color: "cyan",
      class: "hover:bg-cyan-200"
    },
    {
      href: true,
      color: "sky",
      class: "hover:bg-sky-200"
    },
    {
      href: true,
      color: "blue",
      class: "hover:bg-blue-200"
    },
    {
      href: true,
      color: "indigo",
      class: "hover:bg-indigo-200"
    },
    {
      href: true,
      color: "violet",
      class: "hover:bg-violet-200"
    },
    {
      href: true,
      color: "purple",
      class: "hover:bg-purple-200"
    },
    {
      href: true,
      color: "fuchsia",
      class: "hover:bg-fuchsia-200"
    },
    {
      href: true,
      color: "pink",
      class: "hover:bg-pink-200"
    },
    {
      href: true,
      color: "rose",
      class: "hover:bg-rose-200"
    }
  ],
  defaultVariants: {
    color: "primary",
    size: "small",
    rounded: false
  }
});
const banner = ce({
  slots: {
    base: "z-10 flex justify-between p-4 dark:bg-gray-700 dark:border-gray-600",
    insideDiv: "flex items-center"
  },
  variants: {
    position: {
      // "static" | "fixed" | "absolute" | "relative" | "sticky"
      static: { base: "static" },
      fixed: { base: "fixed" },
      absolute: { base: "absolute" },
      relative: { base: "relative" },
      sticky: { base: "sticky" }
    },
    bannerType: {
      // "default" | "bottom" | "cta" | "signup" | "info"
      default: {
        base: "top-0 start-0 w-full border-b border-gray-200 bg-gray-50",
        insideDiv: "mx-auto"
      },
      bottom: {
        base: "bottom-0 start-0 w-full border-t border-gray-200 bg-gray-50",
        insideDiv: "mx-auto"
      },
      cta: {
        base: "flex-col md:flex-row w-[calc(100%-2rem)] -translate-x-1/2 rtl:translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl start-1/2 top-6",
        insideDiv: "flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0"
      },
      signup: {
        base: "top-0 start-0 w-full border-b border-gray-200 bg-gray-50",
        insideDiv: "flex-shrink-0 w-full mx-auto sm:w-auto"
      },
      info: {
        base: "top-0 start-0 flex-col w-full border-b border-gray-200 md:flex-row bg-gray-50",
        insideDiv: "flex-shrink-0"
      }
    },
    color: {
      // 'primary' secondary, | 'gray' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'
      primary: { base: "bg-primary-50 dark:bg-primary-900" },
      secondary: { base: "bg-secondary-50 dark:bg-secondary-900" },
      gray: { base: "bg-gray-50 dark:bg-gray-700" },
      red: { base: "bg-red-50 dark:bg-red-900" },
      orange: { base: "bg-orange-50 dark:bg-orange-900" },
      amber: { base: "bg-amber-50 dark:bg-amber-900" },
      yellow: { base: "bg-yellow-50 dark:bg-yellow-900" },
      lime: { base: "bg-lime-50 dark:bg-lime-900" },
      green: { base: "bg-green-50 dark:bg-green-900" },
      emerald: { base: "bg-emerald-50 dark:bg-emerald-900" },
      teal: { base: "bg-teal-50 dark:bg-teal-900" },
      cyan: { base: "bg-cyan-50 dark:bg-cyan-900" },
      sky: { base: "bg-sky-50 dark:bg-sky-900" },
      blue: { base: "bg-blue-50 dark:bg-blue-900" },
      indigo: { base: "bg-indigo-50 dark:bg-indigo-900" },
      violet: { base: "bg-violet-50 dark:bg-violet-900" },
      purple: { base: "bg-purple-50 dark:bg-purple-900" },
      fuchsia: { base: "bg-fuchsia-50 dark:bg-fuchsia-900" },
      pink: { base: "bg-pink-50 dark:bg-pink-900" },
      rose: { base: "bg-rose-50 dark:bg-rose-900" }
    }
  },
  defaultVariants: {
    position: "sticky",
    bannerType: "default"
  }
});
const bottomNav = ce({
  slots: {
    outer: "w-full z-30 border-gray-200 dark:bg-gray-700 dark:border-gray-600",
    inner: "grid h-full max-w-lg mx-auto"
  },
  variants: {
    position: {
      static: { outer: "static" },
      fixed: { outer: "fixed" },
      absolute: { outer: "absolute" },
      relative: { outer: "relative" },
      sticky: { outer: "sticky" }
    },
    navType: {
      default: { outer: "bottom-0 start-0 h-16 bg-white border-t" },
      border: { outer: "bottom-0 start-0 h-16 bg-white border-t" },
      application: {
        outer: "h-16 max-w-lg -translate-x-1/2 rtl:translate-x-1/2 bg-white border rounded-full bottom-4 start-1/2"
      },
      pagination: {
        outer: "bottom-0 h-16 -translate-x-1/2 rtl:translate-x-1/2 bg-white border-t start-1/2"
      },
      group: {
        outer: "bottom-0 -translate-x-1/2 rtl:translate-x-1/2 bg-white border-t start-1/2"
      },
      card: { outer: "bottom-0 start-0 h-16 bg-white border-t" },
      meeting: {
        outer: "bottom-0 start-0 grid h-16 grid-cols-1 px-8 bg-white border-t md:grid-cols-3",
        inner: "flex items-center justify-center mx-auto"
      },
      video: {
        outer: "bottom-0 start-0 grid h-24 grid-cols-1 px-8 bg-white border-t md:grid-cols-3",
        inner: "flex items-center w-full"
      }
    }
  },
  defaultVariants: {
    position: "fixed",
    navType: "default"
  }
});
const bottomNavItem = ce({
  slots: {
    base: "inline-flex flex-col items-center justify-center",
    span: "text-sm"
  },
  variants: {
    navType: {
      default: {
        base: "px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group",
        span: "text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
      },
      border: {
        base: "px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600",
        span: "text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
      },
      application: {
        base: "",
        span: "sr-only"
      },
      pagination: {
        base: "px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group",
        span: "sr-only"
      },
      group: {
        base: "p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group",
        span: "sr-only"
      },
      card: {
        base: "px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group",
        span: "text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
      },
      meeting: {
        base: "",
        span: ""
      },
      video: {
        base: "",
        span: ""
      }
    },
    appBtnPosition: {
      left: {
        base: "px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
      },
      middle: { base: "px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" },
      right: {
        base: "px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
      }
    }
  },
  defaultVariants: {
    navType: "default",
    appBtnPosition: "middle",
    active: false
  }
});
const bottomnavheader = ce({
  slots: {
    innerDiv: "grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600",
    outerDiv: "w-full"
  }
});
const bottomnavheaderitem = ce({
  base: "px-5 py-1.5 text-xs font-medium rounded-lg",
  variants: {
    active: {
      true: "text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900",
      false: "text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
    }
  }
});
const breadcrumb = ce({
  slots: {
    base: "flex",
    list: "inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-3 rtl:space-x-reverse",
    item: "inline-flex items-center",
    icon: "h-6 w-6 text-gray-400 rtl:-scale-x-100"
  },
  variants: {
    solid: {
      true: {
        base: "px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
      },
      false: ""
    },
    home: {
      true: "",
      false: ""
    },
    hasHref: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      home: true,
      class: {
        item: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
        icon: "me-2 h-4 w-4"
      }
    },
    {
      home: false,
      hasHref: true,
      class: {
        item: "ms-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ms-2 dark:text-gray-400 dark:hover:text-white"
      }
    },
    {
      home: false,
      hasHref: false,
      class: {
        item: "ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
      }
    }
  ],
  defaultVariants: {
    solid: false
  }
});
const buttonGroup = ce({
  base: "inline-flex rounded-lg shadow-sm",
  variants: {
    size: {
      sm: "scale-90",
      md: "scale-100",
      lg: "scale-110"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
const button = ce({
  base: "text-center font-medium inline-flex items-center justify-center",
  variants: {
    color: {
      // "primary" | "dark" | "alternative" | "light" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose"
      primary: "text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus-within:ring-primary-300 dark:focus-within:ring-primary-800",
      dark: "text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 focus-within:ring-gray-300 dark:focus-within:ring-gray-700",
      alternative: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus-within:text-primary-700 dark:focus-within:text-white dark:hover:text-white focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
      light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
      secondary: "text-white bg-secondary-700 hover:bg-secondary-800 dark:bg-secondary-600 dark:hover:bg-secondary-700 focus-within:ring-secondary-300 dark:focus-within:ring-secondary-800",
      gray: "text-white bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 focus-within:ring-gray-300 dark:focus-within:ring-gray-800",
      red: "text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 focus-within:ring-red-300 dark:focus-within:ring-red-900",
      orange: "text-white bg-orange-700 hover:bg-orange-800 dark:bg-orange-600 dark:hover:bg-orange-700 focus-within:ring-orange-300 dark:focus-within:ring-orange-900",
      amber: "text-white bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700 focus-within:ring-amber-300 dark:focus-within:ring-amber-900",
      yellow: "text-white bg-yellow-400 hover:bg-yellow-500 focus-within:ring-yellow-300 dark:focus-within:ring-yellow-900",
      lime: "text-white bg-lime-700 hover:bg-lime-800 dark:bg-lime-600 dark:hover:bg-lime-700 focus-within:ring-lime-300 dark:focus-within:ring-lime-800",
      green: "text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 focus-within:ring-green-300 dark:focus-within:ring-green-800",
      emerald: "text-white bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 focus-within:ring-emerald-300 dark:focus-within:ring-emerald-800",
      teal: "text-white bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 focus-within:ring-teal-300 dark:focus-within:ring-teal-800",
      cyan: "text-white bg-cyan-700 hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus-within:ring-cyan-300 dark:focus-within:ring-cyan-800",
      sky: "text-white bg-sky-700 hover:bg-sky-800 dark:bg-sky-600 dark:hover:bg-sky-700 focus-within:ring-sky-300 dark:focus-within:ring-sky-800",
      blue: "text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus-within:ring-blue-300 dark:focus-within:ring-blue-800",
      indigo: "text-white bg-indigo-700 hover:bg-indigo-800 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus-within:ring-indigo-300 dark:focus-within:ring-indigo-800",
      violet: "text-white bg-violet-700 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-700 focus-within:ring-violet-300 dark:focus-within:ring-violet-800",
      purple: "text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",
      fuchsia: "text-white bg-fuchsia-700 hover:bg-fuchsia-800 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700",
      pink: "text-white bg-pink-700 hover:bg-pink-800 dark:bg-pink-600 dark:hover:bg-pink-700",
      rose: "text-white bg-rose-700 hover:bg-rose-800 dark:bg-rose-600 dark:hover:bg-rose-700"
    },
    size: {
      xs: "px-3 py-2 text-xs",
      sm: "px-4 py-2 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-5 py-3 text-base",
      xl: "px-6 py-3.5 text-base"
    },
    group: {
      true: "focus-within:ring-2 focus-within:z-10",
      false: "focus-within:ring-4 focus-within:outline-none"
    },
    outline: {
      true: "border border-gray-300 dark:border-gray-400"
    },
    shadow: {
      true: "shadow-lg"
    },
    disabled: {
      true: "cursor-not-allowed opacity-50"
    },
    pill: {
      true: "rounded-full"
    },
    checked: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    // {
    //   outline: true,
    //   class: 'border dark:border-gray-900'
    // },
    // dark, alternative, light
    // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    {
      shadow: true,
      color: "dark",
      class: "shadow-gray-500/50 dark:shadow-gray-800/80"
    },
    {
      shadow: true,
      color: "alternative",
      class: "shadow-gray-500/50 dark:shadow-gray-800/80"
    },
    {
      shadow: true,
      color: "light",
      class: "shadow-gray-500/50 dark:shadow-gray-800/80"
    },
    {
      shadow: true,
      color: "primary",
      class: "shadow-primary-500/50 dark:shadow-primary-800/80"
    },
    {
      shadow: true,
      color: "secondary",
      class: "shadow-secondary-500/50 dark:shadow-secondary-800/80"
    },
    {
      shadow: true,
      color: "gray",
      class: "shadow-gray-500/50 dark:shadow-gray-800/80"
    },
    {
      shadow: true,
      color: "red",
      class: "shadow-red-500/50 dark:shadow-red-800/80"
    },
    {
      shadow: true,
      color: "orange",
      class: "shadow-orange-500/50 dark:shadow-orange-800/80"
    },
    {
      shadow: true,
      color: "amber",
      class: "shadow-amber-500/50 dark:shadow-amber-800/80"
    },
    {
      shadow: true,
      color: "yellow",
      class: "shadow-yellow-500/50 dark:shadow-yellow-800/80"
    },
    {
      shadow: true,
      color: "lime",
      class: "shadow-lime-500/50 dark:shadow-lime-800/80"
    },
    {
      shadow: true,
      color: "green",
      class: "shadow-green-500/50 dark:shadow-green-800/80"
    },
    {
      shadow: true,
      color: "emerald",
      class: "shadow-emerald-500/50 dark:shadow-emerald-800/80"
    },
    {
      shadow: true,
      color: "teal",
      class: "shadow-teal-500/50 dark:shadow-teal-800/80"
    },
    {
      shadow: true,
      color: "cyan",
      class: "shadow-cyan-500/50 dark:shadow-cyan-800/80"
    },
    {
      shadow: true,
      color: "sky",
      class: "shadow-sky-500/50 dark:shadow-sky-800/80"
    },
    {
      shadow: true,
      color: "blue",
      class: "shadow-blue-500/50 dark:shadow-blue-800/80"
    },
    {
      shadow: true,
      color: "indigo",
      class: "shadow-indigo-500/50 dark:shadow-indigo-800/80"
    },
    {
      shadow: true,
      color: "violet",
      class: "shadow-violet-500/50 dark:shadow-violet-800/80"
    },
    {
      shadow: true,
      color: "purple",
      class: "shadow-purple-500/50 dark:shadow-purple-800/80"
    },
    {
      shadow: true,
      color: "fuchsia",
      class: "shadow-fuchsia-500/50 dark:shadow-fuchsia-800/80"
    },
    {
      shadow: true,
      color: "pink",
      class: "shadow-pink-500/50 dark:shadow-pink-800/80"
    },
    {
      shadow: true,
      color: "rose",
      class: "shadow-rose-500/50 dark:shadow-rose-800/80"
    },
    {
      color: "alternative",
      group: true,
      class: "dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600"
    },
    {
      color: "alternative",
      group: true,
      class: "dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-700"
    },
    {
      outline: true,
      color: "dark",
      group: true,
      class: "bg-gray-900 border-gray-800 dark:border-white dark:bg-gray-600"
    },
    {
      outline: true,
      color: "dark",
      group: true,
      class: "dark:text-gray-400 dark:border-gray-700"
    },
    {
      outline: true,
      group: true,
      class: "[&:not(:first-child)]:-ms-px"
    },
    {
      color: "alternative",
      group: true,
      class: "[&:not(:first-child)]:-ms-px"
    },
    {
      color: "light",
      group: true,
      class: "[&:not(:first-child)]:-ms-px"
    },
    {
      group: true,
      pill: true,
      class: "rounded-none first:rounded-s-full last:rounded-e-full"
    },
    {
      group: true,
      pill: false,
      class: "rounded-none first:rounded-s-lg last:rounded-e-lg"
    },
    {
      group: false,
      pill: true,
      class: "rounded-full"
    },
    {
      group: false,
      pill: false,
      class: "rounded-lg"
    }
  ]
});
const gradientButton = ce({
  slots: {
    base: "inline-flex items-center justify-center transition-all duration-75 ease-in text-white bg-gradient-to-r ",
    outlineWrapper: "inline-flex items-center justify-center w-full !border-0"
  },
  variants: {
    color: {
      blue: {
        base: "from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800"
      },
      green: {
        base: "from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800"
      },
      cyan: { base: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800" },
      teal: { base: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800" },
      lime: { base: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800" },
      red: { base: "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800" },
      pink: { base: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-pink-300 dark:focus:ring-pink-800" },
      purple: { base: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800" },
      purpleToBlue: { base: "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800" },
      cyanToBlue: { base: "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800" },
      greenToBlue: { base: "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800" },
      purpleToPink: { base: "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800" },
      pinkToOrange: { base: "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800" },
      tealToLime: { base: "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-lime-200 dark:focus:ring-teal-700" },
      redToYellow: { base: "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400" }
    },
    outline: {
      true: {
        base: "p-0.5",
        outlineWrapper: "bg-white !text-gray-900 dark:bg-gray-900 dark:!text-white hover:bg-transparent hover:!text-inherit group-hover:!bg-opacity-0 group-hover:!text-inherit"
      }
    },
    pill: {
      true: {
        base: "rounded-full",
        outlineWrapper: "rounded-full"
      },
      false: {
        base: "rounded-lg",
        outlineWrapper: "rounded-lg"
      }
    },
    shadow: {
      true: {
        base: "shadow-lg"
      }
    },
    group: {
      true: "rounded-none",
      false: ""
    },
    disabled: {
      true: { base: "opacity-50 cursor-not-allowed" }
    }
  },
  compoundVariants: [
    {
      shadow: true,
      color: "blue",
      class: { base: "shadow-blue-500/50 dark:shadow-blue-800/80" }
    },
    {
      shadow: true,
      color: "green",
      class: { base: "shadow-green-500/50 dark:shadow-green-800/80" }
    },
    {
      shadow: true,
      color: "cyan",
      class: { base: "shadow-cyan-500/50 dark:shadow-cyan-800/80" }
    },
    {
      shadow: true,
      color: "teal",
      class: { base: "shadow-teal-500/50 dark:shadow-teal-800/80" }
    },
    {
      shadow: true,
      color: "lime",
      class: { base: "shadow-lime-500/50 dark:shadow-lime-800/80" }
    },
    {
      shadow: true,
      color: "red",
      class: { base: "shadow-red-500/50 dark:shadow-red-800/80" }
    },
    {
      shadow: true,
      color: "pink",
      class: { base: "shadow-pink-500/50 dark:shadow-pink-800/80" }
    },
    {
      shadow: true,
      color: "purple",
      class: { base: "shadow-purple-500/50 dark:shadow-purple-800/80" }
    },
    {
      shadow: true,
      color: "purpleToBlue",
      class: { base: "shadow-blue-500/50 dark:shadow-blue-800/80" }
    },
    {
      shadow: true,
      color: "cyanToBlue",
      class: { base: "shadow-cyan-500/50 dark:shadow-cyan-800/80" }
    },
    {
      shadow: true,
      color: "greenToBlue",
      class: { base: "shadow-green-500/50 dark:shadow-green-800/80" }
    },
    {
      shadow: true,
      color: "purpleToPink",
      class: { base: "shadow-purple-500/50 dark:shadow-purple-800/80" }
    },
    {
      shadow: true,
      color: "pinkToOrange",
      class: { base: "shadow-pink-500/50 dark:shadow-pink-800/80" }
    },
    {
      shadow: true,
      color: "tealToLime",
      class: { base: "shadow-lime-500/50 dark:shadow-teal-800/80" }
    },
    {
      shadow: true,
      color: "redToYellow",
      class: { base: "shadow-red-500/50 dark:shadow-red-800/80" }
    },
    {
      group: true,
      pill: true,
      class: "first:rounded-s-full last:rounded-e-full"
    },
    {
      group: true,
      pill: false,
      class: "first:rounded-s-lg last:rounded-e-lg"
    }
  ]
});
const card = ce({
  slots: {
    base: "w-full flex max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700",
    image: "rounded-t-lg",
    content: ""
  },
  variants: {
    size: {
      xs: { base: "max-w-xs" },
      sm: { base: "max-w-sm" },
      md: { base: "max-w-lg" },
      lg: { base: "max-w-2xl" },
      xl: { base: "max-w-screen-xl" }
    },
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      gray: { base: "border-gray-200 dark:bg-gray-800 dark:border-gray-700" },
      primary: { base: "border-primary-200 bg-primary-400 dark:bg-primary-800 dark:border-primary-700" },
      secondary: { base: "border-secondary-200 bg-secondary-400 dark:bg-secondary-800 dark:border-secondary-700" },
      red: { base: "border-red-200 bg-red-400 dark:bg-red-800 dark:border-red-700" },
      orange: { base: "border-orange-200 bg-orange-400 dark:bg-orange-800 dark:border-orange-700" },
      amber: { base: "border-amber-200 bg-amber-400 dark:bg-amber-800 dark:border-amber-700" },
      yellow: { base: "border-yellow-200 bg-yellow-400 dark:bg-yellow-800 dark:border-yellow-700" },
      lime: { base: "border-lime-200 bg-lime-400 dark:bg-lime-800 dark:border-lime-700" },
      green: { base: "border-green-200 bg-green-400 dark:bg-green-800 dark:border-green-700" },
      emerald: { base: "border-emerald-200 bg-emerald-400 dark:bg-emerald-800 dark:border-emerald-700" },
      teal: { base: "border-teal-200 bg-teal-400 dark:bg-teal-800 dark:border-teal-700" },
      cyan: { base: "border-cyan-200 bg-cyan-400 dark:bg-cyan-800 dark:border-cyan-700" },
      sky: { base: "border-sky-200 bg-sky-400 dark:bg-sky-800 dark:border-sky-700" },
      blue: { base: "border-blue-200 bg-blue-400 dark:bg-blue-800 dark:border-blue-700" },
      indigo: { base: "border-indigo-200 bg-indigo-400 dark:bg-indigo-800 dark:border-indigo-700" },
      violet: { base: "border-violet-200 bg-violet-400 dark:bg-violet-800 dark:border-violet-700" },
      purple: { base: "border-purple-200 bg-purple-400 dark:bg-purple-800 dark:border-purple-700" },
      fuchsia: { base: "border-fuchsia-200 bg-fuchsia-400 dark:bg-fuchsia-800 dark:border-fuchsia-700" },
      pink: { base: "border-pink-200 bg-pink-400 dark:bg-pink-800 dark:border-pink-700" },
      rose: { base: "border-rose-200 bg-rose-400 dark:bg-rose-800 dark:border-rose-700" }
    },
    shadow: {
      sm: { base: "shadow-md" },
      normal: { base: "shadow" },
      md: { base: "shadow-md" },
      lg: { base: "shadow-lg" },
      xl: { base: "shadow-xl" },
      "2xl": { base: "shadow-2xl" },
      inner: { base: "shadow-inner" }
    },
    padding: {
      xs: { content: "p-2" },
      sm: { content: "p-4 md:p-6" },
      md: { content: "p-4 sm:p-5 md:p-7" },
      lg: { content: "p-4 sm:p-6 md:p-8" },
      xl: { content: "p-4 sm:p-8 md:p-10" },
      none: { content: "p-0" }
    },
    horizontal: {
      true: {
        base: "md:flex-row",
        image: "object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none"
      }
    },
    reverse: {
      true: { base: "flex-col-reverse", image: "rounded-b-lg rounded-tl-none" },
      false: { base: "flex-col", image: "rounded-t-lg" }
    },
    href: {
      true: "",
      false: ""
    },
    hasImage: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      horizontal: true,
      reverse: true,
      class: { base: "md:flex-row-reverse", image: "md:rounded-e-lg" }
    },
    {
      horizontal: true,
      reverse: false,
      class: { base: "md:flex-row", image: "md:rounded-s-lg" }
    },
    // gray, primary, secondary, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    {
      href: true,
      color: "gray",
      class: { base: "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700" }
    },
    {
      href: true,
      color: "primary",
      class: { base: "cursor-pointer hover:bg-primary-500 dark:hover:bg-primary-700" }
    },
    {
      href: true,
      color: "secondary",
      class: { base: "cursor-pointer hover:bg-secondary-500 dark:hover:bg-secondary-700" }
    },
    {
      href: true,
      color: "red",
      class: { base: "cursor-pointer hover:bg-red-500 dark:hover:bg-red-700" }
    },
    {
      href: true,
      color: "orange",
      class: { base: "cursor-pointer hover:bg-orange-500 dark:hover:bg-orange-700" }
    },
    {
      href: true,
      color: "amber",
      class: { base: "cursor-pointer hover:bg-amber-500 dark:hover:bg-amber-700" }
    },
    {
      href: true,
      color: "yellow",
      class: { base: "cursor-pointer hover:bg-yellow-500 dark:hover:bg-yellow-700" }
    },
    {
      href: true,
      color: "lime",
      class: { base: "cursor-pointer hover:bg-lime-500 dark:hover:bg-lime-700" }
    },
    {
      href: true,
      color: "green",
      class: { base: "cursor-pointer hover:bg-green-500 dark:hover:bg-green-700" }
    },
    {
      href: true,
      color: "emerald",
      class: { base: "cursor-pointer hover:bg-emerald-500 dark:hover:bg-emerald-700" }
    },
    {
      href: true,
      color: "teal",
      class: { base: "cursor-pointer hover:bg-teal-500 dark:hover:bg-teal-700" }
    },
    {
      href: true,
      color: "cyan",
      class: { base: "cursor-pointer hover:bg-cyan-500 dark:hover:bg-cyan-700" }
    },
    {
      href: true,
      color: "sky",
      class: { base: "cursor-pointer hover:bg-sky-500 dark:hover:bg-sky-700" }
    },
    {
      href: true,
      color: "blue",
      class: { base: "cursor-pointer hover:bg-blue-500 dark:hover:bg-blue-700" }
    },
    {
      href: true,
      color: "indigo",
      class: { base: "cursor-pointer hover:bg-indigo-500 dark:hover:bg-indigo-700" }
    },
    {
      href: true,
      color: "violet",
      class: { base: "cursor-pointer hover:bg-violet-500 dark:hover:bg-violet-700" }
    },
    {
      href: true,
      color: "purple",
      class: { base: "cursor-pointer hover:bg-purple-500 dark:hover:bg-purple-700" }
    },
    {
      href: true,
      color: "fuchsia",
      class: { base: "cursor-pointer hover:bg-fuchsia-500 dark:hover:bg-fuchsia-700" }
    },
    {
      href: true,
      color: "pink",
      class: { base: "cursor-pointer hover:bg-pink-500 dark:hover:bg-pink-700" }
    },
    {
      href: true,
      color: "rose",
      class: { base: "cursor-pointer hover:bg-rose-500 dark:hover:bg-rose-700" }
    }
  ],
  defaultVariants: {
    size: "sm",
    shadow: "normal",
    padding: "lg",
    horizontal: false,
    reverse: false
  }
});
const darkmode = ce({
  base: "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5"
});
const android = ce({
  slots: {
    div: "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl",
    slot: "rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800",
    top: "w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute",
    leftTop: "h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg",
    leftMid: "h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg",
    leftBot: "h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg",
    right: "h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"
  }
});
const defaultMockup = ce({
  slots: {
    div: "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]",
    slot: "rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800",
    top: "h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg",
    leftTop: "h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg",
    leftBot: "h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg",
    right: "h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"
  }
});
const desktop = ce({
  slots: {
    inner: "rounded-xl overflow-hidden h-[140px] md:h-[262px]",
    bot: "relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]",
    botUnder: "relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]",
    div: "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]"
  }
});
const ios = ce({
  slots: {
    div: "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl",
    slot: "rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800",
    top: "w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute",
    leftTop: "h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg",
    leftBot: "h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg",
    right: "h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"
  }
});
const laptop = ce({
  slots: {
    div: "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]",
    inner: "rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800",
    bot: "relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]",
    botCen: "absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"
  }
});
const smartwatch = ce({
  slots: {
    div: "relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]",
    slot: "rounded-[2rem] overflow-hidden h-[193px] w-[188px]",
    rightTop: "h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[40px] rounded-r-lg",
    rightBot: "h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[88px] rounded-r-lg",
    top: "relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]",
    bot: "relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]"
  }
});
const tablet = ce({
  slots: {
    div: "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]",
    slot: "rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800",
    leftTop: "h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg",
    leftMid: "h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg",
    leftBot: "h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg",
    right: "h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"
  }
});
var root_1$6 = template(`<div><!></div> <div role="presentation"></div>`, 1);
function Dropdown($$anchor, $$props) {
  push($$props, true);
  let transition$1 = prop($$props, "transition", 3, fly), activeUrl = prop($$props, "activeUrl", 3, ""), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "dropdownStatus",
    "closeDropdown",
    "class",
    "backdropClass",
    "params",
    "transition",
    "activeUrl"
  ]);
  const $$d = derived(dropdown), base = derived(() => get($$d).base), backdrop = derived(() => get($$d).backdrop);
  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);
  user_effect(() => {
    activeUrlStore.set(activeUrl() ?? "");
  });
  var fragment = comment();
  var node = first_child(fragment);
  if_block(node, () => $$props.dropdownStatus, ($$anchor2) => {
    var fragment_1 = root_1$6();
    var div = first_child(fragment_1);
    let attributes;
    var node_1 = child(div);
    snippet(node_1, () => $$props.children);
    reset(div);
    var div_1 = sibling(div, 2);
    const class_derived = derived(() => get(backdrop)({ class: $$props.backdropClass }));
    div_1.__click = function(...$$args) {
      var _a;
      (_a = $$props.closeDropdown) == null ? void 0 : _a.apply(this, $$args);
    };
    template_effect(() => {
      attributes = set_attributes(div, attributes, {
        ...restProps,
        class: get(base)({ class: $$props.class })
      });
      set_class(div_1, get(class_derived));
    });
    transition(3, div, transition$1, () => $$props.params);
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
  pop();
}
delegate(["click"]);
const dropdown = ce({
  slots: {
    base: "z-10 w-44 mt-2 divide-y divide-gray-300 dark:divide-gray-500 overflow-hidden rounded-lg bg-white shadow dark:bg-gray-700",
    backdrop: "fixed top-0 start-0 w-full h-full"
  }
});
const dropdowndivider = ce({
  base: "my-1 h-px bg-gray-100 dark:bg-gray-500"
});
const dropdownHeader = ce({
  base: "px-4 py-3 text-sm text-gray-900 dark:text-white"
});
const dropdownFooter = ce({
  base: "overflow-hidden rounded-b-lg py-1"
});
const dropdownli = ce({
  slots: {
    anchor: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
    activeAnchor: "block px-4 py-2 text-primary-700 dark:text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  }
});
const dropdownul = ce({
  base: "py-2 text-sm text-gray-700 dark:text-gray-200"
});
function linear(t) {
  return t;
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function quintOut(t) {
  return --t * t * t * t * t + 1;
}
function sineIn(t) {
  const v2 = Math.cos(t * Math.PI * 0.5);
  if (Math.abs(v2) < 1e-14) return 1;
  else return 1 - v2;
}
function sineOut(t) {
  return Math.sin(t * Math.PI / 2);
}
var root_2$3 = template(`<div role="presentation"></div>`);
var root_4$4 = template(`<div role="presentation"></div>`);
var root_6$1 = template(`<div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full"></div>`);
var root_1$5 = template(`<!> <div><!></div>`, 1);
function Drawer($$anchor, $$props) {
  push($$props, true);
  let activateClickOutside = prop($$props, "activateClickOutside", 3, true), backdrop = prop($$props, "backdrop", 3, true), placement = prop($$props, "placement", 3, "left"), params = prop($$props, "params", 19, () => ({ x: -320, duration: 200, easing: sineIn })), transition$1 = prop($$props, "transition", 3, fly), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "drawerStatus",
    "closeDrawer",
    "activateClickOutside",
    "position",
    "width",
    "backdrop",
    "backdropClass",
    "placement",
    "class",
    "params",
    "transition"
  ]);
  const $$d = derived(() => drawer({
    position: $$props.position,
    placement: placement(),
    width: $$props.width,
    backdrop: backdrop()
  })), base = derived(() => get($$d).base), backdropCls = derived(() => get($$d).backdrop);
  var fragment = comment();
  var node = first_child(fragment);
  if_block(node, () => $$props.drawerStatus, ($$anchor2) => {
    var fragment_1 = root_1$5();
    var node_1 = first_child(fragment_1);
    if_block(
      node_1,
      () => backdrop() && activateClickOutside(),
      ($$anchor3) => {
        var div = root_2$3();
        const class_derived = derived(() => get(backdropCls)({ class: $$props.backdropClass }));
        div.__click = function(...$$args) {
          var _a;
          (_a = $$props.closeDrawer) == null ? void 0 : _a.apply(this, $$args);
        };
        template_effect(() => set_class(div, get(class_derived)));
        append($$anchor3, div);
      },
      ($$anchor3) => {
        var fragment_2 = comment();
        var node_2 = first_child(fragment_2);
        if_block(
          node_2,
          () => backdrop() && !activateClickOutside(),
          ($$anchor4) => {
            var div_1 = root_4$4();
            const class_derived_1 = derived(() => get(backdropCls)({ class: $$props.backdropClass }));
            template_effect(() => set_class(div_1, get(class_derived_1)));
            append($$anchor4, div_1);
          },
          ($$anchor4) => {
            var fragment_3 = comment();
            var node_3 = first_child(fragment_3);
            if_block(
              node_3,
              () => !backdrop() && activateClickOutside(),
              ($$anchor5) => {
                var div_2 = root_6$1();
                div_2.__click = function(...$$args) {
                  var _a;
                  (_a = $$props.closeDrawer) == null ? void 0 : _a.apply(this, $$args);
                };
                append($$anchor5, div_2);
              },
              null,
              true
            );
            append($$anchor4, fragment_3);
          },
          true
        );
        append($$anchor3, fragment_2);
      }
    );
    var div_3 = sibling(node_1, 2);
    let attributes;
    var node_4 = child(div_3);
    snippet(node_4, () => $$props.children);
    reset(div_3);
    template_effect(() => attributes = set_attributes(div_3, attributes, {
      ...restProps,
      class: get(base)({ className: $$props.class }),
      tabindex: "-1"
    }));
    transition(3, div_3, transition$1, params);
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
  pop();
}
delegate(["click"]);
const drawer = ce({
  slots: {
    base: "overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800",
    backdrop: "fixed top-0 start-0 z-50 w-full h-full"
  },
  variants: {
    position: {
      fixed: { base: "fixed" },
      absolute: { base: "absolute" }
    },
    placement: {
      left: { base: "inset-y-0 start-0" },
      right: { base: "inset-y-0 end-0" },
      top: { base: "inset-x-0 top-0" },
      bottom: { base: "inset-x-0 bottom-0" }
    },
    width: {
      default: { base: "w-80" },
      full: { base: "w-full" },
      half: { base: "w-1/2" }
    },
    backdrop: {
      true: { backdrop: "bg-gray-900 bg-opacity-75" }
    }
  },
  defaultVariants: {
    position: "fixed",
    placement: "left",
    width: "default"
  }
});
const drawerhead = ce({
  slots: {
    base: "flex items-center",
    button: "ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
    svg: "h-3 w-3"
  }
});
const footer = ce({
  base: "bg-white dark:bg-gray-800",
  variants: {
    footerType: {
      default: "p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6",
      sitemap: "bg-gray-800",
      socialmedia: "p-4 sm:p-6",
      logo: "p-4 rounded-lg shadow md:px-6 md:py-8",
      sticky: "fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600"
    }
  }
});
const footerBrand = ce({
  slots: {
    base: "flex items-center",
    span: "self-center text-2xl font-semibold whitespace-nowrap dark:text-white",
    img: "me-3 h-8"
  }
});
const footerCopyright = ce({
  slots: {
    base: "block text-sm text-gray-500 sm:text-center dark:text-gray-400",
    link: "hover:underline",
    bySpan: "ms-1"
  }
});
const footerIcon = ce({
  base: "text-gray-500 hover:text-gray-900 dark:hover:text-white"
});
const footerUl = ce({
  base: "text-gray-600 dark:text-gray-400"
});
const footerLi = ce({
  slots: {
    base: "me-4 last:me-0 md:me-6",
    link: "hover:underline"
  }
});
const gallery = ce({
  slots: {
    image: "h-auto max-w-full rounded-lg",
    div: "grid"
  }
});
const indicator = ce({
  slots: {
    base: "flex-shrink-0"
  },
  variants: {
    color: {
      // 'primary' secondary 'gray' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'
      primary: { base: "bg-primary-500" },
      secondary: { base: "bg-secondary-500" },
      gray: { base: "bg-gray-200" },
      red: { base: "bg-red-500" },
      orange: { base: "bg-orange-600" },
      amber: { base: "bg-amber-500" },
      yellow: { base: "bg-yellow-300" },
      lime: { base: "bg-lime-500" },
      green: { base: "bg-green-500" },
      emerald: { base: "bg-emerald-500" },
      teal: { base: "bg-teal-500" },
      cyan: { base: "bg-cyan-500" },
      sky: { base: "bg-sky-500" },
      blue: { base: "bg-blue-500" },
      indigo: { base: "bg-indigo-500" },
      violet: { base: "bg-violet-500" },
      purple: { base: "bg-purple-500" },
      fuchsia: { base: "bg-fuchsia-500" },
      pink: { base: "bg-pink-500" },
      rose: { base: "bg-rose-500" }
    },
    size: {
      xs: { base: "w-2 h-2" },
      sm: { base: "w-2.5 h-2.5" },
      md: { base: "w-3 h-3" },
      lg: { base: "w-3.5 h-3.5" },
      xl: { base: "w-6 h-6" }
    },
    cornerStyle: {
      rounded: { base: "rounded" },
      circular: { base: "rounded-full" }
    },
    border: {
      true: { base: "border border-gray-300 dark:border-gray-300" },
      false: {}
    },
    hasChildren: {
      true: { base: "inline-flex items-center justify-center" },
      false: {}
    },
    placement: {
      default: { base: "" },
      "top-left": { base: "absolute top-0 start-0" },
      "top-center": {
        base: "absolute top-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2"
      },
      "top-right": { base: "absolute top-0 end-0" },
      "center-left": { base: "absolute top-1/2 -translate-y-1/2 start-0" },
      center: {
        base: "absolute top-1/2 -translate-y-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2"
      },
      "center-right": { base: "absolute top-1/2 -translate-y-1/2 end-0" },
      "bottom-left": { base: "absolute bottom-0 start-0" },
      "bottom-center": {
        base: "absolute bottom-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2"
      },
      "bottom-right": { base: "absolute bottom-0 end-0" }
    },
    offset: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      placement: "top-left",
      offset: true,
      class: { base: "-translate-x-1/3 rtl:translate-x-1/3 -translate-y-1/3" }
    },
    {
      placement: "top-center",
      offset: true,
      class: { base: "-translate-y-1/3" }
    },
    {
      placement: "top-right",
      offset: true,
      class: { base: "translate-x-1/3 rtl:-translate-x-1/3 -translate-y-1/3" }
    },
    {
      placement: "center-left",
      offset: true,
      class: { base: "-translate-x-1/3 rtl:translate-x-1/3" }
    },
    {
      placement: "center-right",
      offset: true,
      class: { base: "translate-x-1/3 rtl:-translate-x-1/3" }
    },
    {
      placement: "bottom-left",
      offset: true,
      class: { base: "-translate-x-1/3 rtl:translate-x-1/3 translate-y-1/3" }
    },
    {
      placement: "bottom-center",
      offset: true,
      class: { base: "translate-y-1/3" }
    },
    {
      placement: "bottom-right",
      offset: true,
      class: { base: "translate-x-1/3 rtl:-translate-x-1/3 translate-y-1/3" }
    }
  ],
  defaultVariants: {
    color: "primary",
    size: "md",
    cornerStyle: "circular",
    border: false,
    offset: true,
    hasChildren: false
  }
});
const kbd = ce({
  base: "text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
});
var root_1$4 = template(`<li><!></li>`);
var root_3$3 = template(`<a> </a>`);
var root_4$3 = template(`<button type="button"><!> <!></button>`);
function ListgroupItem($$anchor, $$props) {
  push($$props, true);
  let active = prop($$props, "active", 7), currentClass = prop($$props, "currentClass", 3, "text-white bg-primary-700 dark:text-white dark:bg-gray-800"), disabledClass = prop($$props, "disabledClass", 3, "text-gray-900 bg-gray-100 dark:bg-gray-600 dark:text-gray-400"), liClass = prop($$props, "liClass", 3, "py-2 px-4 w-full text-sm font-medium list-none first:rounded-t-lg last:rounded-b-lg"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "onclick",
    "active",
    "current",
    "disabled",
    "name",
    "Icon",
    "href",
    "currentClass",
    "normalClass",
    "disabledClass",
    "liClass",
    "class"
  ]);
  active(getContext("active"));
  const itemClass = listGroupItem({
    state: $$props.disabled ? "disabled" : $$props.current ? "current" : "normal",
    active: active(),
    class: twMerge(liClass(), $$props.disabled ? disabledClass() : $$props.current ? currentClass() : $$props.normalClass, $$props.class)
  });
  const buttonClass = ce({
    base: "flex items-center text-left",
    extend: listGroupItem
  })({
    state: $$props.disabled ? "disabled" : $$props.current ? "current" : "normal",
    active: active(),
    class: itemClass
  });
  const linkClass = ce({ base: "block", extend: listGroupItem })({
    state: $$props.disabled ? "disabled" : $$props.current ? "current" : "normal",
    active: active(),
    class: itemClass
  });
  var fragment = comment();
  var node = first_child(fragment);
  if_block(
    node,
    () => !active() && $$props.children,
    ($$anchor2) => {
      var li = root_1$4();
      set_class(li, itemClass);
      var node_1 = child(li);
      snippet(node_1, () => $$props.children);
      reset(li);
      append($$anchor2, li);
    },
    ($$anchor2) => {
      var fragment_1 = comment();
      var node_2 = first_child(fragment_1);
      if_block(
        node_2,
        () => $$props.href,
        ($$anchor3) => {
          var a2 = root_3$3();
          let attributes;
          var text2 = child(a2, true);
          reset(a2);
          template_effect(() => {
            attributes = set_attributes(a2, attributes, {
              ...restProps,
              onclick: $$props.onclick,
              href: $$props.href,
              class: linkClass,
              "aria-current": $$props.current
            });
            set_text(text2, $$props.name);
          });
          append($$anchor3, a2);
        },
        ($$anchor3) => {
          var button2 = root_4$3();
          button2.__click = function(...$$args) {
            var _a;
            (_a = $$props.onclick) == null ? void 0 : _a.apply(this, $$args);
          };
          set_class(button2, buttonClass);
          var node_3 = child(button2);
          if_block(node_3, () => $$props.Icon, ($$anchor4) => {
            var fragment_2 = comment();
            var node_4 = first_child(fragment_2);
            component(node_4, () => $$props.Icon, ($$anchor5, $$component) => {
              $$component($$anchor5, { class: "me-2.5 h-5 w-5" });
            });
            append($$anchor4, fragment_2);
          });
          var node_5 = sibling(node_3, 2);
          if_block(
            node_5,
            () => $$props.name,
            ($$anchor4) => {
              var text_1 = text();
              template_effect(() => set_text(text_1, $$props.name));
              append($$anchor4, text_1);
            },
            ($$anchor4) => {
              var fragment_4 = comment();
              var node_6 = first_child(fragment_4);
              snippet(node_6, () => $$props.children);
              append($$anchor4, fragment_4);
            }
          );
          reset(button2);
          template_effect(() => {
            button2.disabled = $$props.disabled;
            set_attribute(button2, "aria-current", $$props.current);
          });
          append($$anchor3, button2);
        },
        true
      );
      append($$anchor2, fragment_1);
    }
  );
  append($$anchor, fragment);
  pop();
}
delegate(["click"]);
const listGroup = ce({
  base: "bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 divide-y divide-gray-200 dark:divide-gray-600",
  variants: {
    rounded: {
      true: "rounded-lg",
      false: ""
    },
    border: {
      true: "border border-gray-200 dark:border-gray-700",
      false: ""
    }
  },
  compoundVariants: [
    {
      border: true,
      class: "divide-gray-200 dark:divide-gray-700"
    }
  ],
  defaultVariants: {
    rounded: true,
    border: true
  }
});
const listGroupItem = ce({
  base: "py-2 px-4 w-full text-sm font-medium list-none",
  variants: {
    state: {
      normal: "",
      current: "",
      disabled: ""
    },
    active: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      active: true,
      state: "disabled",
      class: "cursor-not-allowed"
    },
    {
      active: true,
      state: "normal",
      class: "hover:bg-gray-100 hover:text-primary-700 dark:hover:bg-gray-600 dark:hover:text-white focus:z-40 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:focus:ring-gray-500 dark:focus:text-white"
    }
  ]
});
const megamenu = ce({
  slots: {
    base: "w-full border rounded-lg",
    div: "flex flex-col md:flex-row p-4 max-w-screen-md justify-center mx-auto mt-2",
    ul: "grid grid-flow-row gap-y-4 md:gap-x-0 auto-col-max auto-row-max grid-cols-2 md:grid-cols-3 text-sm font-medium",
    footerDiv: "md:w-1/3 mt-4 md:mt-0"
  },
  variants: {
    full: {}
  }
});
const closeButtonVariants = ce({
  base: "focus:outline-none whitespace-normal",
  variants: {
    // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    color: {
      primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
      secondary: "text-secondary-500 focus:ring-secondary-400 hover:bg-secondary-200 dark:hover:bg-secondary-800 dark:hover:text-secondary-300",
      gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
      red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
      orange: "text-orange-500 focus:ring-orange-400 hover:bg-orange-200 dark:hover:bg-orange-800 dark:hover:text-orange-300",
      amber: "text-amber-500 focus:ring-amber-400 hover:bg-amber-200 dark:hover:bg-amber-800 dark:hover:text-amber-300",
      yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
      lime: "text-lime-500 focus:ring-lime-400 hover:bg-lime-200 dark:hover:bg-lime-800 dark:hover:text-lime-300",
      green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
      emerald: "text-emerald-500 focus:ring-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-800 dark:hover:text-emerald-300",
      teal: "text-teal-500 focus:ring-teal-400 hover:bg-teal-200 dark:hover:bg-teal-800 dark:hover:text-teal-300",
      cyan: "text-cyan-500 focus:ring-cyan-400 hover:bg-cyan-200 dark:hover:bg-cyan-800 dark:hover:text-cyan-300",
      sky: "text-sky-500 focus:ring-sky-400 hover:bg-sky-200 dark:hover:bg-sky-800 dark:hover:text-sky-300",
      blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
      indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
      violet: "text-violet-500 focus:ring-violet-400 hover:bg-violet-200 dark:hover:bg-violet-800 dark:hover:text-violet-300",
      purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
      fuchsia: "text-fuchsia-500 focus:ring-fuchsia-400 hover:bg-fuchsia-200 dark:hover:bg-fuchsia-800 dark:hover:text-fuchsia-300",
      pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
      rose: "text-rose-500 focus:ring-rose-400 hover:bg-rose-200 dark:hover:bg-rose-800 dark:hover:text-rose-300"
    },
    size: {
      xs: "m-0.5 rounded-sm focus:ring-1 p-0.5",
      sm: "m-0.5 rounded focus:ring-1 p-0.5",
      md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
      lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
    }
  },
  defaultVariants: {
    color: "gray",
    size: "md"
  },
  slots: {
    svg: ""
  },
  compoundVariants: [
    {
      size: "xs",
      class: {
        svg: "w-3 h-3"
      }
    },
    {
      size: "sm",
      class: {
        svg: "w-3.5 h-3.5"
      }
    },
    {
      size: ["md", "lg"],
      class: {
        svg: "w-5 h-5"
      }
    }
  ]
});
var root_2$2 = template(`<span class="sr-only"> </span>`);
var root_1$3 = template(`<a><!> <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>`);
var root_4$2 = template(`<span class="sr-only"> </span>`);
var root_3$2 = template(`<button><!> <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>`);
function CloseButton($$anchor, $$props) {
  push($$props, true);
  let color = prop($$props, "color", 3, "gray"), name = prop($$props, "name", 3, "Close"), size = prop($$props, "size", 3, "md"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "color",
    "onclick",
    "name",
    "ariaLabel",
    "size",
    "href",
    "class"
  ]);
  const $$d = derived(() => closeButtonVariants({ color: color(), size: size() })), base = derived(() => get($$d).base), svg = derived(() => get($$d).svg);
  var fragment = comment();
  var node = first_child(fragment);
  if_block(
    node,
    () => $$props.href,
    ($$anchor2) => {
      var a2 = root_1$3();
      let attributes;
      var node_1 = child(a2);
      if_block(node_1, name, ($$anchor3) => {
        var span2 = root_2$2();
        var text2 = child(span2, true);
        reset(span2);
        template_effect(() => set_text(text2, name()));
        append($$anchor3, span2);
      });
      var svg_1 = sibling(node_1, 2);
      const class_derived = derived(() => get(svg)());
      reset(a2);
      template_effect(() => {
        attributes = set_attributes(a2, attributes, {
          href: $$props.href,
          ...restProps,
          onclick: $$props.onclick,
          class: get(base)({ class: $$props.class }),
          "aria-label": $$props.ariaLabel ?? name()
        });
        set_svg_class(svg_1, get(class_derived));
      });
      append($$anchor2, a2);
    },
    ($$anchor2) => {
      var button2 = root_3$2();
      let attributes_1;
      var node_2 = child(button2);
      if_block(node_2, name, ($$anchor3) => {
        var span_1 = root_4$2();
        var text_1 = child(span_1, true);
        reset(span_1);
        template_effect(() => set_text(text_1, name()));
        append($$anchor3, span_1);
      });
      var svg_2 = sibling(node_2, 2);
      const class_derived_1 = derived(() => get(svg)());
      reset(button2);
      template_effect(() => {
        attributes_1 = set_attributes(button2, attributes_1, {
          type: "button",
          ...restProps,
          class: get(base)({ class: $$props.class }),
          onclick: $$props.onclick,
          "aria-label": $$props.ariaLabel ?? name()
        });
        set_svg_class(svg_2, get(class_derived_1));
      });
      append($$anchor2, button2);
    }
  );
  append($$anchor, fragment);
  pop();
}
var root_2$1 = template(`<div role="presentation"></div>`);
var root_4$1 = template(`<div role="presentation"></div>`);
var root_6 = template(`<div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full"></div>`);
var root_8 = template(`<div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full"></div>`);
var root_10 = template(`<h3> </h3>`);
var root_9$1 = template(`<div><!> <!></div>`);
var root_15 = template(`<div><!></div>`);
var root_1$2 = template(`<!> <div><div><div><!> <div><!> <!></div> <!></div></div></div>`, 1);
function Modal($$anchor, $$props) {
  push($$props, true);
  let dismissable = prop($$props, "dismissable", 3, true), outsideClose = prop($$props, "outsideClose", 3, true), size = prop($$props, "size", 3, "md"), backdrop = prop($$props, "backdrop", 3, true), position = prop($$props, "position", 3, "center"), params = prop($$props, "params", 19, () => ({ duration: 100, easing: sineIn })), transition$1 = prop($$props, "transition", 3, fade), rounded = prop($$props, "rounded", 3, true), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "header",
    "footer",
    "title",
    "modalStatus",
    "dismissable",
    "closeModal",
    "divClass",
    "contentClass",
    "closeBtnClass",
    "h3Class",
    "headerClass",
    "bodyClass",
    "footerClass",
    "outsideClose",
    "size",
    "backdrop",
    "backdropClass",
    "position",
    "class",
    "params",
    "transition",
    "rounded"
  ]);
  const $$d = derived(() => modal({
    position: position(),
    size: size(),
    backdrop: backdrop(),
    rounded: rounded()
  })), base = derived(() => get($$d).base), div = derived(() => get($$d).div), content = derived(() => get($$d).content), backdropCls = derived(() => get($$d).backdrop), headerCls = derived(() => get($$d).header), footerCls = derived(() => get($$d).footer), body = derived(() => get($$d).body), closeBtn = derived(() => get($$d).closeBtn), h3 = derived(() => get($$d).h3);
  var fragment = comment();
  var node = first_child(fragment);
  if_block(node, () => $$props.modalStatus, ($$anchor2) => {
    var fragment_1 = root_1$2();
    var node_1 = first_child(fragment_1);
    if_block(
      node_1,
      () => backdrop() && outsideClose(),
      ($$anchor3) => {
        var div_1 = root_2$1();
        const class_derived = derived(() => get(backdropCls)({ class: $$props.backdropClass }));
        div_1.__click = function(...$$args) {
          var _a;
          (_a = $$props.closeModal) == null ? void 0 : _a.apply(this, $$args);
        };
        template_effect(() => set_class(div_1, get(class_derived)));
        append($$anchor3, div_1);
      },
      ($$anchor3) => {
        var fragment_2 = comment();
        var node_2 = first_child(fragment_2);
        if_block(
          node_2,
          () => backdrop() && !outsideClose(),
          ($$anchor4) => {
            var div_2 = root_4$1();
            const class_derived_1 = derived(() => get(backdropCls)({ class: $$props.backdropClass }));
            template_effect(() => set_class(div_2, get(class_derived_1)));
            append($$anchor4, div_2);
          },
          ($$anchor4) => {
            var fragment_3 = comment();
            var node_3 = first_child(fragment_3);
            if_block(
              node_3,
              () => !backdrop() && outsideClose(),
              ($$anchor5) => {
                var div_3 = root_6();
                div_3.__click = function(...$$args) {
                  var _a;
                  (_a = $$props.closeModal) == null ? void 0 : _a.apply(this, $$args);
                };
                append($$anchor5, div_3);
              },
              ($$anchor5) => {
                var fragment_4 = comment();
                var node_4 = first_child(fragment_4);
                if_block(
                  node_4,
                  () => !backdrop() && !outsideClose(),
                  ($$anchor6) => {
                    var div_4 = root_8();
                    append($$anchor6, div_4);
                  },
                  null,
                  true
                );
                append($$anchor5, fragment_4);
              },
              true
            );
            append($$anchor4, fragment_3);
          },
          true
        );
        append($$anchor3, fragment_2);
      }
    );
    var div_5 = sibling(node_1, 2);
    let attributes;
    var div_6 = child(div_5);
    const class_derived_2 = derived(() => get(div)({ class: $$props.divClass }));
    var div_7 = child(div_6);
    const class_derived_3 = derived(() => get(content)({ class: $$props.contentClass }));
    var node_5 = child(div_7);
    if_block(node_5, () => $$props.title || $$props.header, ($$anchor3) => {
      var div_8 = root_9$1();
      const class_derived_4 = derived(() => get(headerCls)({ class: $$props.headerClass }));
      var node_6 = child(div_8);
      if_block(
        node_6,
        () => $$props.title,
        ($$anchor4) => {
          var h3_1 = root_10();
          const class_derived_5 = derived(() => get(h3)({ class: $$props.h3Class }));
          var text2 = child(h3_1, true);
          reset(h3_1);
          template_effect(() => {
            set_class(h3_1, get(class_derived_5));
            set_text(text2, $$props.title);
          });
          append($$anchor4, h3_1);
        },
        ($$anchor4) => {
          var fragment_5 = comment();
          var node_7 = first_child(fragment_5);
          if_block(
            node_7,
            () => $$props.header,
            ($$anchor5) => {
              var fragment_6 = comment();
              var node_8 = first_child(fragment_6);
              snippet(node_8, () => $$props.header);
              append($$anchor5, fragment_6);
            },
            null,
            true
          );
          append($$anchor4, fragment_5);
        }
      );
      var node_9 = sibling(node_6, 2);
      if_block(node_9, dismissable, ($$anchor4) => {
        var class_1 = derived(() => get(closeBtn)({ class: $$props.closeBtnClass }));
        CloseButton($$anchor4, {
          get onclick() {
            return $$props.closeModal;
          },
          get class() {
            return get(class_1);
          }
        });
      });
      reset(div_8);
      template_effect(() => set_class(div_8, get(class_derived_4)));
      append($$anchor3, div_8);
    });
    var div_9 = sibling(node_5, 2);
    const class_derived_6 = derived(() => get(body)({ class: $$props.bodyClass }));
    var node_10 = child(div_9);
    if_block(node_10, () => dismissable() && !$$props.title && !$$props.header, ($$anchor3) => {
      var class_2 = derived(() => get(closeBtn)({ class: $$props.closeBtnClass }));
      CloseButton($$anchor3, {
        get onclick() {
          return $$props.closeModal;
        },
        get class() {
          return get(class_2);
        }
      });
    });
    var node_11 = sibling(node_10, 2);
    snippet(node_11, () => $$props.children);
    reset(div_9);
    var node_12 = sibling(div_9, 2);
    if_block(node_12, () => $$props.footer, ($$anchor3) => {
      var div_10 = root_15();
      const class_derived_7 = derived(() => get(footerCls)({ class: $$props.footerClass }));
      var node_13 = child(div_10);
      snippet(node_13, () => $$props.footer);
      reset(div_10);
      template_effect(() => set_class(div_10, get(class_derived_7)));
      append($$anchor3, div_10);
    });
    reset(div_7);
    reset(div_6);
    reset(div_5);
    template_effect(() => {
      attributes = set_attributes(div_5, attributes, {
        ...restProps,
        class: get(base)({ className: $$props.class }),
        tabindex: "-1"
      });
      set_class(div_6, get(class_derived_2));
      set_class(div_7, get(class_derived_3));
      set_class(div_9, get(class_derived_6));
    });
    transition(3, div_5, transition$1, params);
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
  pop();
}
delegate(["click"]);
const modal = ce({
  slots: {
    base: "fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex pointer-events-none",
    div: "flex relative w-full max-h-full",
    content: "w-full divide-y text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800 bg-white dark:bg-gray-800 pointer-events-auto",
    backdrop: "fixed inset-0 z-50 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 pointer-events-auto",
    header: "flex justify-between items-center p-4 md:p-5 rounded-t-lg",
    footer: "flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse rounded-b-lg",
    body: "p-4 md:p-5 space-y-4 flex-1 overflow-y-auto overscroll-contain",
    closeBtn: "absolute top-3 end-2.5",
    h3: "text-xl font-semibold text-gray-900 dark:text-white p-0"
  },
  variants: {
    // position: {
    //   fixed: { base: 'fixed' },
    //   absolute: { base: 'absolute' }
    // },
    position: {
      "top-left": { base: "justify-start items-start" },
      "top-center": { base: "justify-center items-start" },
      "top-right": { base: "justify-end items-start" },
      "center-left": { base: "justify-start items-center" },
      center: { base: "justify-center items-center" },
      "center-right": { base: "justify-end items-center" },
      "bottom-left": { base: "justify-start items-end" },
      "bottom-center": { base: "justify-center items-end" },
      "bottom-right": { base: "justify-end items-end" },
      default: { base: "justify-center items-center" }
    },
    size: {
      xs: { div: "max-w-md" },
      sm: { div: "max-w-lg" },
      md: { div: "max-w-2xl" },
      lg: { div: "max-w-4xl" },
      xl: { div: "max-w-7xl" }
    },
    backdrop: {
      true: { backdrop: "bg-gray-900 bg-opacity-75" }
    },
    rounded: {
      true: { content: "rounded" }
    },
    shadow: {
      true: { content: "shadow-md" }
    }
  }
});
var root_2 = template(`<button type="button"><span class="sr-only">Open main menu</span> <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button>`);
var root_4 = template(`<!> <div><!></div> <!>`, 1);
var root_7$1 = template(`<div><!></div>`);
var root$3 = template(`<nav><div><!> <!> <!> <!></div></nav>`);
function Navbar($$anchor, $$props) {
  push($$props, true);
  let closeNav = prop($$props, "closeNav", 3, () => {
  }), hamburgerMenu = prop($$props, "hamburgerMenu", 3, true), breakPoint = prop($$props, "breakPoint", 3, "md"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "navSlotBlock",
    "navSlotHiddenTop",
    "navSlotHiddenBottom",
    "toggleNav",
    "closeNav",
    "navStatus",
    "fluid",
    "brand",
    "hamburgerMenu",
    "breakPoint",
    "navClass",
    "divClass",
    "btnClass",
    "div2Class",
    "activeClass",
    "nonActiveClass"
  ]);
  const $$d = derived(() => navbar({
    fluid: $$props.fluid,
    breakPoint: breakPoint(),
    navStatus: $$props.navStatus
  })), base = derived(() => get($$d).base), container = derived(() => get($$d).container), toggleButton = derived(() => get($$d).toggleButton), menuContainer = derived(() => get($$d).menuContainer), activeLink = derived(() => get($$d).activeLink), inactiveLink = derived(() => get($$d).inactiveLink);
  setContext("navbarContext", {
    navStatus: $$props.navStatus,
    breakPoint: breakPoint(),
    get activeClass() {
      return get(activeLink)({ class: $$props.activeClass });
    },
    get nonActiveClass() {
      return get(inactiveLink)({ class: $$props.nonActiveClass });
    },
    closeNav: closeNav()
  });
  let slideParams = { delay: 250, duration: 500, easing: quintOut };
  function getMenuProps(isOpen) {
    return isOpen ? { role: "menu", tabindex: 0 } : { role: "none", tabindex: -1 };
  }
  var nav = root$3();
  let attributes;
  var div = child(nav);
  const class_derived = derived(() => get(container)({ class: $$props.divClass }));
  var node = child(div);
  if_block(node, () => $$props.brand, ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.brand);
    append($$anchor2, fragment);
  });
  var node_2 = sibling(node, 2);
  if_block(node_2, hamburgerMenu, ($$anchor2) => {
    var button2 = root_2();
    button2.__click = function(...$$args) {
      var _a;
      (_a = $$props.toggleNav) == null ? void 0 : _a.apply(this, $$args);
    };
    const class_derived_1 = derived(() => get(toggleButton)({ class: $$props.btnClass }));
    template_effect(() => set_class(button2, get(class_derived_1)));
    append($$anchor2, button2);
  });
  var node_3 = sibling(node_2, 2);
  if_block(node_3, () => $$props.navSlotBlock, ($$anchor2) => {
    var fragment_1 = comment();
    var node_4 = first_child(fragment_1);
    snippet(node_4, () => $$props.navSlotBlock);
    append($$anchor2, fragment_1);
  });
  var node_5 = sibling(node_3, 2);
  if_block(
    node_5,
    () => $$props.navStatus,
    ($$anchor2) => {
      var fragment_2 = root_4();
      var node_6 = first_child(fragment_2);
      if_block(node_6, () => $$props.navSlotHiddenTop, ($$anchor3) => {
        var fragment_3 = comment();
        var node_7 = first_child(fragment_3);
        snippet(node_7, () => $$props.navSlotHiddenTop);
        append($$anchor3, fragment_3);
      });
      var div_1 = sibling(node_6, 2);
      const spread_with_call = derived(() => getMenuProps(true));
      let attributes_1;
      var node_8 = child(div_1);
      snippet(node_8, () => $$props.children);
      reset(div_1);
      var node_9 = sibling(div_1, 2);
      if_block(node_9, () => $$props.navSlotHiddenBottom, ($$anchor3) => {
        var fragment_4 = comment();
        var node_10 = first_child(fragment_4);
        snippet(node_10, () => $$props.navSlotHiddenBottom);
        append($$anchor3, fragment_4);
      });
      template_effect(() => attributes_1 = set_attributes(div_1, attributes_1, {
        class: get(menuContainer)({ class: $$props.div2Class }),
        ...get(spread_with_call)
      }));
      transition(3, div_1, () => slide, () => slideParams);
      append($$anchor2, fragment_2);
    },
    ($$anchor2) => {
      var div_2 = root_7$1();
      const spread_with_call_1 = derived(() => getMenuProps(false));
      let attributes_2;
      var node_11 = child(div_2);
      snippet(node_11, () => $$props.children);
      reset(div_2);
      template_effect(() => attributes_2 = set_attributes(div_2, attributes_2, {
        class: get(menuContainer)({ class: $$props.div2Class }),
        ...get(spread_with_call_1)
      }));
      append($$anchor2, div_2);
    }
  );
  reset(div);
  reset(nav);
  action(nav, ($$node, $$action_arg) => clickOutside($$node, $$action_arg), closeNav);
  template_effect(() => {
    attributes = set_attributes(nav, attributes, {
      ...restProps,
      class: get(base)({ class: $$props.navClass })
    });
    set_class(div, get(class_derived));
  });
  append($$anchor, nav);
  pop();
}
delegate(["click"]);
const navbar = ce({
  slots: {
    base: "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700 px-2 sm:px-4 py-2.5 w-full",
    container: "mx-auto flex flex-wrap items-center justify-between",
    toggleButton: "inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    menuContainer: "w-full",
    activeLink: "block py-2 px-3 text-white bg-primary-700 rounded dark:text-white",
    inactiveLink: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
  },
  variants: {
    fluid: {
      true: {
        container: "w-full"
      },
      false: {
        container: "container"
      }
    },
    breakPoint: {
      md: {
        container: "max-w-screen-xl",
        toggleButton: "md:hidden",
        menuContainer: "md:block md:w-auto"
      },
      lg: {
        container: "max-w-screen-xl",
        toggleButton: "lg:hidden",
        menuContainer: "lg:block lg:w-auto"
      },
      xl: {
        container: "max-w-screen-xl",
        toggleButton: "xl:hidden",
        menuContainer: "xl:block xl:w-auto"
      },
      xxl: {
        container: "w-full",
        toggleButton: "2xl:hidden",
        menuContainer: "2xl:block 2xl:w-auto"
      }
    },
    navStatus: {
      true: {
        menuContainer: "block"
      },
      false: {
        menuContainer: "hidden"
      }
    }
  },
  defaultVariants: {
    fluid: false,
    breakPoint: "md",
    navStatus: false
  }
});
const navUl = ce({
  base: "font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-transparent rtl:space-x-reverse dark:bg-gray-800 dark:border-gray-700",
  variants: {
    breakPoint: {
      md: "md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:dark:bg-gray-900",
      lg: "lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:p-0 lg:dark:bg-gray-900",
      xl: "xl:mt-0 xl:flex-row xl:space-x-8 xl:border-0 lg:p-0 xl:dark:bg-gray-900",
      xxl: "2xl:mt-0 2xl:flex-row 2xl:space-x-8 2xl:border-0 2xl:p-0 2xl:dark:bg-gray-900"
    }
  }
});
const navbrand = ce({
  slots: {
    base: "flex items-center space-x-3 rtl:space-x-reverse",
    span: "self-center whitespace-nowrap text-2xl font-semibold text-primary-900 dark:text-white sm:text-3xl"
  }
});
const navLi = ce({
  slots: {
    base: "list-none",
    link: "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
  },
  variants: {
    active: {
      true: {
        link: "bg-primary-700 text-white"
      }
    },
    breakPoint: {
      md: {
        link: "md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 md:dark:hover:text-primary-500 md:dark:hover:bg-transparent"
      },
      lg: {
        link: "lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-primary-500 lg:dark:hover:bg-transparent"
      },
      xl: {
        link: "xl:hover:bg-transparent xl:border-0 xl:hover:text-primary-700 xl:p-0 xl:dark:hover:text-primary-500 xl:dark:hover:bg-transparent"
      },
      xxl: {
        link: "2xl:hover:bg-transparent 2xl:border-0 2xl:hover:text-primary-700 2xl:p-0 2xl:dark:hover:text-primary-500 2xl:dark:hover:bg-transparent"
      }
    }
  },
  compoundVariants: [
    {
      active: true,
      breakPoint: "md",
      class: {
        link: "md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-500"
      }
    },
    {
      active: true,
      breakPoint: "lg",
      class: {
        link: "lg:bg-transparent lg:text-primary-700 lg:p-0 lg:dark:text-primary-500"
      }
    },
    {
      active: true,
      breakPoint: "xl",
      class: {
        link: "xl:bg-transparent xl:text-primary-700 xl:p-0 xl:dark:text-primary-500"
      }
    },
    {
      active: true,
      breakPoint: "xxl",
      class: {
        link: "2xl:bg-transparent 2xl:text-primary-700 2xl:p-0 2xl:dark:text-primary-500"
      }
    }
  ],
  defaultVariants: {
    breakPoint: "md",
    active: false
  }
});
ce({
  base: "mx-auto flex flex-wrap justify-between items-center",
  variants: {
    fluid: {
      true: "w-full",
      false: "container"
    }
  }
});
const navhamburger = ce({
  base: "inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
  variants: {
    breakPoint: {
      md: "md:hidden",
      lg: "lg:hidden",
      xl: "xl:hidden",
      xxl: "2xl:hidden"
    }
  }
});
const paginationItem = ce({
  base: "flex items-center font-medium",
  variants: {
    size: {
      default: "h-8 px-3 text-sm",
      large: "h-10 px-4 text-base"
    },
    active: {
      true: "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
      false: "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    },
    group: {
      true: "",
      false: "rounded-lg"
    },
    table: {
      true: "rounded",
      false: "border"
    }
  },
  compoundVariants: [
    {
      group: false,
      table: false,
      class: "rounded-lg"
    }
  ],
  defaultVariants: {
    size: "default",
    active: false,
    group: false,
    table: false
  }
});
const pagination = ce({
  base: "inline-flex -space-x-px rtl:space-x-reverse items-center",
  variants: {
    table: {
      true: "divide-x rtl:divide-x-reverse dark divide-gray-700 dark:divide-gray-700",
      false: ""
    },
    size: {
      default: "",
      large: ""
    }
  },
  defaultVariants: {
    table: false,
    size: "default"
  }
});
const popover = ce({
  slots: {
    base: "popover absolute rounded-lg shadow-md",
    title: "py-2 px-3 rounded-t-md border-b ",
    h3: "font-semibold",
    arrowBase: "absolute pointer-events-none block w-[10px] h-[10px] rotate-45 bg-inherit border-inherit shadow-md"
  },
  variants: {
    color: {
      default: {
        base: "bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",
        title: "bg-gray-100 border-gray-200 dark:border-gray-600 dark:bg-gray-700",
        h3: "text-gray-900 dark:text-white"
      },
      primary: {
        base: "bg-primary-600 text-white",
        title: "bg-primary-700",
        h3: "text-white"
      },
      secondary: {
        base: "bg-secondary-600 text-white",
        title: "bg-secondary-700",
        h3: "text-white"
      },
      gray: {
        base: "bg-gray-600 text-white",
        title: "bg-gray-700",
        h3: "text-white"
      },
      red: {
        base: "bg-red-600 text-white",
        title: "bg-red-700",
        h3: "text-white"
      },
      orange: {
        base: "bg-orange-600 text-white",
        title: "bg-orange-700",
        h3: "text-white"
      },
      amber: {
        base: "bg-amber-600 text-white",
        title: "bg-amber-700",
        h3: "text-white"
      },
      yellow: {
        base: "bg-yellow-400 text-white",
        title: "bg-yellow-500",
        h3: "text-white"
      },
      lime: {
        base: "bg-lime-600 text-white",
        title: "bg-lime-700",
        h3: "text-white"
      },
      green: {
        base: "bg-green-600 text-white",
        title: "bg-green-700",
        h3: "text-white"
      },
      emerald: {
        base: "bg-emerald-600 text-white",
        title: "bg-emerald-700",
        h3: "text-white"
      },
      teal: {
        base: "bg-teal-600 text-white",
        title: "bg-teal-700",
        h3: "text-white"
      },
      cyan: {
        base: "bg-cyan-600 text-white",
        title: "bg-cyan-700",
        h3: "text-white"
      },
      sky: {
        base: "bg-sky-600 text-white",
        title: "bg-sky-700 text-white",
        h3: "text-white"
      },
      blue: {
        base: "bg-blue-600 text-white",
        title: "bg-blue-700 text-white",
        h3: "text-white"
      },
      indigo: {
        base: "bg-indigo-600 text-white",
        title: "bg-indigo-700",
        h3: "text-white"
      },
      violet: {
        base: "bg-violet-600 text-white",
        title: "bg-violet-700",
        h3: "text-white"
      },
      purple: {
        base: "bg-purple-600 text-white",
        title: "bg-purple-700",
        h3: "text-white"
      },
      fuchsia: {
        base: "bg-fuchsia-600 text-white",
        title: "bg-fuchsia-700",
        h3: "text-white"
      },
      pink: {
        base: "bg-pink-600 text-white",
        title: "bg-pink-700",
        h3: "text-white"
      },
      rose: {
        base: "bg-rose-800 text-white",
        title: "bg-rose-700",
        h3: "text-white"
      }
    },
    arrow: {
      true: "",
      false: ""
    },
    position: {
      top: "",
      bottom: "",
      left: "",
      right: "",
      "right-start": "",
      "right-end": "",
      "left-start": "",
      "left-end": "",
      "top-start": "",
      "top-end": "",
      "bottom-start": "",
      "bottom-end": ""
    }
  },
  compoundVariants: [
    {
      arrow: true,
      position: "bottom",
      color: "default",
      class: { arrowBase: "bg-gray-100 dark:bg-gray-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "primary",
      class: { arrowBase: "bg-primary-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "secondary",
      class: { arrowBase: "bg-secondary-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "gray",
      class: { arrowBase: "bg-gray-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "red",
      class: { arrowBase: "bg-red-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "orange",
      class: { arrowBase: "bg-orange-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "amber",
      class: { arrowBase: "bg-amber-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "yellow",
      class: { arrowBase: "bg-yellow-500 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "lime",
      class: { arrowBase: "bg-lime-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "green",
      class: { arrowBase: "bg-green-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "emerald",
      class: { arrowBase: "bg-emerald-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "teal",
      class: { arrowBase: "bg-teal-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "cyan",
      class: { arrowBase: "bg-cyan-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "sky",
      class: { arrowBase: "bg-sky-700   " }
    },
    {
      arrow: true,
      position: "bottom",
      color: "blue",
      class: { arrowBase: "bg-blue-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "indigo",
      class: { arrowBase: "bg-indigo-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "violet",
      class: { arrowBase: "bg-violet-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "purple",
      class: { arrowBase: "bg-purple-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "fuchsia",
      class: { arrowBase: "bg-fuchsia-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "pink",
      class: { arrowBase: "bg-pink-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "rose",
      class: { arrowBase: "bg-rose-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "default",
      class: { arrowBase: "bg-gray-100 dark:bg-gray-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "primary",
      class: { arrowBase: "bg-primary-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "secondary",
      class: { arrowBase: "bg-secondary-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "gray",
      class: { arrowBase: "bg-gray-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "red",
      class: { arrowBase: "bg-red-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "orange",
      class: { arrowBase: "bg-orange-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "amber",
      class: { arrowBase: "bg-amber-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "yellow",
      class: { arrowBase: "bg-yellow-500 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "lime",
      class: { arrowBase: "bg-lime-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "green",
      class: { arrowBase: "bg-green-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "emerald",
      class: { arrowBase: "bg-emerald-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "teal",
      class: { arrowBase: "bg-teal-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "cyan",
      class: { arrowBase: "bg-cyan-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "sky",
      class: { arrowBase: "bg-sky-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "blue",
      class: { arrowBase: "bg-blue-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "indigo",
      class: { arrowBase: "bg-indigo-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "violet",
      class: { arrowBase: "bg-violet-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "purple",
      class: { arrowBase: "bg-purple-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "fuchsia",
      class: { arrowBase: "bg-fuchsia-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "pink",
      class: { arrowBase: "bg-pink-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "rose",
      class: { arrowBase: "bg-rose-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "default",
      class: { arrowBase: "bg-gray-100 dark:bg-gray-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "primary",
      class: { arrowBase: "bg-primary-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "secondary",
      class: { arrowBase: "bg-secondary-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "gray",
      class: { arrowBase: "bg-gray-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "red",
      class: { arrowBase: "bg-red-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "orange",
      class: { arrowBase: "bg-orange-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "amber",
      class: { arrowBase: "bg-amber-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "yellow",
      class: { arrowBase: "bg-yellow-500 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "lime",
      class: { arrowBase: "bg-lime-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "green",
      class: { arrowBase: "bg-green-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "emerald",
      class: { arrowBase: "bg-emerald-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "teal",
      class: { arrowBase: "bg-teal-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "cyan",
      class: { arrowBase: "bg-cyan-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "sky",
      class: { arrowBase: "bg-sky-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "blue",
      class: { arrowBase: "bg-blue-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "indigo",
      class: { arrowBase: "bg-indigo-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "violet",
      class: { arrowBase: "bg-violet-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "purple",
      class: { arrowBase: "bg-purple-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "fuchsia",
      class: { arrowBase: "bg-fuchsia-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "pink",
      class: { arrowBase: "bg-pink-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "rose",
      class: { arrowBase: "bg-rose-700 shadow-none" }
    },
    // left, left-end, left-start
    {
      arrow: true,
      position: "left",
      color: "default",
      class: { arrowBase: "bg-white border-t border-r dark:bg-gray-800 shadow-none" }
    },
    {
      arrow: true,
      position: "left-end",
      color: "default",
      class: { arrowBase: "bg-white border-t border-r dark:bg-gray-800 shadow-none" }
    },
    // bottom-start, bottom-end
    // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    {
      arrow: true,
      position: "bottom-start",
      color: "default",
      class: { arrowBase: "bg-gray-100 dark:bg-gray-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "primary",
      class: { arrowBase: "bg-primary-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "secondary",
      class: { arrowBase: "bg-secondary-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "gray",
      class: { arrowBase: "bg-gray-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "red",
      class: { arrowBase: "bg-red-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "orange",
      class: { arrowBase: "bg-orange-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "amber",
      class: { arrowBase: "bg-amber-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "yellow",
      class: { arrowBase: "bg-yellow-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "lime",
      class: { arrowBase: "bg-lime-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "green",
      class: { arrowBase: "bg-green-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "emerald",
      class: { arrowBase: "bg-emerald-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "teal",
      class: { arrowBase: "bg-teal-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "cyan",
      class: { arrowBase: "bg-cyan-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "sky",
      class: { arrowBase: "bg-sky-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "blue",
      class: { arrowBase: "bg-blue-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "indigo",
      class: { arrowBase: "bg-indigo-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "violet",
      class: { arrowBase: "bg-violet-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "purple",
      class: { arrowBase: "bg-purple-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "fuchsia",
      class: { arrowBase: "bg-fuchsia-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "pink",
      class: { arrowBase: "bg-pink-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "rose",
      class: { arrowBase: "bg-rose-700 shadow-none" }
    },
    //  bottom-end
    // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    {
      arrow: true,
      position: "bottom-end",
      color: "default",
      class: { arrowBase: "bg-gray-100 dark:bg-gray-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "primary",
      class: { arrowBase: "bg-primary-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "secondary",
      class: { arrowBase: "bg-secondary-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "gray",
      class: { arrowBase: "bg-gray-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "red",
      class: { arrowBase: "bg-red-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "orange",
      class: { arrowBase: "bg-orange-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "amber",
      class: { arrowBase: "bg-amber-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "yellow",
      class: { arrowBase: "bg-yellow-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "lime",
      class: { arrowBase: "bg-lime-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "green",
      class: { arrowBase: "bg-green-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "emerald",
      class: { arrowBase: "bg-emerald-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "teal",
      class: { arrowBase: "bg-teal-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "cyan",
      class: { arrowBase: "bg-cyan-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "sky",
      class: { arrowBase: "bg-sky-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "blue",
      class: { arrowBase: "bg-blue-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "indigo",
      class: { arrowBase: "bg-indigo-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "violet",
      class: { arrowBase: "bg-violet-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "purple",
      class: { arrowBase: "bg-purple-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "fuchsia",
      class: { arrowBase: "bg-fuchsia-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "pink",
      class: { arrowBase: "bg-pink-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "rose",
      class: { arrowBase: "bg-rose-700 shadow-none" }
    }
  ]
});
const progressbar = ce({
  slots: {
    base: "w-full bg-gray-200 rounded-full dark:bg-gray-700",
    labelInsideDiv: "text-primary-100 text-xs font-medium text-center leading-none rounded-full",
    insideDiv: "rounded-full",
    outsideDiv: "mb-1 flex justify-between",
    oustsideSpan: "text-base font-medium text-blue-700 dark:text-white",
    outsideProgress: "text-sm font-medium text-blue-700 dark:text-white"
  },
  variants: {
    color: {
      // 'primary' | 'gray' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'
      primary: {
        labelInsideDiv: "bg-primary-600",
        insideDiv: "bg-primary-600"
      },
      gray: {
        labelInsideDiv: "bg-gray-600 dark:bg-gray-300",
        insideDiv: "bg-gray-600 dark:bg-gray-300"
      },
      red: {
        labelInsideDiv: "bg-red-600 dark:bg-red-500",
        insideDiv: "bg-red-600 dark:bg-red-500"
      },
      orange: {
        labelInsideDiv: "bg-orange-600 dark:bg-orange-500",
        insideDiv: "bg-orange-600 dark:bg-orange-500"
      },
      amber: {
        labelInsideDiv: "bg-amber-600 dark:bg-amber-500",
        insideDiv: "bg-amber-600 dark:bg-amber-500"
      },
      yellow: {
        labelInsideDiv: "bg-yellow-400",
        insideDiv: "bg-yellow-400"
      },
      lime: {
        labelInsideDiv: "bg-lime-600 dark:bg-lime-500",
        insideDiv: "bg-lime-600 dark:bg-lime-500"
      },
      green: {
        labelInsideDiv: "bg-green-600 dark:bg-green-500",
        insideDiv: "bg-green-600 dark:bg-green-500"
      },
      emerald: {
        labelInsideDiv: "bg-emerald-600 dark:bg-emerald-500",
        insideDiv: "bg-emerald-600 dark:bg-emerald-500"
      },
      teal: {
        labelInsideDiv: "bg-teal-600 dark:bg-teal-500",
        insideDiv: "bg-teal-600 dark:bg-teal-500"
      },
      cyan: {
        labelInsideDiv: "bg-cyan-600 dark:bg-cyan-500",
        insideDiv: "bg-cyan-600 dark:bg-cyan-500"
      },
      sky: {
        labelInsideDiv: "bg-sky-600 dark:bg-sky-500",
        insideDiv: "bg-sky-600 dark:bg-sky-500"
      },
      blue: {
        labelInsideDiv: "bg-blue-600",
        insideDiv: "bg-blue-600"
      },
      indigo: {
        labelInsideDiv: "bg-indigo-600 dark:bg-indigo-500",
        insideDiv: "bg-indigo-600 dark:bg-indigo-500"
      },
      violet: {
        labelInsideDiv: "bg-violet-600 dark:bg-violet-500",
        insideDiv: "bg-violet-600 dark:bg-violet-500"
      },
      purple: {
        labelInsideDiv: "bg-purple-600 dark:bg-purple-500",
        insideDiv: "bg-purple-600 dark:bg-purple-500"
      },
      fuchsia: {
        labelInsideDiv: "bg-fuchsia-600 dark:bg-fuchsia-500",
        insideDiv: "bg-fuchsia-600 dark:bg-fuchsia-500"
      },
      pink: {
        labelInsideDiv: "bg-pink-600 dark:bg-pink-500",
        insideDiv: "bg-pink-600 dark:bg-pink-500"
      },
      rose: {
        labelInsideDiv: "bg-rose-600 dark:bg-rose-500",
        insideDiv: "bg-rose-600 dark:bg-rose-500"
      }
    },
    labelInside: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      labelInside: true,
      class: {
        base: "text-primary-100 text-xs font-medium text-center leading-none rounded-full",
        labelInsideDiv: "p-0.5"
      }
    },
    {
      labelInside: false,
      class: { base: "rounded-full" }
    }
  ],
  defaultVariants: {
    color: "primary",
    labelInside: false
  }
});
const advancedrating = ce({
  // divClass = 'flex items-center mt-4', spanClass = 'text-sm font-medium text-gray-600 dark:text-gray-500', div2Class = 'mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700', div3Class = 'h-5 bg-yellow-400 rounded', span2Class = 'text-sm font-medium text-gray-600 dark:text-gray-500',
  slots: {
    base: "flex items-center mt-4",
    span: "text-sm font-medium text-gray-600 dark:text-gray-500",
    div2: "mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700",
    div3: "h-5 bg-yellow-400 rounded",
    span2: "text-sm font-medium text-gray-600 dark:text-gray-500"
  }
});
const rating = ce({
  slots: {
    base: "flex items-center",
    p: "ms-2 text-sm font-bold text-gray-900 dark:text-white"
  }
});
const review = ce({
  slots: {
    article: "md:grid md:grid-cols-3 md:gap-8",
    div: "mb-6 flex items-center space-x-4 rtl:space-x-reverse",
    div2: "space-y-1 font-medium dark:text-white",
    div3: "flex items-center text-sm text-gray-500 dark:text-gray-400",
    img: "h-10 w-10 rounded-full",
    ul: "space-y-4 text-sm text-gray-500 dark:text-gray-400",
    li: "flex items-center"
  }
});
const scorerating = ce({
  slots: {
    desc1: "bg-primary-100 w-8 text-primary-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-primary-200 dark:text-primary-800",
    desc2: "ms-2 font-medium text-gray-900 dark:text-white",
    desc3: "mx-2 w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500",
    desc3span: "text-sm w-24 font-medium text-gray-500 dark:text-gray-400",
    desc3p: "text-sm w-24 font-medium text-gray-500 dark:text-gray-400",
    link: "ms-auto w-32 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500",
    bar: "bg-primary-600 h-2.5 rounded dark:bg-primary-500"
  }
});
var root_3$1 = template(`<div role="presentation"></div>`);
var root_5 = template(`<div role="presentation"></div>`);
var root_7 = template(`<div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full"></div>`);
var root_9 = template(`<div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full"></div>`);
var root_1$1 = template(`<!> <aside><div><!></div></aside>`, 1);
function Sidebar($$anchor, $$props) {
  push($$props, true);
  let isOpen = prop($$props, "isOpen", 3, false), isSingle = prop($$props, "isSingle", 3, true), breakpoint = prop($$props, "breakpoint", 3, "md"), position = prop($$props, "position", 3, "fixed"), activateClickOutside = prop($$props, "activateClickOutside", 3, true), backdrop = prop($$props, "backdrop", 3, true), transition$1 = prop($$props, "transition", 3, fly), activeUrl = prop($$props, "activeUrl", 3, ""), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "isOpen",
    "closeSidebar",
    "isSingle",
    "breakpoint",
    "position",
    "activateClickOutside",
    "backdrop",
    "backdropClass",
    "transition",
    "params",
    "divClass",
    "ariaLabel",
    "nonActiveClass",
    "activeClass",
    "activeUrl",
    "class"
  ]);
  const breakpointValues = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536
  };
  let isLargeScreen = state(false);
  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);
  user_effect(() => {
    activeUrlStore.set(activeUrl());
  });
  function checkScreenSize() {
    set(isLargeScreen, window.innerWidth >= breakpointValues[breakpoint()]);
  }
  const $$d = derived(() => sidebar({
    isOpen: isOpen(),
    breakpoint: breakpoint(),
    position: position(),
    backdrop: backdrop()
  })), base = derived(() => get($$d).base), active = derived(() => get($$d).active), nonactive = derived(() => get($$d).nonactive), div = derived(() => get($$d).div), backdropCls = derived(() => get($$d).backdrop);
  let sidebarCtx = {
    get closeSidebar() {
      return $$props.closeSidebar;
    },
    get activeClass() {
      return get(active)({ class: $$props.activeClass });
    },
    get nonActiveClass() {
      return get(nonactive)({ class: $$props.nonActiveClass });
    },
    isSingle: isSingle()
  };
  let transitionParams = $$props.params ? $$props.params : { x: -320, duration: 200, easing: sineIn };
  setContext("sidebarContext", sidebarCtx);
  user_effect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  });
  var fragment = comment();
  var node = first_child(fragment);
  if_block(node, () => isOpen() || get(isLargeScreen), ($$anchor2) => {
    var fragment_1 = root_1$1();
    var node_1 = first_child(fragment_1);
    if_block(node_1, isOpen, ($$anchor3) => {
      var fragment_2 = comment();
      var node_2 = first_child(fragment_2);
      if_block(
        node_2,
        () => backdrop() && activateClickOutside(),
        ($$anchor4) => {
          var div_1 = root_3$1();
          const class_derived = derived(() => get(backdropCls)({ class: $$props.backdropClass }));
          div_1.__click = function(...$$args) {
            var _a;
            (_a = $$props.closeSidebar) == null ? void 0 : _a.apply(this, $$args);
          };
          template_effect(() => set_class(div_1, get(class_derived)));
          append($$anchor4, div_1);
        },
        ($$anchor4) => {
          var fragment_3 = comment();
          var node_3 = first_child(fragment_3);
          if_block(
            node_3,
            () => backdrop() && !activateClickOutside(),
            ($$anchor5) => {
              var div_2 = root_5();
              const class_derived_1 = derived(() => get(backdropCls)({ class: $$props.backdropClass }));
              template_effect(() => set_class(div_2, get(class_derived_1)));
              append($$anchor5, div_2);
            },
            ($$anchor5) => {
              var fragment_4 = comment();
              var node_4 = first_child(fragment_4);
              if_block(
                node_4,
                () => !backdrop() && activateClickOutside(),
                ($$anchor6) => {
                  var div_3 = root_7();
                  div_3.__click = function(...$$args) {
                    var _a;
                    (_a = $$props.closeSidebar) == null ? void 0 : _a.apply(this, $$args);
                  };
                  append($$anchor6, div_3);
                },
                ($$anchor6) => {
                  var fragment_5 = comment();
                  var node_5 = first_child(fragment_5);
                  if_block(
                    node_5,
                    () => !backdrop() && !activateClickOutside(),
                    ($$anchor7) => {
                      var div_4 = root_9();
                      append($$anchor7, div_4);
                    },
                    null,
                    true
                  );
                  append($$anchor6, fragment_5);
                },
                true
              );
              append($$anchor5, fragment_4);
            },
            true
          );
          append($$anchor4, fragment_3);
        }
      );
      append($$anchor3, fragment_2);
    });
    var aside = sibling(node_1, 2);
    let attributes;
    var div_5 = child(aside);
    const class_derived_2 = derived(() => get(div)({ class: $$props.divClass }));
    var node_6 = child(div_5);
    snippet(node_6, () => $$props.children);
    reset(div_5);
    reset(aside);
    template_effect(() => {
      attributes = set_attributes(aside, attributes, {
        ...restProps,
        class: get(base)({ className: $$props.class }),
        "aria-label": $$props.ariaLabel
      });
      set_class(div_5, get(class_derived_2));
    });
    transition(3, aside, transition$1, () => transitionParams);
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
  pop();
}
delegate(["click"]);
const sidebar = ce({
  slots: {
    base: "top-0 left-0 z-50 w-64 transition-transform bg-gray-50 dark:bg-gray-800",
    active: "flex items-center text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
    nonactive: "flex items-center text-base font-normal text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
    div: "overflow-y-auto h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800",
    backdrop: "fixed top-0 start-0 z-40 w-full h-full"
  },
  variants: {
    position: {
      fixed: { base: "fixed" },
      absolute: { base: "absolute" },
      static: { base: "static" }
    },
    isOpen: {
      true: "block",
      false: "hidden"
    },
    breakpoint: {
      sm: { base: "sm:block" },
      md: { base: "md:block" },
      lg: { base: "lg:block" },
      xl: { base: "xl:block" },
      "2xl": { base: "2xl:block" }
    },
    backdrop: {
      true: { backdrop: "bg-gray-900 bg-opacity-75" }
    }
  }
});
const sidebarbutton = ce({
  base: "inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
  variants: {
    breakpoint: {
      sm: "sm:hidden",
      md: "md:hidden",
      lg: "lg:hidden",
      xl: "xl:hidden",
      "2xl": "2xl:hidden"
    }
  }
});
const sidebarcta = ce({
  slots: {
    base: "p-4 mt-6 bg-primary-50 rounded-lg dark:bg-primary-900",
    div: "flex items-center mb-3",
    span: "bg-primary-100 text-primary-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-900"
  }
});
const sitebarbrand = ce({
  slots: {
    base: "flex items-center ps-2.5 mb-5",
    img: "h-6 me-3 sm:h-7",
    span: "self-center text-xl font-semibold whitespace-nowrap dark:text-white"
  }
});
const sidebardropdownwrapper = ce({
  slots: {
    base: "",
    btn: "flex items-center w-full text-base font-normal text-gray-900 rounded transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    span: "flex-1 ms-3 text-left whitespace-nowrap",
    svg: "h-3 w-3 text-gray-800 dark:text-white",
    ul: "py-2 space-y-2"
  }
});
const cardPlaceholder = ce({
  slots: {
    base: "p-4 rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700",
    imageArea: "mb-4 flex h-48 items-center justify-center rounded bg-gray-300 dark:bg-gray-700",
    imageIcon: "text-gray-200 dark:text-gray-600",
    line: "rounded-full bg-gray-200 dark:bg-gray-700",
    footerArea: "mt-4 flex items-center space-x-3 rtl:space-x-reverse"
  },
  variants: {
    size: {
      sm: { base: "max-w-sm" },
      md: { base: "max-w-md" },
      lg: { base: "max-w-lg" },
      xl: { base: "max-w-xl" },
      "2xl": { base: "max-w-2xl" }
    }
  }
});
const imagePlaceholder = ce({
  slots: {
    base: "space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center",
    image: "flex w-full items-center justify-center rounded bg-gray-300 sm:w-96 dark:bg-gray-700",
    svg: "text-gray-200",
    content: "w-full",
    line: "rounded-full bg-gray-200 dark:bg-gray-700"
  },
  variants: {
    size: {
      sm: {
        image: "h-32",
        content: "space-y-2"
      },
      md: {
        image: "h-48",
        content: "space-y-3"
      },
      lg: {
        image: "h-64",
        content: "space-y-4"
      }
    },
    rounded: {
      none: {
        image: "rounded-none",
        line: "rounded-none"
      },
      sm: {
        image: "rounded-sm",
        line: "rounded-sm"
      },
      md: {
        image: "rounded",
        line: "rounded"
      },
      lg: {
        image: "rounded-lg",
        line: "rounded-lg"
      },
      full: {
        image: "rounded-full",
        line: "rounded-full"
      }
    }
  }
});
const listPlaceholder = ce({
  slots: {
    base: "p-4 space-y-4 max-w-md rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700",
    item: "flex items-center justify-between",
    itemContent: "",
    itemTitle: "mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600",
    itemSubtitle: "h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700",
    itemExtra: "h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"
  },
  variants: {
    size: {
      sm: {
        base: "p-3 space-y-3 max-w-sm md:p-4",
        itemTitle: "mb-2 h-2 w-20",
        itemSubtitle: "h-1.5 w-28",
        itemExtra: "h-2 w-10"
      },
      md: {},
      // default size
      lg: {
        base: "p-5 space-y-5 max-w-lg md:p-7",
        itemTitle: "mb-3 h-3 w-28",
        itemSubtitle: "h-2.5 w-36",
        itemExtra: "h-3 w-14"
      }
    },
    rounded: {
      none: { base: "rounded-none" },
      sm: { base: "rounded-sm" },
      md: { base: "rounded" },
      lg: { base: "rounded-lg" },
      full: { base: "rounded-full p-8 md:p-16" }
    }
  }
});
const skeleton = ce({
  slots: {
    wrapper: "animate-pulse",
    line: "rounded-full bg-gray-200 dark:bg-gray-700"
  },
  variants: {
    size: {
      sm: {
        wrapper: "max-w-sm"
      },
      md: {
        wrapper: "max-w-md"
      },
      lg: {
        wrapper: "max-w-lg"
      },
      xl: {
        wrapper: "max-w-xl"
      },
      "2xl": {
        wrapper: "max-w-2xl"
      }
    }
  }
});
const testimonialPlaceholder = ce({
  slots: {
    wrapper: "animate-pulse",
    line1: "rounded-full bg-gray-200 dark:bg-gray-700",
    line2: "rounded-full bg-gray-300 dark:bg-gray-700",
    svg: "me-2 h-10 w-10 text-gray-200 dark:text-gray-700",
    subContent: "mt-4 flex items-center justify-center"
  }
});
const textPlaceholder = ce({
  slots: {
    baseWrapper: "space-y-2.5 animate-pulse",
    divWrapper: "flex items-center space-x-2 rtl:space-x-reverse",
    lineA: "rounded-full bg-gray-200 dark:bg-gray-700",
    lineB: "rounded-full bg-gray-300 dark:bg-gray-600"
  },
  variants: {
    size: {
      sm: { baseWrapper: "max-w-sm" },
      md: { baseWrapper: "max-w-md" },
      lg: { baseWrapper: "max-w-lg" },
      xl: { baseWrapper: "max-w-xl" },
      "2xl": { baseWrapper: "max-w-2xl" }
    }
  }
});
const videoPlaceholder = ce({
  base: "flex justify-center items-center h-56 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700",
  variants: {
    size: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl"
    }
  }
});
const widgetPlaceholder = ce({
  slots: {
    base: "p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700",
    wrapper: "mt-4 flex items-baseline space-x-6 rtl:space-x-reverse",
    hLine: "rounded-full bg-gray-200 dark:bg-gray-700",
    vLine: "w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"
  }
});
const spinner = ce({
  base: "inline-block animate-spin text-gray-300",
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: "fill-primary-600",
      secondary: "fill-secondary-600",
      gray: "fill-gray-600 dark:fill-gray-300",
      red: "fill-red-600",
      orange: "fill-orange-500",
      amber: "fill-amber-500",
      yellow: "fill-yellow-400",
      lime: "fill-lime-500",
      green: "fill-green-500",
      emerald: "fill-emerald-500",
      teal: "fill-teal-500",
      cyan: "fill-cyan-500",
      sky: "fill-sky-500",
      blue: "fill-blue-600",
      indigo: "fill-indigo-600",
      violet: "fill-violet-600",
      purple: "fill-purple-600",
      fuchsia: "fill-fuchsia-600",
      pink: "fill-pink-600",
      rose: "fill-rose-600"
    },
    size: {
      "4": "w-4 h-4",
      "5": "w-5 h-5",
      "6": "w-6 h-6",
      "8": "w-8 h-8",
      "10": "w-10 h-10",
      "12": "w-12 h-12",
      "16": "w-16 h-16"
    }
  },
  defaultVariants: {
    color: "primary",
    size: "8"
  }
});
var on_click = (_2, open) => open(true);
var root_3 = template(`<div><div><!></div></div>`);
var root$2 = template(`<li><button type="button" role="tab"><!></button> <!></li>`);
function TabItem($$anchor, $$props) {
  push($$props, true);
  let open = prop($$props, "open", 7, false), title = prop($$props, "title", 3, "Tab title"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "titleSlot",
    "open",
    "title",
    "activeClass",
    "inactiveClass",
    "class",
    "disabled",
    "tabStyle"
  ]);
  const ctx = getContext("ctx");
  let compoTabStyle = derived(() => $$props.tabStyle ? $$props.tabStyle : ctx.tabStyle || "full");
  const $$d = derived(() => tabs({
    tabStyle: get(compoTabStyle),
    hasDivider: true
  })), active = derived(() => get($$d).active), inactive = derived(() => get($$d).inactive);
  let selected = ctx.selected ?? writable();
  const tabId = `tab-${Math.random().toString(36).substring(2)}`;
  function init(node) {
    selected.set(node);
    const destroy = selected.subscribe((x2) => {
      if (x2 !== node) {
        open(false);
      }
    });
    return { destroy };
  }
  const $$d_1 = derived(() => tabItem({ open: open(), disabled: $$props.disabled })), base = derived(() => get($$d_1).base), button2 = derived(() => get($$d_1).button), content = derived(() => get($$d_1).content);
  var li = root$2();
  let attributes;
  var button_1 = child(li);
  button_1.__click = [on_click, open];
  set_attribute(button_1, "id", tabId);
  const class_derived = derived(() => get(button2)({
    class: open() ? $$props.activeClass ?? get(active)() : $$props.inactiveClass ?? get(inactive)()
  }));
  var node_1 = child(button_1);
  if_block(
    node_1,
    () => $$props.titleSlot,
    ($$anchor2) => {
      var fragment = comment();
      var node_2 = first_child(fragment);
      snippet(node_2, () => $$props.titleSlot);
      append($$anchor2, fragment);
    },
    ($$anchor2) => {
      var text$1 = text();
      template_effect(() => set_text(text$1, title()));
      append($$anchor2, text$1);
    }
  );
  reset(button_1);
  var node_3 = sibling(button_1, 2);
  if_block(node_3, () => open() && $$props.children, ($$anchor2) => {
    var div = root_3();
    const class_derived_1 = derived(() => get(content)());
    var div_1 = child(div);
    var node_4 = child(div_1);
    snippet(node_4, () => $$props.children);
    reset(div_1);
    action(div_1, ($$node) => init($$node));
    reset(div);
    template_effect(() => set_class(div, get(class_derived_1)));
    append($$anchor2, div);
  });
  reset(li);
  template_effect(() => {
    attributes = set_attributes(li, attributes, {
      ...restProps,
      class: get(base)({ class: $$props.class }),
      role: "presentation"
    });
    set_attribute(button_1, "aria-controls", ctx.panelId);
    set_attribute(button_1, "aria-selected", open());
    button_1.disabled = $$props.disabled;
    set_class(button_1, get(class_derived));
  });
  append($$anchor, li);
  pop();
}
delegate(["click"]);
const tabs = ce({
  slots: {
    base: "flex flex-wrap space-x-2 rtl:space-x-reverse",
    content: "p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4",
    divider: "h-px bg-gray-200 dark:bg-gray-700",
    active: "p-4 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500",
    inactive: "p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
  },
  variants: {
    tabStyle: {
      full: {
        active: "p-4 w-full rounded-none group-first:rounded-s-lg group-last:rounded-e-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:bg-gray-700 dark:text-white",
        inactive: "p-4 w-full rounded-none group-first:rounded-s-lg group-last:rounded-e-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      },
      pill: {
        active: "py-3 px-4 text-white bg-primary-600 rounded-lg",
        inactive: "py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
      },
      underline: {
        base: "-mb-px",
        active: "p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500 bg-transparent",
        inactive: "p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400 bg-transparent"
      },
      none: {
        active: "",
        inactive: ""
      }
    },
    hasDivider: {
      true: {}
    }
  },
  compoundVariants: [
    {
      tabStyle: ["full", "pill"],
      hasDivider: true,
      class: {
        divider: "hidden"
      }
    }
  ],
  defaultVariants: {
    tabStyle: "none",
    hasDivider: true
  }
});
const tabItem = ce({
  slots: {
    base: "group focus-within:z-10",
    button: "inline-block text-sm font-medium text-center disabled:cursor-not-allowed",
    content: "hidden"
  },
  variants: {
    open: {
      true: {
        button: "active"
      }
    },
    disabled: {
      true: {
        button: "cursor-not-allowed"
      }
    }
  },
  compoundVariants: [
    {
      open: true,
      class: {
        button: ""
        // We'll merge this with activeClasses from context
      }
    },
    {
      open: false,
      class: {
        button: ""
        // We'll merge this with inactiveClasses from context
      }
    }
  ],
  defaultVariants: {
    open: false,
    disabled: false
  }
});
var root_1 = template(`<button><!></button>`);
var root$1 = template(`<td><!></td>`);
function TableBodyCell($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "class",
    "colspan",
    "onclick"
  ]);
  const base = derived(() => tablebodycell({ className: $$props.class }));
  var td = root$1();
  let attributes;
  var node = child(td);
  if_block(
    node,
    () => $$props.onclick,
    ($$anchor2) => {
      var button2 = root_1();
      button2.__click = function(...$$args) {
        var _a;
        (_a = $$props.onclick) == null ? void 0 : _a.apply(this, $$args);
      };
      var node_1 = child(button2);
      if_block(node_1, () => $$props.children, ($$anchor3) => {
        var fragment = comment();
        var node_2 = first_child(fragment);
        snippet(node_2, () => $$props.children);
        append($$anchor3, fragment);
      });
      reset(button2);
      append($$anchor2, button2);
    },
    ($$anchor2) => {
      var fragment_1 = comment();
      var node_3 = first_child(fragment_1);
      if_block(
        node_3,
        () => $$props.children,
        ($$anchor3) => {
          var fragment_2 = comment();
          var node_4 = first_child(fragment_2);
          snippet(node_4, () => $$props.children);
          append($$anchor3, fragment_2);
        },
        null,
        true
      );
      append($$anchor2, fragment_1);
    }
  );
  reset(td);
  template_effect(() => attributes = set_attributes(td, attributes, {
    ...restProps,
    class: get(base),
    colspan: $$props.colspan ?? 1
  }));
  append($$anchor, td);
  pop();
}
delegate(["click"]);
const table = ce({
  slots: {
    base: "",
    table: "w-full text-left text-sm"
  },
  variants: {
    color: {
      // default, primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      default: { table: "text-gray-500 dark:text-gray-400" },
      primary: { table: "text-primary-100 dark:text-primary-100" },
      secondary: { table: "text-secondary-100 dark:text-secondary-100" },
      gray: { table: "text-gray-100 dark:text-gray-100" },
      red: { table: "text-red-100 dark:text-red-100" },
      orange: { table: "text-orange-100 dark:text-orange-100" },
      amber: { table: "text-amber-100 dark:text-amber-100" },
      yellow: { table: "text-yellow-100 dark:text-yellow-100" },
      lime: { table: "text-lime-100 dark:text-lime-100" },
      green: { table: "text-green-100 dark:text-green-100" },
      emerald: { table: "text-emerald-100 dark:text-emerald-100" },
      teal: { table: "text-teal-100 dark:text-teal-100" },
      cyan: { table: "text-cyan-100 dark:text-cyan-100" },
      sky: { table: "text-sky-100 dark:text-sky-100" },
      blue: { table: "text-blue-100 dark:text-blue-100" },
      indigo: { table: "text-indigo-100 dark:text-indigo-100" },
      violet: { table: "text-violet-100 dark:text-violet-100" },
      purple: { table: "text-purple-100 dark:text-purple-100" },
      fuchsia: { table: "text-fuchsia-100 dark:text-fuchsia-100" },
      pink: { table: "text-pink-100 dark:text-pink-100" },
      rose: { table: "text-rose-100 dark:text-rose-100" }
    },
    shadow: {
      true: { base: "shadow-md sm:rounded-lg" }
    }
  }
});
const tablebodyrow = ce({
  base: "",
  variants: {
    color: {
      default: "bg-white dark:bg-gray-800 dark:border-gray-700",
      primary: "bg-white bg-primary-500 border-primary-400",
      secondary: "bg-white bg-secondary-500 border-secondary-400",
      gray: "bg-gray-500 border-gray-400",
      red: "bg-red-500 border-red-400",
      orange: "bg-orange-500 border-orange-400",
      amber: "bg-amber-500 border-amber-400",
      yellow: "bg-yellow-500 border-yellow-400",
      lime: "bg-lime-500 border-lime-400",
      green: "bg-white bg-green-500 border-green-400",
      emerald: "bg-emerald-500 border-emerald-400",
      teal: "bg-teal-500 border-teal-400",
      cyan: "bg-cyan-500 border-cyan-400",
      sky: "bg-sky-500 border-sky-400",
      blue: "bg-white bg-blue-500 border-blue-400",
      indigo: "bg-indigo-500 border-indigo-400",
      violet: "bg-violet-500 border-violet-400",
      purple: "bg-purple-500 border-purple-400",
      fuchsia: "bg-fuchsia-500 border-fuchsia-400",
      pink: "bg-pink-500 border-pink-400",
      rose: "bg-rose-500 border-rose-400"
    },
    hoverable: {
      true: ""
    },
    striped: {
      true: ""
    },
    border: {
      true: "border-b last:border-b-0"
    }
  },
  compoundVariants: [
    {
      hoverable: true,
      color: "default",
      class: "hover:bg-gray-50 dark:hover:bg-gray-600"
    },
    {
      hoverable: true,
      color: "primary",
      class: "hover:bg-primary-400 dark:hover:bg-primary-400"
    },
    {
      hoverable: true,
      color: "secondary",
      class: "hover:bg-secondary-400 dark:hover:bg-secondary-400"
    },
    {
      hoverable: true,
      color: "gray",
      class: "hover:bg-gray-400 dark:hover:bg-gray-400"
    },
    {
      hoverable: true,
      color: "red",
      class: "hover:bg-red-400 dark:hover:bg-red-400"
    },
    {
      hoverable: true,
      color: "orange",
      class: "hover:bg-orange-400 dark:hover:bg-orange-400"
    },
    {
      hoverable: true,
      color: "amber",
      class: "hover:bg-amber-400 dark:hover:bg-amber-400"
    },
    {
      hoverable: true,
      color: "yellow",
      class: "hover:bg-yellow-400 dark:hover:bg-yellow-400"
    },
    {
      hoverable: true,
      color: "lime",
      class: "hover:bg-lime-400 dark:hover:bg-lime-400"
    },
    {
      hoverable: true,
      color: "green",
      class: "hover:bg-green-400 dark:hover:bg-green-400"
    },
    {
      hoverable: true,
      color: "emerald",
      class: "hover:bg-emerald-400 dark:hover:bg-emerald-400"
    },
    {
      hoverable: true,
      color: "teal",
      class: "hover:bg-teal-400 dark:hover:bg-teal-400"
    },
    {
      hoverable: true,
      color: "cyan",
      class: "hover:bg-cyan-400 dark:hover:bg-cyan-400"
    },
    {
      hoverable: true,
      color: "sky",
      class: "hover:bg-sky-400 dark:hover:bg-sky-400"
    },
    {
      hoverable: true,
      color: "blue",
      class: "hover:bg-blue-400 dark:hover:bg-blue-400"
    },
    {
      hoverable: true,
      color: "indigo",
      class: "hover:bg-indigo-400 dark:hover:bg-indigo-400"
    },
    {
      hoverable: true,
      color: "violet",
      class: "hover:bg-violet-400 dark:hover:bg-violet-400"
    },
    {
      hoverable: true,
      color: "purple",
      class: "hover:bg-purple-400 dark:hover:bg-purple-400"
    },
    {
      hoverable: true,
      color: "fuchsia",
      class: "hover:bg-fuchsia-400 dark:hover:bg-fuchsia-400"
    },
    {
      hoverable: true,
      color: "pink",
      class: "hover:bg-pink-400 dark:hover:bg-pink-400"
    },
    {
      hoverable: true,
      color: "rose",
      class: "hover:bg-rose-400 dark:hover:bg-rose-400"
    },
    {
      striped: true,
      color: "default",
      class: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
    },
    {
      striped: true,
      color: "primary",
      class: "odd:bg-primary-500 even:bg-primary-600 odd:dark:bg-primary-500 even:dark:bg-primary-600"
    },
    {
      striped: true,
      color: "secondary",
      class: "odd:bg-secondary-500 even:bg-secondary-600 odd:dark:bg-secondary-500 even:dark:bg-secondary-600"
    },
    {
      striped: true,
      color: "gray",
      class: "odd:bg-gray-500 even:bg-gray-600 odd:dark:bg-gray-500 even:dark:bg-gray-600"
    },
    // default, primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    {
      striped: true,
      color: "red",
      class: "odd:bg-red-500 even:bg-red-600 odd:dark:bg-red-500 even:dark:bg-red-600"
    },
    {
      striped: true,
      color: "orange",
      class: "odd:bg-orange-500 even:bg-orange-600 odd:dark:bg-orange-500 even:dark:bg-orange-600"
    },
    {
      striped: true,
      color: "amber",
      class: "odd:bg-amber-500 even:bg-amber-600 odd:dark:bg-amber-500 even:dark:bg-amber-600"
    },
    {
      striped: true,
      color: "yellow",
      class: "odd:bg-yellow-500 even:bg-yellow-600 odd:dark:bg-yellow-500 even:dark:bg-yellow-600"
    },
    {
      striped: true,
      color: "lime",
      class: "odd:bg-lime-500 even:bg-lime-600 odd:dark:bg-lime-500 even:dark:bg-lime-600"
    },
    {
      striped: true,
      color: "green",
      class: "odd:bg-green-500 even:bg-green-600 odd:dark:bg-green-500 even:dark:bg-green-600"
    },
    {
      striped: true,
      color: "emerald",
      class: "odd:bg-emerald-500 even:bg-emerald-600 odd:dark:bg-emerald-500 even:dark:bg-emerald-600"
    },
    {
      striped: true,
      color: "teal",
      class: "odd:bg-teal-500 even:bg-teal-600 odd:dark:bg-teal-500 even:dark:bg-teal-600"
    },
    {
      striped: true,
      color: "cyan",
      class: "odd:bg-cyan-500 even:bg-cyan-600 odd:dark:bg-cyan-500 even:dark:bg-cyan-600"
    },
    {
      striped: true,
      color: "sky",
      class: "odd:bg-sky-500 even:bg-sky-600 odd:dark:bg-sky-500 even:dark:bg-sky-600"
    },
    {
      striped: true,
      color: "blue",
      class: "odd:bg-blue-500 even:bg-blue-600 odd:dark:bg-blue-500 even:dark:bg-blue-600"
    },
    {
      striped: true,
      color: "indigo",
      class: "odd:bg-indigo-500 even:bg-indigo-600 odd:dark:bg-indigo-500 even:dark:bg-indigo-600"
    },
    {
      striped: true,
      color: "violet",
      class: "odd:bg-violet-500 even:bg-violet-600 odd:dark:bg-violet-500 even:dark:bg-violet-600"
    },
    {
      striped: true,
      color: "purple",
      class: "odd:bg-purple-500 even:bg-purple-600 odd:dark:bg-purple-500 even:dark:bg-purple-600"
    },
    {
      striped: true,
      color: "fuchsia",
      class: "odd:bg-fuchsia-500 even:bg-fuchsia-600 odd:dark:bg-fuchsia-500 even:dark:bg-fuchsia-600"
    },
    {
      striped: true,
      color: "pink",
      class: "odd:bg-pink-500 even:bg-pink-600 odd:dark:bg-pink-500 even:dark:bg-pink-600"
    },
    {
      striped: true,
      color: "rose",
      class: "odd:bg-rose-500 even:bg-rose-600 odd:dark:bg-rose-500 even:dark:bg-rose-600"
    }
  ]
});
const tablehead = ce({
  base: "text-xs uppercase",
  variants: {
    color: {
      // default, primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      default: "text-gray-700 dark:text-gray-400 bg-gray-50 dark:bg-gray-700",
      primary: "text-white dark:text-white bg-primary-700 dark:bg-primary-700",
      secondary: "text-white dark:text-white bg-secondary-700 dark:bg-secondary-700",
      gray: "text-white dark:text-white bg-gray-700 dark:bg-gray-700",
      red: "text-white dark:text-white bg-red-700 dark:bg-red-700",
      orange: "text-white dark:text-white bg-orange-700 dark:bg-orange-700",
      amber: "text-white dark:text-white bg-amber-700 dark:bg-amber-700",
      yellow: "text-white dark:text-white bg-yellow-700 dark:bg-yellow-700",
      lime: "text-white dark:text-white bg-lime-700 dark:bg-lime-700",
      green: "text-white dark:text-white bg-green-700 dark:bg-green-700",
      emerald: "text-white dark:text-white bg-emerald-700 dark:bg-emerald-700",
      teal: "text-white dark:text-white bg-teal-700 dark:bg-teal-700",
      cyan: "text-white dark:text-white bg-cyan-700 dark:bg-cyan-700",
      sky: "text-white dark:text-white bg-sky-700 dark:bg-sky-700",
      blue: "text-white dark:text-white bg-blue-700 dark:bg-blue-700",
      indigo: "text-white dark:text-white bg-indigo-700 dark:bg-indigo-700",
      violet: "text-white dark:text-white bg-violet-700 dark:bg-violet-700",
      purple: "text-white dark:text-white bg-purple-700 dark:bg-purple-700",
      fuchsia: "text-white dark:text-white bg-fuchsia-700 dark:bg-fuchsia-700",
      pink: "text-white dark:text-white bg-pink-700 dark:bg-pink-700",
      rose: "text-white dark:text-white bg-rose-700 dark:bg-rose-700"
    },
    noborder: {
      true: "",
      false: ""
    },
    striped: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      color: "default",
      noborder: true,
      class: "bg-transparent dark:bg-transparent"
    },
    {
      color: "default",
      striped: true,
      class: "bg-transparent dark:bg-transparent border-gray-700"
    },
    {
      striped: true,
      color: "blue",
      class: "border-blue-400"
    },
    {
      striped: true,
      color: "green",
      class: "border-green-400"
    },
    {
      striped: true,
      color: "red",
      class: "border-red-400"
    },
    {
      striped: true,
      color: "yellow",
      class: "border-yellow-400"
    },
    {
      striped: true,
      color: "purple",
      class: "border-purple-400"
    },
    {
      striped: true,
      color: "indigo",
      class: "border-indigo-400"
    },
    {
      striped: true,
      color: "pink",
      class: "border-pink-400"
    }
  ]
});
const tablebodycell = ce({
  base: "px-6 py-4 whitespace-nowrap font-medium"
});
const tableheadcell = ce({
  base: "px-6 py-3"
});
const activity = ce({
  base: "relative border-s border-gray-200 dark:border-gray-700"
});
const activityitem = ce({
  slots: {
    li: "mb-10 ms-6",
    span: "flex absolute -start-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900",
    img: "rounded-full shadow-lg",
    outerDiv: "p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600",
    innerDiv: "justify-between items-center mb-3 sm:flex",
    time: "mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0",
    title: "text-sm font-normal text-gray-500 lex dark:text-gray-300",
    text: "p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300"
  }
});
const group = ce({
  slots: {
    div: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700",
    time: "text-lg font-semibold text-gray-900 dark:text-white",
    ol: "mt-3 divide-y divider-gray-200 dark:divide-gray-700"
  }
});
const groupitem = ce({
  slots: {
    a: "block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700",
    img: "me-3 mb-3 w-12 h-12 rounded-full sm:mb-0",
    div: "text-gray-600 dark:text-gray-400",
    title: "text-base font-normal",
    span: "inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400"
  }
});
const timeline = ce({
  variants: {
    order: {
      group: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700",
      horizontal: "sm:flex",
      activity: "relative border-s border-gray-200 dark:border-gray-700",
      vertical: "relative border-s border-gray-200 dark:border-gray-700",
      default: "relative border-s border-gray-200 dark:border-gray-700"
    }
  },
  defaultVariants: {
    order: "default"
  }
});
const timelineitem = ce({
  slots: {
    li: "",
    div: "",
    time: "",
    h3: "",
    svg: "w-3 h-3 text-primary-600 dark:text-primary-400"
  },
  variants: {
    order: {
      default: {
        li: "mb-10 ms-4",
        div: "absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700",
        time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        h3: "text-lg font-semibold text-gray-900 dark:text-white"
      },
      vertical: {
        li: "mb-10 ms-6",
        div: "flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900",
        time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        h3: "flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
      },
      horizontal: {
        li: "relative mb-6 sm:mb-0",
        div: "flex items-center",
        time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        h3: "text-lg font-semibold text-gray-900 dark:text-white"
      },
      activity: {
        li: "mb-10 ms-6",
        div: "flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900",
        time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        h3: "text-lg font-semibold text-gray-900 dark:text-white"
      },
      group: {
        li: "",
        div: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700",
        time: "text-lg font-semibold text-gray-900 dark:text-white",
        h3: "text-lg font-semibold text-gray-900 dark:text-white"
      }
    }
  },
  defaultVariants: {
    order: "default"
  }
});
const toast = ce({
  slots: {
    base: "flex w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 gap-3",
    icon: "w-8 h-8 inline-flex items-center justify-center shrink-0 rounded-lg",
    content: "w-full text-sm font-normal",
    close: "ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
  },
  variants: {
    position: {
      "top-left": { base: "absolute top-5 start-5" },
      "top-right": { base: "absolute top-5 end-5" },
      "bottom-left": { base: "absolute bottom-5 start-5" },
      "bottom-right": { base: "absolute bottom-5 end-5" }
    },
    color: {
      // primary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: {
        icon: "text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200",
        close: "text-primary-500 dark:text-primary-200 hover:text-primary-600 dark:hover:text-primary-500"
      },
      gray: {
        icon: "text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-200",
        close: "text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-500"
      },
      red: {
        icon: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
        close: "text-red-500 dark:text-red-200 hover:text-red-600 dark:hover:text-red-500"
      },
      orange: {
        icon: "text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200",
        close: "text-orange-500 dark:text-orange-200 hover:text-orange-600 dark:hover:text-orange-500"
      },
      amber: {
        icon: "text-amber-500 bg-amber-100 dark:bg-amber-700 dark:text-amber-200",
        close: "text-amber-500 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-500"
      },
      yellow: {
        icon: "text-yellow-500 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200",
        close: "text-yellow-500 dark:text-yellow-200 hover:text-yellow-600 dark:hover:text-yellow-500"
      },
      lime: {
        icon: "text-lime-500 bg-lime-100 dark:bg-lime-700 dark:text-lime-200",
        close: "text-lime-500 dark:text-lime-200 hover:text-lime-600 dark:hover:text-lime-500"
      },
      green: {
        icon: "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
        close: "text-green-500 dark:text-green-200 hover:text-green-600 dark:hover:text-green-500"
      },
      emerald: {
        icon: "text-emerald-500 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-200",
        close: "text-emerald-500 dark:text-emerald-200 hover:text-emerald-600 dark:hover:text-emerald-500"
      },
      teal: {
        icon: "text-teal-500 bg-teal-100 dark:bg-teal-800 dark:text-teal-200",
        close: "text-teal-500 dark:text-teal-200 hover:text-teal-600 dark:hover:text-teal-500"
      },
      cyan: {
        icon: "text-cyan-500 bg-cyan-100 dark:bg-cyan-800 dark:text-cyan-200",
        close: "text-cyan-500 dark:text-cyan-200 hover:text-cyan-600 dark:hover:text-cyan-500"
      },
      sky: {
        icon: "text-sky-500 bg-sky-100 dark:bg-sky-800 dark:text-sky-200",
        close: "text-sky-500 dark:text-sky-200 hover:text-sky-600 dark:hover:text-sky-500"
      },
      blue: {
        icon: "text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200",
        close: "text-blue-500 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-500"
      },
      indigo: {
        icon: "text-indigo-500 bg-indigo-100 dark:bg-indigo-800 dark:text-indigo-200",
        close: "text-indigo-500 dark:text-indigo-200 hover:text-indigo-600 dark:hover:text-indigo-500"
      },
      violet: {
        icon: "text-violet-500 bg-violet-100 dark:bg-violet-800 dark:text-violet-200",
        close: "text-violet-500 dark:text-violet-200 hover:text-violet-600 dark:hover:text-violet-500"
      },
      purple: {
        icon: "text-purple-500 bg-purple-100 dark:bg-purple-800 dark:text-purple-200",
        close: "text-purple-500 dark:text-purple-200 hover:text-purple-600 dark:hover:text-purple-500"
      },
      fuchsia: {
        icon: "text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-800 dark:text-fuchsia-200",
        close: "text-fuchsia-500 dark:text-fuchsia-200 hover:text-fuchsia-600 dark:hover:text-fuchsia-500"
      },
      pink: {
        icon: "text-pink-500 bg-pink-100 dark:bg-pink-700 dark:text-pink-200",
        close: "text-pink-500 dark:text-pink-200 hover:text-pink-600 dark:hover:text-pink-500"
      },
      rose: {
        icon: "text-rose-500 bg-rose-100 dark:bg-rose-700 dark:text-rose-200",
        close: "text-rose-500 dark:text-rose-200 hover:text-rose-600 dark:hover:text-rose-500"
      }
    },
    align: {
      true: { base: "items-center" },
      false: { base: "items-start" }
    }
  }
});
const toolbar = ce({
  slots: {
    base: "flex justify-between items-center",
    content: "flex flex-wrap items-center"
  },
  variants: {
    embedded: {
      true: {},
      false: {
        base: "py-2 px-3"
      }
    },
    color: {
      default: {},
      primary: {
        base: "bg-primary-100 text-primary-800"
      },
      secondary: {
        base: "bg-secondary-100 text-secondary-800"
      }
      // Add more color variants as needed
    },
    separators: {
      true: {
        content: "sm:divide-x rtl:divide-x-reverse"
      }
    }
  },
  compoundVariants: [
    {
      embedded: true,
      color: "default",
      class: {
        base: "bg-transparent"
      }
    }
  ]
});
const toolbarGroup = ce({
  base: "flex items-center",
  variants: {
    spacing: {
      default: "space-x-1 rtl:space-x-reverse",
      tight: "space-x-0.5 rtl:space-x-reverse",
      loose: "space-x-2 rtl:space-x-reverse"
    },
    padding: {
      default: "sm:pe-4 sm:ps-4",
      none: ""
    },
    position: {
      middle: "",
      first: "sm:ps-0",
      last: "sm:pe-0"
    }
  },
  compoundVariants: [
    {
      position: ["first", "last"],
      class: "sm:px-0"
    }
  ]
});
const toolbarButton = ce({
  base: "focus:outline-none whitespace-normal",
  variants: {
    color: {
      dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
      gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
      red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
      yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
      green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
      indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
      purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
      pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
      blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
      primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
      default: "focus:ring-gray-400 hover:bg-gray-100"
    },
    size: {
      xs: "m-0.5 rounded-sm focus:ring-1 p-0.5",
      sm: "m-0.5 rounded focus:ring-1 p-0.5",
      md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
      lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
    },
    background: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      color: "default",
      background: true,
      class: "dark:hover:bg-gray-600"
    },
    {
      color: "default",
      background: false,
      class: "dark:hover:bg-gray-700"
    }
  ]
});
const tooltip = ce({
  slots: {
    base: "absolute bg-gray-800 text-white px-2 py-1 rounded text-sm z-50 pointer-events-none",
    arrowBase: "absolute w-2 h-2 rotate-45 bg-inherit"
  },
  variants: {
    color: {
      default: { base: "bg-gray-800" },
      primary: { base: "bg-primary-600" },
      secondary: { base: "bg-secondary-600" },
      gray: { base: "bg-gray-600" },
      red: { base: "bg-red-600" },
      orange: { base: "bg-orange-600" },
      amber: { base: "bg-amber-600" },
      yellow: { base: "bg-yellow-400" },
      lime: { base: "bg-lime-600" },
      green: { base: "bg-green-600" },
      emerald: { base: "bg-emerald-600" },
      teal: { base: "bg-teal-600" },
      cyan: { base: "bg-cyan-600" },
      sky: { base: "bg-sky-600" },
      blue: { base: "bg-blue-600" },
      indigo: { base: "bg-indigo-600" },
      violet: { base: "bg-violet-600" },
      purple: { base: "bg-purple-600" },
      fuchsia: { base: "bg-fuchsia-600" },
      pink: { base: "bg-pink-600" },
      rose: { base: "bg-rose-800" }
    },
    arrow: {
      true: { arrowBase: "visible" },
      false: { arrowBase: "hidden" }
    },
    position: {
      top: {},
      "top-start": {},
      "top-end": {},
      bottom: {},
      "bottom-start": {},
      "bottom-end": {},
      left: {},
      "left-start": {},
      "left-end": {},
      right: {},
      "right-start": {},
      "right-end": {}
    }
  },
  defaultVariants: {
    color: "default",
    arrow: true,
    position: "top"
  }
});
const label = ce({
  base: "text-sm rtl:text-right font-medium block",
  variants: {
    color: {
      disabled: "text-gray-500 dark:text-gray-500",
      primary: "text-primary-700 dark:text-primary-500",
      secondary: "text-secondary-700 dark:text-secondary-500",
      green: "text-green-700 dark:text-green-500",
      emerald: "text-emerald-700 dark:text-emerald-500",
      red: "text-red-700 dark:text-red-500",
      blue: "text-blue-700 dark:text-blue-500",
      yellow: "text-yellow-700 dark:text-yellow-500",
      orange: "text-orange-700 dark:text-orange-500",
      gray: "text-gray-700 dark:text-gray-200",
      teal: "text-teal-700 dark:text-teal-500",
      cyan: "text-cyan-700 dark:text-cyan-500",
      sky: "text-sky-700 dark:text-sky-500",
      indigo: "text-indigo-700 dark:text-indigo-500",
      lime: "text-lime-700 dark:text-lime-500",
      amber: "text-amber-700 dark:text-amber-500",
      violet: "text-violet-700 dark:text-violet-500",
      purple: "text-purple-700 dark:text-purple-500",
      fuchsia: "text-fuchsia-700 dark:text-fuchsia-500",
      pink: "text-pink-700 dark:text-pink-500",
      rose: "text-rose-700 dark:text-rose-500"
    }
  }
});
const checkbox = ce({
  slots: {
    base: "w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 me-2 rounded",
    label: ""
  },
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: {
        base: "text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600"
      },
      secondary: {
        base: "text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600"
      },
      gray: {
        base: "text-gray-600 focus:ring-gray-600 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
      },
      red: {
        base: "text-red-600 focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600"
      },
      orange: {
        base: "text-orange-600 focus:ring-orange-600 dark:ring-offset-orange-600 dark:focus:ring-orange-600"
      },
      amber: {
        base: "text-amber-600 focus:ring-amber-600 dark:ring-offset-amber-600 dark:focus:ring-amber-600"
      },
      yellow: {
        base: "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400"
      },
      lime: {
        base: "text-lime-700 focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700"
      },
      green: {
        base: "text-green-600 focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600"
      },
      emerald: {
        base: "text-emerald-600 focus:ring-emerald-600 dark:ring-offset-emerald-600 dark:focus:ring-emerald-600"
      },
      teal: {
        base: "text-teal-600 focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600"
      },
      cyan: {
        base: "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600"
      },
      sky: {
        base: "text-sky-600 focus:ring-sky-600 dark:ring-offset-sky-600 dark:focus:ring-sky-600"
      },
      blue: {
        base: "text-blue-700 focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700"
      },
      indigo: {
        base: "text-indigo-700 focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700"
      },
      violet: {
        base: "text-violet-600 focus:ring-violet-600 dark:ring-offset-violet-600 dark:focus:ring-violet-600"
      },
      purple: {
        base: "text-purple-600 focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600"
      },
      fuchsia: {
        base: "text-fuchsia-600 focus:ring-fuchsia-600 dark:ring-offset-fuchsia-600 dark:focus:ring-fuchsia-600"
      },
      pink: {
        base: "text-pink-600 focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600"
      },
      rose: {
        base: "text-rose-600 focus:ring-rose-600 dark:ring-offset-rose-600 dark:focus:ring-rose-600"
      }
    },
    tinted: {
      true: { base: "dark:bg-gray-600 dark:border-gray-500" },
      false: { base: "dark:bg-gray-700 dark:border-gray-600" }
    },
    custom: {
      true: { base: "sr-only peer" }
    },
    rounded: {
      true: { base: "rounded" }
    },
    inline: {
      true: {
        label: "inline-flex",
        false: "flex items-center"
      }
    }
  },
  defaultVariants: {
    color: "primary"
  }
});
const dropzone = ce({
  base: "flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
});
var root = template(`<button type="button"><!></button> <label class="hidden"><input></label>`, 1);
function Dropzone($$anchor, $$props) {
  push($$props, true);
  let files = prop($$props, "files", 15), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "files",
    "class"
  ]);
  const base = derived(() => dropzone({ className: $$props.class }));
  let input2;
  function keydown(ev) {
    if ([" ", "Enter"].includes(ev.key)) {
      ev.preventDefault();
      input2.click();
    }
  }
  function onClick(event2) {
    event2.preventDefault();
    input2.click();
  }
  const onDrop = function(event2) {
    event2.preventDefault();
    if (ondrop) {
      ondrop.call(this, event2);
    }
  };
  const onDragOver = function(event2) {
    event2.preventDefault();
    if (ondragover) {
      ondragover.call(this, event2);
    }
  };
  const onChange = function(event2) {
    if (onchange) {
      onchange.call(this, event2);
    }
  };
  var fragment = root();
  var button2 = first_child(fragment);
  button2.__keydown = keydown;
  button2.__click = onClick;
  var node = child(button2);
  snippet(node, () => $$props.children);
  reset(button2);
  var label2 = sibling(button2, 2);
  var input_1 = child(label2);
  remove_input_defaults(input_1);
  let attributes;
  bind_this(input_1, ($$value) => input2 = $$value, () => input2);
  reset(label2);
  template_effect(() => {
    set_class(button2, get(base));
    attributes = set_attributes(input_1, attributes, {
      ...restProps,
      onchange: onChange,
      type: "file"
    });
  });
  event("drop", button2, onDrop);
  event("dragover", button2, onDragOver);
  bind_files(input_1, files);
  append($$anchor, fragment);
  pop();
}
delegate(["keydown", "click"]);
const fileupload = ce({
  slots: {
    base: "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right p-2.5 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 text-sm rounded-lg border !p-0 dark:text-gray-400",
    wrapper: "relative w-full",
    right: "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400 end-0 p-2.5"
  },
  variants: {
    size: {
      sm: { base: "text-xs ps-9 pe-9 p-2" },
      md: { base: "text-sm ps-10 pe-10 p-2.5" },
      lg: { base: "sm:text-base ps-11 pe-11 p-3" }
    }
  }
});
const floatingLabelInput = ce({
  slots: {
    base: "relative",
    input: "block w-full text-sm text-gray-900 bg-transparent appearance-none dark:text-white focus:outline-none focus:ring-0 peer",
    label: "absolute text-sm duration-300 transform scale-75 z-10 origin-left rtl:origin-right peer-placeholder-shown:scale-100 peer-focus:scale-75"
  },
  variants: {
    inputStyle: {
      filled: {
        base: "relative",
        input: "rounded-t-lg border-0 border-b-2 bg-gray-50 dark:bg-gray-700",
        label: "-translate-y-4 start-2.5 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4"
      },
      outlined: {
        base: "relative",
        input: "rounded-lg border",
        label: "-translate-y-4 bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 start-1"
      },
      standard: {
        base: "relative z-0",
        input: "border-0 border-b-2",
        label: "-translate-y-6 -z-10 peer-focus:start-0 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
      }
    },
    size: {
      small: {},
      default: {}
    },
    color: {
      default: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-primary-500 focus:border-primary-600",
        label: "text-gray-500 dark:text-gray-400 peer-focus:text-primary-600 peer-focus:dark:text-primary-500"
      },
      primary: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-primary-500 focus:border-primary-600",
        label: "text-primary-500 dark:text-primary-400 peer-focus:text-primary-600 peer-focus:dark:text-primary-500"
      },
      secondary: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-secondary-500 focus:border-secondary-600",
        label: "text-secondary-500 dark:text-secondary-400 peer-focus:text-secondary-600 peer-focus:dark:text-secondary-500"
      },
      gray: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-gray-500 focus:border-gray-600",
        label: "text-gray-500 dark:text-gray-400 peer-focus:text-gray-600 peer-focus:dark:text-gray-500"
      },
      red: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-red-500 focus:border-red-600",
        label: "text-red-500 dark:text-red-400 peer-focus:text-red-600 peer-focus:dark:text-red-500"
      },
      orange: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-orange-500 focus:border-orange-600",
        label: "text-orange-500 dark:text-orange-400 peer-focus:text-orange-600 peer-focus:dark:text-orange-500"
      },
      amber: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-amber-500 focus:border-amber-600",
        label: "text-amber-500 dark:text-amber-400 peer-focus:text-amber-600 peer-focus:dark:text-amber-500"
      },
      yellow: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-yellow-500 focus:border-yellow-600",
        label: "text-yellow-500 dark:text-yellow-400 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500"
      },
      lime: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-lime-500 focus:border-lime-600",
        label: "text-lime-500 dark:text-lime-400 peer-focus:text-lime-600 peer-focus:dark:text-lime-500"
      },
      green: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-green-500 focus:border-green-600",
        label: "text-green-500 dark:text-green-400 peer-focus:text-green-600 peer-focus:dark:text-green-500"
      },
      emerald: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-emerald-500 focus:border-emerald-600",
        label: "text-emerald-500 dark:text-emerald-400 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500"
      },
      teal: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-teal-500 focus:border-teal-600",
        label: "text-teal-500 dark:text-teal-400 peer-focus:text-teal-600 peer-focus:dark:text-teal-500"
      },
      cyan: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-cyan-500 focus:border-cyan-600",
        label: "text-cyan-500 dark:text-cyan-400 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500"
      },
      sky: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-sky-500 focus:border-sky-600",
        label: "text-sky-500 dark:text-sky-400 peer-focus:text-sky-600 peer-focus:dark:text-sky-500"
      },
      blue: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600",
        label: "text-blue-500 dark:text-blue-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
      },
      indigo: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-indigo-500 focus:border-indigo-600",
        label: "text-indigo-500 dark:text-indigo-400 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500"
      },
      violet: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-violet-500 focus:border-violet-600",
        label: "text-violet-600 dark:text-violet-500 peer-focus:text-violet-600 peer-focus:dark:text-violet-500"
      },
      purple: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-purple-500 focus:border-purple-600",
        label: "text-purple-600 dark:text-purple-500 peer-focus:text-purple-600 peer-focus:dark:text-purple-500"
      },
      fuchsia: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-fuchsia-500 focus:border-fuchsia-600",
        label: "text-fuchsia-600 dark:text-fuchsia-500 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500"
      },
      pink: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-pink-500 focus:border-pink-600",
        label: "text-pink-600 dark:text-pink-500 peer-focus:text-pink-600 peer-focus:dark:text-pink-500"
      },
      rose: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-rose-500 focus:border-rose-600",
        label: "text-rose-600 dark:text-rose-500 peer-focus:text-rose-600 peer-focus:dark:text-rose-500"
      }
    }
  },
  compoundVariants: [
    {
      inputStyle: "filled",
      size: "small",
      class: {
        input: "px-2.5 pb-1.5 pt-4",
        label: "top-3"
      }
    },
    {
      inputStyle: "filled",
      size: "default",
      class: {
        input: "px-2.5 pb-2.5 pt-5",
        label: "top-4"
      }
    },
    {
      inputStyle: "outlined",
      size: "small",
      class: {
        input: "px-2.5 pb-1.5 pt-3",
        label: "top-1"
      }
    },
    {
      inputStyle: "outlined",
      size: "default",
      class: {
        input: "px-2.5 pb-2.5 pt-4",
        label: "top-2"
      }
    },
    {
      inputStyle: "standard",
      size: "small",
      class: {
        input: "py-2 px-0",
        label: "top-3"
      }
    },
    {
      inputStyle: "standard",
      size: "default",
      class: {
        input: "py-2.5 px-0",
        label: "top-3"
      }
    },
    {
      inputStyle: "filled",
      color: "primary",
      class: {
        input: "dark:focus:border-primary-500 focus:border-primary-600"
      }
    }
  ],
  defaultVariants: {
    inputStyle: "standard",
    size: "default",
    color: "primary"
  }
});
const helper = ce({
  base: "text-xs font-normal text-gray-500 dark:text-gray-300",
  variants: {
    color: {
      disabled: "text-gray-400 dark:text-gray-500",
      primary: "text-primary-500 dark:text-primary-400",
      secondary: "text-secondary-500 dark:text-secondary-400",
      green: "text-green-500 dark:text-green-400",
      emerald: "text-emerald-500 dark:text-emerald-400",
      red: "text-red-500 dark:text-red-400",
      blue: "text-blue-500 dark:text-blue-400",
      yellow: "text-yellow-500 dark:text-yellow-400",
      orange: "text-orange-500 dark:text-orange-400",
      gray: "text-gray-500 dark:text-gray-400",
      teal: "text-teal-500 dark:text-teal-400",
      cyan: "text-cyan-500 dark:text-cyan-400",
      sky: "text-sky-500 dark:text-sky-400",
      indigo: "text-indigo-500 dark:text-indigo-400",
      lime: "text-lime-500 dark:text-lime-400",
      amber: "text-amber-500 dark:text-amber-400",
      violet: "text-violet-500 dark:text-violet-400",
      purple: "text-purple-500 dark:text-purple-400",
      fuchsia: "text-fuchsia-500 dark:text-fuchsia-400",
      pink: "text-pink-500 dark:text-pink-400",
      rose: "text-rose-500 dark:text-rose-400"
    }
  }
});
const input = ce({
  slots: {
    base: "relative w-full",
    input: "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right focus:outline-none",
    left: "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400 pointer-events-none start-0 ps-2.5",
    right: "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400 end-0 p-2.5"
  },
  variants: {
    size: {
      sm: { input: "text-xs ps-9 pe-9 p-2" },
      md: { input: "text-sm ps-10 pe-10 p-2.5" },
      lg: { input: "sm:text-base ps-11 pe-11 p-3" }
    },
    color: {
      default: {
        input: "border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-50 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
      },
      tinted: {
        input: "border border-gray-300 dark:border-gray-500 bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
      },
      primary: {
        input: "border border-primary-200 dark:border-primary-400 focus:ring-primary-500 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 bg-primary-50 text-primary-900 placeholder-primary-700 dark:text-primary-400 dark:placeholder-primary-500 dark:bg-gray-700"
      },
      secondary: {
        input: "border border-secondary-200 dark:border-secondary-400 focus:ring-secondary-500 focus:border-secondary-600 dark:focus:ring-secondary-500 dark:focus:border-secondary-500 bg-secondary-50 text-secondary-900 placeholder-secondary-700 dark:text-secondary-400 dark:placeholder-secondary-500 dark:bg-gray-700"
      },
      green: {
        input: "border border-green-200 dark:border-green-400 focus:ring-green-500 focus:border-green-600 dark:focus:ring-green-500 dark:focus:border-green-500 bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700"
      },
      emerald: {
        input: "border border-emerald-200 dark:border-emerald-400 focus:ring-emerald-500 focus:border-emerald-600 dark:focus:ring-emerald-500 dark:focus:border-emerald-500 bg-emerald-50 text-emerald-900 placeholder-emerald-700 dark:text-emerald-400 dark:placeholder-emerald-500 dark:bg-gray-700"
      },
      red: {
        input: "border border-red-200 dark:border-red-400 focus:ring-red-500 focus:border-red-600 dark:focus:ring-red-500 dark:focus:border-red-500 bg-red-50 text-red-900 placeholder-red-700 dark:text-red-400 dark:placeholder-red-500 dark:bg-gray-700"
      },
      blue: {
        input: "border border-blue-200 dark:border-blue-400 focus:ring-blue-500 focus:border-blue-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 dark:text-blue-400 dark:placeholder-blue-500 dark:bg-gray-700"
      },
      yellow: {
        input: "border border-yellow-200 dark:border-yellow-400 focus:ring-yellow-500 focus:border-yellow-600 dark:focus:ring-yellow-500 dark:focus:border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 dark:text-yellow-400 dark:placeholder-yellow-500 dark:bg-gray-700"
      },
      orange: {
        input: "border border-orange-200 dark:border-orange-400 focus:ring-orange-500 focus:border-orange-600 dark:focus:ring-orange-500 dark:focus:border-orange-500 bg-orange-50 text-orange-900 placeholder-orange-700 dark:text-orange-400 dark:placeholder-orange-500 dark:bg-gray-700"
      },
      gray: {
        input: "border border-gray-200 dark:border-gray-400 focus:ring-gray-500 focus:border-gray-600 dark:focus:ring-gray-500 dark:focus:border-gray-500 bg-gray-50 text-gray-900 placeholder-gray-700 dark:text-gray-400 dark:placeholder-gray-500 dark:bg-gray-700"
      },
      teal: {
        input: "border border-teal-200 dark:border-teal-400 focus:ring-teal-500 focus:border-teal-600 dark:focus:ring-teal-500 dark:focus:border-teal-500 bg-teal-50 text-teal-900 placeholder-teal-700 dark:text-teal-400 dark:placeholder-teal-500 dark:bg-gray-700"
      },
      cyan: {
        input: "border border-cyan-200 dark:border-cyan-400 focus:ring-cyan-500 focus:border-cyan-600 dark:focus:ring-cyan-500 dark:focus:border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 dark:text-cyan-400 dark:placeholder-cyan-500 dark:bg-gray-700"
      },
      sky: {
        input: "border border-sky-200 dark:border-sky-400 focus:ring-sky-500 focus:border-sky-600 dark:focus:ring-sky-500 dark:focus:border-sky-500 bg-sky-50 text-sky-900 placeholder-sky-700 dark:text-sky-400 dark:placeholder-sky-500 dark:bg-gray-700"
      },
      indigo: {
        input: "border border-indigo-200 dark:border-indigo-400 focus:ring-indigo-500 focus:border-indigo-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 bg-indigo-50 text-indigo-900 placeholder-indigo-700 dark:text-indigo-400 dark:placeholder-indigo-500 dark:bg-gray-700"
      },
      lime: {
        input: "border border-lime-200 dark:border-lime-400 focus:ring-lime-500 focus:border-lime-600 dark:focus:ring-lime-500 dark:focus:border-lime-500 bg-lime-50 text-lime-900 placeholder-lime-700 dark:text-lime-400 dark:placeholder-lime-500 dark:bg-gray-700"
      },
      amber: {
        input: "border border-amber-200 dark:border-amber-400 focus:ring-amber-500 focus:border-amber-600 dark:focus:ring-amber-500 dark:focus:border-amber-500 bg-amber-50 text-amber-900 placeholder-amber-700 dark:text-amber-400 dark:placeholder-amber-500 dark:bg-gray-700"
      },
      violet: {
        input: "border border-violet-200 dark:border-violet-400 focus:ring-violet-500 focus:border-violet-600 dark:focus:ring-violet-500 dark:focus:border-violet-500 bg-violet-50 text-violet-900 placeholder-violet-700 dark:text-violet-400 dark:placeholder-violet-500 dark:bg-gray-700"
      },
      purple: {
        input: "border border-purple-200 dark:border-purple-400 focus:ring-purple-500 focus:border-purple-600 dark:focus:ring-purple-500 dark:focus:border-purple-500 bg-purple-50 text-purple-900 placeholder-purple-700 dark:text-purple-400 dark:placeholder-purple-500 dark:bg-gray-700"
      },
      fuchsia: {
        input: "border border-fuchsia-200 dark:border-fuchsia-400 focus:ring-fuchsia-500 focus:border-fuchsia-600 dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500 bg-fuchsia-50 text-fuchsia-900 placeholder-fuchsia-700 dark:text-fuchsia-400 dark:placeholder-fuchsia-500 dark:bg-gray-700"
      },
      pink: {
        input: "border border-pink-200 dark:border-pink-400 focus:ring-pink-500 focus:border-pink-600 dark:focus:ring-pink-500 dark:focus:border-pink-500 bg-pink-50 text-pink-900 placeholder-pink-700 dark:text-pink-400 dark:placeholder-pink-500 dark:bg-gray-700"
      },
      rose: {
        input: "border border-rose-200 dark:border-rose-400 focus:ring-rose-500 focus:border-rose-600 dark:focus:ring-rose-500 dark:focus:border-rose-500 bg-rose-50 text-rose-900 placeholder-rose-700 dark:text-rose-400 dark:placeholder-rose-500 dark:bg-gray-700"
      }
    },
    group: {
      false: { input: "rounded-lg" },
      true: {
        input: "first:rounded-s-lg last:rounded-e-lg [&:not(:first-child)]:-ms-px"
      }
    }
  },
  defaultVariants: {
    size: "md",
    color: "default"
  }
});
const select = ce({
  base: "block w-full",
  variants: {
    underline: {
      true: "text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer !px-0",
      false: "text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    },
    size: {
      sm: "text-sm p-2",
      md: "text-sm p-2.5",
      lg: "text-base py-3 px-4"
    }
  },
  defaultVariants: {
    underline: false,
    size: "md"
  }
});
const radio = ce({
  slots: {
    input: "relative flex items-center w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2",
    label: "flex items-center"
  },
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: {
        input: "text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600"
      },
      secondary: {
        input: "text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600"
      },
      gray: {
        input: "text-gray-600 focus:ring-gray-500 dark:focus:ring-gray-600"
      },
      red: { input: "text-red-600 focus:ring-red-500 dark:focus:ring-red-600" },
      orange: {
        input: "text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600"
      },
      amber: {
        input: "text-amber-600 focus:ring-amber-500 dark:focus:ring-amber-600"
      },
      yellow: {
        input: "text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600"
      },
      lime: {
        input: "text-lime-600 focus:ring-lime-500 dark:focus:ring-lime-600"
      },
      green: {
        input: "text-green-600 focus:ring-green-500 dark:focus:ring-green-600"
      },
      emerald: {
        input: "text-emerald-600 focus:ring-emerald-500 dark:focus:ring-emerald-600"
      },
      teal: {
        input: "text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600"
      },
      cyan: {
        input: "text-cyan-600 focus:ring-cyan-500 dark:focus:ring-cyan-600"
      },
      sky: { input: "text-sky-600 focus:ring-sky-500 dark:focus:ring-sky-600" },
      blue: {
        input: "text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"
      },
      indigo: {
        input: "text-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600"
      },
      violet: {
        input: "text-violet-600 focus:ring-violet-500 dark:focus:ring-violet-600"
      },
      purple: {
        input: "text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600"
      },
      fuchsia: {
        input: "text-fuchsia-600 focus:ring-fuchsia-500 dark:focus:ring-fuchsia-600"
      },
      pink: {
        input: "text-pink-600 focus:ring-pink-500 dark:focus:ring-pink-600"
      },
      rose: {
        input: "text-rose-600 focus:ring-rose-500 dark:focus:ring-rose-600"
      }
    },
    tinted: {
      true: { input: "dark:bg-gray-600 dark:border-gray-500" },
      false: { input: "dark:bg-gray-700 dark:border-gray-600" }
    }
  },
  defaultVariants: {
    color: "primary"
  }
});
const radioButton = ce({
  base: "",
  variants: {
    inline: {
      true: "inline-flex",
      false: "flex"
    }
  }
});
const range = ce({
  base: "w-full bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700",
  variants: {
    size: {
      sm: "h-1 range-sm",
      md: "h-2",
      lg: "h-3 range-lg"
    },
    color: {
      // other colors do not work
      gray: "",
      red: "",
      blue: "",
      indigo: "",
      violet: "",
      purple: "",
      fuchsia: "",
      pink: "",
      rose: ""
    },
    appearance: {
      auto: "range accent-red-500",
      none: "appearance-none"
    }
  },
  compoundVariants: [
    {
      appearance: "auto",
      color: "gray",
      class: "accent-gray-500"
    },
    {
      appearance: "auto",
      color: "red",
      class: "accent-red-500"
    },
    {
      appearance: "auto",
      color: "blue",
      class: "accent-blue-500"
    },
    {
      appearance: "auto",
      color: "indigo",
      class: "accent-indigo-500"
    },
    {
      appearance: "auto",
      color: "violet",
      class: "accent-violet-500"
    },
    {
      appearance: "auto",
      color: "purple",
      class: "accent-purple-500"
    },
    {
      appearance: "auto",
      color: "fuchsia",
      class: "accent-fuchsia-500"
    },
    {
      appearance: "auto",
      color: "pink",
      class: "accent-pink-500"
    },
    {
      appearance: "auto",
      color: "rose",
      class: "accent-rose-500"
    }
  ]
});
const search = ce({
  slots: {
    base: "relative w-full",
    leftDiv: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",
    icon: "text-gray-500 dark:text-gray-400",
    content: "absolute inset-y-0 end-0 flex items-center text-gray-500 dark:text-gray-400",
    input: "block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  },
  variants: {
    size: {
      sm: {
        input: "text-xs p-2 ps-9 pe-9 ",
        icon: "w-3 h-3"
        // leftDiv: 'ps-2.5',
      },
      md: {
        input: "text-sm p-2.5 ps-10 pe-10",
        icon: "w-4 h-4"
        // leftDiv: 'ps-10',
      },
      lg: {
        input: "sm:text-base p-3 ps-11 pe-11",
        icon: "w-6 h-6"
        // leftDiv: 'ps-11',
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
const textarea = ce({
  slots: {
    base: "block text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
    wrapper: "rounded-lg bg-gray-50 dark:bg-gray-600 text-gray-900 dark:placeholder-gray-400 dark:text-white border border-gray-200 dark:border-gray-500",
    innerWrapper: "py-2 px-4 bg-white dark:bg-gray-800",
    headerCls: "py-2 px-3 border-gray-200 dark:border-gray-500",
    footerCls: "py-2 px-3 border-gray-200 dark:border-gray-500"
  },
  variants: {
    cols: {
      false: {
        base: "w-full",
        wrapper: "w-full"
      }
    },
    wrapped: {
      false: { base: "p-2.5 text-sm focus:ring-primary-500 border-gray-300 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50" }
    },
    hasHeader: {
      true: {
        headerCls: "border-b"
      },
      false: {
        innerWrapper: "rounded-t-lg"
      }
    },
    hasFooter: {
      true: {
        footerCls: "border-t"
      },
      false: {
        innerWrapper: "rounded-b-lg"
      }
    }
  }
});
const toggle = ce({
  slots: {
    span: "me-3 shrink-0 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:bg-gray-600 dark:border-gray-500 relative ",
    label: "flex items-center",
    input: "w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 rounded dark:bg-gray-700 dark:border-gray-600 sr-only peer"
  },
  variants: {
    disabled: {
      true: { label: "cursor-not-allowed opacity-50" }
    },
    checked: {
      true: "",
      false: ""
    },
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: {
        span: "peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600"
      },
      secondary: {
        span: "peer-focus:ring-secondary-300 dark:peer-focus:ring-secondary-800 peer-checked:bg-secondary-600"
      },
      gray: {
        span: "peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 peer-checked:bg-gray-500"
      },
      red: {
        span: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600"
      },
      orange: {
        span: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500"
      },
      amber: {
        span: "peer-focus:ring-amber-300 dark:peer-focus:ring-amber-800 peer-checked:bg-amber-600"
      },
      yellow: {
        span: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400"
      },
      lime: {
        span: "peer-focus:ring-lime-300 dark:peer-focus:ring-lime-800 peer-checked:bg-lime-500"
      },
      green: {
        span: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600"
      },
      emerald: {
        span: "peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 peer-checked:bg-emerald-600"
      },
      teal: {
        span: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600"
      },
      cyan: {
        span: "peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800 peer-checked:bg-cyan-600"
      },
      sky: {
        span: "peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 peer-checked:bg-sky-600"
      },
      blue: {
        span: "peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600"
      },
      indigo: {
        span: "peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 peer-checked:bg-indigo-600"
      },
      violet: {
        span: "peer-focus:ring-violet-300 dark:peer-focus:ring-violet-800 peer-checked:bg-violet-600"
      },
      purple: {
        span: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600"
      },
      fuchsia: {
        span: "peer-focus:ring-fuchsia-300 dark:peer-focus:ring-fuchsia-800 peer-checked:bg-fuchsia-600"
      },
      pink: {
        span: "peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 peer-checked:bg-pink-600"
      },
      rose: {
        span: "peer-focus:ring-rose-300 dark:peer-focus:ring-rose-800 peer-checked:bg-rose-600"
      }
    },
    size: {
      small: {
        span: "w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4"
      },
      default: {
        span: "w-11 h-6 after:top-0.5 after:start-[2px] after:h-5 after:w-5"
      },
      large: {
        span: "w-14 h-7 after:top-0.5 after:start-[4px]  after:h-6 after:w-6"
      }
    }
  },
  defaultVariants: {
    color: "primary"
  }
});
const anchor = ce({
  base: "inline-flex items-center hover:underline",
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: "text-primary-600 dark:text-primary-500",
      secondary: "text-secondary-600 dark:text-secondary-500",
      gray: "text-gray-600 dark:text-gray-500",
      red: "text-red-600 dark:text-red-500",
      orange: "text-orange-600 dark:text-orange-500",
      amber: "text-amber-600 dark:text-amber-500",
      yellow: "text-yellow-600 dark:text-yellow-500",
      lime: "text-lime-600 dark:text-lime-500",
      green: "text-green-600 dark:text-green-500",
      emerald: "text-emerald-600 dark:text-emerald-500",
      teal: "text-teal-600 dark:text-teal-500",
      cyan: "text-cyan-600 dark:text-cyan-500",
      sky: "text-sky-600 dark:text-sky-500",
      blue: "text-blue-600 dark:text-blue-500",
      indigo: "text-indigo-600 dark:text-indigo-500",
      violet: "text-violet-600 dark:text-violet-500",
      purple: "text-purple-600 dark:text-purple-500",
      fuchsia: "text-fuchsia-600 dark:text-fuchsia-500",
      pink: "text-pink-600 dark:text-pink-500",
      rose: "text-rose-600 dark:text-rose-500"
    }
  }
});
const blockquote = ce({
  base: "font-semibold text-gray-900 dark:text-white",
  variants: {
    border: {
      true: "border-s-4 border-gray-300 dark:border-gray-500",
      false: ""
    },
    italic: {
      true: "italic",
      false: ""
    },
    bg: {
      true: "bg-gray-50 dark:bg-gray-800",
      false: ""
    },
    alignment: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl"
    }
  },
  defaultVariants: {
    border: false,
    italic: true,
    bg: false,
    alignment: "left",
    size: "lg"
  }
});
const descriptionList = ce({
  variants: {
    tag: {
      dt: "text-gray-500 md:text-lg dark:text-gray-400",
      dd: "text-lg font-semibold"
    }
  },
  defaultVariants: {
    tag: "dt"
  }
});
const heading = ce({
  base: "font-bold text-gray-900 dark:text-white",
  variants: {
    tag: {
      h1: "text-5xl font-extrabold",
      h2: "text-4xl",
      h3: "text-3xl",
      h4: "text-2xl",
      h5: "text-xl",
      h6: "text-lg"
    }
  },
  defaultVariants: {
    tag: "h1"
  }
});
const hr = ce({
  slots: {
    base: "h-px my-8 bg-gray-200 border-0 dark:bg-gray-700",
    container: "inline-flex items-center justify-center w-full",
    content: "absolute px-4 -translate-x-1/2 rtl:translate-x-1/2 bg-white start-1/2 dark:bg-gray-900"
  },
  variants: {
    withChildren: {
      true: {
        base: "w-full",
        container: "relative"
      }
    }
  },
  defaultVariants: {
    withChildren: false
  }
});
const img = ce({
  slots: {
    base: "max-w-full h-auto",
    figure: "",
    figureCaption: "mt-2 text-sm text-center text-gray-500 dark:text-gray-400"
  },
  variants: {
    size: {
      xs: { base: "max-w-xs", figure: "max-w-xs" },
      sm: { base: "max-w-sm", figure: "max-w-sm" },
      md: { base: "max-w-md", figure: "max-w-md" },
      lg: { base: "max-w-lg", figure: "max-w-lg" },
      xl: { base: "max-w-xl", figure: "max-w-xl" },
      "2xl": { base: "max-w-2xl", figure: "max-w-2xl" },
      full: { base: "max-w-full", figure: "max-w-full" },
      none: { base: "", figure: "" }
    },
    alignment: {
      left: {},
      center: { base: "mx-auto", figure: "mx-auto" },
      right: { base: "ms-auto", figure: "ms-auto" }
    },
    effect: {
      grayscale: {
        base: "cursor-pointer rounded-lg grayscale filter transition-all duration-300 hover:grayscale-0"
      },
      blur: { base: "blur-sm transition-all duration-300 hover:blur-none" },
      invert: {
        base: "invert filter transition-all duration-300 hover:invert-0"
      },
      sepia: {
        base: "sepia filter transition-all duration-300 hover:sepia-0"
      },
      saturate: {
        base: "saturate-50 filter transition-all duration-300 hover:saturate-100"
      },
      "hue-rotate": {
        base: "hue-rotate-60 filter transition-all duration-300 hover:hue-rotate-0"
      },
      none: {
        base: "transition-all duration-300"
      }
    },
    shadow: {
      sm: { base: "shadow-sm" },
      regular: { base: "shadow" },
      md: { base: "shadow-md" },
      lg: { base: "shadow-lg" },
      xl: { base: "shadow-xl" },
      "2xl": { base: "shadow-2xl" },
      inner: { base: "shadow-inner" },
      none: { base: "shadow-none" }
    },
    rounded: {
      sm: { base: "rounded-sm" },
      regular: { base: "rounded" },
      md: { base: "rounded-md" },
      lg: { base: "rounded-lg" },
      xl: { base: "rounded-xl" },
      "2xl": { base: "rounded-2xl" },
      "3xl": { base: "rounded-3xl" },
      full: { base: "rounded-full" },
      none: { base: "rounded-none" }
    }
  }
});
const layout = ce({
  base: "grid grid-cols-1 sm:grid-cols-2"
});
const list = ce({
  base: "",
  variants: {
    tag: {
      ul: "list-disc",
      dl: "list-none",
      ol: "list-decimal"
    },
    position: {
      inside: "list-inside",
      outside: "list-outside"
    }
  },
  defaultVariants: {
    position: "inside",
    tag: "ul"
  }
});
const mark = ce({
  base: "text-white dark:bg-blue-500 bg-blue-600 px-2 rounded"
});
const paragraph = ce({
  base: "text-gray-900 dark:text-white",
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl"
    },
    weight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black"
    },
    space: {
      tighter: "tracking-tighter",
      tight: "tracking-tight",
      normal: "tracking-normal",
      wide: "tracking-wide",
      wider: "tracking-wider",
      widest: "tracking-widest"
    },
    height: {
      none: "leading-none",
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
      "3": "leading-3",
      "4": "leading-4",
      "5": "leading-5",
      "6": "leading-6",
      "7": "leading-7",
      "8": "leading-8",
      "9": "leading-9",
      "10": "leading-10"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    },
    whitespace: {
      normal: "whitespace-normal",
      nowrap: "whitespace-nowrap",
      pre: "whitespace-pre",
      preline: "whitespace-pre-line",
      prewrap: "whitespace-pre-wrap"
    },
    italic: {
      true: "italic"
    },
    firstUpper: {
      true: "first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-left",
      false: ""
    },
    justify: {
      true: "text-justify",
      false: ""
    }
  }
});
const secondary = ce({
  base: "text-gray-500 dark:text-gray-400 font-semibold"
});
const span = ce({
  variants: {
    italic: {
      true: "italic"
    },
    underline: {
      true: "underline decoration-2 decoration-blue-400 dark:decoration-blue-600"
    },
    linethrough: {
      true: "line-through"
    },
    uppercase: {
      true: "uppercase"
    },
    gradient: {
      skyToEmerald: "text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400",
      purpleToBlue: "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500",
      pinkToOrange: "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400",
      tealToLime: "text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-lime-300",
      redToYellow: "text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500",
      indigoToCyan: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-400",
      fuchsiaToRose: "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-rose-500",
      amberToEmerald: "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-500",
      violetToRed: "text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-red-500",
      blueToGreen: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-green-400",
      orangeToPurple: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500",
      yellowToRed: "text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-indigo-400 to-red-600",
      none: ""
    },
    highlight: {
      blue: "text-blue-600 dark:text-blue-500",
      green: "text-green-600 dark:text-green-500",
      red: "text-red-600 dark:text-red-500",
      yellow: "text-yellow-600 dark:text-yellow-500",
      purple: "text-purple-600 dark:text-purple-500",
      pink: "text-pink-600 dark:text-pink-500",
      indigo: "text-indigo-600 dark:text-indigo-500",
      teal: "text-teal-600 dark:text-teal-500",
      orange: "text-orange-600 dark:text-orange-500",
      cyan: "text-cyan-600 dark:text-cyan-500",
      fuchsia: "text-fuchsia-600 dark:text-fuchsia-500",
      amber: "text-amber-600 dark:text-amber-500",
      lime: "text-lime-600 dark:text-lime-500",
      none: ""
    },
    decoration: {
      solid: "underline decoratio-solid",
      double: "underline decoration-double",
      dotted: "underline decoration-dotted",
      dashed: "underline decoration-dashed",
      wavy: "underline decoration-wavy",
      none: "decoration-none"
    },
    decorationColor: {
      // blue, green, red, yellow, purple, pink, indigo, teal, orange, cyan, fuchsia, amber, lime, none
      // radio
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: "underline decoration-primary-400 dark:decoration-primary-600",
      secondary: "underline decoration-secondary-400 dark:decoration-secondary-600",
      gray: "underline decoration-gray-400 dark:decoration-gray-600",
      orange: "underline decoration-orange-400 dark:decoration-orange-600",
      red: "underline decoration-red-400 dark:decoration-red-600",
      yellow: "underline decoration-yellow-400 dark:decoration-yellow-600",
      lime: "underline decoration-lime-400 dark:decoration-lime-600",
      green: "underline decoration-green-400 dark:decoration-green-600",
      emerald: "underline decoration-emerald-400 dark:decoration-emerald-600",
      teal: "underline decoration-teal-400 dark:decoration-teal-600",
      cyan: "underline decoration-cyan-400 dark:decoration-cyan-600",
      sky: "underline decoration-sky-400 dark:decoration-sky-600",
      blue: "underline decoration-blue-400 dark:decoration-blue-600",
      indigo: "underline decoration-indigo-400 dark:decoration-indigo-600",
      violet: "underline decoration-violet-400 dark:decoration-violet-600",
      purple: "underline decoration-purple-400 dark:decoration-purple-600",
      fuchsia: "underline decoration-fuchsia-400 dark:decoration-fuchsia-600",
      pink: "underline decoration-pink-400 dark:decoration-pink-600",
      rose: "underline decoration-rose-400 dark:decoration-rose-600",
      none: "decoration-none"
    },
    decorationThickness: {
      "1": "underline decoration-1",
      "2": "underline decoration-2",
      "4": "underline decoration-4",
      "8": "underline decoration-8",
      "0": "decoration-0"
    }
  }
});
export {
  sidebardropdownwrapper as $,
  textarea as A,
  Badge as B,
  anchor as C,
  bind_group as D,
  checkbox as E,
  helper as F,
  search as G,
  textPlaceholder as H,
  span as I,
  imagePlaceholder as J,
  skeleton as K,
  ListgroupItem as L,
  breadcrumb as M,
  CloseButton as N,
  input as O,
  idGenerator as P,
  rating as Q,
  timeline as R,
  timelineitem as S,
  label as T,
  list as U,
  uiHelpers as V,
  navbrand as W,
  navLi as X,
  navUl as Y,
  slide as Z,
  transition as _,
  set_attributes as a,
  kbd as a$,
  floatingLabelInput as a0,
  range as a1,
  hr as a2,
  footer as a3,
  footerBrand as a4,
  footerLi as a5,
  footerUl as a6,
  heading as a7,
  ce as a8,
  raf as a9,
  fade as aA,
  banner as aB,
  fly as aC,
  blur as aD,
  scale as aE,
  descriptionList as aF,
  Alert as aG,
  alert as aH,
  android as aI,
  defaultMockup as aJ,
  desktop as aK,
  ios as aL,
  laptop as aM,
  smartwatch as aN,
  tablet as aO,
  toast as aP,
  img as aQ,
  select as aR,
  sineIn as aS,
  layout as aT,
  button as aU,
  drawerhead as aV,
  Drawer as aW,
  blockquote as aX,
  footerCopyright as aY,
  footerIcon as aZ,
  gallery as a_,
  loop as aa,
  linear as ab,
  cubicOut as ac,
  progressbar as ad,
  sineOut as ae,
  tooltip as af,
  table as ag,
  TableBodyCell as ah,
  tablebodyrow as ai,
  tableheadcell as aj,
  tablehead as ak,
  megamenu as al,
  Navbar as am,
  tabs as an,
  radio as ao,
  TabItem as ap,
  cardPlaceholder as aq,
  listPlaceholder as ar,
  testimonialPlaceholder as as,
  videoPlaceholder as at,
  widgetPlaceholder as au,
  bind_files as av,
  fileupload as aw,
  Dropzone as ax,
  Sidebar as ay,
  Dropdown as az,
  set_class as b,
  badge as b0,
  activity as b1,
  activityitem as b2,
  group as b3,
  groupitem as b4,
  toolbar as b5,
  toolbarButton as b6,
  toolbarGroup as b7,
  navhamburger as b8,
  pagination as b9,
  paginationItem as ba,
  radioButton as bb,
  mark as bc,
  secondary as bd,
  Modal as be,
  modal as bf,
  popover as bg,
  accordion as bh,
  AccordionItem as bi,
  quintOut as bj,
  advancedrating as bk,
  review as bl,
  scorerating as bm,
  bottomNav as bn,
  bottomNavItem as bo,
  bottomnavheaderitem as bp,
  bottomnavheader as bq,
  sidebarbutton as br,
  sidebarcta as bs,
  sitebarbrand as bt,
  set_svg_class as c,
  darkmode as d,
  dropdowndivider as e,
  dropdownFooter as f,
  gradientButton as g,
  action as h,
  toggle_class as i,
  handle_lazy_img as j,
  avatar as k,
  listGroup as l,
  indicator as m,
  dropdownul as n,
  dropdownli as o,
  paragraph as p,
  dropdownHeader as q,
  card as r,
  set_attribute as s,
  twMerge as t,
  spinner as u,
  buttonGroup as v,
  bind_checked as w,
  remove_input_defaults as x,
  toggle as y,
  bind_value as z
};
