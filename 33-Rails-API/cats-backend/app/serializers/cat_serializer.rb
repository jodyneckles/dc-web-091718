class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :color, :breed, :image, :quote, :floof
  has_many :hobbies
end
