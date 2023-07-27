import {FC} from 'react';
import styles from './Row.module.scss';
import {Item} from "../Item/Item.tsx";

import {IPost} from "../../../../redux/types.interface.ts";
import {classes} from "../../../../data.ts";

interface IRowProps {
  post: IPost
}

export const Row: FC<IRowProps> = ({post}) => {
  const title = (i: number) => i === 0 ? post.id : i === 1 ? post.title : post.body
  return (
    <tr className={styles.row}>
      {classes.map((c, i) => {
        return <Item key={i} title={title(i)} styles={styles} secondStyles={c.secondStyles}/>
      })}
    </tr>
  );
};