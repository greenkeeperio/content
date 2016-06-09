Hello lovely humans,

**welcome to automated dependency management with [Greenkeeper](https://greenkeeper.io)**.
To take full advantage of this service I recommend to start out with up-to-date dependencies.

I just **updated all the dependencies in the `package.json`** file in one go.
Please look into these changes and make sure your project still works with them applied.
If you can’t update everything right now that’s fine as well.
We’ll get there over time.

Now that you told me to monitor this project **I’ll create a branch for every dependency update**, with the new version applied. The branch creation should trigger your testing services to check the new version. Using the results of these tests I’ll try to open meaningful and helpful pull requests, so your dependencies remain working and up-to-date.

```diff
-  "underscore": "^1.6.0"
+  "underscore": "^1.7.0"
```

In the above example you can see an in-range update. `1.7.0` is included in the old `^1.6.0` range, because of the [caret `^` character ](https://docs.npmjs.com/misc/semver#ranges).
When there is a failure reported for the update I’ll create a pull request so you know about the problem immediately. When it reports success I’ll delete the branch again, because no action needs to be taken – everything is fine.

This way every single version update of your dependencies will either continue to work with your project, or you’ll get to know of potential problems immediately :sparkles:

```diff
-  "lodash": "^3.0.0"
+  "lodash": "^4.0.0"
```

In this example the new version `4.0.0` is not included in the old `^3.0.0` range.
For version updates like these – let’s call them “out of range” updates – you’ll receive a pull request right away.

Now **you no longer need to check for exciting new versions by hand** – I’ll just let you know automatically.
And the pull request will not only serve as a reminder to update. In case it passes your decent test suite that’s a strong reason to merge right away :shipit:

Are you unsure about how things are supposed to work?

There is a collection of [frequently asked questions](https://greenkeeper.io/faq.html) and of course you may always [ask my humans](https://github.com/greenkeeperio/greenkeeper/issues/new).

Good luck with your project and see you soon :sparkles:

:palm_tree:
