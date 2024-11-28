import { FC } from "react";
import { Link } from "react-router-dom";

import { LinkIcon } from "@common/Icons/CommonIcon";

import s from "./link.module.scss"

interface ILink { 
  link?: string
}

const LinkPreview:FC<ILink> = ({link}) => { 
  return ( 
    <Link className={s.link} to={link || "#"}>
      <p className={s.link_text}>Open link</p>
      <LinkIcon/>
    </Link>
  )
}

export default LinkPreview