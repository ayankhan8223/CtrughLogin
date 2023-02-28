import "./App.css";
import LeftPart from "./Components/LeftPart";
import RightPart from "./Components/RightPart";

function App() {
  return (
    <>
      <div className="flex h-full">
        <div className="w-[60%] bg-[#336cb5] h-screen">
          <LeftPart />
        </div>
        <div className="w-[40%]  h-screen">
          <RightPart />
        </div>
      </div>
    </>
  );
}

export default App;
