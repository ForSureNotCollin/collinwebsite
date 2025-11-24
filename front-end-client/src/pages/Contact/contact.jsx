import './contact.css' ; 

const ContactForm = () => { 
    const [formData , setFormData] = useState({ 
        name : '' , 
        email : '' , 
        message : '' ,
    }) ; 

    const handleChange = (e) => { 
        setFormData({...formData , [e.target.name] : e.target.value})
    } ; 

    const handleSubmit = (e) => { 
        e.preventDefault() ; 
        console.log('Form Submitted:' , formData) ; 
        alert("Thank you! We'll chat soon!") ; 
        setFormData({name : '' , email : '' , message : ''})
    } ; 
}


export default function contact() { 
    return (
        <main className = "contactPage">
            <header className="contactHeader">
                <h1>Contact Me</h1>
                <h3>Let's get in touch!</h3>
            </header>

            <form className = "contactForm" onSubmit = {handleSubmit}>
                <label> 
                    Name: 
                    <input  
                        type = "text" 
                        name = "name"
                        placeholder = "Your Name : First Last"
                        value = {formData.name}
                        onChange = {handleChange}
                        required
                    />
                </label>

                <label> 
                    Email: 
                    <input
                        type = "email"
                        name = "email"
                        placeholder = "youremail@example.com"
                        value = {formData.email}
                        onChange = {handleChange}
                        required
                    />
                </label>

                <label> 
                    Message:
                    <textarea 
                        name = "message"
                        placeholder = "Leave your message here..."
                        value = {formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>

                <button type = "submit"> Contact</button>
            </form>
        </main>
    ) ;
} 