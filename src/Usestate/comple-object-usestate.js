import React from "react";
import profileData from "./objectdata";


export default function Profile(){

    
    const[initialdata,setInitialdata]=React.useState(profileData);
    function handleclick(){
        // setInitialdata((previousstoredobject)=>{...previousstoredobject,name:"newname"});
        // setInitialdata((previousstoredobject) => ({
        //     ...previousstoredobject,
        //     name: "newname"
        // }));

        setInitialdata((previousstoredobject)=>{return({
            ...previousstoredobject,
            name: "newname"
        })});
        
    }
    return(<>
    <div>{initialdata.name}</div>
    <div>{initialdata.age}</div>
    <input type="text" placeholder="enter new name"/>
    <button onClick={handleclick}>click me to change name</button></>);

}
