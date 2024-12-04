import { PopUpComponent } from './PopUpComponent';

export const LosePopUp = ({ time }: { time: number }) => {
  return <PopUpComponent time={time} isWin={false} health={0} />;
};
