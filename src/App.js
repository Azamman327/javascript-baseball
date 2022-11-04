const MissionUtils = require("@woowacourse/mission-utils");
let computer;

class App {
  play() {
    computer = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
    MissionUtils.Console.readLine('숫자를 입력해주세요.', (answers) => {
      console.log(`숫자: ${answers}`);
    });
  }
}

module.exports = App;
