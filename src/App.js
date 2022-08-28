import WidgetChat from "./components/widget/WidgetChat";

function App() {
  return (
    <div>
      <h1>Alpha Theta Data Chatbot Demo</h1>
      <p>Click on the chatbot icon in the lower right hand corner.</p>
      <p>This uses <a href="https://github.com/pawel22222/web-chatbot">Web Chatbot</a> to 
      connect to docker container running the ATD Rasa Chatbot.</p>
      <p>This has a knowledge base about Drupal, an open source Content Management System (CMS)
         for websites
      </p>

      <WidgetChat />
    </div>
  );
}

export default App;
