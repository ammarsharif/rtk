import React, { useEffect } from 'react';
import { fetchUser } from './user';
import { useSelector, useDispatch } from 'react-redux';

const UserView = () => {
  const userData = useSelector((state) => state.users.user);
  useSelector((state) => console.log(state.users, 'user'));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div>
      <h2>Number Of Users</h2>
      {userData.loading && <div>Loading....</div>}
      {!userData.loading && userData.error ? (
        <div>Error : {userData.error}</div>
      ) : null}
      {!userData.loading && userData && userData.length ? (
        <ul>
          {userData.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default UserView;
