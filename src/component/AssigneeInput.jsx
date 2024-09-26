import * as React from 'react';
import { useState } from 'react';

import { Autocomplete, Avatar, Chip, TextField } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CheckIcon from '@mui/icons-material/Check';


  function stringAvatar(name) {
    const nameParts = name.split(' ');
    return {
      children: `${nameParts[0][0]}${nameParts[1][0]}`, 
      sx: {
        letterSpacing: '0.2em',
        ml: '8px', width: '30px', height: '30px' 
      },};}

      const users = [
        { title: 'علی تفکری', id: 1994, src: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { title: 'مهدی فیاض', id: 1972, src: 'https://randomuser.me/api/portraits/men/11.jpg' },
        { title: 'مهدی بیانی', id: 1974, src: '' },
        { title: 'حسین احمدی', id: 2008, src: 'https://randomuser.me/api/portraits/men/4.jpg' },
        { title: 'حسین حقی', id: 1957, src: 'https://randomuser.me/api/portraits/men/5.jpg' },
        { title: 'سید علی سجادی', id: 1993, src: 'https://randomuser.me/api/portraits/men/6.jpg' },
        { title: 'سید محمدعلی آبیار', id: 1990, src: 'https://randomuser.me/api/portraits/men/7.jpg' },
        { title: 'محمدحسین تقدیری', id: 2003, src: 'https://randomuser.me/api/portraits/men/8.jpg' },
        { title: 'علیرضا قربانی', id: 1966, src: 'https://randomuser.me/api/portraits/men/9.jpg' },
        { title: 'علی حقی', id: 1999, src: 'https://randomuser.me/api/portraits/men/10.jpg' }, ];
    
function AssigneeInput() {

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [hideLabel, setHideLabel] = useState(false); 

  const handleOnChange = (event, value) => {
    setSelectedOptions(value);
    if (value.length > 0) {
      setHideLabel(true); } };

  const handleFocus = () => {setHideLabel(true)};
  
  const handleBlur = (event) => {
    if (selectedOptions.length === 0) { setHideLabel(false) } };

return (
  <Autocomplete
    sx={{ width: '500px', padding: '100%', dir: 'rtl',  }}
    disableCloseOnSelect
    multiple
    id="انتخاب مسئول"
    options={users}
    getOptionLabel={(option) => option.title}
    renderOption={(props, option, { selected }) => (
      <li 
      {...props} 
      sx={{
        backgroundColor: selected ? '#E4EDFB' : 'white',
        '&:hover': {backgroundColor: 'purple'}, }}
      >
        <Avatar
          sx={{ ml: '8px', width: '30px', height: '30px' }}
          src={option.src} 
            onError={(e) => {
            e.target.onerror = null; 
            e.target.src = ''; 
          }}
          {...(!option.src && stringAvatar(option.title))} 
        > </Avatar>
        {option.title}
        {selected && (
          <CheckIcon
            sx={{
              position: 'absolute',
              left: '10px', 
              pointerEvents: 'none', 
              color: '#114FBB',}}
          />
        )}
      </li>
    )}
  renderInput={(params) => (
    <div dir='rtl' style={{ position: 'relative',}}>
    <TextField
      {...params}
      label={hideLabel ? '' : 'لطفا انتخاب کنید'} 
      onFocus={handleFocus}
      onBlur={handleBlur}
      InputLabelProps={{
        sx: { 
          color:'#BCC3BF' ,
          width: '93%'},}} 
      InputProps={{
        ...params.InputProps,
        sx: {borderRadius: '12px'}, }}
    />
    <CheckRoundedIcon
      style={{
        position: 'absolute',
        left: '10px', 
        top: '50%',
        transform: 'translateY(-50%)', 
        pointerEvents: 'none', 
        color: '#114FBB' }}
    />
    </div>
  )}
  popupIcon={null}
  onChange={handleOnChange}
  value={selectedOptions}
  renderTags={(value, getTagProps) =>
    value.map((option, index) => (
      <Chip
        sx={{ 
          color: '#152B1E',
          size: '14px',
          borderRadius: '12px',
          padding: '3px',
          left: '25px',   
          width: 'auto',
          borderRadius: '12px',}}
        {...getTagProps({ index })}
        avatar={
          <Avatar
            sx={{ ml: '10px',width: '24px', height: '24px'  }}
            src={option.src}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '';}}
            {...(!option.src && stringAvatar(option.title))}
          ></Avatar> }
        label={option.title}
        key={option.id}
      />  ))  }
  />
) }
  
export default AssigneeInput