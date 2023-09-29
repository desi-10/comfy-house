export const getDOMImageElements = () => {
  const imagesEl = document.querySelectorAll(
    ".image-container"
  ) as HTMLCollectionBase;
  const images = Array.from(imagesEl);

  images.forEach((image) => {
    image.addEventListener("mouseenter", (e) => {
      const target = e.target as HTMLDivElement;
      if (target && target.children[1]) {
        target.children[1].classList.add("show");
      }
    });

    image.addEventListener("mouseleave", (e) => {
      const target = e.target as HTMLDivElement;
      if (target && target.children[1]) {
        target.children[1].classList.remove("show");
      }
    });
  });
};

export default getDOMImageElements;
