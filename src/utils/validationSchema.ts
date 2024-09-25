import * as Yup from 'yup';

const loginSchema: any = () => {
  return Yup.object().shape({
    username: Yup.string()
      .required('username required')
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),
    password: Yup.string().required('password invalid'),
  });
};

export {loginSchema};

/*
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

export {loginSchema};

*/
