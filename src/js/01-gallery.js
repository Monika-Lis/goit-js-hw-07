import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

galleryItems.forEach(function (galleryItem) {
  const codeHTML = `
    <div class="gallery__item">
      <a class="gallery__link" href="${galleryItem.original}">
        <img
          class="gallery__image"
          src="${galleryItem.preview}"
          data-source="${galleryItem.original}"
          alt="${galleryItem.description}"
        />
      </a>
    </div>
  `;

  gallery.insertAdjacentHTML("beforeend", codeHTML);
});

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  const target = event.target;
  const isImage = target.classList.contains("gallery__image");

  if (isImage) {
    const imageSrc = target.getAttribute("data-source");

    const instance = basicLightbox.create(
      `
      <img src="${imageSrc}" width="800" height="600">
    `,
      {
        onShow: (instance) => {
          window.addEventListener("keydown", onEscPress);
        },
        onClose: (instance) => {
          window.removeEventListener("keydown", onEscPress);
        },
      }
    );

    function onEscPress(event) {
      if (event.key === "Escape") {
        instance.close();
      }
    }

    instance.show();
  }
});
