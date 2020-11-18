import React, { useRef } from 'react';
import AudioSpectrum from 'react-audio-spectrum';

import './AudioVisualizer.scss';

const AudioVisualizer = () => {
    const audioRef = useRef(document.querySelector('.audio'));

    const handleFiles = (e) => {
        let files = e.target.files;
        audioRef.current.src = URL.createObjectURL(files[0]);
        audioRef.current.load();
    };

    return (
        <div className="container">
            <h1>Audio Visualizer</h1>
            <p>JavaScript, HTML and CSS.</p>
            <p>
                The application uses the{' '}
                <a
                    href="https://www.npmjs.com/package/react-audio-spectrum"
                    target="_blank"
                >
                    React Audio Spectrum
                </a>{' '}
                module
            </p>

            <div className="player">
                <div className="analyser-wrap">
                    <AudioSpectrum
                        id="audio-canvas"
                        height={100}
                        width={500}
                        audioId={'audio-element'}
                        capColor={'#007cc3'}
                        capHeight={2}
                        meterWidth={4}
                        meterCount={512}
                        meterColor={[
                            { stop: 0, color: '#000' },
                            { stop: 0.5, color: '#003452' },
                            { stop: 1, color: '#003452' },
                        ]}
                        gap={2}
                    />
                </div>
                <div className="audio-box">
                    <audio
                        ref={audioRef}
                        controls
                        className="audio"
                        id="audio-element"
                    ></audio>
                    <input type="file" onChange={(e) => handleFiles(e)} />
                </div>
            </div>
        </div>
    );
};

export default AudioVisualizer;
