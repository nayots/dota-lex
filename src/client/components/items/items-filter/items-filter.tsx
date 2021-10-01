import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';

import styles from './styles.module.scss';

export interface IItemsFilterProps {
  from: number;
  to: number;
}

export const ItemsFilter: React.FC<IItemsFilterProps> = ({from, to}): JSX.Element => {
  const router = useRouter();
  const [fromCurrent, setFromCurrent] = useState(from);
  const [toCurrent, setToCurrent] = useState(to);

  const onRangeChange = (ev: ChangeEvent<HTMLInputElement>) => {
    ev.target.name === "from"
    ? setFromCurrent(+ev.target.value)
    : setToCurrent(+ev.target.value);
  }
  
  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    router.push(`/items/${fromCurrent}/${toCurrent}`)
  }
  

  return (
    <React.Fragment>
      <form className={styles.filterForm} onSubmit={onSubmit}>
        <label htmlFor="from">Min: {fromCurrent}</label>
        <input value={fromCurrent} onChange={onRangeChange} name="from" type="range" min={0} max={9999} step={100}/>
        <label htmlFor="to">Max: {toCurrent}</label>
        <input value={toCurrent} onChange={onRangeChange}  name="to" type="range"  min={0} max={9999} step={100}/>
        <button type="submit">Search</button>
      </form>
    </React.Fragment>
  );
};
