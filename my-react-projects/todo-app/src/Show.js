import {Add} from './Add'
function Show(){
    return(
          <div>
            <table>
                <tr>
                    <th>Todo Title</th>
                    <th> Due Date</th>
                    <th>Mark Done</th>
                </tr>
                {/* <tr>
                    <td>{formData.todoTitle}</td>
                </tr> */}

            </table>
          </div>
    )
};
export {Show};