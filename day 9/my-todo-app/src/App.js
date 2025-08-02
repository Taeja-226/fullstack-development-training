import { Header } from './Header.js';
import { ToDoList } from './ToDoList.js';
import { PendingList } from './PendingList.js';

function App() {
    return (
        <div>
            <Header />
            <ToDoList />
            <PendingList />
        </div>
       )
};
export { App };