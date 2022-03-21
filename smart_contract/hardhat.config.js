// https://eth-ropsten.alchemyapi.io/v2/vM-nf9zGsuzbRgM3qwMCPzqYNbIhxFeJ

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/vM-nf9zGsuzbRgM3qwMCPzqYNbIhxFeJ",
      accounts: [
        "88400dc81f99efc00534525fc1bcb601e8ad91814cc88a9ccccdb153e1f3c5bd",
      ],
    },
  },
};
