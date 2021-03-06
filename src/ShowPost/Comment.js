import React from 'react'
import './Comment.css'

// component is for showing the comment on the individual post page (date_posted, content, etc.)
class Comment extends React.Component {
    render() {
        return(
            <section className="comment">
                <p className="commentText">{this.props.content}</p>
                <p className="commentDate">{this.props.date_posted}</p>
            </section>
        )
    }
}

export default Comment;