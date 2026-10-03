function ChatItem(props) {
  const isSelectedClass = props.isSelected ? "chat-item selected" : "chat-item";
  const avatarBgColor = props.chat.color || "#5682a3";

  return (
    <div className={isSelectedClass}>
      <div className="avatar" style={{ backgroundColor: avatarBgColor }}>
        {props.chat.avatar}
      </div>
      <div className="chat-details">
        <div className="chat-top-row">
          <span className="chat-name">{props.chat.name}</span>
          <span className="chat-time">{props.chat.time}</span>
        </div>
        <div className="chat-bottom-row">
          <span className="chat-last-message">{props.chat.lastMessage}</span>
          {props.chat.unread > 0 && (
            <span className="unread-badge">{props.chat.unread}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatItem;
