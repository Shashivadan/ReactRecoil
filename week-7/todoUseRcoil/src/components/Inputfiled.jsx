import React, { useRef } from "react";
import { useSetRecoilState } from "recoil";

import { atomInputfiled } from "../Store/atoms/inputfiled";
import { todoAtom } from "../Store/atoms/todoAtom";
import { searchSelector } from "../Store/atoms/searchAtom";

function Inputfiled() {
  const usedRefInput = useRef("");
  const setInputfiled = useSetRecoilState(atomInputfiled);
  const settodos = useSetRecoilState(todoAtom);

  setInputfiled(usedRefInput.current.value);

  return (
    <div>
      <input ref={usedRefInput} />
      <button
        onClick={() => {
          console.log(searchSelector);
        }}
      >
        {" "}
        sfsdhfgk
      </button>
    </div>
  );
}

export default Inputfiled;
