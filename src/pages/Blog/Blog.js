import Comments from '../comments/Comments'

const Blog = () => {
  return (
    <Comments
      commentsUrl="http://localhost:3004/comments"
      currentUserId="1"
    />
  )
};

export default Blog;
