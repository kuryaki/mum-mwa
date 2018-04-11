db.books.createIndex({ ISBN: 1 });
db.books.createIndex({ tags: 1 });
db.books.createIndex({ 'borrow.borrowed_by': 1, 'borrow.return_date': 1 });