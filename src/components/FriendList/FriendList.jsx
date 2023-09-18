import css from './FriendList.module.css';

export const FriendListItem = ({ friends }) => {
  return (
    <ul className={css.frendsList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={css.frendItem}>
            <span
              className={`${css.frendStatus} ${
                isOnline ? css.online : css.offfline
              }`}
            ></span>
            <img
              className={css.frendAvatar}
              src={avatar}
              alt={name}
              width="48"
            />
            <p className={css.frendName}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
