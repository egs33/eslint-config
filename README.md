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
module.exports = {
  root: true,
  extends: '@egs33',
};
```

### for browser
```javascript
module.exports = {
  root: true,
  extends: '@egs33/eslint-config/browser',
};
```

### for browser and Vue.js SFC
```bash
$ yarn add -D vue-eslint-parser eslint-plugin-vue
```

```javascript
module.exports = {
  root: true,
  extends: '@egs33/eslint-config/vue',
  parser: 'vue-eslint-parser',
};
```
### for node.js (typescript)
```javascript
module.exports = {
  root: true,
  extends: '@egs33/eslint-config/typescript-node',
};
```
