import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { passwordRegex } from '@/utils';

export const FormikConfig = (handleSubmit: any) =>
  useFormik({
    initialValues: {
      password: '',
      confirm_password: '',
    },

    validationSchema: Yup.object({
      password: Yup.string().required(useTranslation().t('field_required')).matches(passwordRegex, 'password_pattern'),
      confirm_password: Yup.string()
        .required('field_required')
        .matches(passwordRegex, 'password_pattern')
        .oneOf([Yup.ref('password')], 'password_must_match'),
    }),

    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
