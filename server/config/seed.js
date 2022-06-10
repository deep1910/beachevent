const db = require("./connection");
const { Date, Establishment, Event, User } = require("../models");

db.once("open", async () => {
  await Date.deleteMany();
  await Establishment.deleteMany();
  await Event.deleteMany();
  await User.deleteMany();

  const date1 = await Date.create({
    day: "06/12/2022",
    time: "11:00AM - 6:00PM",
  });
  const date2 = await Date.create({
    day: "06/12/2022",
    time: "12:00PM - 9:00PM",
  });
  const date3 = await Date.create({
    day: "06/13/2022",
    time: "5:00PM - 11:00PM",
  });
  const date4 = await Date.create({
    day: "06/17/2022",
    time: "4:00PM - 10:00PM",
  });

  const establishment1 = await Establishment.create({
    name: "Cancun Cocina",
    address: "123 Awesome Street",
    city: "Virginia Beach",
    state: "VA",
    zipCode: "30327",
    phoneNumber: "123456789",
  });

  const establishment2 = await Establishment.create({
    name: "Ocean Breeze",
    address: "99 Ocean View",
    city: "Ocean City",
    state: "MD",
    zipCode: "67394",
    phoneNumber: "456123789",
  });

  const establishment3 = await Establishment.create({
    name: "Miami Vice",
    address: "111 Beach Row",
    city: "Miami",
    state: "FL",
    zipCode: "83927",
    phoneNumber: "987654321",
  });

  const user1 = await User.create({
    name: "Bob",
    email: "bob@bob.com",
    password: "pass1234",
  });
  const user2 = await User.create({
    name: "Mary",
    email: "mary@mary.com",
    password: "pass1234",
  });
  const user3 = await User.create({
    name: "Steve",
    email: "steve@steve.com",
    password: "pass1234",
  });

  await Event.create({
    name: "Virginia Summer Bash 2022",
    host: establishment1,
    dates: [date1, date3],
  });

  await Event.create({
    name: "Miami Party 2022",
    host: establishment3,
    dates: [date2],
  });

  await Event.create({
    name: "Ocean Night 2022",
    host: establishment2,
    dates: [date4],
  });

  console.log("DATA SEEDED");
});
