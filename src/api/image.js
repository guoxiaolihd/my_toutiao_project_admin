/**
 * 文章相关请求模块
 */
import request from '@/utils/request'
/**
 * 获取素材列表
 */
export const getImages = params => {
  return request({
    method: 'GET',
    url: '/mp/v1_0/user/images',
    params
  })
}
