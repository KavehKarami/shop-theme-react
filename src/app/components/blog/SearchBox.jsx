import React from 'react';
import SearchIcon from '../shared/icons/SearchIcon';
import DashedInput from '../shared/inputs/DashedInput';

const SearchBox = () => {
  return (
    <div className="col-12">
      <DashedInput className="my-3  mx-auto" iconComponent={true} rtl={true} icon={<SearchIcon />} inputType="search" placeholder="کلمه مورد نظر خود را جستجو کنید ..." />
    </div>
  );
}

export default SearchBox;