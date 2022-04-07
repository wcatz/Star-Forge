//import { Link } from "react-router-dom";
import React from 'react'
import useSWR from 'swr'
import NumberFormat from "react-number-format";

const baseURL = "https://js.adapools.org/pools/c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae/summary.json";
const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Drawer = () => {
  const { data: result, error } = useSWR(baseURL, fetcher)
  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <h1>Loading...</h1>
  let res = result.data
  console.log(result.data);

  const totalBlocks = Number(res.blocks_lifetime) + Number(res.blocks_epoch);

  return (

    <div className="drawer-side text-center overflow-hidden">
       <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
      <ul className="menu p-4 overflow-y-auto w-80 bg-secondary bg-opacity-0 text-base-content">

        <div className="stats stats-vertical shadow bg-secondary bg-opacity-50 indigo-500 ring-inset ring-2">

          <div className="stat">
            <div className="stat-title">Pools Rank</div>
            <div className="stat-value"># {res.rank}</div>
          </div>

          <div className="stat">
            <div className="stat-title">Total Blocks</div>
            <div className="stat-value">{totalBlocks}</div>
            <div className="stat-desc text-green-400">{res.blocks_epoch} This epoch</div>
          </div>

          <div className="stat">
            <div className="stat-title">Pledge</div>
            <div className="stat-value"><NumberFormat
              value={res.pledge / 1000000000}
              displayType={"text"}
              thousandSeparator={true}
              suffix=" K"
            /></div>
            <div className="stat-desc">Pledged Ada</div>
          </div>

          <div className="stat">
            <div className="stat-title">Delegators</div>
            <div className="stat-value">{res.delegators}</div>
          </div>

          <div className="stat">
            <div className="stat-title">Active Stake</div>
            <div className="stat-value"><NumberFormat
              value={res.active_stake / 1000000000000}
              displayType={"text"}
              thousandSeparator={true}
              suffix=" M"
              decimalScale={2}
            /></div>
          </div>

          <div className="stat">
            <div className="stat-title">Margin</div>
            <div className="stat-value">{res.tax_ratio * 100}%</div>
          </div>

          <div className="stat">
            <div className="stat-title">RO₳</div>
            <div className="stat-value">{res.roa_lifetime}%</div>
          </div>

          <div className="stat">
            <div className="stat-title">Luck</div>
            <div className="stat-value">{res.luck_lifetime}%</div>
          </div>
        </div>
      </ul>
    </div>
  );
}
export default Drawer;