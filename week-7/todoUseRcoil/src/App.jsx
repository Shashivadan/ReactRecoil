import TodoDisplay from "./components/TodoDisplay";
import Inputfiled from "./components/Inputfiled";

import { RecoilRoot } from "recoil";
function App() {
  return (
    <>
      <RecoilRoot>
        <Alltodos />
      </RecoilRoot>
    </>
  );
}

function Alltodos() {
  return (
    <div>
      <Inputfiled />
      <TodoDisplay />
    </div>
  );
}

export default App;
