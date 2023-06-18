import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryList = document.querySelector(".gallery");

const onClick = (event) => {
  event.preventDefault();

  const handler = (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  };

  document.addEventListener("keydown", handler);

  const instance = basicLightbox.create(
    `<img
      class=""
      src="${event.target.dataset.source}"
      alt="${event.target.alt}"
      />`,
    {
      onClose: () => document.removeEventListener("keydown", handler),
    }
  );

  instance.show();
};

galleryList.addEventListener("click", onClick);

const items = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="large-image.jpg" target="_blank">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
      </a>
      </li>`
  )
  .join("");

galleryList.insertAdjacentHTML("afterbegin", items);
