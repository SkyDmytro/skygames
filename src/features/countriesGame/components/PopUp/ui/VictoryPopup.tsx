import { PopUpComponent } from './PopUpComponent';

export const VictoryPopup = ({
  health,
  time,
}: {
  health: number;
  time: number;
}) => {
  return (
    <PopUpComponent
      handleRestart={() => {}}
      time={time}
      isWin={true}
      health={health}
    />
  );
};
