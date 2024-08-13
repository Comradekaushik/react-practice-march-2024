import React from 'react';

export default function Numberchange(){
    const[Isnumber,setIsnumber] = React.useState(0);
    function Plusone(){
        setIsnumber((previousvalue)=>{return(previousvalue+1);})
    }
    function Minusone(){
        setIsnumber((previousvalue)=>{return(previousvalue-1);})
    }
    return(<><div>{Isnumber}</div>
    <button onClick={Plusone}>+</button>
    <button onClick={Minusone}>-</button></>)
}
