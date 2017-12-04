var HDWalletProvider = require("truffle-hdwallet-provider");
require("dotenv").config();

var mnemonic = process.env.MNEMONIC;
var token = process.env.INFURA_ACCESS_TOKEN;

module.exports = {
    networks: {
        ropsten: {
            provider: function() {
                return new HDWalletProvider(
                    mnemonic,
                    "https://ropsten.infura.io/" + token
                );
            },
            network_id: 3
        },
        kovan: {
            provider: function() {
                return new HDWalletProvider(
                    mnemonic,
                    "https://kovan.infura.io/" + token,
                    0 // 0x0011...
                );
            },
            network_id: 42
        },
        development: {
            host: "localhost",
            port: 9545,
            network_id: "*" // Match any network id
        }
    }
};