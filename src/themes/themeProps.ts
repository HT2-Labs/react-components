export default interface ThemeProvider {
  readonly color: {
      readonly Body: string;
      readonly BodyDark: string;
      readonly BodyLight: string;
      readonly BodyText: string;

      readonly Button: string;
      readonly ButtonDark: string;
      readonly ButtonLight: string;
      readonly ButtonText: string;

      readonly Danger: string;
      readonly DangerDark: string;
      readonly DangerLight: string;
      readonly DangerText: string;

      readonly Disabled: string;
      readonly DisabledDark: string;
      readonly DisabledLight: string;
      readonly DisabledText: string;

      readonly Primary: string;
      readonly PrimaryDark: string;
      readonly PrimaryLight: string;
      readonly PrimaryText: string;

      readonly Secondary: string;
      readonly SecondaryDark: string;
      readonly SecondaryLight: string;
      readonly SecondaryText: string;

      readonly Success: string;
      readonly SuccessDark: string;
      readonly SuccessLight: string;
      readonly SuccessText: string;

      readonly White: string;
    };
    readonly size: {
      readonly Bit: string;
      readonly Bite: string;
      readonly Default: string;
      readonly Mega: string;
      readonly Giga: string;
      readonly Tera: string;
      readonly Peta: string;
      readonly Exa: string;
    };
    readonly radius: {
      readonly Large: string;
      readonly Medium: string;
      readonly Small: string;
    };
    readonly shadow: {
      readonly Large: string;
      readonly Medium: string;
      readonly Small: string;
    };
}
