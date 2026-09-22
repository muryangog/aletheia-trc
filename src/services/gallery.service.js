import { GALLERY_PHOTOS, GALLERY_CATEGORIES } from "@/data/gallery.data";

export const galleryService = {
  getAll: () => GALLERY_PHOTOS,
  getCategories: () => GALLERY_CATEGORIES,
  getByCategory: (category = "Tous") => {
    if (category === "Tous") return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((photo) => photo.category === category);
  },
};
