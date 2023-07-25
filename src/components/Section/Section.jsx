import css from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={css.SectionContainer}>
      <h2 className={css.title}>{title}</h2>
      <div className={css.children}>{children}</div>
    </div>
  );
};

export default Section;
