import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Filter = ({value,onFilterArticles}) => {
  return (
    <div style={{width: "100%",
      marginottom: "10px"}}>
      <label >Filter by keywords</label>
      <i style={{position: "absolute"}}><SearchOutlinedIcon/>
              </i>
      <OutlinedInput
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onFilterArticles}
        />
        
    </div>
  );
};

export default Filter;