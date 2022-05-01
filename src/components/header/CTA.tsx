const resumeURL = 'https://resume.creddle.io/resume/8dmrd5x7elp';

const CTA = () => {
  return (
    <div className='cta'>
      <a className='btn' href={resumeURL}>View Resume</a>
      <a className='btn btn-primary' href='#contact'>Let's Talk</a>
    </div>
  )
}

export default CTA