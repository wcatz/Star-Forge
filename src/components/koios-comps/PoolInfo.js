import useSWR from "swr";
let url =
  "https://cors.adamantium.online/https://api.koios.rest/api/v0/pool_info";

const PoolInfo = () => {
  const fetcher = (...args) =>
    fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _pool_bech32_ids: [
          "pool1eqj3dzpkcklc2r0v8pt8adrhrshq8m4zsev072ga7a52uj5wv5c",
        ],
      }),
    }).then((res) => res.json());

  const { data: result, error } = useSWR(url, fetcher,);
  if (error) return <h1>Something went wrong!</h1>;
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

  console.log(result);
  let res = result;
    return (
      <span className="mt-5 uppercase font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-5xl">
        {res[0].block_count}
      </span>
    );
  
}
export default PoolInfo;
