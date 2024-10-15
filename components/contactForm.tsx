import React, { useState,useRef} from 'react';
import '../styles/App.scss';
import emailjs from '@emailjs/browser';

interface contactFormProps {
  infos: {
    form: string[],
  };
  lang: string
}
const ContactForm: React.FC<contactFormProps> = ({infos, lang}) => {

  // EN OU FR pour messages erreurs
	const isEnglish = lang
	const yesmessage = ['See you soon ! 🌟','Au plaisir de vous rencontrer ! 🌟'];
	const nomessage = ['Please, try again soon :)','Veuillez rééssayer ultérieurement :)'];
	const [emailData, setEmailData] = useState({
		prenom: '',
		email: '',
		message: '',
	});
	const [message, setMessage] = useState('');
	const [submitting, setSubmitting] = useState(false);
	const [question, setQuestion] = useState('');
	const [acceptTerms, setAcceptTerms] = useState(false); // Ajoutez l'état pour la case à cocher

// Extraire l'identifiant de l'URL
const id = location.pathname.split('/').pop();
const form = useRef();
const sendEmail = (e) => {
	e.preventDefault();
	emailjs
		.sendForm('service_ivm0jcp', 'template_9e5o1we', form.current, {
			publicKey: 'B1zXmJt5Z5YABJKhe',
		})
		.then(
			() => {
				console.log('SUCCESS!');
				setMessage(isEnglish=='EN' ? yesmessage[0] : yesmessage[1]);
			},
			(error) => {
				console.log('FAILED...', error.text);
				setMessage(isEnglish=='EN' ? nomessage[0] : nomessage[1]);
			},
		);
};
//modifier form
const handleInputChange = (e) => {
	setEmailData({ ...emailData, [e.target.id]: e.target.value });
};
// question c - handlechange
const handleChange = (e) => {
  let valueC = '';
  valueC = e;
  setQuestion(valueC);
  // Appeler la fonction pour gérer le changement de la question
  handleSubmitQuestion(valueC);
};
// question c - validation form
const handleSubmitQuestion = (props) => {
  if (props !== '' && acceptTerms) {
  console.log('See you in hell,bitch');
  window.location.href = 'https://www.bible.com/fr/bible/63/MAT.13.24-48.BFC';
  } else {
  sendEmail(props);
  }
  };

return (
<>
<form ref={form} onSubmit={sendEmail}>
	<div className='flexCol'>
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
	<div className='flexCol'>
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
	<div className='flexCol'>
			<label htmlFor="message">{infos.form[5]}</label>
			<textarea
				type="message"
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
			<button
				className='btn-black'
				type="submit"
				disabled={submitting}>		
				{infos.form[6]}
			</button>
		<p>{message}</p>
		</div>
	</form>
</>
	);
};

export default ContactForm