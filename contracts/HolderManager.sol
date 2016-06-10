contract HolderManager {
    address mContract;
    address[] public holders;
    uint fee = 5000 finney;

    function HolderManager(
        address mainContract
) {
        mContract = mainContract;
    }

    function appendHolder(address holder) {
        holders.push(holder);
    }


    function toHolders() {

        holders[0].send(10000000000000000000);
        holders[1].send(1100000000000000000000);

        //tokensBalance = 1 ether;
        //uint contractBalance = this.balance;


        //uint award = (contractBalance - fee) / tokensBalance;

        /*for (var i = 0; i < holders.length; i++ ) {
            address hr = holders[i];

            holders[i].send(10 ether);

        }*/

    }

    function getHolder0() returns (address) {
        return holders[0];

    }

    function getHolder1() returns (address) {
        return holders[1];

    }

    function getBalance() returns (uint) {
        return this.balance;
    }

    function getHoldersSize() returns (uint) {
        return holders.length;
    }
}