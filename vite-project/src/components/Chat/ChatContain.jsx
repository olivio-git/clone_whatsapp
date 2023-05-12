import { useState } from "react";
import Chat from "./Chat";
import "./styles.css";
const ChatContain = () => {
    const image="https://images.unsplash.com/photo-1682310934381-ea1437927bd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
    const [chats,setChats]=useState([
        {id:1,image:image,remitente:"juan",destine:"julia",hora:"11:52",content:"Hola julia como estas?"},
        {id:2,image:image,remitente:"pedro",destine:"carlos",hora:"09:52",content:"Hola carlos como estas?"},
        {id:3,image:image,remitente:"pablo",destine:"raul",hora:"23:52",content:"Hola raul como estas?"},
        {id:4,image:image,remitente:"maria",destine:"electra",hora:"12:52",content:"Hola electra como estas?"},

    ])
    return ( 
        <div key={"ch"} className="chatContain">
            {
                chats.map((chat)=>{
                    return(
                        <>
                        <Chat
                        key={chat.id+chat.remitente}
                        image={chat.image}
                        remitente={chat.remitente}
                        destine={chat.destine}
                        hora={chat.hora}
                        content={chat.content}
                        >
                        </Chat>
                        {/* <hr className="hr" /> */}
                        </>
                        
                    )
                })
            }
        </div>
     );
}
 
export default ChatContain;