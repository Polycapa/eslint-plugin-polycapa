# eslint-config-polycapa

My personal ESLint config for TS and JS projects.

Run following commands to install peer dependencies:

```bash
npm i -D eslint-config-prettier eslint-plugin-sonarjs eslint-plugin-func-params-args
```

Add following to `.npmrc` to be able install the config:

```bash
@polycapa:registry=https://npm.pkg.github.com
```

Then install the config:

```bash
npm i -D @polycapa/eslint-plugin
```

To add the rules to your project, add the following to your `.eslintrc.json`:

```json
{
  "files": ["*.ts", "*.tsx"],
  "extends": [
    "plugin:@polycapa/recommended",
    "plugin:@polycapa/typescript"
  ],
  "rules": {}
},
```

- `recommended` contains all rules applicable to all projects (JS and TS)
- `typescript` contains all rules applicable to TS projects and needs `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` to be installed

_Don't forget to set `parserOptions` for TS projects_

```json
"parserOptions": {
  "project": ["<relative_path_from_root>/tsconfig.*?.json"]
},
```