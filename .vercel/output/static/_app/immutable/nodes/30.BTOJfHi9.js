import { c as comment, a as append, t as template, n as ns_template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, f as first_child, s as sibling, c as child, r as reset, t as template_effect, a as pop, b as get, d as derived, n as next, g as getContext, a6 as state, u as user_effect, a7 as set } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { i as if_block, p as prop, r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { b as set_class, s as set_attribute, bk as advancedrating, P as idGenerator, a as set_attributes, t as twMerge, bl as review, bm as scorerating, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { R as Rating, S as Star } from "../chunks/Rating.BFtXGQ16.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { T as ThumbsDownSolid } from "../chunks/ThumbsDownSolid.CpAMItwR.js";
import { T as ThumbsUpSolid } from "../chunks/ThumbsUpSolid.CIE3OZly.js";
import { U as UsersGroupOutline } from "../chunks/UsersGroupOutline.BgX7qJie.js";
var root_3$7 = template(`<div><span> </span> <div><div></div></div> <span> </span></div>`);
var root$a = template(`<!> <!> <!>`, 1);
function AdvancedRating($$anchor, $$props) {
  push($$props, true);
  const $$d = derived(advancedrating), base = derived(() => get($$d).base), span = derived(() => get($$d).span), div2 = derived(() => get($$d).div2), div3 = derived(() => get($$d).div3), span2 = derived(() => get($$d).span2);
  var fragment = root$a();
  var node = first_child(fragment);
  if_block(node, () => $$props.rating, ($$anchor2) => {
    var fragment_1 = comment();
    var node_1 = first_child(fragment_1);
    snippet(node_1, () => $$props.rating);
    append($$anchor2, fragment_1);
  });
  var node_2 = sibling(node, 2);
  if_block(node_2, () => $$props.globalText, ($$anchor2) => {
    var fragment_2 = comment();
    var node_3 = first_child(fragment_2);
    snippet(node_3, () => $$props.globalText);
    append($$anchor2, fragment_2);
  });
  var node_4 = sibling(node_2, 2);
  const $$array = () => $$props.ratings;
  each(node_4, 17, $$array, index, ($$anchor2, $$item) => {
    let label = () => get($$item).label;
    let rating = () => get($$item).rating;
    var div = root_3$7();
    const class_derived = derived(() => get(base)({ class: $$props.divClass }));
    var span_1 = child(div);
    const class_derived_1 = derived(() => get(span)({ class: $$props.spanClass }));
    var text2 = child(span_1, true);
    reset(span_1);
    var div_1 = sibling(span_1, 2);
    const class_derived_2 = derived(() => get(div2)({ class: $$props.div2Class }));
    var div_2 = child(div_1);
    const class_derived_3 = derived(() => get(div3)({ class: $$props.div3Class }));
    reset(div_1);
    var span_2 = sibling(div_1, 2);
    const class_derived_4 = derived(() => get(span2)({ class: $$props.span2Class }));
    var text_1 = child(span_2);
    reset(span_2);
    reset(div);
    template_effect(() => {
      set_class(div, get(class_derived));
      set_class(span_1, get(class_derived_1));
      set_text(text2, label());
      set_class(div_1, get(class_derived_2));
      set_class(div_2, get(class_derived_3));
      set_attribute(div_2, "style", `width: ${rating() ?? ""}%`);
      set_class(span_2, get(class_derived_4));
      set_text(text_1, `${rating() ?? ""}${$$props.unit ?? ""}`);
    });
    append($$anchor2, div);
  });
  append($$anchor, fragment);
  pop();
}
var root_1$9 = ns_template(`<stop offset="0%"></stop><stop></stop><stop stop-color="transparent"></stop><stop offset="100%" stop-color="transparent"></stop>`, 1);
var root_2$9 = ns_template(`<stop offset="0%"></stop><stop offset="100%"></stop>`, 1);
var root$9 = ns_template(`<svg><defs><linearGradient><!></linearGradient></defs><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg>`);
function Heart($$anchor, $$props) {
  push($$props, true);
  let fillPercent = prop($$props, "fillPercent", 3, 100), fillColor = prop($$props, "fillColor", 3, "#ff0000"), strokeColor = prop($$props, "strokeColor", 3, "#ff0000"), size = prop($$props, "size", 3, 24), ariaLabel = prop($$props, "ariaLabel", 3, "heart"), id = prop($$props, "id", 19, idGenerator), role = prop($$props, "role", 3, "img"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "fillPercent",
    "fillColor",
    "strokeColor",
    "size",
    "ariaLabel",
    "id",
    "role",
    "svgClass"
  ]);
  var svg = root$9();
  let attributes;
  var defs = child(svg);
  var linearGradient = child(defs);
  var node = child(linearGradient);
  if_block(
    node,
    () => fillPercent() !== 100,
    ($$anchor2) => {
      var fragment = root_1$9();
      var stop = first_child(fragment);
      var stop_1 = sibling(stop);
      var stop_2 = sibling(stop_1);
      next();
      template_effect(() => {
        set_attribute(stop, "stop-color", fillColor());
        set_attribute(stop_1, "offset", `${fillPercent() ?? ""}%`);
        set_attribute(stop_1, "stop-color", fillColor());
        set_attribute(stop_2, "offset", `${fillPercent() ?? ""}%`);
      });
      append($$anchor2, fragment);
    },
    ($$anchor2) => {
      var fragment_1 = root_2$9();
      var stop_3 = first_child(fragment_1);
      var stop_4 = sibling(stop_3);
      template_effect(() => {
        set_attribute(stop_3, "stop-color", fillColor());
        set_attribute(stop_4, "stop-color", fillColor());
      });
      append($$anchor2, fragment_1);
    }
  );
  reset(linearGradient);
  reset(defs);
  var path = sibling(defs);
  reset(svg);
  template_effect(() => {
    attributes = set_attributes(
      svg,
      attributes,
      {
        width: size(),
        height: size(),
        class: $$props.svgClass,
        ...restProps,
        "aria-label": ariaLabel(),
        viewBox: "0 0 24 24",
        role: role(),
        "stroke-width": "1.5",
        stroke: "currentColor",
        fill: "none"
      },
      void 0,
      true
    );
    set_attribute(linearGradient, "id", id());
    set_attribute(path, "fill", `url(#${id() ?? ""})`);
    set_attribute(path, "stroke", strokeColor());
  });
  append($$anchor, svg);
  pop();
}
var root_1$8 = template(`<p class="ms-2 pt-1 text-sm font-medium text-gray-500 dark:text-gray-400"> </p>`);
var root_2$8 = template(`<h3 class="ms-2 text-sm font-semibold text-gray-900 dark:text-white"> </h3>`);
var root_3$6 = template(`<footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p> </p></footer>`);
var root_8 = template(`<a class="ps-4 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Report abuse</a>`);
var root_5$2 = template(`<div class="mt-3 flex items-center space-x-3 divide-x divide-gray-200 rtl:space-x-reverse rtl:divide-x-reverse dark:divide-gray-600"><!> <!></div>`);
var root$8 = template(`<article><div class="mb-4 flex items-center space-x-4 rtl:space-x-reverse"><img class="h-10 w-10 rounded-full"> <div class="space-y-1 font-medium dark:text-white"><p> <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400"> </time></p></div></div> <div class="mb-1 flex items-center"><!> <!></div> <!> <!> <aside><p class="mt-1 text-xs text-gray-500 dark:text-gray-400"><!></p> <!></aside></article>`);
function RatingComment($$anchor, $$props) {
  push($$props, true);
  var article = root$8();
  var div = child(article);
  var img = child(div);
  var div_1 = sibling(img, 2);
  var p = child(div_1);
  var text_1 = child(p);
  var time = sibling(text_1);
  var text_2 = child(time, true);
  reset(time);
  reset(p);
  reset(div_1);
  reset(div);
  var div_2 = sibling(div, 2);
  var node = child(div_2);
  {
    const text2 = ($$anchor2) => {
      var p_1 = root_1$8();
      var text_3 = child(p_1);
      reset(p_1);
      template_effect(() => set_text(text_3, `${$$props.comment.rating ?? ""} out of ${$$props.comment.total ?? ""}`));
      append($$anchor2, p_1);
    };
    Rating(node, {
      get total() {
        return $$props.comment.total;
      },
      get rating() {
        return $$props.comment.rating;
      },
      text: text2,
      $$slots: { text: true }
    });
  }
  var node_1 = sibling(node, 2);
  if_block(node_1, () => $$props.comment.heading, ($$anchor2) => {
    var h3 = root_2$8();
    var text_4 = child(h3, true);
    reset(h3);
    template_effect(() => set_text(text_4, $$props.comment.heading));
    append($$anchor2, h3);
  });
  reset(div_2);
  var node_2 = sibling(div_2, 2);
  if_block(node_2, () => $$props.comment.address || $$props.comment.datetime, ($$anchor2) => {
    var footer = root_3$6();
    var p_2 = child(footer);
    var text_5 = child(p_2);
    reset(p_2);
    reset(footer);
    template_effect(() => set_text(text_5, `Reviewed in ${$$props.comment.address ?? ""} on ${$$props.comment.datetime ?? ""}`));
    append($$anchor2, footer);
  });
  var node_3 = sibling(node_2, 2);
  snippet(node_3, () => $$props.children);
  var aside = sibling(node_3, 2);
  var p_3 = child(aside);
  var node_4 = child(p_3);
  if_block(node_4, () => $$props.evaluation, ($$anchor2) => {
    var fragment = comment();
    var node_5 = first_child(fragment);
    snippet(node_5, () => $$props.evaluation);
    append($$anchor2, fragment);
  });
  reset(p_3);
  var node_6 = sibling(p_3, 2);
  if_block(node_6, () => $$props.helpfullink || $$props.abuselink, ($$anchor2) => {
    var div_3 = root_5$2();
    var node_7 = child(div_3);
    if_block(node_7, () => $$props.helpfullink, ($$anchor3) => {
      Button($$anchor3, {
        size: "xs",
        href: "/",
        color: "dark",
        children: ($$anchor4, $$slotProps) => {
          next();
          var text_6 = text("Helpful");
          append($$anchor4, text_6);
        },
        $$slots: { default: true }
      });
    });
    var node_8 = sibling(node_7, 2);
    if_block(node_8, () => $$props.abuselink, ($$anchor3) => {
      var a = root_8();
      template_effect(() => set_attribute(a, "href", $$props.abuselink));
      append($$anchor3, a);
    });
    reset(div_3);
    append($$anchor2, div_3);
  });
  reset(aside);
  reset(article);
  template_effect(() => {
    set_attribute(img, "src", $$props.comment.user.img.src);
    set_attribute(img, "alt", $$props.comment.user.img.alt);
    set_text(text_1, `${$$props.comment.user.name ?? ""} `);
    set_text(text_2, $$props.comment.user.joined);
  });
  append($$anchor, article);
  pop();
}
var root_3$5 = template(`<div><!></div>`);
var root_5$1 = template(`<li><!></li>`);
var root_7$1 = template(`<li><!></li>`);
var root_9$1 = template(`<li><!></li>`);
var root_4$2 = template(`<ul><!> <!> <!></ul>`);
var root_11 = template(`<footer><p class="mb-2 text-sm text-gray-500 dark:text-gray-400"> </p></footer>`);
var root_1$7 = template(`<article><div><div><img> <div><p> </p> <!></div></div> <!></div> <div class="col-span-2 mt-6 md:mt-0"><div class="mb-5 flex items-start"><div class="pe-4"><!> <h4 class="text-xl font-bold text-gray-900 dark:text-white"> </h4></div> <p class="inline-flex items-center rounded bg-primary-700 p-1.5 text-sm font-semibold text-white"> </p></div> <!></div></article>`);
function Review($$anchor, $$props) {
  push($$props, true);
  const $$d = derived(review), article = derived(() => get($$d).article), div = derived(() => get($$d).div), div2 = derived(() => get($$d).div2), div3 = derived(() => get($$d).div3), img = derived(() => get($$d).img), ul = derived(() => get($$d).ul), li = derived(() => get($$d).li);
  var fragment = comment();
  var node = first_child(fragment);
  if_block(node, () => $$props.review, ($$anchor2) => {
    var article_1 = root_1$7();
    const class_derived = derived(() => get(article)({ class: $$props.articleClass }));
    var div_1 = child(article_1);
    var div_2 = child(div_1);
    const class_derived_1 = derived(() => get(div)({ class: $$props.divClass }));
    var img_1 = child(div_2);
    const class_derived_2 = derived(() => get(img)({ class: $$props.imgClass }));
    var div_3 = sibling(img_1, 2);
    const class_derived_3 = derived(() => get(div2)({ class: $$props.div2Class }));
    var p = child(div_3);
    var text2 = child(p, true);
    reset(p);
    var node_1 = sibling(p, 2);
    if_block(node_1, () => $$props.review.address, ($$anchor3) => {
      var fragment_1 = comment();
      var node_2 = first_child(fragment_1);
      if_block(node_2, () => $$props.address, ($$anchor4) => {
        var div_4 = root_3$5();
        const class_derived_4 = derived(() => get(div3)({ class: $$props.div3Class }));
        var node_3 = child(div_4);
        snippet(node_3, () => $$props.address);
        reset(div_4);
        template_effect(() => set_class(div_4, get(class_derived_4)));
        append($$anchor4, div_4);
      });
      append($$anchor3, fragment_1);
    });
    reset(div_3);
    reset(div_2);
    var node_4 = sibling(div_2, 2);
    if_block(node_4, () => $$props.review.item1 || $$props.review.item2 || $$props.review.item3, ($$anchor3) => {
      var ul_1 = root_4$2();
      const class_derived_5 = derived(() => get(ul)({ class: $$props.ulClass }));
      var node_5 = child(ul_1);
      if_block(node_5, () => $$props.review.item1, ($$anchor4) => {
        var li_1 = root_5$1();
        const class_derived_6 = derived(() => twMerge(get(li)({ class: $$props.liClass })));
        var node_6 = child(li_1);
        if_block(node_6, () => $$props.item1, ($$anchor5) => {
          var fragment_2 = comment();
          var node_7 = first_child(fragment_2);
          snippet(node_7, () => $$props.item1);
          append($$anchor5, fragment_2);
        });
        reset(li_1);
        template_effect(() => set_class(li_1, get(class_derived_6)));
        append($$anchor4, li_1);
      });
      var node_8 = sibling(node_5, 2);
      if_block(node_8, () => $$props.review.item2, ($$anchor4) => {
        var li_2 = root_7$1();
        var node_9 = child(li_2);
        if_block(node_9, () => $$props.item2, ($$anchor5) => {
          var fragment_3 = comment();
          var node_10 = first_child(fragment_3);
          snippet(node_10, () => $$props.item2);
          append($$anchor5, fragment_3);
        });
        reset(li_2);
        template_effect(() => set_class(li_2, $$props.liClass));
        append($$anchor4, li_2);
      });
      var node_11 = sibling(node_8, 2);
      if_block(node_11, () => $$props.review.item3, ($$anchor4) => {
        var li_3 = root_9$1();
        const class_derived_7 = derived(() => twMerge($$props.liClass));
        var node_12 = child(li_3);
        if_block(node_12, () => $$props.item3, ($$anchor5) => {
          var fragment_4 = comment();
          var node_13 = first_child(fragment_4);
          snippet(node_13, () => $$props.item3);
          append($$anchor5, fragment_4);
        });
        reset(li_3);
        template_effect(() => set_class(li_3, get(class_derived_7)));
        append($$anchor4, li_3);
      });
      reset(ul_1);
      template_effect(() => set_class(ul_1, get(class_derived_5)));
      append($$anchor3, ul_1);
    });
    reset(div_1);
    var div_5 = sibling(div_1, 2);
    var div_6 = child(div_5);
    var div_7 = child(div_6);
    var node_14 = child(div_7);
    if_block(node_14, () => $$props.review.reviewDate, ($$anchor3) => {
      var footer = root_11();
      var p_1 = child(footer);
      var text_1 = child(p_1);
      reset(p_1);
      reset(footer);
      template_effect(() => set_text(text_1, `Reviewed: ${$$props.review.reviewDate ?? ""}`));
      append($$anchor3, footer);
    });
    var h4 = sibling(node_14, 2);
    var text_2 = child(h4, true);
    reset(h4);
    reset(div_7);
    var p_2 = sibling(div_7, 2);
    var text_3 = child(p_2, true);
    reset(p_2);
    reset(div_6);
    var node_15 = sibling(div_6, 2);
    snippet(node_15, () => $$props.children);
    reset(div_5);
    reset(article_1);
    template_effect(() => {
      set_class(article_1, get(class_derived));
      set_class(div_2, get(class_derived_1));
      set_class(img_1, get(class_derived_2));
      set_attribute(img_1, "src", $$props.review.imgSrc);
      set_attribute(img_1, "alt", $$props.review.imgAlt);
      set_class(div_3, get(class_derived_3));
      set_text(text2, $$props.review.name);
      set_text(text_2, $$props.review.title);
      set_text(text_3, $$props.review.rating);
    });
    append($$anchor2, article_1);
  });
  append($$anchor, fragment);
  pop();
}
var root_2$7 = template(`<p> </p>`);
var root_3$4 = template(`<p> </p>`);
var root_4$1 = template(`<span></span> <p> </p>`, 1);
var root_5 = template(`<a> </a>`);
var root_1$6 = template(`<!> <!> <!> <!>`, 1);
var root_7 = template(`<dl><dt class="text-sm font-medium text-gray-500 dark:text-gray-400"> </dt> <dd class="mb-3 flex items-center"><div class="me-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700"><div></div></div> <span class="text-sm font-medium text-gray-500 dark:text-gray-400"> </span></dd></dl>`);
var root_9 = template(`<dl><dt class="text-sm font-medium text-gray-500 dark:text-gray-400"> </dt> <dd class="mb-3 flex items-center"><div class="me-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700"><div></div></div> <span class="text-sm font-medium text-gray-500 dark:text-gray-400"> </span></dd></dl>`);
var root$7 = template(`<div class="mb-5 flex items-center"><!></div> <div class="gap-8 sm:grid sm:grid-cols-2"><div><!></div> <div><!></div></div>`, 1);
function ScoreRating($$anchor, $$props) {
  push($$props, true);
  const $$d = derived(scorerating), desc1 = derived(() => get($$d).desc1), desc2 = derived(() => get($$d).desc2), desc3span = derived(() => get($$d).desc3span), desc3p = derived(() => get($$d).desc3p), link = derived(() => get($$d).link), bar = derived(() => get($$d).bar);
  var fragment = root$7();
  var div = first_child(fragment);
  var node = child(div);
  if_block(node, () => $$props.headerLabel, ($$anchor2) => {
    var fragment_1 = root_1$6();
    var node_1 = first_child(fragment_1);
    if_block(node_1, () => $$props.headerLabel.desc1, ($$anchor3) => {
      var p = root_2$7();
      const class_derived = derived(() => get(desc1)());
      var text2 = child(p, true);
      reset(p);
      template_effect(() => {
        set_class(p, get(class_derived));
        set_text(text2, $$props.headerLabel.desc1);
      });
      append($$anchor3, p);
    });
    var node_2 = sibling(node_1, 2);
    if_block(node_2, () => $$props.headerLabel.desc2, ($$anchor3) => {
      var p_1 = root_3$4();
      const class_derived_1 = derived(() => get(desc2)());
      var text_1 = child(p_1, true);
      reset(p_1);
      template_effect(() => {
        set_class(p_1, get(class_derived_1));
        set_text(text_1, $$props.headerLabel.desc2);
      });
      append($$anchor3, p_1);
    });
    var node_3 = sibling(node_2, 2);
    if_block(node_3, () => $$props.headerLabel.desc3, ($$anchor3) => {
      var fragment_2 = root_4$1();
      var span = first_child(fragment_2);
      const class_derived_2 = derived(() => get(desc3span)());
      var p_2 = sibling(span, 2);
      const class_derived_3 = derived(() => get(desc3p)());
      var text_2 = child(p_2, true);
      reset(p_2);
      template_effect(() => {
        set_class(span, get(class_derived_2));
        set_class(p_2, get(class_derived_3));
        set_text(text_2, $$props.headerLabel.desc3);
      });
      append($$anchor3, fragment_2);
    });
    var node_4 = sibling(node_3, 2);
    if_block(node_4, () => $$props.headerLabel.link, ($$anchor3) => {
      var a = root_5();
      const class_derived_4 = derived(() => get(link)());
      var text_3 = child(a, true);
      reset(a);
      template_effect(() => {
        set_attribute(a, "href", $$props.headerLabel.link.url);
        set_class(a, get(class_derived_4));
        set_text(text_3, $$props.headerLabel.link.label);
      });
      append($$anchor3, a);
    });
    append($$anchor2, fragment_1);
  });
  reset(div);
  var div_1 = sibling(div, 2);
  var div_2 = child(div_1);
  var node_5 = child(div_2);
  if_block(node_5, () => $$props.ratings, ($$anchor2) => {
    var fragment_3 = comment();
    var node_6 = first_child(fragment_3);
    each(node_6, 17, () => $$props.ratings, index, ($$anchor3, $$item) => {
      let label = () => get($$item).label;
      let rating = () => get($$item).rating;
      var dl = root_7();
      var dt = child(dl);
      var text_4 = child(dt, true);
      reset(dt);
      var dd = sibling(dt, 2);
      var div_3 = child(dd);
      var div_4 = child(div_3);
      const class_derived_5 = derived(() => get(bar)());
      reset(div_3);
      var span_1 = sibling(div_3, 2);
      var text_5 = child(span_1, true);
      reset(span_1);
      reset(dd);
      reset(dl);
      template_effect(() => {
        set_text(text_4, label());
        set_class(div_4, get(class_derived_5));
        set_attribute(div_4, "style", `width: ${rating() * 10}%`);
        set_text(text_5, rating());
      });
      append($$anchor3, dl);
    });
    append($$anchor2, fragment_3);
  });
  reset(div_2);
  var div_5 = sibling(div_2, 2);
  var node_7 = child(div_5);
  if_block(node_7, () => $$props.ratings2, ($$anchor2) => {
    var fragment_4 = comment();
    var node_8 = first_child(fragment_4);
    each(node_8, 17, () => $$props.ratings2, index, ($$anchor3, $$item) => {
      let label = () => get($$item).label;
      let rating = () => get($$item).rating;
      var dl_1 = root_9();
      var dt_1 = child(dl_1);
      var text_6 = child(dt_1, true);
      reset(dt_1);
      var dd_1 = sibling(dt_1, 2);
      var div_6 = child(dd_1);
      var div_7 = child(div_6);
      const class_derived_6 = derived(() => get(bar)());
      reset(div_6);
      var span_2 = sibling(div_6, 2);
      var text_7 = child(span_2, true);
      reset(span_2);
      reset(dd_1);
      reset(dl_1);
      template_effect(() => {
        set_text(text_6, label());
        set_class(div_7, get(class_derived_6));
        set_attribute(div_7, "style", `width: ${rating() * 10}%`);
        set_text(text_7, rating());
      });
      append($$anchor3, dl_1);
    });
    append($$anchor2, fragment_4);
  });
  reset(div_5);
  reset(div_1);
  append($$anchor, fragment);
  pop();
}
var root_1$5 = ns_template(`<stop offset="0%"></stop><stop></stop><stop stop-color="transparent"></stop><stop offset="100%" stop-color="transparent"></stop>`, 1);
var root_2$6 = ns_template(`<stop offset="0%"></stop><stop offset="100%"></stop>`, 1);
var root$6 = ns_template(`<svg><defs><linearGradient><!></linearGradient></defs><path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path></svg>`);
function Thumbup($$anchor, $$props) {
  push($$props, true);
  let fillPercent = prop($$props, "fillPercent", 3, 100), fillColor = prop($$props, "fillColor", 3, "#00b500"), strokeColor = prop($$props, "strokeColor", 3, "#00b500"), size = prop($$props, "size", 3, 24), ariaLabel = prop($$props, "ariaLabel", 3, "thumbup"), id = prop($$props, "id", 19, idGenerator), role = prop($$props, "role", 3, "img"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "fillPercent",
    "fillColor",
    "strokeColor",
    "size",
    "ariaLabel",
    "id",
    "role",
    "svgClass"
  ]);
  var svg = root$6();
  let attributes;
  var defs = child(svg);
  var linearGradient = child(defs);
  var node = child(linearGradient);
  if_block(
    node,
    () => fillPercent() !== 100,
    ($$anchor2) => {
      var fragment = root_1$5();
      var stop = first_child(fragment);
      var stop_1 = sibling(stop);
      var stop_2 = sibling(stop_1);
      next();
      template_effect(() => {
        set_attribute(stop, "stop-color", fillColor());
        set_attribute(stop_1, "offset", `${fillPercent() ?? ""}%`);
        set_attribute(stop_1, "stop-color", fillColor());
        set_attribute(stop_2, "offset", `${fillPercent() ?? ""}%`);
      });
      append($$anchor2, fragment);
    },
    ($$anchor2) => {
      var fragment_1 = root_2$6();
      var stop_3 = first_child(fragment_1);
      var stop_4 = sibling(stop_3);
      template_effect(() => {
        set_attribute(stop_3, "stop-color", fillColor());
        set_attribute(stop_4, "stop-color", fillColor());
      });
      append($$anchor2, fragment_1);
    }
  );
  reset(linearGradient);
  reset(defs);
  var path = sibling(defs);
  reset(svg);
  template_effect(() => {
    attributes = set_attributes(
      svg,
      attributes,
      {
        width: size(),
        height: size(),
        ...restProps,
        class: $$props.svgClass,
        "aria-label": ariaLabel(),
        viewBox: "0 0 24 24",
        role: role(),
        "stroke-width": "1.5",
        stroke: "currentColor",
        fill: "none"
      },
      void 0,
      true
    );
    set_attribute(linearGradient, "id", id());
    set_attribute(path, "fill", `url(#${id() ?? ""})`);
    set_attribute(path, "stroke", strokeColor());
  });
  append($$anchor, svg);
  pop();
}
var root_1$4 = ns_template(`<title> </title>`);
var root_2$5 = ns_template(`<desc> </desc>`);
var root$5 = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clip-rule="evenodd"></path></svg>`);
function CalendarMonthSolid($$anchor, $$props) {
  var _a, _b;
  push($$props, true);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "calendar month solid"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "color",
    "title",
    "desc",
    "class",
    "ariaLabel"
  ]);
  let ariaDescribedby = `${((_a = $$props.title) == null ? void 0 : _a.id) || ""} ${((_b = $$props.desc) == null ? void 0 : _b.id) || ""}`;
  const hasDescription = derived(() => {
    var _a2, _b2;
    return !!(((_a2 = $$props.title) == null ? void 0 : _a2.id) || ((_b2 = $$props.desc) == null ? void 0 : _b2.id));
  });
  var svg = root$5();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$4();
    var text2 = child(title_1, true);
    reset(title_1);
    template_effect(() => {
      set_attribute(title_1, "id", $$props.title.id);
      set_text(text2, $$props.title.title);
    });
    append($$anchor2, title_1);
  });
  var node_1 = sibling(node);
  if_block(node_1, () => {
    var _a2;
    return ((_a2 = $$props.desc) == null ? void 0 : _a2.id) && $$props.desc.desc;
  }, ($$anchor2) => {
    var desc_1 = root_2$5();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  next();
  reset(svg);
  template_effect(() => attributes = set_attributes(
    svg,
    attributes,
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color(),
      ...restProps,
      class: twMerge("shrink-0", sizes[size()], $$props.class),
      "aria-label": ariaLabel(),
      "aria-describedby": get(hasDescription) ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    true
  ));
  append($$anchor, svg);
  pop();
}
var root_1$3 = ns_template(`<title> </title>`);
var root_2$4 = ns_template(`<desc> </desc>`);
var root$4 = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M10.915 2.345a2 2 0 0 1 2.17 0l7 4.52A2 2 0 0 1 21 8.544V9.5a1.5 1.5 0 0 1-1.5 1.5H19v6h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h1v-6h-.5A1.5 1.5 0 0 1 3 9.5v-.955a2 2 0 0 1 .915-1.68l7-4.52ZM17 17v-6h-2v6h2Zm-6-6h2v6h-2v-6Zm-2 6v-6H7v6h2Z" clip-rule="evenodd"></path><path d="M2 21a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"></path></svg>`);
function LandmarkSolid($$anchor, $$props) {
  var _a, _b;
  push($$props, true);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "landmark solid"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "color",
    "title",
    "desc",
    "class",
    "ariaLabel"
  ]);
  let ariaDescribedby = `${((_a = $$props.title) == null ? void 0 : _a.id) || ""} ${((_b = $$props.desc) == null ? void 0 : _b.id) || ""}`;
  const hasDescription = derived(() => {
    var _a2, _b2;
    return !!(((_a2 = $$props.title) == null ? void 0 : _a2.id) || ((_b2 = $$props.desc) == null ? void 0 : _b2.id));
  });
  var svg = root$4();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$3();
    var text2 = child(title_1, true);
    reset(title_1);
    template_effect(() => {
      set_attribute(title_1, "id", $$props.title.id);
      set_text(text2, $$props.title.title);
    });
    append($$anchor2, title_1);
  });
  var node_1 = sibling(node);
  if_block(node_1, () => {
    var _a2;
    return ((_a2 = $$props.desc) == null ? void 0 : _a2.id) && $$props.desc.desc;
  }, ($$anchor2) => {
    var desc_1 = root_2$4();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  next(2);
  reset(svg);
  template_effect(() => attributes = set_attributes(
    svg,
    attributes,
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color(),
      ...restProps,
      class: twMerge("shrink-0", sizes[size()], $$props.class),
      "aria-label": ariaLabel(),
      "aria-describedby": get(hasDescription) ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    true
  ));
  append($$anchor, svg);
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { AdvancedRating, Rating } from "$lib";\n<\/script>\n\n<AdvancedRating\n  ratings={[\n    { label: "5 star", rating: 70 },\n    { label: "4 star", rating: 17 },\n    { label: "3 star", rating: 8 },\n    { label: "2 star", rating: 4 },\n    { label: "1 star", rating: 1 }\n  ]}\n>\n  {#snippet rating()}\n    <Rating total={5} rating={3.72}>\n      {#snippet text()}\n        <p class="ms-2 pt-1 text-sm font-medium text-gray-500 dark:text-gray-400">3.72 out of 5</p>\n      {/snippet}\n    </Rating>\n  {/snippet}\n  {#snippet globalText()}\n    <p class="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>\n  {/snippet}\n</AdvancedRating>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { AdvancedRating, Rating, Thumbup } from "$lib";\n<\/script>\n\n<AdvancedRating\n  ratings={[\n    { label: "5 star", rating: 70 },\n    { label: "4 star", rating: 17 },\n    { label: "3 star", rating: 8 },\n    { label: "2 star", rating: 4 },\n    { label: "1 star", rating: 1 }\n  ]}\n>\n  {#snippet rating()}\n    <Rating total={5} rating={3.8} Icon={Thumbup}>\n      {#snippet text()}\n        <p class="ms-2 pt-1 text-sm font-medium text-gray-500 dark:text-gray-400">3.8 out of 5</p>\n      {/snippet}\n    </Rating>\n  {/snippet}\n  {#snippet globalText()}\n    <p class="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>\n  {/snippet}\n</AdvancedRating>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Rating } from "$lib";\n<\/script>\n\n<Rating count rating={4.95}>\n  <span class="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400"></span>\n  <a href="/" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>\n</Rating>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Rating } from "$lib";\n<\/script>\n\n<Rating total={5} size={30} rating={1.4} />\n<Rating total={5} size={30} rating={4.66} />\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Rating, Heart, Thumbup } from "$lib";\n<\/script>\n\n<Rating total={5} rating={3.3} Icon={Heart} />\n<Rating total={10} rating={7.6} Icon={Heart} />\n<Rating total={5} rating={4.7} Icon={Thumbup} />\n<Rating total={10} rating={8.2} Icon={Thumbup} />\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { RatingComment } from "$lib";\n  let comment = {\n    id: "1",\n    user: {\n      name: "Jese Leos",\n      img: {\n        src: "/images/profile-picture-2.webp",\n        alt: "Jese Leos"\n      },\n      joined: "Joined on August 2014"\n    },\n    total: 5,\n    rating: 4.5,\n    heading: "Thinking to buy another one!",\n    address: "the UK",\n    datetime: "2022-03-25"\n  };\n<\/script>\n\n<RatingComment {comment} helpfullink="/" abuselink="/">\n  <p class="mb-2 font-light text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>\n  <p class="mb-3 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>\n  <a href="/" class="mb-5 block text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Read more</a>\n  {#snippet evaluation()}\n    19 people found this helpful\n  {/snippet}\n</RatingComment>\n';
const __vite_glob_0_6 = `<script lang="ts">
  import { Review } from "$lib";
  import { LandmarkSolid, CalendarMonthSolid, UsersGroupOutline, ThumbsUpSolid, ThumbsDownSolid } from "flowbite-svelte-icons";
  let review = {
    name: "Jese Leos",
    imgSrc: "/images/profile-picture-2.webp",
    imgAlt: "jese leos",
    address: "United States",
    reviewDate: "January 20, 2022",
    title: "Spotless, good appliances, excellent layout, host was genuinely nice and helpful.",
    rating: 8.79,
    item1: "Apartament with City View",
    item2: "3 nights December 2021",
    item3: "Family"
  };
<\/script>

<Review {review}>
  <p class="mb-2 font-light text-gray-500 dark:text-gray-400">The flat was spotless, very comfortable, and the host was amazing. I highly recommend this accommodation for anyone visiting Brasov city centre. It's quite a while since we are no longer using hotel facilities but self contained places. And the main reason is poor cleanliness and staff not being trained properly. This place exceeded our expectation and will return for sure.</p>
  <p class="mb-5 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
  {#snippet item1()}
    <div class="flex">
      <LandmarkSolid class="mr-2 h-5 w-5" />
      {review.item1}
    </div>
  {/snippet}
  {#snippet item2()}
    <div class="flex">
      <CalendarMonthSolid class="mr-2 h-5 w-5" />
      {review.item2}
    </div>
  {/snippet}
  {#snippet item3()}
    <div class="flex">
      <UsersGroupOutline class="mr-2 h-5 w-5" />
      {review.item3}
    </div>
  {/snippet}
  <aside class="mt-3 flex items-center space-x-5 rtl:space-x-reverse">
    <a href="/" class="inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
      <ThumbsUpSolid class="me-2.5 h-3.5 w-3.5 text-primary-600 dark:text-primary-500" />
      Helpful
    </a>
    <a href="/" class="group inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
      <ThumbsDownSolid class="me-2.5 h-3.5 w-3.5 text-primary-600 dark:text-primary-500" />
      Not helpful
    </a>
  </aside>
</Review>
`;
const __vite_glob_0_7 = '<script lang="ts">\n  import { ScoreRating } from "$lib";\n  const headerLabel = {\n    desc1: "8.7",\n    desc2: "Excellent",\n    desc3: "376 reviews",\n    link: {\n      label: "Read all reviews",\n      url: "/"\n    }\n  };\n<\/script>\n\n<ScoreRating\n  {headerLabel}\n  ratings={[\n    { label: "Staff", rating: 8.8 },\n    { label: "Comfort", rating: 8.9 },\n    { label: "Free WiFi", rating: 8.8 },\n    { label: "Facilities", rating: 5.4 }\n  ]}\n  ratings2={[\n    { label: "Value for money", rating: 8.9 },\n    { label: "Cleanliness", rating: 7.0 },\n    { label: "Location", rating: 8.0 }\n  ]}\n/>\n';
const __vite_glob_0_8 = '<script>\n  import { Rating, Star, Heart, Thumbup, AdvancedRating, ScoreRating, RatingComment, Review } from "$lib";\n<\/script>\n';
const __vite_glob_0_9 = '<script lang="ts">\n  import { Star } from "$lib";\n<\/script>\n\n<div class="flex gap-2">\n  <Star size={30} id="0" fillPercent={0} />\n  <Star size={30} id="10" fillPercent={10} />\n  <Star size={30} id="20" fillPercent={20} />\n  <Star size={30} id="30" fillPercent={30} />\n  <Star size={30} id="40" fillPercent={40} />\n  <Star size={30} id="50" fillPercent={50} />\n  <Star size={30} id="60" fillPercent={60} />\n  <Star size={30} id="70" fillPercent={70} />\n  <Star size={30} id="80" fillPercent={80} />\n  <Star size={30} id="90" fillPercent={90} />\n  <Star size={30} id="100" fillPercent={100} />\n</div>\n';
const __vite_glob_0_10 = '<script lang="ts">\n  import { Rating } from "$lib";\n<\/script>\n\n<Rating total={5} rating={3.4}>\n  {#snippet text()}\n    <p class="ms-2 pt-1 text-sm font-medium text-gray-500 dark:text-gray-400">3.4 out of 5</p>\n  {/snippet}\n</Rating>\n';
var root_2$3 = template(`<p class="ms-2 pt-1 text-sm font-medium text-gray-500 dark:text-gray-400">3.72 out of 5</p>`);
var root_3$3 = template(`<p class="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>`);
function AdvancedRating_1($$anchor) {
  {
    const rating = ($$anchor2) => {
      {
        const text2 = ($$anchor3) => {
          var p = root_2$3();
          append($$anchor3, p);
        };
        Rating($$anchor2, {
          total: 5,
          rating: 3.72,
          text: text2,
          $$slots: { text: true }
        });
      }
    };
    const globalText = ($$anchor2) => {
      var p_1 = root_3$3();
      append($$anchor2, p_1);
    };
    AdvancedRating($$anchor, {
      ratings: [
        { label: "5 star", rating: 70 },
        { label: "4 star", rating: 17 },
        { label: "3 star", rating: 8 },
        { label: "2 star", rating: 4 },
        { label: "1 star", rating: 1 }
      ],
      rating,
      globalText,
      $$slots: { rating: true, globalText: true }
    });
  }
}
var root_2$2 = template(`<p class="ms-2 pt-1 text-sm font-medium text-gray-500 dark:text-gray-400">3.8 out of 5</p>`);
var root_3$2 = template(`<p class="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>`);
function AdvancedRatingAndIcon($$anchor) {
  {
    const rating = ($$anchor2) => {
      {
        const text2 = ($$anchor3) => {
          var p = root_2$2();
          append($$anchor3, p);
        };
        Rating($$anchor2, {
          total: 5,
          rating: 3.8,
          Icon: Thumbup,
          text: text2,
          $$slots: { text: true }
        });
      }
    };
    const globalText = ($$anchor2) => {
      var p_1 = root_3$2();
      append($$anchor2, p_1);
    };
    AdvancedRating($$anchor, {
      ratings: [
        { label: "5 star", rating: 70 },
        { label: "4 star", rating: 17 },
        { label: "3 star", rating: 8 },
        { label: "2 star", rating: 4 },
        { label: "1 star", rating: 1 }
      ],
      rating,
      globalText,
      $$slots: { rating: true, globalText: true }
    });
  }
}
var root_1$2 = template(`<span class="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400"></span> <a href="/" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>`, 1);
function Count($$anchor) {
  Rating($$anchor, {
    count: true,
    rating: 4.95,
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$2();
      next(2);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root$3 = template(`<!> <!>`, 1);
function Default($$anchor) {
  var fragment = root$3();
  var node = first_child(fragment);
  Rating(node, { total: 5, size: 30, rating: 1.4 });
  var node_1 = sibling(node, 2);
  Rating(node_1, { total: 5, size: 30, rating: 4.66 });
  append($$anchor, fragment);
}
var root$2 = template(`<!> <!> <!> <!>`, 1);
function Icon($$anchor) {
  var fragment = root$2();
  var node = first_child(fragment);
  Rating(node, { total: 5, rating: 3.3, Icon: Heart });
  var node_1 = sibling(node, 2);
  Rating(node_1, { total: 10, rating: 7.6, Icon: Heart });
  var node_2 = sibling(node_1, 2);
  Rating(node_2, { total: 5, rating: 4.7, Icon: Thumbup });
  var node_3 = sibling(node_2, 2);
  Rating(node_3, { total: 10, rating: 8.2, Icon: Thumbup });
  append($$anchor, fragment);
}
var root_2$1 = template(`<p class="mb-2 font-light text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p> <p class="mb-3 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p> <a href="/" class="mb-5 block text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Read more</a>`, 1);
function RatingComment_1($$anchor) {
  let comment2 = {
    id: "1",
    user: {
      name: "Jese Leos",
      img: {
        src: "/images/profile-picture-2.webp",
        alt: "Jese Leos"
      },
      joined: "Joined on August 2014"
    },
    total: 5,
    rating: 4.5,
    heading: "Thinking to buy another one!",
    address: "the UK",
    datetime: "2022-03-25"
  };
  {
    const evaluation = ($$anchor2) => {
      next();
      var text$1 = text("19 people found this helpful");
      append($$anchor2, text$1);
    };
    RatingComment($$anchor, {
      comment: comment2,
      helpfullink: "/",
      abuselink: "/",
      evaluation,
      children: ($$anchor2, $$slotProps) => {
        var fragment_1 = root_2$1();
        next(4);
        append($$anchor2, fragment_1);
      },
      $$slots: { evaluation: true, default: true }
    });
  }
}
var root_1$1 = template(`<div class="flex"><!> </div>`);
var root_2 = template(`<div class="flex"><!> </div>`);
var root_3$1 = template(`<div class="flex"><!> </div>`);
var root_4 = template(`<p class="mb-2 font-light text-gray-500 dark:text-gray-400">The flat was spotless, very comfortable, and the host was amazing. I highly recommend this accommodation for anyone visiting Brasov city centre. It's quite a while since we are no longer using hotel facilities but self contained places. And the main reason is poor cleanliness and staff not being trained properly. This place exceeded our expectation and will return for sure.</p> <p class="mb-5 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>  <aside class="mt-3 flex items-center space-x-5 rtl:space-x-reverse"><a href="/" class="inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><!> Helpful</a> <a href="/" class="group inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><!> Not helpful</a></aside>`, 1);
function ReviewContent($$anchor) {
  let review2 = {
    name: "Jese Leos",
    imgSrc: "/images/profile-picture-2.webp",
    imgAlt: "jese leos",
    address: "United States",
    reviewDate: "January 20, 2022",
    title: "Spotless, good appliances, excellent layout, host was genuinely nice and helpful.",
    rating: 8.79,
    item1: "Apartament with City View",
    item2: "3 nights December 2021",
    item3: "Family"
  };
  {
    const item1 = ($$anchor2) => {
      var div = root_1$1();
      var node = child(div);
      LandmarkSolid(node, { class: "mr-2 h-5 w-5" });
      var text2 = sibling(node);
      reset(div);
      template_effect(() => set_text(text2, ` ${review2.item1 ?? ""}`));
      append($$anchor2, div);
    };
    const item2 = ($$anchor2) => {
      var div_1 = root_2();
      var node_1 = child(div_1);
      CalendarMonthSolid(node_1, { class: "mr-2 h-5 w-5" });
      var text_1 = sibling(node_1);
      reset(div_1);
      template_effect(() => set_text(text_1, ` ${review2.item2 ?? ""}`));
      append($$anchor2, div_1);
    };
    const item3 = ($$anchor2) => {
      var div_2 = root_3$1();
      var node_2 = child(div_2);
      UsersGroupOutline(node_2, { class: "mr-2 h-5 w-5" });
      var text_2 = sibling(node_2);
      reset(div_2);
      template_effect(() => set_text(text_2, ` ${review2.item3 ?? ""}`));
      append($$anchor2, div_2);
    };
    Review($$anchor, {
      review: review2,
      item1,
      item2,
      item3,
      children: ($$anchor2, $$slotProps) => {
        var fragment_1 = root_4();
        var aside = sibling(first_child(fragment_1), 4);
        var a = child(aside);
        var node_3 = child(a);
        ThumbsUpSolid(node_3, {
          class: "me-2.5 h-3.5 w-3.5 text-primary-600 dark:text-primary-500"
        });
        next();
        reset(a);
        var a_1 = sibling(a, 2);
        var node_4 = child(a_1);
        ThumbsDownSolid(node_4, {
          class: "me-2.5 h-3.5 w-3.5 text-primary-600 dark:text-primary-500"
        });
        next();
        reset(a_1);
        reset(aside);
        append($$anchor2, fragment_1);
      },
      $$slots: {
        item1: true,
        item2: true,
        item3: true,
        default: true
      }
    });
  }
}
function ScoreRating_1($$anchor) {
  const headerLabel = {
    desc1: "8.7",
    desc2: "Excellent",
    desc3: "376 reviews",
    link: { label: "Read all reviews", url: "/" }
  };
  ScoreRating($$anchor, {
    headerLabel,
    ratings: [
      { label: "Staff", rating: 8.8 },
      { label: "Comfort", rating: 8.9 },
      { label: "Free WiFi", rating: 8.8 },
      { label: "Facilities", rating: 5.4 }
    ],
    ratings2: [
      { label: "Value for money", rating: 8.9 },
      { label: "Cleanliness", rating: 7 },
      { label: "Location", rating: 8 }
    ]
  });
}
var root$1 = template(`<div class="flex gap-2"><!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!></div>`);
function Star_1($$anchor) {
  var div = root$1();
  var node = child(div);
  Star(node, { size: 30, id: "0", fillPercent: 0 });
  var node_1 = sibling(node, 2);
  Star(node_1, { size: 30, id: "10", fillPercent: 10 });
  var node_2 = sibling(node_1, 2);
  Star(node_2, { size: 30, id: "20", fillPercent: 20 });
  var node_3 = sibling(node_2, 2);
  Star(node_3, { size: 30, id: "30", fillPercent: 30 });
  var node_4 = sibling(node_3, 2);
  Star(node_4, { size: 30, id: "40", fillPercent: 40 });
  var node_5 = sibling(node_4, 2);
  Star(node_5, { size: 30, id: "50", fillPercent: 50 });
  var node_6 = sibling(node_5, 2);
  Star(node_6, { size: 30, id: "60", fillPercent: 60 });
  var node_7 = sibling(node_6, 2);
  Star(node_7, { size: 30, id: "70", fillPercent: 70 });
  var node_8 = sibling(node_7, 2);
  Star(node_8, { size: 30, id: "80", fillPercent: 80 });
  var node_9 = sibling(node_8, 2);
  Star(node_9, { size: 30, id: "90", fillPercent: 90 });
  var node_10 = sibling(node_9, 2);
  Star(node_10, { size: 30, id: "100", fillPercent: 100 });
  reset(div);
  append($$anchor, div);
}
var root_1 = template(`<p class="ms-2 pt-1 text-sm font-medium text-gray-500 dark:text-gray-400">3.4 out of 5</p>`);
function Text($$anchor) {
  {
    const text2 = ($$anchor2) => {
      var p = root_1();
      append($$anchor2, p);
    };
    Rating($$anchor, {
      total: 5,
      rating: 3.4,
      text: text2,
      $$slots: { text: true }
    });
  }
}
var root_3 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "rating";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/AdvancedRating.svelte": __vite_glob_0_0,
    "./examples/AdvancedRatingAndIcon.svelte": __vite_glob_0_1,
    "./examples/Count.svelte": __vite_glob_0_2,
    "./examples/Default.svelte": __vite_glob_0_3,
    "./examples/Icon.svelte": __vite_glob_0_4,
    "./examples/RatingComment.svelte": __vite_glob_0_5,
    "./examples/ReviewContent.svelte": __vite_glob_0_6,
    "./examples/ScoreRating.svelte": __vite_glob_0_7,
    "./examples/Setup.svelte": __vite_glob_0_8,
    "./examples/Star.svelte": __vite_glob_0_9,
    "./examples/Text.svelte": __vite_glob_0_10
  });
  const exampleArr = [
    {
      name: "Default",
      component: Default
    },
    {
      name: "Star",
      component: Star_1
    },
    {
      name: "Text",
      component: Text
    },
    {
      name: "Count",
      component: Count
    },
    {
      name: "Icon",
      component: Icon
    },
    {
      name: "Advanced rating",
      component: AdvancedRating_1
    },
    {
      name: "Advanced rating and icon",
      component: AdvancedRatingAndIcon
    },
    {
      name: "Score rating",
      component: ScoreRating_1
    },
    {
      name: "Rating comment",
      component: RatingComment_1
    },
    {
      name: "Review content",
      component: ReviewContent
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  let codeBlock = uiHelpers();
  let exampleExpand = state(false);
  let showExpandButton = derived(() => isSvelteOverflow(get(svelteCode), exampleModules));
  const handleExpandClick = () => {
    set(exampleExpand, !get(exampleExpand));
  };
  user_effect(() => {
    set(exampleExpand, proxy(codeBlock.isOpen));
  });
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Rating");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  {
    const codeblock = ($$anchor2) => {
      DynamicCodeBlockHighlight($$anchor2, {
        replaceLib: true,
        handleExpandClick,
        get expand() {
          return get(exampleExpand);
        },
        get showExpandButton() {
          return get(showExpandButton);
        },
        get code() {
          return exampleModules[`./examples/${get(svelteCode)}`];
        }
      });
    };
    CodeWrapper(node_1, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_3();
        var div = first_child(fragment_2);
        var node_2 = child(div);
        Label(node_2, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_1 = text("Example");
            append($$anchor3, text_1);
          },
          $$slots: { default: true }
        });
        var node_3 = sibling(node_2, 2);
        each(node_3, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-40 my-1",
            onclick: () => set(exampleExpand, false),
            name: "block_style",
            get group() {
              return get(selectedExample);
            },
            set group($$value) {
              set(selectedExample, proxy($$value));
            },
            get value() {
              return get(style).name;
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_2 = text();
              template_effect(() => set_text(text_2, get(style).name));
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
        });
        reset(div);
        var node_4 = sibling(div, 2);
        component(node_4, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_5 = sibling(node_1, 2);
  H2(node_5, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_3 = text("Component data");
      append($$anchor2, text_3);
    },
    $$slots: { default: true }
  });
  var node_6 = sibling(node_5, 2);
  CompoAttributesViewer(node_6, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
