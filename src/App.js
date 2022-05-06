import "./App.css";
import Widget from 'rasa-webchat'

function App() {
  return (
    <div className="app-chat">
      chatbot

      <Widget
        initPayload={"/get_started"}
        socketUrl={"http://localhost:5005"}
        socketPath={"/socket.io/"}
        customData={{language: "en"}}
        title={"Restaurant"}
        showFullScreenButton={true}
        displayUnreadCount={true}
        showMessageDate={true}
        storage="session"
      />
    </div>
  );
}

export default App;
