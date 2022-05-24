import { useAppSelector, useAppDispatch } from '.';
import { selectUIState } from '../store/selectors';
import { SET_LAYOUT_TYPE } from '../store/ui';

const useUI = () => {
  const { layoutType } = useAppSelector(selectUIState);
  const dispatch = useAppDispatch();

  const handleLayoutType = (type: string) => {
    dispatch(SET_LAYOUT_TYPE(type))
  };

  return {
    layoutType,
    handleLayoutType,
  };
};

export default useUI;