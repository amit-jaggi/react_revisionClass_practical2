import React, {useState} from 'react';
import Display from './Display';

const Form = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [salary, setSalary] = useState('')
    const [toggle, setToggle] = useState(true)

    const submitForm = e => {
        e.preventDefault();
        setData([...data, {name, age, salary}]);
        setName('');
        setAge('');
        setSalary('');
        setToggle(!toggle);
    }

    const goBack = () => {
        setToggle(true);
    }

    return (
        <>
            {
                toggle ?
                <form onSubmit={submitForm}>
                    <label>Name: </label>
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
                    <br />

                    <label>Age: </label>
                    <input type="number" name="age" value={age} onChange={e => setAge(e.target.value)} />
                    <br />

                    <label>Salary: </label>
                    <input type="number" name="salary" value={salary} onChange={e => setSalary(e.target.value)} />
                    <br />

                    <input type="submit" />
                </form>  :
                <Display displayData={data} backBtn={goBack}/>
            }
        </>
    )
}

export default Form;