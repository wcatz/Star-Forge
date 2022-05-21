//import { data } from "autoprefixer";
//import { useEffect, useState } from "react";
import { useRequest } from "../../useRequest";
//import { Epoch } from "./Epoch";

//const baseKoios = "https://cors.adamantium.online/https://api.koios.rest/api/v0/epoch_info?_epoch_no=320";
//const epoch = "epoch_info?_epoch_no=320";

function Koios() {
  const { data: result, error } = useRequest("pool_blocks?", "_pool_bech32=pool1eqj3dzpkcklc2r0v8pt8adrhrshq8m4zsev072ga7a52uj5wv5c", "");

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
        epoch: {res[res.length-1].epoch_no}

      </span>
    );
  }
}

export default Koios;
