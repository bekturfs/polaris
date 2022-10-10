import type {Exact} from 'type-fest';

export interface ColorHue {
  [hue: string]: ColorValue;
}

export interface ColorValue {
  [value: string]: string;
}

const createMap = <T extends Exact<ColorHue, T>>(config: T): T => config;

export const colorMap = createMap({
  blue: {
    base: '--p-interactive',
  },
  green: {
    text: '--text-success',
    dark: '--text-success',
    base: '--text-success',
  },
  yellow: {
    text: '--p-text-warning',
    dark: '--p-text-warning',
    base: '--p-text-warning',
  },
  red: {
    text: '--p-text-critical',
    dark: '--p-text-critical',
    base: '--p-text-critical',
  },
  ink: {
    base: '--p-text',
    lighter: '--p-text-subdued',
    lightest: '--p-text-disabled',
  },
  black: {
    base: '--p-text',
  },
  white: {
    base: '--p-text-on-dark',
  },
});

export const backgroundColorMap = createMap({
  ink: {
    lighter: '--p-surface-neutral',
  },
  green: {
    base: '--p-surface-success',
    light: '--p-surface-success-subdued',
  },
  yellow: {
    base: '--p-surface-warning',
    light: '--p-surface-warning-subdued',
  },
  red: {
    base: '--p-surface-critical',
    light: '--p-surface-critical-subdued',
  },
  sky: {
    base: '--p-surface-neutral',
    light: '--p-surface-neutral-subdued',
    lighter: '--p-surface-subdued',
  },
  black: {
    base: '--p-surface-dark',
  },
  white: {
    base: '--p-surface',
  },
});

export const borderColorMap = createMap({
  indigo: {
    base: '--p-interactive',
  },
  blue: {
    base: '--p-border-subdued',
  },
  green: {
    dark: '--p-border-success',
    base: '--p-border-success',
    light: '--p-border-success-disabled',
    lighter: '--p-border-success-subdued',
  },
  yellow: {
    dark: '--p-border-warning',
    base: '--p-border-warning',
    light: '--p-border-warning-disabled',
    lighter: '--p-border-warning-subdued',
  },
  red: {
    dark: '--p-border-critical',
    base: '--p-border-critical',
    light: '--p-border-critical-disabled',
    lighter: '--p-border-critical-subdued',
  },
  sky: {
    base: '--p-border-subdued',
    light: '--p-border-disabled',
  },
});

/* Original Color Palette */

// export const colorsMap = createColorsMap({
//   purple: {
//     text: 'rgb(80, 73, 90)',
//     darker: 'rgb(35, 0, 81)',
//     dark: 'rgb(80, 36, 143)',
//     base: 'rgb(156, 106, 222)',
//     light: 'rgb(227, 208, 255)',
//     lighter: 'rgb(246, 240, 253)',
//   },
//   indigo: {
//     text: 'rgb(62, 65, 85)',
//     darker: 'rgb(0, 6, 57)',
//     dark: 'rgb(32, 46, 120)',
//     base: 'rgb(92, 106, 196)',
//     light: 'rgb(179, 188, 245)',
//     lighter: 'rgb(244, 245, 250)',
//   },
//   blue: {
//     text: 'rgb(62, 78, 87)',
//     darker: 'rgb(0, 20, 41)',
//     dark: 'rgb(8, 78, 138)',
//     base: 'rgb(0, 111, 187)',
//     light: 'rgb(180, 225, 250)',
//     lighter: 'rgb(235, 245, 250)',
//   },
//   teal: {
//     text: 'rgb(64, 83, 82)',
//     darker: 'rgb(0, 49, 53)',
//     dark: 'rgb(0, 132, 142)',
//     base: 'rgb(71, 193, 191)',
//     light: 'rgb(183, 236, 236)',
//     lighter: 'rgb(224, 245, 245)',
//   },
//   green: {
//     text: 'rgb(65, 79, 62)',
//     darker: 'rgb(23, 54, 48)',
//     dark: 'rgb(16, 128, 67)',
//     base: 'rgb(80, 184, 60)',
//     light: 'rgb(187, 229, 179)',
//     lighter: 'rgb(227, 241, 223)',
//   },
//   yellow: {
//     text: 'rgb(89, 81, 48)',
//     darker: 'rgb(87, 59, 0)',
//     dark: 'rgb(138, 97, 22)',
//     base: 'rgb(238, 194, 0)',
//     light: 'rgb(255, 234, 138)',
//     lighter: 'rgb(252, 241, 205)',
//   },
//   orange: {
//     text: 'rgb(89, 68, 48)',
//     darker: 'rgb(74, 21, 4)',
//     dark: 'rgb(192, 87, 23)',
//     base: 'rgb(244, 147, 66)',
//     light: 'rgb(255, 197, 139)',
//     lighter: 'rgb(252, 235, 219)',
//   },
//   red: {
//     text: 'rgb(88, 60, 53)',
//     darker: 'rgb(51, 1, 1)',
//     dark: 'rgb(191, 7, 17)',
//     base: 'rgb(222, 54, 24)',
//     light: 'rgb(254, 173, 154)',
//     lighter: 'rgb(251, 234, 229)',
//   },
//   ink: {
//     base: 'rgb(33, 43, 54)',
//     light: 'rgb(69, 79, 91)',
//     lighter: 'rgb(99, 115, 129)',
//     lightest: 'rgb(145, 158, 171)',
//   },
//   sky: {
//     dark: 'rgb(196, 205, 213)',
//     base: 'rgb(223, 227, 232)',
//     light: 'rgb(244, 246, 248)',
//     lighter: 'rgb(249, 250, 251)',
//   },
//   black: {
//     base: 'rgb(0, 0, 0)',
//   },
//   white: {
//     base: 'rgb(255, 255, 255)',
//   },
// });
