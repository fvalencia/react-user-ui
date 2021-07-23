import React, { Component } from 'react';
import { render } from 'react-dom';

import Layout from './src/app/core/Layout';
import UserPage from './src/app/user/UserPage';
import './style.css';

function App() {
  return (
    <Layout>
      <UserPage />
    </Layout>
  );
}

render(<App />, document.getElementById('root'));
