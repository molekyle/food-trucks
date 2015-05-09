# food-trucks

Some possible improvements

1. Use Backbone.JS, AngularJS or another UI framework, especially if building a more feature rich UI.

2. Validate user input.

3. Investigate SFGov API further to check whether

- Food items can be filtered at SFGov, instead of in Node.js?

- Only column data needed can be returned from SFGov?

4. Retry call to SFGov and build a Mocha.js test for the logic.

5. Given a data source with, f.x. worldwide food truck data, instead of SF data only, which can be filtered out visually in Google Maps without performance problems, consider passing in a radius to the Node.js service and return only data within that radius. In this case, consider moving the food trucks data into a data store with a geospatial index, f.x. MongoDB or MySQL. Consider

- How to refresh the data in the data store? One-shot? With a given frequency, f.x. every hour by a cron job or timer within Node.js?

- Consider caching some of the data outside the datastore in a place with better performance, f.x. RocksDB. Consider how to partition the data to be cached. 


