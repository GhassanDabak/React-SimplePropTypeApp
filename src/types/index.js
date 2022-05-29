import PropType from 'prop-types'

const {shape,number,string} = PropType

// defines the type of user data 

export const userType = shape({
  id: number.isRequired,
  firstName: string.isRequired,
});

