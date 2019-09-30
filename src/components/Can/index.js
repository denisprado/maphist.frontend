import { useSelector } from "react-redux";

function checkAuth({ roles, permissions }, checkRole, checkPermission) {
  // Se existe a regra e não está incluída nas permissões do usuário
  if (checkRole && !roles.includes(checkRole)) return false;

  if (checkPermission && !permissions.includes(checkPermission)) return false;

  return true;
}

function Can({ children, checkRole, checkPermission }) {
  const auth = useSelector(state => state.auth);

  return typeof children === "function"
    ? children(checkAuth(auth, checkRole, checkPermission))
    : checkAuth(auth, checkRole, checkPermission) && children;
}

export default Can;
