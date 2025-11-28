import { type FormEvent, useRef } from 'react'

export default function Form() {

    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const dobRef = useRef<HTMLInputElement>(null);
    const placeOfBirthRef = useRef<HTMLInputElement>(null);
    const nationalityRef = useRef<HTMLInputElement>(null);
    const passportNumberRef = useRef<HTMLInputElement>(null);
    const issueDateRef = useRef<HTMLInputElement>(null);
    const expiryDateRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    
    const person = {name: '', age: 0};

   const handleSubmit = (event: FormEvent) => {
        
        event.preventDefault();

        if(nameRef.current !== null){
        person.name = nameRef.current.value;    
        console.log("nameRef -->", nameRef.current.value);
        }

        if(ageRef.current !== null){
            person.age = parseInt(ageRef.current.value);
            console.log("ageRef -->", ageRef.current.value);
        }

        if(dobRef.current !== null){
            console.log("dobRef -->", dobRef.current.value);
        }

        if(placeOfBirthRef.current !== null){
            console.log("placeOfBirthRef -->", placeOfBirthRef.current.value);
        }

        if(nationalityRef.current !== null){
            console.log("nationalityRef -->", nationalityRef.current.value);
        }

        if(passportNumberRef.current !== null){
            console.log("passportNumberRef -->", passportNumberRef.current.value);
        }

        if(issueDateRef.current !== null){
            console.log("issueDateRef -->", issueDateRef.current.value);
        }

        if(expiryDateRef.current !== null){
            console.log("expiryDateRef -->", expiryDateRef.current.value);
        }

        if(addressRef.current !== null){
            console.log("addressRef -->", addressRef.current.value);
        }

        if(phoneRef.current !== null){
            console.log("phoneRef -->", phoneRef.current.value);
        }

        if(emailRef.current !== null){
            console.log("emailRef -->", emailRef.current.value);
        }
   } 

  return (
    <form onSubmit={handleSubmit}>

        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input ref={nameRef} id="name" type="text" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input ref={ageRef} id="age" type="number" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input ref={dobRef} id="dob" type="date" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="placeOfBirth" className="form-label">Place of Birth</label>
            <input ref={placeOfBirthRef} id="placeOfBirth" type="text" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="nationality" className="form-label">Nationality</label>
            <input ref={nationalityRef} id="nationality" type="text" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="passportNumber" className="form-label">Passport Number</label>
            <input ref={passportNumberRef} id="passportNumber" type="text" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="issueDate" className="form-label">Issue Date</label>
            <input ref={issueDateRef} id="issueDate" type="date" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
            <input ref={expiryDateRef} id="expiryDate" type="date" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input ref={addressRef} id="address" type="text" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input ref={phoneRef} id="phone" type="tel" className="form-control" />
        </div>

        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input ref={emailRef} id="email" type="email" className="form-control" />
        </div>

        <button className="btn btn-primary" type="submit">Submit</button>

    </form>
  )
}