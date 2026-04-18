export class RepoOperator {
  static getRepoIndexByName = (data: any[], name: string) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === name) return i;
    }
    return -1;
  };

  static removeRepoByIndex = (data: [], index: number) => {
    data.splice(index, 1);
  };

  static updataRepo = (data: any, index: number) => {
    data["repositories"][index]["lastOpen"] = new Date(
      Date.now(),
    ).toUTCString();
  };
}
