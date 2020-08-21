import React, { useState } from "react";
import { Table } from "../../shared";
import { PlanForm } from "../../features";
import { planApi, commonApi } from "../../../shared/apis";
import { useAuth } from "../../../shared/hooks";

const headers = ["Area", "Description", "Limit date", "Status"];

const planTableMapper = (plan, areas, statuses) => {
  debugger;
  return [
    plan.id,
    areas.find((a) => a.value === plan.area).name,
    plan.description,
    plan.limitDate.toDateString(),
    statuses.find((s) => s.value === plan.status).name,
  ];
};

const Plan = () => {
  const { user } = useAuth();

  const statuses = commonApi.getStatuses();
  const areas = commonApi.getRoles();

  const plans = planApi
    .getTeamPlans(user.teamId)
    .sort((a, b) => a.when > b.when)
    .map((plan) => planTableMapper(plan, areas, statuses));

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPlanForm, setShowPlanForm] = useState(false);

  const handlePlanOpen = (id) => {
    if (!selectedPlan) {
      const plan = planApi.getTeamPlan(user.teamId, id);
      setSelectedPlan(plan);
      setShowPlanForm(true);
    }
  };

  const handleAddPlan = () => {
    setShowPlanForm(true);
  };

  const handleAddUpdatePlan = (plan) => {
    planApi.addUpdateTeamPlan(user.id, plan);
    setSelectedPlan(null);
    setShowPlanForm(false);
  };

  const handleCancelAddUpdatePlan = () => {
    setSelectedPlan(null);
    setShowPlanForm(false);
  };
  return (
    <div>
      <Table headers={headers} body={plans} onRowClick={handlePlanOpen} />
      {showPlanForm && (
        <PlanForm
          plan={selectedPlan}
          areas={areas}
          statuses={statuses}
          onSuccess={handleAddUpdatePlan}
          onCancel={handleCancelAddUpdatePlan}
        />
      )}
      {!showPlanForm && (
        <input type="button" value={"Add plan"} onClick={handleAddPlan} />
      )}
    </div>
  );
};

export default Plan;
