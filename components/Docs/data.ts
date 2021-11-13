import Frontrunning from "./Frontrunning";
import APIReference from "./APIReference";
import GettingHelp from "./GettingHelp";
import Overview from "./Overview";
import Wallets from "./Wallets";

const data = {
  introduction: {
    name: "Introduction",
    slug: "/docs",
    children: {
      overview: {
        name: "Overview",
        slug: "/docs/overview",
        component: Overview,
        section: "Overview",
      },
      gettingHelp: {
        name: "Getting help",
        slug: "/docs/getting-help",
        component: GettingHelp,
        section: "Overview",
      },
    },
  },
  faq: {
    name: "FAQ",
    slug: "/faq",
    children: {
      overview: {
        name: "metamask",
        slug: "/docs/faq/metamask",
        component: Wallets,
        section: "FAQ",
      },
      walletconnect: {
        name: "WalletConnect",
        slug: "/docs/faq/walletconnect",
        component: Wallets,
        section: "FAQ",
      },
      frontrunningProtection: {
        name: "Frontrunning",
        slug: "/docs/faq/state",
        component: Frontrunning,
        section: "FAQ",
      },
    },
  },
  apiReference: {
    name: "API Reference",
    slug: "/api",
    children: {
      useStore: {
        name: "useStore",
        slug: "/docs/api/#useStore",
        component: APIReference,
        section: "API Reference",
      },
      kbarProvider: {
        name: "KBarProvider",
        slug: "/docs/api/#KBarProvider",
        component: APIReference,
        section: "API Reference",
      },
    },
  },
};

export default data;
