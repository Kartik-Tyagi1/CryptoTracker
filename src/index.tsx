import 'antd/dist/antd.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './app/store';


const container = document.getElementById('root') as Element;
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
    <Router>
        {/* Wrap the App in the provider so all components have access to the store variable */}
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
);