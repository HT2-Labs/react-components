// tslint:disable:max-file-line-count
// tslint:disable:no-magic-numbers
// tslint:disable:object-literal-sort-keys
import * as React from 'react';

import { darken, em, lighten, modularScale, readableColor } from 'polished';
import { ThemeProvider } from '../utils/mural-styled-components';
import defaultTheme from './defaultTheme';

export interface ThemeProps {
  readonly theme?: any;
  readonly children: React.ReactNode;
}

const MuralThemeProvider = ({ children, theme }: ThemeProps) => {
  // Apply app supplied theme over the mural default
  const mergedTheme = { ...defaultTheme, ...theme };

  // Default values
  const lightenValue = 0.1;
  const DarkenValue = 0.1;

  const constructedTheme = {
    color: {
      Body: mergedTheme.colorBody,
      BodyDark: darken(DarkenValue, mergedTheme.colorBody),
      BodyLight: lighten(lightenValue, mergedTheme.colorBody),
      BodyText: readableColor(mergedTheme.colorBody),

      Button: mergedTheme.colorButton,
      ButtonDark: darken(DarkenValue, mergedTheme.colorButton),
      ButtonLight: lighten(lightenValue, mergedTheme.colorButton),
      ButtonText: readableColor(mergedTheme.colorButton),

      Danger: mergedTheme.colorDanger,
      DangerDark: darken(DarkenValue, mergedTheme.colorDanger),
      DangerLight: lighten(lightenValue, mergedTheme.colorDanger),
      DangerText: readableColor(mergedTheme.colorDanger),

      Disabled: mergedTheme.colorDisabled,
      DisabledDark: darken(DarkenValue, mergedTheme.colorDisabled),
      DisabledLight: lighten(lightenValue, mergedTheme.colorDisabled),
      DisabledText: darken(0.5, mergedTheme.colorDisabled),

      Primary: mergedTheme.colorPrimary,
      PrimaryDark: darken(DarkenValue, mergedTheme.colorPrimary),
      PrimaryLight: lighten(lightenValue, mergedTheme.colorPrimary),
      PrimaryText: readableColor(mergedTheme.colorPrimary),

      Secondary: mergedTheme.colorSecondary,
      SecondaryDark: darken(DarkenValue, mergedTheme.colorSecondary),
      SecondaryLight: lighten(lightenValue, mergedTheme.colorSecondary),
      SecondaryText: readableColor(mergedTheme.colorSecondary),

      Success: mergedTheme.colorSuccess,
      SuccessDark: darken(DarkenValue, mergedTheme.colorSuccess),
      SuccessLight: lighten(lightenValue, mergedTheme.colorSuccess),
      SuccessText: readableColor(mergedTheme.colorSuccess),

      White: mergedTheme.colorWhite,
    },
    size: {
      Bit: modularScale(-1, em(mergedTheme.fontBase)),
      Bite: modularScale(-0.5, em(mergedTheme.fontBase)),
      Default: modularScale(0, em(mergedTheme.fontBase)),
      Mega: modularScale(1.25, em(mergedTheme.fontBase)),
      Giga: modularScale(1.953, em(mergedTheme.fontBase)),
      Tera: modularScale(3.052, em(mergedTheme.fontBase)),
      Peta: modularScale(3.815, em(mergedTheme.fontBase)),
      Exa: modularScale(4.768, em(mergedTheme.fontBase)),
    },
    radius: {
      Large: mergedTheme.radiusLarge,
      Medium: mergedTheme.radiusMedium,
      Small: mergedTheme.radiusSmall,
    },
    shadow: {
      Large: mergedTheme.shadowLarge,
      Medium: mergedTheme.shadowMedium,
      Small: mergedTheme.shadowSmall,
    },
  };
  return <ThemeProvider theme={constructedTheme}>{children}</ThemeProvider>;
};

export default MuralThemeProvider;
