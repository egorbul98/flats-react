import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation} from 'react-router-dom';
import iconSearch from '../assets/img/icon-search.svg';
import { useInput } from '../handlers/hooks/useInput';
import { fetchComplexesByText, setSearchText } from '../redux/actions/complexesActions';
import { AppStateType } from '../redux/reducers/rootReducer';

type PropsType = {
    
}
const SerchComplexesBlock: React.FC<PropsType> = ({ }) => {
    const history = useHistory();
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const { searchText } = useSelector(({ complexes}:AppStateType) => {
        return {
            searchText:complexes.searchText
        }
    })
    
    const onChangeInput = useCallback((e: any) => {
        dispatch(setSearchText(e.target.value))
    }, [dispatch, setSearchText]);
    
    const onHandlerClick = useCallback(() => {
        pathname !== "/search" && history.push("/search");
        dispatch(fetchComplexesByText(searchText))
    },[dispatch, fetchComplexesByText, searchText])


return (
    <div className="catalog-wrapper">
        <form action="" className="form-search">
        <div className="form-search__field">
            <input type="search" className="form-search__input" value={searchText}placeholder="Поиск по базе" onChange={onChangeInput}/>
            <button type="button" className="btn-search"><img src={window.location.origin + iconSearch} alt="searchIcon" onClick={onHandlerClick}/></button>
        </div>
        </form>
    </div>
);
}

export default React.memo(SerchComplexesBlock);
