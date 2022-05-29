import { useRequest } from "../useGetRequest";

var currentEpoch = "";
function CurrentEpoch() {
  var { result } = useRequest("tip", "");
  currentEpoch = result[0].epoch_no;
  console.log(currentEpoch);
  return currentEpoch;
}

export default CurrentEpoch;
