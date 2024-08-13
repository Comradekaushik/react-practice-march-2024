import React from "react";

let memedata = {
    "toptext":"",
    "bottomtext":"",
    "randomimg":"https://i.imgflip.com/1bij.jpg"
}


export default function Memecomponent(){
    return(<><div>{memedata.toptext}</div>
    <div>{memedata.bottomtext}</div>
    <img src={memedata.randomimg}/></>)

}