import client from "./baseClient";

const defaultHeaders = {
  "Content-Type": "application/json",
};

const post = async (url, body, headers = defaultHeaders, intecept = true) => {
  const response = await client(intecept).post(url, body, { headers });
  return response;
};

const get = async (url, { headers = defaultHeaders, intecept = true }) => {
  const getHeaders = { ...defaultHeaders, ...headers };

  const response = await client(intecept).get(url, { headers: getHeaders });
  return response;
};

export { post, get };
