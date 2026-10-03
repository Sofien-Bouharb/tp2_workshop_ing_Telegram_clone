function Message(props) {
  const alignmentClass = props.message.sent ? "message-row outgoing" : "message-row incoming";

  return (
    <div className={alignmentClass}>
      <div className="message-bubble">
        <div className="message-text">{props.message.text}</div>
        <div className="message-time">{props.message.time}</div>
      </div>
    </div>
  );
}

export default Message;
