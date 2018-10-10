class Author < ActiveRecord::Base
    has_many :books
    def full_name
        "#{self.first_name} #{self.last_name}"
    end

    def author_sanitizer
      self.full_name.gsub(/\W+/, '').downcase
    end
end