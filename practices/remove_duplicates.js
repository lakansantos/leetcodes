const data = [
  {
    school_id: "123455454",
    school_name: "MARGARITO",
    school_address: "Rizal, Philippines",
    school_population: 50000,
  },
  {
    school_id: "123455454",
    school_name: "MARGARITO",
    school_address: "Rizal, Philippines",
    school_population: 50000,
  },
  {
    school_id: "123455454",
    school_name: "MARGARITO",
    school_address: "Rizal, Philippines",
    school_population: 50000,
  },
  {
    school_id: "1234554547",
    school_name: "MARGARITO",
    school_address: "Rizal, Philippines",
    school_population: 50000,
  },
];

const a = [...data];

const filter = a.filter((item, index, self) => {
  index === self.findIndex((s) => s.school_id === item.school_id);
});

console.log(filter);
