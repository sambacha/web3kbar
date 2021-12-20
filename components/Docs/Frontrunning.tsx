import * as React from 'react';
import Code from './Code';

export default function Frontrunning() {
  return (
    <div>
      <h1>Frontrunning Protection</h1>
      <p>
        When a user searches for something in kbar, the result is a list of
        actions. These actions are represented by a simple object data
        structure.
      </p>
      <p>
        You don't need to know too much of the specifics of{' '}
        <code>OpenMevProvider</code> – we abstract most of this away.
      </p>
      <p>All you need to know is:</p>
      <ul>
        <li>
          RPC Endpoint used is <code>api.sushirelay.com/v1</code>
        </li>
        <li>
          You can access it without using the frontend via the{' '}
          <code>prepareBundleRequest</code> hook
        </li>
      </ul>
      <p>
        Trades submitted are categorized according to their function calls,
        implemented by <code>0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F</code>{' '}
        above. This determines how Rebates work.
      </p>
      <h3>swapExactTokensForTokens</h3>
      <Code code={`Gas Rebate Mechanism`} />

      <Code
        code={`Interface = [
              swapTokensForExactETH(
                amountOut: BigNumberish,
                amountInMax: BigNumberish,
                path: string[],
                to: string,
                deadline: BigNumberish,
                overrides?: Overrides
              ): Promise<ContractTransaction>;
            
              "swapTokensForExactETH(uint256,uint256,address[],address,uint256)"(
                amountOut: BigNumberish,
                amountInMax: BigNumberish,
                path: string[],
                to: string,
                deadline: BigNumberish,
                overrides?: Overrides
              ): Promise<ContractTransaction>;
            
              swapTokensForExactTokens(
                amountOut: BigNumberish,
                amountInMax: BigNumberish,
                path: string[],
                to: string,
                deadline: BigNumberish,
                overrides?: Overrides
              ): Promise<ContractTransaction>;
            
              "swapTokensForExactTokens(uint256,uint256,address[],address,uint256)"(
                amountOut: BigNumberish,
                amountInMax: BigNumberish,
                path: string[],
                to: string,
                deadline: BigNumberish,
                overrides?: Overrides
              ): Promise<ContractTransaction>;
);
`}
      />
      <p>swapExactTokensForTokens 100</p>

      <h3>swapExactTokensForETH</h3>
      <p>swapExactTokensForETH 100</p>

      <h3>swapExactETHForTokens</h3>
      <p>swapExactETHForTokens 100</p>

      <h3>swapETHForExactTokens</h3>
      <p>swapETHForExactTokens 100</p>
      <h3>Transaction Pricing</h3>
      <p>
        While it is good to have a set of actions registered up front and
        available globally, sometimes you will want to have actions available
        only when on a specific page, or even when a specific component is
        mounted.
      </p>
      <Code code={`Transaction Pricing`} />
      <p>
        Transaction pricing data is gathered from api.txprice.com{' '}
        <code>blockPrices[0].estimatedPrices[0].confidence[3]</code> hook.
        Results look like:
        <Code
          code={`{
            "confidence": 95,
            "price": 107,
            "maxPriorityFeePerGas": 2.52,
            "maxFeePerGas": 212.92
          }
  `}
        />
        This dynamically adds and removes actions based on where the hook lives.
      </p>
    </div>
  );
}
