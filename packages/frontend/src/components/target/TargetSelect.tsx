import { useAtomValue, useSetAtom } from 'jotai';
import { ChangeEvent, FC, useEffect, useState } from 'react';

import { Select } from '../common';
import { CurrentViewAtom, TargetDB } from '../../atoms';

export const TargetSelect: FC = () => {
  const [targetValue, setTargetValue] = useState('');

  const viewName = useAtomValue(CurrentViewAtom);
  const targets = useAtomValue(TargetDB.values);
  const setTargets = useSetAtom(TargetDB.setMany);

  const selectedTargets = targets.filter((target) => target.options[viewName].isSelected).map((target) => target.name);

  useEffect(() => {
    setTargetValue(selectedTargets[0] || '');
  }, [selectedTargets]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const name = event.target.value;
    setTargetValue(name);
    setTargets(
      targets.map((target) => [
        target.name,
        {
          ...target,
          options: { ...target.options, [viewName]: { ...target.options[viewName], isSelected: target.name === name } }
        }
      ])
    );
  };

  const getSelectOptions = () =>
    targets.map((target) => ({
      value: target.name,
      label: target.name
    }));

  const selectOptions = getSelectOptions();

  return (
    <div className="target-select-wrap">
      <Select value={targetValue} options={selectOptions} onChange={handleChange} />
    </div>
  );
};
