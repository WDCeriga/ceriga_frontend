import { FC, useEffect, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { CameraIcon, CloseIcon } from "@common/Icons/CommonIcon";
import { formatRole } from "@services/formatRole";
import { usersRoleWithAllType } from "@interfaces/bll/dashboard.interface";
import { LogOutIcon, SettingsIcon } from "@common/Icons/UserHeaderMenu";
import { AppDispatch } from "@redux/store";
import { uploadUserProfile } from "@redux/slices/user";
import routes from "@routes/index";

import s from "./headerMenu.module.scss";

interface IMenuInfo {
  name: string;
  last_name: string;
  photo: string;
  role: usersRoleWithAllType;
  handleClose: () => void;
}

const HeaderMenu: FC<IMenuInfo> = ({
  name,
  last_name,
  role,
  handleClose,
  photo,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClose]);

  const dispatch = useDispatch<AppDispatch>();
  const handleLogOut = () => {
    localStorage.clear();
    window.location.href = "https://ceriga.co/";
    // redirect to link

  };
  const onDrop = async (files: File[]) => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("image", file);
    });
    console.log(files)
    dispatch(uploadUserProfile(formData));
    handleClose();
  };
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div ref={menuRef} className={s.menu}>
      <div className={s.menu_top}>
        <div className={s.menu_top_img} {...getRootProps()}>
          <input {...getInputProps()} type="file" />
          <img
            className={s.menu_top_img_inner}
            src={photo}
            crossOrigin="anonymous"
            alt={name}
            width="124px"
            height="124"
          />
          <div className={s.menu_top_img_icon}>
            <CameraIcon />
          </div>
        </div>
        <button onClick={handleClose} className={s.menu_top_button}>
          <CloseIcon width="24" height="24" color="#111" />
        </button>
      </div>
      <div className={s.menu_info}>
        <h3 className={s.menu_info_name}>
          {name} {last_name}
        </h3>
        <p className={s.menu_info_role}>{formatRole(role)}</p>
      </div>
      <ul className={s.menu_list}>
        <li className={s.menu_list_item}>
          <Link className={s.menu_list_item_link} to={routes.setting}>
            <p className={s.menu_list_item_link_text}>Setting</p>
            <SettingsIcon width="16" height="16" />
          </Link>
        </li>
        <li className={s.menu_list_item}>
          <button className={s.menu_list_item_link} onClick={handleLogOut}>
            <p className={s.menu_list_item_link_text}>Log Out</p>
            <LogOutIcon width="16" height="16" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
