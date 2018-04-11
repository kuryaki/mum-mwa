
0. **Import json**

```
mongoimport -d testDB -c restaurants restaurants.json
```

1. **Print all documents**

```
db.restaurants.find().forEach(printjson)
```

2. **Display only restaurant_id, name, district, cuisine**

```
db.restaurants.find({},{restaurant_id:1, name:1, district:1, cuisine:1}).forEach(printjson)
```

3. **Display only restaurant_id, name, district, cuisine exclude _id**

```
db.restaurants.find({},{_id:0, restaurant_id:1, name:1, district:1, cuisine:1}).forEach(printjson)
```

4. **Display only restaurant_id, name, district, zipcode exclude _id**

```
db.restaurants.find({},{_id:0, restaurant_id:1, name:1, district:1, 'address.zipcode':1}).forEach(({ restaurant_id, name, district, address: { zipcode } }) => printjson({
    restaurant_id,
    name,
    district,
    zipcode
}))
```

5. **Display all restaurant only from Bronx**

```
db.restaurants.find({ district: 'Bronx' }).forEach(printjson)
```

6. **Display first 5 restaurant only from Bronx**

```
db.restaurants.find({ district: 'Bronx' }).limit(5).forEach(printjson)
```

7. **Display 5 after skipping first 5 restaurant only from Bronx**

```
db.restaurants.find({ district: 'Bronx' }).skip(5).limit(5).forEach(printjson)
```

8. **Display latitude less than -95.754168**

```
db.restaurants.find({'address.coord.0': { $lt : -95.754168 }}).forEach(printjson)
```

9. **Display latitude less than -65.754168**

```
db.restaurants.find({'address.coord.0': { $lt : -65.754168 }, 'grades.score': { $gt: 70 }, cuisine: { $ne: 'American ' }}).forEach(printjson)
```

10. **Display only restaurant_id, name, district, cuisine exclude _id when name starts with Wil**

```
db.restaurants.find({ name: /^Wil/ig },{_id:0, restaurant_id:1, name:1, district:1, cuisine:1}).forEach(printjson)
```

11. **Display only restaurant_id, name, district, cuisine exclude _id when name starts ends with ces**

```
db.restaurants.find({ name: /ces$/ig },{_id:0, restaurant_id:1, name:1, district:1, cuisine:1}).forEach(printjson)
```

12. **Display only restaurant_id, name, district, cuisine exclude _id when name contains reg**

```
db.restaurants.find({ name: /reg/ig },{_id:0, restaurant_id:1, name:1, district:1, cuisine:1}).forEach(printjson)
```

13. **Display all restaurant only from Bronx and prepare American or Chinese**

```
db.restaurants.find({ district: 'Bronx', $or: [{ cuisine: 'American' }, { cuisine: 'Chinese'}] }).forEach(printjson)
```

14. **Display only restaurant_id, name, district, cuisine exclude _id located in Staten Island, Queens, Bronx or Brooklyn**

```
db.restaurants.find({ district: { $in: ['Bronx', 'Queens', 'Brooklyn', 'Staten Island'] } },{_id:0, restaurant_id:1, name:1, district:1, cuisine:1}).forEach(printjson)
```

15. **Display only restaurant_id, name, district, cuisine exclude _id not located in Staten Island, Queens, Bronx or Brooklyn**

```
db.restaurants.find({ district: { $nin: ['Bronx', 'Queens', 'Brooklyn', 'Staten Island'] } },{_id:0, restaurant_id:1, name:1, district:1, cuisine:1}).forEach(printjson)
```

16. **Display only restaurant_id, name, district, cuisine exclude _id score less than 10**

```
db.restaurants.find({ 'grades.score': { $lt: 10 } },{_id:0, restaurant_id:1, name:1, district:1, cuisine:1}).forEach(printjson)
```

17. **Display only restaurant_id, name, address exclude _id with longitude in between 42 and 52**

```
db.restaurants.find({ 'address.coord.1': { $lt : 52, $gt : 42 } },{_id:0, restaurant_id:1, name:1, address:1 }).forEach(printjson)
```

18. **Print all restaurants ordered ascending by name**

```
db.restaurants.find().sort({ name: 1 }).forEach(printjson)
```

19. **Print all restaurants ordered descending by name**

```
db.restaurants.find().sort({ name: -1 }).forEach(printjson)
```

20. **Print all restaurants ordered descending by district and ascending by cuisine**

```
db.restaurants.find().sort({ cuisine: 1, district: -1 }).forEach(printjson)
```

21. **Check if all address have street**

```
db.restaurants.count({'address.street': { $exists: false }})
```

22. **Check if all address have street**

```
db.restaurants.count({'address.coord': { $type: 'double' }})
```

23. **Display only name, district, lat, lng, cuisine exclude _id when name starts with Wil**

```
db.restaurants.find({ name: /^Mad/ig },{_id:0, name:1, district:1, cuisine:1, address: 1 }).forEach(({ name, district, cuisine, address: { coord: [ lat, lng ] } }) => printjson({
    name,
    district,
    cuisine,
    lat,
    lng
}))
```
