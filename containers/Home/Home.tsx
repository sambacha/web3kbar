import { FunctionComponent } from 'react';
import { useThemeContext } from '../../hooks/useThemeContext';
import { concatClassNames } from '../../utils';

const Home: FunctionComponent = () => {
  const { isDark, theme } = useThemeContext();
  return (
    <div className="mt-20">
      <h1 className="text-5xl font-bold">Web3 π£Bar</h1>
      <p> </p>
      <h2 className="mt-12 mb-8 text-xl">
        Web3 DApps <span className="line-through">search bar</span> π£ Bar
      </h2>
      <br />

      <h3 className="text-xl">
        {' '}
        type <kbd>CMD</kbd> + <kbd> K </kbd>
        <br />
        type <kbd>T</kbd> + <kbd> 1 </kbd> to get the latest trending asset
        (24hrs)
      </h3>

      <br />
      <h4>web3Bar Emoji Maps</h4>
      <p>
        π± - Exchange <br />
        π£ - Bar <br />
        π³ - whale activity <br />
        π - farming/harvest <br />
        π₯ - heavy trading <br />
      </p>
    </div>
  );
};

export default Home;
