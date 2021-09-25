import type { NextPage } from "next";
import { useRouter } from 'next/router';

const ItemDetails: NextPage = () => {
  const {query} = useRouter();

  return (
    <div>
      <h1>ItemDetails: {query?.name}</h1>
    </div>
  );
};

export default ItemDetails;
