// todo api
export const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/todos') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              todos: [
                {
                  title: 'Go Outside',
                  desc: 'lorem ipsum dolor sit amit',
                  todos: ['shopping', 'cricket', 'walking'],
                },
                {
                  title: "Let's Work",
                  desc: 'lorem ipsum dolor sit amit',
                  todos: ['Feature update', 'Team Meet', 'Code Walkthrough'],
                },
                {
                  title: 'Home Work',
                  desc: 'lorem ipsum dolor sit amit',
                  todos: ['Fix tap', 'Wedding function'],
                },
              ],
            },
          })
        } else {
          reject({
            status: 404,
            message: 'Todo list not found.',
          })
        }
      }, 2000)
    })
  }

//habit tracker api
export const fakeFetchHabitTracker = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/habits') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            habits: [
              {
                title: 'Drinking enough water',
                desc: 'Aim to drink 5-6L of water each day to stay hydrated',
                daysFollowed: 7,
                daysSkipped: 3,
              },
              {
                title: 'Exercise',
                desc: 'Track your workouts and aim to exercise a certain number of days per week',
                daysFollowed: 10,
                daysSkipped: 4,
              },
              {
                title: 'Meditation',
                desc: 'Track your daily meditation practice and try to increase the length of your sessions over time',
                daysFollowed: 30,
                daysSkipped: 7,
              },
              {
                title: 'Gratitude',
                desc: 'Write down something you are grateful for each day',
                daysFollowed: 11,
                daysSkipped: 5,
              },
              {
                title: 'Saving Money',
                desc: 'Track your expenses and set a goal to save a certain amount of money each month',
                daysFollowed: 40,
                daysSkipped: 15,
              },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Habits not found.',
        })
      }
    }, 2000)
  })
}

//video library api
export const fakeFetchVideoLibrary = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/videos') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            videos: [
              {
                title: 'The Power of Habit',
                thumbnail: 'https://picsum.photos/200/130',
                views: 1000000,
                likes: 50000,
              },
              {
                title: 'How to Code in JavaScript',
                thumbnail: 'https://picsum.photos/200/135',
                views: 500000,
                likes: 25000,
              },
              {
                title: '10 Minute Yoga for Beginners',
                thumbnail: 'https://picsum.photos/200/131',
                views: 250000,
                likes: 15000,
              },
              {
                title: 'Introduction to Machine Learning',
                thumbnail: 'https://picsum.photos/200/132',
                views: 100000,
                likes: 10000,
              },
              {
                title: 'The Science of Cooking',
                thumbnail: 'https://picsum.photos/200/133',
                views: 75000,
                likes: 5000,
              },
              {
                title: 'The Art of Public Speaking',
                thumbnail: 'https://picsum.photos/200/134',
                views: 50000,
                likes: 2500,
              },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Videos not found.',
        })
      }
    }, 2000)
  })
}

//social media api
export const fakeFetchSocialMedia = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/posts') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            posts: [
              {
                caption: 'Delicious chocolate cake recipe',
                src: 'https://picsum.photos/300/301',
                views: 1000,
                likes: 100,
                category: 'Bakery',
              },
              {
                caption: '5-minute breakfast ideas',
                src: 'https://picsum.photos/300/300',
                views: 500,
                likes: 50,
                category: 'Food',
              },
              {
                caption: "The best bread recipe you'll ever taste",
                src: 'https://picsum.photos/300/302',
                views: 2000,
                likes: 200,
                category: 'Bakery',
              },
              {
                caption: '10 DIY home decor ideas',
                src: 'https://picsum.photos/300/303',
                views: 100,
                likes: 10,
                category: 'DIY',
              },
              {
                caption: 'Healthy snacks for work',
                src: 'https://picsum.photos/300/304',
                views: 300,
                likes: 30,
                category: 'Food',
              },
              {
                caption: 'How to make sourdough bread at home',
                src: 'https://picsum.photos/300/305',
                views: 1500,
                likes: 150,
                category: 'Bakery',
              },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Post not found.',
        })
      }
    }, 2000)
  })
}

//habit tracker unarchived api 
export const fakeFetchHabitTrackerUnarchived = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/habits') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            habits: [
              {
                title: 'Drinking enough water',
                desc: 'Aim to drink 5-6L of water each day to stay hydrated',
                daysFollowed: 7,
                daysSkipped: 3,
                archived: false,
              },
              {
                title: 'Exercise',
                desc: 'Track your workouts and aim to exercise a certain number of days per week',
                daysFollowed: 10,
                daysSkipped: 4,
                archived: true,
              },
              {
                title: 'Meditation',
                desc: 'Track your daily meditation practice and try to increase the length of your sessions over time',
                daysFollowed: 30,
                daysSkipped: 7,
                archived: true,
              },
              {
                title: 'Gratitude',
                desc: 'Write down something you are grateful for each day',
                daysFollowed: 11,
                daysSkipped: 5,
                archived: false,
              },
              {
                title: 'Saving Money',
                desc: 'Track your expenses and set a goal to save a certain amount of money each month',
                daysFollowed: 40,
                daysSkipped: 15,
                archived: false,
              },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Habits not found.',
        })
      }
    }, 2000)
  })
}

//projects api
export const fakeFetchProjectApi = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/projects') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            projects: [
              {
                title: 'E-commerce Website',
                description:
                  'A fully functional e-commerce website with shopping cart and checkout functionality.',
                technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
                completed: false,
              },
              {
                title: 'Weather App',
                description:
                  'A web application that displays the current weather and forecast for a given location.',
                technologies: ['React', 'Node.js', 'OpenWeatherMap API'],
                completed: true,
              },
              {
                title: 'Task Manager',
                description:
                  'A web application that allows users to create, manage and track tasks.',
                technologies: ['Vue.js', 'Firebase'],
                completed: false,
              },
              {
                title: 'Blog Website',
                description:
                  'A blog website that allows users to create, read, update and delete blog posts.',
                technologies: ['React JS', 'MongoDB'],
                completed: true,
              },
              {
                title: 'Mobile Game',
                description:
                  'A mobile game developed for iOS and Android platforms.',
                technologies: ['Unity', 'C#'],
                completed: false,
              },
            ],
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Projects not found.',
        })
      }
    }, 2000)
  })
}

//user Profile api
export const fakeFetchUserProfile = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/profile') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            profiles: {
              name: 'John',
              age: 30,
              gender: 'male',
              email: 'john@example.com',
              occupation: 'Software Engineer',
            },
          },
        })
      } else {
        reject({
          status: 404,
          message: 'User Profile not found.',
        })
      }
    }, 2000)
  })
}

//video library api
export const fakeFetchVideo = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/getvideo') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            videos: {
              title: 'The Power of Habit',
              thumbnail: 'https://picsum.photos/250/130',
              views: 1000000,
              likes: 50000,
            },
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Video not found.',
        })
      }
    }, 2000)
  })
}

//Social media profile api 
export const fakeFetchSocialMediaProfile = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/profile') {
        resolve({
          status: 200,
          message: 'Success',
          data: {
            profile: {
              name: 'John',
              age: 30,
              gender: 'male',
              email: 'john@example.com',
              occupation: 'Software Engineer',
              followers: 450,
              followedBy: 400,
            },
          },
        })
      } else {
        reject({
          status: 404,
          message: 'Profile not found.',
        })
      }
    }, 2000)
  })
}

