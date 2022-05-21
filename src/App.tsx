import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Container } from "./components/Container";
import { CustomDragLayer } from "./components/CustomDragLayer";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Container />
        <CustomDragLayer />
      </DndProvider>
    </div>
  );
}

export default App;
