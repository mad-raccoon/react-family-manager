let activities = [
  {
    userId: "0",
    activities: [
      {
        id: "0",
        what: "go to the beach",
        who: "mon and dad",
        when: new Date("10/10/2020"),
        info: "sun cream protector",
      },
      {
        id: "1",
        what: "go to the supermarket",
        who: "only me",
        when: new Date("11/10/2002"),
        info: "shopping bag",
      },
    ],
  },
];

export const getActivitiesByUserId = (userId) => {
  return (
    activities.find((activity) => activity.userId === userId).activities || null
  );
};

export const getActivityByUserIdAndActivityId = (userId, activityId) => {
  return activities
    .find((act) => act.userId === userId)
    .activities.find((act) => act.id === activityId);
};

export const addUpdateActivityToUserId = (userId, activity) => {
  if (activity.id) {
    const index = activities
      .find((act) => act.userId === userId)
      .activities.findIndex(function (o) {
        return o.id === activity.id;
      });

    activities.find((act) => act.userId === userId).activities.splice(index, 1);
  }

  activities.find((act) => act.userId === userId).activities.push(activity);
};
