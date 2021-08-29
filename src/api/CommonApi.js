import axios from "axios";
import { mainHost } from "./Link";

export function getData(link, params, auth, onSuccess, onFail) {
  axios
    .get(mainHost + link, {
      headers: { 
        "content-type": "applicaiton/json",
        "authorization": auth,
    },
    })
    .then((res) => {
      onSuccess(res);
    })
    .catch((err) => {
      onFail(err);
    });
}

export function postData(link, data, onSuccess, onFail) {
  console.log(data);
  axios
    .post(mainHost + link, data)
    .then((res) => {
      onSuccess(res);
    })
    .catch((err) => {
      onFail(err);
    });
}
