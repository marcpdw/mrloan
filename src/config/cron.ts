import { Job, JobCallback, scheduleJob }from 'node-schedule'

class Scheduler {
  private readonly job: Job

  constructor(cronExpression: string, callback: JobCallback) {
    this.job = scheduleJob(cronExpression, callback)
  }
}

export default Scheduler
