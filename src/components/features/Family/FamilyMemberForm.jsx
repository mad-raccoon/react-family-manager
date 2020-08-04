import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";

const defaultValues = {
  email: null,
  name: null,
  gender: null,
  birthDate: null,
};

const resolver = yupResolver(
  yup.object().shape({
    email: yup.string().email("Invalid format !").required("Required !"),
    name: yup.string().required("Required !"),
    gender: yup.string().required("Required !"),
    birthDate: yup.date().required("Required !"),
  })
);

const FamilyMemberForm = ({
  memberInfo = defaultValues,
  isEditable = false,
  onSuccess,
  onCancel,
}) => {
  const { handleSubmit, register, errors } = useForm({
    defaultValues: memberInfo,
    resolver,
  });

  const handleUpdate = (values) => {
    onSuccess(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <label>Email</label>
        <br />
        <input type="text" name="email" ref={register} />
        <div className="error">{errors.email && errors.email.message}</div>

        <label>Name</label>
        <br />
        <input type="text" name="name" ref={register} />
        <div className="error">{errors.name && errors.name.message}</div>

        <label>Gender</label>
        <br />
        <input type="text" name="gender" ref={register} />
        <div className="error">{errors.gender && errors.gender.message}</div>

        <label>Birth date</label>
        <br />
        <input type="date" name="birthDate" ref={register} />
        <div className="error">
          {errors.birthDate && errors.birthDate.message}
        </div>
        {isEditable && <input type="submit" value={"Update info"} />}
        <input type="button" value="Cancel" onClick={onCancel} />
      </form>
    </div>
  );
};

export default FamilyMemberForm;
