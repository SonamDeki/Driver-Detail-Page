import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main>
       <div id="header">
        <br></br>
    
       <a href="*"><Image alt="" src="/back icon.png" height={50} width={50}/></a>
       <h1> Vehicle detail</h1>
       </div>
       <div id= "EnteringVehicle number">
       <form>
        <label>Enter your vehicle number</label>
        <input type="text" name="name" value=""></input><br></br>
       
       </form>
       </div>

       <div id = "Vehicle type">
       <Image alt="" src="/bike.png" height={50} width={50}/>
       <label>Two wheeler</label>Two wheeler
       <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>


       <Image alt="" src="/four wheeler.png" height={50} width={50}/>
       <label>Four wheeler</label>Two wheeler
       <input type="checkbox" id="vehicle2" name="vehicle2" value="Bike"></input>
       </div>

       <div id="button">
       <button type="button">Add</button> 

       </div>

       <div id = "Link">
        <link href="/paymentConfirmation"/>

          Pay paymentConfirmation

        
       </div>
      </main>

      
    </>
  );
};

export default Home;