import PropTypes from 'prop-types';
import { Container, List, Item } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedback,
  positivePercentage,
}) {
  return (
    <Container>
      <List>
        <Item>
          Good:<span>{good}</span>
        </Item>
        <Item>
          Neutral:<span>{neutral}</span>
        </Item>
        <Item>
          Bad:<span>{bad}</span>
        </Item>
        <Item>
          Total:<span>{countTotalFeedback}</span>
        </Item>
        <Item>
          Positive feedback: <span>{positivePercentage}%</span>
        </Item>
      </List>
    </Container>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
