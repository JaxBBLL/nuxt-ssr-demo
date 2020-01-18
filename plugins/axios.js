import qs from 'qs'

export default function({ $axios, redirect }) {
  $axios.onRequest(config => {
    config.data = qs.stringify(config.data, {
      allowDots: true // Option allowDots can be used to enable dot notation
    })
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/login')
    }
  })
  //  添加一个请求拦截器
  $axios.interceptors.request.use(
    function(config) {
      return config
    },
    function(error) {
      return Promise.reject(error)
    }
  )

  //  添加一个响应拦截器
  $axios.interceptors.response.use(
    res => {
      if (res.status === 200) {
        console.log(res.config.url, res.data)
        if (res.data.code === 500) {
          // Message({
          //   message: res.data.message,
          //   type: 'error'
          // })
        } else if (res.data.code === 401) {
          redirect('/login')
        }
      }
      return res
    },
    err => {
      return Promise.reject(err)
    }
  )
}
