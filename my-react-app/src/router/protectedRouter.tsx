import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import type { RootState } from '../app/store';
import type { JSX } from 'react';


interface Props {
children: JSX.Element;
allowRoles?: Array<'admin' | 'student'>;
}


export default function ProtectedRoute({ children, allowRoles }: Props) {
const user = useSelector((state: RootState) => state.auth.user);


if (!user) return <Navigate to="/login" replace />;


if (allowRoles && !allowRoles.includes(user.role)) {
return <Navigate to="/login" replace />;
}


return children;
}