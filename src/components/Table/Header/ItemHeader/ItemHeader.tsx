import {FC} from 'react';
import {DownArrowSVG} from "../../../SvgComponents.tsx";
import cn from "clsx";

interface IItemHeaderProps {
  title: string,
  styles: { readonly [key: string]: string }
  secondStyles: string
  onChaneSort: (value: 'id' | 'body' | 'title') => void
  order: 'asc' | 'desc'
  sortTitle: 'id' | 'body' | 'title'
}

export const ItemHeader: FC<IItemHeaderProps> = (
  {
    styles, secondStyles, title, onChaneSort, order, sortTitle
  }
) => {
  const onChangeHandler = () => {
    if (title === 'ID') onChaneSort('id')
    if (title === 'Заголовок') onChaneSort('title')
    if (title === 'Описание') onChaneSort('body')
  }

  const config = () => {
    return (title === 'ID' && sortTitle === 'id') ||
    (title === 'Заголовок' && sortTitle === 'title') ||
    (title === 'Описание' && sortTitle === 'body')
      ? order === 'desc' && styles.arrowUpSvg
      : null;
  };

  return (
    <tr className={secondStyles}>
      <th className={styles.container} onClick={onChangeHandler}>
        <span>{title}</span>
        <DownArrowSVG styles={cn(styles.arrowDownSvg, config())}/>
      </th>
    </tr>
  );
};