import routeDeclartion from "./b.js";
import { RECRUITER } from "./roles.js";
const role = RECRUITER;

function filterRoutes(r) {
  let a = [];
  r.forEach((item) => {
    if ("children" in r) {
      a.push(filterRoutes(r.children));
    }
  });
  // ===============
  const b = r.filter((item) => {
    if (!("permissions" in item)) {
      return true;
    }
    if (item.permissions.includes(role)) {
      return true;
    }
    return false;
  });
  return [...a, ...b];
}

console.log(JSON.stringify(filterRoutes(routeDeclartion)));
