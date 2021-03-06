import jsonp from 'common/js/jsonp'
import {
  commonParams,
  options
} from './config'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    platform: 'yqq',
    hostUin: 0,
    format: 'jsonp',
    needNewCode: 0,
    pagesize: 100,
    pagenum: 1,
    g_tk: 1664029744
  })

  return jsonp(url, data, options)
}
