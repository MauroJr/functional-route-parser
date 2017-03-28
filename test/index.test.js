'use strict';

const expect = require('chai').expect;

const RouteParser = require('../src');

/* eslint prefer-arrow-callback: 0, func-names: 0 */
describe('Route Parser', function () {
  describe('Create a Route', function () {
    it('should create a route parser with `parse ans encode` methods', function () {
      const route = RouteParser('my/test/:route');

      expect(route.parse).to.be.a('function');
      expect(route.encode).to.be.a('function');
    });

    // it('should parse a valid route', function () {
    //   const route = RouteParser('my/test/:route');
    //   const parsedRoute = route.parse('my/test/my-route');

    //   expect(parsedRoute.route).to.be.equal('my-route');
    // });

    // it('should parse a valid route with options', function () {
    //   const route = RouteParser('my/:action=(test|build)/:route');
    //   const parsedRoute = route.parse('my/test/my-route');

    //   expect(parsedRoute).to.be.a('object');
    //   expect(parsedRoute.route).to.be.equal('my-route');
    //   expect(parsedRoute.action).to.be.equal('test');
    // });

    // it('should parse a valid route with splat operator', function () {
    //   const route = RouteParser('*/:action=(test|build)/:route');
    //   const parsedRoute = route.parse('my/test/my-route');

    //   expect(parsedRoute).to.be.a('object');
    //   expect(parsedRoute['0']).to.be.equal('my');
    //   expect(parsedRoute.action).to.be.equal('test');
    //   expect(parsedRoute.route).to.be.equal('my-route');
    // });
  });
});
