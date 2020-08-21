import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const defaultValues = {
  id: null,
  area: null,
  description: null,
  limitDate: null,
  status: null,
};

const resolver = yupResolver(
  yup.object().shape({
    id: yup
      .number()
      .transform((value) => (isNaN(value) ? null : value))
      .nullable(),
    area: yup.string().required("Required !"),
    description: yup.string().required("Required !"),
    limitDate: yup.date().required("Required !"),
    status: yup.number().required("Required !"),
  })
);

const PlanForm = ({ plan, areas, statuses, onSuccess, onCancel }) => {
  const { handleSubmit, errors, register } = useForm({
    defaultValues: plan || defaultValues,
    resolver,
  });

  const onSubmit = (formValues) => {
    onSuccess(formValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="id" ref={register} />
      <label>Area</label>
      <br />
      <select ref={register} name="area">
        <option value=""></option>
        {areas.map((area) => (
          <option key={area.value} value={area.value}>
            {area.name}
          </option>
        ))}
      </select>{" "}
      <div className="error">{errors.area && errors.area.message}</div>
      <label>Description</label>
      <br />
      <input type="text" name="description" ref={register} />
      <div className="error">
        {errors.description && errors.description.message}
      </div>
      <label>Limit date</label>
      <br />
      <input type="date" name="limitDate" ref={register} />
      <div className="error">
        {errors.limitDate && errors.limitDate.message}
      </div>
      <label>Status</label>
      <br />
      <select ref={register} name={"status"}>
        <option value=""></option>
        {statuses.map((status) => (
          <option key={status.value} value={status.value}>
            {status.name}
          </option>
        ))}
      </select>
      <div className="error">{errors.status && errors.status.message}</div>
      <input type="submit" value={(plan ? "Update" : "Add") + " plan"} />
      <input type="button" value="Cancel" onClick={onCancel} />
    </form>
  );
};

export default PlanForm;
