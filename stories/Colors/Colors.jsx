import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Title,
  Subtitle,
  HowToImport,
  CodeExample,
  CodeToClipboard,
} from '@catho-private/quantum-storybook-ui';
import Colors from '../../components/Colors';

const ColorBackground = styled.div`
  background-color: ${({ hex }) => hex};
  color: ${({ fontColor = 'white' }) => fontColor};
  width: 30%;
  padding: 50px 25px;
`;

const ColorDescription = styled.div`
  padding: 50px 25px;
  display: flex;
  width: 100%;
  align-content: center;
  align-items: center;
  background-color: #f7f7f7;
  font-size: 14px;
  padding: 15px;
  position: relative;
  color: #333;
`;

const ColorProperties = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ColorName = styled.div`
  font-size: 18px;
`;
const ColorNumber = styled.div`
  font-size: 14px;
`;
const ColorHex = styled.div`
  flex-grow: 0;
  padding: 5px;
  color: #666;
`;

const PalleteColor = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2px;
`;

const ColorSample = ({ hex, number, name, fontColor }) => (
  <PalleteColor>
    <ColorBackground hex={hex} fontColor={fontColor}>
      <ColorName>{name}</ColorName>
      <ColorNumber>{number}</ColorNumber>
    </ColorBackground>

    <ColorDescription>
      <ColorProperties>
        <ColorName>
          Colors.{name.toUpperCase()}[{number}]
        </ColorName>
        <ColorHex>{hex}</ColorHex>
      </ColorProperties>

      <CodeToClipboard code={`Colors.${name.toUpperCase()}[${number}]`} />
    </ColorDescription>
  </PalleteColor>
);

ColorSample.propTypes = {
  hex: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  fontColor: PropTypes.string.isRequired,
};

const exampleCode = `console.log(Colors.BLUE['500']);
/*returns: #1355d0;*/

console.log(Colors.PINK['500'])
/*returns: #de0059/*
`;

export default () => (
  <React.Fragment>
    <p>
      Catho has some segments, below you can see the
      <strong> Candidates</strong> default color palette.
    </p>

    <HowToImport importModules="Colors" />

    <Title>Usage</Title>
    <p>Some samples on how the Color object are structured</p>

    <CodeExample showTitle={false} code={exampleCode} />

    <br />
    <Title>Brand colors</Title>

    <Subtitle>Blue</Subtitle>
    <p>
      It is the main color brand. This color passes in AAA in the contrast
      checker of the WCAG guidelines so it can be used in various contexts like
      buttons, texts and headings, backgrounds, graphic elements and default
      states.
    </p>

    <ColorSample hex={Colors.BLUE[500]} number={500} name="Blue" />
    <ColorSample
      hex={Colors.BLUE[200]}
      number={200}
      name="Blue"
      fontColor="black"
    />
    <ColorSample hex={Colors.BLUE[50]} number={50} name="Blue" />

    <Subtitle>Sky</Subtitle>
    <p>
      It is a secondary color that can be used only in support elements such as
      backgrounds, graphic elements, icons, strokes and informational states. It
      is not recommended to use this color in texts and headings because it does
      not contrast checker from WCAG.
    </p>
    <ColorSample hex={Colors.SKY[500]} number={500} name="Sky" />

    <Subtitle>Cobalt</Subtitle>
    <p>
      It is another secondary color that can be used in support elements like
      backgrounds, graphic elements, icons, texts and headings. It goes through
      AAA in the WCAG guidelines and so it is also suitable for texts.
    </p>
    <ColorSample hex={Colors.COBALT[500]} number={500} name="Cobalt" />

    <Subtitle>Pink</Subtitle>
    <p>
      It is used mainly in contexts of great prominence as CTAs and highlights
      Avoid using in contexts where they do not incite action or highlight.
    </p>
    <ColorSample hex={Colors.PINK[500]} number={500} name="Pink" />

    <br />

    <Title>Support colors</Title>

    <p>
      Tones 500 are used for icons, input and button strokes, but not are
      indicated for texts by not passing the contrast checker of WCAG.
      <br />
      <br />
      The 200 tones are used exclusively for backgrounds.
      <br />
      <br />
      The 900 tones are used exclusively for texts because they pass in contrast
      WCAG checker.
    </p>

    <Subtitle>Success</Subtitle>
    <ColorSample hex={Colors.SUCCESS[900]} number={900} name="Success" />
    <ColorSample hex={Colors.SUCCESS[500]} number={500} name="Success" />
    <ColorSample
      hex={Colors.SUCCESS[200]}
      number={200}
      name="Success"
      fontColor="black"
    />

    <Subtitle>Warning</Subtitle>
    <ColorSample hex={Colors.WARNING[900]} number={900} name="Warning" />
    <ColorSample hex={Colors.WARNING[500]} number={500} name="Warning" />
    <ColorSample
      hex={Colors.WARNING[200]}
      number={200}
      name="Warning"
      fontColor="black"
    />

    <Subtitle>Error</Subtitle>
    <ColorSample hex={Colors.ERROR[900]} number={900} name="Error" />
    <ColorSample hex={Colors.ERROR[500]} number={500} name="Error" />
    <ColorSample
      hex={Colors.ERROR[200]}
      number={200}
      name="Error"
      fontColor="black"
    />

    <br />

    <Title>Neutral colors</Title>
    <Subtitle>Black</Subtitle>
    <p>
      It is mainly used for texts and headings. Passes on AAA in the contrast
      checker.
    </p>
    <ColorSample hex={Colors.BLACK[900]} number={900} name="Black" />
    <p>
      It is used for general texts and can also indicate active states. Pass in
      AAA in contrast checker.
    </p>
    <ColorSample hex={Colors.BLACK[700]} number={700} name="Black" />
    <p>
      It is used for strokes and can also indicate inactive states. Reproves in
      accessibility.
    </p>
    <ColorSample hex={Colors.BLACK[400]} number={400} name="Black" />
    <p>
      It is an auxiliary neutral tone and can be used for inactive states.
      Reproves in accessibility.
    </p>
    <ColorSample hex={Colors.BLACK[200]} number={200} name="Black" />
    <p>
      It is used to indicate input fields disabled. Reproves in accessibility.
    </p>
    <ColorSample
      hex={Colors.BLACK[100]}
      number={100}
      name="Black"
      fontColor="black"
    />

    <Subtitle>Shadow</Subtitle>
    <ColorSample
      hex={Colors.SHADOW[40]}
      number={200}
      name="Shadow"
      fontColor="black"
    />
  </React.Fragment>
);
