import { useRequest } from "../useGetRequest";
import React, { useEffect, useState } from "react";

var currentEpoch = "";
var end = "";

const EpochClock = () => {
  var { result } = useRequest("tip", "");
  currentEpoch = result[0].epoch_no;
  console.log(currentEpoch);
  var { result } = useRequest("epoch_info?_epoch_no=", currentEpoch);
  end = (new Date(result[0].end_time + "z").toLocaleString())

  const calculateTimeLeft = () => {
    const difference = +new Date(end) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [""];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  const second = { "--value": timeLeft.seconds };
  const minute = { "--value": timeLeft.minutes };
  const hour = { "--value": timeLeft.hours };
  const day = { "--value": timeLeft.days };

  return (
    <>
    <div className="">
      <div className="grid grid-flow-col gap-3 text-center auto-cols-max text-accent">
        <div className="flex flex-col p-2 rounded-box text-base-content">
          <span className="countdown font-mono text-accent text-5xl">
            <span id="days" style={day}></span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 rounded-box text-base-content">
          <span className="countdown font-mono text-accent text-5xl">
            <span style={hour}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 rounded-box text-base-content">
          <span className="countdown font-mono text-accent text-5xl">
            <span style={minute}></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 rounded-box text-base-content">
          <span className="countdown font-mono text-accent text-5xl">
            <span style={second}></span>
          </span>
          sec
        </div>
      </div>
      </div>
    </>
  );
};

export default EpochClock;
