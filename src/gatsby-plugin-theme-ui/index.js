import { colors } from '@primer/primitives'

export default {
  useColorSchemeMediaQuery: true,
  colors: {
    primary: '#0066ff',
    text: colors.gray[8],
    background: colors.white,
    muted: colors.gray[1],
    border: colors.gray[3],
    icon: colors.gray[4],
    modes: {
      dark: {
        text: colors.white,
        background: colors.gray[8],
        muted: colors.gray[9],
        border: colors.gray[7],
        icon: colors.gray[4],
      },
    },
  },
  space: [0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96],
  fonts: {
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    monospace:
      'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 32],
  fontWeights: {
    normal: 400,
    bold: 500,
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 2,
  },
  radii: [0, 6],
  shadows: [
    'none',
    '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  ],
  breakpoints: ['40em', '48em', '64em'],
  buttons: {
    outline: {
      color: 'text',
      backgroundColor: 'transparent',
      boxShadow: theme => `inset 0 0 0 1px ${theme.colors.border}`,
      '&:hover': {
        backgroundColor: 'background',
      },
    },
  },
  forms: {
    label: {
      fontSize: 1,
      mb: 1,
    },
    field: {
      paddingX: 3,
      backgroundColor: 'background',
      borderColor: 'border',
      borderRadius: 1,
      ':focus': {
        borderColor: 'primary',
        outline: 'none',
        boxShadow: theme => `0 0 0 2px ${theme.colors.primary}`,
      },
    },
    input: {
      variant: 'forms.field',
    },
    select: {
      variant: 'forms.field',
    },
    slider: {
      backgroundColor: 'border',
    },
  },
}
