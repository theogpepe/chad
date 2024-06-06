import React, { useEffect, useState } from "react";
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const MainContainer = styled.div`
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SectionContainer = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 20px auto;
  padding: 20px;
  color: #f0f0f0;
  background-color: #333;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  display: block;
  margin: 20px auto;
`;

const Banner = styled.div`
  width: 100%; /* Set the width of the container to 100% of its parent */
  overflow: hidden; /* Ensures that nothing extends beyond the boundary of the container */
  img {
    width: 100%; /* Stretches the image to fill the container */
    height: auto; /* Maintains the aspect ratio of the image */
    display: block; /* Removes any space below the image */
  }
`;
const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 38px;
  color: #ffff00;
  font-family: 'DK Frozen Memory', sans-serif;

  @media (max-width: 768px) {
    font-size: 24px;
  }
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

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  flex-direction: column; // Default to vertical stacking

  @media (min-width: 1024px) { // Adjust breakpoint as needed for larger screens
    flex-direction: row; // Switch to row layout on larger screens
    justify-content: space-between;
    &:nth-child(odd) {
      flex-direction: row-reverse; // Reverse order for alternating layout
    }
  }
`;
const DescriptionContainer = styled.div`
  padding: 20px;
  background-color: #222;
  border-radius: 8px;
  margin-bottom: 20px;
  color: #ffffff;
`;

const GifContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
`;

const Gif = styled.img`
  width: 100%;
  height: auto;
`;

const SocialContainer = styled.div`
  margin-top: 20px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialIcon = styled.img`
  width: 32px;
  height: 32px;

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

const LogoText = styled.h1`
  margin-left: 10px;
  font-size: 32px;
  color: #ffff00;
  font-family: 'DK Frozen Memory', sans-serif;
`;

const PartnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DK Frozen Memory';
    src: url('/fonts/DKFrozenMemory.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'DK Frozen Memory', sans-serif;
    margin: 0;
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


const Address = styled.h1`
  display: block; /* Ensures the element is block-level */
  font-size: clamp(16px, 4vw, 2vw); /* Responsive font size adjusts between 16px and 2vw */
  word-wrap: break-word; /* Allows the address to break and wrap onto the next line */
  overflow: hidden; /* Hides any text that overflows the element's box */
  text-overflow: ellipsis; /* Adds an ellipsis (...) to indicate text has been clipped */
  white-space: nowrap; /* Keeps the text on a single line until it needs to overflow */
  max-width: 100%; /* Ensures the element does not exceed the width of its container */
  text-align: center; /* Centers the text within the element */
  color: #999; /* Sets the text color, adjust as needed */
  margin: 10px 0; /* Adds vertical spacing around the address */
`;


// Component for social links
const SocialLinks = () => {
  return (
    <SocialContainer>
      <SocialRow>
        <SocialLink href="https://app.uniswap.org/#/swap?outputCurrency=0x5c888fa2e6f9f0880321683d1efa12e936fd5051" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/socials/uniswap-logo.png" alt="Uniswap" />
        </SocialLink>
        <SocialLink href="https://etherscan.io/token/0x5c888fa2e6f9f0880321683d1efa12e936fd5051" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/etherscan-logo.png" alt="X" />
        </SocialLink>
        <SocialLink href="https://x.com/thechadtoken" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/socials/x-logo.png" alt="X" />
        </SocialLink>
        <SocialLink href="https://t.me/chadtoken2020" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/socials/telegram-logo.png" alt="Telegram" />
        </SocialLink>
        <SocialLink href="https://www.dextools.io/app/es/ether/pair-explorer/0xf532da4460c965379593d38f89afae437fb54700" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/socials/dextools-logo.png" alt="Dextools" />
        </SocialLink>
        <SocialLink href="https://github.com/theogpepe" target="_blank" rel="noopener noreferrer">
          <SocialIcon src="/socials/github-logo.png" alt="GitHub" />
        </SocialLink>
      </SocialRow>
    </SocialContainer>
  );
};

const TimeDisplay = styled.div`
  background-color: #111; // Light grey background
  color: #333; // Dark text color for contrast
  padding: 10px 20px;
  border-radius: 8px;
  margin: 10px 0;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

const TimeSinceDeployment = () => {
  const [timeSinceDeployment, setTimeSinceDeployment] = useState("");

  useEffect(() => {
    const deploymentTimestamp = 1602341923; // Replace with actual deployment timestamp
    const deploymentTime = new Date(deploymentTimestamp * 1000);

    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = now.getTime() - deploymentTime.getTime();

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeSinceDeployment(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TimeDisplay>
    <LogoText>Deployed 10-10-2020</LogoText>
    <LogoText>Age: {timeSinceDeployment}</LogoText>
    </TimeDisplay>

  );
};

const TokenomicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // Allows the boxes to wrap onto the next line
  justify-content: center; // Centers the boxes within the container
  gap: 20px; // Adds space between the boxes
  padding: 20px;
  margin-top: 20px;
`;

const TokenomicsBox = styled.div`
  background-color: #111;
  color: #fff; // Ensures text is readable against the dark background
  border: 1px solid #ddd;
  padding: 15px;
  flex: 1 1 22%; // Allows the box to grow and shrink but bases its size on roughly 22% of the container width
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  min-width: 150px; // Prevents the boxes from becoming too small on narrow screens

  @media (max-width: 768px) {
    flex: 1 1 45%; // Changes the basis to 45%, causing only two boxes per row on smaller screens
  }
`;
export default function Home() {
  return (
    <>
      <Head>
        <title>$CHAD Token - Embrace the Meme</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <MainContainer>
        <SectionContainer>
          <Logo>
            <Image src="/chad.png" alt="$CHAD Token Logo" width={150} height={150} />
            <LogoText>$CHAD Token</LogoText>
          </Logo>
          <Title>Embrace the Meme</Title>
          <DescriptionContainer>
            <Address>0x5c888fa2e6f9f0880321683d1efa12e936fd5051</Address>
            <TimeSinceDeployment />
            <TokenomicsContainer>
              <TokenomicsBox>Supply: 181,928.8 $CHAD</TokenomicsBox>
              <TokenomicsBox>0% Tax</TokenomicsBox>
              <TokenomicsBox>Deflationary</TokenomicsBox>
              <TokenomicsBox>LP: +5 Pools</TokenomicsBox>
            </TokenomicsContainer>
            <ContentContainer>
              <DescriptionContainer>
                <p>Explore the power of meme-driven cryptocurrency with $CHAD. Chad is tired of watching everyone play hot potato with the endless derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins. The Inu&apos;s have had their day.</p>
              </DescriptionContainer>
              <DescriptionContainer>
                <p>It&apos;s time for the most recognizable meme in the world to take his reign as king of the internet. Chad is here to make memecoins great again.</p>
                <p>Zero taxes and contract renounced, $CHAD is a coin for the people, forever. Fueled by pure memetic power, let $CHAD show you the way.</p>
              </DescriptionContainer>
              <ImageContainer>
                <Image src="/chad.png" alt="Chad Meme" width={300} height={300} />
              </ImageContainer>
            </ContentContainer>
            <ContentContainer>
              <DescriptionContainer>
                <p>From humble beginnings as a simple internet joke to becoming a viral sensation, the Chad meme has evolved significantly over the years. Originally depicted as a hyper-masculine, often abrasive character, Chad has been reimagined in numerous forms across various platforms, each reflecting different aspects of internet culture.</p>
              </DescriptionContainer>
              <ImageContainer>
                <Image src="/chadstar.png" alt="Chad History" width={300} height={300} />
              </ImageContainer>
            </ContentContainer>
            <SocialLinks />
            <ButtonLink href="https://app.uniswap.org/#/swap?outputCurrency=0x5c888fa2e6f9f0880321683d1efa12e936fd5051" target="_blank" rel="noopener noreferrer">Buy $CHAD</ButtonLink>
          </DescriptionContainer>
        </SectionContainer>
        <SectionContainer>
          <ContentContainer>
            <DescriptionContainer>
              <p>Our Chad, however, breaks from the traditional mold to emphasize positivity and inclusivity—key aspects that set us apart in the meme-driven cryptocurrency space.</p>
              <p>Our commitment to reshaping the narrative around what a meme can represent is central to our success. By steering away from any negative connotations and focusing on a family-friendly portrayal, we foster a broader acceptance and appeal. This approach not only aligns with modern values but also cements our position as pioneers in a rapidly evolving market.</p>
            </DescriptionContainer>
            <ImageContainer>
              <Image src="/chadtri.png" alt="Chad Positive" width={300} height={300} />
            </ImageContainer>
          </ContentContainer>
          <ContentContainer>
            <DescriptionContainer>
              <p>Why will we succeed? Because at $CHAD, we&apos;re more than just a meme token; we are a symbol of change. By leveraging the universal language of memes, we connect with a global audience while promoting a safe, friendly, and engaging online experience. We&apos;re building a community where everyone feels welcome, valued, and entertained.</p>
            </DescriptionContainer>
            <ImageContainer>
              <Image src="/chadsize.png" alt="Chad Community" width={300} height={300} />
            </ImageContainer>
          </ContentContainer>
        </SectionContainer>

        <SectionContainer>
          <h2>Chad Token Ecosystem Leadership</h2>
          <Banner>
            <Image src="/banner.png" alt="Meme Banner" width={600} height={200} />
          </Banner>
          <p>As the original Chad token from 2020, we not only play a pivotal role in collecting tax across the entire ecosystem and maintaining a deflationary supply.</p>
          <br></br>
          <p>In demonstrating our dominance and commitment to the ecosystem, we have strategically purchased a significant percentage of the supply of other Chad tokens. This move asserts our position as the undisputed leader. These tokens have been added to liquidity pools with our token on PepeX to enhance stability and visibility within the marketplace.</p>
          <br></br>
          <h2>Chad Index</h2>
          <br></br>

          <p>The Chad token serves as an index within the ecosystem, promoting liquidity and stability by integrating with other Chad tokens.</p>
          <ImageContainer>
            <Image src="/chad.png" alt="Chad1 Logo" width={100} height={100} />
            <Image src="/chadred.png" alt="Chad2 Logo" width={100} height={100} />
            <Image src="/chadtoken.png" alt="Chad3 Logo" width={100} height={100} />
            <p>+ (SWOT Analysis of 6 Chads)
              <ButtonLink href="#buy"><a href="https://docs.pepex.app/wojak-pepe-chad/chad-chad/chad-index" target="_blank" rel="noopener noreferrer">LEARN</a></ButtonLink>
            </p>
          </ImageContainer>
          <h2>Comparative Overview of Chad Tokens</h2>
          <br></br>
          <p>Within the diverse landscape of Chad tokens, each has distinct characteristics and strategic relevance. Unlike these tokens, our Chad token stands out as the most family-friendly and inclusive option in the market, emphasizing positive community values and sustainable growth. We&apos;re not just another meme token; we&apos;re a movement towards a more positive and inclusive digital currency environment.</p>
        </SectionContainer>
        <SectionContainer>
          <h2>Our Partners</h2>
          <PartnerContainer>
          <a href="https://pepex.app" target="_blank" rel="noopener noreferrer">
              <Image src="/pepex.png" alt="PepeX Logo" width={50} height={50} />
            </a>
            <a href="https://twitter.com/theogpepe2020" target="_blank" rel="noopener noreferrer">
              <Image src="/pepe-logo.png" alt="Pepe Logo" width={50} height={50} />
            </a>
            <a href="https://twitter.com/wojakfarm" target="_blank" rel="noopener noreferrer">
              <Image src="/wojak-logo.jpg" alt="Wojak Logo" width={50} height={50} />
            </a>
            <a href="https://twitter.com/chadcoinerc" target="_blank" rel="noopener noreferrer">
              <Image src="/chadred.png" alt="Chad 1 Logo" width={50} height={50} />
            </a>
            <a href="https://twitter.com/chadtokenorg" target="_blank" rel="noopener noreferrer">
              <Image src="/chadtoken.png" alt="Chad 2 Logo" width={50} height={50} />
            </a>
          </PartnerContainer>
        </SectionContainer>

        <SectionContainer>
          <h2>Disclaimer</h2>
          <p>This is a meme, not an investment. Risk including the possible loss.</p>
          <p>
            This token is simply paying homage to a meme we all love and recognize.
          </p>
          <p>
            $CHAD is a meme coin with no intrinsic value or expectation of financial return. There is no formal team or roadmap. the coin is completely useless and for entertainment purposes only.
          </p>
        </SectionContainer>
        <p>© 2024 $CHAD Token. All rights reserved.</p>
      </MainContainer>
    </>
  );
}
