interface ExpenseFilterProps {
    onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: ExpenseFilterProps) => {
    return (
        <div>
            <select className="form-select" onChange={(e) => onSelectCategory(e.target.value)}>
                <option value="">All Categories</option>
                <option value="Grocery">Grocery</option>
                <option value="Stationary">Stationary</option>
                <option value="Medical">Medical</option>
            </select>
        </div>
    );
};

export default ExpenseFilter;
