// 主题特色颜色
export const theme = {
  red: '#D88385',
  green: '#80C19A',
  yellow: '#c8b37a',
  blue: '#8BB6C2',
  magenta: '#8190ca',
  cyan: '#54B6B5',
  orange: '#C69B8A',

  redLight: '#de9698',
  greenLight: '#95cbab',
  yellowLight: '#d0bf90',
  blueLight: '#9bc0ca',
  magentaLight: '#93a0d2',
  cyanLight: '#65bdbc',
  orangeLight: '#ceaa9c',

  foreground: '#bbbbb8',
}

export const lightTheme = {
  red: '#992447',
  green: '#24993e',
  yellow: '#9f7217',
  blue: '#248099',
  magenta: '#3939ac',
  cyan: '#249985',
  orange: '#ac5839',

  redLight: '#a5274d',
  greenLight: '#27a542',
  yellowLight: '#ad7c1a',
  blueLight: '#278aa5',
  magentaLight: '#3d3db8',
  cyanLight: '#27a590',
  orangeLight: '#b85e3d',

  foreground: '#51576D',
}
// 语义化颜色
export const darkSemantic = {
  primary: theme.blue,
  primaryHover: theme.blueLight,
  shadow: `${theme.foreground}10`,
  border: `${theme.foreground}08`,
  foreground: theme.foreground,
  cursor: theme.foreground,
  comment: `${theme.foreground}55`,
  inactiveForeground: `${theme.foreground}66`,
  ghostForeground: `${theme.foreground}88`,
  listHoverBackground: `${theme.foreground}10`,
  selection: `${theme.foreground}20`,
  highlight: `${theme.foreground}20`,
  highlight2: `${theme.foreground}30`,
  lineHighlightBackground: `${theme.foreground}20`,
  error: theme.red,
  warning: theme.orange,
  info: theme.blue,
  success: theme.green,
  modified: theme.blue,
  deleted: theme.redLight,
  buttonForeground: '#0d0d0d',
  background: '#0d0d0d',
  widgetBackground: '#1a1a1a',
  scrollBackground: '#1a1a1a',
  scrollbarSliderBg: '#202020',
  activeBackground: '#202020',
  punctuation: theme.foreground,
}

export const darkSoftSemantic = Object.assign({}, darkSemantic, {
  buttonForeground: '#1a1a1a',
  background: '#1a1a1a',
  widgetBackground: '#262626',
  scrollBackground: '#262626',
  scrollbarSliderBg: '#333333',
  activeBackground: '#333333',
})

export const darkGreenSemantic = Object.assign({}, darkSemantic, {
  buttonForeground: '#0b0f0c',
  background: '#0b0f0c',
  widgetBackground: '#121714',
  scrollBackground: '#121714',
  scrollbarSliderBg: '#161d19',
  activeBackground: '#161d19',
  primary: theme.green,
  primaryHover: theme.greenLight,
})

export const lightSemantic = {
  primary: lightTheme.blue,
  primaryHover: lightTheme.blueLight,
  listHoverBackground: `${lightTheme.foreground}10`,
  foreground: lightTheme.foreground,
  cursor: lightTheme.foreground,
  shadow: `${lightTheme.foreground}16`,
  border: `${lightTheme.foreground}16`,
  comment: `${lightTheme.foreground}60`,
  ghostForeground: `${lightTheme.foreground}55`,
  selection: `${lightTheme.foreground}20`,
  highlight: `${lightTheme.foreground}20`,
  highlight2: `${lightTheme.foreground}30`,
  punctuation: lightTheme.foreground,
  inactiveForeground: `${lightTheme.foreground}80`,
  lineHighlightBackground: `${lightTheme.foreground}10`,

  error: lightTheme.red,
  warning: lightTheme.orange,
  info: lightTheme.blue,
  success: lightTheme.green,
  modified: lightTheme.blue,
  deleted: lightTheme.redLight,

  buttonForeground: '#ffffff',
  background: '#ffffff',
  widgetBackground: '#f2f2f2',
  scrollBackground: '#f2f2f2',
  scrollbarSliderBg: '#ededed',
  activeBackground: '#ededed',
}

export const lightSoftSemantic = Object.assign({}, lightSemantic, {
  // 95
  buttonForeground: '#f6f4ee',
  background: '#f6f4ee',
  // 93
  widgetBackground: '#f3f0e8',
  scrollBackground: '#f3f0e8',
  // 90
  scrollbarSliderBg: '#ede9de',
  activeBackground: '#ede9de',
})

export const lightGreenSemantic = Object.assign({}, lightSemantic, {
  buttonForeground: '#eff6ee',
  background: '#eff6ee',
  widgetBackground: '#e9f3e8',
  scrollBackground: '#e9f3e8',
  scrollbarSliderBg: '#dfedde',
  activeBackground: '#dfedde',
})

export type Theme = typeof theme
export type Semantic = typeof darkSemantic
