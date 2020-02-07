import * as Tone from 'tone';
import numberToNote from './numberToNote';

const playGrid = grid => {
  let index = 0;
  const synth = new Tone.PolySynth(6, Tone.MonoSynth).toMaster();
  Tone.Transport.scheduleRepeat(time => {
    repeat(time);
  }, '8n');
  Tone.Transport.start();

  // create an array (notesInGrid) with an array for each step containing the note numbers in that step
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

  // create an array of arrays outermost array is notes 1-24 nested array is when to play notes
  // ***todo*** add note length and velosity so nested array containes array of steps the note plays a length value and a velosicty value

  //   let eachNote = [];
  //   grid.forEach(note => {
  //     let stepToTrigger = [];
  //     note.forEach((step, iter) => {
  //       step && stepToTrigger.push(iter);
  //     });
  //     eachNote.push(stepToTrigger);
  //   });

  console.log(notesInGrid);

  function repeat(time) {
    let step = index % 30;
    if (notesInGrid[step].length > 0) {
      let notes = notesInGrid[step].map(note => numberToNote(note));

      synth.triggerAttackRelease(notes, 0.3);
    }
    index++;
  }
  // iterate through each note array and create a synth action

  //   eachNote.forEach((note, iter) => {
  //     if (note !== []) {
  //       note.forEach(playSteps => {
  //         synth.triggerAttackRelease(numberToNote(iter), '8n', playSteps);
  //       });
  //     }
  //   });

  //   synth.triggerAttackRelease(['Eb3'], 0.5, 1);
  //   synth.triggerAttackRelease(['C4', 'Bb5'], 0.5, 2);

  //   notesInGrid.forEach((step, iter) => {
  //     let notes = step.map(noteNumber => numberToNote(noteNumber));
  //     if (notes.length > 0) {
  //       console.log(notes, iter + 1);

  //       synth.triggerAttackRelease(notes, 0.5, iter + 1);
  //     }
  //   });
  //   notesInGrid.forEach(step => {
  //     step.forEach((note, iter) => {
  //       setTimeout(() => {
  //         sound.rate(1 * (note / 12));
  //         sound.play();
  //       }, 500);
  //     });
  //   });

  //   soundsPerStep.forEach(eachSound => {
  //     setTimeout(() => {
  //       eachSound.play();
  //     }, 2000);
  //   });
};

export default playGrid;
