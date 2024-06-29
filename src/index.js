import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store/store'
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import Layout from './components/Layout/Layout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Layout>
  <Provider store={store}> 
      <App /> 
    </Provider>
  </Layout>
    
</BrowserRouter>
  
);