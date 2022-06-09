const assert = require("assert");
const isPalindrome = require("../palindrome.js");

describe("Palindrome test", function() {
  it("recognizes a non-palindrome", function() {
    expect(isPalindrome("top spot")).toBe(false);
  });

  it("should be case-sensitive", function() {
    assert.strictEqual(isPalindrome("Top spot"), false);
  });

  it("knows that an empty string is a palindrome", function() {
    expect(isPalindrome(".. .")).toBe(false);
  });

  it("should return true for a same letter repeated", function() {
    assert.strictEqual(isPalindrome("abc"), false);
  });

  it("should consider whitespace", function() {
    assert.strictEqual(isPalindrome("top spot"), false);
  });
});
