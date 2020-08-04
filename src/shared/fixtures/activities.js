const activities = [
  { what: "shopping", who: "me", when: new Date(), info: "buy carrots" },
  { what: "lunch", who: "me and marcy", when: new Date(), info: "suchi" },
  { what: "beach", who: "all family", when: new Date(), info: "" },
];

export const getActivitiesByUser = () => {
  return activities;
};
