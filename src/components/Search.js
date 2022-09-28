import SearchInput from "./SearchInput";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchLists from "./SearchLists";
import { isMenuCheck } from '../modules/members';
const Search = () => {
    const [searchLists, setSearchLists ] = useState([]);
    const lists = useSelector(state=>state.bloglists.lists);
    const dispatch = useDispatch();
    dispatch(isMenuCheck(false));
    const onTextChange = (text) => {
        if(text === ""){
            setSearchLists([]);
        }else {
            setSearchLists(lists.filter(list=> list.desc.includes(text)));
        } 
    }
    return (
        <div className="searchPage subpage">
            <SearchInput onTextChange={onTextChange} />
            <SearchLists searchLists={searchLists}  />
        </div>
    )
}
export default Search;