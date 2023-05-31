import React, { useState } from 'react';
import '../Styles/register.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";




function Register() {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    phone: "",
    adresse: "",
    password: "",
    sexe: "",
  });
  const [ConfirmedPassword , setConfirmPassword ] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
            return;
    }
    //http://localhost:8080/api/Auth/register
    axios.post("http://localhost:8080/register", formData)  
      .then((res) => {
        console.log(res.data);
        // Reset form fields
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          phone: "",
          adresse: "",
          password: "",
          sexe: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setError('An error occurred during registration.');
    });
  };
  // axios.get("http://localhost:8080/login") ;

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="signup">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="prenom">Prénom :</label>
        <input type="text" id="prenom" name="prenom" value={formData.firstName} onChange={handleChange} />

        <label htmlFor="nom">Nom :</label>
        <input type="text" id="nom" name="nom" value={formData.lastName} onChange={handleChange} />

        <label htmlFor="email">Email :</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

        <label htmlFor="phone">Téléphone :</label>
        <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />

        <label htmlFor="adresse">Adresse :</label>
        <input type="text" id="adresse" name="adresse" value={formData.address} onChange={handleChange} />

        <label htmlFor="password">Mot de passe :</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />

        {/* <label htmlFor="confirmPassword">Confirmez votre mot de passe :</label> */}
        {/* <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />   */}
        {/* { {formData.confirmPassword !== formData.password && ( */}
           {/* <p className="error_message ">Passwords do not match!</p> */}
      
        <div className="gender-field">
          <label htmlFor="male">Homme</label>
          <input type="radio" id="male" name="sexe" value="h" onChange={handleChange} />

          <label htmlFor="female">Femme</label>
          <input type="radio" id="female" name="sexe" value="f" onChange={handleChange} />
        </div>

        <button type="submit">Submit</button>
        <button type="button" onClick={handleGoBack} style={{ backgroundColor: 'blue', color: 'white' }}>Come Back</button>

      </form>
    </div>
  );
}

export default Register;