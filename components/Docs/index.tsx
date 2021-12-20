import * as React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
} from '@reach/accordion';
import styles from './styles.module.scss';
import { Link, useLocation, Route, Switch } from 'react-router-dom';
import data from './data';
import { classnames } from './utils';

export default function Docs() {
  const location = useLocation();

  const routes = React.useMemo(() => {
    // { [x: string]: any; introduction?: { name: string; slug: string; children: { overview: { name: string; slug: string; component: () => JSX.Element; section: string; }; gettingHelp: { name: string; slug: string; component: () => JSX.Element; section: string; }; }; }; faq?: { name: string; slug: string; children: { overview: { name: string; slug: string; component: () => JSX.Element; section: string; }; walletconnect: { name: string; slug: string; component: () => JSX.Element; section: string; }; frontrunningProtection: { name: string; slug: string; component: () => JSX.Element; section: string; }; }; }; apiReference?: { name: string; slug: string; children: { useStore: { name: string; slug: string; component: () => JSX.Element; section: string; }; kbarProvider: { name: string; slug: string; component: () => JSX.Element; section: string; }; }; }; }) {
    // @ts-ignore
    function generateRoute(tree) {
      return Object.keys(tree).map((key) => {
        const item = tree[key];
        if (item.children) {
          return generateRoute(item.children);
        }
        return (
          <Route
            key={key}
            path={item.slug.split('#')[0]}
            component={item.component}
          />
        );
      });
    }
    return generateRoute(data);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.toc}>
        <Accordion collapsible multiple defaultIndex={[0, 1, 2]}>
          {Object.keys(data).map((key) => {
            const section = data[key];
            return (
              <AccordionItem key={key}>
                <h3>
                  <AccordionButton>{section.name}</AccordionButton>
                </h3>
                {Object.keys(section.children).length > 0 ? (
                  <AccordionPanel>
                    <ul>
                      {Object.keys(section.children).map((key) => {
                        const child = section.children[key];
                        return (
                          <li key={key}>
                            <Link
                              to={child.slug}
                              className={classnames(
                                // @ts-ignore
                                !child.component && styles.comingSoon,
                                (location.pathname + location.hash).includes(
                                  child.slug,
                                ) && styles.active,
                              )}
                            >
                              {child.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </AccordionPanel>
                ) : null}
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
      <Switch>{routes}</Switch>
    </div>
  );
}
