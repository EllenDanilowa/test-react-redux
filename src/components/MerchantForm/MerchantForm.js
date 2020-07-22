import React from 'react';
import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import Input from '../Form/Input/Input';
import Checkbox from '../Form/Checkbox/Checkbox';
import Button from '../Form/Button/Button';
import {Title} from './MerchantForm.styled';
import {FIELDS} from './MerchantForm.constants';

const MerchantForm = ({merchant = {}, title, submit, submitTitle}) => {
  const defaultValues = {};
  Object.values(FIELDS)
    .forEach((field) => (
      defaultValues[field.name] = merchant[field.name] || field.defaultValue
    ));
  const {register, handleSubmit, errors, watch} = useForm({defaultValues});
  const watchHasPremium = watch(FIELDS.HAS_PREMIUM.name);
  const onSubmit = (data) => {
    submit(data);
  };

  return (
    <div>
      {title && (
        <Title>{title}</Title>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name={FIELDS.FIRST_NAME.name}
               title={FIELDS.FIRST_NAME.label}
               refFunc={register(FIELDS.FIRST_NAME.rules)}
               error={errors[FIELDS.FIRST_NAME.name]}
               errorMessage={FIELDS.FIRST_NAME.errorMessage}/>
        <Input name={FIELDS.LAST_NAME.name}
               title={FIELDS.LAST_NAME.label}
               refFunc={register(FIELDS.LAST_NAME.rules)}
               error={errors[FIELDS.LAST_NAME.name]}
               errorMessage={FIELDS.LAST_NAME.errorMessage}/>
        <Input name={FIELDS.EMAIL.name}
               title={FIELDS.EMAIL.label}
               refFunc={register(FIELDS.EMAIL.rules)}
               error={errors[FIELDS.EMAIL.name]}
               errorMessage={FIELDS.EMAIL.errorMessage}/>
        <Input name={FIELDS.PHONE.name}
               title={FIELDS.PHONE.label}
               type="tel"
               refFunc={register(FIELDS.PHONE.rules)}
               error={errors[FIELDS.PHONE.name]}
               errorMessage={FIELDS.PHONE.errorMessage}/>
        <Checkbox name={FIELDS.HAS_PREMIUM.name}
                  title={FIELDS.HAS_PREMIUM.label}
                  checked={watchHasPremium}
                  refFunc={register}/>

        {/*<div>*/}
        {/*  <label htmlFor="avatar">Avatar</label>*/}
        {/*  <input type="file" name="avatar" id="avatar" accept="image/*" ref={this.avatarRef}*/}
        {/*         onChange={this.onAvatarChange}/>*/}
        {/*</div>*/}

        <Button title={submitTitle}/>
      </form>
      <Link to="/">Cancel</Link>
    </div>
  );
};

MerchantForm.propTypes = {
  merchant: PropTypes.shape({
    id: PropTypes.string,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    hasPremium: PropTypes.bool.isRequired,
    bids: PropTypes.array
  }),
  submit: PropTypes.func.isRequired,
  submitTitle: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default MerchantForm;
