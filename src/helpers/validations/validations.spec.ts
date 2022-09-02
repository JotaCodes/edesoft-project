import { validateEmail } from '.';

describe('Validations test', () => {
  it('should return a valid e-mail:', () => {
    const email = 'jota@validator.com';
    const notEmail = 'user123';
    expect(validateEmail(email)).toBeTruthy();
    expect(validateEmail(notEmail)).toBeFalsy();
  });
});
