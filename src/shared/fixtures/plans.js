let plans = [
  {
    teamId: 0,
    plans: [
      {
        id: 0,
        area: "tl",
        limitDate: new Date("09/09/2021"),
        name: "Contract a new database developer",
        info: "Previous experience + Curriculum vitae",
        status: 0,
      },
      {
        id: 1,
        area: "db",
        limitDate: new Date("09/09/2021"),
        name: "Re-structure user table",
        info: "Remove field age and ad field date of birth",
        status: 0,
      },
      {
        id: 2,
        area: "fe",
        limitDate: new Date("09/09/2021"),
        name: "Design new layout for the login page",
        info: "",
        status: 0,
      },
      {
        id: 3,
        area: "fe",
        limitDate: new Date("09/09/2021"),
        name: "Add validation to the login form",
        info: "Username is not being validated",
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

  plans.find((act) => act.teamId === teamId).plans.push(activity);
};
