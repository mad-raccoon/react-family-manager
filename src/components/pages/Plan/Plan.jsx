import React, { useState } from "react";
import { Table } from "../../shared";
import { ActivityForm } from "../../features";
import { planApi } from "../../../shared/apis";
import { useAuth } from "../../../shared/hooks";

const headers = ["What?", "When?", "Who?", "Info"];

const activityTableMapper = (activity) => {
  return {
    id: activity.id,
    data: [
      activity.what,
      activity.when.toDateString(),
      activity.who,
      activity.info,
    ],
  };
};

const getBody = (activities) => {
  debugger;
  return activities.map((activity) => [
    activity.what,
    activity.when,
    activity.who,
    activity.info,
  ]);
};

const Plan = () => {
  const { user } = useAuth();
  debugger;
  const activities = planApi
    .getTeamPlans(user.teamId)
    .sort((a, b) => a.when > b.when)
    .map((activity) => activityTableMapper(activity));

  const [selectedActivity, setSelectedActivity] = useState(null);
  const [showActivityForm, setShowActivityForm] = useState(false);

  const handleActivityOpen = (id) => {
    if (!selectedActivity) {
      const activity = planApi.getTeamPlan(user.teamId, id);
      setSelectedActivity(activity);
      setShowActivityForm(true);
    }
  };

  const handleAddActivity = () => {
    setShowActivityForm(true);
  };

  const handleAddUpdateActivity = (activity) => {
    planApi.addUpdateTeamPlan(user.id, activity);
    setSelectedActivity(null);
    setShowActivityForm(false);
  };

  const handleCancelAddUpdateActivity = () => {
    setSelectedActivity(null);
    setShowActivityForm(false);
  };
  return (
    <div>
      <Table
        headers={headers}
        body={activities}
        onRowClick={handleActivityOpen}
      />
      {showActivityForm && (
        <ActivityForm
          activity={selectedActivity}
          onSuccess={handleAddUpdateActivity}
          onCancel={handleCancelAddUpdateActivity}
        />
      )}
      {!showActivityForm && (
        <input
          type="button"
          value={"Add activity"}
          onClick={handleAddActivity}
        />
      )}
    </div>
  );
};

export default Plan;
