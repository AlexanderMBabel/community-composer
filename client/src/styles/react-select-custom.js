export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '2px dotted pink',
    color: state.isSelected ? 'orange' : 'pink'
  }),
  control: (provided, state) => {
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
    return {
      ...provided
    };
  },
  input: (provided, state) => {
    return {
      ...provided
    };
  },
  placeholder: (provided, state) => {
    // console.table(provided);
    return {
      ...provided
    };
  }
};

export const ioSelect = {
  option: (provided, state) => {
    return {
      ...provided,
      backgroundColor: 'black',
      padding: 0,
      margin: 0,
      color: 'white'
    };
  },
  group: (provided, state) => ({
    ...provided
  }),
  control: (provided, state) => {
    return {
      ...provided,
      fontSize: '.5rem',
      padding: '1px',
      minHeight: '10px',
      height: '20px',
      margin: 0,
      backgroundColor: 'black',
      color: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'none'
    };
  },
  container: (provided, state) => {
    return {
      ...provided,
      paddingTop: '0px',
      paddingBottom: 0,
      margin: 1
    };
  },
  input: (provided, state) => {
    return {
      ...provided,
      paddingTop: '0px',
      paddingBottom: 0,
      margin: 0,
      color: 'white'
    };
  },
  indicatorsContainer: (provided, state) => {
    return {
      ...provided,

      height: '20px'
    };
  },
  indicatorsSeparator: (provided, state) => {
    return {
      ...provided
    };
  },
  dropdownIndicator: (provided, state) => {
    // console.table(provided);
    return {
      ...provided,
      padding: 4
    };
  }
};
