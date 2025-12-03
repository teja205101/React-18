import { z } from 'zod';
import { Categories } from "../categories";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef } from 'react';

interface ExpenseFormProps {
    onSubmit: (data: any) => void;
}

const schema = z.object ({
    description : z.string().min(3,{message:"Description must be atlease 3 characters long."}).max(100,{message:"Description must be atmost 100 characters long."}),
    amount : z.number().min(1,{message:"Amount must be positive."}),
    category : z.enum(Categories,{errorMap: ()=>({ message:
        "Select a category."
    })})
});

type ExpenseFormData = z.infer<typeof schema>;

function ExpenseForm({onSubmit}:ExpenseFormProps) {
    const { register, handleSubmit, formState:{errors}}=useForm<ExpenseFormData>({resolver:zodResolver(schema)});

    const descriptionRef=useRef<HTMLInputElement>(null);
    useEffect(()=>{
        descriptionRef.current?.focus();
        console.log(descriptionRef.current?.value);
    },[])

    useEffect(()=>{
        document.title="Add Expense";
    })

    return (
        <div>
            <h2>Add Expense</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input {...register("description")} ref={descriptionRef} type="text" className="form-control" id="description" />
                    {errors.description && <p className="text-danger">{errors.description.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input {...register("amount",{valueAsNumber:true})} type="number" className="form-control" id="amount" />
                    {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select {...register("category")} className="form-select" id="category">
                        <option value="">Select Category</option>
                        {Categories.map((category,index)=>(
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                    {errors.category && <p className="text-danger">{errors.category.message}</p>}
                </div>
                <button type="submit" className="btn btn-primary">Add Expense</button>
            </form>
        </div>
    );
}

export default ExpenseForm;
