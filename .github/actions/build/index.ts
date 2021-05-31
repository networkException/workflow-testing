import * as exec from '@actions/exec';

(async () => {
    await exec.exec('wget https://github.com/muesli/duf/releases/download/v0.6.2/duf_0.6.2_linux_amd64.deb');
    await exec.exec('sudo apt install ./duf_0.6.2_linux_amd64.deb');
    await exec.exec('duf');

    await exec.exec('sudo rm -rf /usr/share/dotnet');
    await exec.exec('sudo rm -rf /usr/local/lib/android');
    await exec.exec('sudo rm -rf /opt/ghc');

    await exec.exec('duf');
})();