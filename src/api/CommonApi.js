import axios from "axios";
import { mainHost } from "./Link";

export function getData(link, params, onSuccess, onFail) {
  axios
    .get(mainHost + link, {
      headers: { "content-type": "applicaiton/json" },
    })
    .then((res) => {
      onSuccess(res);
    })
    .catch((err) => {
      onFail(err);
    });
}
