import React, { useEffect, useState } from 'react';

import { formatDuration } from '../../utils/formatDuration';
import { WorkDetails } from '../../utils/types/WorkDetails';

type Props = {
  workDetails: WorkDetails,
  workId: number,
};

export const WorkDescription: React.FC<Props> = ({
  workDetails,
  workId,
}) => {
  const { shortDescription,
    link,
    linkDescription,
    startDate,
    endDate,
    responsibilities } = workDetails;

  const [startTimer, setStartTimer] = useState<string | null>(formatDuration(startDate));
  const [endTimer, setEndTimer] = useState<string | null>(formatDuration(endDate));

  useEffect(() => {
    setStartTimer(() => formatDuration(startDate));
    setEndTimer(() => formatDuration(endDate));
  }, []);

  useEffect(() => {
    setStartTimer(() => formatDuration(startDate));
    setEndTimer(() => formatDuration(endDate));

  }, [workId]);

  useEffect(() => {
    const startToSet = formatDuration(startDate);

    const startTimerName = window.setInterval(() => {

      setStartTimer(() => startToSet);
    }, 3000);
  
    return () => {
      window.clearInterval(startTimerName);
    };
  }, [workId, startTimer]);

  useEffect(() => {
    const endToSet = formatDuration(endDate);

    const endTimerName = window.setInterval(() => {
      setEndTimer(() => endToSet);
      
    }, 3000);
  
    return () => {
      window.clearInterval(endTimerName);
    };
  }, [workId, endTimer]);
  
  
  

  return (
    <div className='experience__description'>
      <div className="experience__location">
        {shortDescription}

        {link && (
          <a
            href={link}
            target='_blank'
            rel="noreferrer"
            className='experience__link'
          >
            {linkDescription}
          </a>
        )}
      </div>

      <div className="experience__duration">
        <div className="experience__date">
          {`Start: ${startDate}`}
        </div>

        <div className="experience__timer">
          {`(${startTimer} ago)`}
        </div>
      </div>

      <div className="experience__duration">
        <div className="experience__date">
          {endDate ? `End: ${endDate}` : 'Ongoing'}
        </div>

        {endTimer && (
          <div className="experience__timer">
            {`(${endTimer} ago)`}
          </div>
        )}
      </div>

      <ul className='experience__responsabilities'>
        {responsibilities
          .map((responsability, index) => (
            <li
              key={`responsability-${index}`}
              className='experience__responsabilities-item'>
              {responsability}
            </li>
          ))}
      </ul>
    </div>
  );
};
