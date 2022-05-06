import WidgetChat from "./components/widget/WidgetChat";

function App() {
  return (
    <div>
      <h1>Try it out</h1>
      <ul>
        <li>book table - activate booking table form</li>
        <li>rent - first node of response form about renting hall</li>
        <li>cancel - first node of response form about canceling hall</li>
        <li>catering - first node of response form about daily catering</li>
      </ul>

      <WidgetChat />
    </div>
  );
}

export default App;
