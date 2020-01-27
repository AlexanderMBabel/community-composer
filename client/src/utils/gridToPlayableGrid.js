const gridToPlayableGrid = grid => {
  let notesInGrid = [];
  for (let i = 0; i < 30; i++) {
    let notesInStep = [];
    grid.forEach((note, iter) => {
      //   console.log(note);
      if (note[i]) {
        notesInStep.push(iter);
      }
    });
    notesInGrid.push(notesInStep);
  }
  return notesInGrid;
};

export default gridToPlayableGrid;
