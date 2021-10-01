import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ItemsFilter } from '@components/items/items-filter/items-filter';
import { ItemsList } from '@components/items/items-list/items-list';
import { DotaItems } from '@data/items';

const FilteredItems: NextPage = () => {

  const router = useRouter();
  const [from, to] = (router.query.slug as string[] || [1000,9999]).map(x => +x);
  const [filteredDotaItems, setFilteredDotaItems] = useState(DotaItems);
  if(isNaN(from) || isNaN(to) || from > to)
    router.push("/items");

  useEffect(() => {
    setFilteredDotaItems(DotaItems.filter(it => it.cost >= from && it.cost <= to))
  }, [from, to]);
  
  return (
    <div>
    <ItemsFilter from={from} to={to}/>
    <ItemsList items={filteredDotaItems} />
  </div>
  )
}

export default FilteredItems