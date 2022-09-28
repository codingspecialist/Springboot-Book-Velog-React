import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from "react-redux";
import { isMenuCheck } from '../modules/members';
const Write = () => {
    const dispatch = useDispatch();
    dispatch(isMenuCheck(false));
    return (
        <div className='subpage'>
            <ReactQuill/>
        </div>
    )
}
export default Write;