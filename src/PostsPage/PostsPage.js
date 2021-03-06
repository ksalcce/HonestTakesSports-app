import React, {Component} from 'react'
import PostPreview from './PostPreview'
import './PostsPage.css'

// renders each individual post through PostPreview
class PostsPage extends Component {
    static defaultProps = {
        posts: []
    }
    
    render() {
        return(
            <div className="postsPage">
                <div className="posts-container">
                    {this.props.posts.length?
                        this.props.posts.map((item, index) => <PostPreview id = {item.id} title={item.title} date_posted={item.date_posted} key={"post" + index}/>)
                        :'There are no posts yet'} 
                </div>
                <button 
                    className="postsPageButton" 
                    onClick = {() => this.props.history.push('/posts/create-post')}
                >Add Post</button>
            </div>
        )
    }
} 

export default PostsPage;