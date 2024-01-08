export type SupportedCwmLanguage = {
  readonly name: string;
  readonly cwm: string;
  readonly aliases: string[];
};

export type SupportedCwmLanguages = typeof supportedCwmLanguages;

export type SupportedCwmLanguageName = SupportedCwmLanguages[number]["cwm"];

export const supportedCwmLanguages = [
  {
    name: "ActionScript",
    cwm: "as3",
    aliases: ["actionscript3", "as3", "actionscript"],
  },
  {
    name: "AppleScript",
    cwm: "applescript",
    aliases: ["applescript"],
  },
  {
    name: "Bash",
    cwm: "bash",
    aliases: ["bash", "shell", "sh", "zsh", "ksh", "fish"],
  },
  {
    name: "C#",
    cwm: "c#",
    aliases: ["c#", "cs", "c-sharp", "csharp"],
  },
  {
    name: "C++",
    cwm: "c",
    aliases: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx", "c", "h", "ino"],
  },
  {
    name: "CSS",
    cwm: "css",
    aliases: ["css"],
  },
  {
    name: "ColdFusion",
    cwm: "cf",
    aliases: ["coldfusion", "cf"],
  },
  {
    name: "Delphi",
    cwm: "pas",
    aliases: ["delphi", "pascal", "pas", "p"],
  },
  {
    name: "Diff",
    cwm: "diff",
    aliases: ["diff", "patch"],
  },
  {
    name: "Erlang",
    cwm: "erl",
    aliases: ["erl", "erlang"],
  },
  {
    name: "Groovy",
    cwm: "groovy",
    aliases: ["groovy", "gradle"],
  },
  {
    name: "HTML / XML",
    cwm: "xml",
    aliases: [
      "xml",
      "xhtml",
      "xslt",
      "html",
      "html/xml",
      "htm",
      "handlebars",
      "hbs",
      "rss",
      "wsdl",
      "xsd",
      "xsl",
      "svg",
    ],
  },
  {
    name: "Java",
    cwm: "java",
    aliases: ["java"],
  },
  {
    name: "Java FX",
    cwm: "jfx",
    aliases: ["jfx", "javafx"],
  },
  {
    name: "JavaScript",
    cwm: "js",
    aliases: [
      "js",
      "ts",
      "jscript",
      "javascript",
      "ecmascript",
      "node",
      "mjs",
      "cjs",
      "jsx",
      "tsx",
      "json5",
      "json",
      "map",
    ],
  },
  {
    name: "PHP",
    cwm: "php",
    aliases: ["php", "php3", "php4", "php5", "php7", "phtml"],
  },
  {
    name: "Perl",
    cwm: "pl",
    aliases: ["perl", "Perl", "pl", "pm"],
  },
  {
    name: "Plain Text",
    cwm: "text",
    aliases: ["text", "plain"],
  },
  {
    name: "PowerShell",
    cwm: "ps",
    aliases: ["powershell", "ps", "ps1", "psd1", "psm1"],
  },
  {
    name: "Python",
    cwm: "py",
    aliases: ["py", "python", "bzl", "pyw"],
  },
  {
    name: "Ruby",
    cwm: "rb",
    aliases: ["ruby", "rails", "ror", "rb", "jruby", "macruby", "rake", "rbx"],
  },
  {
    name: "SQL",
    cwm: "sql",
    aliases: [
      "sql",
      "cassandra",
      "cql",
      "mssql",
      "mysql",
      "plsql",
      "pls",
      "postgresql",
      "psql",
      "sqlite",
      "mariasql",
      "mariadb",
      "maria",
    ],
  },
  {
    name: "Sass",
    cwm: "sass",
    aliases: ["sass", "scss", "less"],
  },
  {
    name: "Scala",
    cwm: "scala",
    aliases: ["scala"],
  },
  {
    name: "Visual Basic",
    cwm: "vb",
    aliases: ["vb", "vbnet"],
  },
  {
    name: "YAML",
    cwm: "yml",
    aliases: ["yml", "yaml"],
  },
] as const satisfies SupportedCwmLanguage[];
