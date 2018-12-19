module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'Leaflet.GeojsonLayerSwitcher.min.js': '**/Leaflet.GeojsonLayerSwitcher.js'
      }
    },
    stylesheets: {
      joinTo: {
      	'Leaflet.GeojsonLayerSwitcher.min.css': '**/Leaflet.GeojsonLayerSwitcher.css'
	  }
	}
  },
  plugins: {
    uglify: {
      mangle: false,
      compress: {
        global_defs: {
          DEBUG: true
        }
      }
    }
  },
  paths: {
    watched: [
      'src',
	  'assets',
    ],
    public: 'dist'
  },
  modules: {
    nameCleaner: path => path.replace(/^src(\/|\\)/, '')
  }
};
