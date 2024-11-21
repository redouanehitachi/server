import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import { createRoot } from 'react-dom/client';
import materializeCSS from 'materialize-css/dist/css/materialize.min.css';


const store = createStore(reducers, {}, applyMiddleware());


const root = createRoot(document.getElementById('root'));
root.render(

    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('#root'));
