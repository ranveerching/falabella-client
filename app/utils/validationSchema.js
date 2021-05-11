import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email!')
    .required('Required!'),
  password: Yup.string()
    .min(8, 'Must be 8 characters long!')
    .required('Required!'),
});

export const signUpSchema = Yup.object().shape({
  fullName: Yup.string().required('Required!'),
  email: Yup.string()
    .email('Invalid email!')
    .required('Required!'),
  password: Yup.string()
    .min(8, 'Must be 8 characters long!')
    .required('Required!'),
});

export const mailSchema = Yup.object().shape({
  subject: Yup.string().required('Subject is required'),
});
