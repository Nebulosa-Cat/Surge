const BASE_URL = 'https://www.netflix.com/title/'

const AREA_TEST_FILM_ID = 80018499
const ORIGINAL_FILM_ID = 80197526
const NOT_ORIGINAL_FILM_ID = 70143836

;(async () => {
  await test(NOT_ORIGINAL_FILM_ID)
    .then((code) => {
      if (code != 'Not Available') {
        $done({
          title: 'Netflix 鎖區測試',
          style: 'good',
          content: '目前 IP 可完整收看 Netflix 影劇',
        })
        return new Promise(() => {})
      }
      return test(ORIGINAL_FILM_ID)
    })
    .then((code) => {
      if (code != 'Not Available') {
        $done({
          title: 'Netflix 鎖區測試',
          style: 'info',
          content: '目前 IP 僅支援收看 Netflix 自製劇',
        })
        return new Promise(() => {})
      }
      return test(AREA_TEST_FILM_ID)
    })
    .then((code) => {
      if (code != 'Not Available') {
        $done({
          title: 'Netflix 鎖區測試',
          style: 'alert',
          content: '目前 IP 不支援收看鎖強版權的自製劇',
        })
      } else {
        $done({
          title: 'Netflix 鎖區測試',
          style: 'error',
          content: 'Netflix 不為此 IP 提供服務',
        })
      }
    })
    .catch((error) => {
      $done({
          title: 'Netflix 鎖區測試',
        style: 'error',
        content: '測試失敗，請重試',
      })
    })
})()

function test(filmId) {
  return new Promise((resolve, reject) => {
    let option = {
      url: BASE_URL + filmId,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
      },
    }
    $httpClient.get(option, function (error, response, data) {
      if (error != null) {
        reject('Error')
        return
      }

      if (response.status !== 200) {
        resolve('Not Available')
        return
      }

      let url = response.headers['x-originating-url']
      let local = url.split('/')[3]
      if (local == 'title') {
        local = 'us'
      } else {
        local = local.split('-')[0]
      }
      resolve(local)
    })
  })
}