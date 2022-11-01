const PostBtn = ({isLeft}) => {
    return (
        <div className={isLeft ? `postBtn leftBtn` : `postBtn rightBtn`}>
            <div className="svgDiv">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            {isLeft ? <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path> : <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path> }
               
            </svg>
            </div>
            {isLeft ? `이전포스트` : `다음포스트`}
        </div>
    );
}
export default PostBtn;