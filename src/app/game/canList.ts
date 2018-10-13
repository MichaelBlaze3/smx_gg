export class CanList {
  garbageCanStatus: any = {
    aluminio: {
      id: 'can1',
      full: false,
      answer: false
    },
    organico: {
      id: 'can2',
      full: false,
      answer: false
    },
    papelycarton: {
      id: 'can3',
      full: false,
      answer: false
    },
    plastico: {
      id: 'can4',
      full: false,
      answer: false
    }
  };

  updateCanStatus(temp: any): void {
    console.log(temp);
    this.garbageCanStatus[temp.canCategory].full = temp.canStatus;
    this.garbageCanStatus[temp.canCategory].answer = temp.answer;
    console.log(this.garbageCanStatus);
  }

  resetCanList(): void {

  }

  getCanStatus(): any {
    return this.garbageCanStatus;
  }
}
