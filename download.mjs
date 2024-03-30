#!/usr/bin/env zx

const run = JSON.parse(await $`gh run list -R ggerganov/whisper.cpp -s completed -w CI -e push -L 1 --json databaseId`)[0];

if (!run) {
    console.error("No CI run found");
    process.exit(1);
}

await fs.rmdir("./bin", { recursive: true });

await $`gh run download -R ggerganov/whisper.cpp -D ./bin ${run.databaseId} -p win32-x86-64_whisper.dll`
await $`gh run download -R ggerganov/whisper.cpp -D ./bin ${run.databaseId} -p win32-x86_whisper.dll`
await $`gh run download -R ggerganov/whisper.cpp -D ./bin ${run.databaseId} -p whispercpp.jar`
await $`gh run download -R ggerganov/whisper.cpp -D ./bin ${run.databaseId} -p whisper-blas-clblast-bin-x64`
await $`gh run download -R ggerganov/whisper.cpp -D ./bin ${run.databaseId} -p whisper-blas-bin-Win32`
await $`gh run download -R ggerganov/whisper.cpp -D ./bin ${run.databaseId} -p whisper-bin-x64`
await $`gh run download -R ggerganov/whisper.cpp -D ./bin ${run.databaseId} -p whisper-bin-Win32`
