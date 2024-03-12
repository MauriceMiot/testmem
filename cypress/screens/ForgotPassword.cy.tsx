import React from 'react';
import { mount } from '@cypress/react18';
import { ForgotPassword } from '@/screens';
import AppContainer from '../components/AppContainer';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);
import * as NextRouter from 'next/router';

describe('Forgot password Screen', () => {
  beforeEach(() => {
    // Ensure this runs before any component logic
    cy.stub(NextRouter, 'useRouter').returns({
      pathname: '/app/forgot-password',
      query: { code: '144496', email: 'test@gmail.com' },
    });
  });

  const storeStep1: any = mockStore({
    forgotPassword: {
      step: 1,
    },
    intermitence: {
      loading: false,
    },
    authSelector: {
      recover: null,
      email: null,
    },
  });
  const storeStep2: any = mockStore({
    forgotPassword: {
      step: 2,
    },
    intermitence: {
      loading: false,
    },
    authSelector: {
      recover: null,
      email: null,
    },
  });
  const storeError: any = mockStore({
    forgotPassword: {
      step: 0,
    },
    authSelector: {
      recover: null,
      email: null,
    },
    intermitence: {
      loading: false,
    },
  });

  it('Render Forgot password step 1', () => {
    mount(
      <AppContainer store={storeStep1}>
        <ForgotPassword />
      </AppContainer>,
    );
  });
  it('Render Forgot password step 2', () => {
    mount(
      <AppContainer store={storeStep2}>
        <ForgotPassword />
      </AppContainer>,
    );
  });
  // it('Render Forgot password step 1 responsive', () => {
  //   cy.viewport(414, 896);
  //   mount(
  //     <AppContainer store={storeStep1}>
  //       <ForgotPassword />
  //     </AppContainer>,
  //   );
  //   cy.stub(require('next/router'), 'useRouter');
  // });
  // it('Render Forgot password step 2 responsive', () => {
  //   cy.viewport(414, 896);
  //   mount(
  //     <AppContainer store={storeStep2}>
  //       <ForgotPassword />
  //     </AppContainer>,
  //   );
  //   cy.stub(require('next/router'), 'useRouter');
  // });
  // it('change between screens', () => {
  //   mount(
  //     <AppContainer store={storeStep1}>
  //       <ForgotPassword />
  //     </AppContainer>,
  //   );
  //   cy.stub(require('next/router'), 'useRouter');
  //   cy.get('#email').type('test@gmail.com');
  //   cy.get('.css-a0t63y-MuiGrid-root').click();
  //   cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #otpToken').type('123456');
  //   cy.get('.css-a0t63y-MuiGrid-root').click();
  // });
  // it('change between screens responsive', () => {
  //   cy.viewport(414, 896);
  //   mount(
  //     <AppContainer store={storeStep1}>
  //       <ForgotPassword />
  //     </AppContainer>,
  //   );
  //   cy.stub(require('next/router'), 'useRouter');
  //   cy.get('#email').type('test@gmail.com');
  //   cy.get('.css-a0t63y-MuiGrid-root').click();
  //   cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #otpToken').type('123456');
  //   cy.get('.css-a0t63y-MuiGrid-root').click();
  // });
  // it('fill step 2', () => {
  //   cy.viewport(414, 896);
  //   mount(
  //     <AppContainer store={storeStep2}>
  //       <ForgotPassword />
  //     </AppContainer>,
  //   );
  //   cy.stub(require('next/router'), 'useRouter');
  //   cy.get('#password').type('Test1234*');
  //   cy.get(
  //     ':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root',
  //   ).click();
  //   cy.get('#confirm_password').type('Test1234*');
  //   cy.get(
  //     ':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root',
  //   ).click();
  //   cy.get('.css-r5ozn2-MuiGrid-root').click();
  // });
  // it('render default step', () => {
  //   mount(
  //     <AppContainer store={storeError}>
  //       <ForgotPassword />
  //     </AppContainer>,
  //   );
  //   cy.stub(require('next/router'), 'useRouter');
  // });
});
