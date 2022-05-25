import { useRequest } from "../useGetRequest";
import NumberFormat from "react-number-format";

const PoolStats = () => {
  const { result } = useRequest(
    "pool_history?_pool_bech32=pool1eqj3dzpkcklc2r0v8pt8adrhrshq8m4zsev072ga7a52uj5wv5c",
    "&limit=5"
  );

  return (
    <div className="my-5">
      <div className="flex items-center">
        <div className="flex-auto">
          <h1 className="text-xl font-semibold">Latest Pool Stats</h1>
          <p className="my-2">
            Information about pools performance/rewards for the last 5 payouts
          </p>
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
              <th>EPOCH ROS</th>
              <th>OPERATOR FEE</th>
            </tr>
          </thead>
          <tbody>
            {result.map((data, key) => (
              <tr className="hover" key={key}>
                <td className="sm:pl-6">{data.epoch_no}</td>
                <td className="">
                  <NumberFormat
                    value={data.active_stake / 1000000000000}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    suffix=" M ₳"
                  />
                </td>
                <td className="">{data.block_cnt}</td>
                <td className="">
                  <NumberFormat
                    value={data.deleg_rewards / 100000}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={0}
                    suffix=" ₳"
                  />
                </td>
                <td className="">
                  <NumberFormat
                    value={data.epoch_ros}
                    displayType={"text"}
                    thousandSeparator={true}
                    decimalScale={2}
                    suffix="%"
                  />
                </td>
                <td className="">
                  <NumberFormat
                    value={data.pool_fees / 1000000}
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
