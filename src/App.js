import React from 'react';
import './App.css';
import Icecream from './Components/Icecream/Icecream';
import IcecreamIngredients from './Components/IcecreamIngredients/IcecreamIngredients';
import Layout from './Components/Layout/Layout';
import IcecreamBuilder from './Components/IcecreamBuilder/IcecreamBuilder';
function App() {
  return (
    <div>
      <Layout>
        <IcecreamBuilder/>
      </Layout>
    </div>
  );
}

export default App;
