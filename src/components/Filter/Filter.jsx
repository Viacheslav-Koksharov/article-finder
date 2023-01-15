import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import '../../sass/components/_filter.scss';

const Filter = ({value,onFilterArticles}) => {
  return (
    <div className="filter__container">
      <label className="label">Filter by keywords</label>
      <div className="input__container">      
      <OutlinedInput
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onFilterArticles}
        className="input"
        />
        <i className="icon"><SearchOutlinedIcon/></i>
       </div> 
    </div>
  );
};

export default Filter;