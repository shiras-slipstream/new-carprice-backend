module.exports = (config, webpack) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          crypto: false,
          http: false,
          fs: false,
          zlib: false,
          https: false,
          stream: false,
          path: false,
          timers: false,
          tls: false,
          net: false,
          url: require.resolve("url/"),
          querystring: require.resolve("querystring-es3") 
        },
      }
    };
  };