'use strict';

exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                    //   'mongodb://localhost/restaurants-app';
                      'mongodb://dev:devdev@ds153352.mlab.com:53352/fathomless-depths';
exports.PORT = process.env.PORT || 8080;