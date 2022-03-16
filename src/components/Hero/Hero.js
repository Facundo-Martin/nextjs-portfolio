import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br /> My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam a cum
          iste recusandae facere nesciunt quibusdam saepe odit praesentium
          facilis.
        </SectionText>
        <Button onClick={() => (window.location = "https://google.com")}>
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;
