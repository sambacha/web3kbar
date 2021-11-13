import * as React from "react";
import { useLocation } from "react-router";

export default function Reference() {
  return (
    <div>
      <h1>API Reference</h1>
      <Heading name="Sushi Relay" />
      <p>
        Sushi Relay is built on top of OpenMEV. Sushi Relay provides front running and protection against MEV.
      </p>
      <Heading name="OpenMEV" />
      <p>
        Aggregator of multiple private RPC endpoints, includes Flashbots, Ethermine, Bloxroute and more.
      </p>
      <Heading name="MEV" />
      <p>
        Miner Extracted Value. Front running, sandwich attacks, backrunning and other types of high frequency trading
      </p>
      <Heading name="Provider" />
      <p>
        Ethers EIP-1193 Compliant (see `https://eips.ethereum.org/EIPS/eip-1193``)
      </p>
      <Heading name="RPC" />
      <p>RPC_URL=`https://api.sushirelay.com/v1`</p>
      <Heading name="Networks" />
      <p>Currently supported Networks: Ethereum mainnet (chainId: 0x1)</p>
      <Heading name="hookProvider" />
      <p>
        Accepts a collector function to retrieve specific values from state.
        Only re renders the component when return value deeply changes.
        Provides Internal state management for interfacing with Metamask.
      </p>
    </div>
  );
}

function Heading({ name }) {
  const location = useLocation();
  return (
    <h2
      id={name}
      style={{
        background: location.hash === `#${name}` ? "yellow" : undefined,
      }}
    >
      {name}
    </h2>
  );
}
