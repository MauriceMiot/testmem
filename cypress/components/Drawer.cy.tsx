import React from 'react';
import { mount } from '@cypress/react18';
import { Drawer } from '@/components';
import AppContainer from './AppContainer';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('Drawer component', () => {
  const store: any = mockStore({
    intermitence: {
      drawerOpen: true,
    },
  });
  const storeClosed: any = mockStore({
    intermitence: {
      drawerOpen: false,
    },
  });

  it('Renders Appbar hidden', () => {
    mount(
      <AppContainer store={storeClosed}>
        <Drawer />
      </AppContainer>,
    );
  });
  it('renders Drawer open', () => {
    const store: any = mockStore({
      intermitence: {
        drawerOpen: true,
      },
    });
    mount(
      <AppContainer store={store}>
        <Drawer />
      </AppContainer>,
    );
  });
  it('Renders Drawer mobile', () => {
    cy.viewport(414, 896);
    mount(
      <AppContainer store={store}>
        <Drawer />
      </AppContainer>,
    );
  });

  it('Close modal ', () => {
    mount(
      <AppContainer store={store}>
        <Drawer />
      </AppContainer>,
    );

    cy.get('[data-cy="drawerButton"] > .MuiBox-root > .MuiButtonBase-root > img').click();
  });
});
