import axios from 'axios';
import { log } from 'console';
import React, { useCallback, useState } from 'react'
import { User } from '../types/api/user';
import { useNavigate } from 'react-router-dom';
import { useMessage } from './useMessage';


export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);
    axios
    .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>{
      if(res.data){
        showMessage({ title: "ログインしました", status: "success" });
        navigate("/home");
      } else {
        showMessage({ title: "ユーザーが見つかりません", status: "error" });
      }
    })
    .catch(()=>{
      showMessage({ title: "ログインできません", status: "error" });
    })
    .finally(()=>{
      setLoading(false);
    });
  }, []);

  return { login, loading };
}
