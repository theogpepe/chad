import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Arial, sans-serif;
    line-height: 1.8; /* Global line-height adjustment */    src: url('/fonts/DKFrozenMemory.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: Arial, sans-serif;
    line-height: 1.8; /* Global line-height adjustment */    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`;

const MainContainer = styled.div`
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SectionContainer = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const TransactionLink = styled.a`
  color: #ffff00;
  text-decoration: underline;
  &:hover {
    color: #ccc;
  }
`;

const Paragraph = styled.p`
  line-height: 1.8; /* Adjust line-height for better spacing */
  margin-bottom: 20px; /* Add spacing between paragraphs */
`;


const ImageContainer = styled.div`
  margin: 20px auto;
`;

const ButtonLink = styled.a`
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  background-color: #eee;
  color: #333;
  text-decoration: none;
  border-radius: 5px;
  font-family: 'DK Frozen Memory', sans-serif;
  &:hover {
    background-color: #ddd;
  }
`;
export default function Info() {
  return (
    <>
      <Head>
        <title>$CHAD Token - Info Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <MainContainer>
        <SectionContainer>
          <Title>What is $CHAD Token?</Title>
          <Paragraph>
            $CHAD is a meme token inspired by the internet's most recognizable meme character. It is a community-driven token with zero taxes, no team, and a renounced contract—making it a true decentralized asset.
          </Paragraph>
          <ImageContainer>
            <Image src="/chad.png" alt="$CHAD Meme" width={300} height={300} />
          </ImageContainer>
          <Paragraph>
            Unlike other tokens, $CHAD is purely driven by memes and the community, offering a fun and lighthearted experience in the world of crypto.
          </Paragraph>
        </SectionContainer>

        <SectionContainer>
          <Title>Fixed Supply + Ownership Renounced</Title>
          <p>
            $CHAD Token operates with a fixed supply and renounced ownership, ensuring that no administrative changes can ever be made to the contract. The following transactions serve as proof for these key actions:
          </p>
          <h3>Setting Difficulty to Maximum</h3>
          <p>
            The smart contract's difficulty for minting new tokens has been set to the maximum possible value, effectively preventing the creation of any new tokens.
          </p>
          <p>
            <strong>Transaction:</strong> 
            <TransactionLink href="https://etherscan.io/tx/0x5d09fcb7694f80449c25b600bd4a48b16589d4b027db947781125cb0e1a5c6f4" target="_blank">
              Set Difficulty to Maximum
            </TransactionLink>
          </p>
          <p><strong>Function Called:</strong> setDifficulty(uint256 _amount)</p>
          <p><strong>Method ID:</strong> 0x602512e1</p>
          <p><strong>Parameter (_amount):</strong> ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</p>

          <h3>Renouncing Ownership</h3>
          <p>
            Ownership of the smart contract has been renounced, meaning no one holds the authority to modify or control the contract's parameters, ensuring decentralization and immutability.
          </p>
          <p>
            <strong>Transaction:</strong> 
            <TransactionLink href="https://etherscan.io/tx/0xdd5d3b01dbaaa81e24ea6d9c0eedb351a21949dae5555f83c619a06d71da5c7c" target="_blank">
              Renounce Ownership
            </TransactionLink>
          </p>
          <p><strong>Function Called:</strong> setNewOwner(address _newOwner)</p>
          <p><strong>Method ID:</strong> 0xf5a1f5b4</p>
          <p><strong>Parameter (_newOwner):</strong> 0000000000000000000000000000000000000000</p>

          <h3>Implications and Conclusion</h3>
          <p>
            As a result of these transactions:
          </p>
          <ul>
            <li><strong>Minting Capped:</strong> No new $CHAD tokens can be minted, ensuring a fixed supply.</li>
            <li><strong>Ownership Renounced:</strong> The contract is now immutable, and no administrative changes can be made, enhancing security for the community.</li>
          </ul>
          <p>
            These measures provide transparency and build trust in the $CHAD ecosystem by guaranteeing that no further changes can be made to its core rules.
          </p>
        </SectionContainer>

        <SectionContainer>
          <Title>Where to Buy?</Title>
          <ButtonLink href="https://app.uniswap.org/#/swap?outputCurrency=0x5c888fa2e6f9f0880321683d1efa12e936fd5051" target="_blank" rel="noopener noreferrer">
            Buy $CHAD on Uniswap
          </ButtonLink>
        </SectionContainer>

        <SectionContainer>
          <Title>Disclaimer</Title>
          <Paragraph>
            $CHAD is a meme coin with no intrinsic value or expectation of financial return. It’s purely for fun and entertainment purposes, and should not be considered an investment.
          </Paragraph>
        </SectionContainer>

        <p>© 2024 $CHAD Token. All rights reserved.</p>
      </MainContainer>
    </>
  );
}
