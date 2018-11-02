# Single Page Applications

### Mocking your own backend
```
json-server --watch db.json
```

### JSON Server Routes
```
GET    /pokemon
GET    /pokemon/1
POST   /pokemon
PUT    /pokemon/1
PATCH  /pokemon/1
DELETE /pokemon/1
```
To POST a new Pokemon:
```
body: JSON.stringify({
  "name": "charmeleon",
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
})
```

### Building out the frontend (Deliverables)
- See all Pokemon sprites
- Create your own Pokemon
- Delete a pokemon on click

### Notes:
- [Documentation of using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- `body` of a fetch HAS to be a string!!





`When <some event happens>, I need to make a <what kind of> fetch request,
and manipulate the DOM <in what way?>
`

#### Announcements:
- FSP groups (choose a topic and scope by Tuesday with your partner)
- Homework
  - Video (check slack)
  - OOJS labs this weekend (weird location)
