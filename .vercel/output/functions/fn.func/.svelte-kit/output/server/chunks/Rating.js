import { Q as push, a0 as spread_attributes, W as attr, X as stringify, S as pop, V as escape_html, Y as ensure_array_like } from "./index.js";
import { i as idGenerator } from "./uiHelpers.svelte.js";
import { as as rating } from "./theme.js";
function Star($$payload, $$props) {
  push();
  let {
    fillPercent = 100,
    fillColor = "#F5CA14",
    strokeColor = "#F5CA14",
    size = 24,
    ariaLabel = "star",
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
      viewBox: "100 100 120 120",
      role
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
  $$payload.out += `<!--]--></linearGradient></defs><g${attr("fill", `url(#${stringify(id)})`)}${attr("stroke", strokeColor)} stroke-width="2"><polygon points="165.000, 185.000, 188.511, 197.361, 184.021, 171.180, 
      203.042, 152.639, 176.756, 148.820, 165.000, 125.000, 
      153.244, 148.820, 126.958, 152.639, 145.979, 171.180,
      141.489, 197.361, 165.000, 185.000"></polygon></g></svg>`;
  pop();
}
function Rating($$payload, $$props) {
  push();
  let {
    children,
    text,
    divClass,
    size = 24,
    total = 5,
    rating: rating$1 = 4,
    partialId = "partialStar" + idGenerator(),
    Icon = Star,
    count = false,
    pClass
  } = $$props;
  const { base, p } = rating();
  const fullStarId = idGenerator();
  const grayStarId = idGenerator();
  let fullStars = Math.floor(rating$1);
  let rateDiffence = rating$1 - fullStars;
  let percentRating = Math.round(rateDiffence * 100);
  let grayStars = total - (fullStars + Math.ceil(rateDiffence));
  $$payload.out += `<div${attr("class", base({ class: divClass }))}>`;
  if (count && children) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    Icon($$payload, { fillPercent: 100, size });
    $$payload.out += `<!----> <p${attr("class", p({ class: pClass }))}>${escape_html(rating$1)}</p> `;
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    const each_array = ensure_array_like(Array(fullStars));
    const each_array_1 = ensure_array_like(Array(grayStars));
    $$payload.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      each_array[$$index];
      $$payload.out += `<!---->`;
      Icon($$payload, { size, fillPercent: 100, id: fullStarId });
      $$payload.out += `<!---->`;
    }
    $$payload.out += `<!--]--> `;
    if (percentRating) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<!---->`;
      Icon($$payload, {
        size,
        fillPercent: percentRating,
        id: partialId
      });
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      each_array_1[$$index_1];
      $$payload.out += `<!---->`;
      Icon($$payload, { size, fillPercent: 0, id: grayStarId });
      $$payload.out += `<!---->`;
    }
    $$payload.out += `<!--]--> `;
    if (text) {
      $$payload.out += "<!--[-->";
      text($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  Rating as R,
  Star as S
};
