import React from 'react';
import FreeUserRoutes from './FreeUserRoutes';
import ProUserRoutes from './ProUserRoutes';
import { Navigate } from 'react-router-dom';

type UserType = "notLoggedIn" | "freeUser" | "proUser";

const userTypes: Record<UserType, UserType> = {
  notLoggedIn: "notLoggedIn",
  freeUser: "freeUser",
  proUser: "proUser",
};

interface ProtectedRoutesProps {
  userType: UserType;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ userType }) => {
  if (userType === userTypes.notLoggedIn) return <Navigate to='/login' />;
  else if (userType === userTypes.freeUser) return <FreeUserRoutes />;
  else if (userType === userTypes.proUser) return <ProUserRoutes />;
  return null;
};

export default ProtectedRoutes;
