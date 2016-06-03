Hello :wave:

This is the first automated pull requests to help reach the goal of up to date and stable software.
It updates all of the dependencies in the `package.json` in one go, but from now on you’ll receive **pull requests** for each dependency update **in isolation and in real time**.

For updates that satisfy the existing version range you’ll get pull-requests only if it breaks your build.

Example:

```diff
-  "underscore": "^1.6.0"
+  "underscore": "^1.7.0"
```

When an update does not satisfy the existing range you’ll get the pull request right away.

Example:

```diff
-  "lodash": "^3.0.0"
+  "lodash": "^4.0.0"
```

Happy fixing and merging :palm_tree:
