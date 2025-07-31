import ReactDOM from 'react-dom/client';
import {MyApp} from './App.js';


const divTag = document.getElementById("root");

const root = ReactDOM.createRoot(divTag);
 
root.render(<MyApp />)