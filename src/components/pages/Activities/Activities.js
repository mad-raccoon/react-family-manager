import React, { useState } from "react";
import { Table } from "../../shared";
import { ActivityForm } from "../../features";

const headers = ["What?", "When?", "Who?", "Info"];
const body = [
  { id: 0, data: ["aaa", "aaa", "aaa", "aaa"] },
  { id: 1, data: ["aaa", "aaa", "aaa", "aaa"] },
  { id: 2, data: ["aaa", "aaa", "aaa", "aaa"] },
];

const Activities = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [showActivityForm, setShowActivityForm] = useState(false);

  const handleActivityOpen = (id) => {
    alert(id);
  };

  const handleAddActivity = () => {
    setShowActivityForm(true);
  };

  const handleAddUpdateActivity = (activity) => {
    //api call add activity
    setSelectedActivity(null);
    setShowActivityForm(false);
  };
  return (
    <div>
      <Table headers={headers} body={body} onRowClick={handleActivityOpen} />
      {showActivityForm && (
        <ActivityForm
          activity={selectedActivity}
          onSuccess={handleAddUpdateActivity}
          onCancel={() => setShowActivityForm(false)}
        />
      )}
      <input type="button" value="Add activity" onClick={handleAddActivity} />
    </div>
  );
};

export default Activities;
