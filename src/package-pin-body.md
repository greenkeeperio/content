Hello lovely humans,

**welcome to automated dependency management with [Greenkeeper](https://greenkeeper.io)**.
To take full advantage of this service I recommend to start out with up-to-date dependencies.

I just **updated all the dependencies in the `package.json`** file in one go.
Please look into these changes and make sure your project still works with these changes.
If you can’t update everything right now that’s fine as well.
We’ll get there over time.

From now on **I’ll create branches for every dependency update**, so they can be tested and verified in isolation and in real time. For updates that satisfy your existing version range you’ll get a pull-request whenever this branch fails your configured, automated tests – on your CI server for example.

Every single version update of your dependencies will either continue to work with your project, or you’ll get to know immediately.

Example of an in-range update breaking projects:

```diff
-  "underscore": "^1.6.0"
+  "underscore": "^1.7.0"
```

For version updates outside of your existing range you’ll get a pull request right away.
Most of the time these will be new major versions.

Now **you no longer need to check for exciting new versions by hand** – I’ll just let you know automatically.
And the pull request will not only serve as a reminder to update. In case it passes your decent test suite that’s a strong reason to merge right away.

Example of a major version update outside of the existing range:

```diff
-  "lodash": "^3.0.0"
+  "lodash": "^4.0.0"
```

Good luck with your project and see you soon :sparkles:

:palm_tree:
