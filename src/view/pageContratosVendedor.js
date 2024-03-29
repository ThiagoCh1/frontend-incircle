import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import  navHComponent from './navbarhori';
import  navVendaComponent from './navbarVendedor';
import contratosv from './contratosV';


export default function pageContratosVendedor(){
    return (
      <div className="g-sidenav-show   bg-gray-100">
        <div id="gradiente" className="min-height-300 bg-primary position-absolute w-100" ></div>
        {navVendaComponent()}
        <main class="main-content position-relative border-radius-lg ">
            {navHComponent()}
            <div class="container-fluid py-4">
                <div class="row index-ultimos-anuncios">
                    {contratosv()}
                </div>

            </div>
        </main>


        


      </div>
    );
  };


