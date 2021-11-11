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
      keywords: 'resume cv'
    },
    createAction({
      name: 'Sushi Relay',
      shortcut: ['s', 's'],
      keywords: 'sushiswap',
      perform: () => window.open('https://app.sushirelay.com', '_blank'),
    }),
    {
      name: 'Manifold Finance',
      id: 'FOLD',
      shortcut: ['t', '1'],
      keywords: 'trending assets',
      perform: () => window.open('https://analytics.sushi.com/tokens/0xd084944d3c05cd115c09d072b9f44ba3e0e45921', '_blank'),
    },
    {
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
