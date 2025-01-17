import React from 'react';
import { Section, SectionText } from 'StyledComponents/Section';
import { Line, Circle, LineCircle } from 'StyledComponents/LineCircle';
import { FlexWrapper } from 'StyledComponents/Flex';

const About = () => {
  return (
    <FlexWrapper>
      <Section first>
        <SectionText>
          <LineCircle>
            <Line /><Circle />
          </LineCircle> Hello! My name is Hanna, and I am a junior front-end developer.
        Before moving my career toward tech, I studied at Lund University and got a
        bachelor degree in Strategic communication and digital media.
        I love digital design, being creative as well as the logical sides that come with
        programming. I am passionate about everything that has to do with dogs,
        Tottenham Hotspur and making things for other people to enjoy.
        </SectionText>
      </Section>
    </FlexWrapper>
  )
}

export default About;