import { Header } from './Header.js';
// import { ToDoList } from './ToDoList.js';
import { PendingList } from './PendingList.js';
import {MyComponent} from './MyComponent.js';
function App() {
    return (
        <div>
            <Header />
            {/* <ToDoList /> */}
            <PendingList />
            <MyComponent />
        </div>
       )
};
export { App };