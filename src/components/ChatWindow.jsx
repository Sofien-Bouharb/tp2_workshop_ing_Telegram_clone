import Message from "./Message";

function ChatWindow(props) {
  const avatarBgColor = props.chat.color || "#5682a3";

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="avatar" style={{ backgroundColor: avatarBgColor }}>
          {props.chat.avatar}
        </div>
        <div className="chat-header-info">
          <span className="header-name">{props.chat.name}</span>
          <span className="header-status">{props.chat.status || "en ligne"}</span>
        </div>
      </div>

      <div className="messages-container">
        {props.messages.map(function (msg) {
          return <Message key={msg.id} message={msg} />;
        })}
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          className="message-input"
          placeholder="Écrire un message..."
          
        />
        <button type="button" className="send-button" title="Envoyer le message">
          ➢
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
