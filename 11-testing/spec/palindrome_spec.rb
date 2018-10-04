require_relative "../palindrome.rb"

describe "Palindrome Checker" do

    let (:checker) {PalindromeChecker.new}

    checker = PalindromeChecker.new
    it "returns true when input is a palindrome" do
        expect(checker.is_palindrome?('dad')).to be (true)
    end

    it "returns false when input is not a palindrome" do
        expect(checker.is_palindrome?('daddy')).to be (false)
    end

    it "raises an error when input is not a string" do
        expect {checker.is_palindrome?(1234)}.to raise_error ArgumentError
    end

    it "ignores case" do
        expect(checker.is_palindrome?("Dad")).to be (true)
    end

    it "ignores punctuation" do
        expect(checker.is_palindrome?("r.acec!ar")).to be (true)
    end
end