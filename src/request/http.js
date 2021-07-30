import axios from 'axios';

const GET = 'GET';
const POST = 'POST';

const server = axios.create({
  withCredentials: true,
});
server.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    throw new Error(error);
  },
);

server.interceptors.response.use(response => {
  return response.data;
});

class Call {
  constructor(client, method, path) {
    // 配置参数
    this.config = client.defaultConfig;

    // 是否使用内置Loading
    this.useLoading = false;

    // 请求路径
    this.path = path;
    // 请求参数
    this.params = client.params;
    this.body = client.body;

    // 请求方法
    this.method = method;

    //  true 自己catch错误   false 使用统一catch
    this.catch_error = false;
    // true 统一处理code码错误   false 使用统一处理
    this.server_error = false;
    this.headers = JSON.parse(
      JSON.stringify(client.defaultConfig.headers || {}),
    );
  }

  /**
   * 是否使用内置Loading
   */
  with_loading(tips) {
    const { defaultLoading } = this.config;
    if (Object.prototype.toString.call(defaultLoading) === '[object Object]') {
      if (
        typeof defaultLoading.show === 'function' &&
        typeof defaultLoading.hide === 'function'
      ) {
        this.useLoading = true;
        this.defaultTips = tips;
      }
    }
    return this;
  }

  /**
   * 使用自己的loading
   */
  custom_loading(customLoading) {
    console.log(customLoading, "customLoading")
    if (Object.prototype.toString.call(customLoading) === '[object Object]') {
      if (
        typeof customLoading.show === 'function' &&
        typeof customLoading.hide === 'function'
      ) {
        this.config.defaultLoading = customLoading;
        this.useLoading = true;
      }
    }
    return this;
  }

  /**
   * 使用自己的catch / 不走统一catch
   */
  catch_http_error() {
    this.catch_error = true;
    return this;
  }

  /**
   * 自己处理code码错误 / 不走统一处理
   */
  dispose_server_error() {
    this.server_error = true;
    return this;
  }

  // 设置请求头
  setHeaders(headers = {}) {
    this.headers = Object.assign(this.headers, headers);
    return this;
  }

  /**
   * 判断是否是绝对地址 (有 `://`或 `//` 就算是绝对地址)
   */
  isAbsoluteURL(url) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  }

  exec() {
    const {
      baseUrl,
      defaultLoading,
      checkCode,
      onServerError,
      onNetworkError,
    } = this.config;
    const [i_code, i_whiteList] = checkCode || [];
    return new Promise(async (resolve, reject) => {
      const request = {
        url: this.isAbsoluteURL(baseUrl)
          ? `${baseUrl}${this.path}`
          : `${this.path}`,
        method: this.method,
        data: this.body,
        params: this.params,
        headers: { ...this.headers },
      };

      let response = null;

      if (this.useLoading) {
        defaultLoading.show(this.defaultTips);
      }

      try {
        response = await server(request);
        if (this.useLoading) {
          defaultLoading.hide();
        }

        if (!i_code || i_whiteList.includes(response[i_code])) {
          resolve(response);
        } else if (!this.server_error && typeof onServerError === 'function') {
          onServerError(response);
        } else {
          resolve(response);
        }
      } catch (error) {
        if (this.useLoading) {
          defaultLoading.hide();
        }
        const { status, data = {} } = error.response;

        if (this.catch_error) {
          reject(data);
        } else {
          typeof onNetworkError === 'function'
            ? onNetworkError(error.response)
            : reject(data);
        }
      }
    });
  }
}

/**
 * @param {Object} config
 * @param {String} config.baseUrl
 * @param {Function} config.onNetworkError 使用统一的catch
 * @param {Function} config.onServerError 统一处理code码错误
 * @param {Object} config.defaultLoading 默认loading 设置
 * @param {Function} config.defaultLoading.show
 * @param {Function} config.defaultLoading.hide
 * @param {Array} config.checkCode  // 如果接口是根据类似code判断的就可以用上
 * @param {String} config.checkCode[0]  // 字段名称
 * @param {Array} config.checkCode[1]  // 白名单
 * @param {Array} config.headers  // 请求头
 */
class HttpClient {
  constructor(config) {
    this.params = {};
    this.body = {};
    this.defaultConfig = config;
  }

  get(path, params = {}) {
    this.params = params;
    this.body = {};
    return new Call(this, GET, path);
  }

  post(path, body = {}) {
    this.body = body;
    this.params = {};
    return new Call(this, POST, path);
  }
}

export default HttpClient;
