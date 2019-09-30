import { all, fork, takeLatest } from 'redux-saga/effects';

import {
 signIn, signOut, signUp, getPermissions 
} from './auth';
import { AuthTypes } from '../ducks/auth';

import { getTeams, createTeam } from './teams';
import { TeamTypes } from '../ducks/teams';

import {
  getProjects,
  createProject,
  deleteProject,
  updateProject,
} from './projects';
import { ProjectsTypes } from '../ducks/projects';

import { getMembers, updateMember, inviteMember } from './members';
import { MembersTypes } from '../ducks/members';

import { uploadFiles } from './files';
import { FilesTypes } from '../ducks/files';

export default function* rootSaga() {
  return yield all([
    fork(getPermissions),

    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),

    takeLatest(TeamTypes.GET_TEAMS_REQUEST, getTeams),
    takeLatest(TeamTypes.CREATE_TEAM_REQUEST, createTeam),
    takeLatest(TeamTypes.SELECT_TEAM, getProjects),
    takeLatest(TeamTypes.SELECT_TEAM, getPermissions),

    takeLatest(ProjectsTypes.GET_PROJECTS_REQUEST, getProjects),
    takeLatest(ProjectsTypes.CREATE_PROJECT_REQUEST, createProject),
    takeLatest(ProjectsTypes.DELETE_PROJECT_REQUEST, deleteProject),
    takeLatest(ProjectsTypes.DELETE_PROJECT_SUCCESS, getProjects),

    takeLatest(FilesTypes.UPLOAD_FILES_REQUEST, uploadFiles),
    takeLatest(FilesTypes.UPLOAD_FILES_SUCCESS, updateProject),

    takeLatest(MembersTypes.GET_MEMBERS_REQUEST, getMembers),
    takeLatest(MembersTypes.UPDATE_MEMBER_REQUEST, updateMember),
    takeLatest(MembersTypes.INVITE_MEMBER_REQUEST, inviteMember),
  ]);
}
