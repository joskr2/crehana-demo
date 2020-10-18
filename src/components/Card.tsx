import React, { useState } from "react";

interface Props {
  svg: string;
  name: string;
  alphaCode: string;
  capital: string;
  currencyName: string;
  currencySymbol: string;
  area: string;
  gini: string;
  peopleDensidity: string;
  naiveName: string;
  cod: string;
  numberOfHabitants: string;
}

const Card: React.FC<Props> = ({
  svg,
  name,
  alphaCode,
  capital,
  currencyName,
  currencySymbol,
  area,
  gini,
  peopleDensidity,
  naiveName,
  cod,
  numberOfHabitants,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={svg} alt="country_flag" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          <strong>Código: </strong> {alphaCode}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Capital: </strong> {capital}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Moneda: </strong> {currencyName}
        </p>
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-auto"
          type="button"
          style={{ transition: "all .15s ease" }}
          onClick={() => setShowModal(true)}
        >
          Ver mas
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Detalles del pais
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <p className="text-gray-700 text-base">
                      <strong>Nombre: </strong> {name}
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Código: </strong> {cod}
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Capital: </strong> {capital}
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Moneda `(${currencySymbol} )`: </strong>{" "}
                      {currencyName}
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Área: </strong> {area}
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Gini: </strong> {gini}
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Densidad Poblacional: </strong> {peopleDensidity}
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Nombre Nativo: </strong> {naiveName}
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Población: </strong> {numberOfHabitants}
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => setShowModal(false)}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
