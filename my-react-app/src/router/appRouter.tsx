import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './protectedRouter';


import Login from '../pages/Login';
import Register from '../pages/Register';
import StudentManage from '../pages/admin/StudentManger';
import FileManage from '../pages/FileManger';


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={< Login />} />
                < Route path="/register" element={< Register />} />


                {/* admin 专属页面  学生管理页面*/}
                <Route
                    path="/admin/students"
                    element={
                        < ProtectedRoute allowRoles={["admin"]} >
                            <StudentManage />
                        </ProtectedRoute>
                    }
                />


                {/* student和admin 可访问文件管理 */}
                <Route
                    path="/student/files"
                    element={
                        < ProtectedRoute allowRoles={["student", "admin"]} >
                            <FileManage />
                        </ProtectedRoute>
                    }
                />


                < Route path="*" element={< Login />} />
            </Routes>
        </BrowserRouter>
    );
}