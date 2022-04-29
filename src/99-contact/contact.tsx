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
      <img
        className="contact-icon"
        src={require('./contactIcons/email.png')}
        alt="gmail"
      />
      <img
        className="contact-icon"
        src={require('./contactIcons/instagram.png')}
        alt="gmail"
      />
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

  // Available time in KST 9 AM ~ 8 PM, EST 8 PM to 7 AM
  // for now, start hr has to be smaller than end hr.
  const [workStartHourKST, workEndHourKST] = [9, 20];
  const [remainingWorkTime, timeUntilWorkTime] = [
    getLeftTime(dateState, getLeftHours(currentHour, workEndHourKST)),
    getLeftTime(dateState, getLeftHours(currentHour, workStartHourKST)),
  ];

  // given a string length of 8, adds h, m, s in between. truncates leading 0.
  // prettier-ignore
  const timeFormatter = (timeString: string) =>
    `${+timeString.substring(0, 2)}h 
     ${+timeString.substring(3, 5)}m 
     ${+timeString.substring(6, 8)}s`;

  const available = (
    <>
      <h3>
        I'M AVAILABLE <span id="green"> NOW</span>!{' '}
        <div className="exp">
          and until {timeFormatter(remainingWorkTime)} later...
        </div>
      </h3>
    </>
  );

  const notAvailable = (
    <h3>
      I'M AVAILABLE <span id="red"> LATER</span>!{' '}
      <div className="exp">
        I'll be back in {timeFormatter(timeUntilWorkTime)}.
      </div>
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
