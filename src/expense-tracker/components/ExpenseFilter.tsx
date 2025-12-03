import { Categories } from "../categories";

interface ExpenseFilterProps {
    onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: ExpenseFilterProps) => {
    return (
        <div>
            <select className="form-select" onChange={(e) => onSelectCategory(e.target.value)}>
                <option value="">All Categories</option>
                {Categories.map((category,index)=>(
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
        </div>
    );
};

export default ExpenseFilter;
