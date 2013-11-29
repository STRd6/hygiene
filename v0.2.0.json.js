window["STRd6/hygiene:v0.2.0"]({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "hygiene\n=======\n\nKeeping clean\n",
      "type": "blob"
    },
    "hygiene.coffee.md": {
      "path": "hygiene.coffee.md",
      "mode": "100644",
      "content": "Hygiene\n=======\n\nHygiene keeps our biz clean.\n\nEventually it may expand to perform complex static analysis, but right now it's\njust a bunch of dumb regexes.\n\n    trailingWhitespace = /[ \\t]*$/gm\n    nothing = \"\"\n    newline = \"\\n\"\n\n    ensureTrailingNewline = (content) ->\n      if content.lastIndexOf(newline) != content.length - 1\n        \"#{content}#{newline}\"\n      else\n        content\n\n    module.exports =\n      clean: (content) ->\n        ensureTrailingNewline(\n          content\n          .replace(trailingWhitespace, nothing)\n        )\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "version: \"0.2.0\"\nentryPoint: \"hygiene\"\n",
      "type": "blob"
    },
    "test/hygiene.coffee": {
      "path": "test/hygiene.coffee",
      "mode": "100644",
      "content": "Hygiene = require \"../hygiene\"\n\ndescribe \"cleaning\", ->\n  it \"should remove trailing whitespace\", ->\n    assert.equal Hygiene.clean(\"heyy   \\n\"), \"heyy\\n\"\n\n  it \"should ensure trailing newline\", ->\n    assert.equal Hygiene.clean(\"a\"), \"a\\n\"\n\n  it \"should keep empties empty\", ->\n    assert.equal Hygiene.clean(\"\"), \"\"\n",
      "type": "blob"
    }
  },
  "distribution": {
    "hygiene": {
      "path": "hygiene",
      "content": "(function() {\n  var ensureTrailingNewline, newline, nothing, trailingWhitespace;\n\n  trailingWhitespace = /[ \\t]*$/gm;\n\n  nothing = \"\";\n\n  newline = \"\\n\";\n\n  ensureTrailingNewline = function(content) {\n    if (content.lastIndexOf(newline) !== content.length - 1) {\n      return \"\" + content + newline;\n    } else {\n      return content;\n    }\n  };\n\n  module.exports = {\n    clean: function(content) {\n      return ensureTrailingNewline(content.replace(trailingWhitespace, nothing));\n    }\n  };\n\n}).call(this);\n\n//# sourceURL=hygiene.coffee",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.2.0\",\"entryPoint\":\"hygiene\"};",
      "type": "blob"
    },
    "test/hygiene": {
      "path": "test/hygiene",
      "content": "(function() {\n  var Hygiene;\n\n  Hygiene = require(\"../hygiene\");\n\n  describe(\"cleaning\", function() {\n    it(\"should remove trailing whitespace\", function() {\n      return assert.equal(Hygiene.clean(\"heyy   \\n\"), \"heyy\\n\");\n    });\n    it(\"should ensure trailing newline\", function() {\n      return assert.equal(Hygiene.clean(\"a\"), \"a\\n\");\n    });\n    return it(\"should keep empties empty\", function() {\n      return assert.equal(Hygiene.clean(\"\"), \"\");\n    });\n  });\n\n}).call(this);\n\n//# sourceURL=test/hygiene.coffee",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "version": "0.2.0",
  "entryPoint": "hygiene",
  "repository": {
    "id": 13007778,
    "name": "hygiene",
    "full_name": "STRd6/hygiene",
    "owner": {
      "login": "STRd6",
      "id": 18894,
      "avatar_url": "https://0.gravatar.com/avatar/33117162fff8a9cf50544a604f60c045?d=https%3A%2F%2Fidenticons.github.com%2F39df222bffe39629d904e4883eabc654.png&r=x",
      "gravatar_id": "33117162fff8a9cf50544a604f60c045",
      "url": "https://api.github.com/users/STRd6",
      "html_url": "https://github.com/STRd6",
      "followers_url": "https://api.github.com/users/STRd6/followers",
      "following_url": "https://api.github.com/users/STRd6/following{/other_user}",
      "gists_url": "https://api.github.com/users/STRd6/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/STRd6/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/STRd6/subscriptions",
      "organizations_url": "https://api.github.com/users/STRd6/orgs",
      "repos_url": "https://api.github.com/users/STRd6/repos",
      "events_url": "https://api.github.com/users/STRd6/events{/privacy}",
      "received_events_url": "https://api.github.com/users/STRd6/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/STRd6/hygiene",
    "description": "Keeping clean",
    "fork": false,
    "url": "https://api.github.com/repos/STRd6/hygiene",
    "forks_url": "https://api.github.com/repos/STRd6/hygiene/forks",
    "keys_url": "https://api.github.com/repos/STRd6/hygiene/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/STRd6/hygiene/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/STRd6/hygiene/teams",
    "hooks_url": "https://api.github.com/repos/STRd6/hygiene/hooks",
    "issue_events_url": "https://api.github.com/repos/STRd6/hygiene/issues/events{/number}",
    "events_url": "https://api.github.com/repos/STRd6/hygiene/events",
    "assignees_url": "https://api.github.com/repos/STRd6/hygiene/assignees{/user}",
    "branches_url": "https://api.github.com/repos/STRd6/hygiene/branches{/branch}",
    "tags_url": "https://api.github.com/repos/STRd6/hygiene/tags",
    "blobs_url": "https://api.github.com/repos/STRd6/hygiene/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/STRd6/hygiene/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/STRd6/hygiene/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/STRd6/hygiene/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/STRd6/hygiene/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/STRd6/hygiene/languages",
    "stargazers_url": "https://api.github.com/repos/STRd6/hygiene/stargazers",
    "contributors_url": "https://api.github.com/repos/STRd6/hygiene/contributors",
    "subscribers_url": "https://api.github.com/repos/STRd6/hygiene/subscribers",
    "subscription_url": "https://api.github.com/repos/STRd6/hygiene/subscription",
    "commits_url": "https://api.github.com/repos/STRd6/hygiene/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/STRd6/hygiene/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/STRd6/hygiene/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/STRd6/hygiene/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/STRd6/hygiene/contents/{+path}",
    "compare_url": "https://api.github.com/repos/STRd6/hygiene/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/STRd6/hygiene/merges",
    "archive_url": "https://api.github.com/repos/STRd6/hygiene/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/STRd6/hygiene/downloads",
    "issues_url": "https://api.github.com/repos/STRd6/hygiene/issues{/number}",
    "pulls_url": "https://api.github.com/repos/STRd6/hygiene/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/STRd6/hygiene/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/STRd6/hygiene/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/STRd6/hygiene/labels{/name}",
    "releases_url": "https://api.github.com/repos/STRd6/hygiene/releases{/id}",
    "created_at": "2013-09-22T04:41:53Z",
    "updated_at": "2013-09-29T22:09:24Z",
    "pushed_at": "2013-09-29T22:09:23Z",
    "git_url": "git://github.com/STRd6/hygiene.git",
    "ssh_url": "git@github.com:STRd6/hygiene.git",
    "clone_url": "https://github.com/STRd6/hygiene.git",
    "svn_url": "https://github.com/STRd6/hygiene",
    "homepage": null,
    "size": 428,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "CoffeeScript",
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "network_count": 0,
    "subscribers_count": 1,
    "branch": "v0.2.0",
    "defaultBranch": "master"
  },
  "dependencies": {}
});