// tslint:disable:max-line-length
// tslint:disable:max-file-line-count
const DocsCardBasicCode = `import {
  Card,
  CardBody,
  CardFooter,
} from '@ht2-labs/mural/cards';
import { P } from '@ht2-labs/mural/text';

export default () => {
  return(
    <Card title="Card Title">
      <CardBody>
        <P>Card Body</P>
      </CardBody>
      <CardFooter>Card Footer</CardFooter>
    </Card>
  );
}
`;

const DocsCardOnClickCode = `import {
  Card,
  CardBody,
  CardFooter,
} from '@ht2-labs/mural/cards';

import { P } from '@ht2-labs/mural/text';

export default () => {
  <Card title="A Clickable Card" onClick={() => null}>
    <CardBody>
      <P>This whole card is clickable - woo!</P>
    </CardBody>
    <CardFooter>Card Footer Text</CardFooter>
  </Card>
}
`;

const DocsCardHeroTextCode = `import {
  Card,
  CardHeroText,
} from '@ht2-labs/mural/cards';
import { H2 } from '@ht2-labs/mural/text';

export default () => {
  return(
    <Card
      backgroundColor={({theme}) => theme.color.Disabled}
    >
      <CardHeroText>
        <H2
          color={({theme}: any) => theme.color.DisabledText}
          size={Size.Large}
          alignment={Align.Center}
        >Shared components!</H2>
      </CardHeroText>
    </Card>
  );
}
`;

const DocsCardHeaderCode = `import {
  ButtonGroup,
  ButtonInvisible,
} from '@ht2-labs/mural/buttons';
import {
  Card,
  CardBody,
  CardFooter,
} from '@ht2-labs/mural/cards';
import { P } from '@ht2-labs/mural/text';

export default = ({overlayContent}) => {
  return(
    <Card overlayContent={overlayContent}>
      <CardBody>
        <strong>The new home for all shared components</strong>
      </CardBody>
      <CardFooter padding="0">
          <ButtonGroup>
            <ButtonInvisible>First</ButtonInvisible>
            <ButtonInvisible>Second</ButtonInvisible>
          </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
`;

const DocsCardOverlayCode = `import {
  ButtonGroup,
  ButtonInvisible,
} from '@ht2-labs/mural/buttons';
import {
  Card,
  CardBody,
  CardFooter,
} from '@ht2-labs/mural/cards';
import { H2, H4, P } from '@ht2-labs/mural/text';
import { Align } from '@ht2-labs/mural/utils/AlignmentProps';


export default ({overlayContent}) => {
  return(
    <Card
      headerColor={({theme}) => theme.color.Secondary}
      title={<H4>Hello this is a test</H4>}
      overlayContent={overlayContent}
    >
      <CardBody>
        <H2 size={Size.Large}>Shared components!</H2>
        <P>Shared components!</P>
      </CardBody>
    </Card>
  );
}
`;

const DocsCardMediaCode = `import {
  Card,
  CardBody,
  CardFooter,
} from '@ht2-labs/mural/cards';
import { Media } from '@ht2-labs/mural/media';
import { P } from '@ht2-labs/mural/text';

export default () => {
  return(
    <Card>
      <Media
        url="https://images.unsplash.com/photo-1535191162489-aaec838b5221?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=602ef4d589c4a74e3222e97404621df8&auto=format&fit=crop&w=1000&q=50"
      />
      <CardBody>
        <P>Card Body</P>
      </CardBody>
      <CardFooter>Card Footer</CardFooter>
    </Card>
  );
}
`;

export {
  DocsCardBasicCode,
  DocsCardHeroTextCode,
  DocsCardHeaderCode,
  DocsCardOverlayCode,
  DocsCardOnClickCode,
  DocsCardMediaCode,
};
