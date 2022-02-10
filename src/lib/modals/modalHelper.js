//data shared accross each instance of this componenet
export const toggleModal = (modalId, show = true) => {
  const modalEl = window.document.getElementById(modalId);

  if (show) {
    modalEl.classList.add("flex");
    modalEl.classList.remove("hidden");
    modalEl.setAttribute("aria-modal", "true");
    modalEl.setAttribute("role", "dialog");
    modalEl.removeAttribute("aria-hidden"); // create backdrop element

    var backdropEl = window.document.createElement("div");
    backdropEl.setAttribute("modal-backdrop", "");
    backdropEl.classList.add(
      "bg-gray-900",
      "bg-opacity-50",
      "dark:bg-opacity-80",
      "fixed",
      "inset-0",
      "z-40"
    );
    window.document.querySelector("body").append(backdropEl);
  } else {
    modalEl.classList.add("hidden");
    modalEl.classList.remove("flex");
    modalEl.setAttribute("aria-hidden", "true");
    modalEl.removeAttribute("aria-modal");
    modalEl.removeAttribute("role");
    window.document.querySelector("[modal-backdrop]").remove();
  }
};