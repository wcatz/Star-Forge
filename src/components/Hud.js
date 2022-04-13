//import { Link } from "react-router-dom";
import React from "react";
import useSWR from "swr";
import NumberFormat from "react-number-format";

const baseURL =
  "https://js.adapools.org/pools/c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae/summary.json";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Hud = () => {
  const { data: result, error } = useSWR(baseURL, fetcher);
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
  let res = result.data;
  console.log(result.data);

  const totalBlocks = Number(res.blocks_lifetime) + Number(res.blocks_epoch);

  return (
    <div className="hidden lg:block">
      <div className="flex justify-center text-center">
        <dl className="flex flex-cols-1 gap-2 sm:flex-cols-7 bg-secondary bg-opacity-50 mb-1 border-t-2 border-l-2 border-r-2 border-accent rounded-t-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium truncate">Blocks</dt>
            <dd className="mt-1 text-3xl font-semibold 0">{totalBlocks}</dd>
            <div className="stat-desc text-green-400">
              Current {res.blocks_epoch}
            </div>
          </div>

          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium truncate">Pledge</dt>
            <dd className="mt-1 text-3xl font-semibold 0">
              <NumberFormat
                value={res.pledge / 1000000000}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix="K"
              />
            </dd>
          </div>

          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium truncate">Margin</dt>
            <dd className="mt-1 text-3xl font-semibold 0">
              {res.tax_ratio * 100}%
            </dd>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium truncate">RO₳</dt>
            <dd className="mt-1 text-3xl font-semibold 0">
              <NumberFormat
                value={res.roa_lifetime}
                displayType={"text"}
                thousandSeparator={true}
                decimalScale={2}
                suffix="%"
              />
            </dd>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium truncate">Delegators</dt>
            <dd className="mt-1 text-3xl font-semibold 0">{res.delegators}</dd>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium truncate">Rank</dt>
            <dd className="mt-1 text-3xl font-semibold 0">{res.rank}</dd>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium truncate">Favor</dt>
            <dd className="mt-1 text-3xl font-semibold 0">
              {res.luck_lifetime}%
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Hud;
