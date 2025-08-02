import {EventHandle} from './EventHandle';
import {Counter} from './Counter';
import {LearningState} from './LearningState';
import {StateTypeOfArray} from './StateTypeOfArray';

function App(){
    return(
        <div>
             <h1>Learning Advanced React </h1>
              <EventHandle />
              <Counter />
              <LearningState />
              <StateTypeOfArray/>
        </div>
      
    )
}
export {App};