const errorHandler = require('@arimuscorp/error-handler')
const errors = require('./lib/errors.json')
errorHandler.addErrors(errors)


module.exports = d => {
  const { crmTimezoneQueue, crmAdvent } = d


  var dp = {}

  dp.queueTimezone = function(item, options, cb){
    crmTimezoneQueue.create(item, (err, result) => {
      cb(err, result)
    })
  }

  dp.createHourlyAdvent = function(advent, options, cb){
    crmAdvent.create(advent, (err, result) => {
      cb(err, result)
    })
  }

  dp.retrieveQueuedTimezone = function(options, cb){
    const limit = options.limit || 1
    crmTimezoneQueue.find({ limit }, (err, result) => {
      cb(err, result)
    })
  }

  dp.removeQueuedTimezone = function(id, options, cb){
    crmTimezoneQueue.removeById(id, options, (err, result) => {
      cb(err, result)
    })
  }


  return dp
}
