### This is to get around https security for google chrome
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_sess_1" --disable-web-security


### This repo uses the circle ci for the blue green deployment

## Docker
  https://hub.docker.com/r/circleci/node/


## Circleci set up
  https://circleci.com/docs/2.0/language-javascript/


lesson: 
1. be familiar with CICD pipeline
2. know how to set up circle-ci 
3. know how to run unit tests in cice pipeline


## ts VS tsx

You can use tsx instead of ts with very little difference. tsx obviously allows the usage of jsx tags inside typescript
  
```
let a: any;
let s = a as string // ok in tsx and ts
let s2 = <string>a // only valid in ts
```



