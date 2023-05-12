import ChatContain from "../Chat/ChatContain";
import Navbar from "../Navbar/Navbar";
import "./styles.css"
const ContainerChats = () => {
    return ( 
        <div className="col-12 width heigth bar-contain">
            <Navbar/>
            <ChatContain/>
        </div>
     );
}
 
export default ContainerChats;