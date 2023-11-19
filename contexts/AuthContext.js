import React, { createContext, useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
// import InvestorAuthAPI from '../API/InvestorAuthAPI';

const AuthContext = createContext({
  isAuthenticated: false,
  isLoggedIn: false,
  role: '',
  user: {},
  token: '',
  login: (token, data) => {},
  logout: () => {},
  loading: false,
});

export const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');
  const [role, setRole] = useState('');
  const [isLoading, setIsLoading] = useState('');

  const login = async (token, data) => {
    try {
      console.log('TOKEN in authcontext : ', token);
      console.log('DATA in authContext : ', data);


      await AsyncStorage.setItem('jwtToken', token);
      await AsyncStorage.setItem('user', JSON.stringify(data));
      setIsAuthenticated(true);
      setIsLoggedIn(true);
      setToken(token);
      setUser({
        id: data._id,
        userName: data.userName,
        email: data.email,
        pic: data.pic,
      });
      const tokenParts = token?.split('.');
      if (tokenParts) {
        let decodedPayload = atob(tokenParts[1]);
        decodedPayload = JSON.parse(decodedPayload);
        const { role } = decodedPayload.id;
        setRole(role);
      }
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('jwtToken');
      await AsyncStorage.removeItem('user');
      setIsAuthenticated(false);
      setIsLoggedIn(false);
      setUser(null);
      setToken('');
    } catch (error) {
      console.error('Error removing data:', error);
    }
  };

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('jwtToken');
        const user = JSON.parse(await AsyncStorage.getItem('user'));

        if (token && user) {
          login(token, user);
        } else {
          logout();
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    const verifyToken = async () => {
      // try {
      //   const token = await AsyncStorage.getItem('jwtToken');
      //   if (token) {
      //     const { data } = await axios.get(InvestorAuthAPI.AUTHENTICATION, {
      //       headers: {
      //         Authorization: `Bearer ${token}`,
      //       },
      //     });

      //     if (data && data.status === 400) {
      //       await logout();
      //     }
      //   }
      // } catch (error) {
      //   console.error('Error verifying token:', error);
      // }
    };

    loadUserData();
    verifyToken();
  }, []);

  // Other useEffects and the rest of your code...

  const contextValue = {
    isAuthenticated,
    isLoggedIn,
    role,
    user,
    token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
