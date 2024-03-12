// cypress/integration/textFieldComponent.spec.js
import React from 'react';
import { mount } from '@cypress/react18';
import { MuiInputDate } from '@/components';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/theme';
import * as yup from 'yup';
import { Formik } from 'formik';

describe('MuiInputDate component test', () => {
  const schema = yup.object().shape({
    dischargeDate: yup.string().required('Dsicharge date required'),
  });

  it('Render MuiInputDate ', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Formik
          initialValues={{ dischargeDate: '' }}
          validationSchema={schema}
          setCurrentDateByDefault
          onSubmit={(data) => {
            console.log(data);
          }}>
          {({ values, handleSubmit, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <MuiInputDate
                value={values.dischargeDate}
                handleDatePicker={(date: any) => {
                  setFieldValue('dischargeDate', date);
                }}
              />
            </form>
          )}
        </Formik>
      </ThemeProvider>,
    );
    cy.get('.MuiInputBase-root').click();
    cy.get('.MuiPickersDay-today').click();
  });
  it('Render  select Year ', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Formik
          initialValues={{ dischargeDate: '' }}
          validationSchema={schema}
          onSubmit={(data) => {
            console.log(data);
          }}>
          {({ values, handleSubmit, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <MuiInputDate
                value={values.dischargeDate}
                handleDatePicker={(date: any) => {
                  setFieldValue('dischargeDate', date);
                }}
              />
            </form>
          )}
        </Formik>
      </ThemeProvider>,
    );
    cy.get('.MuiInputBase-root').click();
    cy.get('.MuiPickersCalendarHeader-labelContainer').click();
    cy.get(':nth-child(1) > .MuiPickersYear-yearButton').click();
  });
  it('Render  open and close ', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Formik
          initialValues={{ dischargeDate: '' }}
          validationSchema={schema}
          onSubmit={(data) => {
            console.log(data);
          }}>
          {({ values, handleSubmit, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <MuiInputDate
                value={values.dischargeDate}
                handleDatePicker={(date: any) => {
                  setFieldValue('dischargeDate', date);
                }}
              />
            </form>
          )}
        </Formik>
      </ThemeProvider>,
    );
    cy.get('.MuiInputBase-root').click();
    cy.document().trigger('click', { force: true });
  });

  it('Render  MuiInputDate  with initial data', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Formik
          initialValues={{ dischargeDate: null }}
          validationSchema={schema}
          onSubmit={(data) => {
            console.log(data);
          }}>
          {({ values, handleSubmit, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <MuiInputDate
                value={values.dischargeDate}
                disabled={true}
                error={true}
                errorMessage={' this field is required'}
                handleDatePicker={(date: any) => {
                  setFieldValue('dischargeDate', date);
                }}
              />
            </form>
          )}
        </Formik>
      </ThemeProvider>,
    );
  });
  // it('opens picker on opener click', () => {
  //   mount(
  //     <ThemeProvider theme={theme}>
  //       <Formik
  //         initialValues={{ dischargeDate: '' }}
  //         validationSchema={schema}
  //         onSubmit={(data) => {
  //           console.log(data);
  //         }}>
  //         {({ values, handleSubmit, setFieldValue }) => (
  //           <form onSubmit={handleSubmit}>
  //             <MuiInputDate
  //               value={values.dischargeDate}
  //               handleDatePicker={(date: any) => {
  //                 setFieldValue('dischargeDate', date);
  //               }}
  //             />
  //           </form>
  //         )}
  //       </Formik>
  //     </ThemeProvider>,
  //   );
  //   cy.get('button').click();
  //   cy.get('.MuiDateCalendar-root').should('exist');
  //   cy.get('input').click();
  //   cy.get('input').type('09/12/2023');
  // });
  it('render dark theme', () => {
    mount(
      <ThemeProvider theme={theme}>
        <Formik
          initialValues={{ dischargeDate: '' }}
          validationSchema={schema}
          onSubmit={(data) => {
            console.log(data);
          }}>
          {({ values, handleSubmit, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <MuiInputDate
                value={values.dischargeDate}
                isDarkTheme={false}
                handleDatePicker={(date: any) => {
                  setFieldValue('dischargeDate', date);
                }}
              />
            </form>
          )}
        </Formik>
      </ThemeProvider>,
    );
  });
});
