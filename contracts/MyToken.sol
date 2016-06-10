
contract tokenRecipient { function receiveApproval(address _from, uint256 _value, address _token, bytes _extraData); }

contract owned {
    function owned() { owner = msg.sender; }
    address owner;

    modifier onlyowner { if (msg.sender == owner) _ }
}

contract mortal is owned {
    function kill() { if (msg.sender == owner) suicide(owner); }
}

/*
Contract manage all token holders
 */
contract Holders {
    // array of all token holders
    address[] public holders;

    // fee for contract execution
    uint fee = 500 finney;

    event Award(address trg, uint amount);

    function appendHolder(address holder) {
        holders.push(holder);
    }

    /**
     * Send an award for all token holders.
     */
    function sendToAll(uint tokensBalance) {
        // for contract execution we should keep some ether in the contract balance
        uint award = (this.balance - fee) / tokensBalance;

        for (var i = 0; i < holders.length; i++ ) {
            address adr = holders[i];
            holders[i].send(award);
            Award(adr, award);
        }

    }

    function getSize() returns (uint256) {
        return holders.length;
    }

    function getBalance() returns (uint) {
        return this.balance;
    }

}

contract MyToken is mortal {
    string public standard = 'Token 0.6';
    // token name
    string public name;
    // token symbol
    string public symbol;
    // decimal places
    uint8 public decimals;
    // token price
    uint8 public price = 2;
    // total tokens
    uint256 public totalSupply = 0;

    // token balances
    mapping (address => uint256) public balanceOf;
    // input wallet address
    address public inWallet;

    Holders public holders;

    event Deposit(address from, address to, uint amount);
    event Token(address trg, uint amount);


    function MyToken (
        string tokenName,
        uint8 decimalUnits,
        string tokenSymbol,
        address inputWallet

) {
        name = tokenName;                                   // Set the name for display purposes
        symbol = tokenSymbol;                               // Set the symbol for display purposes
        decimals = decimalUnits;                            // Amount of decimals for display purposes
        inWallet = inputWallet;

        holders = new Holders();
    }

    function getHoldersContract() returns (address) {
        return holders;
    }

    function sendToHolders()  {
        // calcaulate the price of all tokens
        uint bal = totalSupply / price;

        holders.sendToAll(bal);
    }

    /**
     * Get balance of the Holders contract
     */
    function getHoldersBalance() returns (uint) {
        return holders.getBalance();
    }

    /**
     * Get balance in ether
     */
    function getBalanceInEth(address addr) returns(uint) {
        return convert(getTokenBalance(addr),2);
    }

    function getHoldersSize() returns (uint256) {
        return holders.getSize();
    }
    /**
     * Get token balance
     */
    function getTokenBalance(address addr) returns(uint) {
        return balanceOf[addr];
    }

    function setInwallet(address addr) {
        inWallet = addr;
    }

    function setPrice(uint8 nPrice) onlyowner {
        price = nPrice;
    }

    function getTotalSupply() returns (uint) {
        return totalSupply;
    }

    function convert(uint amount,uint conversionRate) returns (uint convertedAmount) {
        return amount * conversionRate;
    }

    function () {
        uint token = msg.value / 1 ether * price;

        totalSupply += token;
        balanceOf[msg.sender] += token;

        Token(msg.sender, token);
        // add a token holder to the array
        holders.appendHolder(msg.sender);

        // send ether to input wallet
        inWallet.send(msg.value);

        Deposit(msg.sender, inWallet, msg.value);
    }


}