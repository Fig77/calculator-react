import React, {Comonent} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  
  const  inline = () => {
    let w = '25%';
    let c = '#ff8e22';
    if (wide) { w = '50%';  }
    if (color) { c=color; }
    return {
      background: c,
      width: w
    };
  };
  
  return (
  <button className="button" style={inline()} type="button" value={value}>{value}</button>
);
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string
};
export default Button;
