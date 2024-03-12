import React from 'react';
import { mount } from '@cypress/react18';
import { Layout } from '@/components';
import AppContainer from './AppContainer';
import configureStore from 'redux-mock-store';
import { Typography } from '@mui/material';

const mockStore = configureStore([]);

describe('Layout component', () => {
  const store: any = mockStore({
    intermitence: {
      drawerOpen: true,
    },
  });

  it('Renders Layout', () => {
    mount(
      <AppContainer store={store}>
        <Layout>
          <Typography>Layout</Typography>
        </Layout>
      </AppContainer>,
    );
    cy.stub(require('next/router'), 'useRouter');
  });
});
