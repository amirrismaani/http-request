import Comment from "../Comment/Comment";
import "./CommentList.css"
const CommentList = ({ comments, onClickComment, error }) => {
    const renderCommentList = () => {
        let renderValue = <p>Comments are loading...</p>
        if (error) renderValue = <p>Comments loading failed!</p>
        if (!error && comments) renderValue = comments.map(comment => <Comment comment={comment} key={comment.id} onClickComment={onClickComment} />)
        return renderValue
    }

    return (
        <section className="comment-list">{renderCommentList()}</section>
    );
}

export default CommentList;