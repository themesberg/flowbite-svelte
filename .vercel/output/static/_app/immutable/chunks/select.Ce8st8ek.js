import { a1 as effect } from "./runtime.BkfDdwap.js";
import { l as listen_to_event_and_reset_event } from "./store.B2xZ3Ft6.js";
import { a as is } from "./props.B7eOu8hW.js";
function select_option(select, value, mounting) {
  if (select.multiple) {
    return select_options(select, value);
  }
  for (var option of select.options) {
    var option_value = get_option_value(option);
    if (is(option_value, value)) {
      option.selected = true;
      return;
    }
  }
  if (!mounting || value !== void 0) {
    select.selectedIndex = -1;
  }
}
function init_select(select, get_value) {
  effect(() => {
    var observer = new MutationObserver(() => {
      var value = select.__value;
      select_option(select, value);
    });
    observer.observe(select, {
      // Listen to option element changes
      childList: true,
      subtree: true,
      // because of <optgroup>
      // Listen to option element value attribute changes
      // (doesn't get notified of select value changes,
      // because that property is not reflected as an attribute)
      attributes: true,
      attributeFilter: ["value"]
    });
    return () => {
      observer.disconnect();
    };
  });
}
function bind_select_value(select, get, set = get) {
  var mounting = true;
  listen_to_event_and_reset_event(select, "change", () => {
    var value;
    if (select.multiple) {
      value = [].map.call(select.querySelectorAll(":checked"), get_option_value);
    } else {
      var selected_option = select.querySelector(":checked");
      value = selected_option && get_option_value(selected_option);
    }
    set(value);
  });
  effect(() => {
    var value = get();
    select_option(select, value, mounting);
    if (mounting && value === void 0) {
      var selected_option = select.querySelector(":checked");
      if (selected_option !== null) {
        value = get_option_value(selected_option);
        set(value);
      }
    }
    select.__value = value;
    mounting = false;
  });
  init_select(select);
}
function select_options(select, value) {
  for (var option of select.options) {
    option.selected = ~value.indexOf(get_option_value(option));
  }
}
function get_option_value(option) {
  if ("__value" in option) {
    return option.__value;
  } else {
    return option.value;
  }
}
export {
  bind_select_value as b
};
