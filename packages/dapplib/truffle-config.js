require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success stomach response museum unusual gloom enter army giant'; 
let testAccounts = [
"0x332e1dc2e875c68dcc0770a79b968968e07aa65fe50f6cd268a4932c8d568910",
"0x6929dcb4ae7f1bd781e3d576ec452d494316f2cac39bb628f9674f73f72d33f0",
"0x5b46f6ac5c86736e3b92627465878e97813a22e17c82ad7c39638d66a72192fd",
"0x0b67aa6e98551999d8ed42a21b7730d05101df96e4d3f4683d1982e846502ac4",
"0x6b9d0124396910548af73531ccc97568cd0aab647f2485a81f949016358fb3ca",
"0x7ef2835ca907333f0bb86c9322bc27091f68fe8e4210bdf6edec7f28aad1f0e5",
"0x36d5a816db0647b33e41739824fa9e773d965116e10de293e2de9c07f95aa1de",
"0x4efc0733ce2b5c877144d5fc0f20ecdcd2919426d4f8e61f04e59d38613d9364",
"0xcf242132aa12c9b4c12fee2df69bd9a270343e62479ec1e0752872fc5f2fce7b",
"0xbe8c5244101b40ffb2e61543373d84ec9388c3d544768734a14da0ca285a9673"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

