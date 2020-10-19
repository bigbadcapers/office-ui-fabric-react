// @ts-check
/**
 * Generates SASS files which list out theme slots and their defaults as SASS variables,
 * used with the legacy version of loadTheme.
 */

const { getTheme } = require('@fluentui/style-utilities');
const fs = require('fs');
const path = require('path');

const defaultTheme = getTheme(true);

function writeFile(lines, outputFilename) {
  const output = [
    '/** THIS FILE IS AUTOGENERATED do not modify it manually. See generateDefaultThemeSassFiles.js. ' +
      'New slots should be added to the appropriate interfaces and defaults files. */',
    ...lines,
  ].join('\n');

  fs.writeFileSync(path.join('./src', outputFilename), output);
}

// Font slots
const fonts = defaultTheme.fonts;
const fontLines = [];
let fontSizeTokenName;
let fontWeightTokenName;
for (const [fontName, font] of Object.entries(fonts)) {
  for (const [propName, propValue] of Object.entries(font)) {
    const titleCasePropName = propName.charAt(0).toUpperCase() + propName.slice(1);
    const slotName = fontName + titleCasePropName;
    const name = '$ms-font-' + slotName;
    fontLines.push(`${name}: "[theme:${slotName}, default: ${propValue}]";`);

    if (titleCasePropName === 'FontSize') {
      fontSizeTokenName = name;
    } else if (titleCasePropName === 'FontWeight') {
      fontWeightTokenName = name;
    }
  }
  fontLines.push(`@mixin ${fontName}FontBasic {`);
  fontLines.push(`    font-size: ${fontSizeTokenName};`);
  fontLines.push(`    font-weight: ${fontWeightTokenName};`);
  fontLines.push(`}`);
}
writeFile(fontLines, '_themeVariables.scss');

// Fabric palette slots
const palette = defaultTheme.palette;
const colorLines = [];
for (const [color, colorValue] of Object.entries(palette)) {
  const name = 'ms-color-' + color;
  colorLines.push(`$${name}: "[theme:${color}, default: ${colorValue}]";`);
}
writeFile(colorLines, '_themeOverrides.scss');

// Semantic color slots
const semanticColors = defaultTheme.semanticColors;
const semanticLines = [];
const deprecatedTag = ' /* @deprecated */';

for (const [color, colorValue] of Object.entries(semanticColors)) {
  const name = color + 'Color';
  if (colorValue.indexOf(deprecatedTag) >= 0) {
    semanticLines.push(
      `$${name}: '[theme:${color}, default: ${colorValue.replace(deprecatedTag, '')}]'; ${deprecatedTag}`,
    );
  } else {
    semanticLines.push(`$${name}: '[theme:${color}, default: ${colorValue}]'; `);
  }
}
writeFile(semanticLines, '_semanticSlots.scss');
