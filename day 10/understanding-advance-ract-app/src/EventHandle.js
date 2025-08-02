function HandleClick(){
    alert("Button is Clicked")
}
function HandleFormSubmit(){
        alert("Your form is submitted ");
}
function EventHandle(){
    return(
        <div>
            <button onClick={HandleClick}>Click me !</button>
            <br/><br/>
            <form onSubmit={HandleFormSubmit()}>
                <label>Enter Your Name</label>
                <input type="string" required />
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
    }
export {EventHandle}