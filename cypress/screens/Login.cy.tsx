import React from 'react';
import { mount } from '@cypress/react18';
import { Login } from '@/screens';
import AppContainer from '../components/AppContainer';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

describe('Login screen', () => {
  const store: any = mockStore({
    intermitence: {
      loading: false,
    },
  });

  it('Renders Login', () => {
    mount(
      <AppContainer store={store}>
        <Login />
      </AppContainer>,
    );
    cy.stub(require('next/router'), 'useRouter');
  });
  it('Render Responsive', () => {
    cy.viewport(414, 896);
    mount(
      <AppContainer store={store}>
        <Login />
      </AppContainer>,
    );
    cy.stub(require('next/router'), 'useRouter');
    cy.get('#password').type('Test1234*');
    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root > img').click();
  });
  it('fields errors', () => {
    mount(
      <AppContainer store={store}>
        <Login />
      </AppContainer>,
    );
    cy.stub(require('next/router'), 'useRouter');
    cy.get('#email').type('test@jjjj');
    cy.get('#password').type('1234');
  });
  it('submit fields success', () => {
    mount(
      <AppContainer store={store}>
        <Login />
      </AppContainer>,
    );
    cy.stub(require('next/router'), 'useRouter');
    cy.get('#email').type('test@gmail.com');
    cy.get('#password').type('Test1234*');
    cy.get('.MuiGrid-container > :nth-child(4)').click();
  });
  it('show password', () => {
    mount(
      <AppContainer store={store}>
        <Login />
      </AppContainer>,
    );
    cy.stub(require('next/router'), 'useRouter');
    cy.get('#password').type('Test1234*');
    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root > img').click();
  });
  it('click login methods ', () => {
    mount(
      <AppContainer store={store}>
        <Login />
      </AppContainer>,
    );
    cy.stub(require('next/router'), 'useRouter');
    cy.get(':nth-child(1) > .MuiButtonBase-root > img').click();
    cy.get('.css-145rgon > :nth-child(2) > .MuiButtonBase-root > img').click();
    cy.get(':nth-child(3) > .MuiButtonBase-root > img').click();
  });
  // it('go to forgot password screen ', () => {
  //   cy.stub(require('next/router'), 'useRouter');
  //   mount(
  //     <AppContainer store={store}>
  //       <Login />
  //     </AppContainer>,
  //   );

  //   cy.intercept('GET', '/app/forgot-password').as('forgotPassword');
  //   cy.get('.css-1onxmye-MuiGrid-root > a > .MuiTypography-root').click();

  //   cy.wait('@forgotPassword');
  // });
});
