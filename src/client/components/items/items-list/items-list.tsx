import React from 'react';

import { ItemTile } from '@components/items/item-tile/item-tile';
import { DotaItem } from '@data/items';

import styles from './styles.module.scss';

export interface IItemsListProps {
  items: DotaItem[];
}

export const ItemsList: React.FC<IItemsListProps> = ({
  items,
}): JSX.Element => {
  if (!items || items.length === 0) return <div>No results :(</div>;

  return (
    <div className={styles.itemsListRoot}>
      {items.map((x) => (
        <ItemTile key={x.id} item={x} />
      ))}
    </div>
  );
};
