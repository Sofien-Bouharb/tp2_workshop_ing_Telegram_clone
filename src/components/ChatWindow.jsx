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
          readOnly
        />
        <button type="button" className="send-button" title="Envoyer le message">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ChatWindow;
