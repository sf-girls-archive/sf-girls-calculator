import { FC } from 'react';
import { TooltipProps } from 'recharts';
import { ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { createTooltip } from '../utils';

interface CustomTooltipProps extends TooltipProps<ValueType, string> {
  clicked: string;
}

export const CustomTooltip: FC<CustomTooltipProps> = ({ active, payload, clicked }) => {
  if (!active || !payload || (clicked && !payload.some((data) => data.name === clicked))) {
    return null;
  }

  const renderTooltipContent = () => {
    return payload.map((data) => {
      const { color = 'black', name = '', payload: event } = data;

      if (clicked && data.name !== clicked) {
        return null;
      }

      return createTooltip(color, name, event);
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
