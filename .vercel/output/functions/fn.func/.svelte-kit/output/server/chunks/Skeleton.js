import { Q as push, a0 as spread_attributes, W as attr, S as pop } from "./index.js";
import { a6 as imagePlaceholder, a7 as skeleton } from "./theme.js";
function ImagePlaceholder($$payload, $$props) {
  push();
  let {
    size = "md",
    rounded,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, image, svg, content, line } = imagePlaceholder({ size, rounded });
  $$payload.out += `<div${spread_attributes({
    role: "status",
    ...restProps,
    class: base({ className })
  })}><div${attr("class", image())}><svg width="48" height="48"${attr("class", svg())} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path></svg></div> <div${attr("class", content())}><div${attr("class", line({ class: "mb-4 h-2.5 w-1/2" }))}></div> <div${attr("class", line({ class: "mb-2.5 h-2 w-9/12" }))}></div> <div${attr("class", line({ class: "mb-2.5 h-2" }))}></div> <div${attr("class", line({ class: "mb-2.5 h-2" }))}></div> <div${attr("class", line({ class: "mb-2.5 h-2 w-10/12" }))}></div> <div${attr("class", line({ class: "mb-2.5 h-2 w-11/12" }))}></div> <div${attr("class", line({ class: "h-2 w-9/12" }))}></div></div> <span class="sr-only">Loading...</span></div>`;
  pop();
}
function Skeleton($$payload, $$props) {
  push();
  let {
    size = "sm",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { wrapper, line } = skeleton({ size });
  $$payload.out += `<div${spread_attributes({
    role: "status",
    ...restProps,
    class: wrapper({ className })
  })}><div${attr("class", line({ class: "mb-4 h-2.5 w-1/2" }))}></div> <div${attr("class", line({ class: "mb-2.5 h-2 w-9/12" }))}></div> <div${attr("class", line({ class: "mb-2.5 h-2" }))}></div> <div${attr("class", line({ class: "mb-2.5 h-2" }))}></div> <div${attr("class", line({ class: "mb-2.5 h-2 w-10/12" }))}></div> <div${attr("class", line({ class: "mb-2.5 h-2 w-11/12" }))}></div> <div${attr("class", line({ class: "h-2 w-9/12" }))}></div> <span class="sr-only">Loading...</span></div>`;
  pop();
}
export {
  ImagePlaceholder as I,
  Skeleton as S
};
