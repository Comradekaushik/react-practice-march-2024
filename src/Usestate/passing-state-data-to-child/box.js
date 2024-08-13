import React from "react";

export default function SquareBox(props2){
    const [initialBoxData,setInitialBoxData] = React.useState(props2);
    function toggletozero(){
        setInitialBoxData((previous)=>{return({
            ...previous,
             name:"zero"
        })})

            
    }
    const styleboxes = {
        backgroundColor : initialBoxData.on ? "black" : "transparent",
        color : initialBoxData.on ? "white" : "black" 
    }
    return(<>
        <div className="SquareBox" style={styleboxes}>
            {/* My name is {props2.valueChild} */}
            My name is {initialBoxData.name} 
        </div>
        <button onClick={toggletozero}>Toggle my name to 0</button>
        </>)
}