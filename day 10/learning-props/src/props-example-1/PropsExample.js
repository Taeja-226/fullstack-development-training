import MyComponent from "../props-example-2/MyComponent";

function PropsExample() {
    let fruits = ['banana', 'apple', 'kiwi']

    return (
        <div>
            <MyComponent fruits={fruits}/>
        </div>
    )

}

export default PropsExample;