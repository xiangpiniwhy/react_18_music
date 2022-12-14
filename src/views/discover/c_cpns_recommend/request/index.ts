import hyRequest from '@/services'

export function getTopBanner(): Promise<any> {
  return hyRequest.get({
    url: '/banner'
  })
}
