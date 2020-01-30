const createInitialGrid = (length, note) => {
  let notes = [];

  // ** create 24 note 300 step grid **
  for (let i = 0; i < note; i++) {
    notes.push(new Array(length).fill(false));
  }

  return notes;
};

export default createInitialGrid;
