const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const isProd = process.env.NODE_ENV === "production";

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}

// module.exports = withLess(
//   withSass({
//     env: {
//       PUBLIC_URL: "",
//     },
//     lessLoaderOptions: {
//       javascriptEnabled: true,
//     },
//   })
// );

if (typeof require !== "undefined") {
  require.extensions[".less"] = () => {};
}
const nextConfig = { webpack5: true };
module.exports = withPlugins(
  [
    [
      withCSS(
        withLess(
          withSass({
            env: {
              PUBLIC_URL: "",
            },
            trailingSlash: true,
            lessLoaderOptions: {
              javascriptEnabled: true,
            },
            async headers() {
              return [
                {
                  // matching all API routes
                  source: "/api/:path*",
                  headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    {
                      key: "Access-Control-Allow-Methods",
                      value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
                    },
                    {
                      key: "Access-Control-Allow-Headers",
                      value:
                        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
                    },
                  ],
                },
              ];
            },
          })
        )
      ),
    ],
  ],
  nextConfig
);


const mjsConfig = (nextConfig = {}) => Object.assign({}, nextConfig, {
  // eslint-disable-next-line no-unused-vars
  webpack(config, options) {
    config.module.rules.push(
      {
        type: 'javascript/auto',
        test: /\.mjs$/,
        use: [],
      },
    );

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options);
    }

    return config;
  },
});

module.exports = mjsConfig;



module.exports = {
  eslint: { ignoreDuringBuilds: true },
  // your other settings here ...
}