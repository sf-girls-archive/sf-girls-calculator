import { FC } from 'react';
import { TooltipContentProps } from 'recharts';
import { createTooltip } from '../utils';

interface CustomTooltipProps extends TooltipContentProps {
  clicked: string;
}

export const CustomTooltip: FC<CustomTooltipProps> = ({ active, payload, clicked }) => {
  if (!active || !payload || (clicked && !payload.some((data) => data.name?.toString() === clicked))) {
    return null;
  }

  const renderTooltipContent = () => {
    return payload.map((data) => {
      const { color = 'black', name = '', payload: event } = data;

      if (clicked && data.name?.toString() !== clicked) {
        return null;
      }

      return createTooltip(color, name.toString(), event);
    });
  };

  return (
    <div className="agent-graph-tooltip">
      <p className="u-center mb-0">{payload[0].payload.time}s</p>
      <div className="divider" />
      {renderTooltipContent()}
    </div>
  );
};
