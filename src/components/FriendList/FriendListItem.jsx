import css from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.frendItem}>
      <span
        className={`${css.frendStatus} ${isOnline ? css.online : css.offfline}`}
      ></span>
      <img className={css.frendAvatar} src={avatar} alt={name} width="48" />
      <p className={css.frendName}>{name}</p>
    </li>
  );
};
