import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atom/count";
import { evenSelector } from "./store/atom/selectors";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <EvenOrODD />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState();
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

function EvenOrODD() {
  const IsEven = useRecoilValue(evenSelector);
  return (
    <>
      <h1>{IsEven ? "it is even" : null}</h1>
    </>
  );
}

export default App;
