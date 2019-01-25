'use strict';

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};

// Text + chalk definitions
const data = {
  name: chalk.white('        Nicolas Castellanos'),
  handle: chalk.white('nicastelo'),
  work: chalk.white('CTO at ') + chalk.hex('#ec681a')('DIXTRA'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('nicastelo'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~nicastelo'),
  github: chalk.gray('https://github.com/') + chalk.green('nicastelo'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('nicastelo'),
  keybase:
    chalk.gray('https://keybase.com/') + chalk.hex('#ff6e22')('nicastelo'),
  npx: chalk.red('npx') + ' ' + chalk.white('nicastelo'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelCard: chalk.white.bold('       Card:'),
  labelKeybase: chalk.white.bold('    Keybase:')
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const carding = `${data.labelCard}  ${data.npx}`;
const keybaseing = `${data.labelKeybase}  ${data.keybase}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  npming +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  keybaseing +
  newline +
  carding;

fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  chalk.green(boxen(output, options))
);
