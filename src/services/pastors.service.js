import { PASTORS_DATA, PASTORS_LIST } from "@/data/pastors.data";

export const pastorsService = {
  getAll: () => {
    return PASTORS_LIST;
  },

  getById: (id) => {
    return PASTORS_DATA[id] || null;
  },

  getSlugs: () => {
    return PASTORS_LIST.map((member) => member.id);
  },
};
