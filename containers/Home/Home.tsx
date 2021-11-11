import { FunctionComponent } from 'react';
import { useThemeContext } from '../../hooks/useThemeContext';
import { concatClassNames } from '../../utils';

const Home: FunctionComponent = () => {
  const { isDark, theme } = useThemeContext();
  return (
    <div className="mt-20">
      <h1 className="text-5xl font-bold">Web3 xBar</h1>
      <h3 className="mt-12 mb-8 text-xl">
        Web3 DApp <span className="line-through">search bar</span> xBar .
      </h3>
      <h3 className="text-xl">Embed Token Lists, change networks and more .</h3>
    </div>
  );
};

export default Home;
