import type { NextPage } from "next";
import { ItemsFilter } from '@components/items/items-filter/items-filter';
import { ItemsList } from '@components/items/items-list/items-list';
import { DotaItems } from '@data/items';

import styles from './styles.module.scss';

const ItemsOverview: NextPage = () => {
  return (
    <div>
      <ItemsFilter from={0} to={9999}/>
      <ItemsList items={DotaItems} />
    </div>
  );
};

export default ItemsOverview;
