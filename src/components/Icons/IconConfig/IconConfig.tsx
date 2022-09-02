import React from 'react';

// styles
import { IconWrapper } from '../container';

interface Props {
  color?: string;
  title?: string;
}

const IconConfig: React.FC<Props> = ({
  color = '#0074C0',
  title = '',
}: Props) => (
  <IconWrapper
    type="small"
    size="great"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title !== '' && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.895 3C10.3855 3 9.95742 3.38313 9.90115 3.88957L9.7362 5.37415C8.86613 5.67134 8.07324 6.13509 7.39556 6.72737L6.02557 6.12713C5.55885 5.92265 5.01302 6.1018 4.75824 6.54308L3.65328 8.45692C3.39851 8.8982 3.51628 9.46049 3.92673 9.76243L5.13046 10.648C5.04485 11.0854 4.99999 11.5375 4.99999 12C4.99999 12.4625 5.04485 12.9146 5.13046 13.352L3.92673 14.2376C3.51628 14.5395 3.39851 15.1018 3.65328 15.5431L4.75824 17.4569C5.01302 17.8982 5.55885 18.0774 6.02557 17.8729L7.39556 17.2726C8.07324 17.8649 8.86613 18.3287 9.7362 18.6259L9.90115 20.1104C9.95742 20.6169 10.3855 21 10.895 21H13.1049C13.6145 21 14.0426 20.6169 14.0988 20.1104L14.2638 18.6259C15.1339 18.3287 15.9267 17.8649 16.6044 17.2726L17.9744 17.8729C18.4411 18.0774 18.987 17.8982 19.2417 17.4569L20.3467 15.5431C20.6015 15.1018 20.4837 14.5395 20.0733 14.2376L18.8695 13.352C18.9551 12.9146 19 12.4625 19 12C19 11.5375 18.9551 11.0854 18.8695 10.648L20.0733 9.76243C20.4837 9.46049 20.6015 8.8982 20.3467 8.45692L19.2417 6.54308C18.987 6.1018 18.4411 5.92265 17.9744 6.12713L16.6044 6.72737C15.9267 6.13509 15.1339 5.67134 14.2638 5.37415L14.0988 3.88957C14.0426 3.38314 13.6145 3 13.1049 3H10.895ZM15.3607 7.2723C15.0645 7.0614 14.7477 6.87762 14.4138 6.72461C14.0174 6.54294 13.597 6.40463 13.1587 6.31576L12.9701 4.64395C12.9416 4.3911 12.7277 4.2 12.4732 4.2H11.5268C11.2723 4.2 11.0584 4.3911 11.0299 4.64394L10.8413 6.31576C10.4029 6.40463 9.98254 6.54294 9.58614 6.72461C9.25229 6.87762 8.93547 7.0614 8.63931 7.2723C8.27942 7.52859 7.95004 7.82495 7.65768 8.15487L6.1145 7.48185C5.88127 7.38013 5.60884 7.4698 5.48161 7.69016L5.00837 8.50984C4.88115 8.7302 4.93971 9.01096 5.14442 9.16209L6.49757 10.1611C6.3599 10.5732 6.26723 11.006 6.2254 11.4535C6.20859 11.6334 6.19999 11.8157 6.19999 12C6.19999 12.1843 6.20859 12.3666 6.2254 12.5465C6.26723 12.994 6.3599 13.4268 6.49757 13.8389L5.14442 14.8379C4.93971 14.989 4.88115 15.2698 5.00837 15.4902L5.48161 16.3098C5.60884 16.5302 5.88127 16.6199 6.1145 16.5181L7.65768 15.8451C7.95004 16.1751 8.27942 16.4714 8.63931 16.7277C8.93547 16.9386 9.25229 17.1224 9.58614 17.2754C9.98254 17.4571 10.4029 17.5954 10.8413 17.6842L11.0299 19.3561C11.0584 19.6089 11.2723 19.8 11.5268 19.8H12.4732C12.7277 19.8 12.9416 19.6089 12.9701 19.3561L13.1587 17.6842C13.597 17.5954 14.0174 17.4571 14.4138 17.2754C14.7477 17.1224 15.0645 16.9386 15.3607 16.7277C15.7206 16.4714 16.0499 16.1751 16.3423 15.8451L17.8855 16.5181C18.1187 16.6199 18.3911 16.5302 18.5184 16.3098L18.9916 15.4902C19.1188 15.2698 19.0603 14.989 18.8556 14.8379L17.5024 13.8389C17.6401 13.4268 17.7328 12.9941 17.7746 12.5465C17.7914 12.3666 17.8 12.1843 17.8 12C17.8 11.8157 17.7914 11.6334 17.7746 11.4535C17.7328 11.006 17.6401 10.5732 17.5024 10.1611L18.8556 9.16209C19.0603 9.01096 19.1188 8.7302 18.9916 8.50984L18.5184 7.69016C18.3911 7.4698 18.1187 7.38013 17.8855 7.48185L16.3423 8.15486C16.0499 7.82495 15.7206 7.52859 15.3607 7.2723ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79085 8 7.99999 9.79086 7.99999 12C7.99999 14.2091 9.79085 16 12 16ZM14.8 12C14.8 13.5464 13.5464 14.8 12 14.8C10.4536 14.8 9.19999 13.5464 9.19999 12C9.19999 10.4536 10.4536 9.2 12 9.2C13.5464 9.2 14.8 10.4536 14.8 12Z"
      fill={color}
    />
  </IconWrapper>
);

IconConfig.displayName = 'IconConfig';

export default React.memo(IconConfig);