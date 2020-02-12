export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '2px dotted pink',
    color: state.isSelected ? 'orange' : 'pink'
  }),
  control: (provided, state) => {
    console.table(provided);
    return {
      ...provided,
      outline: '0 !important',
      border: '2px solid #d1e8e2',
      borderTop: '7px solid #d1e8e2',

      '&:hover': { borderColor: '#d9be8c' }
    };
  },
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: 'pink'
  }),
  container: (provided, state) => {
    console.log(provided);
    return {
      ...provided
    };
  },
  input: (provided, state) => {
    console.table(provided);
    return {
      ...provided
    };
  },
  placeholder: (provided, state) => {
    console.table(provided);
    return {
      ...provided
    };
  }
};
