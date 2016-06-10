// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"holders","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"holder","type":"address"}],"name":"appendHolder","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"tokensBalance","type":"uint256"}],"name":"sendToHolders","outputs":[],"type":"function"}],
    binary: "60606040526706f05b59d3b200006002556101ec8061001e6000396000f3606060405260e060020a600035046312065fe0811461003c5780632a11ced014610052578063e3468ed114610098578063e3c0b907146100dc575b005b30600160a060020a0316315b6060908152602090f35b61004860043560018054829081101561000257506000527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60154600160a060020a031681565b61003a6004356001805480820180835582818380158290116101ad578183600052602060002091820191016101ad91905b808211156101e1576000815584016100c9565b61003a600435600254600160a060020a033016319081038290046000805b60015460ff831610156101e5576001805460ff8416908110156100025760008290527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf601548154600160a060020a0391909116925060ff841690811015610002577fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60154604051600160a060020a03919091169150600090859082818181858883f15050505050600191909101906100fa565b50505091909060005260206000209001600050805473ffffffffffffffffffffffffffffffffffffffff1916831790555050565b5090565b505050505056",
    unlinked_binary: "60606040526706f05b59d3b200006002556101ec8061001e6000396000f3606060405260e060020a600035046312065fe0811461003c5780632a11ced014610052578063e3468ed114610098578063e3c0b907146100dc575b005b30600160a060020a0316315b6060908152602090f35b61004860043560018054829081101561000257506000527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60154600160a060020a031681565b61003a6004356001805480820180835582818380158290116101ad578183600052602060002091820191016101ad91905b808211156101e1576000815584016100c9565b61003a600435600254600160a060020a033016319081038290046000805b60015460ff831610156101e5576001805460ff8416908110156100025760008290527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf601548154600160a060020a0391909116925060ff841690811015610002577fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60154604051600160a060020a03919091169150600090859082818181858883f15050505050600191909101906100fa565b50505091909060005260206000209001600050805473ffffffffffffffffffffffffffffffffffffffff1916831790555050565b5090565b505050505056",
    address: "0x4fa917afc96314e50a080fa3d41f10f1ce08ec0a",
    generated_with: "2.0.9",
    contract_name: "HolderManager"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("HolderManager error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("HolderManager error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("HolderManager error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("HolderManager error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.HolderManager = Contract;
  }

})();
