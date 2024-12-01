import { PopUpComponent } from './PopUpComponent';

export const LosePopUp = () => {
  return (
    <PopUpComponent
      handleRestart={() => {}}
      time={60}
      isWin={false}
      health={0}
    />
  );
};
