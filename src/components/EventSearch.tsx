import styles from "./EventSearch.module.css";

export const EventSearch = ({
  onChange,
}: {
  onChange: React.ChangeEventHandler;
}) => {
  return (
    <input
      className={styles.search}
      type="text"
      onChange={onChange}
      placeholder="Search by the title ..."
    />
  );
};
