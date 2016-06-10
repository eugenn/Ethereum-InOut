var accounts;
var inAccount;
var outAccount;
var balance;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function refreshBalance() {
  var meta = MyToken.deployed();

  setBalanceFromAddr(accounts[0], "eBalance1");
  setBalanceFromAddr(accounts[1], "eBalance2");

  setBalanceFromAddr(inAccount, "inBalance");

  getTokenBalance(accounts[0],"tBalance1");
  getTokenBalance(accounts[1],"tBalance2");


  getHoldersBalance();
  getTotalTokens();
  getHoldersQuantity();

  holder0();
  holder1();

  //var balOut = web3.eth.getBalance(outAccount).toNumber();
  //balOut = web3.fromWei(balOut, "ether");
  //
  //var outBalance_element = document.getElementById("outBalance");
  //outBalance_element.innerHTML = balOut;

  document.getElementById("mainContract").innerHTML=meta.address;

};

function getHoldersBalance() {
  var meta = MyToken.deployed();

  meta.getHoldersBalance.call().then(function(value) {
    var balance_element = document.getElementById("outBalance");
    balance_element.innerHTML = value.valueOf();

  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting balance; see log.");
  });
}

function getTotalTokens() {
  var meta = MyToken.deployed();

  meta.getTotalSupply.call().then(function(value) {
    document.getElementById("totalSupply").innerHTML=value;
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting balance; see log.");
  });
}

function getHoldersQuantity() {
  var meta = MyToken.deployed();
  meta.getHoldersSize.call().then(function(value) {
    var balance_element = document.getElementById("holders");
    balance_element.innerHTML = value.valueOf();

  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting balance; see log.");
  });
}

function sendEther() {
  var meta = MyToken.deployed();

  var amount = parseInt(document.getElementById("amount").value);
  var sender = document.getElementById("sender").value;
  //var receiver = document.getElementById("receiver").value;

  setStatus("Initiating transaction... (please wait)");

  web3.eth.sendTransaction(
      {
        from: sender,
        value:web3.toWei(amount,'ether'),
        to: meta.address,
        data: '0x0000000000000000000000000000000000000000'
      },
      function(error, result){
        if(!error) {
          console.log(result);
          refreshBalance();
        }
        else
          setStatus("Error sending coin; see log.")
      }
      );


}

function sendCoin() {
  //var meta = MyToken.deployed();
  //
  //var amount = parseInt(document.getElementById("amount").value);
  //var receiver = document.getElementById("receiver").value;
  //
  //setStatus("Initiating transaction... (please wait)");

  //meta.sendCoin(receiver, amount, {from: account}).then(function() {
  //  setStatus("Transaction complete!");
  //  refreshBalance();
  //}).catch(function(e) {
  //  console.log(e);
  //  setStatus("Error sending coin; see log.");
  //});
};

function award() {
  var meta = MyToken.deployed();

  meta.sendToHolders.call().then(function(val) {
    setStatus("Transaction complete!");
    refreshBalance();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error sending coin; see log.");
  });
}

function setBalanceFromAddr(account, elBalance) {
  var bal = web3.eth.getBalance(account).toNumber();
  bal = web3.fromWei(bal, 'ether');

  var balance_element = document.getElementById(elBalance);
  balance_element.innerHTML = bal;
}

function getTokenBalance(account, elBalance) {
  var meta = MyToken.deployed();

  meta.getTokenBalance.call(account, {from: account}).then(function(value) {
    var balance_element = document.getElementById(elBalance);
    balance_element.innerHTML = value.valueOf();

  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting balance; see log.");
  });
}

function holder0() {
  var meta = MyToken.deployed();

  meta.getHolder0.call(outAccount, {from: outAccount}).then(function(value) {
    var balance_element = document.getElementById('holder0');
    balance_element.innerHTML = value.valueOf();

  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting balance; see log.");
  });
}

function holder1() {
    var meta = MyToken.deployed();

    meta.getHolder1.call(outAccount, {from: outAccount}).then(function(value) {
      var balance_element = document.getElementById('holder1');
      balance_element.innerHTML = value.valueOf();

    }).catch(function(e) {
      console.log(e);
      setStatus("Error getting balance; see log.");
    });

}

function setInwallet() {
  var meta = MyToken.deployed();

  var inAddress = document.getElementById("inwallet").value;

  inAccount = inAddress;

  meta.setInwallet(inAddress, {from: inAddress}).then(function() {
    setStatus("wallet set");
    var inAddrEl = document.getElementById("inAddress");
    inAddrEl.innerHTML = inAddress;

    refreshBalance();


  }).catch(function(e) {
    console.log(e);
    setStatus("Error sending coin; see log.");
  });
};

window.onload = function() {
  var meta = MyToken.deployed();

  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    inAccount = accounts[2];


    meta.setInwallet(inAccount, {from: inAccount}).then(function() {
      setStatus("wallet set");
      var inAddrEl = document.getElementById("inAddress");
      inAddrEl.innerHTML = inAccount;

    });

    meta.getHoldersContract.call().then(function(value) {
      var balance_element = document.getElementById("outManagerAddr");
      balance_element.innerHTML = value.valueOf();

      outAccount = value.valueOf();

      web3.eth.sendTransaction(
          {
            from: accounts[3],
            value:web3.toWei(50,'ether'),
            to: outAccount,
            data: '0x0000000000000000000000000000000000000000'
          },
          function(error, result){
            if(!error) {
              console.log(result);
              refreshBalance();
            }
            else
              setStatus("Error sending coin; see log.")
          }
      );
    }).catch(function(e) {
      console.log(e);
      setStatus("Error getting balance; see log.");
    });

    });

};
