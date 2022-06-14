import React, { useState } from "react";
import FlashcardLists from "./FlashcardLists";


function App() {
  const [flashcards, setFlashacards] = useState(SAMPLE_FLASHCARDS)
  return (
    <FlashcardLists flashcards={flashcards} />
  );
}


const SAMPLE_FLASHCARDS = [ 
  {
   id: 1,
   question: 'What is 2 + 2?',
   answer: '4',
   options: [
    '2',
    '3',
    '4',
    '5',
    ]
   },
  
  {
   id: 2,
   question: 'Question 2?',
   answer: 'Answer',
   options: [
    'Answer',
    'Answer 1',
    'Answer 2',
    'Answer 3',
    ]
   }
  
  ]


export default App;
