import { VariableInJsx } from "./Variable.jsx";
import {ConditionInJsx} from "./ConditionInJsx.js";
import { FunctionInJsx } from "./FunctionInJsx.js";

function MyApp() {
    return (
        <div>
            {/* Inside curly braces we write javascript expression */}
       <h1 className="text-3xl text-center font-bold">My App is Working</h1>
       <VariableInJsx />
       <ConditionInJsx />
       <FunctionInJsx />
   
        </div>
    )
};
export {MyApp};