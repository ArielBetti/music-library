import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { loadUser } from "../../redux-flow/logics/teste";

function Home({ user, dispatch }) {
  const onLoadUser = dispatch(loadUser());

  return (
    <div>
      <p>{user.name}</p>
      <button onClick={onLoadUser()}>Testar</button>
    </div>
  );
}

export default connect((state) => ({
  user: state.teste.user,
}))(Home);

Home.propTypes = {
  user: PropTypes.shape({}),
  loadUser: PropTypes.func,
};

Home.defaultProps = {
  user: {},
  loadUser: () => {},
};
