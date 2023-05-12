const Chat = ({remitente,image,destine,hora,content}) => {
    return ( 
        <div className="chat">
            <div className="col-2">
                <img className="img" src={image} alt="" />
            </div>
            <div className="col-8 info-text">
                <h2>{remitente.toUpperCase()}</h2>
                <p>{content}</p>
            </div>
            <div className="col-2 hour-count">
                <p>{hora}</p>
                <div className="count">
                    1
                </div>
            </div>
        </div>
     );
}
 
export default Chat;