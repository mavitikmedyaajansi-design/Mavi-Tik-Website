import a from "axios";

export const ENV = {
  api: process.env.NEXT_PUBLIC_API_URL,
  site: process.env.NEXT_PUBLIC_SITE,
};

const axios = a.create({
  baseURL: ENV.api,
});

// const postOptions: RequestInit = {
//   method: "POST",
//   redirect: "follow",
//   headers: {
//     "Content-Type": "application/json",
//     site: fff.site ?? "",
//   },
// };

// const putOptions: RequestInit = {
//   method: "PUT",
//   redirect: "follow",
//   headers: {
//     "Content-Type": "application/json",
//     site: fff.site ?? "",
//   },
// };

// const deleteOptions: RequestInit = {
//   method: "DELETE",
//   redirect: "follow",
//   headers: {
//     site: fff.site ?? "",
//   },
// };

export const _get = async (url: string) => {
  return await axios.get(url, {
    headers: {
      site: ENV.site ?? "",
    },
  });
};

export const _post = async (url: string, body: object) => {
  return await axios.post(url, body, {
    headers: {
      site: ENV.site ?? "",
      "Content-Type": "application/json",
    },
  });
};

export const _put = async (url: string, body: object) => {
  return await axios.put(url, body, {
    headers: {
      site: ENV.site ?? "",
      "Content-Type": "application/json",
    },
  });
};

// export const _put = async (url: string, body: object) => {
//   try {
//     const response = await fetch(fff.api + url, {
//       ...putOptions,
//       body: JSON.stringify(body),
//     });
//     const res = await response.json();
//     if (res.statusCode === 500 || res.statusCode === 400) {
//       throw new Error(res.message);
//     }
//     return res;
//   } catch (err) {
//     throw new Error("" + err);
//   }
// };

// export const _delete = async (url: string) => {
//   try {
//     const response = await fetch(fff.api + url, deleteOptions);
//     const res = await response.json();
//     if (res.statusCode === 500) {
//       throw new Error(res.message);
//     }
//     return res;
//   } catch (err) {
//     throw new Error("" + err);
//   }
// };
