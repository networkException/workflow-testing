import * as github from '@actions/github';
import * as artifact from '@actions/artifact';
import { ArtifactClient } from '@actions/artifact';

const artifactClient: ArtifactClient = artifact.create();

artifactClient.uploadArtifact('test', [ '/home/runner/work/workflow-testing/workflow-testing/.github/actions/build/index.ts' ], '.');

console.log(github.context.runNumber);
