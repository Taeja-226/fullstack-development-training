import './index.css';
import {AddingTailwind} from './AddingTailwind.js';

function MyApp() {
    // internal css
    const Style = {
        color: 'purple',
    }
    return (
        <div>
            {/*inline CSS */}
            <h1 style={{ color: 'blue' }}> My App is Working</h1>
            {/* Following is our internal css */}
            <p style={Style}> Hello, This is my paragraph</p>
            {/* There is also another method to add css internally that is following */}
            <style>
                {`h2 {
              color:red;
            }`
                }
            </style>
            <h2>Hello, It's in red</h2>
            {/*Here in the third heading we are adding css externally for which we have imported index.css file */}
            <h3>This is my third heading</h3>
            {/*Here will try to add css using id for same tag */}
            <p id="hello">Hello, Css is added to same tag with different id</p>
            <AddingTailwind />
        </div>
    )
};
export { MyApp };