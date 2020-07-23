export const getDefaultMerchant = (fieldsSettings) => {
  const defaultValues = {};

  Object.values(fieldsSettings)
    .forEach((field) => (
      defaultValues[field.name] = field.defaultValue
    ));

  return defaultValues;
};
