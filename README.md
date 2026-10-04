# American Flag
_A perfect SVG representation of Old Glory_

[![License:CC0](https://img.shields.io/badge/License-CC0-blue.svg)](https://github.com/american-democratic-party/american-flag/blob/main/LICENSE.txt)
[![npm](https://img.shields.io/npm/v/american-flag.svg)](https://www.npmjs.com/package/american-flag)
[![Build](https://github.com/american-democratic-party/american-flag/actions/workflows/run-spec-on-push.yaml/badge.svg)](https://github.com/american-democratic-party/american-flag/actions/workflows/run-spec-on-push.yaml)

## Flag of the United States of America

<img src=dist/american-flag.svg width=200 alt=logo>

## File Sizes

Image assets in `dist` folder:

| Filename                   | Size     |
| ---------------------------| -------- |
| american-flag.svg          | `1.4 KB` |
| us-flag-icon.128x128.png   | `3.7 KB` |
| us-flag-large.1235x650.png | `9.7 KB` |
| us-flag-small.128x67.png   | `3.6 KB` |
| us-flag.min.svg            | `0.7 KB` |

## Example Usage

Add dependencies to your project's **package.json** file:
```bash
$ npm install --save-dev american-flag copy-file-util
```

Add a task to the `scripts` section of your **package.json** that copies over the SVG file:
```json
"scripts": {
   "add-flag": "copy-file node_modules/american-flag/dist/american-flag.svg --folder docs/assets"
},
```

```bash
$ npm run add-flag
```

<br>

---
[CC0 License](LICENSE.txt)

[Superpower](https://american-democratic-party.org/article/america-prevents-wars/)
