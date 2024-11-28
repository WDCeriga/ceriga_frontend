import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@redux/store";
import { getDraftsList } from "@redux/slices/drafts";

import EmptyList from "./EmptyList/EmptyList";
import DraftItem from "./Item/Item";
import s from "./list.module.scss";

const DraftList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { list } = useSelector((state: RootState) => state.drafts);
  useEffect(() => {
    dispatch(getDraftsList());
  }, [dispatch]);
  if (list.length === 0) {
    return <EmptyList marginT="32px" />;
  }
  return (
    <ul className={s.list}>
      {list.map((item) => (
        <DraftItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default DraftList;
