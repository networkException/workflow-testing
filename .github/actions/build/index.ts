import * as arifactHost from '@actions/artifact';
import * as shell from '@actions/exec';

const artifact = arifactHost.create();

(async () => {
    await artifact.downloadArtifact('test');
    await shell.exec('ls -lah');
})();
