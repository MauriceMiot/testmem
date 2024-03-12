// cypress/integration/textFieldComponent.spec.js
import React from 'react';
import { mount } from '@cypress/react18';
import { MuiAppBar } from '@/components';
import configureStore from 'redux-mock-store';
import AppContainer from './AppContainer';

const mockStore = configureStore([]);
describe('Appbar component', () => {
  it('render Appbar', () => {
    const store: any = mockStore({});
    mount(
      <AppContainer store={store}>
        <MuiAppBar />
      </AppContainer>,
    );
    cy.stub(require('next/router'), 'useRouter');
  });
  it('click side bar function', () => {
    const store: any = mockStore({});
    mount(
      <AppContainer store={store}>
        <MuiAppBar />
      </AppContainer>,
    );

    const pushStub = cy.stub().as('routerPush');

    cy.get('.css-1hd6ql4').click();
    cy.stub(require('next/router'), 'useRouter').returns({
      push: pushStub,
    });
  });
  it('open dropdown and go settings', () => {
    const store: any = mockStore({});
    mount(
      <AppContainer store={store}>
        <MuiAppBar />
      </AppContainer>,
    );

    const pushStub = cy.stub().as('routerPush');
    cy.get('.css-0 > [data-cy="iconButton"] > .MuiButtonBase-root').click();
    cy.get('.MuiList-root > [tabindex="0"]').click();

    cy.stub(require('next/router'), 'useRouter').returns({
      push: pushStub,
    });
  });
  it('open dropdown and press logout', () => {
    const store: any = mockStore({});
    mount(
      <AppContainer store={store}>
        <MuiAppBar />
      </AppContainer>,
    );

    const pushStub = cy.stub().as('routerPush');
    cy.stub(require('next/router'), 'useRouter').returns({
      push: pushStub,
    });
    cy.get('.css-0 > [data-cy="iconButton"] > .MuiButtonBase-root').click();
    cy.get('.MuiList-root > [tabindex="-1"]').click();
  });
  it('click notificacion ', () => {
    const store: any = mockStore({});
    mount(
      <AppContainer store={store}>
        <MuiAppBar />
      </AppContainer>,
    );
    const pushStub = cy.stub().as('routerPush');
    cy.stub(require('next/router'), 'useRouter').returns({
      push: pushStub,
    });
    cy.get('.css-83ngr > :nth-child(1) > .MuiButtonBase-root').click();
  });
  it('click collaborators ', () => {
    const store: any = mockStore({});
    mount(
      <AppContainer store={store}>
        <MuiAppBar />
      </AppContainer>,
    );
    const pushStub = cy.stub().as('routerPush');
    cy.stub(require('next/router'), 'useRouter').returns({
      push: pushStub,
    });
    cy.get('.css-83ngr > :nth-child(2) > .MuiButtonBase-root').click();
  });
});
