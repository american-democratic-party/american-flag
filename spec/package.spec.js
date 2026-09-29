// american-flag
// Package Specification Suite

// Imports
import { assertDeepStrictEqual } from 'assert-deep-strict-equal';
import fs from 'node:fs';

////////////////////////////////////////////////////////////////////////////////
describe('The "dist" folder', () => {

   it('contains the correct files', () => {
      const actual = fs.readdirSync('dist').sort();
      const expected = [
         'american-flag.svg',
         'us-flag-icon.128x128.png',
         'us-flag-large.1235x650.png',
         'us-flag-small.128x67.png',
         'us-flag.min.svg',
         ];
      assertDeepStrictEqual(actual, expected);
      });

   });

////////////////////////////////////////////////////////////////////////////////
describe('Package version number', () => {

   it('follows semantic version formatting', () => {
      const versionLine = /<!-- Version ([0-9.]+) *-->/;
      const version =     fs.readFileSync('dist/american-flag.svg', 'utf-8').match(versionLine)[1];
      const semVer =      /\d+[.]\d+[.]\d+/;
      const actual =      { version: version, valid: semVer.test(version) };
      const expected =    { version: version, valid: true };
      assertDeepStrictEqual(actual, expected);
      });

   });
