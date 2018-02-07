import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator, TabNavigator } from "react-navigation"

import Login from "../screens/auth/Login";
import Games from "../screens/main/Games";
import Leaderboard from "../screens/main/Leaderboard";
import Teams from "../screens/main/Teams";

import { addListener } from "../middlewares/redux-navigation";

export const AppNavigator = TabNavigator({
  auth: { screen: Login },
  main: { screen: TabNavigator({
    games: { screen: Games },
    leaderboard: { screen: Leaderboard },
    teams: { screen: Teams }
  }) }
})

class AppWithNavigationState extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
  }

  render() {
    const { dispatch, nav } = this.props;

    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener
        })}
      />
    )
  }
}

const mapStateToProps = ({ nav }) => ({ nav });

export default connect(mapStateToProps)(AppWithNavigationState)