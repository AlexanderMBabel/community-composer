const updateGridSteps = (updatedStepsGrid, gridWithNotes) => {
  // loop through tempnote notes
  for (let i = 0; i < updatedStepsGrid.length; i++) {
    // loop through steps for each note
    for (let y = 0; y < updatedStepsGrid[i].length; y++) {
      // note existed add to grid
      if (typeof gridWithNotes[i][y] !== 'undefined') {
        updatedStepsGrid[i][y] = gridWithNotes[i][y];
      }
    }
  }
  return updatedStepsGrid;
};

export default updateGridSteps;
