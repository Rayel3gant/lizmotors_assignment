import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({percentage}) => {
  return (
    <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',

            // Text size

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: '#171af7',
            textColor: '#f6ec1b',
            trailColor: '#f4f717',
            backgroundColor: '#FFEA00',
        })}

        className='font-bold  text-xl    '
    />
  )
}

export default ProgressBar