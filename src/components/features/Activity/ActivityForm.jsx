import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

const defaultValues = {
  id: null,
  what: null,
  who: null,
  when: null,
  info: null,
};

const resolver = yupResolver(
  yup.object().shape({
    id: yup.number().nullable(true),
    what: yup.string().required('Required !'),
    who: yup.string().required('Required !'),
    when: yup.date().required('Required !'),
    info: yup.string(),
  })
);

const ActivityForm = ({ activity, onSuccess, onCancel }) => {
  const { handleSubmit, errors, register } = useForm({
    defaultValues: activity || defaultValues,
    resolver,
  });

  const onSubmit = (formValues) => {
    onSuccess(formValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='hidden' name='id' ref={register} />
      <label>What?</label>
      <br />
      <input type='text' name='what' ref={register} />
      <div className='error'>{errors.what && errors.what.message}</div>

      <label>Who?</label>
      <br />
      <input type='text' name='who' ref={register} />
      <div className='error'>{errors.who && errors.who.message}</div>

      <label>When?</label>
      <br />
      <input type='date' name='when' ref={register} />
      <div className='error'>{errors.when && errors.when.message}</div>

      <label>Info</label>
      <br />
      <input type='text' name='info' ref={register} />
      <div className='error'>{errors.info && errors.info.message}</div>
      <input type='submit' value={(activity ? 'Update' : 'Add') + ' activity'} />
      <input type='button' value='Cancel' onClick={onCancel} />
    </form>
  );
};

export default ActivityForm;
