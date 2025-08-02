function ListRender(){
    let num = [1,2,3,4,5];
         
    return(
         <ul>
            {num.map((item , i) =><li key={i}>{item}</li>)}
         </ul>
    )
};
export {ListRender};