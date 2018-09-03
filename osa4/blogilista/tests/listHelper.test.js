const listHelper = require('../utils/list_helpers')

describe('dummy tests', () => {
  test('dummy with empty list ', () => {
    const blogs = []
    const result = listHelper.dummy(blogs)

    expect(result).toBe(1)
  })

  test('dummy with one blog ', () => {
    const result = listHelper.dummy([{
      'title': 'testi',
      'author': 'Kari',
      'url': 'adkflefadsfdasf',
      'likes': 0
    }])

    expect(result).toBe(1)
  })
})

describe('total likes', () => {
  test('total likes for empty list ', () => {
    const blogs = []
    const result = listHelper.totalLikes(blogs)

    expect(result).toBe(0)
  })

  test('total likes for list with one blog ', () => {
    const blogs = [{
      'title': 'testi',
      'author': 'Kari',
      'url': 'adkflefadsfdasf',
      'likes': 3
    }]
    const result = listHelper.totalLikes(blogs)

    expect(result).toBe(3)
  })

  test('total likes for list with two blogs', () => {
    const blogs = [{
      'title': 'testi',
      'author': 'Kari',
      'url': 'adkflefadsfdasf',
      'likes': 3
    },
    {
      'title': 'testi2',
      'author': 'Kari',
      'url': 'adkfledfdfdffadsfdasf',
      'likes': 6
    }]
    const result = listHelper.totalLikes(blogs)

    expect(result).toBe(9)
  })

  test('total likes for list with two blogs, where another is empty', () => {
    const blogs = [{
      'title': 'testi',
      'author': 'Kari',
      'url': 'adkflefadsfdasf',
      'likes': 3
    },
    {}]
    const result = listHelper.totalLikes(blogs)

    expect(result).toBe(3)
  })
})

describe('favorite blog', () => {
  test('favoriteBlog with empty array', () => {
    const blogs = []
    const result = listHelper.favoriteBlog(blogs)

    expect(result).toEqual({})
  })

  test('favoriteBlog with two blogs', () => {
    const blogs = [{
      'title': 'testi',
      'author': 'Kari',
      'url': 'adkflefadsfdasf',
      'likes': 3
    },
    {
      'title': 'testi2',
      'author': 'Kari',
      'url': 'adkfledfdfdffadsfdasf',
      'likes': 6
    }]
    const result = listHelper.favoriteBlog(blogs)
    const expectedResult = {
      'title': 'testi2',
      'author': 'Kari',
      'url': 'adkfledfdfdffadsfdasf',
      'likes': 6
    }
    expect(result).toEqual(expectedResult)
  })

  test('favoriteBlog with 4 blogs', () => {
    const blogs = [{
      'title': 'testi',
      'author': 'Kari',
      'url': 'adkflefadsfdasf',
      'likes': 3
    },
    {
      'title': 'testi2',
      'author': 'Kari',
      'url': 'adkfledfdfdffadsfdasf',
      'likes': 6
    },
    {
      'title': 'testi3',
      'author': 'Kari',
      'url': 'adkfledfdfdffadsfdasf',
      'likes': 9
    },
    {
      'title': 'testi4',
      'author': 'Kari',
      'url': 'http://www.adkfledfdfdsfdfdffadsfdasf.com',
      'likes': 15
    }]
    const expectedResult = {
      'title': 'testi4',
      'author': 'Kari',
      'url': 'http://www.adkfledfdfdsfdfdffadsfdasf.com',
      'likes': 15
    }
    const result = listHelper.favoriteBlog(blogs)

    expect(result).toEqual(expectedResult)
  })
})