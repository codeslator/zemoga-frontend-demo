import { useAppSelector, useAppDispatch } from '.';
import { selectAuthState } from '../store/selectors';

const useAuth = () => {
  const { isAuthenticated, user } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  return {


  };
};

export default useAuth;
