Hygiene
=======

Hygiene keeps our biz clean.

Eventually it may expand to perform complex static analysis, but right now it's
just a bunch of dumb regexes.

    trailingWhitespace = /[ \t]*$/gm
    nothing = ""
    newline = "\n"

    ensureTrailingNewline = (content) ->
      if content.lastIndexOf(newline) != content.length - 1
        "#{content}#{newline}"
      else
        content

    module.exports =
      clean: (content) ->
        ensureTrailingNewline(
          content
          .replace(trailingWhitespace, nothing)
        )
