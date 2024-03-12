import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { emailRegex, onlyNames, passwordRegex } from '@/utils';

export const FormikConfig = (handleSubmit: any) =>
  useFormik({
    initialValues: {
      name: '',
      lastname: '',
      phonenumber: '',
      description: '',
      email: '',
      password: '',
      confirm_password: '',
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required(useTranslation().t('field_required'))
        .min(3, useTranslation().t('min_invalid', { number: 3 }))
        .max(40, useTranslation().t('max_invalid', { number: 40 }))
        .matches(onlyNames, 'only_letters'),

      lastname: Yup.string()
        .required(useTranslation().t('field_required'))
        .min(3, useTranslation().t('min_invalid', { number: 3 }))
        .max(60, useTranslation().t('max_invalid', { number: 60 }))
        .matches(onlyNames, 'only_letters'),

      email: Yup.string()
        .required(useTranslation().t('field_required'))
        .matches(emailRegex, useTranslation().t('invalid_email')),

      password: Yup.string().required(useTranslation().t('field_required')).matches(passwordRegex, 'password_pattern'),
      confirm_password: Yup.string()
        .required(useTranslation().t('field_required'))
        .matches(passwordRegex, 'password_pattern')
        .oneOf([Yup.ref('password')], 'password_must_match'),

      phonenumber: Yup.string().required(useTranslation().t('field_required')),
      description: Yup.string(),
    }),

    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
