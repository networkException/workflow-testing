import * as github from '@actions/github';
import * as core from '@actions/core';
import * as arifactHost from '@actions/artifact';
import * as shell from '@actions/exec';

const artifact = arifactHost.create();

artifact.downloadArtifact('test');
shell.exec('ls -lah');