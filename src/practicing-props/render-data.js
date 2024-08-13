import arraydata from "./data1";
import Post1 from "./post";
const Cards = arraydata.map((postdata)=>{
                return(<> 
                        <Post1 {...postdata}/>
                        
                       </>
          
                )});
export default Cards;
