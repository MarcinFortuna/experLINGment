import React from 'react'
import AudioPlayer from 'react-responsive-audio-player';
import Evaluation from './Evaluation';

// Put all audio files in the audio_files folder. Then import all audio files:
// import url1 from './audio_files/example.mp3';


const ExampleBox = props => {
    // Add all audio files and name them:
    // (For now, it must be done manually)
    let playlist = [{
        url: 'example',
        title: 'Example'
    }];

    return (
        <div className="exampleBox">
            <div id="audio_player_container">
                <AudioPlayer playlist={[playlist[props.stage - 1]]} stage={props.stage} controls={['playpause', 'progressdisplay']} cycle={false} autoplay={false} />
            </div>
            <Evaluation recInfo={playlist[props.stage - 1]} addEval={props.addEval} moveToNextStage={props.moveToNextStage} length={playlist.length} stage={props.stage}/>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{flex: (props.stage-1)/playlist.length}} aria-valuenow={(props.stage-1)/playlist.length} aria-valuemin="0" aria-valuemax="100">{props.stage-1}/{playlist.length}</div>
            </div>

        </div>
    );
}


export default ExampleBox