import { ChooseTokens } from "../src/components/ChooseTokens";
import SEO from "../src/components/SEO";

export default function LiquidityPage() {
  return (
    <>
      <SEO title="Liquidity - Soroswap" description="Soroswap Liquidity Pool" />
      <ChooseTokens isLiquidity={true} />
    </>
  );
}
