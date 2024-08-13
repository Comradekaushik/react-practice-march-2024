import "../style/div-top.css";
export default function Divtop(data){
    return(<>
    <div id="header-divtop">
        <div id="avatar-container">
        <img className="image1" src={require("../images/avatar.jpg")}/>
        </div>
        <div id="profile-name-central"><div >Joseph Stalin</div></div>
        <div id="dots-container"><img id="three-dots" src={require("../images/three-dots.png")}/></div>
        
    </div></>)
}