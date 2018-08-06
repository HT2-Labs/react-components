// tslint:disable:max-file-line-count
// tslint:disable:no-this
// tslint:disable:no-class
// tslint:disable:max-line-length
import * as React from 'react';

import {
  Button,
  ButtonGroup,
  GhostButton,
  IconButton,
  IconGhostButton,
  IconInvisibleButton,
  InvisibleButton,
} from '../Button';

import DocsPropsTableHeader from '../docs/DocsPropsTableHeader';
import { IconAsterisk, IconChevronRight, IconEllipsisV } from '../Icon';

import Table from '../tables/Table';
import TableCell from '../tables/TableCell';
import TableRow from '../tables/TableRow';

import { H1, P, SizeType } from '../Text';
import { Align } from '../utils/AlignmentProps';
import DocsDescription from './DocsDescription';
import DocsPlayground from './DocsPlayground';

import IconBullseye from '../icons/IconBullseye';
import IconCalendar from '../icons/IconCalendar';
import IconFlagCheckered from '../icons/IconFlagCheckered';
import IconTimesCircle from '../icons/IconTimesCircle';

const codeSnippetButton =
  `import {
  Button,
  ButtonGroup,
} from ''@ht2-labs/mural/Button';
<ButtonGroup>
  <Button>Button</Button>
  <Button disabled>Button</Button>
</ButtonGroup>`;

const codeSnippetGhostButton =
  `import {
  GhostButton,
  ButtonGroup,
} from '@ht2-labs/mural/Button';
<ButtonGroup>
  <GhostButton> Ghost Button</GButton>
  <GhostButton disable> Disabled Ghost Button </Button>
</ButtonGroup>`;

const codeSnippetDangerButton =
  `import {
  Button,
  GhostButton,
  ButtonGroup,
} from '@ht2-labs/mural/Button';
<ButtonGroup>
  <Button danger> Danger Button</Button>
  <GhostButton danger> Danger Ghost Button </Button>
</ButtonGroup>`;

const codeSnippetInvisibleButton =
  `import { InvisibleButton, ButtonGroup } from '@ht2-labs/mural/Button';
<ButtonGroup>
  <InvisibleButton>Invisible Button</Button>
  <InvisibleButton disabled>Disabled Invisible Button</Button>
</ButtonGroup>`;

const codeSnippetButtonGroup =
  `import {
  Button,
  ButtonGroup,
} from '@ht2-labs/mural/Button';
import { Align } from '@ht2-labs/mural/utils/AlignmentProps';

<ButtonGroup>
  <Button>1</Button>
  <Button> 2 </Button>
</ButtonGroup>
<ButtonGroup alignment={Align.Center}>
  <Button>3</Button>
  <Button> 4 </Button>
</ButtonGroup>
<ButtonGroup alignment={Align.Right}>
  <Button>5</Button>
  <Button> 6 </Button>
</ButtonGroup>`;

const codeSnippetIconButton =
  `
import Size from '../buttons/IconButtonProps';
import {
  IconButton,
  IconInvisibleButton,
  IconGhostButton,
  ButtonGroup,
} from '@ht2-labs/mural/Button';

<P>Icon Button</P>
<ButtonGroup>
  <IconButton><IconAsterisk /></IconButton>
  <IconButton size={Size.Medium} danger><IconEllipsisV /></IconButton>
  <IconButton disabled><IconChevronRight /></IconButton>
  <IconButton><IconFlagCheckered /></IconButton>
</ButtonGroup>
<P>Invisible Icon Button</P>
<ButtonGroup>
  <IconInvisibleButton><IconAsterisk /></IconInvisibleButton>
  <IconInvisibleButton><IconEllipsisV /></IconInvisibleButton>
  <IconInvisibleButton><IconChevronRight /></IconInvisibleButton>
  <IconInvisibleButton><IconFlagCheckered /></IconInvisibleButton>
  <IconInvisibleButton><IconCalendar /></IconInvisibleButton>
  <IconInvisibleButton><IconTimesCircle /></IconInvisibleButton>
  <IconInvisibleButton><IconBullseye /></IconInvisibleButton>
</ButtonGroup>
<P>Ghost Icon Button</P>
<ButtonGroup>
  <IconGhostButton><IconAsterisk /></IconGhostButton>
  <IconGhostButton danger><IconEllipsisV /></IconGhostButton>
  <IconGhostButton disabled><IconChevronRight /></IconGhostButton>
  <IconGhostButton><IconFlagCheckered /></IconGhostButton>
  <IconGhostButton><IconCalendar /></IconGhostButton>
  <IconGhostButton><IconTimesCircle /></IconGhostButton>
  <IconGhostButton><IconBullseye /></IconGhostButton>
</ButtonGroup>`;

const availablePropsButtonGroup = <Table>
<DocsPropsTableHeader/>
<TableRow>
  <TableCell>alignment</TableCell>
  <TableCell>Align.Left, Align.Right, Align.Center</TableCell>
  <TableCell> </TableCell>
  <TableCell>Horizontal alignment of component</TableCell>
  </TableRow>
</Table>;
const availablePropsIconButton =
<Table>
<DocsPropsTableHeader/>
  <TableRow>
    <TableCell>size</TableCell>
    <TableCell>Size.Small, Size.Medium, Size.Large</TableCell>
    <TableCell>Size.Medium</TableCell>
    <TableCell>Size of button</TableCell>
  </TableRow>
  <TableRow>
    <TableCell>disabled</TableCell>
    <TableCell>Boolean</TableCell>
    <TableCell>Undefined</TableCell>
    <TableCell>Defines whether the button is disabled or not</TableCell>
  </TableRow>
