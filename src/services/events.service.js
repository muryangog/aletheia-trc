import { EVENTS_DATA, EVENT_CATEGORIES, MONTHS } from "@/data/events.data";

export const eventsService = {
  getAll: () => EVENTS_DATA,
  getCategories: () => EVENT_CATEGORIES,
  getMonths: () => MONTHS,
  getByMonthAndCategory: (monthIdx, category = "Tous") => {
    return EVENTS_DATA.filter((event) => {
      const matchesMonth = event.month === monthIdx;
      const matchesCategory =
        category === "Tous" || event.category === category;
      return matchesMonth && matchesCategory;
    });
  },
};
