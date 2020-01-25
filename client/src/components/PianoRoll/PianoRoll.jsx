import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Howl, Howler } from 'howler';
import createInitialGrid from '../../utils/createInitialGrid';
import playGrid from '../../utils/playGrid';

const PianoRoll = () => {
  const [noteName, setNoteName] = useState('');
  const [notes, setNotes] = useState(createInitialGrid());
  const [showBlockValue, setShowBlockValue] = useState(false);
  //   const [playing, setPlaying] = useState(false);
  //   const [notes, setNotes] = useState([]);
  //   const [singleNoteTrack, setSingleNoteTrack] = useState([]);

  //   ** create array with 1-300  **
  //   useLayoutEffect(() => {
  //   let singleNoteTrack = [];
  //   let notes = [];
  //   for (var i = 1; i <= 100; i++) {
  //     singleNoteTrack.push(false);
  //   }
  //   // setSingleNoteTrack(tempTrack);

  //   // ** create 24 note 300 step grid **
  //   const createGrid = () => {
  //     for (var i = 0; i < 24; i++) {
  //       notes.push(singleNoteTrack);
  //     }
  //     //   setNotes(tempNotes);
  //   };
  //   createGrid();
  //   }, []);

  // howler init
  Howler.volume(0.5);
  let sound = new Howl({
    src: ['https://freewavesamples.com/files/Casio-MT-600-Pearl-Drop-C3.wav']
  });

  //   console.log(notes, singleNoteTrack);

  // ** noteNumber to note name
  const noteNumberToName = number => {
    switch (number) {
      case 0:
      case 12:
        return 'B';
      case 1:
      case 13:
        return 'Bb';
      case 2:
      case 14:
        return 'A';
      case 3:
      case 15:
        return 'G#';
      case 4:
      case 16:
        return 'G';
      case 5:
      case 17:
        return 'F#';
      case 6:
      case 18:
        return 'F';
      case 7:
      case 19:
        return 'E';
      case 8:
      case 20:
        return 'Eb';
      case 9:
      case 21:
        return 'D';
      case 10:
      case 22:
        return 'C#';
      case 11:
      case 23:
        return 'C';
      default:
        return 'other';
    }
  };

  console.log(notes);
  const showNote = (number, step) => {
    setNoteName(noteNumberToName(number));
  };

  const stepClick = (note, step, stepValue) => {
    let tempNotes = notes;
    sound.play();
    sound.rate(2 * (note / 12));

    tempNotes[note][step] = !tempNotes[note][step];

    setNotes(tempNotes);
    setShowBlockValue(!showBlockValue);
    console.log(notes);
    // setTimeout(() => {
    //   sound.stop();
    // }, 1000);
  };

  return (
    <div>
      <div className="flex bg-gray-800 w-full items-center justify-center">
        <button className="p-3 bg-green-400" onClick={() => playGrid(notes)}>
          Play
        </button>
        <button className="p-3 bg-red-300">Stop</button>
      </div>
      <section id="grid" className="mx-auto container mt-5">
        {notes.map((note, noteNumber) => (
          <div key={noteNumber} className="flex">
            {note.map((step, stepNumber) => (
              <div
                key={stepNumber}
                className={`h-5 w-10 border border-teal-400 bg-gray-200 px-4 hover:bg-orange-200 ${notes[noteNumber][stepNumber] ? 'bg-red-500' : 'bg-red-200'}`}
                onMouseOver={() => showNote(noteNumber, stepNumber)}
                onClick={() => stepClick(noteNumber, stepNumber, step)}
              >
                {note}
              </div>
            ))}
          </div>
        ))}
      </section>
      <div>{noteName}</div>
      <div>{showBlockValue}</div>
    </div>
  );
};

export default PianoRoll;
