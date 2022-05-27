const {ModuleFederationPlugin} =require("webpack").container;

const deps=require("./package.json").dependencies;

module.export = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: 'auto',
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'movies',
          filename: 'remoteEntry.js',
          exposes: {
            './Movies': './src/MoviesContent',
          },
          shared: {
            ...deps,
            card: {
              singleton: true,
            },
            "movie-content": {
              singleton: true,
            },
            "playlist-content": {
              singleton: true,
            },
            tsconfig: {
              singleton: true,
            },
            ui: {
              singleton: true,
            },
            react: {
              singleton: true,
            },
            "react-dom" :{
              singleton: true,
              requireVersion:deps["react-dom"],
            },
          },
        }),
      ],
    },
  },
});
