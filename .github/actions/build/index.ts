import * as github from '@actions/github';
import * as core from '@actions/core';

console.log(github.context);
console.log(core.getInput('needs'));