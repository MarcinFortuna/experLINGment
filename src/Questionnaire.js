import React from 'react';
import './App.css';

const Questionnaire = props => {

    let nameInput = React.createRef();
    let ageInput = React.createRef();
    let provinceInput = React.createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            name: nameInput.current.value,
            age: ageInput.current.value,
            province: provinceInput.current.value
        }
        props.addUserData(data);
        props.moveToNextStage();
    }

    return (<div id="questionnaire"><p>Proszę o wypełnienie krótkiej ankiety:</p><form onSubmit={handleSubmit}>
        <label>
            Imię:
      <input type="text" name="name" ref={nameInput} />
        </label>
        <label>Wiek: <input type="number" name="age" ref={ageInput} /></label>
        <label>Województwo: <select type="text" name="province" ref={provinceInput}>
            <option value="" selected disabled hidden>---Wybierz---</option>
            <option value="dolnośląskie	">dolnośląskie</option>
            <option value="kujawsko-pomorskie">kujawsko-pomorskie</option>
            <option value="lubelskie">lubelskie</option>
            <option value="lubuskie">lubuskie</option>
            <option value="łódzkie">łódzkie</option>
            <option value="małopolskie">małopolskie</option>
            <option value="mazowieckie">mazowieckie</option>
            <option value="opolskie	">opolskie</option>
            <option value="podkarpackie">podkarpackie</option>
            <option value="podlaskie">podlaskie</option>
            <option value="pomorskie">pomorskie</option>
            <option value="śląskie">śląskie</option>
            <option value="świętokrzyskie">świętokrzyskie</option>
            <option value="warmińsko-mazurskie">warmińsko-mazurskie</option>
            <option value="wielkopolskie">wielkopolskie</option>
            <option value="zachodniopomorskie">zachodniopomorskie</option>
        </select>
        </label>
        <input type="submit" value="Rozpocznij eksperyment!" />
    </form></div>);


}

export default Questionnaire;