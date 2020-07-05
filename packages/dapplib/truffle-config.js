require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast food ski strike rival pizza honey guess area slot gas'; 
let testAccounts = [
"0x33c4e8e560bddba5625e18920afe68c6f2b3d9e5b9c4d4e11aa2b7e9cbb9ca67",
"0x122c875bce54f8d95e441535f3b47b695d95e42c17bcbec8a853a531973fc580",
"0x8ff410afb832ec259ebc94d391003caac729929f98602015e0db05b3504d9d75",
"0x1a8616f69311b8a75b046d050f6357dc116f167672d9c1de2ad898f3130ba7c8",
"0x411f589e67c19850cb04583ace22001a80c70822ea2829dc3e1d69c232a8b7ba",
"0x2638fd19996fbbaff9c4dd8076542df30b63ac97616d502c21945ea32512c7f1",
"0x433b3605ad0f87b75340f97b22c895fa34bf245dcf9b32cb84e2e664916f6df2",
"0x47493ec4d82a999067b73a71c0032b3b7e770cc823c52221f6b5f3096c632a89",
"0x7e16065858db5059be86c7b0556b913dc89105805caccf3b0921195b5632eb9d",
"0x0aa84227c9fb874055371c6f15ea0a95d3528c5b6c2b2492dcd7cc131674c5a7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
