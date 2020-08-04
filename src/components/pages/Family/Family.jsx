import React from "react";
import { familyApi } from "../../../shared/apis";
import { useAuth } from "../../../shared/hooks";
import "./Family.css";

const Family = () => {
  const { user } = useAuth();
  const familyMembers = familyApi.getFamilyMembers("0");

  return (
    <div className="family-container">
      {familyMembers.map((mem) => (
        <div className={"family-member " + (mem.id === user.id && " me")}>
          {mem.name}
        </div>
      ))}
    </div>
  );
};

export default Family;
