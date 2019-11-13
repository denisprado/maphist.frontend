import { all, fork, takeLatest } from 'redux-saga/effects';
import { AuthTypes } from '../ducks/auth';
import { CategoriesTypes } from '../ducks/categories';
import { FilesTypes } from '../ducks/files';
import { MembersTypes } from '../ducks/members';
import { ProjectsTypes } from '../ducks/projects';
import { TeamTypes } from '../ducks/teams';
import {
 getPermissions, signIn, signOut, signUp 
} from './auth';
import { createCategory, deleteCategory, getCategories } from './categories';
import { uploadFiles } from './files';
import { getMembers, inviteMember, updateMember } from './members';
import {
  createProject,
  deleteProject,
  getProjects,
  updateProject,
} from './projects';
import { createTeam, getTeams } from './teams';

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

    takeLatest(CategoriesTypes.GET_CATEGORIES_REQUEST, getCategories),
    takeLatest(CategoriesTypes.CREATE_CATEGORY_REQUEST, createCategory),
    takeLatest(CategoriesTypes.DELETE_CATEGORY_REQUEST, deleteCategory),
    takeLatest(CategoriesTypes.DELETE_CATEGORY_SUCCESS, getCategories),

    takeLatest(MembersTypes.GET_MEMBERS_REQUEST, getMembers),
    takeLatest(MembersTypes.UPDATE_MEMBER_REQUEST, updateMember),
    takeLatest(MembersTypes.INVITE_MEMBER_REQUEST, inviteMember),
  ]);
}
