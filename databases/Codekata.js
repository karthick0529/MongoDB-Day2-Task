// Creating the Codekata collection

Zen_Class_Programme> db.createCollection("codeKata");
{ ok: 1 }

// Inserting the values into the codekata collection

Zen_Class_Programme> db.codekata.insertMany([
...     {
...         userId: 1,
...         problemSolved: 13,
...     },
...     {
...         userId: 2,
...         problemSolved: 11,
...     },
...     {
...         userId: 3,
...         problemSolved: 16,
...     },
...     {
...         userId: 4,
...         problemSolved: 31,
...     },
...     {
...         userId: 5,
...         problemSolved: 33,
...     },
...     {
...         userId: 6,
...         problemSolved: 36,
...     },
...     {
...         userId: 7,
...         problemSolved: 61,
...     },
...     {
...         userId: 8,
...         problemSolved: 63,
...     },
...     {
...         userId: 9,
...         problemSolved: 66,
...     },
...     {
...         userId: 10,
...         problemSolved: 66,
...     },
...     {
...         userId: 11,
...         problemSolved: 63,
...     },
...     {
...         userId: 12,
...         problemSolved: 16,
...     },
...     {
...         userId: 13,
...         problemSolved: 61,
...     },
...     {
...         userId: 14,
...         problemSolved: 36,
...     },
...     {
...         userId: 15,
...         problemSolved: 33,
...     },
...     {
...         userId: 16,
...         problemSolved: 13,
...     },
...     {
...         userId: 17,
...         problemSolved: 31,
...     },
...     {
...         userId: 18,
...         problemSolved: 16,
...     },
...     {
...         userId: 19,
...         problemSolved: 13,
...     },
...     {
...         userId: 20,
...         problemSolved: 11,
...     },
... ]);
