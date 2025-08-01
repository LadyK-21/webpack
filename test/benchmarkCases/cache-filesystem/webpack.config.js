"use strict";

/** @type {import("../../../").Configuration} */
module.exports = {
	entry: "./index",
	cache: {
		type: "filesystem",
		// For benchmark stability
		maxMemoryGenerations: 0,
		idleTimeoutForInitialStore: 0
	}
};
