import {
  getActivitiesByUserId,
  getActivityByUserIdAndActivityId,
  addUpdateActivityToUserId,
} from '../fixtures';

export const getUserActivities = (userId) => {
  return getActivitiesByUserId(userId);
};

export const getUserActivity = (userId, activityId) => {
  return getActivityByUserIdAndActivityId(userId, activityId);
};

export const addUpdateActivity = (userId, activity) => {
  return addUpdateActivityToUserId(userId, activity);
};
