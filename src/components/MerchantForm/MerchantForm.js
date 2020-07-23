import React from 'react';
import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import Input from '../Form/Input/Input';
import FileInput from '../Form/FileInput/FileInput';
import Checkbox from '../Form/Checkbox/Checkbox';
import Button from '../Form/Button/Button';
import AvatarPreview from './AvatarPreview/AvatarPreview';
import {FIELDS} from './MerchantForm.constants';
import {getDefaultMerchant} from './MerchantForm.utils';

const MerchantForm = ({merchant, submit, submitTitle}) => {
  const {register, handleSubmit, errors, watch} = useForm({defaultValues: merchant});
  const watchFields = watch([FIELDS.HAS_PREMIUM.name, FIELDS.AVATAR.name]);

  const onSubmit = (data) => {
    submit(data);
  };

  return (
    <div>
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
                  checked={watchFields[FIELDS.HAS_PREMIUM.name]}
                  refFunc={register}/>
        <FileInput name={FIELDS.AVATAR.name}
                   title={FIELDS.AVATAR.label}
                   refFunc={register}
                   accept="image/*"/>
        <AvatarPreview files={watchFields[FIELDS.AVATAR.name]} defaultImageUrl={merchant.avatarUrl} alt="Avatar preview"/>
        <Button title={submitTitle} type="submit"/>
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
  submitTitle: PropTypes.string.isRequired
};

MerchantForm.defaultProps = {
  merchant: getDefaultMerchant(FIELDS)
};

export default MerchantForm;
