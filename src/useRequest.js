import useSWR from "swr";

const baseUrl = "https://cors.adamantium.online/https://api.koios.rest/api/v0";

export const useRequest = (path, operation, query) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = baseUrl + "/" + path + operation + query;
  const { data, error } = useSWR(url);

  return { data, error };
};
