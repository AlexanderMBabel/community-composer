const createInitialGrid = () => {
  let notes = [];

  // ** create 24 note 300 step grid **
  for (let i = 0; i < 24; i++) {
    notes.push(new Array(30).fill(false));
  }

  return notes;
};

export default createInitialGrid;
