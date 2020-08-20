import React, { useState } from "react";
import { Table } from "../../shared";
import { ActivityForm } from "../../features";
import { planApi } from "../../../shared/apis";
import { useAuth } from "../../../shared/hooks";

const headers = ["Area", "Description", "Limit date", "Status"];

const statusLabels = {
  0: "To do",
  1: "In progress",
  2: "Done",
};

const areaLabels = {
  tl: "Team leader",
  db: "Database",
  be: "Backend",
  fe: "Frontend",
};

const planTableMapper = (plan) => {
  return [
    plan.id,
    areaLabels[plan.area],
    plan.description,
    plan.limitDate.toDateString(),
    statusLabels[plan.status],
  ];
};

const Plan = () => {
  const { user } = useAuth();

  const plans = planApi
    .getTeamPlans(user.teamId)
    .sort((a, b) => a.when > b.when)
    .map((activity) => planTableMapper(activity));

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
      <Table headers={headers} body={plans} onRowClick={handleActivityOpen} />
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
