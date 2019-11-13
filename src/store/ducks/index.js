import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as toastr } from 'react-redux-toastr';
import { reducer as auth } from './auth';
import { reducer as teams } from './teams';
import { reducer as projects } from './projects';
import { reducer as members } from './members';
import { reducer as files } from './files';
import { reducer as slide } from './slide';
import { reducer as categories } from './categories';

export default (history) => combineReducers({
    auth,
    toastr,
    categories,
    teams,
    projects,
    members,
    files,
    slide,
    router: connectRouter(history),
  });
