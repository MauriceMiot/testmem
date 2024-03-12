import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { emailRegex, passwordRegex } from '@/utils';

export const FormikConfig = (handleSubmit: any) =>
  useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .required(useTranslation().t('field_required'))
        .matches(emailRegex, useTranslation().t('invalid_email')),
      password: Yup.string().required(useTranslation().t('field_required')).matches(passwordRegex, 'password_pattern'),
    }),

    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
