import React, { useEffect, useState } from "react";

import {getBrands, getModels, getVersion} from "./Services/Redux/thunks"

import "./WebMotors.scss";

// images
import logoWebMotors from "./images/webmotorsLogo.png";
import iconCar from "./images/icons/iconCar.png";
import iconMotorcycle from "./images/icons/iconMotorcycle.png";
import iconCheck from "./images/icons/iconCheck.png";
import iconLocation from "./images/icons/iconLocation.jpg";

function WebMotors() {

  // STATES CAR BRANDS
  // assigns the car brand API value 
  const [markList , setMarkList] = useState(null)

  // stores the id of the chosen car brand
  const [markValue , setMarkValue] = useState(1);

  // --------------------------------------------
  // STATES PROJECT 
  // set a value to the selected field
  const [selectedItem , setSelectedItem] = useState(1)

  // set a value to the check field
  const [checkSelected , setCheckSelected] = useState("novos")

  // --------------------------------------------
  // STATES CAR MODELS
  // set a value to the model's car list.  
  const [modelsList , setModelsList] = useState(null);

  // stores the id of the chosen car models
  const [modelValue , setModelValue] = useState(1);

  // -----------------------------------------------
  // STATES CAR VERSION
  const [versionList , setVersionList] = useState(null);

  // -----------------------------------------------

  // FUNCTIONS FOR SEARCHING THE APIS

    // calls the car brand endpoint
    useEffect(()=>{
      getBrands().then(response => setMarkList(response.data))
    },[])

    // calls the car model endpoint depending on the chosen brand id
    useEffect(()=>{
      getModels(markValue).then(response => setModelsList(response.data))
    },[markValue])

    // calls the car version endpoint depending on the chosen model id
    useEffect(()=>{
      getVersion(modelValue).then(response =>  setVersionList(response.data))
    },[modelValue])

    // check if the list of tags is different from undefined and null
  if(markList === undefined || markList=== null)  return null;
  
  return (
    <div className="webmotors-landing">
      <div className="webmotors-landing__header">

      <div className="webmotors-landing__header__logo">
      <img src={logoWebMotors} alt="logoIcon"/>
      </div>

      <div className="webmotors-landing__header__options">

        <div className="webmotors-landing__header__options__autos">
        {/** if item selected, change border-bottom for groove and red border-bottom */}
          <div className={`webmotors-landing__header__options__autos__item 
          ${selectedItem === 1 && "webmotors-landing__header__options__autos__item--selected"}`}
          onClick={() => setSelectedItem(1)}
          >
              <div className="webmotors-landing__header__options__autos__item__text">
                <div>comprar</div>
                  <div>
                    <img src={iconCar} alt="carIcon" /> 
                    CARROS
                  </div>
              </div>
          </div>
        
        {/** if item selected, change border-bottom for groove and red border-bottom */}
          <div className={`webmotors-landing__header__options__autos__item 
          ${selectedItem === 2 && "webmotors-landing__header__options__autos__item--selected"}`}
          onClick={() => setSelectedItem(2)}
          >
           <div className="webmotors-landing__header__options__autos__item__text">
                <div>comprar</div>
                  <div>
                    <img src={iconMotorcycle} alt="motorcycleIcon" />
                    MOTOS
                  </div>
              </div>
          </div>

        </div>

      <div className="webmotors-landing__header__options__button">
        Vender meu carro
      </div>
      </div>

      </div>


    <div className="webmotors-landing__content">
      
      <div className="webmotors-landing__content__checks">
        <div className="webmotors-landing__content__checks__item" onClick={() => setCheckSelected("novos")}>
          <div className="webmotors-landing__content__checks__item__checkbox">
          {checkSelected === "novos" &&  <img src={iconCheck} alt="checkIcon" />}
          </div>
          Novos
        </div>

        <div className="webmotors-landing__content__checks__item" onClick={() => setCheckSelected("usados")}>
          <div className="webmotors-landing__content__checks__item__checkbox">
          {checkSelected === "usados" &&  <img src={iconCheck} alt="checkIcon" />}
          </div>
          Usados
        </div>
      </div>

      <div className="webmotors-landing__content__forms">

        <div className="webmotors-landing__content__forms__group">
          <div className="webmotors-landing__content__forms__locale">

            <div className="webmotors-landing__content__forms__locale__where">
              <img src={iconLocation} alt="locationIcon" />
              <span>Onde: </span>
              São Paulo - SP
            </div>

            <div className="webmotors-landing__content__forms__locale__radius">
              <div class="webmotors-landing__content__forms__locale__radius__options">
                   <select>    
                    <option>Raio: 40km</option>  
                    <option>Raio: 80km</option>  
                    <option>Raio: 100km</option>   
                    <option>Raio: 200km</option>    
                  </select>
              </div>
            </div>
          </div>

          <div className="webmotors-landing__content__forms__two">
            <div className="webmotors-landing__content__forms__select">
                  <select>    
                    <option>Ano Desejado</option>  
                    <option>2010</option>  
                    <option>2015</option>   
                    <option>2020</option>    
                  </select>
            </div>

            <div className="webmotors-landing__content__forms__select">
                  <select>    
                    <option>Faixa de Preço</option>  
                    <option>de 10.000 R$ à 20.000 R$</option>  
                    <option>de 30.000 R$ à 50.000 R$</option>   
                    <option>de 60.000 R$ à 100.000 R$</option>    
                  </select>
            </div>
          </div>
        </div>

        <div className="webmotors-landing__content__forms__group">
        <div className="webmotors-landing__content__forms__two">
            <div className="webmotors-landing__content__forms__select">
                  <select onChange={(event)=> setMarkValue(event.target.value)}>    
                    <option>Marcas: Todas</option>  
                {/* maps the list received from the API to print the values brands ​​in the field */}
                {markList.map((mark)=>
                    <option value={mark.ID} >{mark.Name}</option>
                )}    
                  </select>
            </div>

            <div className="webmotors-landing__content__forms__select">
                  <select onChange={(event)=>  setModelValue(event.target.value)}>    
                    <option>Modelo: Todos</option> 
                {/* maps the list received from the API to print the values models ​​in the field 
                  * check if modelslist is different from undefined or null 
                */}
                {(modelsList !== undefined || modelsList !== null) &&
                modelsList.map((model)=> 
                <option value={model.ID} >{model.Name}</option>
                )}             
                  </select>
            </div>
          </div>

          <div className="webmotors-landing__content__forms__select">
          <select>    
                    <option>Versão</option>  
                {/* if the versionList is different from undefined or null, 
                the list of car versions depending on the model will print */}
                {(versionList !== undefined || versionList !== null) &&
                versionList.map((version)=> 
                <option>{version.Name}</option>
                )}    
                  </select>
            </div>
        </div>
 
      </div>

      <div className="webmotors-landing__content__bottom">
        <div className="webmotors-landing__content__bottom__search">
          {"> Busca Avançada"}
        </div >
        <div className="webmotors-landing__content__bottom__group">
        <div className="webmotors-landing__content__bottom__group__clear-filters">
          Limpar filtros
        </div>
        <div className="webmotors-landing__content__bottom__group__button">
          VER OFERTAS
        </div>
        </div>
      </div>
    </div>

    <div>
    
    </div>
     
    </div>
  );
}

export default WebMotors;