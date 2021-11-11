import { FunctionComponent } from 'react';
import { useThemeContext } from '../../hooks/useThemeContext';
import { concatClassNames } from '../../utils';

const Home: FunctionComponent = () => {
  const { isDark, theme } = useThemeContext();
  return (
    <div className="mt-20">
      <h1 className="text-5xl font-bold">Web3 🍣Bar</h1>
      <h2 className="mt-12 mb-8 text-xl">
        Web3 DApps <span className="line-through"> search ba r</span> 🍣 Bar
      </h2>
      <h3 className="text-xl"> type `CMD+K` then `T + 1` to get the latest trending asset (24hrs) </h3>
    </div>

    
  );
};

export default Home;

