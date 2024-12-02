import { PopUpComponent } from './PopUpComponent';

export const LosePopUp = ({ time }: { time: number }) => {
  return (
    <PopUpComponent
      handleRestart={() => {}}
      time={time}
      isWin={false}
      health={0}
    />
  );
};
