import React from 'react';
import { mount } from '@cypress/react18';
import { Home } from '@/screens';
import AppContainer from '../components/AppContainer';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

describe('Login Screen', () => {
  const store: any = mockStore({});
  it('Render Home', () => {
    mount(
      <AppContainer store={store}>
        <Home />
      </AppContainer>,
    );
    cy.stub(require('next/router'), 'useRouter');
  });
  it('Render Home Responsive', () => {
    cy.viewport(414, 896);
    mount(
      <AppContainer store={store}>
        <Home />
      </AppContainer>,
    );
    cy.stub(require('next/router'), 'useRouter');
  });
});
