// import { atom } from "recoil";

// export const networkAtom = atom({
//   key: "networkAtom",
//   default: 104,
// });
// export const jobsAtom = atom({
//   key: "jobsAtom",
//   default: 0,
// });
// export const notificationAtom = atom({
//   key: "notificationAtom",
//   default: 12,
// });
// export const massangingAtom = atom({
//   key: "massangingAtom",
//   default: 0,
// });

import { atom, selector } from "recoil";
import axios from "axios";

export const notifications = atom({
  key: "networkAtom",
  default: selector({
    key: "gettingData",
    get: async () => {
      try {
        const responces = await axios.get(
          "https://sum-server.100xdevs.com/notifications"
        );

        return responces.data;
      } catch (error) {
        console.log(error);
      }
    },
  }),
});

const notificationtom = atom({
  key: "ninini",
  default: selector({
    key: "monkey",
    get: async () => {
      console.log(data);
    },
  }),
});

// export const totalNotificationSelector = selector({
//   key: "totalNotificationSelector",
//   get: ({ get }) => {
//     const allNotifications = get(notifications);
//     return (
//       allNotifications.network +
//       allNotifications.jobs +
//       allNotifications.notifications +
//       allNotifications.messaging
//     );
//   },
// });
