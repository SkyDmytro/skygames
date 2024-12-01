import { PopUpComponent } from './PopUpComponent';

export const VictoryPopup = ({ health }: { health: number }) => {
  return (
    <PopUpComponent
      handleRestart={() => {}}
      time={60}
      isWin={true}
      health={health}
    />
  );
};
