import { RecoilRoot } from "recoil";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <RecoilRoot>
        <div className="w-fill h-screen bg-zinc-300 flex justify-center  p-11 ">
          <Todos />
        </div>
      </RecoilRoot>
    </>
  );
}

export default App;
