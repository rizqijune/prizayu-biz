/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './templates/**/*.html.twig',
    './templates/*.html.twig',
    './src/**/*.{js,css}',
  ],
  darkMode: "class",
  theme: {
    nightwind: {
      typography: true,
    },
    extend: {
      colors: {
        'default': '#efefef',
        'primary': '#005a80'
      },
      fontFamily: {
        sans: ['Inter'],
      },
    }
  },
  variants: {
    extend: {
      display: ['group-hover'],
      scale: ['group-hover'],
      translate: ['group-hover'],
      filter: ['group-hover', 'hover'],
      saturate: ['group-hover', 'hover']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('nightwind'),
    addDynamicIconSelectors(
      {
        prefix: 'i',
        overrideOnly:'true',
        scale:'0',
      }
    ),
     plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
}
