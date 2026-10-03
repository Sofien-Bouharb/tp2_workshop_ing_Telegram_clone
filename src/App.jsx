import Header from "./components/Header";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import "./App.css";

const chats = [
  {
    id: 1,
    name: "Ahmed Ben Ali",
    avatar: "AB",
    lastMessage: "D'accord, à tout à l'heure à 17h !",
    time: "14:32",
    unread: 0,
    status: "en ligne",
    color: "#5682a3"
  },
  {
    id: 2,
    name: "Groupe d'amis",
    avatar: "GA",
    lastMessage: "Sarah : Qui vient ce soir ?",
    time: "13:15",
    unread: 3,
    status: "5 membres",
    color: "#9c27b0"
  },
  {
    id: 3,
    name: "Amira",
    avatar: "A",
    lastMessage: "As-tu vérifié le sujet du projet ?",
    time: "11:45",
    unread: 1,
    status: "en ligne il y a 10 min",
    color: "#e91e63"
  },
  {
    id: 4,
    name: "Groupe Université",
    avatar: "GU",
    lastMessage: "Prof : Séance de TP demain à 09h00.",
    time: "Hier",
    unread: 5,
    status: "42 membres",
    color: "#00bcd4"
  },
  {
    id: 5,
    name: "Mohamed",
    avatar: "M",
    lastMessage: "Merci pour ton aide avec React !",
    time: "Hier",
    unread: 0,
    status: "vu récemment",
    color: "#ff9800"
  },
  {
    id: 6,
    name: "Famille",
    avatar: "F",
    lastMessage: "Maman : N'oublie pas le dîner à 20h",
    time: "Lundi",
    unread: 0,
    status: "8 membres",
    color: "#795548"
  }
];

const messages = [
  {
    id: 1,
    text: "Salut ! As-tu commencé à travailler sur le TP2 React ?",
    time: "14:10",
    sent: false
  },
  {
    id: 2,
    text: "Salut Ahmed ! Oui, je viens de configurer le projet Vite.",
    time: "14:12",
    sent: true
  },
  {
    id: 3,
    text: "Super ! On le garde strictement statique comme demandé ?",
    time: "14:15",
    sent: false
  },
  {
    id: 4,
    text: "Oui, exactement ! Seulement des composants fonctionnels, des props et du CSS standard.",
    time: "14:18",
    sent: true
  },
  {
    id: 5,
    text: "Génial. As-tu créé les composants ChatList et ChatWindow ?",
    time: "14:22",
    sent: false
  },
  {
    id: 6,
    text: "C'est fait ! Tout est affiché proprement avec des tableaux JavaScript statiques.",
    time: "14:26",
    sent: true
  },
  {
    id: 7,
    text: "Parfait, on revoit le code ensemble plus tard aujourd'hui.",
    time: "14:30",
    sent: false
  },
  {
    id: 8,
    text: "D'accord, à tout à l'heure à 17h !",
    time: "14:32",
    sent: true
  }
];

function App() {
  const selectedChat = chats[0];

  return (
    <div className="app-container">
      <div className="sidebar">
        <Header />
        <ChatList chats={chats} selectedChatId={selectedChat.id} />
      </div>
      <ChatWindow chat={selectedChat} messages={messages} />
    </div>
  );
}

export default App;
