const itemss = document.querySelectorAll("span");
const products = document.querySelectorAll(".products .productf");

itemss.forEach((item) => {
  // Active
  item.addEventListener("click", () => {
    itemss.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");

    // Filter
    const valueAttr = item.getAttribute("data-filter");
    products.forEach((item) => {
      item.style.display = "none";
      if (
        item.getAttribute("data-filter").toLowerCase() ==
          valueAttr.toLowerCase() ||
        valueAttr == "all"
      ) {
        item.style.display = "flex";
      }
    });
  });
});
