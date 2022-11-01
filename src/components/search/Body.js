import SearchInput from "./atom/SearchInput";
import SearchLists from "./atom/SearchLists";
const Body = ({onTextChange, searchLists}) => {
    return (
        <div className="searchPage subpage">
            <SearchInput onTextChange={onTextChange} />
            <SearchLists searchLists={searchLists}  />
        </div>
    )
}
export default Body;