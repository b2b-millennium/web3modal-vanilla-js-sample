const Config = {
  options: {
    walletconnect: {
      infuraId: "5f9fddeec0e24834903952964417b602"

      // for main eth net
      /*
      rpc: {
        1: "https://cloudflare-eth.com"
      }*/
    },
    fortmatic: {
      key: 'pk_test_BE428915DABBCEA5'
    },

    walletlink: {
      // chainId: 4,
      // networkUrl: 'https://rinkeby.infura.io/v3/5f9fddeec0e24834903952964417b602',
      // appName: 'ERC721 Mint Rinkeby',

      // For main eth net
      chainId: 1,
      networkUrl: 'https://cloudflare-eth.com',
      appName: 'ERC721 Mint',
    }
  },

  contractAddress_A: '0x9Fc03D559d01330B0aaC16930c99B79EDbE8A2a1',
  tokenABI_A,

  contractAddress_B: '0xaD501c2d8Eb101137e07AAe6F73985ec20208535',
  tokenABI_B,

  apiEndPoint: 'http://us-central1-gems-802cb.cloudfunctions.net/',
}
