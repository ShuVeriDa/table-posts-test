import {FC} from 'react';

interface ISvgComponentProps {
  styles?: string
  onClick?: () => void
}

export const MagnifierSVG: FC<ISvgComponentProps> = ({styles, onClick}) => {
  return (

    <svg onClick={onClick} className={styles} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>
  );
};

export const DownArrowSVG: FC<ISvgComponentProps> = ({styles, onClick}) => {
  return (
    <svg onClick={onClick} className={styles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none"
         stroke={"#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
         role="img" aria-label="Left Arrow">
      <path d="M35 10l-15 15 15 15"/>
    </svg>
  );
};

export const ClearSearchValueSVG: FC<ISvgComponentProps> = ({styles, onClick, }) => {


  return (
    <svg className={styles}
         onClick={onClick}
         height={'22'}
         viewBox="0 0 48 48"
         width={'22'}
         xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
      <path d="M0 0h48v48h-48z" fill="none"/>
    </svg>
  );
};