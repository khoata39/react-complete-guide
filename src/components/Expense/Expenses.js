import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = (props) => {
  const renderItems = () => {
    return props.items.map((item, index) => {
      return (
        <ExpenseItem
          key={index}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      );
    });
  };

  return <Card className="expenses">{renderItems()}</Card>;
};

export default Expenses;
