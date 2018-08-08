// tslint:disable:max-file-line-count
// tslint:disable:max-line-length
import * as React from 'react';
import styled from 'styled-components';
import { H1, H4, P, SizeType } from '../Text';
import DocsColor from './DocsColor';
import DocsPlayground from './DocsPlayground';

const codeSnippet =
`import { ThemeProvider } from './ThemeProvider';

export default () => {
  const theme = {
    color: {
      Body: '#efefef',
      Button: '#076699',
      Danger: '#ff0000',
      Disabled: '#eeeeee',
      Primary: '#41bfee',
      Secondary: '#344a58',
    },
    radius: {
      Button: '2px',
      Card: '12px',
    },
    shadow: {
      Large: '0 2px 2px 2px rgba(0, 0, 0, 0.12)',
      Main: '0 2px 2px 0 rgba(0, 0, 0, 0.24)',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  );
);
`;

export default () => {
  const ColorGrid = styled.div`
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-columns: repeat(4, 160px);
    grid-template-rows: repeat(4, auto);
  `;
  const ColorInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const ColorSubGrid = styled.div`
    display: grid;
    width: 160px;
    height: 160px;
    grid-template-columns: repeat(2, 80px);
    grid-template-rows: repeat(2, 80px);
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.03),0 2px 2px rgba(39,44,49,.06),0 4px 4px rgba(39,44,49,.06),0 8px 8px rgba(39,44,49,.06),0 16px 16px rgba(39,44,49,.06),0 32px 32px rgba(39,44,49,.06),0 64px 64px rgba(39,44,49,.06);
  `;

  return (
    <>
      <H1 size={SizeType.ExtraLarge}>Theme</H1>
      <hr />
      <ColorGrid>
        <ColorInfo>
          <H4 size={SizeType.Medium}>Body</H4>
          <ColorSubGrid>
            <DocsColor color={({ theme }: any) => theme.color.Body}>Color</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.BodyDark}>Color</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.BodyLight}>Color</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.BodyText}>Color</DocsColor>
          </ColorSubGrid>
        </ColorInfo>
        <ColorInfo>
          <H4 size={SizeType.Medium}>Primary</H4>
          <ColorSubGrid>
            <DocsColor color={({ theme }: any) => theme.color.Primary}>Color</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.PrimaryDark}>Color</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.PrimaryLight}>Color</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.PrimaryText}>Color</DocsColor>
          </ColorSubGrid>
        </ColorInfo>
        <ColorInfo>
          <H4 size={SizeType.Medium}>Secondary</H4>
          <ColorSubGrid>
            <DocsColor color={({ theme }: any) => theme.color.Secondary}>Color</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.SecondaryDark}>Color</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.SecondaryLight}>Color</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.SecondaryText}>Color</DocsColor>
          </ColorSubGrid>
        </ColorInfo>
        <ColorInfo>
          <H4 size={SizeType.Medium}>Button</H4>
          <ColorSubGrid>
            <DocsColor color={({ theme }: any) => theme.color.Button}>Color</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.ButtonDark}>Color</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.ButtonLight}>Color</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.ButtonText}>Color</DocsColor>
          </ColorSubGrid>
        </ColorInfo>
        <ColorInfo>
          <H4 size={SizeType.Medium}>Danger</H4>
          <ColorSubGrid>
            <DocsColor color={({ theme }: any) => theme.color.Danger}>Color</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.DangerDark}>Color</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.DangerLight}>Color</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.DangerText}>Color</DocsColor>
          </ColorSubGrid>
        </ColorInfo>
        <ColorInfo>
          <H4 size={SizeType.Medium}>Disabled</H4>
          <ColorSubGrid>
            <DocsColor color={({ theme }: any) => theme.color.Disabled}>Color</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.DisabledDark}>Color</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.DisabledLight}>Color</DocsColor>
            <DocsColor color={({ theme }: any) => theme.color.DisabledText}>Color</DocsColor>
          </ColorSubGrid>
        </ColorInfo>
      </ColorGrid>

      <DocsPlayground code={codeSnippet}>
        <P>Mural uses Styled Components themes to configure styling. You can override the theme using <a href="https://www.styled-components.com/docs/advanced#theming">the theme prop</a> (only do this if you have a good reason).</P>
      </DocsPlayground>
    </>
  );
};