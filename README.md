# @egs33/eslint-config

eslint-config for me.

## Install
Add following to `.npmrc` in same dir of `package.json`.
```
@egs33:registry=https://npm.pkg.github.com
```

```
$ yarn add -D eslint @egs33/eslint-config
```

## Usage
### for node.js
```javascript
import node from '@egs33/eslint-config/nodejs.js';

export default [
  ...node,
];
```

### for browser
```javascript
import browser from '@egs33/eslint-config/browser.js';

export default [
  ...browser,
];
```

### for browser and Vue.js SFC
```bash
$ yarn add -D vue-eslint-parser eslint-plugin-vue
```

```javascript
import vue3 from '@egs33/eslint-config/vue3.js';
import { applyConfig } from '@egs33/eslint-config/util.js';

export default [
  ...applyConfig({ files: ['**/*.vue'] }, vue3),
];
```
### for node.js (typescript)
```bash
$ yarn add -D @typescript-eslint/eslint-plugin
```

```javascript
import tsNode from '@egs33/eslint-config/typescript-node.js';
import { applyConfig } from '@egs33/eslint-config/util.js';

export default [
  ...applyConfig({ files: ['**/*.ts'] }, tsNode),
];
```
