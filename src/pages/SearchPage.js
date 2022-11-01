
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isMenuCheck } from '../modules/members';
import Body from "../components/search/Body";
const SearchPage = () => {
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
        <Body onTextChange={onTextChange} searchLists={searchLists} />
    )
}
export default SearchPage;