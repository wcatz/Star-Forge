import { useRequest } from "../useGetRequest";
import NumberFormat from "react-number-format";
import { EyeIcon } from "@heroicons/react/solid";

const PoolStats = () => {
  const { result } = useRequest(
    "pool_history?_pool_bech32=pool1eqj3dzpkcklc2r0v8pt8adrhrshq8m4zsev072ga7a52uj5wv5c",
    "&limit=5"
  );
  console.log({result});

  return (
    <div className="my-5">
      <div className="flex items-center">
        <div className="flex-auto">
          <h1 className="leading-8 font-extrabold tracking-tight font- text-4xl bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-500">Latest Pool Stats</h1>
          <p className="my-5">
            Information about pools performance/rewards for the last 5 payouts
          </p>
        </div>
      </div>
        <div className="mt-4">
        <div className="relative">
            <span className="absolute -bottom-6 left-auto inline-flex items-center justify-center p-3 bg-primary-500 rounded-md z-50">
              <EyeIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            </div>
        </div>
      <div className="overflow-auto mb-1 border-2 border-accent rounded-lg">

        <table className="table table-zebra w-full">
          <thead className="">
            <tr>
              <th className="hidden"></th>
              <th>EPOCH</th>
              <th>ACTIVE STAKE</th>
              <th>BLOCKS</th>
              <th>DELEGATE PAYOUT</th>
              <th>EPOCH RO₳</th>
              <th>OPERATOR FEE</th>
            </tr>
          </thead>
          <tbody>
            {result.map((res, key) => (
              <tr className="hover" key={key}>
                <td className="sm:pl-6">{res.epoch_no}</td>
                <td className="">
                  <NumberFormat
                    value={res.active_stake / 1000000000000}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    suffix=" M ₳"
                  />
                </td>
                <td className="">{res.block_cnt}</td>
                <td className="">
                  <NumberFormat
                    value={res.deleg_rewards / 100000}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={0}
                    suffix=" ₳"
                  />
                </td>
                <td className="">
                  <NumberFormat
                    value={res.epoch_ros}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    suffix="%"
                  />
                </td>
                <td className="">
                  <NumberFormat
                    value={res.pool_fees / 1000000}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={0}
                    suffix=" ₳"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PoolStats;
