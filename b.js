import { ADMIN } from "./roles.js";
const routeDeclartion = [
  {
    path: "/",
    element: "NavBar",
    // permissions: [ADMIN],
    children: [
      {
        index: true,
        element: "Dashboard",
      },
      {
        path: "school",
        element: "School",
        children: [
          {
            path: "class",
            permissions: [ADMIN],
            element: "Class",
          },
        ],
      },
      {
        path: "*",
        element: "NotFound",
      },
    ],
  },
];

export default routeDeclartion;
