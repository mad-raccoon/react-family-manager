import { plansBE } from "../fixtures";

export const getTeamPlans = (teamId) => {
  debugger;
  return plansBE.getPlansByTeamId(teamId);
};

export const getTeamPlan = (teamId, planId) => {
  debugger;
  return plansBE.getPlanByTeamIdAndPlanId(teamId, planId);
};

export const addUpdateTeamPlan = (teamId, plan) => {
  return plansBE.addUpdatePlanToTeamId(teamId, plan);
};
