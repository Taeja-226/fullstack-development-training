// importing react-dom module
// react dom module give connection with browser
import ReactDOM from 'react-dom/client';
import {MyComponent} from './MyComponent';

// getting division tag by id "root"
const divTag= document.getElementById("root");

// Creating a root dom(document object model)
const root = ReactDOM.createRoot(divTag);

//rendering component
// mycomponent is a react component
// we can only render one single component
root.render(<MyComponent />)
