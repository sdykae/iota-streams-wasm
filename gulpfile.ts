import { task, src, dest, series } from 'gulp';
import { exec } from 'child_process';
import { promisify } from 'util';
import {
  copyFileSync,
  accessSync,
  PathLike,
  readFileSync,
  writeFileSync,
  unlinkSync,
} from 'fs';
import { copy, unlink } from 'fs-extra';
import { join } from 'path';
const asyncExec = promisify(exec);
const exists = (path: PathLike): boolean => {
  try {
    accessSync(path);
    return true;
  } catch {
    return false;
  }
};
const wasmPath = join(process.cwd(), 'streams', 'bindings', 'wasm');
enum Task {
  default = 'default',
  install_deps = 'install_deps',
  rm_conflict_files = 'rm_conflict_files',
  run_build_scripts = 'run_build_scripts',
  copy_built_dirs = 'copy_built_dirs',
  clean_built_dirs = 'clean_built_dirs',
}
const archives = {
  'wasm-node': 'node',
  'wasm-web': 'web',
};
task(Task.install_deps, (cb) => {
  asyncExec('yarn', {
    cwd: wasmPath,
  })
    .then((x) => {
      console.log(x);
      cb();
    })
    .catch((x) => {
      console.log(x);
      cb();
    });
});

task(Task.copy_built_dirs, (cb) => {
  const copyDirs = Object.entries(archives).map(([k, v]) => {
    return copy(join(wasmPath, k), join(process.cwd(), v));
  });
  Promise.all(copyDirs)
    .then((x) => {
      console.log(x);
      cb();
    })
    .catch((x) => {
      console.log(x);
      cb();
    });
});
task(Task.run_build_scripts, (cb) => {
  asyncExec('yarn build:nodejs', {
    cwd: wasmPath,
  })
    .then((x) => {
      console.log(x);
      return asyncExec('yarn build:web', {
        cwd: wasmPath,
      });
    })
    .then((x) => {
      console.log(x);
      cb();
    })
    .catch((x) => {
      console.log(x);
      cb();
    });
});
task(Task.rm_conflict_files, (cb) => {
  const conflictFiles = ['package-lock.json'];
  conflictFiles.map((f) => {
    if (exists(join(wasmPath, f))) {
      unlinkSync(join(wasmPath, f));
      return true;
    } else {
      return false;
    }
  });
  cb();
});
task(Task.clean_built_dirs, (cb) => {
  const conflictFiles = ['package-lock.json', 'README.md'];
  const unnecessaryFiles = Object.entries(archives).reduce<Promise<void>[]>(
    (a, [k, v]) => {
      if (exists(join(process.cwd(), v))) {
        conflictFiles.map((f) => {
          a.push(unlink(join(process.cwd(), v, f)));
        });
      } else {
      }
      return a;
    },
    <Promise<void>[]>[],
  );
  Promise.all(unnecessaryFiles)
    .then((x) => {
      console.log(x);
      cb();
    })
    .catch((x) => {
      console.log(x);
      cb();
    });
});

task(
  Task.default,
  series(
    Task.rm_conflict_files,
    Task.install_deps,
    Task.run_build_scripts,
    Task.copy_built_dirs,
    Task.clean_built_dirs,
  ),
);
