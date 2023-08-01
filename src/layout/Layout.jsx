import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import AppContextProvider from '../context/appContext';

export default function Layout({ children }) {

    const token = useSelector((state) => state.user.token);

    return (
        <>
            <AppContextProvider>
                {children}
            </AppContextProvider>
            <Outlet />
        </>
    );
}
