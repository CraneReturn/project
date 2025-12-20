import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './protectedRouter';


import Login from '../pages/Login';
import Register from '../pages/Register';
import StudentManage from '../pages/admin/StudentManger';
import FileManage from '../pages/FileManger';
import AdminLayout from '../component/adminLayout/adminLayout';


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={< Login />} />
                < Route path="/register" element={< Register />} />


                <Route
                    element={
                        <ProtectedRoute allowRoles={["admin", "student"]}>
                            <AdminLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route path="/student/files" element={<FileManage />} />
                    <Route
                        path="/admin/students"
                        element={
                            <ProtectedRoute allowRoles={["admin"]}>
                                <StudentManage />
                            </ProtectedRoute>
                        }
                    />
                </Route>


                < Route path="*" element={< Login />} />
            </Routes>
        </BrowserRouter>
    );
}