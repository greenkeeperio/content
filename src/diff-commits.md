The new version differs by <%= total_commits %> commits <% if (behind_by) { %>(ahead by <%= ahead_by %>, behind by <%= behind_by %>)<% } %>.

<% _.forEach(_.take(commits.reverse(), 15), function (commit) { %>- [`<%= _.take(commit.sha, 7).join('') %>`](<%= commit.html_url %>) `<%= commit.commit.message.split('\n')[0] %>`
<% }) %>
<% if (commits.length > 15) { %>
There are <%= commits.length %> commits in total. <% } %>See the [full diff](<%= html_url %>).
