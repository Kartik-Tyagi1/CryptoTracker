import 'antd/dist/antd.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';


const container = document.getElementById('root') as Element;
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
    <Router>
        <App/>
    </Router>
);