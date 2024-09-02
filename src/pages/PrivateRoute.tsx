import { useEffect } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { getCookie, setCookie } from 'src/utils/cookie';

function PrivateRoute() {
  const access = getCookie('access');
  const { search } = useLocation();

  useEffect(() => {
    const accessToken = new URLSearchParams(search).get('accessToken');
    if (!accessToken) return;
    setCookie('access', decodeURIComponent(accessToken), { path: '/', secure: true, sameSite: 'strict' });
    const url = new URL(window.location.href);
    url.searchParams.delete('accessToken');
    window.history.replaceState({}, '', url.toString());
  }, []);

  return (
    access ? <Outlet /> : <Navigate to="/signin" />
  );
}

export default PrivateRoute;
