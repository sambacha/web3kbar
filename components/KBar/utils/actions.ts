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
      icon: `🍱`,
      perform: () => router.push('/'),
    },
    {
      id: 'resumeAction',
      name: 'Resume',
      shortcut: ['r'],
      keywords: 'resume cv',
    },
    createAction({
      name: 'Sushi Relay',
      shortcut: ['q', 't'],
      keywords: 'sushiswap',
      icon: `🍣`,
      perform: () => window.open('https://app.sushirelay.com', '_blank'),
    }),
    {
      name: 'Manifold Finance',
      id: 'FOLD',
      shortcut: ['t', '1'],
      keywords: 'trending assets',
      icon: `🔥`,
      perform: () =>
        window.open(
          'https://analytics.sushi.com/tokens/0xd084944d3c05cd115c09d072b9f44ba3e0e45921',
          '_blank',
        ),
    },
    {
      name: 'Lido Finance',
      id: 'LDO',
      shortcut: ['t', '2'],
      keywords: 'trending assets',
      icon: `🐳`,
      perform: () =>
        window.open(
          'https://analytics.sushi.com/tokens/0x5a98fcbea516cf06857215779fd812ca3bef1b32',
          '_blank',
        ),
    },
    {
      name: 'Olympus',
      id: 'OHM',
      shortcut: ['t', '3'],
      keywords: 'trending assets',
      icon: `🚜`,
      perform: () =>
        window.open(
          'https://analytics.sushi.com/tokens/0x383518188c0c6d7730d91b2c03a03c837814a899',
          '_blank',
        ),
    },
    {
      name: 'Get Support',
      id: 'Helpdesk',
      shortcut: ['h', '1'],
      keywords: 'help',
      icon: `🐕`,
      perform: () => window.open('https://forms.manifoldfinnce.com', '_blank'),
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
