 import './Country.css'
const Country = (country) => {
    const {name} =  country;
    return (
        <div className='country'>
            <h2>Name:{name.common}</h2>
        </div>
    );
};

export default Country;