import { a3 as copy_payload, a4 as assign_payload } from "../../../chunks/index.js";
import "../../../chunks/theme.js";
import { I as Input } from "../../../chunks/index5.js";
function _page($$payload) {
  let foo = void 0;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="p-8">`;
    Input($$payload2, {
      name: "field1",
      get value() {
        return foo;
      },
      set value($$value) {
        foo = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
export {
  _page as default
};
