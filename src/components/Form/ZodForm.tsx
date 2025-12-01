import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const schema =z.object ({
    name: z.string().min(6),
    age: z.coerce.number({ invalid_type_error: 'Age must be a number' }).min(18, { message : 'Age must be atleast 18.'}).max(120),
    dob: z.coerce.date(),
    placeOfBirth: z.string(),
    nationality: z.string(),
    passportNumber: z.string(),
    issueDate: z.coerce.date(),
    expiryDate: z.coerce.date(),
    address: z.string(),
    phone: z.string(),
    email: z.string().email(),
});

type FormData = z.infer<typeof schema>;



function ZodForm(){
    const { register, handleSubmit, formState:{errors}} = useForm<FormData>({ resolver : zodResolver(schema)})
    const onSubmit = (data: FormData) => console.log(data);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input {...register('name')} id="name" type="text" className="form-control" />
                {errors.name && <p className='text-danger'>{errors.name.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input {...register('age', { valueAsNumber: true })} id="age" type="number" className="form-control" />
                {errors.age && <p className="text-danger">{errors.age.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="dob" className="form-label">Date of Birth</label>
                <input {...register('dob')} id="dob" type="date" className="form-control" />
                {errors.dob && <p className="text-danger">{errors.dob.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="placeOfBirth" className="form-label">Place of Birth</label>
                <input {...register('placeOfBirth')} id="placeOfBirth" type="text" className="form-control" />
                {errors.placeOfBirth && <p className="text-danger">{errors.placeOfBirth.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="nationality" className="form-label">Nationality</label>
                <input {...register('nationality')} id="nationality" type="text" className="form-control" />
                {errors.nationality && <p className="text-danger">{errors.nationality.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="passportNumber" className="form-label">Passport Number</label>
                <input {...register('passportNumber')} id="passportNumber" type="text" className="form-control" />
                {errors.passportNumber && <p className="text-danger">{errors.passportNumber.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="issueDate" className="form-label">Issue Date</label>
                <input {...register('issueDate')} id="issueDate" type="date" className="form-control" />
                {errors.issueDate && <p className="text-danger">{errors.issueDate.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                <input {...register('expiryDate')} id="expiryDate" type="date" className="form-control" />
                {errors.expiryDate && <p className="text-danger">{errors.expiryDate.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input {...register('address')} id="address" type="text" className="form-control" />
                {errors.address && <p className="text-danger">{errors.address.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input  {...register('phone')} id="phone" type="tel" className="form-control" />
                {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input {...register('email')} id="email" type="email" className="form-control" />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    )
}


export default ZodForm;