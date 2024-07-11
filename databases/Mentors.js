// Creating the collection for mentor

Guvi> db.createCollection("mentors");
{ ok: 1 }
// Inserting the values for metors

Guvi> db.mentors.insertMany([
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
