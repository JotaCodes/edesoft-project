const validateEmail = (email: string): boolean => {
  if (
    email &&
    email.indexOf('@') !== -1 &&
    email.substr(0, email.indexOf('@')).match(/[A-Za-z]+/)
  ) {
    return true;
  }
  return false;
};

export { validateEmail };
