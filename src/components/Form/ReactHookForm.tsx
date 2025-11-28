import { useForm } from "react-hook-form";

function ReactHookForm() {
    const { register } = useForm();
    console.log('register -->',register);
    return(<form >

        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input {...register('name')} id="name" type="text" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input {...register('age')} id="age" type="number" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input {...register('dob')} id="dob" type="date" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="placeOfBirth" className="form-label">Place of Birth</label>
            <input {...register('placeOfBirth')} id="placeOfBirth" type="text" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="nationality" className="form-label">Nationality</label>
            <input {...register('nationality')} id="nationality" type="text" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="passportNumber" className="form-label">Passport Number</label>
            <input {...register('passportNumber')} id="passportNumber" type="text" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="issueDate" className="form-label">Issue Date</label>
            <input {...register('issueDate')} id="issueDate" type="date" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
            <input {...register('expiryDate')} id="expiryDate" type="date" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input {...register('address')} id="address" type="text" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input  {...register('phone')} id="phone" type="tel" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input {...register('email')} id="email" type="email" className="form-control" />
        </div>

        <button className="btn btn-primary" type="submit">Submit</button>

    </form>
    );
}

export default ReactHookForm;
