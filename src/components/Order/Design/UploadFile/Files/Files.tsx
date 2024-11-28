import { FC } from "react";

import s from "./files.module.scss";

interface IFilesList {
  files: string[];
}

const FilesList: FC<IFilesList> = ({ files }) => {
  return (
    <div className={s.container}>
      <h3 className={s.container_title}>Uploaded</h3>
      <ul className={s.container_list}>
        {files.map((file) => (
          <li key={file} className={s.container_list_item}>
            {file}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilesList;
