import React, { useState } from 'react';
import styles from '../Styles/register.module.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

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
    dateNaissance:""
  });
  const [ConfirmedPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== ConfirmedPassword) {
      setError('Passwords do not match!');
      return;
    }
    if (formData.password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères!');
      return;
    }
    axios.post("http://localhost:8080/api/Auth/register", formData)
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
          dateNaissance:"",
        });
        setConfirmPassword("");

      })
      .catch((err) => {
        console.log(err);
        setError('An error occurred during registration.');
      });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.signup}>
  <h2>Inscription</h2>
  <form onSubmit={handleSubmit}>
    <div className={styles.formRow}>
      <div className={styles.formGroup}>
        <label htmlFor="prenom">Prénom:</label>
        <input type="text" id="prenom" name="prenom" value={formData.firstName} onChange={handleChange} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="nom">Nom:</label>
        <input type="text" id="nom" name="nom" value={formData.lastName} onChange={handleChange} />
      </div>
    </div>

    <div className={styles.formRow}>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="phone">Téléphone:</label>
        <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
      </div>
    </div>

    <div className={styles.formRow}>
      <div className={styles.formGroup}>
        <label htmlFor="adresse">Adresse:</label>
        <input type="text" id="adresse" name="adresse" value={formData.adresse} onChange={handleChange} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="dateNaissance">Saisir la date de naissance :</label>
        <input type="date" id="dateNaissance" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
      </div>
    </div>
    <div className={styles.formRow}>
      <div className={styles.formGroup}>
        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="ConfirmedPassword">Confirmer le mot de passe :</label>
        <input type="password" id="ConfirmedPassword" name="ConfirmedPassword" value={ConfirmedPassword} onChange={(e) => {
          setConfirmPassword(e.target.value);
        }} />
      </div>
    </div>

    <div className={styles.genderField}>
      <label htmlFor="male">Homme</label>
      <input type="radio" id="male" name="sexe" value="h" onChange={handleChange} />

      <label htmlFor="female">Femme</label>
      <input type="radio" id="female" name="sexe" value="f" onChange={handleChange} />
    </div>
    <span className={styles.errorMessage} style={{ color: "red" }}>{error}</span>
    <button type="submit" className={styles.submitButton}>Submit</button>
    <button type="button" onClick={handleGoBack} style={{ backgroundColor: 'blue', color: 'white' }}>Come Back</button>

  </form>
</div>
 );
  }
  
  export default Register; 
