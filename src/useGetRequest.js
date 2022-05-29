import useSWR from "swr";

const baseUrl = "https://cors.adamantium.online/127.0.0.1:8053/api/v0/";

export const useRequest = (path, filter, options) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const { data: result } = useSWR(baseUrl + path + filter, options);
  if (!result)
    return (
      <div className="flex justify-center items-center mb-10">
        <div
          className="
              animate-spin
              rounded-full
              h-10
              w-10
              border-t-2 border-b-2 border-indigo-500
              "
        ></div>
      </div>
    );

  //console.log(result);
 
  return ({result})
};
