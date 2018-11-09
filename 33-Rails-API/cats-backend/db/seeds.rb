# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.create(name: 'Snowball', color: 'white', breed: 'lion', quote: 'roar', floof: 3, image: 'https://www.telegraph.co.uk/content/dam/news/2017/08/14/TELEMMGLPICT000137411359_trans_NvBQzQNjv4Bqp9c5WVj0Jr0gvyuux5WeKJjz56m7jW7xOsaimKZ5mpU.jpeg?imwidth=450')
Cat.create(name: 'Luna', color: 'yellow', breed: 'dsh', quote: 'hey boi', floof: 5, image: 'https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg')
Cat.create(name: 'Cassa', color: 'black', breed: 'calico', quote: 'suppppp', floof: 2, image: 'https://www.catster.com/wp-content/uploads/2018/03/Calico-cat.jpg')
Cat.create(name: 'Mak', color: 'gray', breed: 'siamese', quote: 'boom', floof: 1, image: 'https://www.catster.com/wp-content/uploads/2017/11/A-Siamese-cat.jpg')

Hobby.create(name: 'push things off tables', description:'CRASH!!!!')
Hobby.create(name: 'rub your leg', description: 'puuurrrrr...')
Hobby.create(name: 'stratch the post', description: 'k c k c...')

CatHobby.create(cat_id: 1, hobby_id: 1)
CatHobby.create(cat_id: 2, hobby_id: 2)
CatHobby.create(cat_id: 2, hobby_id: 3)
CatHobby.create(cat_id: 3, hobby_id: 1)
CatHobby.create(cat_id: 3, hobby_id: 2)
CatHobby.create(cat_id: 3, hobby_id: 3)
CatHobby.create(cat_id: 4, hobby_id: 3)
