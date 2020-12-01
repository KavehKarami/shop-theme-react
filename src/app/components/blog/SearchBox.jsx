import React from 'react';
import SearchIcon from '../shared/icons/SearchIcon';
import DashedInput from '../shared/inputs/DashedInput';

const SearchBox = (props) => {
  return (
    <div className={props.col || "col-12"}>
      <DashedInput className={props.className || "my-3 mx-auto"} iconComponent={true} rtl={true} icon={<SearchIcon />} inputType="search" placeholder="کلمه مورد نظر خود را جستجو کنید ..." />
    </div>
  );
}

export default SearchBox;