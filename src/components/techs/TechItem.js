import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {deleteTech} from "../../actions/techActions";
import M from 'materialize-css/dist/js/materialize.min.js';


const TechItem = ({ tech:{id,firstName,lastName} , deleteTech }) => {
  const onDelete = ()=>{
    deleteTech(id);
    M.toast({html : 'LOG DELETED'})
  }
  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech:PropTypes.func.isRequired,
};

export default connect(null, {deleteTech})(TechItem);