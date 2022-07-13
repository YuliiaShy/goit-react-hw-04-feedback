import PropTypes from 'prop-types';
import { Container, Title } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

Section.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
