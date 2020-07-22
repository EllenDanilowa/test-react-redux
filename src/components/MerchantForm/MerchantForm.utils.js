export const createFormInitialState = (fields, initObj = {}) => {
  const state = {
    ...initObj,
    errors: {}
  };
  Object.values(fields).forEach((field) => {
    const {name, defaultValue} = field;

    state[name] = state[name] || defaultValue;
    state.errors[name] = '';
  });

  return state;
};

export const checkFormValidation = (errors) => {
  let valid = true;

  Object.values(errors).forEach((val) => val.length && (valid = false));

  return valid;
};
