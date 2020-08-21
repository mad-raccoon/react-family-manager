import { plansBE } from "../fixtures";

export const getTeamPlans = (teamId) => {
  return plansBE.getPlansByTeamId(teamId);
};

export const getTeamPlan = (teamId, planId) => {
  return plansBE.getPlanByTeamIdAndPlanId(teamId, planId);
};

export const addUpdateTeamPlan = (teamId, plan) => {
  return plansBE.addUpdatePlanToTeamId(teamId, plan);
};

export const removeTeamPlan = (teamId, planId) => {
  return plansBE.deletePlanByTeamId(teamId, planId);
};
