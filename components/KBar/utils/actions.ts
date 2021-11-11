import { Action, createAction } from 'kbar';
import { useRouter } from 'next/dist/client/router';

const action = (handleActionTheme: (value: boolean) => void): Action[] => {
  const router = useRouter();

  return [
    {
      id: 'homeAction',
      name: 'Home',
      shortcut: ['h'],
      keywords: 'back',
      perform: () => router.push('/'),
    },
    {
      id: 'resumeAction',
      name: 'Resume',
      shortcut: ['r'],
      keywords: 'resume cv',
      perform: () => router.push('/'),
    },

    createAction({
      name: 'Github',
      shortcut: ['g', 'h'],
      keywords: 'sourcecode',
      perform: () => window.open('#', '_blank'),
    }),
    {
      name: 'iearn DAI',
      address: '0x16de59092dAE5CcF4A1E6439D611fd0653f0Bd01',
      id: 'yDAI',
      shortcut: ['i', 'd'],
      keywords: 'DAI',
      perform: () => window.open('https://yearn.finance/vaults', '_blank'),
    },
    {
      address: '0xd6aD7a6750A7593E092a9B218d66C0A814a3436e',
      name: 'iearn USDC',
      id: 'yUSDC',
      shortcut: ['y', 'c'],
      keywords: 'usdc',
      perform: () => window.open('#', '_blank'),
    },
    {
      id: 'theme',
      name: 'Change theme…',
      shortcut: [],
      keywords: 'interface color dark light theme',
      section: '',
      children: ['darkTheme', 'lightTheme'],
    },
    {
      id: 'darkTheme',
      name: 'Dark',
      shortcut: [],
      keywords: 'dark',
      section: '',
      perform: () => handleActionTheme(true),
      parent: 'theme',
    },
    {
      id: 'lightTheme',
      name: 'Light',
      shortcut: [],
      keywords: 'light',
      section: '',
      perform: () => handleActionTheme(false),
      parent: 'theme',
    },
  ];
};

export default action;
