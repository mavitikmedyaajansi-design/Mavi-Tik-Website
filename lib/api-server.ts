import { _get, _post } from "@/lib/connection";
import { notFound } from "next/navigation";

export const get = async (url: string) => {
  return await _get(url)
    .then((r) => {
      if (r.status === 200) {
        return r.data;
      }
      notFound();
    })
    .catch((e) => {
      console.log(e);
      notFound();
    });
};

export const post = async (url: string, body: object) => {
  return await _post(url, body)
    .then((r) => {
      return r.data;
    })
    .catch((e) => {
      console.error(e, e.response, "error");
    });
};
