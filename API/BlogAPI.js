const server = 'http://localhost:8080'

export default{
    ADD_BLOG: `${process.env.REACT_APP_SERVER}/blog`,
    ALL_BLOG: `${process.env.REACT_APP_SERVER}/blog`,
    LIKE_BLOG: `${process.env.REACT_APP_SERVER}/blog/like`,
    COMMENT_BLOG: `${process.env.REACT_APP_SERVER}/blog/comment`,
    DELETE_COMMENT: `${process.env.REACT_APP_SERVER}/blog/delete-comment`
}