/** @type {import("prettier").Options} */
module.exports = {
  printWidth: 80,
  tabWidth: 4,
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
  plugins: [require.resolve("@zackad/prettier-plugin-twig")]
};
