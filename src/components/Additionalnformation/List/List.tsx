import { forwardRef } from "react";
import AdditionalCard from "@common/AdditionalCard/AdditionalCard";
import s from "./list.module.scss";
import { ICard } from "@interfaces/AdditionalInfo.interface";

interface ListProps {
  items: ICard[];
}

const List = forwardRef<HTMLUListElement, ListProps>(({items }, ref) => {
  return (
    <ul className={s.list} ref={ref}>
      {items.map((item: ICard) => (
        <AdditionalCard key={item.id} {...item} />
      ))}
    </ul>
  );
});

export default List;
