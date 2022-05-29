import useSWR from "swr";
import NumberFormat from "react-number-format";

let url =
  "https://cors.adamantium.online/127.0.0.1:8053/api/v0/pool_info";

const Hud = () => {
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

  const { data: result } = useSWR(url, fetcher, { suspense: true });
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
  let res = result;

  return (
    
    <div className="hidden lg:block">
      <div className="flex justify-center text-center">
        <dl className="flex flex-cols-1 gap-2 sm:flex-cols-7 bg-secondary bg-opacity-50 mb-1 border-t-2 border-l-2 border-r-2 border-accent rounded-t-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium truncate">Blocks</dt>
            <dd className="mt-1 text-3xl font-semibold 0">{res[0].block_count}</dd>
            <div className="stat-desc text-green-400">
            </div>
          </div>

          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium truncate">Pledge</dt>
            <dd className="mt-1 text-3xl font-semibold 0">
              <NumberFormat
                value={res[0].live_pledge / 1000000000}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={0}
                suffix="K"
              />
            </dd>
          </div>

          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium truncate">Margin</dt>
            <dd className="mt-1 text-3xl font-semibold 0">
              {res[0].margin * 100}%
            </dd>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium truncate">Stake</dt>
            <dd className="mt-1 text-3xl font-semibold 0">
              <NumberFormat
                value={res[0].live_stake / 1000000000000}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix="M"
              />
            </dd>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium truncate">Delegators</dt>
            <dd className="mt-1 text-3xl font-semibold 0">{res[0].live_delegators}</dd>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium truncate">Saturation</dt>
            <dd className="mt-1 text-3xl font-semibold 0">{res[0].live_saturation}%</dd>
          </div>

        </dl>
      </div>
    </div>
  );
};

export default Hud;

