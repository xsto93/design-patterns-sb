import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as hightLigtherStyles from "react-syntax-highlighter/dist/esm/styles/prism";

export const supportedLanguages = [
  "javascript",
  "jsx",
  "typescript",
  "tsx",
  "html",
  "xml",
  "css",
  "scss",
  "less",
  "json",
  "markdown",
  "python",
  "java",
  "c",
  "cpp",
  "ruby",
  "php",
  "swift",
  "go",
  "sql",
  "shell",
  // Agrega más lenguajes según sea necesario
];

export enum SyntaxHighlightStyle {
  A11yDark = 'a11yDark',
  AtomDark = 'atomDark',
  Base16AtelierSulphurpoolLight = 'base16AtelierSulphurpoolLight',
  CB = 'cb',
  ColdarkCold = 'coldarkCold',
  ColdarkDark = 'coldarkDark',
  Coy = 'coy',
  Darcula = 'darcula',
  Dark = 'dark',
  Dracula = 'dracula',
  DuotoneDark = 'duotoneDark',
  DuotoneEarth = 'duotoneEarth',
  DuotoneForest = 'duotoneForest',
  DuotoneLight = 'duotoneLight',
  DuotoneSea = 'duotoneSea',
  DuotoneSpace = 'duotoneSpace',
  Funky = 'funky',
  GHColors = 'ghcolors',
  GruvboxDark = 'gruvboxDark',
  GruvboxLight = 'gruvboxLight',
  Hopscotch = 'hopscotch',
  MaterialDark = 'materialDark',
  MaterialLight = 'materialLight',
  MaterialOceanic = 'materialOceanic',
  Nord = 'nord',
  Okaidia = 'okaidia',
  OneDark = 'oneDark',
  OneLight = 'oneLight',
  Pojoaque = 'pojoaque',
  Prism = 'prism',
  ShadesOfPurple = 'shadesOfPurple',
  SolarizedLight = 'solarizedlight',
  Synthwave84 = 'synthwave84',
  Tomorrow = 'tomorrow',
  Twilight = 'twilight',
  VS = 'vs',
  VscDarkPlus = 'vscDarkPlus',
  Xonokai = 'xonokai',
}


export const supportedStyles: string[] = [
  SyntaxHighlightStyle.A11yDark,
  SyntaxHighlightStyle.AtomDark,
  SyntaxHighlightStyle.Base16AtelierSulphurpoolLight,
  SyntaxHighlightStyle.CB,
  SyntaxHighlightStyle.ColdarkCold,
  SyntaxHighlightStyle.ColdarkDark,
  SyntaxHighlightStyle.Coy,
  SyntaxHighlightStyle.Darcula,
  SyntaxHighlightStyle.Dark,
  SyntaxHighlightStyle.Dracula,
  SyntaxHighlightStyle.DuotoneDark,
  SyntaxHighlightStyle.DuotoneEarth,
  SyntaxHighlightStyle.DuotoneForest,
  SyntaxHighlightStyle.DuotoneLight,
  SyntaxHighlightStyle.DuotoneSea,
  SyntaxHighlightStyle.DuotoneSpace,
  SyntaxHighlightStyle.Funky,
  SyntaxHighlightStyle.GHColors,
  SyntaxHighlightStyle.GruvboxDark,
  SyntaxHighlightStyle.GruvboxLight,
  SyntaxHighlightStyle.Hopscotch,
  SyntaxHighlightStyle.MaterialDark,
  SyntaxHighlightStyle.MaterialLight,
  SyntaxHighlightStyle.MaterialOceanic,
  SyntaxHighlightStyle.Nord,
  SyntaxHighlightStyle.Okaidia,
  SyntaxHighlightStyle.OneDark,
  SyntaxHighlightStyle.OneLight,
  SyntaxHighlightStyle.Pojoaque,
  SyntaxHighlightStyle.Prism,
  SyntaxHighlightStyle.ShadesOfPurple,
  SyntaxHighlightStyle.SolarizedLight,
  SyntaxHighlightStyle.Synthwave84,
  SyntaxHighlightStyle.Tomorrow,
  SyntaxHighlightStyle.Twilight,
  SyntaxHighlightStyle.VS,
  SyntaxHighlightStyle.VscDarkPlus,
  SyntaxHighlightStyle.Xonokai,
];

type HighlighterStyles = {
  [key: string]: React.CSSProperties;
};

export default function RenderCode({
  code,
  language,
  styleName = SyntaxHighlightStyle.Dark,
}: {
  code: string;
  language: string;
  styleName: string;
}) {
  
  const selectedStyle: React.CSSProperties | undefined = (
    hightLigtherStyles as HighlighterStyles
  )[styleName];
  console.log(styleName)
  console.log(selectedStyle)
  console.log(hightLigtherStyles.darcula);
  return (
    <SyntaxHighlighter
      language={language}
      style={selectedStyle as {[key: string]: React.CSSProperties}}
    >
      {code}
    </SyntaxHighlighter>
  );
}
