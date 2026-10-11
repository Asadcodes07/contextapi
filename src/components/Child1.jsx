import React from 'react';
import { useUserContext } from '../context/UserContext';
import { FaGoogle } from "react-icons/fa";
const Child1 = () => {
  const { userInfo } = useUserContext();
  console.log(userInfo);
  return (
    <div>
      This is child 1 and user name is {userInfo.name} and user id is {""}
       {userInfo.userId}
      <FaGoogle /> 
    </div>
  );
}
export default Child1;