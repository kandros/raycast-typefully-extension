import { useFetch } from "@raycast/utils";
import { typefullyToken } from "./preferences";
import { Thread } from "./types";

export async function createThread() {
  const res = await fetch("https://api.typefully.com/threads/", {
    headers: {
      accept: "application/json, text/plain, */*",
      authorization: typefullyToken,
      "content-type": "application/json",
    },
    body: "{}",
    method: "POST",
  });

  const json = await res.json();
  console.log({ json });
  return json;
}

export function useThreads() {
  const { data = [], ...rest } = useFetch<Thread[]>("https://api.typefully.com/threads/?status=0", {
    headers: {
      accept: "application/json, text/plain, */*",
      authorization: typefullyToken,
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
    },
  });

  return { threads: data, ...rest };
}
