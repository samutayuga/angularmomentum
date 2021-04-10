# Angular Exploring

## Requirement

- Node

  > No node no angular

  ![V8](images/node.PNG)

  Basically is to run the javascript outside the browser

- Node Package Manager

  ![V8](images/npm.PNG)

> Just tell me the name of that package I will hunt it

> This is for javascript, means hunting the javascript package

```text
>npm

Usage: npm <command>

where <command> is one of:
    access, adduser, audit, bin, bugs, c, cache, ci, cit,
    clean-install, clean-install-test, completion, config,
    create, ddp, dedupe, deprecate, dist-tag, docs, doctor,
    edit, explore, fund, get, help, help-search, hook, i, init,
    install, install-ci-test, install-test, it, link, list, ln,
    login, logout, ls, org, outdated, owner, pack, ping, prefix,
    profile, prune, publish, rb, rebuild, repo, restart, root,
    run, run-script, s, se, search, set, shrinkwrap, star,
    stars, start, stop, t, team, test, token, tst, un,
    uninstall, unpublish, unstar, up, update, v, version, view,
    whoami

npm <command> -h  quick help on <command>
npm -l            display full usage info
npm help <term>   search for help on <term>
npm help npm      involved overview

Specify configs in the ini-formatted file:
    C:\Users\pmertaya\.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config

npm@6.14.6 C:\apps\node-v12.18.3-win-x64\node_modules\npm
```

`Why need to learn node ?`

To understand node then it can be used for angular
Can I get the angular from npm?

```npm
npm install angular
```

> Getting Angular is Difficult and running the first application of angular is MORE DIFFUCULT
> How the dependencies of an angular project is organized like this,

```json
{
  "name": "mydumb-app",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~10.0.14",
    "@angular/common": "~10.0.14",
    "@angular/compiler": "~10.0.14",
    "@angular/core": "~10.0.14",
    "@angular/forms": "~10.0.14",
    "@angular/platform-browser": "~10.0.14",
    "@angular/platform-browser-dynamic": "~10.0.14",
    "@angular/router": "~10.0.14",
    "rxjs": "~6.5.5",
    "tslib": "^2.0.0",
    "zone.js": "~0.10.3"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~0.1000.8",
    "@angular/cli": "~10.0.8",
    "@angular/compiler-cli": "~10.0.14",
    "@types/node": "^12.11.1",
    "@types/jasmine": "~3.5.0",
    "@types/jasminewd2": "~2.0.3",
    "codelyzer": "^6.0.0",
    "jasmine-core": "~3.5.0",
    "jasmine-spec-reporter": "~5.0.0",
    "karma": "~5.0.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage-istanbul-reporter": "~3.0.2",
    "karma-jasmine": "~3.3.0",
    "karma-jasmine-html-reporter": "^1.5.0",
    "protractor": "~7.0.0",
    "ts-node": "~8.3.0",
    "tslint": "~6.1.0",
    "typescript": "~3.9.5"
  }
}
```

For that, there is angular cli

![V8](images/angularcli.PNG)
