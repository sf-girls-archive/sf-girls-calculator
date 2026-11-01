import { FC, useState } from 'react';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import {
  CartesianGrid,
  Legend,
  LegendProps,
  Line,
  LineChart,
  ReferenceArea,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { Agent, ResultType } from '@sf-girls-calculator/calculator';

import { CustomTooltip } from './index';
import { Button } from '../common';
import { getColorFromString, prepareGraphData } from '../utils';

type GraphType = {
  left: string;
  right: string;
  refAreaLeft: string;
  refAreaRight: string;
  top: string | number;
  bottom: string | number;
};

const initialGraphState: GraphType = {
  refAreaLeft: '',
  refAreaRight: '',
  left: 'dataMin',
  right: 'dataMax',
  top: 'dataMax',
  bottom: 'dataMin'
};

export const Graph: FC<{ result: ResultType }> = ({ result }) => {
  const [graphState, setGraphState] = useState(initialGraphState);
  const [currentHover, setCurrentHover] = useState('');
  const [currentClicked, setCurrentClicked] = useState('');

  const data = prepareGraphData(result);

  const handleMouseClick: LegendProps['onClick'] = (data) => {
    const clickedValue = data.value?.toString() ?? '';

    setCurrentClicked((prev) => {
      if (prev === clickedValue) {
        return '';
      }

      return clickedValue;
    });
  };

  const getYAxisDomain = (from: string, to: string) => {
    let top = 0;
    let bottom = Infinity;

    data.forEach((dataSet) => {
      const refData = dataSet.filter((d) => d.time <= Number(to) && d.time >= Number(from));

      refData.forEach((d) => {
        top = Math.max(top, d.totalDamage);
        bottom = Math.min(bottom, d.totalDamage);
      });
    });

    return [bottom, top];
  };

  const zoom = () => {
    let { refAreaLeft, refAreaRight } = graphState;

    if (!refAreaLeft || !refAreaRight || refAreaLeft === refAreaRight) {
      setGraphState((prev) => ({
        ...prev,
        refAreaRight: '',
        refAreaLeft: ''
      }));

      return;
    }

    if (refAreaLeft > refAreaRight) {
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];
    }

    const [bottom, top] = getYAxisDomain(refAreaLeft, refAreaRight);

    setGraphState((prev) => ({
      ...prev,
      refAreaLeft: '',
      refAreaRight: '',
      left: refAreaLeft ?? '',
      right: refAreaRight ?? '',
      bottom,
      top
    }));
  };

  const { refAreaLeft, refAreaRight, left, right, top, bottom } = graphState;

  return (
    <div className="u-unselectable graph-container" style={{ height: '100%', width: '100%' }}>
      <Button
        className="reset-graph"
        color="transparent"
        tooltip="Zoom out"
        tooltipPosition="top"
        onClick={() => setGraphState(initialGraphState)}
      >
        <FaExpandArrowsAlt size={20} />
      </Button>
      <ResponsiveContainer>
        <LineChart
          onMouseDown={(e) => setGraphState((prev) => ({ ...prev, refAreaLeft: String(e?.activeLabel ?? '') }))}
          onMouseMove={(e) => refAreaLeft && setGraphState((prev) => ({ ...prev, refAreaRight: String(e?.activeLabel ?? '') }))}
          onMouseUp={zoom}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            allowDataOverflow
            allowDuplicatedCategory={false}
            dataKey="time"
            domain={[left, right]}
            type="number"
            name="Time"
            unit="s"
            reversed
          />
          <YAxis
            allowDataOverflow
            allowDuplicatedCategory={false}
            dataKey="totalDamage"
            domain={[bottom, top]}
            type="number"
            name="Damage"
            mirror
          />
          <Tooltip content={(props) => <CustomTooltip {...props} clicked={currentClicked} />} />
          <Legend
            onClick={handleMouseClick}
            onMouseEnter={(event) => setCurrentHover(event.value?.toString() ?? '')}
            onMouseLeave={() => setCurrentHover('')}
          />
          {result.team.map((agent: Agent, index: number) => {
            const isMatch = agent.name === (currentClicked || currentHover);
            const isClickOrHover = currentClicked || currentHover;

            const activeDot = !currentClicked || isMatch;
            const opacity = isMatch ? 1 : isClickOrHover ? 0.1 : 1;
            const strokeWidth = isMatch ? 2 : 1;

            return (
              <Line
                activeDot={activeDot}
                animationDuration={500}
                connectNulls
                data={data[index]}
                dataKey="totalDamage"
                dot={false}
                key={index}
                name={agent.name}
                opacity={opacity}
                strokeWidth={strokeWidth}
                stroke={getColorFromString(agent.name)}
                type="basis"
              />
            );
          })}

          {refAreaLeft && refAreaRight && (
            <ReferenceArea yAxisId="0" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
