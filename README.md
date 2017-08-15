# ngx virtual joystick
[![Build Status](https://travis-ci.org/sijpesteijn/ngx-virtual-joystick.svg?branch=master)](https://travis-ci.org/sijpesteijn/ngx-virtual-joystick)
[![codecov](https://codecov.io/gh/sijpesteijn/ngx-virtual-joystick/branch/master/graph/badge.svg)](https://codecov.io/gh/sijpesteijn/ngx-virtual-joystick)
[![npm version](https://badge.fury.io/js/ngx-virtual-joystick.svg)](http://badge.fury.io/js/ngx-virtual-joystick)
[![devDependency Status](https://david-dm.org/sijpesteijn/ngx-virtual-joystick/dev-status.svg)](https://david-dm.org/sijpesteijn/ngx-virtual-joystick?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/sijpesteijn/ngx-virtual-joystick.svg)](https://github.com/sijpesteijn/ngx-virtual-joystick/issues)
[![GitHub stars](https://img.shields.io/github/stars/sijpesteijn/ngx-virtual-joystick.svg)](https://github.com/sijpesteijn/ngx-virtual-joystick/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/sijpesteijn/ngx-virtual-joystick/master/LICENSE)

## [Demo](https://sijpesteijn.github.io/ngx-virtual-joystick/standalone_demo)

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About



## Installation

Install through npm:
```
npm install --save ngx-virtual-joystick
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { ngxVirtualJoystickModule } from 'ngx-virtual-joystick';

@NgModule({
  imports: [
    ngxVirtualJoystickModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<virtual-joystick></virtual-joystick>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/sijpesteijn/ngx-virtual-joystick/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ngx-virtual-joystick/bundles/ngx-virtual-joystick.umd.js"></script>
<script>
    // everything is exported ngxVirtualJoystick namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://sijpesteijn.github.io/ngx-virtual-joystick/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
