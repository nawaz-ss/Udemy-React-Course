import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'

function Expenses(props) {
    const { expenses } = props
    return (
        <Card className="expenses">
            {expenses.map(el => <ExpenseItem data={el} />)}
        </Card>
    )
}

export default Expenses