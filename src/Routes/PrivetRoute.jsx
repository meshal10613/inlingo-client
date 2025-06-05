import React from 'react';
import useAuthContext from '../Hooks/useAuthContext';
import Loading from '../Pages/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({children}) => {
    const {user, loading} = useAuthContext();
    const location = useLocation();

    if(loading){
        return <Loading/>
    }

    if(user && user?.email){
        return children;
    }else{
        return <Navigate to="/login" state={location.pathname}/>
    }

};

export default PrivetRoute;