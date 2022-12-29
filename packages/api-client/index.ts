import { get, post } from "./src/core";

// NOTE(@Jaehoo-dev): 지금은 coreApi를 직접 사용한다.
// 나중에 coreApi를 이용해 appApi, cafe24Api 등을 만들어 사용한다.
export const coreApi = {
  get,
  post,
};
