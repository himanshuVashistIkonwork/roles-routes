import routeDeclartion from "./b.js";
import { RECRUITER } from "./roles.js";
const role = RECRUITER;

function filterRoutes(r) {
  return r.filter((item) => {
    if (!("permissions" in item)) {
      if ("children" in item) {
        item.children = filterRoutes(item.children);
      }
      return true;
    } else if (item.permissions.includes(role)) {
      if ("children" in item) {
        item.children = filterRoutes(item.children);
      }
      return true;
    }
    return false;
  });
}

console.log(
  JSON.stringify(filterRoutes(JSON.parse(JSON.stringify(routeDeclartion))))
);
