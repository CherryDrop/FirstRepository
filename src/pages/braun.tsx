import React from "react";
import { Button, Card } from "@chakra-ui/react";

const PaginaBraun: React.FC = () => {
  return (
    <div className="PaginaInteira relative">
      <div className="CaixaComImagem relative h-[90vh]">
        <img
          className=" h-full w-full object-cover absolute"
          src="https://www.braunhousehold.com/medias/en-Home-Stage-braun-CareStyle-7-Pro-Def-Introducing-the-most-powerful-ironing-system-xs-v2.jpg?context=bWFzdGVyfHJvb3R8MjE1NzA5fGltYWdlL2pwZWd8aGUwL2gzZC8yNzc3Mjg1MTIyNDYwNi9lbl9Ib21lX1N0YWdlX2JyYXVuX0NhcmVTdHlsZS03LVByb19EZWZfSW50cm9kdWNpbmctdGhlLW1vc3QtcG93ZXJmdWwtaXJvbmluZy1zeXN0ZW1feHNfdjIuanBnfGQxZTc3MDNiYzAwOWE1ODY3ZmU5MDM2NTM3ZjAzNTU2MTA4ZmNhZWQwZjlmMWMzM2MwZGY3MTM0ZDM2NTVjZDM"
          alt="ImagemDeFundo"
        />
        <div className="Navigation bg-blue-500 h-[3rem] w-[100%] absolute text-white flex justify-around my-p-3 text-[2rem]">
          <span className=" absolute left-0">Braun</span>
          <span className="absolute right-14 text-[1.68rem]">P</span>
          <span className="absolute right-2 text-[1.68rem]">M</span>
        </div>
      </div>

      <div className="CaixaDoFerro flex items-center w-full absolute justify-center">
        <div className="bg-blue-500 h-[11rem] w-[25rem] rounded-lg shadow-lg p-2 text-green-400 mt-[-07rem]">
          <span className="New text-fuchsia-200 p-2 bg color bg-purple-600 rounded-lg">
            New
          </span>
          CareStyle 7 Pro
          <div className="text-fuchsia-200 text-lg text-center p-3">
            Introducing the new CareStyle <br />
            7 Pro – Braun's most powerful <br />
            ironing system
          </div>
          <div className="flex justify-end">
            <img
              src="https://www.braunhousehold.com/medias/en-Home-stage-flm-braun-carestyle-7-pro-bk-ergonomics-600x800.png?context=bWFzdGVyfHJvb3R8Mjk4MTM1fGltYWdlL3BuZ3xoMTAvaGQ3LzI3Njk5OTY5MzkyNjcwL2VuX0hvbWVfc3RhZ2VfZmxtX2JyYXVuX2NhcmVzdHlsZS03LXByby1ia19lcmdvbm9taWNzXzYwMHg4MDAucG5nfDdmNTZhZDNlZDUxYTcwZjEzM2JiNjU3NmU2ZDkyZTM5N2U0ODZjZTExYjI2NmRiMjFhNmY3NzEzODllZjNhY2Y"
              alt="ferro"
              className="absolute w-[5.20rem] h-auto mt-[-5rem] mr-4"
            />
          </div>
          <button className="Lear More text-fuchsia-200 bg-purple-600 rounded-lg p-1">
            Learn More
          </button>
        </div>
      </div>

      <div className="CixaDasFrutas text-center relative">
        <h1 className="text-[1.45rem] p-6 mt-[5rem]">
          Find the best Braun product for every need.
        </h1>
        <div className="flex justify-center items-center relative">
          <img
            src="https://i.ebayimg.com/images/g/Nw8AAOSwXxli9HOv/s-l500.jpg"
            alt="HandBlender"
            className="w-1/2 mx-auto"
          />
          <button className="text-fuchsia-200 bg-purple-600 px-2 py-1 rounded-lg text-l p-1 absolute top-0 right-9 mt-2 mr-9">
            Next
          </button>
        </div>
      </div>
      <div>
        <div className=" Ferro w-[500px] mx-auto flex flex-col items-center p-10 bg-white rounded-lg shadow-lg">
          <img
            className="w-[20rem] h-auto rounded-2xl"
            src="https://www.braunhousehold.com/medias/en-cp-prot-card-CareStyle-7-Pro-ergonomics-certified-iron-disclaimer-04-eng-1360x1296.jpg?context=bWFzdGVyfHJvb3R8MjUxMDgyfGltYWdlL2pwZWd8aDYwL2hjOS8yNzE4MDIzNzgxNTgzOC9lbl9jcC1wcm90X2NhcmRfQ2FyZVN0eWxlLTctUHJvX2VyZ29ub21pY3MtY2VydGlmaWVkLWlyb25fZGlzY2xhaW1lcl8wNF9lbmdfMTM2MHgxMjk2LmpwZ3wwMzdiMzU4YzQxMjVkOWYwZmIyNjk0Mjg5NTI0YjFlZTZmZmQ3NTA5NTI5MDFmMzkyYTVjODMzYjE0OTI0MDJi"
            alt="Imagem do Ferro"
          />
          <div className="py-4 text-sm text-gray-500 text-center">
            <p className="mb-2">Braun's new CareStyle 7 Pro</p>
            <h2 className="text-lg font-bold">
              Discover the world's first ergonomics certified iron*
            </h2>
            <button className="bg-purple-600 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded mt-4">
              Learn More
            </button>
          </div>
        </div>

        <div className="Parece um humidificador w-[500px] mx-auto flex flex-col items-center p-10 bg-white rounded-lg shadow-lg">
          <img
            className="w-[20rem] h-auto rounded-2xl"
            src="https://www.braunhousehold.com/medias/en-prot-card-MultiQuick-2-Finer-results-1080x1080.jpg?context=bWFzdGVyfHJvb3R8MTUzMTYwfGltYWdlL2pwZWd8aDA1L2g5ZC8zMjUyOTkwOTk0MDI1NC9lbl9wcm90X2NhcmRfTXVsdGlRdWljay0yX0ZpbmVyLXJlc3VsdHNfMTA4MHgxMDgwLmpwZ3xjMTAyMzllN2EwN2U3NjE3MmQ4MDZjMWNmYjI0Y2MzNWE3MmZhZGM3YjAzNTgxNTcxYWI4N2Q2MmViZmU3NWVi"
            alt="Imagem do Ferro"
          />
          <div className="py-4 text-sm text-gray-500 text-center">
            <p className="mb-2">Discover Braun's new MultiQuick 2</p>
            <h2 className="text-lg font-bold">Up to 2 times funer results*.</h2>
            <button className="bg-purple-600 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded mt-4">
              Learn More
            </button>
          </div>
        </div>

        <div className="Liquidificador w-[500px] mx-auto flex flex-col items-center p-10 bg-white rounded-lg shadow-lg">
          <img
            className="w-[20rem] h-auto rounded-2xl"
            src="https://www.braunhousehold.com/medias/en-home-prot-card-powerblend-9-JB9040-costumizable-textures-green-smoothie-1020x1020.jpeg?context=bWFzdGVyfHJvb3R8MjE2NjQzfGltYWdlL2pwZWd8aGQ3L2g4NC8xNjM4NDAzNjE3NTkwMi9lbl9ob21lX3Byb3RfY2FyZF9wb3dlcmJsZW5kLTlfSkI5MDQwX2Nvc3R1bWl6YWJsZS10ZXh0dXJlc19ncmVlbi1zbW9vdGhpZV8xMDIweDEwMjAuanBlZ3xkNjg4N2ZlNWY2NjIyZDAwMWU4ZDY4MWQyNDdkMjY4MWVjYjk2YWViZGE4NDM0ZTAxOGMzNmM5YzZiNDY4ZjU3"
            alt="Imagem do Ferro"
          />
          <div className="py-4 text-sm text-gray-500 text-center">
            <p className="mb-2">PowerBlend9</p>
            <h2 className="text-lg font-bold">
              Costumizable textures and high perfomace blending
            </h2>
            <button className="bg-purple-600 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded mt-4">
              Learn More
            </button>
          </div>
        </div>

        <div className="Ferrinho w-[500px] mx-auto flex flex-col items-center p-10 bg-white rounded-lg shadow-lg">
          <img
            className="w-[20rem] h-auto rounded-2xl"
            src="https://www.braunhousehold.com/medias/en-home-prot-card-texstyle-9-brauns-fastest-steam-iron-2-1080x1280.jpg?context=bWFzdGVyfHJvb3R8ODEyODl8aW1hZ2UvanBlZ3xoNmIvaDRhLzEyOTI2NDQxNjg1MDIyL2VuX2hvbWUtcHJvdF9jYXJkX3RleHN0eWxlLTlfYnJhdW5zLWZhc3Rlc3Qtc3RlYW0taXJvbl8yXzEwODB4MTI4MC5qcGd8YWJkZDM3MGM2NGIyNjdhYTk3ODI5M2FiN2ZkZjJiZTBhZjMwZWUwZTcyNmNiMWU4NDRhOWVmMjk2MTBjMzg3Zg"
            alt="Imagem do Ferro"
          />
          <div className="py-4 text-sm text-gray-500 text-center">
            <p className="mb-2">TexStyle 9</p>
            <h2 className="text-lg font-bold">Braun's fastest steam iron</h2>
            <button className="bg-purple-600 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded mt-4">
              Learn More
            </button>
          </div>
        </div>

        <h1 className="p-4">Latest articles.</h1>

        <CardDaComida src="https://www.braunhousehold.com/medias/en-home-artLink-card-food-start-the-day-your-way-def-640x640.jpg?context=bWFzdGVyfHJvb3R8NzU3OTN8aW1hZ2UvanBlZ3xoZDcvaDQzLzkzNTA4MjMxNDk1OTgvZW5faG9tZV9hcnRMaW5rX2NhcmRfZm9vZF9zdGFydC10aGUtZGF5LXlvdXItd2F5X2RlZl82NDB4NjQwLmpwZ3xkZjUwY2FmOGY1ZjNmZDNmZTcyODI0NWIyZjg5YjBhMDM5YTFiNGU5YjM4Y2E3NTk0MDFkMWQ3YzkyZDAwMTUx"></CardDaComida>
        <hr />
        <CardDaComida src="https://www.braunhousehold.com/medias/en-home-artLink-card-feel-good-guide-stay-fit-def-640x640.jpg?context=bWFzdGVyfHJvb3R8MzU1MjF8aW1hZ2UvanBlZ3xoY2MvaGM2LzkzNTEzNDc4OTYzNTAvZW5faG9tZV9hcnRMaW5rX2NhcmRfZmVlbC1nb29kLWd1aWRlX3N0YXktZml0X2RlZl82NDB4NjQwLmpwZ3w4OWIyYmJkZGVjNDkxYTVhYThmMmRhZGYzYzVmYWQwMmZlMmQ4YTkzMWIyMzVmMDZmNmM5NjhhZDJjYjFhZDgw"></CardDaComida>
        <hr />
        <CardDaComida src="https://www.braunhousehold.com/medias/en-home-artLink-card-baby-nutrition-homemade-food-def-640x640.jpg?context=bWFzdGVyfHJvb3R8MzMyNjN8aW1hZ2UvanBlZ3xoYmIvaGMzLzkzNTEzNDc5NjE4ODYvZW5faG9tZV9hcnRMaW5rX2NhcmRfYmFieS1udXRyaXRpb25faG9tZW1hZGUtZm9vZF9kZWZfNjQweDY0MC5qcGd8OGQ5Zjk0MTMyYWU4YWQ1MDMyMzhkMDY0YWQzZjZkNmRiNTk3MTkzYjQxMGY1NzBhOTQ5ODFmN2RkMWM5NDIyOA"></CardDaComida>
        <hr />
        <CardDaComida src="https://www.braunhousehold.com/medias/en-home-artLink-card-garment-care-master-organisation-def-1080x1080.jpg?context=bWFzdGVyfHJvb3R8ODE2MzR8aW1hZ2UvanBlZ3xoYjQvaDk1LzkzNTA4MzM0MDU5ODIvZW5faG9tZV9hcnRMaW5rX2NhcmRfZ2FybWVudC1jYXJlX21hc3Rlci1vcmdhbmlzYXRpb25fZGVmXzEwODB4MTA4MC5qcGd8MTA2OTRmMDkxZmE5MTU2YzM4N2E5NDE5OGQ2NDhmMmVkYjhjOTE2YjkyYTQzOWVmZmNhOWNjYmUzNDY5NjIxNA"></CardDaComida>
        <hr />

        <div className="h-[10rem]"></div>
      </div>
    </div>
  );
};

export default PaginaBraun;

// import { Container } from './styles';

function CardDaComida   ({src}:{src:string})  {

  return (
    <>
      <div className="CardDaComidaLaranja h-[16rem] w-full  relative ">
        <div className=" FOODeRECIPES h-[02rem] w-[15.90rem] left-[00.50rem] mt-6 absolute font-sans font-light">
          Food & Recipes
        </div>
        <div className=" h-[04rem] w-[15.90rem] mt-[02rem] left-[00.50rem] absolute top-[10%] font-sans ">
          Start the day your way. Breakfeast made just the way you like
        </div>
        <div className="bg-red-500 absolute h-[10rem] w-[10rem] top-[13%] right-[6%]">
          <img
            src={src}
            alt="imagem"
          />
        </div>

        <div className="absolute left-[00.50rem] h-[3rem] w-[3rem] top-[80%]">
          <button className=" text-gray-400 justify-center items-center bg-black hover:bg-white rounded-full h-[100%] w-[100%]">
            Next
          </button>
        </div>
      </div>
    </>
  );
};
