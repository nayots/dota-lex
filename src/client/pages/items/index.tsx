import type { NextPage } from "next";
import { ItemsList } from '@components/items/items-list/items-list';
import { DotaItems } from '@data/items';

import styles from './styles.module.scss';

const ItemsOverview: NextPage = () => {
  return (
    <div>
      <h1>ItemsOverview: {DotaItems.length}</h1>
      <ItemsList items={DotaItems} />
    </div>
  );
};

export default ItemsOverview;
