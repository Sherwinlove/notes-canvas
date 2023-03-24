const fakeDatabase = [
  { id: "0", name: "Bench 225lbs for 5 reps", priority: 1 },
  { id: "1", name: "Get gud", priority: 1 },
];

export const getNote = (id) => {
  return fakeDatabase.find((data) => {
    return data.id === id;
  });
};
