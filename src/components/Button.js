import classnames from 'classnames';

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  const classes = classnames(
    rest.className,
    'flex items-center px-3 py-1.5 border',
    {
      'border-blue-500 bg-blue-500': primary,
      'border-gray-900 bg-gray-900 ': secondary,
      'border-green-500 bg-green-500': success,
      'border-yellow-400 bg-yellow-400': warning,
      'border-red-500 bg-red-500': danger,
      'rounded-full': rounded,
      'text-white':
        !outline && (primary || secondary || success || warning || danger),
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

/* 
if we only send the name of a prop to the component like "primary", the value will be "true", and if we don't send a prop; for example, secondary the value will be "undefine". we will use it for counting the number of different variation in case a developer send more than one type of button at the same time; for instance, primary and secondary which is not correct, and we want to add a contrain for that. So, we will convert the value of each prop to a number, and add them up. it shouldn't be more than 1 in this case.

Note: Number(undefine) -> NaN, but !!undefine -> false so that 
Number(!!undefine) = 0
*/

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};

export default Button;
