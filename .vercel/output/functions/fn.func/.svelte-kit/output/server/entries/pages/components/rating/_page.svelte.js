import { Q as push, Y as ensure_array_like, W as attr, V as escape_html, X as stringify, S as pop, a0 as spread_attributes, a1 as getContext, a3 as copy_payload, a4 as assign_payload } from "../../../../chunks/index.js";
import { ap as advancedrating, aq as review, ar as scorerating } from "../../../../chunks/theme.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { R as Rating, S as Star } from "../../../../chunks/Rating.js";
import { i as idGenerator } from "../../../../chunks/uiHelpers.svelte.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { twMerge } from "tailwind-merge";
import { T as ThumbsDownSolid } from "../../../../chunks/ThumbsDownSolid.js";
import { T as ThumbsUpSolid } from "../../../../chunks/ThumbsUpSolid.js";
import { U as UsersGroupOutline } from "../../../../chunks/UsersGroupOutline.js";
function AdvancedRating($$payload, $$props) {
  push();
  let {
    rating,
    globalText,
    ratings,
    divClass,
    spanClass,
    div2Class,
    div3Class,
    span2Class,
    unit
  } = $$props;
  const { base, span, div2, div3, span2 } = advancedrating();
  const each_array = ensure_array_like(ratings);
  if (rating) {
    $$payload.out += "<!--[-->";
    rating($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (globalText) {
    $$payload.out += "<!--[-->";
    globalText($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { label, rating: rating2 } = each_array[$$index];
    $$payload.out += `<div${attr("class", base({ class: divClass }))}><span${attr("class", span({ class: spanClass }))}>${escape_html(label)}</span> <div${attr("class", div2({ class: div2Class }))}><div${attr("class", div3({ class: div3Class }))}${attr("style", `width: ${stringify(rating2)}%`)}></div></div> <span${attr("class", span2({ class: span2Class }))}>${escape_html(rating2)}${escape_html(unit)}</span></div>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Heart($$payload, $$props) {
  push();
  let {
    fillPercent = 100,
    fillColor = "#ff0000",
    strokeColor = "#ff0000",
    size = 24,
    ariaLabel = "heart",
    id = idGenerator(),
    role = "img",
    svgClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<svg${spread_attributes(
    {
      width: size,
      height: size,
      class: svgClass,
      ...restProps,
      "aria-label": ariaLabel,
      viewBox: "0 0 24 24",
      role,
      "stroke-width": "1.5",
      stroke: "currentColor",
      fill: "none"
    },
    void 0,
    void 0,
    3
  )}><defs><linearGradient${attr("id", id)}>`;
  if (fillPercent !== 100) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<stop offset="0%"${attr("stop-color", fillColor)}></stop><stop${attr("offset", `${stringify(fillPercent)}%`)}${attr("stop-color", fillColor)}></stop><stop${attr("offset", `${stringify(fillPercent)}%`)} stop-color="transparent"></stop><stop offset="100%" stop-color="transparent"></stop>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<stop offset="0%"${attr("stop-color", fillColor)}></stop><stop offset="100%"${attr("stop-color", fillColor)}></stop>`;
  }
  $$payload.out += `<!--]--></linearGradient></defs><path${attr("fill", `url(#${stringify(id)})`)}${attr("stroke", strokeColor)} stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg>`;
  pop();
}
function RatingComment($$payload, $$props) {
  push();
  let {
    children,
    evaluation,
    helpfullink,
    abuselink,
    comment
  } = $$props;
  $$payload.out += `<article><div class="mb-4 flex items-center space-x-4 rtl:space-x-reverse"><img class="h-10 w-10 rounded-full"${attr("src", comment.user.img.src)}${attr("alt", comment.user.img.alt)}> <div class="space-y-1 font-medium dark:text-white"><p>${escape_html(comment.user.name)} <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">${escape_html(comment.user.joined)}</time></p></div></div> <div class="mb-1 flex items-center">`;
  {
    let text = function($$payload2) {
      $$payload2.out += `<p class="ms-2 pt-1 text-sm font-medium text-gray-500 dark:text-gray-400">${escape_html(comment.rating)} out of ${escape_html(comment.total)}</p>`;
    };
    Rating($$payload, {
      total: comment.total,
      rating: comment.rating,
      text,
      $$slots: { text: true }
    });
  }
  $$payload.out += `<!----> `;
  if (comment.heading) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h3 class="ms-2 text-sm font-semibold text-gray-900 dark:text-white">${escape_html(comment.heading)}</h3>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> `;
  if (comment.address || comment.datetime) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in ${escape_html(comment.address)} on ${escape_html(comment.datetime)}</p></footer>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  children($$payload);
  $$payload.out += `<!----> <aside><p class="mt-1 text-xs text-gray-500 dark:text-gray-400">`;
  if (evaluation) {
    $$payload.out += "<!--[-->";
    evaluation($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></p> `;
  if (helpfullink || abuselink) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="mt-3 flex items-center space-x-3 divide-x divide-gray-200 rtl:space-x-reverse rtl:divide-x-reverse dark:divide-gray-600">`;
    if (helpfullink) {
      $$payload.out += "<!--[-->";
      Button($$payload, {
        size: "xs",
        href: "/",
        color: "dark",
        children: ($$payload2) => {
          $$payload2.out += `<!---->Helpful`;
        },
        $$slots: { default: true }
      });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (abuselink) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<a${attr("href", abuselink)} class="ps-4 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Report abuse</a>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></aside></article>`;
  pop();
}
function Review($$payload, $$props) {
  push();
  let {
    children,
    address,
    item1,
    item2,
    item3,
    review: review$1,
    articleClass,
    divClass,
    div2Class,
    div3Class,
    imgClass,
    ulClass,
    liClass
  } = $$props;
  const { article, div, div2, div3, img, ul, li } = review();
  if (review$1) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<article${attr("class", article({ class: articleClass }))}><div><div${attr("class", div({ class: divClass }))}><img${attr("class", img({ class: imgClass }))}${attr("src", review$1.imgSrc)}${attr("alt", review$1.imgAlt)}> <div${attr("class", div2({ class: div2Class }))}><p>${escape_html(review$1.name)}</p> `;
    if (review$1.address) {
      $$payload.out += "<!--[-->";
      if (address) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div${attr("class", div3({ class: div3Class }))}>`;
        address($$payload);
        $$payload.out += `<!----></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]-->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div></div> `;
    if (review$1.item1 || review$1.item2 || review$1.item3) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<ul${attr("class", ul({ class: ulClass }))}>`;
      if (review$1.item1) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<li${attr("class", twMerge(li({ class: liClass })))}>`;
        if (item1) {
          $$payload.out += "<!--[-->";
          item1($$payload);
          $$payload.out += `<!---->`;
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]--></li>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--> `;
      if (review$1.item2) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<li${attr("class", liClass)}>`;
        if (item2) {
          $$payload.out += "<!--[-->";
          item2($$payload);
          $$payload.out += `<!---->`;
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]--></li>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--> `;
      if (review$1.item3) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<li${attr("class", twMerge(liClass))}>`;
        if (item3) {
          $$payload.out += "<!--[-->";
          item3($$payload);
          $$payload.out += `<!---->`;
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]--></li>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></ul>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div> <div class="col-span-2 mt-6 md:mt-0"><div class="mb-5 flex items-start"><div class="pe-4">`;
    if (review$1.reviewDate) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<footer><p class="mb-2 text-sm text-gray-500 dark:text-gray-400">Reviewed: ${escape_html(review$1.reviewDate)}</p></footer>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <h4 class="text-xl font-bold text-gray-900 dark:text-white">${escape_html(review$1.title)}</h4></div> <p class="inline-flex items-center rounded bg-primary-700 p-1.5 text-sm font-semibold text-white">${escape_html(review$1.rating)}</p></div> `;
    children($$payload);
    $$payload.out += `<!----></div></article>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function ScoreRating($$payload, $$props) {
  push();
  let { ratings, ratings2, headerLabel } = $$props;
  const {
    desc1,
    desc2,
    desc3span,
    desc3p,
    link,
    bar
  } = scorerating();
  $$payload.out += `<div class="mb-5 flex items-center">`;
  if (headerLabel) {
    $$payload.out += "<!--[-->";
    if (headerLabel.desc1) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p${attr("class", desc1())}>${escape_html(headerLabel.desc1)}</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (headerLabel.desc2) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p${attr("class", desc2())}>${escape_html(headerLabel.desc2)}</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (headerLabel.desc3) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span${attr("class", desc3span())}></span> <p${attr("class", desc3p())}>${escape_html(headerLabel.desc3)}</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (headerLabel.link) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<a${attr("href", headerLabel.link.url)}${attr("class", link())}>${escape_html(headerLabel.link.label)}</a>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div class="gap-8 sm:grid sm:grid-cols-2"><div>`;
  if (ratings) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(ratings);
    $$payload.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let { label, rating } = each_array[$$index];
      $$payload.out += `<dl><dt class="text-sm font-medium text-gray-500 dark:text-gray-400">${escape_html(label)}</dt> <dd class="mb-3 flex items-center"><div class="me-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700"><div${attr("class", bar())}${attr("style", `width: ${stringify(rating * 10)}%`)}></div></div> <span class="text-sm font-medium text-gray-500 dark:text-gray-400">${escape_html(rating)}</span></dd></dl>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <div>`;
  if (ratings2) {
    $$payload.out += "<!--[-->";
    const each_array_1 = ensure_array_like(ratings2);
    $$payload.out += `<!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let { label, rating } = each_array_1[$$index_1];
      $$payload.out += `<dl><dt class="text-sm font-medium text-gray-500 dark:text-gray-400">${escape_html(label)}</dt> <dd class="mb-3 flex items-center"><div class="me-2 h-2.5 w-full rounded bg-gray-200 dark:bg-gray-700"><div${attr("class", bar())}${attr("style", `width: ${stringify(rating * 10)}%`)}></div></div> <span class="text-sm font-medium text-gray-500 dark:text-gray-400">${escape_html(rating)}</span></dd></dl>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
function Thumbup($$payload, $$props) {
  push();
  let {
    fillPercent = 100,
    fillColor = "#00b500",
    strokeColor = "#00b500",
    size = 24,
    ariaLabel = "thumbup",
    id = idGenerator(),
    role = "img",
    svgClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<svg${spread_attributes(
    {
      width: size,
      height: size,
      ...restProps,
      class: svgClass,
      "aria-label": ariaLabel,
      viewBox: "0 0 24 24",
      role,
      "stroke-width": "1.5",
      stroke: "currentColor",
      fill: "none"
    },
    void 0,
    void 0,
    3
  )}><defs><linearGradient${attr("id", id)}>`;
  if (fillPercent !== 100) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<stop offset="0%"${attr("stop-color", fillColor)}></stop><stop${attr("offset", `${stringify(fillPercent)}%`)}${attr("stop-color", fillColor)}></stop><stop${attr("offset", `${stringify(fillPercent)}%`)} stop-color="transparent"></stop><stop offset="100%" stop-color="transparent"></stop>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<stop offset="0%"${attr("stop-color", fillColor)}></stop><stop offset="100%"${attr("stop-color", fillColor)}></stop>`;
  }
  $$payload.out += `<!--]--></linearGradient></defs><path${attr("fill", `url(#${stringify(id)})`)}${attr("stroke", strokeColor)} stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path></svg>`;
  pop();
}
function CalendarMonthSolid($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    desc,
    class: className,
    ariaLabel = "calendar month solid",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function LandmarkSolid($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    desc,
    class: className,
    ariaLabel = "landmark solid",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M10.915 2.345a2 2 0 0 1 2.17 0l7 4.52A2 2 0 0 1 21 8.544V9.5a1.5 1.5 0 0 1-1.5 1.5H19v6h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h1v-6h-.5A1.5 1.5 0 0 1 3 9.5v-.955a2 2 0 0 1 .915-1.68l7-4.52ZM17 17v-6h-2v6h2Zm-6-6h2v6h-2v-6Zm-2 6v-6H7v6h2Z" clip-rule="evenodd"></path><path d="M2 21a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"></path></svg>`;
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
function AdvancedRating_1($$payload) {
  {
    let rating = function($$payload2) {
      {
        let text = function($$payload3) {
          $$payload3.out += `<p class="ms-2 pt-1 text-sm font-medium text-gray-500 dark:text-gray-400">3.72 out of 5</p>`;
        };
        Rating($$payload2, {
          total: 5,
          rating: 3.72,
          text,
          $$slots: { text: true }
        });
      }
    }, globalText = function($$payload2) {
      $$payload2.out += `<p class="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>`;
    };
    AdvancedRating($$payload, {
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
function AdvancedRatingAndIcon($$payload) {
  {
    let rating = function($$payload2) {
      {
        let text = function($$payload3) {
          $$payload3.out += `<p class="ms-2 pt-1 text-sm font-medium text-gray-500 dark:text-gray-400">3.8 out of 5</p>`;
        };
        Rating($$payload2, {
          total: 5,
          rating: 3.8,
          Icon: Thumbup,
          text,
          $$slots: { text: true }
        });
      }
    }, globalText = function($$payload2) {
      $$payload2.out += `<p class="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>`;
    };
    AdvancedRating($$payload, {
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
function Count($$payload) {
  Rating($$payload, {
    count: true,
    rating: 4.95,
    children: ($$payload2) => {
      $$payload2.out += `<span class="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400"></span> <a href="/" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>`;
    },
    $$slots: { default: true }
  });
}
function Default($$payload) {
  Rating($$payload, { total: 5, size: 30, rating: 1.4 });
  $$payload.out += `<!----> `;
  Rating($$payload, { total: 5, size: 30, rating: 4.66 });
  $$payload.out += `<!---->`;
}
function Icon($$payload) {
  Rating($$payload, { total: 5, rating: 3.3, Icon: Heart });
  $$payload.out += `<!----> `;
  Rating($$payload, { total: 10, rating: 7.6, Icon: Heart });
  $$payload.out += `<!----> `;
  Rating($$payload, { total: 5, rating: 4.7, Icon: Thumbup });
  $$payload.out += `<!----> `;
  Rating($$payload, { total: 10, rating: 8.2, Icon: Thumbup });
  $$payload.out += `<!---->`;
}
function RatingComment_1($$payload) {
  let comment = {
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
    let evaluation = function($$payload2) {
      $$payload2.out += `<!---->19 people found this helpful`;
    };
    RatingComment($$payload, {
      comment,
      helpfullink: "/",
      abuselink: "/",
      evaluation,
      children: ($$payload2) => {
        $$payload2.out += `<p class="mb-2 font-light text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p> <p class="mb-3 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p> <a href="/" class="mb-5 block text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Read more</a>`;
      },
      $$slots: { evaluation: true, default: true }
    });
  }
}
function ReviewContent($$payload) {
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
    let item1 = function($$payload2) {
      $$payload2.out += `<div class="flex">`;
      LandmarkSolid($$payload2, { class: "mr-2 h-5 w-5" });
      $$payload2.out += `<!----> ${escape_html(review2.item1)}</div>`;
    }, item2 = function($$payload2) {
      $$payload2.out += `<div class="flex">`;
      CalendarMonthSolid($$payload2, { class: "mr-2 h-5 w-5" });
      $$payload2.out += `<!----> ${escape_html(review2.item2)}</div>`;
    }, item3 = function($$payload2) {
      $$payload2.out += `<div class="flex">`;
      UsersGroupOutline($$payload2, { class: "mr-2 h-5 w-5" });
      $$payload2.out += `<!----> ${escape_html(review2.item3)}</div>`;
    };
    Review($$payload, {
      review: review2,
      item1,
      item2,
      item3,
      children: ($$payload2) => {
        $$payload2.out += `<p class="mb-2 font-light text-gray-500 dark:text-gray-400">The flat was spotless, very comfortable, and the host was amazing. I highly recommend this accommodation for anyone visiting Brasov city centre. It's quite a while since we are no longer using hotel facilities but self contained places. And the main reason is poor cleanliness and staff not being trained properly. This place exceeded our expectation and will return for sure.</p> <p class="mb-5 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>  <aside class="mt-3 flex items-center space-x-5 rtl:space-x-reverse"><a href="/" class="inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">`;
        ThumbsUpSolid($$payload2, {
          class: "me-2.5 h-3.5 w-3.5 text-primary-600 dark:text-primary-500"
        });
        $$payload2.out += `<!----> Helpful</a> <a href="/" class="group inline-flex items-center text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">`;
        ThumbsDownSolid($$payload2, {
          class: "me-2.5 h-3.5 w-3.5 text-primary-600 dark:text-primary-500"
        });
        $$payload2.out += `<!----> Not helpful</a></aside>`;
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
function ScoreRating_1($$payload) {
  const headerLabel = {
    desc1: "8.7",
    desc2: "Excellent",
    desc3: "376 reviews",
    link: { label: "Read all reviews", url: "/" }
  };
  ScoreRating($$payload, {
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
function Star_1($$payload) {
  $$payload.out += `<div class="flex gap-2">`;
  Star($$payload, { size: 30, id: "0", fillPercent: 0 });
  $$payload.out += `<!----> `;
  Star($$payload, { size: 30, id: "10", fillPercent: 10 });
  $$payload.out += `<!----> `;
  Star($$payload, { size: 30, id: "20", fillPercent: 20 });
  $$payload.out += `<!----> `;
  Star($$payload, { size: 30, id: "30", fillPercent: 30 });
  $$payload.out += `<!----> `;
  Star($$payload, { size: 30, id: "40", fillPercent: 40 });
  $$payload.out += `<!----> `;
  Star($$payload, { size: 30, id: "50", fillPercent: 50 });
  $$payload.out += `<!----> `;
  Star($$payload, { size: 30, id: "60", fillPercent: 60 });
  $$payload.out += `<!----> `;
  Star($$payload, { size: 30, id: "70", fillPercent: 70 });
  $$payload.out += `<!----> `;
  Star($$payload, { size: 30, id: "80", fillPercent: 80 });
  $$payload.out += `<!----> `;
  Star($$payload, { size: 30, id: "90", fillPercent: 90 });
  $$payload.out += `<!----> `;
  Star($$payload, { size: 30, id: "100", fillPercent: 100 });
  $$payload.out += `<!----></div>`;
}
function Text($$payload) {
  {
    let text = function($$payload2) {
      $$payload2.out += `<p class="ms-2 pt-1 text-sm font-medium text-gray-500 dark:text-gray-400">3.4 out of 5</p>`;
    };
    Rating($$payload, {
      total: 5,
      rating: 3.4,
      text,
      $$slots: { text: true }
    });
  }
}
function _page($$payload, $$props) {
  push();
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
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  let exampleExpand = false;
  let showExpandButton = isSvelteOverflow(svelteCode, exampleModules);
  const handleExpandClick = () => {
    exampleExpand = !exampleExpand;
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    H1($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Rating`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        DynamicCodeBlockHighlight($$payload3, {
          replaceLib: true,
          handleExpandClick,
          expand: exampleExpand,
          showExpandButton,
          code: exampleModules[`./examples/${svelteCode}`]
        });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-12 flex flex-wrap">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let style = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-40 my-1",
              onclick: () => exampleExpand = false,
              name: "block_style",
              get group() {
                return selectedExample;
              },
              set group($$value) {
                selectedExample = $$value;
                $$settled = false;
              },
              value: style.name,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(style.name)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <!---->`;
          SelectedComponent($$payload3, {});
          $$payload3.out += `<!---->`;
        },
        $$slots: { codeblock: true, default: true }
      });
    }
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Component data`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    CompoAttributesViewer($$payload2, { dirName });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
