const createActionTypes = (base, types) => {
  const res = {};
  types.forEach(type => (res[type] = `${base}/${type}`));
  return res;
};

export const APP = createActionTypes('APP', [
  'UPDATE_STORE_STATE',
  'UPDATE_SHOW_INTRO',
]);

export const AUTH = createActionTypes('AUTH', [
  'POST_LOGIN'
]);