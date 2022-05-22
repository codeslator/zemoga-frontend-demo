import { useAppSelector, useAppDispatch } from '.';
import { selectUIState } from '../store/selectors';

const useUI = () => {
  const { layoutType } = useAppSelector(selectUIState);
  const dispatch = useAppDispatch();

  return {

  };
};

export default useUI;