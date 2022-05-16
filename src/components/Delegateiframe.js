import React from 'react';

function HandleDelegate() {
  var pool_id = "c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae";
  var blockfrost_project_id = "mainnet5KZZo60WRq8nMsRWNvrvPqyrHtqucJlM";
  var link =
    "https://armada-alliance.com/delegation-widget?pool_id=" +
    pool_id +
    "&blockfrost_project_id=" +
    blockfrost_project_id;
  var width = 600;
  var height = Math.min(800, parseInt(window.outerHeight, 10));
  var left = parseInt(window.outerWidth, 10) / 2 - width / 2;
  var top = (parseInt(window.outerHeight, 10) - height) / 2;
  window.open(
    link,
    "Delegate",
    "width=" +
      width +
      ",height=" +
      height +
      ",toolbar=0,menubar=0,location=0,status=0,scrollbars=1,resizable=1,left=" +
      left +
      ",top=" +
      top
  );
  return (
    <button onClick={() => HandleDelegate()}
      className="relative inline-flex items-center px-4 py-2 rounded-l-md border text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 btn-ghost border-accent hover:border-accent"
      type="button">
      Delegate
    </button>
  );
}

export default HandleDelegate;


