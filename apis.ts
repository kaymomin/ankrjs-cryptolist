import AnkrscanProvider from '@ankr.com/ankr.js';
import type { Blockchain } from '@ankr.com/ankr.js/dist/types';

const provider = new AnkrscanProvider('');

//defining the list of supported blockchains
const listOfChains: Blockchain[] = ['eth', 'arbitrum', 'avalanche', 
'bsc', 'fantom', 'polygon', 'syscoin', 'optimism',];

//key-value pair mapping of chains to their native symbols
export const chainsToNativeSymbols: { [key in Blockchain]: string } = {
  eth: 'ETH',
  arbitrum: 'ETH',
  avalanche: 'AVAX',
  bsc: 'BNB',
  fantom: 'FTM',
  polygon: 'MATIC',
  syscoin: 'SYS',
  optimism: 'Opt',
};

//getCurrencies function
export const getCurrencies = async (

  blockchain: Blockchain
) => {
  return provider.getCurrencies({

    blockchain,
  });
};
