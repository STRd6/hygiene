(function() {
  var ensureTrailingNewline, newline, nothing, trailingWhitespace;

  trailingWhitespace = /[ \t]*$/gm;

  nothing = "";

  newline = "\n";

  ensureTrailingNewline = function(content) {
    if (content.lastIndexOf(newline) !== content.length - 1) {
      return "" + content + newline;
    } else {
      return content;
    }
  };

  module.exports = {
    clean: function(content) {
      return ensureTrailingNewline(content.replace(trailingWhitespace, nothing));
    }
  };

}).call(this);
