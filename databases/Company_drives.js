//Creating the collection Company Drives

Guvi> db.createCollection("companyDrives");
{ ok: 1 }

// Inserting the values into companyDrives

Guvi> db.companyDrives.insertMany([
...     {
...         userId: 1,
...         driveDate: new Date("04-oct-2024"),
...         company: "Google",
...     },
...     {
...         userId: 1,
...         driveDate: new Date("11-oct-2024"),
...         company: "Amazon",
...     },
...     {
...         userId: 2,
...         driveDate: new Date("20-oct-2024"),
...         company: "Guvi",
...     },
...     {
...         userId: 3,
...         driveDate: new Date("25-oct-2024"),
...         company: "Zoho",
...     },
...     {
...         userId: 2,
...         driveDate: new Date("27-oct-2024"),
...         company: "TCS",
...     },
... ]);
