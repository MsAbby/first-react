import React from "react";

class Comment extends React.Component {
    state = {
        comments: [
            { id: 1, name: 'jack', content: 'jack' },
            { id: 2, name: 'rose', content: 'rose' },
            { id: 3, name: 'tom', content: 'tom' },
        ],
        user: '',
        commentContent: ''
    }

    handelChange = (e) => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handelClick = () => {
        const {comments, user, commentContent} = this.state
        if (user.trim() === '' || commentContent.trim() === '') {
            alert('请输入内容')
            return
        }
        const result = [{id: Math.random(), name: user, content: commentContent}, ...comments]
        this.setState({
            comments: result, 
            user: '',
            commentContent: ''
        })
    }
    renderList() {
        return (
            this.state.comments.length === 0 ? (
                <div className="no-comment">暂无评论，快去评论</div>
            ) : (
                <ul>
                    {
                        this.state.comments.map((item) => {
                            return (
                                <li key={item.id}>
                                    <h3>评论人： {item.name}</h3>
                                    <p>评论内容： {item.content}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            )

        )
    }
    render() {
        const {user, commentContent} = this.state

        return (
            <div className="app">
                <div>
                    <input
                        className="user"
                        type="text"
                        name="user"
                        placeholder="请输入评论"
                        onChange={this.handelChange}
                        value={user} /><br />
                    <textarea
                        className="content"
                        name="commentContent"
                        cols="30"
                        rows="10"
                        placeholder="请输入评论内容"
                        onChange={this.handelChange}
                        value={commentContent}
                   /><br />
                    <button onClick={this.handelClick}>发表评论</button>
                </div>
                {
                    this.renderList()
                }
            </div>
        )
    }
}

export default Comment