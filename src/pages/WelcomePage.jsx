import { NavLink} from 'react-router-dom'

const WelcomePage = () => {
  return (
    <>
      <div>WelcomePage</div>
      <NavLink to='/register'>
        <button>Registration</button>
      </NavLink>
      <NavLink to="/signin">
        <button>Sign in</button>
      </NavLink>
    </>
  );
};

export default WelcomePage;
