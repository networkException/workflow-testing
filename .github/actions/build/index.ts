import * as exec from '@actions/exec';

(async () => {
    await exec.exec('sudo rm -rf /usr/local/lib/android');
})();