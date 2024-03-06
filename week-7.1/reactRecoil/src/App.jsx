import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { notifications } from "./store/atoms/atoms";
import { totalNotificationSelector } from "./store/seletors/sumSeletors";
import { useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    // fetch
    axios.get("https://sum-server.100xdevs.com/notifications").then((res) => {
      setNetworkCount(res.data);
    });
  }, []);

  return (
    <>
      {networkCount && (
        <>
          <button>Home</button>
          <button>
            My network (
            {networkCount.networks >= 100 ? "99+" : networkCount.networks})
          </button>
          <button>Jobs {networkCount.jobs}</button>
          <button>Messaging ({networkCount.messaging})</button>
          <button>Notifications ({networkCount.notifications})</button>
          <button>Me ({totalNotificationCount})</button>{" "}
        </>
      )}
    </>
  );
}

export default App;
