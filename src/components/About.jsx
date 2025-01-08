import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./styles/about/header.css";
import "./styles/about/content.css";
import "./styles/about/responsive.css";

const About = () => {
  const navigate = useNavigate();

  return (
    
    <div className='apple'>
      <header className="header animate-fade-in">
        <h1>About</h1>
        <div className="controls">
          <button
            className="home-button"
            onClick={() => navigate('/')}
          >
            Home
          </button>
        </div>
      </header>

      <div className="contentt animate-slide-in-left">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
          obcaecati maiores itaque laudantium. Iste distinctio consequuntur
          ratione voluptatum id, magni a recusandae temporibus! Ipsam omnis non
          officia aut quasi eum, dolorem voluptatem quam repellendus est vitae
          commodi similique labore! Corporis, assumenda. Nobis nesciunt dolores
          vero commodi quibusdam dolorum eaque laborum illo rerum in eveniet ea
          hic omnis iste unde architecto, sapiente quidem obcaecati laboriosam
          assumenda deserunt deleniti! Expedita nihil vel ratione, eos
          praesentium autem, inventore voluptatem provident quasi totam
          adipisci quo doloribus obcaecati amet alias quis, suscipit animi
          assumenda! Possimus obcaecati perferendis iure ut maiores corporis
          aspernatur laboriosam veritatis inventore!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse obcaecati maiores itaque laudantium. Iste distinctio consequuntur
          ratione voluptatum id, magni a recusandae temporibus! Ipsam omnis non
          officia aut quasi eum, dolorem voluptatem quam repellendus est vitae
          commodi similique labore! Corporis, assumenda. Nobis nesciunt dolores
          vero commodi quibusdam dolorum eaque laborum illo rerum in eveniet ea
          hic omnis iste unde architecto, sapiente quidem obcaecati!
        </p>
        <h1>What Do We Do?</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse obcaecati maiores itaque laudantium. Iste distinctio consequuntur
          ratione voluptatum id, magni a recusandae temporibus! Ipsam omnis non
          officia aut quasi eum, dolorem voluptatem quam repellendus est vitae
          commodi similique labore! Corporis, assumenda. Nobis nesciunt dolores
          vero commodi quibusdam dolorum eaque laborum illo rerum in eveniet ea
          hic omnis iste unde architecto, sapiente quidem obcaecati!
        </p>
        <br />
      </div>

      <div className="box-container animate-slide-in-right">
        <div>
          <div
            className="box box1"
            style={{
              backgroundImage: "url(/images/ab1.jpg)",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="box box2"
            style={{
              backgroundImage: "url(/images/ab2.jpg)",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div>
          <div
            className="box box3"
            style={{
              backgroundImage: "url(/images/ab3.jpg)",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="box box4"
            style={{
              backgroundImage: "url(/images/ab4.jpg)",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default About;
