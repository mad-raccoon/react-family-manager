import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

const defaultValues = {
  id: null,
  email: null,
  name: null,
  gender: null,
  role: null,
};

const resolver = yupResolver(
  yup.object().shape({
    id: yup.number().nullable(),
    email: yup.string().email('Invalid format !').required('Required !'),
    name: yup.string().required('Required !'),
    gender: yup.string().required('Required !'),
    role: yup.string(),
  })
);

const TeamMemberForm = ({ teamMember, roles, genders, onSuccess, onCancel }) => {
  const { handleSubmit, register, errors } = useForm({
    defaultValues: teamMember || defaultValues,
    resolver,
  });

  const handleUpdate = (values) => {
    onSuccess(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <input type='hidden' name='id' ref={register} />
        <label>Email</label>
        <br />
        <input type='text' name='email' ref={register} />
        <div className='error'>{errors.email && errors.email.message}</div>

        <label>Name</label>
        <br />
        <input type='text' name='name' ref={register} />
        <div className='error'>{errors.name && errors.name.message}</div>

        <label>Gender</label>
        <br />

        {genders.map((gen) => (
          <div key={gen.value}>
            <input type='radio' name='gender' value={gen.value} ref={register} />
            <label for={gen.value}>{gen.name}</label>
          </div>
        ))}

        <div className='error'>{errors.gender && errors.gender.message}</div>

        <label>Role</label>
        <br />
        <select ref={register}>
          <option value=''></option>
          {roles.map((role) => (
            <option key={role.value} value={role.value}>
              {role.name}
            </option>
          ))}
        </select>
        <div className='error'>{errors.birthDate && errors.birthDate.message}</div>
        <input type='submit' value={teamMember ? 'Update' : 'Add'} />
        <input type='button' value='Cancel' onClick={onCancel} />
      </form>
    </div>
  );
};

export default TeamMemberForm;
