import Images from "./imgarrays/imgarray1"
import Author from "./components/usingprops"
import CardsData from "./srcdata/data1"
export default function Photo(){
    
    return(<>
            <div>My name is Anand Kaushik</div>
            <img src={require("./images/death-to-the-bourgeoisie.jpg")}/>
            <Blackbox/>
            <img src={Images[0]}/>
            <div>lorem ipsum</div>
            <Author 
            name = "Andrew Jew"
            description = "Drinking blood of goys"
            age = {14*22}/>
            <Author 
            name = "Andrea Jew"
            description = "Drinking blood of youse"
            age = {`my name is ${124*22}`}/>
            <Author 
            name = "Andrea Jew"
            description = "Drinking blood of youse"
            age = {`my name is ${124*22}`}/>
            {Dozier}
            
    </>)
}

function Blackbox(){
    return(<><div >I am a black box yupp</div></>)
}
function Identities(data){
    return(<>
    <div>id:{data.id}</div>
    <div>name:{data.name}</div>
    <div>age:{data.age}</div>
    </>)
}

const Dozier = CardsData.map((item)=>{
    return(<Identities
    id={item.id}
    name={item.name}
    age={item.age}/>)
})
    



