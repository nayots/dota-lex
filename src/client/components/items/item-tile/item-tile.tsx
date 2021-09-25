import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { DotaItem } from '@data/items';

import styles from './styles.module.scss';

export interface IItemTileProps {
  item: DotaItem;
}

const fallbackImg =
  "https://static.wikia.nocookie.net/dota2_gamepedia/images/a/ab/Wizard_Glass_icon.png/revision/latest/scale-to-width-down/85";

const recipeCdnImage =
  "http://cdn.dota2.com/apps/dota2/images/items/recipe_lg.png";
export const ItemTile: React.FC<IItemTileProps> = ({ item }): JSX.Element => {
  const router = useRouter();

  const [imgUrl, setImgUrl] = useState(
    item.name.startsWith("item_recipe")
      ? recipeCdnImage
      : `http://cdn.dota2.com/apps/dota2/images/items/${item.name.replace(
          /^item_/gm,
          ""
        )}_lg.png`
  );

  return (
    <div className={styles.tileRoot}>
      <span className={styles.tileRoot_name}>{item.localized_name}</span>
      <div className={styles.tileRoot_image}>
        <Image
          onClick={() => router.push(`/items/${item.name}`)}
          title={item.localized_name}
          src={imgUrl}
          alt={item.localized_name}
          layout="responsive"
          width="85px"
          height="62px"
          placeholder="empty"
          onError={() => {
            setImgUrl(fallbackImg);
          }}
        />
      </div>
    </div>
  );
};
