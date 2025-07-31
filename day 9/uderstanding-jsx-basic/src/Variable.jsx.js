function VariableInJsx(){
    let name="Pooja";
    let address="Dehra";
    return(
        <div>
            {/* Accessing variables in the curly braces in jsx */}
            <h2 className="text-2xl mt-3"> My name is {name}</h2>
            <h2 className="text-2xl mt-3">I am from {address}</h2>
        </div>
    );
};
export {VariableInJsx};