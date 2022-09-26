import array from "./data";
import "./ProgressBar.css";

export default function ProgressBar() {
  const percentageConversion = () => {
    let sum = 0;
    array.map((item) => {
      sum = sum + item.value;
      return sum;
    });

    return array.map((item) => {
      if (sum != 0) {
        let percent = Math.round((item.value / sum) * 100);
        item.percent = percent;
      }
    });
  };

  const bar = () => {
    percentageConversion();
    return array.map((item) => {
      return Array.from(Array(item.percent).keys()).map((i) => {
        return (
          <div
            className="bar-item"
            style={{ backgroundColor: item.color }}
          ></div>
        );
      });
    });
  };

  const barDescribe = () => {
    return array.map((item) => {
      return Array.from(Array(1).keys()).map((i) => {
        return (
          <span>
            <span
              className="color-circle"
              style={{ backgroundColor: item.color }}
            ></span>
            {item.name}: {item.value} ({item.percent}%)
          </span>
        );
      });
    });
  };
  return (
    <div className="bar-box">
      <div className="multicolor-bar">
        {array ? bar() : <div>Данные не пришли</div>}
      </div>
      <div className="description">{array ? barDescribe() : <div></div>}</div>
    </div>
  );
}