</Table>;
const availablePropsButton =
<Table>
<DocsPropsTableHeader/>
  <TableRow>
    <TableCell>danger</TableCell>
    <TableCell>Boolean</TableCell>
    <TableCell>Undefined </TableCell>
    <TableCell>Shows the user that this is a dangerous button eg. Delete</TableCell>
  </TableRow>
  <TableRow>
    <TableCell>disabled</TableCell>
    <TableCell>Boolean</TableCell>
    <TableCell>Undefined</TableCell>
    <TableCell>Defines whether the button is disabled or not</TableCell>
  </TableRow>
</Table>;
export default () => {
  return (
    <>
      <H1 size={SizeType.ExtraLarge}>Buttons</H1>
      <DocsDescription title="Normal Button">
        <P>This is the default button that should be used.</P>
        <DocsPlayground code={codeSnippetButton} props={availablePropsButton}>
          <ButtonGroup>
            <Button

            >Button</Button>
            <Button disabled>Disabled Button</Button>
          </ButtonGroup>
        </DocsPlayground>
      </DocsDescription>
      <DocsDescription title="Ghost Button">
        <P>Ghost buttons can be used as a secondary option or to overlay on splash images. Ghost buttons can have their color overwritten by using the <code>ghostColor</code> prop.</P>
        <DocsPlayground code={codeSnippetGhostButton} props={availablePropsButton}>
          <ButtonGroup>
            <GhostButton

            >Ghost Button</GhostButton>
            <GhostButton
              disabled
            >Disabled Ghost Button</GhostButton>
          </ButtonGroup>
        </DocsPlayground>
      </DocsDescription>
      <DocsDescription title="Danger Button">
        <P>Use the <code>danger</code> prop to signify a destructive action (the color is set in the theme).</P>
        <DocsPlayground code={codeSnippetDangerButton} props={availablePropsButton}>
          <ButtonGroup>
            <Button

              danger
            >Danger !</Button>
            <GhostButton

              danger
            >Danger Ghost Button</GhostButton>
          </ButtonGroup>
        </DocsPlayground>
      </DocsDescription>
      <DocsDescription title="Invisible Button">
        <P>Only use invisible buttons in combination with other buttons (i.e. in a  <code>ButtonGroup</code>). Do NOT use them by themselves as this can be confusing.</P>
        <DocsPlayground code={codeSnippetInvisibleButton} props={availablePropsButton}>
          <ButtonGroup>
            <InvisibleButton

            >Invisible Button <IconChevronRight /></InvisibleButton>
            <InvisibleButton

              disabled
            >Disabled Invisible Button <IconChevronRight /></InvisibleButton>
          </ButtonGroup>
        </DocsPlayground>
      </DocsDescription>
      <P>Buttons will adjust their width to their content by default. To force them to
        use their space, add the <code>fullWidth</code> prop.</P>

      <DocsDescription title="Icon Button">
        <DocsPlayground code={codeSnippetIconButton} props={availablePropsIconButton}>
          <P>Icon Button</P>
          <ButtonGroup>
            <IconButton><IconAsterisk /></IconButton>
            <IconButton><IconEllipsisV /></IconButton>
            <IconButton disabled><IconChevronRight /></IconButton>
            <IconButton><IconFlagCheckered /></IconButton>
            <IconButton><IconCalendar /></IconButton>
            <IconButton><IconTimesCircle /></IconButton>
            <IconButton><IconBullseye /></IconButton>
          </ButtonGroup>
          <P>Invisible Icon Button</P>
          <ButtonGroup>
            <IconInvisibleButton><IconAsterisk /></IconInvisibleButton>
            <IconInvisibleButton><IconEllipsisV /></IconInvisibleButton>
            <IconInvisibleButton><IconChevronRight /></IconInvisibleButton>
            <IconInvisibleButton><IconFlagCheckered /></IconInvisibleButton>
            <IconInvisibleButton><IconCalendar /></IconInvisibleButton>
            <IconInvisibleButton><IconTimesCircle /></IconInvisibleButton>
            <IconInvisibleButton><IconBullseye /></IconInvisibleButton>
          </ButtonGroup>
          <P>Ghost Icon Button</P>
          <ButtonGroup>
            <IconGhostButton><IconAsterisk /></IconGhostButton>
            <IconGhostButton><IconEllipsisV /></IconGhostButton>
            <IconGhostButton disabled><IconChevronRight /></IconGhostButton>
            <IconGhostButton><IconFlagCheckered /></IconGhostButton>
            <IconGhostButton><IconCalendar /></IconGhostButton>
            <IconGhostButton><IconTimesCircle /></IconGhostButton>
            <IconGhostButton><IconBullseye /></IconGhostButton>
          </ButtonGroup>
        </DocsPlayground>
      </DocsDescription>
      {/* <DocsCode code={codeSnippetButtonGroup} /> */}

      <DocsDescription title="Button Group">
        <P>If you are using more than one button, you should use a ButtonGroup to contain them</P>
        <DocsPlayground code={codeSnippetButtonGroup} props={availablePropsButtonGroup}>
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
          </ButtonGroup>
          <ButtonGroup alignment={Align.Center}>
            <Button>3</Button>
            <Button>4</Button>
          </ButtonGroup>
          <ButtonGroup alignment={Align.Right}>
            <Button>5</Button>
            <Button>6</Button>
          </ButtonGroup>
        </DocsPlayground>
      </DocsDescription>
    </>
  );
};