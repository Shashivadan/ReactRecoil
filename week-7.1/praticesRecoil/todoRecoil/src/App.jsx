import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { todosAtoms } from "./atom";
import { todosAtomFamily } from "../../../7.4/loadables/src/atoms";

function App() {
  const todo = useRecoilValueLoadable(todosAtomFamily(2));

  const { contents, state } = todo;

  console.log(contents);

  return (
    <>
      <div>
        {state == "loading" ? (
          <>
            <h1>loading</h1>
          </>
        ) : (
          <h1>{JSON.stringify(data)}</h1>
        )}
      </div>
    </>
  );
}

export default App;
