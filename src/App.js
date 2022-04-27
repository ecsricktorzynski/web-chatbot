import "./App.css";
import Widget from "rasa-webchat";

function App() {
  return (
    <div className="app-chat">
      chatbot
      <Widget
        initPayload={"/utter_greet"}
        socketUrl={"http://localhost:5055/webhook"}
        socketPath={"/socket.io/"}
        customData={{ language: "en" }} // arbitrary custom data. Stay minimal as this will be added to the socket
        title={"Title"}
      />
    </div>
  );
}

export default App;
