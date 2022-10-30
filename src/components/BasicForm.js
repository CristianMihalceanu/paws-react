import useInput from "../hooks/use-input";
import "./BasicForm.css";

const isNotEmpty = (value) => value.trim() !== "";
const isdate = (value) => value.includes("@");

const BasicForm = (props) => {
  // props.pets and props.onPetChange

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput(isNotEmpty);
  const {
    value: hotelValue,
    isValid: hotelIsValid,
    hasError: hotelHasError,
    valueChangeHandler: hotelChangeHandler,
    inputBlurHandler: hotelBlurHandler,
    reset: resetHotel,
  } = useInput(isNotEmpty);
  const {
    value: cidateValue,
    isValid: cidateIsValid,
    hasError: cidateHasError,
    valueChangeHandler: cidateChangeHandler,
    inputBlurHandler: cidateBlurHandler,
    reset: resetciDate,
  } = useInput(isNotEmpty);
  const {
    value: codateValue,
    isValid: codateIsValid,
    hasError: codateHasError,
    valueChangeHandler: codateChangeHandler,
    inputBlurHandler: codateBlurHandler,
    reset: resetcoDate,
  } = useInput(isNotEmpty);
  const {
    value: nightsValue,
    isValid: nightsIsValid,
    hasError: nightsHasError,
    valueChangeHandler: nightsChangeHandler,
    inputBlurHandler: nightsBlurHandler,
    reset: resetNights,
  } = useInput(isNotEmpty);
  const {
    value: latValue,
    isValid: latIsValid,
    hasError: latHasError,
    valueChangeHandler: latChangeHandler,
    inputBlurHandler: latBlurHandler,
    reset: resetLat,
  } = useInput(isNotEmpty);
  const {
    value: longValue,
    isValid: longIsValid,
    hasError: longHasError,
    valueChangeHandler: longChangeHandler,
    inputBlurHandler: longBlurHandler,
    reset: resetLong,
  } = useInput(isNotEmpty);
  const {
    value: costValue,
    isValid: costIsValid,
    hasError: costHasError,
    valueChangeHandler: costChangeHandler,
    inputBlurHandler: costBlurHandler,
    reset: resetCost,
  } = useInput(isNotEmpty);
  const {
    value: guestsValue,
    isValid: guestsIsValid,
    hasError: guestsHasError,
    valueChangeHandler: guestsChangeHandler,
    inputBlurHandler: guestsBlurHandler,
    reset: resetGuests,
  } = useInput(isNotEmpty);
  const {
    value: roomValue,
    isValid: roomIsValid,
    hasError: roomHasError,
    valueChangeHandler: roomChangeHandler,
    inputBlurHandler: roomBlurHandler,
    reset: resetRoom,
  } = useInput(isNotEmpty);
  const {
    value: objectivesValue,
    isValid: objectivesIsValid,
    hasError: objectivesHasError,
    valueChangeHandler: objectivesChangeHandler,
    inputBlurHandler: objectivesBlurHandler,
    reset: resetObjectives,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    nameIsValid &&
    hotelIsValid &&
    cityIsValid &&
    cidateIsValid &&
    codateIsValid &&
    nightsIsValid &&
    latIsValid &&
    longIsValid &&
    costIsValid &&
    guestsIsValid &&
    roomIsValid &&
    objectivesIsValid
  ) {
    formIsValid = true;
  }

  const submitPetHandler = (event) => {
    const smth = fetch(
      "https://hack-adobe-default-rtdb.europe-west1.firebasedatabase.app/pets.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: nameValue,
          city: cityValue,
          hotel: hotelValue,
          cidate: cidateValue,
          codate: codateValue,
          nights: nightsValue,
          lat: latValue,
          long: longValue,
          cost: costValue,
          guests: guestsValue,
          room: roomValue,
          objectives: objectivesValue,
        }),
      }
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const newPet = {
      name: nameValue,
      city: cityValue,
      hotel: hotelValue,
      cidate: cidateValue,
      codate: codateValue,
      nights: nightsValue,
      lat: latValue,
      long: longValue,
      cost: costValue,
      guests: guestsValue,
      room: roomValue,
      objectives: objectivesValue,
    };
    props.onPetChange((prevPets) => {
      return prevPets.concat(newPet);
    });

    submitPetHandler();

    console.log("Submitted!");
    console.log(nameValue, cityValue, cidateValue);

    resetName();
    resetCity();
    resetHotel();
    resetciDate();
    resetcoDate();
    resetNights();

    resetLat();
    resetLong();
    resetCost();

    resetGuests();
    resetRoom();
    resetObjectives();
  };

  const nameClasses = nameHasError ? "form-control invalid" : "form-control";
  const cityClasses = cityHasError ? "form-control invalid" : "form-control";
  const hotelClasses = hotelHasError ? "form-control invalid" : "form-control";
  const cidateClasses = cidateHasError
    ? "form-control invalid"
    : "form-control";
  const codateClasses = codateHasError
    ? "form-control invalid"
    : "form-control";

  const nightsClasses = nightsHasError
    ? "form-control invalid"
    : "form-control";
  const latClasses = latHasError ? "form-control invalid" : "form-control";
  const longClasses = longHasError ? "form-control invalid" : "form-control";
  const costClasses = costHasError ? "form-control invalid" : "form-control";
  const guestsClasses = guestsHasError
    ? "form-control invalid"
    : "form-control";
  const roomClasses = roomHasError ? "form-control invalid" : "form-control";
  const objectivesClasses = objectivesHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="inputs-and-button">
        <div className="control-group">
          <div className={nameClasses}>
            <label htmlFor="name">Proponent's Name</label>
            <input
              type="text"
              id="name"
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameHasError && (
              <p className="error-text">Please enter a valid name.</p>
            )}
          </div>
          <div className={cityClasses}>
            <label htmlFor="species1">City</label>
            <input
              type="text"
              id="species1"
              value={cityValue}
              onChange={cityChangeHandler}
              onBlur={cityBlurHandler}
            />
            {cityHasError && (
              <p className="error-text">Please enter a valid city.</p>
            )}
          </div>
          <div className={hotelClasses}>
            <label htmlFor="species1">Hotel Name</label>
            <input
              type="text"
              id="species1"
              value={hotelValue}
              onChange={hotelChangeHandler}
              onBlur={hotelBlurHandler}
            />
            {hotelHasError && (
              <p className="error-text">Please enter a valid hotel.</p>
            )}
          </div>

          <div className={cidateClasses}>
            <label htmlFor="date">Check-in date</label>
            <input
              type="text"
              id="date"
              value={cidateValue}
              onChange={cidateChangeHandler}
              onBlur={cidateBlurHandler}
            />
            {cidateHasError && (
              <p className="error-text">Please enter a valid date</p>
            )}
          </div>
          <div className={codateClasses}>
            <label htmlFor="date">Check-out date</label>
            <input
              type="text"
              id="date"
              value={codateValue}
              onChange={codateChangeHandler}
              onBlur={codateBlurHandler}
            />
            {codateHasError && (
              <p className="error-text">Please enter a valid date</p>
            )}
          </div>

          <div className={nightsClasses}>
            <label htmlFor="date">Nr. of Nights</label>
            <input
              type="text"
              id="nights"
              value={nightsValue}
              onChange={nightsChangeHandler}
              onBlur={nightsBlurHandler}
            />
            {nightsHasError && (
              <p className="error-text">Please enter a valid nights nr</p>
            )}
          </div>
          <div className={latClasses}>
            <label htmlFor="latitude">Hotel Latitude</label>
            <input
              type="text"
              id="latitude"
              value={latValue}
              onChange={latChangeHandler}
              onBlur={latBlurHandler}
            />
            {latHasError && (
              <p className="error-text">Please enter a valid latitude.</p>
            )}
          </div>
          <div className={longClasses}>
            <label htmlFor="longitude">Hotel Longitude</label>
            <input
              type="text"
              id="longitude"
              value={longValue}
              onChange={longChangeHandler}
              onBlur={longBlurHandler}
            />
            {longHasError && (
              <p className="error-text">Please enter a valid longitude.</p>
            )}
          </div>
          <div className={costClasses}>
            <label htmlFor="cost">Estimated Cost</label>
            <input
              type="number"
              id="cost"
              value={costValue}
              onChange={costChangeHandler}
              onBlur={costBlurHandler}
            />
            {costHasError && (
              <p className="error-text">Please enter a valid cost.</p>
            )}
          </div>
          <div className={guestsClasses}>
            <label htmlFor="guests">Nr. of guests </label>
            <input
              type="text"
              id="guests"
              value={guestsValue}
              onChange={guestsChangeHandler}
              onBlur={guestsBlurHandler}
            />
            {guestsHasError && (
              <p className="error-text">Please enter a valid number.</p>
            )}
          </div>
          <div className={roomClasses}>
            <label htmlFor="room">Room type</label>
            <input
              type="text"
              id="room"
              value={roomValue}
              onChange={roomChangeHandler}
              onBlur={roomBlurHandler}
            />
            {roomHasError && (
              <p className="error-text">Please enter a valid type.</p>
            )}
          </div>
          <div className={objectivesClasses}>
            <label htmlFor="objectives">Objectives</label>
            <input
              type="text"
              id="objectives"
              value={objectivesValue}
              onChange={objectivesChangeHandler}
              onBlur={objectivesBlurHandler}
            />
            {objectivesHasError && (
              <p className="error-text">Please enter a valid email address.</p>
            )}
          </div>
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default BasicForm;
