import React, { useState,useRef,useEffect} from 'react';
import '../../styles/App.scss';
import '../../globals.css';

interface contactFormProps {
  infos: {
    form: string[],
  };
  lang: string
}
const ContactForm: React.FC<contactFormProps> = ({infos, lang}) => {

  // EN OU FR pour messages erreurs
	const isEnglish = lang
	const yesmessage = [ 'Thank you for your message !', "I'll come back to you really soon",'Reçu 5/5 !', 'Je reviens vers vous très prochainement'];
	const nomessage = ["Oh no.., it looks like it didn't work",'Please, try again soon :)',"Oops.. Ça n'a pas fonctionné",'Merci de réessayer dans un moment :)'];
	
	//case a cocher
	const [selectedServices, setSelectedServices] = useState([]);

	const [emailData, setEmailData] = useState({
		prenom: '',
		email: '',
		company:'',
		industry:'',
		message: '',
		services:selectedServices,
	});
	const [message, setMessage] = useState('');
	const [question, setQuestion] = useState('');
	const [acceptTerms, setAcceptTerms] = useState(false); // Ajoutez l'état pour la case à cocher

// Extraire l'identifiant de l'URL
const form = useRef();
const sendEmail = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailData),
    });
    if (response.ok) {
      console.log('Email envoyé avec succès');
      setMessage(isEnglish === 'EN' ? `${yesmessage[0], yesmessage[1]}` : `${yesmessage[2], yesmessage[3]}`);
  }else {
      throw new Error('Erreur lors de l\'envoi de l\'email');
    }
  } catch (error) {
    console.error('Échec de l\'envoi :', error);
    setMessage(isEnglish === 'EN' ? `${nomessage[0], nomessage[1]}` : `${nomessage[2], nomessage[3]}`);
  }
};
const handleInputChange = (e) => {
	setEmailData({ ...emailData, [e.target.id]: e.target.value });
};
// checkboxes
const handleCheckboxChange = (event) => {
	const { value, checked } = event.target;
	if (checked) {
		setSelectedServices((prev) => [...prev, value]);
	} else {
		setSelectedServices((prev) => prev.filter((service) => service !== value));
	}
};
// question c - handlechange
const handleChange = (e) => {
  let valueC = '';
  valueC = e;
  setQuestion(valueC);
	setAcceptTerms(false);
  // Appeler la fonction pour gérer le changement de la question
  handleSubmitQuestion(valueC);
};
// question c - validation form
const handleSubmitQuestion = (props) => {
  if ( typeof props == 'string' && props!=='' && acceptTerms) {
  console.log('See you in hell,bitch');
  window.location.href = 'https://www.bible.com/fr/bible/63/MAT.13.24-48.BFC';
  } else {
  sendEmail(props);
  }
  };
	useEffect(() => {
    setEmailData({ ...emailData, services: selectedServices });
  }, [selectedServices]);

return (
<>
<form ref={form} onSubmit={sendEmail}>
	<div className='flex-wrap'>
		<label htmlFor="prenom">{infos.form[3]}</label>
		<input
			type='text'
			id="prenom"
			name='user_name'
			value={emailData.prenom}
			onChange={handleInputChange}
			required
		/>
	</div>
	<div className='flex-wrap'>
		<label htmlFor="email">{infos.form[4]}</label>
		<input
			type='email'
			id="email"
			name='user_email'
			value={emailData.email}
			onChange={handleInputChange}
			required
		/>
	</div>
	<div className='flex-wrap'>
			<label htmlFor="company">{infos.form[5]}</label>
			<input
				id="company"
				name='company'
				value={emailData.company}
				onChange={handleInputChange}
				required
			/>
	</div>
	<div className='flex-wrap'>
			<label htmlFor="industry">{infos.form[6]}</label>
			<input
				id="industry"
				name='industry'
				value={emailData.industry}
				onChange={handleInputChange}
				required
			/>
	</div>
	{/* TYPES DE PROJETS  */}
	<div className='checkbox-group flex-wrap'>
		<label>{infos.form[7]}</label>
		<div style={{display:'flex', gap:'2rem', justifyContent:'center'}}>
			<label>
			<input
				type="checkbox"
				name="services"
				value="logo"
				onChange={handleCheckboxChange} // Fonction pour capturer les changements
			/>
			Logo
		</label>
		<label>
			<input
				type="checkbox"
				name="services"
				value="site internet"
				onChange={handleCheckboxChange}
			/>
			{infos.form[8]}
		</label>
		<label>
			<input
				type="checkbox"
				name="services"
				value="identité visuelle"
				onChange={handleCheckboxChange}
			/>
			{infos.form[9]}
		</label>
		<label>
			<input
				type="checkbox"
				name="services"
				value="autre"
				onChange={handleCheckboxChange}
			/>
			{infos.form[10]}
		</label>

		</div>

	</div>

	<div className='flex-wrap' style={{gap:'2.5rem'}}>
			<label htmlFor="message">{infos.form[11]}</label>
			<textarea
				id="message"
				name='message'
				value={emailData.message}
				onChange={handleInputChange}
				required
			/>
	</div>
  <div className='c'>
    <label htmlFor="question">Do you like chocolate ?</label>
		<input type="text" id="question" name="question" value={question} onChange={(e)=>handleChange(e)}/>
  </div>       
	


	<div className='flexForm'>
					<div
						className='btn-transp-dark'
						onClick={sendEmail} // Handle click to trigger form submission
						role="button" // Optional: Make it clear that this is an interactive element
						tabIndex={0} // Optional: Make it focusable for accessibility
					>
						<div>
						<svg
							className="icon-transp"	
							viewBox="0 0 16 19"
							xmlns="http://www.w3.org/2000/svg"
							aria-label='Arrow Icon'
						>
						<path
							d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
							className="fill-white group-hover:fill-white"
						></path>
						</svg>
									{infos.form[13]}
						</div>  
					</div>
					<p>{message}</p>


	</div>
        
	</form>
</>
	);
};

export default ContactForm