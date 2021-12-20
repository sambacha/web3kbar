import { FunctionComponent } from 'react';
import { useThemeContext } from '../../hooks/useThemeContext';
import { concatClassNames } from '../../utils';

const Home: FunctionComponent = () => {
  const { isDark, theme } = useThemeContext();
  return (
    <div className="mt-20">
      <h1 className="text-5xl font-bold">Web3 🍣Bar</h1>
      <p> </p>
      <h2 className="mt-12 mb-8 text-xl">
        Web3 DApps <span className="line-through">search bar</span> 🍣 Bar
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
        🍱 - Exchange <br />
        🍣 - Bar <br />
        🐳 - whale activity <br />
        🚜 - farming/harvest <br />
        🔥 - heavy trading <br />
      </p>
    </div>
  );
};

export default Home;
