import React from 'react';
import { useGetUsersQuery } from '../../services/userApi';

const UsersList = ({ currentPage, pageSize }) => {
  const { data, error, isLoading } = useGetUsersQuery({ currentPage, pageSize });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <div>
      {data.items.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UsersList;