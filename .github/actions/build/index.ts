import * as core from '@actions/core';
import * as github from '@actions/github';

const octokit = github.getOctokit(core.getInput('token', { required: true }));

octokit.request(`GET /orgs/networkException/packages/container/workflow-testing`, { 
    headers: {
        accept: 'application/vnd.github.v3+json'
    }
}).then(console.log);