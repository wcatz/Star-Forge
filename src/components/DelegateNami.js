import React, { Component } from "react";

class Stake extends Component {
  constructor(props) {
    super(props);
    this.helloThere = this.HandleClick.bind(this);
  }

  HandleClick = () => {
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
  };
  render() {
    return (
      <button
        onClick={this.HandleClick}
        className="-ml-px relative inline-flex justify-center items-center px-4 py-2 rounded-md md:rounded-none md:rounded-l-md border text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 btn-ghost border-accent hover:border-accent"
        type="button"
      >
        Delegate
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-500 ml-1 animate-pulse"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
    );
  }
}

export default Stake;
