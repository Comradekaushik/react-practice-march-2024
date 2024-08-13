import React from 'react';

export default function ClicktoChange(){
    const[Isgoingout,SetIsgoingout] =React.useState(true);
    function Toggle(){
        SetIsgoingout((previousvalue)=>{return(!previousvalue)});
    }
    return(<><div onClick={Toggle}>{Isgoingout?"Yes":"No"}</div></>)
}
//here content of html is changed by knowing what's the state.