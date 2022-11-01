import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Body from '../components/detail/Body';
import { selectList } from '../modules/bloglists';

const DetailPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    dispatch(selectList(Number(id)))
    const list = useSelector(state=>state.bloglists.selectList);
    return(
        <Body list={list} />
    )
}
export default DetailPage;