import { useState, useEffect } from 'react';
import CustomFade from '../00-experimental/customFade';
import './contact.css';

export default function Contact() {
  return (
    <div className="section">
      <ContactTitle />
      <CustomFade>
        <>
          I currently live in Korea; I can read your message right away between
          EST 8PM and 10AM.
        </>
      </CustomFade>
    </div>
  );
}

// 시간 확인해서 im available right now! 아니면 im available ---- later. (5PM~10PM EST. 이런식)
// but that doesn't mean I will ignore ur email... 이런식
function ContactTitle() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);
  const currentHour = dateState.getHours();

  // Available time in KST 9 AM ~ 8 PM, EST 8 PM to 7 AM
  // for now, start hr has to be smaller than end hr.
  const [workStartHourKST, workEndHourKST] = [9, 20];
  const [remainingWorkTime, timeUntilWorkTime] = [
    getLeftTime(dateState, getLeftHours(currentHour, workEndHourKST)),
    getLeftTime(dateState, getLeftHours(currentHour, workStartHourKST)),
  ];

  const available = (
    <>
      <h3>
        I'm available <span id="green"> NOW</span>!{' '}
        <span className="exp">And until {remainingWorkTime}.</span>
      </h3>
    </>
  );

  const notAvailable = (
    <h3>
      I'm available <span id="red">LATER</span>!
      <span className="exp">I'll be back in {timeUntilWorkTime}</span>
    </h3>
  );

  return (
    <>
      {currentHour >= workStartHourKST && currentHour <= workEndHourKST
        ? available
        : notAvailable}
    </>
  );
}

const getLeftHours = (hourFrom: number, hourTo: number): number => {
  while (hourTo < hourFrom) hourTo += 12;
  return hourTo - hourFrom;
};

const getLeftTime = (dateNow: Date, leftHours: number): string => {
  const goalDate = new Date();
  goalDate.setHours(dateNow.getHours() + leftHours); // update hours
  goalDate.setMinutes(0, 0, 0); // minutes, seconds = 00:00

  const diffDate = new Date(0);
  diffDate.setMilliseconds(goalDate.getTime() - dateNow.getTime());

  return diffDate.toISOString().substring(11, 19);
};
