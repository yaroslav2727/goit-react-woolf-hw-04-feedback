import Container from "../Container/Container";

import css from "./Section.module.css";

const Section = ({ title = "", children }) => (
  <section className={css.section}>
    <Container>
      {title && <h1 className={css.title}>{title}</h1>}
      {children}
    </Container>
  </section>
);

export default Section;
