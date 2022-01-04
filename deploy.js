//MNEMONIC='<MNEMONIC>' URL_NETWORK='<https://rinkeby.infura.io/v3/a...>' node deploy.js
//or
//export MNEMONIC='<MNEMONIC>'
//export URL_NETWORK='<URL_NETWORK>'
//node deploy.js
const MNEMONIC = process.env.MNEMONIC;
const URL_NETWORK = process.env.URL_NETWORK;

const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(MNEMONIC, URL_NETWORK);

const web3 = new Web3(provider);