import PropTypes from 'prop-types';
import { Message } from './NotificationMessage.styled';

const NotificationMessage = ({ message }) =>
  <Message>{message}</Message>;
  
export default NotificationMessage;

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
