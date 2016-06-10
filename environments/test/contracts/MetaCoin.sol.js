// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"tokenName","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[{"name":"tknName","type":"string"}],"type":"constructor"}],
    binary: "60a060405260046060527f54657374000000000000000000000000000000000000000000000000000000006080526001805460008290527f546573740000000000000000000000000000000000000000000000000000000882556100b4907fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf66020600283861615610100026000190190931692909204601f01919091048101905b8082111561018d57600081556001016100a0565b505060405161042f38038061042f833981016040528080518201919060200150506127106000600050600032600160a060020a0316815260200190815260200160002060005081905550604060405190810160405280600481526020017f546573740000000000000000000000000000000000000000000000000000000081526020015060016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061019157805160ff191660081785555b506101c19291506100a0565b5090565b82800160010185558215610181579182015b828111156101815782518260005055916020019190600101906101a3565b50505061025d806101d26000396000f3606060405260e060020a60003504636c02a931811461003c5780637bd703e81461009957806390b98a11146100c4578063f8b2cb4f146100f3575b005b60408051600180546020600282841615610100026000190190921691909104601f810182900482028401820190945283835261011993908301828280156101d85780601f106101ad576101008083540402835291602001916101d8565b610187600435600073ebb09db1bcaaa0efcfa6d6115295a6ecd9bf87fb6396e4ee3d6101e0846100fa565b61019960043560243533600160a060020a03166000908152602081905260408120548290101561022557610257565b6101876004355b600160a060020a0381166000908152602081905260409020545b919050565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156101795780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b604080519115158252519081900360200190f35b820191906000526020600020905b8154815290600101906020018083116101bb57829003601f168201915b505050505081565b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f4156100025750506040515191506101149050565b5033600160a060020a039081166000908152602081905260408082208054859003905591841681522080548201905560015b9291505056",
    unlinked_binary: "60a060405260046060527f54657374000000000000000000000000000000000000000000000000000000006080526001805460008290527f546573740000000000000000000000000000000000000000000000000000000882556100b4907fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf66020600283861615610100026000190190931692909204601f01919091048101905b8082111561018d57600081556001016100a0565b505060405161042f38038061042f833981016040528080518201919060200150506127106000600050600032600160a060020a0316815260200190815260200160002060005081905550604060405190810160405280600481526020017f546573740000000000000000000000000000000000000000000000000000000081526020015060016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061019157805160ff191660081785555b506101c19291506100a0565b5090565b82800160010185558215610181579182015b828111156101815782518260005055916020019190600101906101a3565b50505061025d806101d26000396000f3606060405260e060020a60003504636c02a931811461003c5780637bd703e81461009957806390b98a11146100c4578063f8b2cb4f146100f3575b005b60408051600180546020600282841615610100026000190190921691909104601f810182900482028401820190945283835261011993908301828280156101d85780601f106101ad576101008083540402835291602001916101d8565b610187600435600073__ConvertLib____________________________6396e4ee3d6101e0846100fa565b61019960043560243533600160a060020a03166000908152602081905260408120548290101561022557610257565b6101876004355b600160a060020a0381166000908152602081905260409020545b919050565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156101795780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b604080519115158252519081900360200190f35b820191906000526020600020905b8154815290600101906020018083116101bb57829003601f168201915b505050505081565b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f4156100025750506040515191506101149050565b5033600160a060020a039081166000908152602081905260408082208054859003905591841681522080548201905560015b9291505056",
    address: "0xe2f6a8cd60d16c6d3584d48bdba17ff8c276188f",
    generated_with: "2.0.9",
    contract_name: "MetaCoin"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("MetaCoin error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.MetaCoin = Contract;
  }

})();