import React from "react";
import { useRequest } from "../../useRequest";

export const Tip = () => {
  const { data: result, error } = useRequest();

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
  if (res.length > 0) {
    return (
      <span className="mt-5 uppercase font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-500 text-5xl">
        name: {res[0].epoch_no}
      </span>
    );
  }
};

export const Epochinfo = ({ epoch_info }) => {
  const { epoch } = 320;
  const { data, error } = useRequest("epoch_info?", "_epoch_no=", epoch);

  if (error) return <h1>Something went wrong!</h1>;
  if (!data) return <h1>Loading...</h1>;

  return <div className=""></div>;
};

export const Epochparams = ({ epoch_params }) => {
  const { epoch } = 320;
  const { data, error } = useRequest("/epoch_params", epoch);

  if (error) return <h1>Something went wrong!</h1>;
  if (!data) return <h1>Loading...</h1>;

  return <div className=""></div>;
};
