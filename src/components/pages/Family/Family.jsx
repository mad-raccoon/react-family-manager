import React from "react";
import { Table } from "../../shared";
import { familyApi } from "../../../shared/apis";

const Family = () => {
  const familyMembers = familyApi.getFamilyMembers("0");

  return <div>family member page</div>;
};

export default Family;
