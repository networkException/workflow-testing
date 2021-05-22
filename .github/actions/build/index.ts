import * as core from '@actions/core';
import * as github from '@actions/github';

const octokit = github.getOctokit(core.getInput('token', { required: true }));

octokit.request(`GET /orgs/{org}/packages/{package_type}/{package_name}`, {
    org: 'networkException',
    package_type: 'container',
    package_name: 'workflow-testing',
    headers: {
        accept: 'application/vnd.github.v3+json'
    }
}).then(console.log);