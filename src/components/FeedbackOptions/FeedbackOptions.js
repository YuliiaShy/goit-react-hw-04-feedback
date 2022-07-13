import PropTypes from 'prop-types';
import { Container, List, Item, Button } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
  <Container>
      <List>
        {options.map(option => (
          <Item key={option}>
                <Button      
              type="button"
              name = {option}
              onClick={onLeaveFeedback}
            >
              {option}
            </Button>
          </Item>
        ))}
      </List>
    </Container>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
