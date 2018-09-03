const dummy = blogs => {
  return 1
}

const totalLikes = blogs => {
  return blogs.reduce((totalLikes, blog) => {
    return totalLikes + (blog.likes ? blog.likes : 0)
  }, 0)
}

const favoriteBlog = blogs => {
  if (blogs.length === 0) return {}
  return blogs.reduce((mostLikes, blog) => blog.likes > mostLikes.likes ? blog : mostLikes)
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}