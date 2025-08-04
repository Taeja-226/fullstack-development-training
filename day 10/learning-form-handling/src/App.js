import {SimpleForm} from './SimpleForm'
import {CreateAccountForm} from './CreateAccountForm';
import {CreateAccountFormMain} from './CreateAccountFormMain';
function App() {
  return (
    <div>
      <p className='text-3xl'>-------------------------------------------------Simple Form Content-------------------------------------------------------</p>
      <SimpleForm/> 
         <p className='text-3xl'>-------------------------------------------Create Account Form Content-----------------------------------------------</p>
      <CreateAccountForm/>
          <p className='text-3xl'>----------------------------------------Create Account Form Main Content-----------------------------------------------</p>
       <CreateAccountFormMain/>     
    </div>
    
  )
}

export {App};
