import React, { Component } from "react";
import { MdMusicOff, MdMusicNote } from "react-icons/md";

// Import your audio file
import song from "../images/audio.mp3";

class Audio2 extends Component {
  // Create state
  state = {
    // Get audio file in a variable
    audio: new Audio(song),
    // Set initial state of song
    isPlaying: true,
  };

  // Main function to handle both play and pause operations
  playPause = () => {
    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.play();
    } else {
      // Play the song if it is paused
      this.state.audio.pause();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <div className="music">
        {/* Button to call our main function */}
        <button onClick={this.playPause}>
          {this.state.isPlaying ? (
            <MdMusicOff size={30} />
          ) : (
            <MdMusicNote size={30} />
          )}
        </button>
      </div>
    );
  }
}

export default Audio2;
