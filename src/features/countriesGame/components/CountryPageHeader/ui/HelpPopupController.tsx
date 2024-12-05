import { CircleHelp } from 'lucide-react';

export const HelpPopupIcon = ({ onClick }: { onClick: () => void }) => {
  return <CircleHelp onClick={onClick} className="h-6 w-6" />;
};
