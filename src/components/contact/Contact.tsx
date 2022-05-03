import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option--icon' />
            <h4>Email</h4>
            <h5>Mullin.ConnorJohn@gmail.com</h5>
            <a href='mailto:Mullin.ConnorJohn@gmail.com'>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiFillLinkedin className='contact__option--icon' />
            <h4>LinkedIn</h4>
            <h5>ConnorJMullin</h5>
            <a href='https://www.linkedin.com/in/connorjmullin/'>Send a message</a>
          </article>
        </div>
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' />
          <input type='text' name='email' placeholder='Your Email Address' />
          <textarea rows={7} name='message' placeholder='Your Message' />
          <button type='submit' className="btn btn-primary">Submit</button>
        </form>
      </div>

    </section>
  )
}

export default Contact;