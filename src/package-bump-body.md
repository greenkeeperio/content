Hello lovely humans,

<%= dependency_link %> just published its new version <%= version %>.

<table>
  <tr>
    <th align=left>
      State
    </th>
    <td>
      <%= {update: ':rocket:', failure: ':warning:', noci: ':warning:'}[status] || ':rotating_light:' %>
    </td>
  </tr>
  <tr>
    <th align=left>
      Dependency
    </td>
    <td>
      <%= dependency %>
    </td>
  </tr>
  <tr>
    <th align=left>
      New version
    </td>
    <td>
      <%= version %>
    </td>
  </tr>
  <tr>
    <th align=left>
      Type
    </td>
    <td>
      <%= (type || dependency_type).replace(/ies$/, 'y') %>
    </td>
  </tr>
</table>

<% if (status === 'update') { %>This version is **not covered** by your **current version range**.

Without accepting this pull request your project will work just like it did before. There might be a bunch of new features, fixes and perf improvements that the maintainers worked on for you though.

I recommend you look into these changes and try to get onto the latest version of <%= dependency %>.
Given that you have a decent test suite, a passing build is a strong indicator that you can take advantage of these changes by merging the proposed change into your project. Otherwise this branch is a great starting point for you to work on the update.
<% } else if (status === 'noci') { %>This version is **covered** by your **current version range**, but I **could not detect automated tests** for this project. Without a test suite I **can not really tell whether your project still works**.

I was looking at the latest commit of your default branch, but GitHub said there is no status attached to it.
<% } else if (status === 'failure') { %>This version is **covered** by your **current version range** and after updating it in your project **the build kept failing**.

**It looks like your project, in its current form, is malfunctioning** and this update didn’t really change that. I don’t want to leave you in the dark about updates though. I recommend you get your project passing and then check the impact of this update again.
<% } else { %>This version is **covered** by your **current version range** and after updating it in your project **the build went from success to failure**.

<% if ((type || dependency_type) === 'dependencies') { %>As <%= dependency %> is a direct dependency of this project **this is very likely breaking your project right now**. If other packages depend on you it’s very likely also breaking them.
I recommend you give this issue a very high priority. I’m sure you can resolve this :muscle:
<% } else { %>As <%= dependency %> is “only” a <%= (type || dependency_type).replace(/ies$/, 'y') %> of this project it **might not break production or downstream projects**, but “only” your build or test tools – **preventing new deploys or publishes**.

I recommend you give this issue a high priority. I’m sure you can resolve this :muscle:
<% } %>

Of course this could just be a false positive, caused by a flaky test suite, or third parties that are currently broken or unavailable, but that would be another problem I’d recommend working on.
<% } %>

Do you have any ideas how I could improve these pull requests? Did I report anything you think isn’t right?
Are you unsure about how things are supposed to work?

There is a collection of [frequently asked questions](https://greenkeeper.io/faq.html) and while I’m just a bot, there is a group of people who are happy to teach me new things. [Let them know](https://github.com/greenkeeperio/greenkeeper/issues/new).

Good luck with your project :sparkles:

You rock!

:palm_tree:
