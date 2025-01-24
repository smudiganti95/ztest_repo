/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"comhybe/zhyb_ztest/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});