import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <div>
      <h2 className={css.message}>{message}</h2>
    </div>
  );
};

export default Notification;
