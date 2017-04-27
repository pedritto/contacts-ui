import { connect } from 'react-redux';
import CardHolder from '../components/holder/CardHolder';

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.data,
    width: 2
  };
};

const Holder = connect(mapStateToProps)(CardHolder);

export default Holder;
