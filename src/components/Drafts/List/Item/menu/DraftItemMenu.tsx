import {
  EditIcon,
  LayersIcon,
  TrashIcon,
} from "../../../../Common/Icons/DraftMenu";
import classNames from "classnames";
import { FC } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "@redux/store";
import { deleteDraft, duplicateDraft } from "@redux/slices/drafts";

import s from "./draftItemMenu.module.scss";

interface IDraftItemMenu {
  handleClose: () => void;
  handleContinue: () => void;
  id: string;
}

const DraftItemMenu: FC<IDraftItemMenu> = ({
  id,
  handleClose,
  handleContinue,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const btnWithBorderClasses = classNames(
    s.menu_list_item_btn,
    s.menu_list_item_btn__border
  );
  const handleDuplicateDraft = () => {
    dispatch(duplicateDraft(id));
    handleClose();
  };
  const handleDeleteDraftCard = () => {
    dispatch(deleteDraft(id));
    handleClose();
  };
  return (
    <div className={s.menu}>
      <ul className={s.menu_list}>
        <li className={s.menu_list_item}>
          <button className={btnWithBorderClasses}>
            <EditIcon width="20" height="20" color="#303030" />
            <p onClick={handleContinue} className={s.menu_list_item_text}>
              Edit
            </p>
          </button>
        </li>
        <li className={s.menu_list_item}>
          <button
            onClick={handleDuplicateDraft}
            className={btnWithBorderClasses}
          >
            <LayersIcon width="20" height="20" color="#303030" />
            <p className={s.menu_list_item_text}>Duplicate the project</p>
          </button>
        </li>
        <li className={s.menu_list_item}>
          <button
            onClick={handleDeleteDraftCard}
            className={s.menu_list_item_btn}
          >
            <TrashIcon width="20" height="20" color="#C80F0F" />
            <p className={s.menu_list_item_text}>Delete</p>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DraftItemMenu;
