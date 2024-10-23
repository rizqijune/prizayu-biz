/** @type {import("prettier").Options} */
module.exports = {
  printWidth: 500,
  tabWidth: 4,
  bracketSpacing: true,
  twigAlwaysBreakObjects: false,
  twigOutputEndblockName: true,
  twigmultitags: [
    "block,endblock",
    "switch,case,default,endswitch",
    "ifchildren,endifchildren",
    "cache,endcache",
    "for,endforeach",
    "macro,endmacro",
    "include,endinclude",
    "filter,endfilter",
    "set,endset",
    "if,endif",
    "raw,endraw"
  ],
  plugins: [require.resolve("@zackad/prettier-plugin-twig"), require.resolve("prettier-plugin-tailwindcss")]
};
