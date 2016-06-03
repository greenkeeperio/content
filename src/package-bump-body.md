Hello :wave:

<% if (status === 'update') { %>:rocket::rocket::rocket:

<%= dependency_link %> just published its new version <%= version %>, which **is not covered by your current version range**.

If this pull request passes your tests you can publish your software with the latest version of <%= dependency %> – otherwise use this branch to work on adaptions and fixes.
<% } else if (status === 'noci') { %>:warning::warning::warning:

<%= dependency_link %> just published its new version <%= version %>, which **is covered by your current version range**. **No automated tests** are configured for this project.

This means it’s now **unclear whether your software still works**. Manually check if that’s still the case
and close this pull request – if it broke, use this branch to work on adaptions and fixes.

<sub>
Do you think getting a pull request for every single new version of your dependencies is too noisy?
Configure continuous integration and you will only receive them when tests fail. 
</sub>
<% } else if (status === 'failure') { %>:warning::warning::warning:

<%= dependency_link %> just published its new version <%= version %>, which **is covered by your current version range**. After updating it in your project **the build kept failing**.

This means **it’s possible that your software is malfunctioning**, because of this update. Use this branch to work on adaptions and fixes.
<% } else { %>:rotating_light::rotating_light::rotating_light:

<%= dependency_link %> just published its new version <%= version %>, which **is covered by your current version range**. After updating it in your project **the build went from success to failure**.

This means **your software is now malfunctioning**, because of this update. Use this branch to work on adaptions and fixes.
<% } %>

Happy fixing and merging :palm_tree:
