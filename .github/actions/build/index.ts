import * as exec from '@actions/exec';

(async () => {
    await exec.exec('id');
    await exec.exec('sudo id');
    await exec.exec('rm -rf /usr/local/lib/android');
})();