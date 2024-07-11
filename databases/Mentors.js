// Creating the collection for mentor

Zen_Class_Programme> db.createCollection("mentors");
{ ok: 1 }

// Inserting the values for metors

Zen_Class_Programme> db.mentors.insertMany([
...     {
...         mentorId: 1,
...         mentorName: "sathish",
...         mentorEmail: "sathish@gmail.com",
...     },
...     {
...         mentorId: 2,
...         mentorName: "mani",
...         mentorEmail: "mani@gmail.com",
...     },
...     {
...         mentorId: 3,
...         mentorName: "sangeetha",
...         mentorEmail: "sangeetha@gmail.com",
...     },
...     {
...         mentorId: 4,
...         mentorName: "bala",
...         mentorEmail: "bala@gmail.com",
...     },
... ]);
