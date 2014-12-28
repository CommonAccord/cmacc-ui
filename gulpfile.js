'use strict';

/*
  Each gulp task exists in its own file in gulp/tasks. All files in that directory are automatically
  included via the `require` statement below.

  To add a new task, simply add a new file in gulp/tasks. The default.js file specifies the default
  set of tasks to run when you run `gulp`.
*/

var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });
