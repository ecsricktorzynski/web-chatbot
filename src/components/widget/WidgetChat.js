import Widget from "rasa-webchat";
import './WidgetChat.css'

function WidgetChat() {
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
    <div onKeyDown={handleKeyDown}>
      <Widget
        initPayload="/greet"
        customData={{ language: "en" }}
        socketUrl="http://localhost:5005"
        title="Restaurant"
        showFullScreenButton={true}
        displayUnreadCount={true}
        showMessageDate={true}
        storage="session"
        profileAvatar="./assets/svg/avatar.png"
      />
    </div>
  );
}

export default WidgetChat;
