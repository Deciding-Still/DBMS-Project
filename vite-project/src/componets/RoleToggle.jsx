import React, { useState } from 'react';

const RoleToggle = ({ onSelectRole }) => {
  const [selectedRole, setSelectedRole] = useState('employee');

  const handleToggle = () => {
    const newRole = selectedRole === 'employee' ? 'admin' : 'employee';
    setSelectedRole(newRole);
    onSelectRole(newRole); // Notify parent component about the selected role
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="text-gray-600">Employee</span>
      <label className="relative inline-flex items-center">
        <input
          type="checkbox"
          className="sr-only"
          checked={selectedRole === 'admin'}
          onChange={handleToggle}
        />
        <span className="slider h-6 w-12 bg-teal-500 rounded-full shadow-md cursor-pointer"></span>
      </label>
      <span className="text-gray-600">Admin</span>
    </div>
  );
};

export default RoleToggle;
