/// <reference types="astro/client" />
declare global {
  var myString: string;
  function myFunction(): boolean;
}

interface Window {
  myFunction: boolean;
}

export {};
