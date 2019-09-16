import React, { useEffect } from "react";
import { Container, TeamList, Team } from "./styles";
import TeamActions from "../../store/ducks/teams";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

function TeamSwitcher() {
  const teams = useSelector(state => state.teams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TeamActions.getTeamsRequest());
  }, []);

  return (
    <Container>
      <TeamList>
        {teams.data.map(team => (
          <Team key={team.id}>
            <img
              alt="Maphist"
              src="https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=maphist"
            />
          </Team>
        ))}
      </TeamList>
    </Container>
  );
}

TeamSwitcher.propTypes = {
  getTeamsRequest: PropTypes.func.isRequired
};

export default TeamSwitcher;
