import "./App.css";
import Widget from "rasa-webchat";

function App() {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      try {
        document.querySelector(".rw-send").click();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="app-chat" onKeyDown={handleKeyDown}>
      chatbot
      <Widget
        initPayload="/greet"
        customData={{ language: "en" }}
        socketUrl="http://localhost:5005"
        title="Restaurant"
        showFullScreenButton={true} 
        displayUnreadCount={true}
        showMessageDate={true}
        storage="session"
      />  
    </div>
  );
}

export default App;
