import "./ProgressBar.css";

export default function ProgressBar({ array, height, width }) {

  //converting a value to a percentage
  const percentageConversion = () => {
    let sum = 0;
    array.map((item) => {
      sum = sum + item.value;
      return sum;
    });

    return array.map((item) => {
      if (sum != 0) {
        let percent = ((item.value / sum) * 100).toFixed(1);
        item.percent = percent;
      }
    });
  };

  //calculating the width of one bar line to set the width of the box
  const calculateWidth = () => {
    var num = parseInt(width.match(/\d+/));
    let calcWidth = (num - 98) / 100;
    return calcWidth;
  };

  //output progress bar
  const bar = () => {
    percentageConversion();
    return array.map((item) => {
      return Array.from(Array(Math.ceil(item.percent)).keys()).map((i) => {
        return (
          <div
            className="bar-item"
            style={{ backgroundColor: item.color, width: calculateWidth() }}
          ></div>
        );
      });
    });
  };

  //output description of progress bar
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
      <div className="multicolor-bar" style={{ height: height }}>
        {array ? bar() : <div>Data not received</div>}
      </div>
      <div className="description">{array ? barDescribe() : <div></div>}</div>
    </div>
  );
}
