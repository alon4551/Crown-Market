import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store,presist} from './redux/store';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>

  <BrowserRouter  basename={process.env.PUBLIC_URL}> 
  <PersistGate persistor={presist }>
    <App />
  </PersistGate>
  </BrowserRouter>
  </Provider>
,
  document.getElementById('root')
);
