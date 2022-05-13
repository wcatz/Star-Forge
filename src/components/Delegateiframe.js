function HandleDelegate() {
  var pool_id = "c825168836c5bf850dec38567eb4771c2e03eea28658ff291df768ae";
  var blockfrost_project_id = "5KZZo60WRq8nMsRWNvrvPqyrHtqucJlM";
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
    <button
      className="mx-5 mt-5 btn btn-outline btn-info"
      type="button"
      onClick={HandleDelegate}
    >
      Delegate with Nami
    </button>
  );
}

export default HandleDelegate;
