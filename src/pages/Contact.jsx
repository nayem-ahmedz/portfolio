import { useEffect, useState } from 'react';
import Services from '../comps/services/Services';
import Skills from '../comps/skills/Skills';

function Contact(){
    useEffect(() => {document.title = 'Contact | Nayem Ahmed'}, []);
    const [error, setError] = useState('Under Maintenance!');
    const [submitted, setSubmitted] = useState(false);
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleInputs = (e) => {
        const {name, value} = e.target;
        setInputs((prev) => ({
            ...prev, [name] : value
        }));
    }
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!inputs.name || !inputs.email || !inputs.message){
            setError(
                !inputs.name ? 'Name is required!' :
                !inputs.email ? 'Email is required!' :
                'Did you forget to write a message?'
            );
            return;
        }
        setError('');
        setSubmitted(true);
        //const formData = new URLSearchParams(inputs).toString();
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'Contact-Form', ...inputs }),
          })
            .then(() => setSubmitted(true))
            .catch(() => setError('Form submission failed! Please try again'));
    }
    return(
        <>
            <section className='contact-section'>
                <div className='contact-form-field'>
                    <h2 className='section-title'>Contact Me</h2>
                    {
                        submitted ? (
                            <h3 className='success-message'>Thank you for your message. <br /> I will get back to you soon</h3>
                        ) : (
                            <form name='Contact-Form' method='POST' className='contact-form' onSubmit={(e) => handleSubmit(e)} data-netlify='true' data-netlify-recaptcha='true'>
                                <input type='hidden' name='form-name' value='Contact-Form' />

                                <input type='text' id='name' name='name' value={inputs.name} onChange={(e) => handleInputs(e)} placeholder='Your Name' />

                                <input type='email' id='email' name='email' value={inputs.email} onChange={(e) => handleInputs(e)} placeholder='Your Email' />

                                <textarea id='message' name='message' value={inputs.message} onChange={(e) => handleInputs(e)} placeholder='How can I help you?'></textarea>

                                <div data-netlify-recaptcha='true' className='captcha-div'></div>
                                {
                                    error ? <h4 id='error-message'> { error } </h4> : <h4 className='invisible-text'>invisible</h4>
                                }
                                <input type='submit' value='Send' id='send-btn' disabled/>
                                <p className='error-message-new'>You can contact through <a href='mailto:nayemahmedz@proton.me'>Email</a> </p>
                            </form>
                        )
                    }
                </div>
            </section>
            <Services />
            <Skills />
        </>
    );
}

export default Contact;