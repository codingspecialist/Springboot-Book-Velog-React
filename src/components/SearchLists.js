import { useSelector } from "react-redux";

const SearchLists = ({searchLists}) => {
    const memberLists = useSelector(state=>state.members.members)
    if(searchLists.length === 0) return ( <div>검색 결과가 없습니다.</div>);
    return (
        <ul>
            { searchLists.map(list=>(
                <li className="searchList">
                    <div className="searchProfile">
                        <div className="photo"><img src={memberLists.find(list2=> list2.userId === list.userId).imgsrc} alt="" /></div>
                        <div>{list.userId}</div>
                    </div>
                    <div>
                        <img src={`/${list.src}`} alt="" />
                    </div>
                    <div>
                        <h2>{list.title}</h2>
                        <p>{list.desc.substr(0,200)}</p>
                    </div>
                    <div className="registdate">
                        {list.registdate}
                    </div>
                </li>
            )) }
        </ul>
    )
}
export default SearchLists;