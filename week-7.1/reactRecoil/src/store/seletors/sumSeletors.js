import { selector } from "recoil";
import { notifications } from "../atoms/atoms";
// import {
//   jobsAtom,
//   massangingAtom,
//   networkAtom,
//   notificationAtom,
// } from "../atoms/atoms";

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  },
});
