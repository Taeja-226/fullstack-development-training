function FunctionInJsx(){
    function Myfunction(){
        return (
            <div>
                <h2 className="text-2xl mt-3">This is returning from Myfunction</h2>
            </div>
        )
    }

    return (
        <div>
            <h2 className="text-2xl mt-3">
                This is returning from FunctionInJsx
                {Myfunction()}
            </h2>
        </div>
    )
};
export {FunctionInJsx};