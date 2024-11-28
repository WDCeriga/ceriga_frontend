import { FC } from "react";

import s from "./comment.module.scss";

interface ICommentSelectNeck {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CommentSelectNeck: FC<ICommentSelectNeck> = ({ value, onChange }) => {
  return (
    <div className={s.content}>
      <h3 className={s.content_title}>Leave your comment</h3>
      <textarea
        className={s.content_textarea}
        value={value}
        onChange={onChange}
        placeholder="Enter"
      ></textarea>
    </div>
  );
};

export default CommentSelectNeck;
