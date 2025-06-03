import React, { use } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useAuthContext = () => {
    const Context = use(AuthContext)
    return Context;
};

export default useAuthContext;