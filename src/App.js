import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useEffect } from 'react';
import { Button, TextField,Grid,Stack } from '@mui/material';
import './App.css'
import MyButton from "./MyButton";
const App = () => {
  const {
    transcript,
    resetTranscript
  } = useSpeechRecognition();

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true })
  },[])

  return (
    <>
      {/* <Button variant='contained'>Start</Button>
      <Button>Reset</Button> */}
      {/* <p>{transcript}</p> */}
      <Grid direction='row' spacing={50} alignItems='center' justifyContent='center'>
        <Grid item>
          <Button variant='outlined' color='success' size='large' className="start">Start</Button>
        </Grid>
        <Grid item>
          <Button color='error' variant='outlined' size='large' className='reset'>Reset</Button>
          </Grid>
      </Grid>
<form >
        <textarea className ="txt" value={transcript}></textarea>
      </form>
    </>
  );
};
export default App;