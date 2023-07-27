import {FC} from 'react';

interface IColumnProps {
  title: string,
  styles: { readonly [key: string]: string }
  secondStyles: string
}

export const Item: FC<IColumnProps> = (
  {
    styles, secondStyles, title
  }
) => {
  return (
    <td  className={secondStyles}>
      <span className={styles.container}>
        <span>{title}</span>
      </span>
    </td>
  );
};