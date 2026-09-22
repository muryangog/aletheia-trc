import {
  DEPARTMENTS_DATA,
  MINISTRY_CATEGORIES,
} from "@/data/departments.data";

export const ministriesService = {
  getAll: () => DEPARTMENTS_DATA,
  getCategories: () => MINISTRY_CATEGORIES,
  getById: (id) => DEPARTMENTS_DATA.find((dept) => dept.id === id) || null,
  search: (query = "", category = "Tous") => {
    return DEPARTMENTS_DATA.filter((dept) => {
      const matchCat = category === "Tous" || dept.category === category;
      const matchSearch =
        !query ||
        dept.name.toLowerCase().includes(query.toLowerCase()) ||
        dept.description.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchSearch;
    });
  },
};
