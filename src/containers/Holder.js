import { connect } from 'react-redux';
import CardHolder from '../components/holder/CardHolder';

const mapStateToProps = (state) => {
  return {
    contacts: state.contactList.list,
    width: 2
  };
};

const Holder = connect(mapStateToProps)(CardHolder);

export default Holder;
