let plans = [
  {
    teamId: 0,
    plans: [
      {
        id: 0,
        area: "tl",
        limitDate: new Date("09/09/2021"),
        description: "Contract a new database developer",
        status: 1,
      },
      {
        id: 1,
        area: "dbd",
        limitDate: new Date("09/09/2021"),
        description: "Re-structure user table",
        status: 1,
      },
      {
        id: 2,
        area: "fed",
        limitDate: new Date("09/09/2021"),
        description: "Design new layout for the login page",
        status: 0,
      },
      {
        id: 3,
        area: "fed",
        limitDate: new Date("09/09/2021"),
        description: "Add validation to the login form",
        status: 0,
      },
    ],
  },
];

export const getPlansByTeamId = (teamId) => {
  return plans.find((activity) => activity.teamId === teamId).plans || null;
};

export const getPlanByTeamIdAndPlanId = (teamId, activityId) => {
  return plans
    .find((act) => act.teamId === teamId)
    .plans.find((act) => act.id === activityId);
};

export const addUpdatePlanToTeamId = (teamId, activity) => {
  if (activity.id) {
    const index = plans
      .find((act) => act.teamId === teamId)
      .plans.findIndex(function (o) {
        return o.id === activity.id;
      });

    plans.find((act) => act.teamId === teamId).plans.splice(index, 1);
  }

  plans
    .find((act) => act.teamId === teamId)
    .plans.push({
      ...activity,
      id:
        activity.id || plans.find((act) => act.teamId === teamId).plans.length,
    });
};
