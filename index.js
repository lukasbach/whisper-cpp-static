const path = require("path");
exports = {
    jar: path.join(__dirname, "bin/whispercpp.jar/whispercpp.jar"),
    dll: {
        x64: path.join(__dirname, "bin/win32-x86-64_whisper.dll/whisper.dll"),
        x86: path.join(__dirname, "bin/win32-x86_whisper.dll/whisper.dll")
    },
    bin: {
        win: {
            x64: path.join(__dirname, "bin/whisper-bin-x64"),
            x86: path.join(__dirname, "bin/whisper-bin-Win32")
        }
    },
    blas: {
        win: {
            x64: path.join(__dirname, "bin/whisper-blas-clblast-bin-x64"),
            x86: path.join(__dirname, "bin/whisper-blas-bin-Win32")
        }
    }
};