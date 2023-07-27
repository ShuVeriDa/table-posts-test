import {FC} from 'react';
import styles from './Main.module.scss';
import {Row} from "./Row/Row.tsx";
import {IPost} from "../../../redux/types.interface.ts";

interface IMainProps {
  posts: IPost[]
}

export const Main: FC<IMainProps> = ({posts}) => {
  return (
    <tbody className={styles.main}>
      {posts.map(post => <Row key={post.id} post={post}/>)}
    </tbody>
  );
};