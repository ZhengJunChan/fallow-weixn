import list from './../../data/activity/index.js'

const activity = {
  'start_time': '2017-10-08',
  'end_time': '2018-02-03',
  'title': '七彩云南',
  'author_header': 'https://c4-q.mafengwo.net/s5/M00/D4/25/wKgB3FEy3GWAHsgyAAEp1QaD-hY21.jpeg',
  'author_nikname': '欢乐与假期',
  'uid': 1,
  'id': 1
}

const count = 10
let activityList = []

for (let index = 0; index < list.length; index++) {
  activityList.push(list[index])
}

for (let index = 0; index < count; index++) {
  activityList.push(activity)
}

export { activity, activityList }