const MyVelogMenu = ({ loginMember , onSubList, onAllList}) => {
    return (
        <div className="myvelogMenu">
            <div>
                <h3 onClick={onAllList}>시리즈</h3>
                <ul>
                    {loginMember.series.map(list=>(<li onClick={()=>onSubList(list)}>{list}</li>))}
                </ul>
            </div>
        </div>
    )
}
export default MyVelogMenu;