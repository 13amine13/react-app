import React, { useState } from "react";
import styles from "../Styles/register.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MyInput from "../components/inputLabel";

function Register() {
  /*
    <div className={styles.formGroup}>
           
         

      <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">
              Mot de passe:
            </label>
            <input
              className={styles.input}
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="ConfirmedPassword">
              Confirmer le mot de passe :
            </label>
            <input
              className={styles.input}
              type="password"
              id="ConfirmedPassword"
              name="ConfirmedPassword"
              value={ConfirmedPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
               
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="dateNaissance">Saisir la date de naissance :</label>
        <input className={styles.input} type="date" id="dateNaissance" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
      </div>
    </div>
  */

  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    phone: "",
    adresse: "",
    password: "",
    sexe: "",
    dateNaissance: "",
  });
  const [ConfirmedPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.password !== ConfirmedPassword) {
      setError("Passwords do not match!");
      return;
    }
    if (formData.password.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères!");
      return;
    }
    axios
      .post("http://localhost:8080/api/Auth/register", formData)
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
          dateNaissance: "",
        });
        setConfirmPassword("");
      })
      .catch((err) => {
        console.log(err);
        setError("An error occurred during registration.");
      });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const inputs = [
    {
      type: "text",
      value: formData.prenom,
      onchange: handleChange,
      label: "Prenom :",
      id: "prenom",
    },
    {
      type: "text",
      value: formData.nom,
      onchange: handleChange,
      label: "Nom :",
      id: "nom",
    },
    {
      type: "email",
      value: formData.email,
      onchange: handleChange,
      label: "Email : ",
      id: "email",
    },
    {
      type: "text",
      value: formData.phone,
      onchange: handleChange,
      label: "Téléphone : ",
      id: "phone",
    },
    {
      type: "text",
      value: formData.adresse,
      onchange: handleChange,
      label: "Adresse :",
      id: "adresse",
    },
    {
      type: "date",
      value: formData.dateNaissance,
      onchange: handleChange,
      label: "DateNaissance ",
      id: "dateNaissance",
    },
    {
      type: "password",
      value: formData.password,
      onchange: handleChange,
      label: "Mot de passe",
      id: "password",
    },
    {
      type: "password",
      value: ConfirmedPassword,
      onchange: (e) => {
        setConfirmPassword(e.target.value);
      },
      label: "Confirmez mot de pass",
      id: "confirmer",
    },
  ];

  return (
    <div className={styles.signup}>
      <h2 className={styles.h2}>Inscription</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          {inputs.map((input) => (
            <div className={styles.formGroup} key={input.id}>
              <label className={styles.label} htmlFor={input.id}>
                {input.label}:
              </label>
              <input
                className={styles.input}
                type={input.type}
                id={input.id}
                name={input.id}
                value={input.value}
                onChange={input.onchange}
              />
            </div>
          ))}
        </div>
        <div className={styles.genderField}>
          <label className={styles.label} htmlFor="male">Homme</label>
          <input className={styles.input}
            type="radio"
            id="male"
            name="sexe"
            value="h"
            onChange={handleChange}
          />
          <label className={styles.label} htmlFor="female">Femme</label>
          <input
          className={styles.input}
            type="radio"
            id="female"
            name="sexe"
            value="f"
            onChange={handleChange}
          />
        </div>
        <span className={styles.errorMessage} style={{ color: "red" }}>
          {error}
        </span>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
        <button
          type="button"
          onClick={handleGoBack}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          Come Back
        </button>
      </form>
    </div>
  );
  
}

export default Register;
