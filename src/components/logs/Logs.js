import React, { useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import { getLogs } from "../../actions/logActions";



const Logs = ({ log : {logs,loading}, getLogs }) => {

  // ^ here log have all the state and again destructred to gettig logs and loading
 
  

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  

  if (loading || logs===null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs : PropTypes.func.isRequired,
}

const mapStateToProps = state => (
  {
    //we can call anything instead of log because it is prop now
    log: state.log // for state.log check in index.js , logReducer is opted to log
    
  }
  
)
export default connect(mapStateToProps ,{getLogs})(Logs);