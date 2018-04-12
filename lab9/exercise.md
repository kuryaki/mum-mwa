mongoimport -d testDB -c zips zips.json
db.zips.aggregate([{:{state:'IA'}}])
db.zips.aggregate([{:{pop:{:1000}}}])
db.zips.aggregate([{:{_id:{city:'', state:''}, zipcodes:{:1}}},{: {zipcodes:{:1}}},{: {_id:0, city:'.city', state: '.state', zipcodes: 1}},{: {state: 1}}, {: {city:1}}])
