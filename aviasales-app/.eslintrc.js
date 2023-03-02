module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "ignorePatterns": ["node_modules", "dist", "build"],
  "extends": ["airbnb", "airbnb/hooks", "plugin:react/jsx-runtime", "prettier"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "prettier", "import"],
  "rules": {
    "indent": ["error", 2],
    "prettier/prettier": "error",
    "linebreak-style": [0, "unix"],
    "quotes": ["error", "single"],
    "semi": 0,
    'indent': 'off',
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "import/no-unresolved": [2, { "caseSensitive": false }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-a11y/label-has-associated-control": [ "error", {
      "required": {
        "some": [ "nesting", "id"  ]
      }
    }],
    "jsx-a11y/label-has-for": [ "error", {
      "required": {
        "some": [ "nesting", "id"  ]
      }
    }],
    "import/order": [
      2,
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "newlines-between": "always"
      }
    ]
  },
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "requireConfigFile": false,
    "babelOptions": {
      "presets": ["@babel/preset-react"]
    }
},
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
        "moduleDirectory": ["node_modules", "src/"]
      }
    },
    "react": {
      "version": "detect"
    }
  }
};