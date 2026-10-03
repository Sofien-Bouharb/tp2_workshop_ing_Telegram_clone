import ChatItem from "./ChatItem";

function ChatList(props) {
  return (
    <div className="chat-list">
      {props.chats.map(function (chat) {
        return (
          <ChatItem
            key={chat.id}
            chat={chat}
            isSelected={chat.id === props.selectedChatId}
          />
        );
      })}
    </div>
  );
}

export default ChatList;
