import secondStyles from "./components/Table/Main/Row/Row.module.scss";
import styles from "./components/Table/Header/Header.module.scss";


interface IStyles {
  secondStyles: string;
}
interface IColumn {
  title: string;
  secondStyles: string;
}

export const columns: IColumn[] = [
  {title: 'ID', secondStyles: styles.id},
  {title: 'Заголовок', secondStyles: styles.title},
  {title: 'Описание', secondStyles: styles.description},
];

export const classes: IStyles[] = [
  {secondStyles: secondStyles.id},
  {secondStyles: secondStyles.title},
  {secondStyles: secondStyles.description},
];