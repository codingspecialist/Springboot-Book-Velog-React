
import { useDispatch } from "react-redux";
import Body from "../components/write/Body";
import { isMenuCheck } from '../modules/members';
const WritePage = () => {
    const dispatch = useDispatch();
    dispatch(isMenuCheck(false));
    return (
        <Body />
    )
}
export default WritePage;